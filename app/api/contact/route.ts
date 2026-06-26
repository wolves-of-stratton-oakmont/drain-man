import { NextResponse } from "next/server";
import { parseContact, type ContactPayload } from "@/lib/contact-schema";
import { site } from "@/lib/site";

/**
 * POST /api/contact — booking / service-request endpoint.
 *
 * Direct email flow (NOT a live calendar):
 *   1. Validate the request body server-side (shared rules in lib/contact-schema).
 *   2. Send the clean payload to the company as a transactional email via the
 *      Mailjet Send API v3.1 (global fetch + HTTP Basic auth — no SDK).
 *
 * Mailjet credentials + addresses come from SERVER-side env vars
 * (`MAILJET_API_KEY`, `MAILJET_SECRET_KEY`, `MAILJET_FROM_EMAIL`; optional
 * `MAILJET_FROM_NAME`, `CONTACT_TO_EMAIL`). They are never sent to the browser
 * and must never be committed. See .env.example.
 *
 * If the required Mailjet vars are unset we DON'T silently accept the lead — we
 * log the (redacted) payload so it's recoverable and return a friendly 502 asking
 * the customer to call. Set the env vars to enable real delivery.
 *
 * The `From` address must be a Mailjet-verified sender on a domain you control
 * (SPF + DKIM) or mail will be rejected / land in spam.
 */

export const runtime = "nodejs";

function ok() {
  return NextResponse.json({ ok: true } as const);
}

function fail(error: string, status: number, errors?: Record<string, string>) {
  return NextResponse.json({ ok: false, error, errors } as const, { status });
}

export async function POST(request: Request) {
  // 1. Parse JSON safely.
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return fail("We couldn't read that request. Please try again.", 400);
  }

  // 2. Validate + normalize (also catches the honeypot).
  const result = parseContact(body);
  if (!result.ok) {
    // Honeypot trip: pretend it worked so bots get no signal. No email sent.
    if (result.spam) return ok();
    return fail(
      "Some details need a quick fix before we can send this.",
      422,
      result.errors as Record<string, string>,
    );
  }

  const payload = result.data;

  // 3. Send the lead as a transactional email via Mailjet (server-only config).
  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const fromEmail = process.env.MAILJET_FROM_EMAIL;

  // Not configured → never accept a lead we can't deliver. Log it (so it's
  // recoverable from the server logs) and ask the customer to call.
  if (!apiKey || !secretKey || !fromEmail) {
    console.error(
      "[contact] Mailjet not configured (need MAILJET_API_KEY, MAILJET_SECRET_KEY, MAILJET_FROM_EMAIL). Lead NOT emailed:",
      redactForLog(payload),
    );
    return fail(
      "Something went wrong sending your request. Please call us at (416) 699-1370 and we'll take care of it.",
      502,
    );
  }

  const fromName = process.env.MAILJET_FROM_NAME || site.legalName;
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  const source = "drainmaninc.com booking form";
  const submittedAt = new Date().toISOString();

  try {
    const res = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${apiKey}:${secretKey}`).toString("base64"),
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: fromEmail, Name: fromName },
            To: [{ Email: toEmail, Name: site.legalName }],
            Subject: `New booking request — ${payload.name}${
              payload.service ? ` (${payload.service})` : ""
            }`,
            TextPart: buildTextPart(payload, source, submittedAt),
            HTMLPart: buildHtmlPart(payload, source, submittedAt),
            // Reply-To the customer only when they left an email (it's optional).
            ...(payload.email
              ? { ReplyTo: { Email: payload.email, Name: payload.name } }
              : {}),
          },
        ],
      }),
      // Don't let a slow/hung API hold the request open forever.
      signal: AbortSignal.timeout(10_000),
    });

    // Mailjet returns HTTP 200 even when an individual message fails — inspect
    // the per-message Status so we never report a failed send as success.
    const data = (await res.json().catch(() => null)) as {
      Messages?: Array<{ Status?: string; Errors?: unknown }>;
    } | null;
    const status = data?.Messages?.[0]?.Status;

    if (!res.ok || status !== "success") {
      console.error(
        `[contact] Mailjet send failed. HTTP ${res.status}; message status:`,
        status ?? "(unparseable)",
        data?.Messages?.[0]?.Errors ?? "",
      );
      return fail(
        "Something went wrong sending your request. Please call us at (416) 699-1370 and we'll take care of it.",
        502,
      );
    }
  } catch (err) {
    console.error("[contact] Mailjet request failed:", err);
    return fail(
      "Something went wrong sending your request. Please call us at (416) 699-1370 and we'll take care of it.",
      502,
    );
  }

  return ok();
}

/** Trim the logged message so server logs stay readable; we keep contact info. */
function redactForLog(p: ContactPayload) {
  return {
    name: p.name,
    phone: p.phone,
    email: p.email,
    service: p.service,
    city: p.city,
    timing: p.timing,
    message: p.message.length > 140 ? `${p.message.slice(0, 140)}…` : p.message,
  };
}

/** Escape user-supplied text before interpolating into the HTML email. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Plain-text version of the lead email. Empty optional fields render as "—". */
function buildTextPart(p: ContactPayload, source: string, submittedAt: string) {
  const dash = (v: string) => (v ? v : "—");
  return [
    "New booking request from drainmaninc.com",
    "",
    `Name:    ${p.name}`,
    `Phone:   ${p.phone}`,
    `Email:   ${dash(p.email)}`,
    `Service: ${dash(p.service)}`,
    `City:    ${dash(p.city)}`,
    `Timing:  ${dash(p.timing)}`,
    "",
    "Message:",
    p.message,
    "",
    "---",
    `Source: ${source}`,
    `Submitted: ${submittedAt}`,
  ].join("\n");
}

/** HTML version of the lead email — every user value is escaped. */
function buildHtmlPart(p: ContactPayload, source: string, submittedAt: string) {
  const dash = (v: string) => (v ? escapeHtml(v) : "—");
  const row = (label: string, value: string) =>
    `<p style="margin:0 0 6px"><strong>${label}:</strong> ${value}</p>`;
  return [
    `<h2 style="margin:0 0 12px">New booking request</h2>`,
    row("Name", escapeHtml(p.name)),
    row("Phone", escapeHtml(p.phone)),
    row("Email", dash(p.email)),
    row("Service", dash(p.service)),
    row("City", dash(p.city)),
    row("Timing", dash(p.timing)),
    `<p style="margin:12px 0 4px"><strong>Message:</strong></p>`,
    `<p style="margin:0">${escapeHtml(p.message).replace(/\n/g, "<br>")}</p>`,
    `<hr style="margin:16px 0;border:none;border-top:1px solid #ddd">`,
    `<p style="margin:0;color:#666;font-size:12px">Source: ${escapeHtml(
      source,
    )} · Submitted: ${escapeHtml(submittedAt)}</p>`,
  ].join("\n");
}

// Anything other than POST gets a clear 405.
export function GET() {
  return fail("Use POST to submit a booking request.", 405);
}

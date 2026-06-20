import { NextResponse } from "next/server";
import { parseContact, type ContactPayload } from "@/lib/contact-schema";

/**
 * POST /api/contact — booking / service-request endpoint.
 *
 * Simple webhook-to-email flow (NOT a live calendar):
 *   1. Validate the request body server-side (shared rules in lib/contact-schema).
 *   2. Forward the clean payload to a webhook that emails the company.
 *
 * The webhook URL is read from the SERVER-side env var `CONTACT_WEBHOOK_URL`
 * (e.g. a Zapier / Make / Formspree "Catch Hook" that emails admin@drainmaninc.com).
 * It is never sent to the browser and must never be committed. See .env.example.
 *
 * DEV / not-yet-wired behavior: if `CONTACT_WEBHOOK_URL` is unset, we DON'T fail —
 * we log the payload to the server console and return a friendly success so the form
 * is fully usable before the client wires up their webhook. (No email is sent.)
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

  // 3. Forward to the email webhook (if configured).
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    // Not wired yet — keep the form working in dev. Log so the request isn't lost.
    console.warn(
      "[contact] CONTACT_WEBHOOK_URL is not set — no email sent. Request payload:",
      redactForLog(payload),
    );
    return ok();
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        source: "drainmaninc.com booking form",
        submittedAt: new Date().toISOString(),
      }),
      // Don't let a slow/hung webhook hold the request open forever.
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error(
        `[contact] Webhook responded ${res.status}. The request was not emailed.`,
      );
      return fail(
        "Something went wrong sending your request. Please call us at (416) 699-1370 and we'll take care of it.",
        502,
      );
    }
  } catch (err) {
    console.error("[contact] Webhook request failed:", err);
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

// Anything other than POST gets a clear 405.
export function GET() {
  return fail("Use POST to submit a booking request.", 405);
}

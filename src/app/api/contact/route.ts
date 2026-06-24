// POST /api/contact — estimate/contact form endpoint.
//
// Architect provided the validated stub (request parsing + the §6 response
// contract). Closer owns the DELIVERY of a valid lead. The validation and the
// 200 `{ok:true}` / 400 `{ok:false, errors}` contract below are unchanged so the
// EstimateForm keeps working exactly as built.
//
// Next 16 Route Handler: `export async function POST(request: Request)`,
// returning JSON via NextResponse.json(...). File lives at app/api/contact/route.ts.
// This handler is dynamic (it reads the request body), so it is never cached.
//
// Contract (request body, JSON):
//   { name, phone, email?, address?, service?, message? }
// Response:
//   200 { ok: true }                                   on success
//   400 { ok: false, errors: Record<field,string> }    on validation failure
//
// ── DELIVERY (how a real lead reaches the shop) ────────────────────────────────
// We keep this dependency-light and secret-free. Delivery is chosen at runtime
// from environment variables — nothing is hardcoded, and the endpoint always
// returns {ok:true} once validation passes so the homeowner never sees a failure
// just because email isn't configured yet:
//
//   1. CONTACT_WEBHOOK_URL  — if set, we POST the lead as JSON to that URL
//      (works with Zapier/Make/n8n, a CRM intake hook, a Slack/Discord webhook,
//      or your own endpoint). This is the zero-dependency default. Enable it with:
//        echo 'CONTACT_WEBHOOK_URL="https://hooks.zapier.com/…"' >> .env.local
//
//   2. RESEND_API_KEY (+ CONTACT_TO_EMAIL, optional CONTACT_FROM_EMAIL) — if set,
//      we email the lead via Resend's HTTP API (https://resend.com) using fetch,
//      so there is still no npm dependency to install. Enable it with:
//        echo 'RESEND_API_KEY="re_…"'                  >> .env.local
//        echo 'CONTACT_TO_EMAIL="office@thedrainman.ca"' >> .env.local
//        # optional (must be a Resend-verified sender; defaults to onboarding@resend.dev):
//        echo 'CONTACT_FROM_EMAIL="website@thedrainman.ca"' >> .env.local
//      (To use Resend's official SDK instead, `npm i resend` and swap sendViaResend
//       for `new Resend(process.env.RESEND_API_KEY).emails.send({...})`.)
//
//   3. Neither set — we log the lead server-side (visible in the dev console and
//      in production server logs) and still return {ok:true}. This keeps the form
//      functional out of the box; just wire option 1 or 2 before launch.
//
// Delivery never blocks the user-facing success: if a configured provider errors,
// we log it server-side and STILL return {ok:true} (the homeowner is told a real
// plumber will call back — we don't surface infra failures to them).

import { NextResponse } from "next/server";
import { SERVICE_SLUGS } from "@/data/services";
import { site } from "@/lib/site";

// This handler must run per-request (it reads the body); never prerender/cache it.
export const dynamic = "force-dynamic";

export interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  service?: string;
  message?: string;
}

/** A submission that has passed validation (required fields guaranteed). */
interface CleanLead {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  service?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: ContactPayload): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!body.name || body.name.trim().length < 2) {
    errors.name = "Add your name so we know who we're calling back.";
  }
  if (!body.phone || body.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Add a phone number so we can call you back.";
  }
  if (body.email && !EMAIL_RE.test(body.email)) {
    errors.email = "That email doesn't look right — mind checking it?";
  }
  if (body.service && !SERVICE_SLUGS.includes(body.service)) {
    errors.service = "Pick a service from the list.";
  }
  return errors;
}

/** Normalize a validated body into a clean lead (trim, drop empties). */
function toLead(body: ContactPayload): CleanLead {
  const opt = (v?: string) => {
    const t = v?.trim();
    return t ? t : undefined;
  };
  return {
    name: body.name!.trim(),
    phone: body.phone!.trim(),
    email: opt(body.email),
    address: opt(body.address),
    service: opt(body.service),
    message: opt(body.message),
  };
}

/** Human-readable service label for the slug, for the notification body. */
function serviceLabel(slug?: string): string {
  if (!slug) return "Not specified";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/* ── Delivery channels ─────────────────────────────────────────────────────── */

/** POST the lead as JSON to a generic webhook (Zapier/Make/CRM/Slack/etc.). */
async function sendToWebhook(url: string, lead: CleanLead): Promise<void> {
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "thedrainman.ca contact form",
      receivedAt: new Date().toISOString(),
      ...lead,
      serviceLabel: serviceLabel(lead.service),
    }),
  });
}

/** Email the lead via Resend's HTTP API (no SDK dependency). */
async function sendViaResend(apiKey: string, lead: CleanLead): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  // Resend requires a verified sender domain; their shared sandbox sender works
  // for testing until the real domain is verified.
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  const lines = [
    `Name:    ${lead.name}`,
    `Phone:   ${lead.phone}`,
    `Email:   ${lead.email ?? "—"}`,
    `Address: ${lead.address ?? "—"}`,
    `Service: ${serviceLabel(lead.service)}`,
    "",
    "Message:",
    lead.message ?? "(none)",
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `The Drain Man Website <${from}>`,
      to: [to],
      reply_to: lead.email,
      subject: `New estimate request — ${lead.name} (${serviceLabel(lead.service)})`,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend responded ${res.status}: ${detail}`);
  }
}

/**
 * Deliver the lead via whichever channel is configured. Errors are caught and
 * logged by the caller; delivery failure must NOT fail the user-facing request.
 */
async function deliver(lead: CleanLead): Promise<void> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;

  if (webhookUrl) {
    await sendToWebhook(webhookUrl, lead);
    return;
  }
  if (resendKey) {
    await sendViaResend(resendKey, lead);
    return;
  }

  // No provider configured: log so the lead is visible in dev + server logs.
  // (Phone/name/service only at info level; full lead at debug to avoid noisy
  //  logs of message bodies in production.)
  console.info("[contact] new estimate request (no delivery channel set)", {
    name: lead.name,
    phone: lead.phone,
    service: serviceLabel(lead.service),
  });
  console.debug("[contact] full lead", lead);
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "We couldn't read that submission." } },
      { status: 400 },
    );
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const lead = toLead(body);

  try {
    await deliver(lead);
  } catch (err) {
    // Delivery failed (webhook/email provider down or misconfigured). Don't make
    // the homeowner pay for our infra problem — log it for us and still succeed.
    // The lead is preserved in the server log so nothing is silently lost.
    console.error("[contact] delivery failed; lead preserved in logs", {
      name: lead.name,
      phone: lead.phone,
      service: serviceLabel(lead.service),
      error: err instanceof Error ? err.message : String(err),
    });
  }

  return NextResponse.json({ ok: true });
}

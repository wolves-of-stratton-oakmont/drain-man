/**
 * Shared validation for the booking / contact request form.
 *
 * Hand-rolled (no external schema lib) so the exact same rules run on the client
 * (instant inline errors) and on the server (`app/api/contact/route.ts`). Keep this
 * the single source of truth for field names, the service list, and messages.
 */

/** Service options shown in the form's "What do you need help with?" select.
 *  Order: everyday/simple items first (client priority), then the core categories. */
export const SERVICE_OPTIONS = [
  "Blocked toilet",
  "Blocked sink",
  "Blocked drains",
  "Repiping",
  "Drain services (camera, cleanout, repair)",
  "Flood prevention (backwater valve)",
  "Power flushing",
  "Something else / not sure",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

/** Preferred callback windows — plain language, optional field. */
export const TIMING_OPTIONS = [
  "As soon as possible",
  "Morning (8am–12pm)",
  "Afternoon (12pm–5pm)",
  "Evening (after 5pm)",
] as const;

export type TimingOption = (typeof TIMING_OPTIONS)[number];

/** The shape the form collects and the API forwards. */
export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  timing: string;
  message: string;
  /** Anti-spam honeypot — must stay empty. Never shown to people. */
  company?: string;
}

/** Field-keyed error map. Absent key = that field is valid. */
export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

export const FIELD_LIMITS = {
  name: { min: 2, max: 80 },
  phone: { min: 7, max: 30 },
  email: { max: 120 },
  city: { max: 80 },
  message: { min: 10, max: 1200 },
} as const;

// Pragmatic email check: something@something.tld — strict enough to catch typos,
// loose enough not to reject valid addresses.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Phone: at least 7 digits once you strip spaces, dashes, parens, dots, leading +.
const PHONE_DIGITS_RE = /\d/g;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Validate one field's current value. Returns an error string, or `undefined`
 * when valid. Used for both live (on-blur/change) and full-form validation.
 */
export function validateField(
  field: keyof ContactPayload,
  value: unknown,
): string | undefined {
  const v = clean(value);

  switch (field) {
    case "name":
      if (!v) return "Enter your name so we know who to ask for.";
      if (v.length < FIELD_LIMITS.name.min) return "Enter your full name.";
      if (v.length > FIELD_LIMITS.name.max) return "That name is too long.";
      return undefined;

    case "phone": {
      if (!v) return "Add a phone number — it's the fastest way we reach you.";
      const digits = (v.match(PHONE_DIGITS_RE) || []).length;
      if (digits < FIELD_LIMITS.phone.min)
        return "Enter a phone number we can call back, including the area code.";
      if (v.length > FIELD_LIMITS.phone.max) return "That number looks too long.";
      return undefined;
    }

    case "email":
      if (!v) return "Add an email so we can confirm your request.";
      if (!EMAIL_RE.test(v)) return "Check this email — it's missing an @ or a domain.";
      if (v.length > FIELD_LIMITS.email.max) return "That email is too long.";
      return undefined;

    case "service":
      if (!v) return "Pick what you need help with.";
      if (!SERVICE_OPTIONS.includes(v as ServiceOption))
        return "Pick one of the listed services.";
      return undefined;

    case "city":
      // Optional. Only guard against absurd input.
      if (v.length > FIELD_LIMITS.city.max) return "That's too long for a city.";
      return undefined;

    case "timing":
      // Optional; if present it must be a known window.
      if (v && !TIMING_OPTIONS.includes(v as TimingOption))
        return "Pick one of the listed times.";
      return undefined;

    case "message":
      if (!v) return "Tell us what's going on so we send the right person.";
      if (v.length < FIELD_LIMITS.message.min)
        return "Add a little more detail — what's backing up, leaking, or blocked?";
      if (v.length > FIELD_LIMITS.message.max)
        return "That's a lot of detail — please shorten it a little.";
      return undefined;

    default:
      return undefined;
  }
}

/** Fields a person must fill in. (city + timing are optional; company is the trap.) */
export const REQUIRED_FIELDS: (keyof ContactPayload)[] = [
  "name",
  "phone",
  "email",
  "service",
  "message",
];

/** Run every rule. Returns a (possibly empty) error map. */
export function validateContact(data: Partial<ContactPayload>): ContactErrors {
  const errors: ContactErrors = {};
  const fields: (keyof ContactPayload)[] = [
    "name",
    "phone",
    "email",
    "service",
    "city",
    "timing",
    "message",
  ];
  for (const field of fields) {
    const error = validateField(field, data[field]);
    if (error) errors[field] = error;
  }
  return errors;
}

/**
 * Normalize + validate an unknown request body on the server.
 * - Returns `{ ok: true, data }` with trimmed, typed values when valid.
 * - Returns `{ ok: false, errors }` when not (including a silent honeypot trip).
 */
export function parseContact(
  body: unknown,
):
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: ContactErrors; spam?: boolean } {
  const raw = (body ?? {}) as Record<string, unknown>;

  // Honeypot: real people never fill `company`. Treat as spam, fail quietly.
  if (clean(raw.company)) {
    return { ok: false, errors: {}, spam: true };
  }

  const data: ContactPayload = {
    name: clean(raw.name),
    phone: clean(raw.phone),
    email: clean(raw.email),
    service: clean(raw.service),
    city: clean(raw.city),
    timing: clean(raw.timing),
    message: clean(raw.message),
  };

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return { ok: true, data };
}

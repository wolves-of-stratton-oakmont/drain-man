"use client";

import * as React from "react";
import { CheckCircle2, Loader2, Phone } from "lucide-react";
import { Button, Input, Label, Textarea } from "@/components/ui";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import {
  validateContact,
  validateField,
  type ContactErrors,
  type ContactPayload,
} from "@/lib/contact-schema";

type FieldName = keyof ContactPayload;
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: ContactPayload = {
  name: "",
  phone: "",
  email: "",
  service: "",
  city: "",
  timing: "",
  message: "",
  company: "",
};

/** Order errors get focused/announced in — matches reading order. */
const FIELD_ORDER: FieldName[] = ["name", "phone", "email", "message"];

export interface BookingFormProps {
  className?: string;
}

export function BookingForm({ className }: BookingFormProps) {
  const [values, setValues] = React.useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = React.useState<ContactErrors>({});
  // Only show a field's error once it's been touched or a submit was attempted.
  const [touched, setTouched] = React.useState<Partial<Record<FieldName, boolean>>>(
    {},
  );
  const [status, setStatus] = React.useState<Status>("idle");
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const formRef = React.useRef<HTMLFormElement>(null);
  const successRef = React.useRef<HTMLDivElement>(null);
  const errorSummaryRef = React.useRef<HTMLParagraphElement>(null);

  // Move focus to the success message when the request goes through.
  React.useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function setField(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    // If a field already has a visible error, re-check it live as they fix it.
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  }

  function handleBlur(field: FieldName) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, values[field]) }));
  }

  function focusField(field: FieldName) {
    const el = formRef.current?.elements.namedItem(field);
    if (el instanceof HTMLElement) el.focus();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setTouched({ name: true, phone: true, email: true, message: true });

    const firstBad = FIELD_ORDER.find((f) => nextErrors[f]);
    if (firstBad) {
      focusField(firstBad);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: { ok: boolean; error?: string; errors?: ContactErrors } =
        await res.json().catch(() => ({ ok: false }));

      if (res.ok && data.ok) {
        setStatus("success");
        return;
      }

      // Server caught a validation issue we missed — surface it inline.
      if (data.errors && Object.keys(data.errors).length > 0) {
        setErrors(data.errors);
        const firstServerBad = FIELD_ORDER.find((f) => data.errors?.[f]);
        if (firstServerBad) focusField(firstServerBad);
      }
      setStatus("error");
      setSubmitError(
        data.error ??
          `Something went wrong sending your request. Please call us at ${site.phone.display}.`,
      );
      window.requestAnimationFrame(() => errorSummaryRef.current?.focus());
    } catch {
      setStatus("error");
      setSubmitError(
        `We couldn't reach our server. Check your connection, or call us at ${site.phone.display}.`,
      );
      window.requestAnimationFrame(() => errorSummaryRef.current?.focus());
    }
  }

  // ---- Success state: a clear, warm confirmation; no form noise. ----
  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-water-line bg-white p-7 shadow-[var(--shadow-sm)] md:p-9",
          className,
        )}
      >
        <div
          ref={successRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className="outline-none"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue/10 text-blue">
            <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-display text-h3 font-extrabold text-ink">
            Request sent — we&apos;ll call you back.
          </h3>
          <p className="mt-2 max-w-[48ch] text-base leading-relaxed text-ink/80">
            Thanks, {firstName(values.name)}. A real person from the family will call
            to confirm a time and walk you through what to expect — no deposit, and
            we&apos;ll go over the rate up front, not at the front door.
          </p>
          <p className="mt-4 text-sm text-steel">
            Backed up right now and can&apos;t wait? Call us directly.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="primary" size="md">
              <a href={site.phone.href}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {site.phone.display}
              </a>
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="md"
              onClick={() => {
                setValues(EMPTY);
                setErrors({});
                setTouched({});
                setSubmitError(null);
                setStatus("idle");
              }}
            >
              Send another request
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={submitError ? "booking-form-error" : undefined}
      className={cn(
        "rounded-2xl border border-water-line bg-white p-6 shadow-[var(--shadow-sm)] md:p-8",
        className,
      )}
    >
      <fieldset disabled={submitting} className="space-y-5">
        {/* Honeypot — hidden from people + assistive tech, catches bots. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="company">Company (leave blank)</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={(e) => setField("company", e.target.value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Field
            id="name"
            label="Name"
            required
            error={touched.name ? errors.name : undefined}
          >
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="First and last name"
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              aria-required="true"
              {...invalidProps("name", touched, errors)}
            />
          </Field>

          <Field
            id="phone"
            label="Phone"
            required
            error={touched.phone ? errors.phone : undefined}
          >
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(416) 555-0123"
              value={values.phone}
              onChange={(e) => setField("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              aria-required="true"
              {...invalidProps("phone", touched, errors)}
            />
          </Field>

          <Field
            id="email"
            label="Email"
            hint="Optional"
            error={touched.email ? errors.email : undefined}
          >
            <Input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@email.com"
              value={values.email}
              onChange={(e) => setField("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              {...invalidProps("email", touched, errors)}
            />
          </Field>
        </div>

        <Field
          id="message"
          label="What's going on?"
          required
          hint="What's backing up, leaking, or blocked"
          error={touched.message ? errors.message : undefined}
        >
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="e.g. The basement floor drain backs up when we run the laundry."
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            aria-required="true"
            {...invalidProps("message", touched, errors)}
          />
        </Field>
      </fieldset>

      {submitError && (
        <p
          id="booking-form-error"
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-5 rounded-xl border border-alert/30 bg-alert/5 px-4 py-3 text-sm text-ink outline-none"
        >
          <span className="font-semibold text-alert">Couldn&apos;t send. </span>
          {submitError}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* text-white + whitespace-nowrap guard the primary CTA against the
            cn()/tailwind-merge font-size↔color collision (see lib/utils.ts). */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
          className="w-full whitespace-nowrap text-white sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending request…
            </>
          ) : (
            "Request a callback"
          )}
        </Button>
        <p className="text-sm text-steel">
          No deposit. We confirm the rate up front, not at the front door.
        </p>
      </div>
    </form>
  );
}

function firstName(full: string) {
  const name = full.trim().split(/\s+/)[0];
  return name || "there";
}

/** Build aria-invalid + aria-describedby only when a touched field has an error. */
function invalidProps(
  field: FieldName,
  touched: Partial<Record<FieldName, boolean>>,
  errors: ContactErrors,
) {
  const showError = Boolean(touched[field] && errors[field]);
  return {
    "aria-invalid": showError ? (true as const) : undefined,
    "aria-describedby": showError ? `${field}-error` : undefined,
  };
}

// ---- Small presentational helpers ----

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
        {hint && !error && (
          <span className="text-sm text-steel/80">{hint}</span>
        )}
      </div>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-alert">
          {error}
        </p>
      )}
    </div>
  );
}

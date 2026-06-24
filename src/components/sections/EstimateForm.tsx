/**
 * EstimateForm (ARCHITECTURE §4.20; DESIGN-BRIEF §6.12; CONTENT §9).
 *
 * Bordered white card (rounded-lg, shadow-lg when floating). Fields with mono
 * 13px uppercase labels above teal-focus inputs: NAME, PHONE, EMAIL,
 * ADDRESS/CITY, SERVICE NEEDED (select from SERVICE_SELECT_OPTIONS), HOW CAN WE
 * HELP? (textarea). In-voice client validation, then POSTs JSON to /api/contact.
 * On ok:true → success message; on 400 → map errors[field] under each input.
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SERVICE_SELECT_OPTIONS } from "@/data/services";
import { site } from "@/lib/site";

export interface EstimateFormProps {
  floating?: boolean;
  className?: string;
  /** preselect a service slug (e.g. from a service detail page). */
  defaultService?: string;
  /** heading rendered above the fields. */
  heading?: string;
}

type Fields = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields | "form", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** In-voice client validation mirroring the server contract (CONTENT §9). */
function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name || values.name.trim().length < 2) {
    errors.name = "Add your name so we know who we're calling back.";
  }
  if (!values.phone || values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Add a phone number so we can call you back.";
  }
  if (values.email && !EMAIL_RE.test(values.email)) {
    errors.email = "That email doesn't look right — mind checking it?";
  }
  return errors;
}

const EMPTY: Fields = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  message: "",
};

const labelClass =
  "font-mono text-eyebrow uppercase tracking-[0.12em] text-steel";
const fieldBase =
  "w-full rounded-md border-[1.5px] bg-white px-[14px] py-[11px] text-body text-ink " +
  "placeholder:text-steel/70 transition-colors duration-200 " +
  "focus-visible:border-teal";

export function EstimateForm({
  floating = false,
  className,
  defaultService = "",
  heading = "Request your free estimate",
}: EstimateFormProps) {
  const [values, setValues] = React.useState<Fields>({
    ...EMPTY,
    service: defaultService,
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const errorSummaryRef = React.useRef<HTMLDivElement | null>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    // clear a field's error as the user corrects it
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clientErrors = validate(values);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      // move focus to the first invalid field
      requestAnimationFrame(() => {
        const first = Object.keys(clientErrors)[0];
        document.getElementById(`ef-${first}`)?.focus();
      });
      return;
    }

    setStatus("submitting");
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim() || undefined,
          address: values.address.trim() || undefined,
          service: values.service || undefined,
          message: values.message.trim() || undefined,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: Errors;
      };
      if (res.ok && data.ok) {
        setStatus("success");
        return;
      }
      // 400 → map field errors
      setStatus("idle");
      setErrors(
        data.errors ?? {
          form: "Something went wrong sending that. Please call us instead.",
        },
      );
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
    } catch {
      setStatus("idle");
      setErrors({
        form: "We couldn't reach the server. Please call (416) 699-1370.",
      });
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
    }
  }

  const cardClass = cn(
    "rounded-lg border border-mortar bg-white p-6 md:p-7",
    floating ? "shadow-lg" : "shadow-sm",
    className,
  );

  if (status === "success") {
    return (
      <div className={cardClass}>
        <div className="flex flex-col items-start gap-4">
          <span className="grid size-[48px] place-items-center rounded-full bg-amber-soft text-teal">
            <Icon name="check" size={26} title="Submitted" />
          </span>
          <h2 className="font-display text-h3 font-bold text-ink">
            Thanks — we&apos;ve got it.
          </h2>
          <p className="text-body text-steel">
            A member of the Drain Man team will call you back shortly. If
            it&apos;s urgent, call us now at{" "}
            <a
              href={`tel:${site.phoneTel}`}
              className="font-semibold text-teal link-underline"
            >
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className={cardClass} onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-5">
        <h2 className="font-display text-h3 font-bold text-ink">{heading}</h2>

        {errors.form ? (
          <div
            ref={errorSummaryRef}
            tabIndex={-1}
            role="alert"
            className="rounded-md border border-emergency/30 bg-emergency/5 px-4 py-3 text-small text-emergency"
          >
            {errors.form}
          </div>
        ) : null}

        {/* NAME + PHONE row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="ef-name"
            label="Name"
            required
            error={errors.name}
            value={values.name}
            onChange={(v) => update("name", v)}
            autoComplete="name"
            placeholder="Your name"
          />
          <Field
            id="ef-phone"
            label="Phone"
            required
            type="tel"
            error={errors.phone}
            value={values.phone}
            onChange={(v) => update("phone", v)}
            autoComplete="tel"
            placeholder="(416) 555-0123"
          />
        </div>

        {/* EMAIL + ADDRESS row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="ef-email"
            label="Email"
            type="email"
            error={errors.email}
            value={values.email}
            onChange={(v) => update("email", v)}
            autoComplete="email"
            placeholder="you@example.com"
          />
          <Field
            id="ef-address"
            label="Address / City"
            error={errors.address}
            value={values.address}
            onChange={(v) => update("address", v)}
            autoComplete="address-level2"
            placeholder="Street or city"
          />
        </div>

        {/* SERVICE select */}
        <div className="flex flex-col gap-2">
          <label htmlFor="ef-service" className={labelClass}>
            Service Needed
          </label>
          <div className="relative">
            <select
              id="ef-service"
              value={values.service}
              onChange={(e) => update("service", e.target.value)}
              className={cn(
                fieldBase,
                "appearance-none pr-10",
                values.service ? "text-ink" : "text-steel/70",
                errors.service ? "border-emergency" : "border-mortar-2",
              )}
            >
              <option value="">Select a service (optional)</option>
              {SERVICE_SELECT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <Icon
              name="chevron-down"
              size={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-steel"
            />
          </div>
        </div>

        {/* MESSAGE textarea */}
        <div className="flex flex-col gap-2">
          <label htmlFor="ef-message" className={labelClass}>
            How can we help?
          </label>
          <textarea
            id="ef-message"
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            rows={4}
            placeholder="Tell us what's going on — a backed-up drain, a wet basement, no hot water…"
            className={cn(fieldBase, "resize-y border-mortar-2")}
          />
        </div>

        <Button type="submit" variant="amber" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request my estimate"}
        </Button>

        <p className="text-small text-steel">
          No deposit required. We&apos;ll confirm your upfront price before any
          work begins.
        </p>
      </div>
    </form>
  );
}

/* ----------------------------- a text field ----------------------------- */
interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  error,
  placeholder,
  autoComplete,
}: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? (
          <span className="text-amber" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldBase, error ? "border-emergency" : "border-mortar-2")}
      />
      {error ? (
        <p id={errorId} className="text-small text-emergency">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default EstimateForm;

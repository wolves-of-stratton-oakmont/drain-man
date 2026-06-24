/**
 * ServiceDetailParts.tsx — page-local building blocks for the service detail
 * template (Pipefitter; DESIGN-BRIEF §8.8). These compose Forge primitives
 * (Icon, Button, Eyebrow) into the detail-page sections; they live in the
 * Pipefitter-owned route folder and are not shared library components.
 *
 * Server components (no interactivity). Spacing override (ARCHITECTURE §3.4):
 * icon boxes use arbitrary px sizes (size-[40px] etc.), amber buttons use
 * text-iron, every phone links tel:+14166991370.
 */

import * as React from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { site, CTA } from "@/lib/site";
import type { HowStep } from "./howWeDoIt";

/* ---------------------------------------------------------------------------
   Sticky "Get this fixed" rail (overview right column).
   --------------------------------------------------------------------------- */
export function GetThisFixedCard({ serviceName }: { serviceName: string }) {
  return (
    <aside
      aria-label={`Get ${serviceName} fixed`}
      className="rounded-lg border border-mortar bg-white p-6 shadow-sm lg:sticky lg:top-[112px]"
    >
      <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-ember">
        Get this fixed
      </p>
      <p className="mt-3 text-h4 font-display font-semibold text-ink text-balance">
        A real plumber, an upfront price.
      </p>

      <div className="mt-5 flex flex-col gap-3">
        <Button
          variant="amber"
          href={`tel:${site.phoneTel}`}
          icon="phone"
          className="w-full"
        >
          {CTA.phone}
        </Button>
        <Button
          variant="outline"
          href="/contact"
          className="w-full border-iron text-iron"
        >
          {CTA.estimate}
        </Button>
      </div>

      {/* spec lines — the work-order voice */}
      <ul className="mt-6 flex flex-col gap-3 border-t border-mortar pt-5">
        <li className="flex items-center gap-3">
          <Icon name="no-deposit" size={20} className="shrink-0 text-teal" />
          <span className="font-mono text-small uppercase tracking-[0.08em] text-steel">
            No deposit · Upfront price
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="clock" size={20} className="mt-px shrink-0 text-teal" />
          <span className="text-small text-steel">
            {site.hours.weekdays}
            <br />
            <span className="font-mono uppercase tracking-[0.08em] text-ember">
              {site.hours.emergency}
            </span>
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="shield-check" size={20} className="shrink-0 text-teal" />
          <span className="text-small text-steel">{site.credentials}</span>
        </li>
      </ul>
    </aside>
  );
}

/* ---------------------------------------------------------------------------
   "What's included" checklist (custom check icon).
   --------------------------------------------------------------------------- */
export function ScopeChecklist({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-px grid size-[28px] shrink-0 place-items-center rounded-md bg-amber-soft text-teal"
            aria-hidden="true"
          >
            <Icon name="check" size={18} />
          </span>
          <span className="text-body text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------------------------
   "Signs you need this" list (amber alert-style icon), 2-col.
   --------------------------------------------------------------------------- */
export function SignsList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 border-l-2 border-amber/70 pl-4"
        >
          <Icon
            name="alert"
            size={22}
            className="mt-px shrink-0 text-amber"
          />
          <span className="text-body text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------------------------
   "How we do it" — tailored numbered steps (a real sequence → numbering means
   something, §6.14 / §1.4). Outlined Archivo numerals + trade icon per step.
   --------------------------------------------------------------------------- */
export function HowWeDoItSteps({ steps }: { steps: HowStep[] }) {
  return (
    <ol className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <span
              className="font-display text-[clamp(36px,5vw,52px)] font-extrabold leading-none tracking-[-0.02em] text-transparent"
              style={{ WebkitTextStroke: "1.5px var(--color-amber)" }}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className="mt-1 grid size-[40px] shrink-0 place-items-center rounded-md bg-shallow text-teal"
              aria-hidden="true"
            >
              <Icon name={step.icon} size={22} />
            </span>
          </div>
          <h3 className="font-display text-h4 font-semibold text-ink">
            <span className="sr-only">Step {i + 1}: </span>
            {step.title}
          </h3>
          <p className="text-body text-steel">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

// EMERGENCY (/emergency) — Architect-owned solid stub (DESIGN-BRIEF §8.13, CONTENT §10).
// Functional, on-brand, conversion-focused. May be enhanced with full components
// (CTABand amber variant, ProcessSteps) once Forge's library lands.

import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "24/7 Emergency Plumber Toronto & GTA | Drain Man" },
  description:
    "Burst pipe, sewer backup or flooded basement? Call (416) 699-1370 — a real Toronto plumber answers 24/7. Upfront pricing, no deposit.",
  alternates: { canonical: "/emergency" },
  openGraph: {
    images: [{ url: "/images/og/og-emergency.jpg", width: 1200, height: 630 }],
  },
};

const EMERGENCIES = [
  "Burst or leaking pipes",
  "Frozen pipes",
  "Sewer backups",
  "Flooded basements",
  "Overflowing toilets and fixtures",
  "No water or no hot water",
  "Failed sump pumps during a storm",
];

const WHAT_TO_DO = [
  {
    title: "Shut off the water.",
    body: "Use the valve at the fixture, or your home's main shut-off (usually in the basement where the water line enters).",
  },
  {
    title: "Kill the power if water is near outlets or your panel",
    body: "— only if you can do it safely.",
  },
  {
    title: "Stop using water",
    body: "if it's a sewer backup, so nothing else drains into the problem.",
  },
  {
    title: `Call ${site.phoneDisplay}.`,
    body: "We'll guide you from there and get a plumber on the way.",
  },
];

export default function EmergencyPage() {
  return (
    <>
      {/* Hero (dark, urgent but calm) */}
      <section className="bg-iron text-on-dark">
        <div className="mx-auto max-w-container px-[var(--gutter)] py-10">
          <span className="inline-block rounded-pill bg-emergency px-3 py-1 font-mono text-eyebrow font-semibold uppercase tracking-[0.12em] text-white">
            24/7 Emergency
          </span>
          <h1 className="mt-5 max-w-[20ch] font-display text-display font-extrabold text-white">
            Flooded basement? Backed-up drain? We answer the phone.
          </h1>
          <p className="mt-4 max-w-[60ch] text-lead text-on-dark-mut">
            Day, night, weekend or holiday — call {site.phoneDisplay} and reach a
            real Toronto plumber, not a voicemail. We&apos;ll talk you through it
            and get someone out fast, with an upfront price even in an emergency.
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-7 inline-block rounded-md bg-amber px-7 py-4 font-display text-h4 font-bold text-iron"
          >
            {site.phoneDisplay}
          </a>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-eyebrow uppercase tracking-[0.14em] text-teal-bright">
            <li>Real plumber answers</li>
            <li>GTA-wide</li>
            <li>Upfront price</li>
            <li>No deposit</li>
          </ul>
        </div>
      </section>

      {/* What we handle */}
      <section className="mx-auto max-w-container px-[var(--gutter)] py-9">
        <h2 className="font-display text-h2 font-bold">
          Emergencies we handle, day or night
        </h2>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-body">
          {EMERGENCIES.map((e) => (
            <li key={e} className="text-ink">
              {e}
            </li>
          ))}
        </ul>
      </section>

      {/* What to do right now */}
      <section className="bg-shallow">
        <div className="mx-auto max-w-container-prose px-[var(--gutter)] py-9">
          <h2 className="font-display text-h2 font-bold">
            While you wait, here&apos;s what to do
          </h2>
          <ol className="mt-5 space-y-4">
            {WHAT_TO_DO.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="font-mono text-h3 font-semibold text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-body">
                  <strong className="font-semibold">{step.title}</strong>{" "}
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why call us */}
      <section className="mx-auto max-w-container-prose px-[var(--gutter)] py-9">
        <p className="text-lead text-steel">
          Fifty-four years, master-licensed, family-owned, and honest even at
          2am. We fix the problem properly — not just a patch to get off the
          phone.
        </p>
      </section>

      {/* CTA band (amber) */}
      <section className="bg-amber">
        <div className="mx-auto flex max-w-container flex-col items-center gap-4 px-[var(--gutter)] py-9 text-center">
          <h2 className="font-display text-h2 font-extrabold text-iron">
            Don&apos;t wait it out. Call {site.phoneDisplay} now.
          </h2>
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-md bg-iron px-7 py-4 font-display text-h4 font-bold text-concrete"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

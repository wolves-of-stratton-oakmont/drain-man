// FINANCING (/financing) — Architect-owned solid stub (DESIGN-BRIEF §8.14, CONTENT §11).
// Enercare rentals/protection plans + no-deposit promise + generic payment options.

import type { Metadata } from "next";
import Link from "next/link";
import { site, CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Financing & Enercare Rentals | No Deposit | Drain Man" },
  description:
    "Flexible payment, no deposit to start, and Enercare water-heater rentals & protection plans through The Drain Man Inc. in Toronto.",
  alternates: { canonical: "/financing" },
};

export default function FinancingPage() {
  return (
    <>
      <section className="mx-auto max-w-container px-[var(--gutter)] py-10">
        <p className="eyebrow">— Payment &amp; Enercare</p>
        <h1 className="mt-4 font-display text-h1 font-extrabold">
          Flexible options, no deposit to start.
        </h1>
        <p className="mt-4 max-w-[62ch] text-lead text-steel">
          Honest pricing doesn&apos;t mean you have to pay it all at once.
          Here&apos;s how we keep the work affordable — starting with no deposit,
          ever.
        </p>
      </section>

      {/* No-deposit block */}
      <section className="bg-shallow">
        <div className="mx-auto max-w-container-prose px-[var(--gutter)] py-9">
          <h2 className="font-display text-h3 font-bold">No deposit, period.</h2>
          <p className="mt-3 text-body">
            You don&apos;t pay anything to get started or to book the work. You
            pay when the job is done and you&apos;re satisfied.
          </p>
        </div>
      </section>

      {/* Enercare panel */}
      <section className="mx-auto max-w-container-prose px-[var(--gutter)] py-9">
        <h2 className="font-display text-h2 font-bold">
          Enercare rentals &amp; protection plans
        </h2>
        <p className="mt-3 text-body">
          As an authorized Enercare partner, we can set you up with a water heater
          (tank or tankless) or home-system protection plan through Enercare —
          covered equipment and maintenance without a large upfront purchase. Ask
          us which makes sense for your home.
        </p>
        <Link
          href="/services/water-heaters"
          className="link-underline mt-4 inline-block font-semibold text-teal"
        >
          See water heaters →
        </Link>
      </section>

      {/* Payment options */}
      <section className="mx-auto max-w-container-prose px-[var(--gutter)] py-9">
        <h2 className="font-display text-h2 font-bold">Ways to pay</h2>
        <p className="mt-3 text-body">
          We accept standard payment methods and will always confirm your total
          upfront. For larger jobs like waterproofing or excavation, ask about
          available payment arrangements — we&apos;ll be straight with you about
          what&apos;s possible.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-md bg-amber px-5 py-3 font-semibold text-iron"
          >
            {CTA.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md border-[1.5px] border-iron px-5 py-3 font-semibold text-iron"
          >
            {CTA.estimate}
          </Link>
        </div>
      </section>
    </>
  );
}

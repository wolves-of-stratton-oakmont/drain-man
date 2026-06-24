// REVIEWS (/reviews) — Closer (DESIGN-BRIEF §8.10, CONTENT §7).
// Hero (honest word-of-mouth framing — NOT labelled as samples) → an honest
// mono stats strip (real numbers only, no invented review counts) → filterable
// reviews grid → leave-a-review CTA → CTABand.
//
// Keep the verbatim metadata (CONTENT §13); body is built from the data layer.

import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CTABand } from "@/components/sections/CTABand";
import { REVIEWS, REVIEW_SERVICE_FILTERS } from "@/data/reviews";
import { site } from "@/lib/site";
import { ReviewsGrid } from "./_components/ReviewsGrid";

export const metadata: Metadata = {
  title: { absolute: "Reviews from Toronto & GTA Homeowners | Drain Man" },
  description:
    "See what Toronto and GTA homeowners say about The Drain Man Inc. — honest, master-licensed plumbers since 1972.",
  alternates: { canonical: "/reviews" },
};

// Honest framing numbers — true, plainly stated. No invented review counts or
// rating averages (DESIGN-BRIEF §6.6 / CONTENT brand rules). Only real numerals
// get the big-stat treatment; the "why" is set as a plain framing line.
const HONEST_STATS: { value: string; caption: string }[] = [
  { value: String(site.yearsOfService), caption: "Years serving the GTA" },
  { value: String(site.established), caption: "Family-owned since" },
];

export default function ReviewsPage() {
  return (
    <>
      {/* 1 — Hero */}
      <Section bg="concrete" padding="tight">
        <div className="max-w-[44rem]">
          <SectionHeading
            as="h1"
            eyebrow="In their words"
            title="Reviews from Toronto & GTA homeowners."
            lead="After fifty-four years, most of our work still comes by word of mouth. We're just getting our Google reviews going — in the meantime, here's what people across the city have told us."
          />
        </div>
      </Section>

      {/* 2 — Honest framing band (dark): a plain line about why there's no
          rating average yet, beside the two real numerals. No invented counts. */}
      <Section bg="iron" padding="tight">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <p className="max-w-[46ch] text-lead text-on-dark-mut">
            We don&apos;t post a star average or a review count we haven&apos;t
            earned online yet. What we can show you is{" "}
            <span className="text-on-dark">
              real word-of-mouth from across the city
            </span>{" "}
            — and the only numbers that have ever mattered to us.
          </p>
          <dl className="flex gap-8 sm:gap-9 lg:justify-end">
            {HONEST_STATS.map((stat) => (
              <div key={stat.caption} className="flex flex-col gap-2">
                <dt className="sr-only">{stat.caption}</dt>
                <dd className="font-mono text-stat leading-none text-amber">
                  {stat.value}
                </dd>
                <p
                  aria-hidden="true"
                  className="max-w-[12ch] font-mono text-eyebrow uppercase tracking-[0.14em] text-on-dark-mut"
                >
                  {stat.caption}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 3 — Filterable reviews grid */}
      <Section bg="white">
        <ReviewsGrid reviews={REVIEWS} filters={REVIEW_SERVICE_FILTERS} />
      </Section>

      {/* 4 — Leave-a-review CTA (CONTENT §7) */}
      <Section bg="shallow" padding="tight">
        <div className="flex flex-col items-start gap-5 rounded-lg border border-mortar bg-white p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <div className="flex items-start gap-4">
            <span className="grid size-[40px] shrink-0 place-items-center rounded-md bg-amber-soft text-amber">
              <Icon name="star" size={22} />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-display text-h3 font-bold text-ink">
                Worked with us?
              </h2>
              <p className="max-w-[56ch] text-body text-steel">
                We&apos;d be grateful for a review on Google — it helps your
                neighbours find an honest plumber.
              </p>
            </div>
          </div>
          <Button
            variant="amber"
            href={site.googleReviewUrl}
            external
            icon="star"
            className="shrink-0"
          >
            Leave a Google review
          </Button>
        </div>
      </Section>

      {/* 5 — Pre-footer CTA band */}
      <CTABand bgImage="/images/cta/cta-dark-generic.jpg" />
    </>
  );
}

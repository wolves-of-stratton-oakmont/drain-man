// SERVICES INDEX (/services) — DESIGN-BRIEF §8.7, CONTENT §5.
// Pipefitter-owned. Composes Forge components against @/data/services +
// @/lib/site. Every one of the 14 services renders (grouped) and links to its
// detail page. Copy comes verbatim from the data layer / CONTENT §5.

import type { Metadata } from "next";
import { Section, SectionHeading, DepthRule } from "@/components/ui";
import { ServiceCard, FeatureGrid, CTABand } from "@/components/sections";
import { SERVICE_GROUPS, WHY_FEATURES } from "@/lib/site";
import { getServicesByGroup } from "@/data/services";

// Architect's stub already exports the verbatim CONTENT §13 metadata; keep it.
export const metadata: Metadata = {
  title: { absolute: "Plumbing, Drain & Waterproofing Services | Drain Man" },
  description:
    "Drain cleaning, sewer camera, waterproofing, excavation, water heaters and 24/7 emergency plumbing in Toronto & the GTA. Upfront pricing.",
  alternates: { canonical: "/services" },
};

// CONTENT §5 page copy.
const HERO = {
  eyebrow: "EVERYTHING BELOW THE FLOOR (AND ABOVE IT)",
  title: "Drain, sewer, waterproofing, excavation and plumbing.",
  lead: "Fifty-four years of doing nearly everything a Toronto home or building needs below the floor and above it — honestly, to code, and at a price you hear up front. Pick a service, or just call and tell us what's going on.",
} as const;

// CONTENT §5 mid-page reassurance line (condensed "Why Drain Man").
const REASSURANCE = {
  eyebrow: "WHY DRAIN MAN",
  title: "From a clogged sink to a full excavation — same honest deal.",
  lead: "Same upfront pricing, no deposit, and master-licensed crews — whether it's a single drain or the whole foundation. That's been the promise since 1972.",
} as const;

export default function ServicesIndexPage() {
  return (
    <>
      {/* 1. Page hero */}
      <Section bg="concrete" padding="tight" as="header">
        <SectionHeading
          as="h1"
          className="max-w-[68ch]"
          eyebrow={HERO.eyebrow}
          title={HERO.title}
          lead={HERO.lead}
        />
        <DepthRule className="mt-8" />
      </Section>

      {/* 2. Four grouped grids — all 14 services appear, each links to its page */}
      <Section bg="concrete" padding="none" className="pb-8 md:pb-10">
        <div className="flex flex-col gap-9">
          {SERVICE_GROUPS.map((group) => {
            const services = getServicesByGroup(group.id);
            return (
              <section key={group.id} aria-labelledby={`group-${group.id}`}>
                {/* mono group eyebrow + a small spec count, spec-sheet style */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2 border-b border-mortar pb-4">
                  <h2 id={`group-${group.id}`} className="eyebrow">
                    {group.label}
                  </h2>
                  <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-steel">
                    {String(services.length).padStart(2, "0")} services
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.slug}
                      service={service}
                      variant="photo"
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      {/* 3. Condensed reassurance band (dark "Why Drain Man") */}
      <Section bg="iron" padding="default">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <div className="lg:w-[40%] lg:shrink-0">
            <SectionHeading
              onDark
              headingId="services-reassurance"
              eyebrow={REASSURANCE.eyebrow}
              title={REASSURANCE.title}
              lead={REASSURANCE.lead}
            />
          </div>
          <div className="lg:flex-1">
            <FeatureGrid features={WHY_FEATURES} columns={2} onDark />
          </div>
        </div>
      </Section>

      {/* 4. Pre-footer CTA band */}
      <CTABand />
    </>
  );
}

// HOME (/) — Mason. Built to DESIGN-BRIEF §8.5 + CONTENT §2.
// Section sequence: hero → positioning strip → services overview → why (dark) →
// process → by-the-numbers (dark) → Enercare band → service areas → reviews →
// pre-footer CTA. Global chrome (banner/header/footer/sticky bar) is rendered by
// layout.tsx — this file is page content only.
//
// NOTE: the home <title> is "absolute" (CONTENT §13 includes the brand), so it is
// NOT run through the "%s | Drain Man" template — set via title.absolute below.

import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DepthRule } from "@/components/ui/DepthRule";
import { SpecTag } from "@/components/ui/SpecTag";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";

import { ServiceCard } from "@/components/sections/ServiceCard";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { StatGrid } from "@/components/sections/StatGrid";
import { TrustChips } from "@/components/sections/TrustChips";
import { EnercareBand } from "@/components/sections/EnercareBand";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { CTABand } from "@/components/sections/CTABand";

import {
  site,
  CTA,
  VALUE_PROPS,
  WHY_FEATURES,
  PROCESS_STEPS,
  STATS,
  statsFramingLine,
  defaultCtaBand,
} from "@/lib/site";
import { getFlagshipServices } from "@/data/services";
import { getFeaturedReviews } from "@/data/reviews";
import { FEATURED_AREAS } from "@/data/serviceAreas";

export const metadata: Metadata = {
  title: {
    absolute: "Drain Man | Honest Toronto Plumbers Since 1972",
  },
  description:
    "Master-licensed Toronto plumbers since 1972. Drains, waterproofing, excavation & 24/7 emergency plumbing across the GTA. Upfront pricing, no deposits.",
  alternates: { canonical: "/" },
};

const flagship = getFlagshipServices();
const featuredReviews = getFeaturedReviews();
const phoneHref = `tel:${site.phoneTel}`;

export default function HomePage() {
  return (
    <>
      {/* ===================================================================
          1 · HERO — dark iron base, 7/5 split, job-site photo + iron scrim
          =================================================================== */}
      <section className="relative isolate overflow-hidden bg-iron text-on-dark">
        <Container className="relative z-10">
          <div className="grid items-center gap-8 py-8 md:py-10 lg:grid-cols-12 lg:gap-7">
            {/* copy — 7 cols */}
            <div className="flex flex-col items-start gap-5 lg:col-span-7">
              <Eyebrow onDark>TORONTO &amp; THE GTA · SINCE 1972</Eyebrow>

              <h1 className="font-display text-display text-on-dark text-balance">
                {site.taglinePrimary}
              </h1>

              <p className="max-w-[54ch] text-lead text-on-dark-mut">
                From a backed-up drain to a flooded basement, we&rsquo;re the
                master-licensed Toronto plumbers families have called since 1972.
                Honest work, an upfront price, and no deposit to get started.
              </p>

              <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button variant="amber" href={phoneHref} icon="phone">
                  {CTA.phone}
                </Button>
                <Button
                  variant="outline"
                  href="/contact"
                  className="border-on-dark text-on-dark hover:!text-iron"
                >
                  {CTA.estimate}
                </Button>
              </div>

              <TrustChips onDark className="mt-3 max-w-[52ch]" />
            </div>

            {/* media — 5 cols */}
            <div className="lg:col-span-5">
              <div className="scrim-iron relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-pipe-line/60">
                <Image
                  src="/images/hero/home-hero.jpg"
                  alt="A Drain Man plumber at work on a below-grade job in the GTA"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                {/* floating spec tag over the photo (DESIGN-BRIEF §8.5.1) */}
                <SpecTag onPhoto className="absolute bottom-4 left-4 z-10">
                  BELOW GRADE · WATERPROOFING · SCARBOROUGH
                </SpecTag>
              </div>
            </div>
          </div>

          {/* the signature depth-rule draws under the hero */}
          <DepthRule onDark className="pb-2" />
        </Container>
      </section>

      {/* ===================================================================
          2 · POSITIONING STRIP — mono + icon value props (light)
          =================================================================== */}
      <Section bg="concrete" padding="tight" aria-label="What sets us apart">
        <ul className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((prop) => (
            <li key={prop.label} className="flex items-start gap-3">
              <span
                className="grid size-[40px] shrink-0 place-items-center rounded-md bg-amber-soft text-teal"
                aria-hidden="true"
              >
                <Icon name={prop.icon} size={22} />
              </span>
              <span className="pt-[6px] font-mono text-eyebrow uppercase leading-[1.5] tracking-[0.1em] text-ink">
                {prop.label}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ===================================================================
          3 · SERVICES OVERVIEW — flagship 3-col grid (white)
          =================================================================== */}
      <Section bg="white">
        <SectionHeading
          eyebrow="WHAT WE DO"
          as="h2"
          title="From the drain to the foundation, we handle it."
          lead="Fifty-four years in, there isn't much under a Toronto house we haven't fixed. Here's where most homeowners start."
        />

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {flagship.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-6">
          <Button variant="ghost" href="/services">
            {CTA.viewAllServices}
          </Button>
        </div>
      </Section>

      {/* ===================================================================
          4 · WHY DRAIN MAN — dark band, 2×2 features + captioned photo
          =================================================================== */}
      <Section bg="iron">
        <div className="grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeading
              onDark
              eyebrow="WHY DRAIN MAN"
              as="h2"
              title="The plumber your neighbour told you to call."
              lead="Most of our work comes from referrals — homeowners and contractors who've seen what we do and who we are. That only happens one way: by being honest, every job, for fifty-four years."
            />
            <FeatureGrid features={WHY_FEATURES} columns={2} onDark className="mt-7" />
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-pipe-line/60">
              <Image
                src="/images/home/why-drainman.jpg"
                alt="Experienced hands working on a pipe — Drain Man crew"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <SpecTag onPhoto className="absolute bottom-4 left-4">
                BUILT TO LAST, NOT TO UPSELL
              </SpecTag>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================================================================
          5 · PROCESS — how a job goes (light)
          =================================================================== */}
      <Section bg="concrete">
        <SectionHeading
          eyebrow="HOW A JOB GOES"
          as="h2"
          title="No mystery, no pressure. Here's exactly how we work."
          lead="Whether it's a single clogged drain or a full basement waterproofing dig, the process is the same — and you'll always know what's next."
        />
        <ProcessSteps steps={PROCESS_STEPS} className="mt-8" />
      </Section>

      {/* ===================================================================
          6 · BY THE NUMBERS — dark band, count-up stats
          =================================================================== */}
      <Section bg="pipe">
        <div className="flex flex-col gap-7">
          <SectionHeading
            onDark
            eyebrow="BY THE NUMBERS"
            as="h2"
            title="Fifty-four years, by the numbers."
            lead={statsFramingLine}
          />
          <DepthRule onDark />
          <StatGrid stats={STATS} onDark />
        </div>
      </Section>

      {/* ===================================================================
          7 · ENERCARE PARTNERSHIP BAND (calm light)
          =================================================================== */}
      <EnercareBand bg="shallow" />

      {/* ===================================================================
          8 · SERVICE AREAS — split image + chip cloud (white)
          =================================================================== */}
      <Section bg="white">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-mortar">
              <Image
                src="/images/home/service-areas-toronto.jpg"
                alt="Toronto and GTA neighbourhoods served by Drain Man"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 lg:col-span-7">
            <SectionHeading
              eyebrow="WHERE WE WORK"
              as="h2"
              title="Serving Toronto and the GTA."
              lead="Home base is Scarborough, and our trucks cover the city and the surrounding region every day — from East York to Etobicoke, Markham to Mississauga."
            />
            <ul className="flex flex-wrap gap-2">
              {FEATURED_AREAS.map((area) => (
                <li key={area}>
                  <Chip href="/service-areas">{area}</Chip>
                </li>
              ))}
            </ul>
            <Button variant="ghost" href="/service-areas">
              {CTA.seeAllAreas}
            </Button>
          </div>
        </div>
      </Section>

      {/* ===================================================================
          9 · REVIEWS — 3 featured testimonials (shallow wash)
          =================================================================== */}
      <Section bg="shallow">
        <SectionHeading
          eyebrow="IN THEIR WORDS"
          as="h2"
          title="What homeowners say after we pack up the truck."
          lead="A few words from people across Toronto and the GTA. (Real Google reviews are on the way — these are from our own files.)"
        />
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review) => (
            <TestimonialCard key={review.name} review={review} />
          ))}
        </div>
        <div className="mt-6">
          <Button variant="ghost" href="/reviews">
            {CTA.readAllReviews}
          </Button>
        </div>
      </Section>

      {/* ===================================================================
          10 · PRE-FOOTER CTA — dark band (DESIGN-BRIEF §8.5.10)
          =================================================================== */}
      <CTABand
        variant="dark"
        eyebrow={defaultCtaBand.eyebrow}
        heading={defaultCtaBand.heading}
        lead={defaultCtaBand.lead}
        bgImage="/images/cta/cta-home.jpg"
        bgImageAlt=""
      />
    </>
  );
}

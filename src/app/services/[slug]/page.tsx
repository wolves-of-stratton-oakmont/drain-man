// SERVICE DETAIL (/services/[slug]) — single template.
// TODO: Pipefitter owns + fleshes out the BODY (DESIGN-BRIEF §8.8, CONTENT §4).
//
// ARCHITECT provides the wiring (do not remove): generateStaticParams() over all
// 14 slugs, generateMetadata() from CONTENT §13 title + the service `meta`,
// notFound() for unknown slugs, and Service + Breadcrumb JSON-LD.
//
// Next 16: `params` is a Promise — it must be awaited (see ARCHITECTURE.md).

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SERVICE_SLUGS,
  getServiceBySlug,
  getRelatedServices,
} from "@/data/services";
import { getServiceGroup, site, CTA } from "@/lib/site";
import {
  JsonLd,
  serviceJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import {
  Section,
  Container,
  Eyebrow,
  SectionHeading,
  DepthRule,
  Button,
  Icon,
} from "@/components/ui";
import { ServiceCard, CTABand } from "@/components/sections";
import { getHowWeDoIt } from "@/app/services/_components/howWeDoIt";
import {
  GetThisFixedCard,
  ScopeChecklist,
  SignsList,
  HowWeDoItSteps,
} from "@/app/services/_components/ServiceDetailParts";
import { ServiceTrustNote } from "@/app/services/_components/ServiceTrustNote";

/**
 * Per-service SEO <title> strings, verbatim from CONTENT §13. These already
 * include the "| Drain Man" brand suffix, so they are set as absolute titles
 * (not run through the layout's "%s | Drain Man" template). Descriptions reuse
 * each service's `meta` (CONTENT §4).
 */
const SEO_TITLES: Record<string, string> = {
  "drain-cleaning": "Drain Cleaning & Snaking in Toronto | Drain Man",
  "sewer-camera-inspection":
    "Sewer & Drain Camera Inspection Toronto | Drain Man",
  "drain-repair-replacement": "Drain & Sewer Repair & Replacement | Drain Man",
  "basement-waterproofing": "Basement Waterproofing Toronto & GTA | Drain Man",
  "excavation-underpinning":
    "Excavation & Basement Underpinning Toronto | Drain Man",
  "backwater-valve": "Backwater Valve Installation Toronto | Drain Man",
  "sump-pump": "Sump Pump Installation & Replacement | Drain Man",
  "water-heaters": "Water Heaters & Enercare Rentals Toronto | Drain Man",
  "emergency-plumbing": "24/7 Emergency Plumbing Toronto & GTA | Drain Man",
  "burst-frozen-pipes": "Burst & Frozen Pipe Repair Toronto | Drain Man",
  "fixture-repair-installation":
    "Faucet, Toilet & Fixture Repair Toronto | Drain Man",
  "water-service-line": "Water Service Line Upgrade Toronto | Drain Man",
  "leak-detection": "Hidden Leak Detection Toronto & GTA | Drain Man",
  "commercial-plumbing": "Commercial Plumbing Toronto & GTA | Drain Man",
};

/** Pre-render all 14 service pages at build time. */
export function generateStaticParams(): { slug: string }[] {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = SEO_TITLES[slug] ?? `${service.name} | Drain Man`;
  return {
    title: { absolute: title },
    description: service.meta,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description: service.meta,
      url: `/services/${slug}`,
      images: [{ url: service.heroImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.meta,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const group = getServiceGroup(service.group);
  const related = getRelatedServices(slug, 3);
  const howSteps = getHowWeDoIt(slug);

  return (
    <>
      {/* Structured data (Architect-provided; keep). */}
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ])}
      />

      {/* 1. SERVICE HERO — full-bleed 16:9 band, distinct hero photo + iron scrim */}
      <section className="relative isolate flex min-h-[clamp(380px,52vw,560px)] flex-col justify-end overflow-hidden bg-iron text-on-dark scrim-iron">
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        {/* Local scrim reinforcement: keeps the breadcrumb + lead AA-legible over
            bright hero photos (e.g. water-heaters) without touching the shared
            --scrim-iron token. Anchored to the bottom half where the copy sits. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-t from-iron/85 via-iron/45 to-transparent"
        />
        <Container className="relative z-10 py-8 md:py-9">
          {/* visible breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 font-mono text-eyebrow uppercase tracking-[0.12em] text-on-dark-mut">
              <li>
                <Link href="/" className="transition-colors hover:text-on-dark">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="chevron-right" size={13} className="text-on-dark-mut" />
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-on-dark"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="chevron-right" size={13} className="text-on-dark-mut" />
              </li>
              <li aria-current="page" className="text-teal-bright">
                {service.name}
              </li>
            </ol>
          </nav>

          <Eyebrow onDark className="mt-6">
            {group.eyebrow}
          </Eyebrow>
          <h1 className="mt-4 max-w-[20ch] font-display text-display font-extrabold text-on-dark text-balance">
            {service.name}
          </h1>
          <p className="mt-5 max-w-[60ch] text-lead text-on-dark">
            {service.cardBlurb}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="amber" href={`tel:${site.phoneTel}`} icon="phone">
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
        </Container>
      </section>

      {/* 2. OVERVIEW — prose (long[]) + sticky "Get this fixed" rail.
          A depth-rule bridges the dark hero into the body (signature, §1.4). */}
      <Section bg="concrete" padding="default">
        <DepthRule className="mb-8" />
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-10">
          <div className="max-w-container-prose">
            <Eyebrow>Overview</Eyebrow>
            <div className="prose-column mt-5">
              {service.long.map((para, i) => (
                <p key={i} className="text-body text-ink">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:pt-1">
            <GetThisFixedCard serviceName={service.name} />
          </div>
        </div>
      </Section>

      {/* 3. WHAT'S INCLUDED — checklist from scope[] (custom check icon) */}
      <Section bg="white" padding="tight">
        <SectionHeading
          headingId="scope-heading"
          eyebrow="What's included"
          title="What this service covers"
          className="max-w-[40ch]"
        />
        <div className="mt-8">
          <ScopeChecklist items={service.scope} />
        </div>
      </Section>

      {/* 4. SIGNS YOU NEED THIS — 2-col list from signs[] (amber alert icon) */}
      <Section bg="concrete" padding="tight">
        <SectionHeading
          headingId="signs-heading"
          eyebrow="Signs you need this"
          title="When it's time to call us"
          className="max-w-[40ch]"
        />
        <div className="mt-8">
          <SignsList items={service.signs} />
        </div>
      </Section>

      {/* 5. HOW WE DO IT — tailored numbered steps (a real sequence) */}
      {howSteps.length > 0 ? (
        <Section bg="white" padding="tight">
          <SectionHeading
            headingId="how-heading"
            eyebrow="How we do it"
            title="No mystery, no pressure — here's how this job goes."
            className="max-w-[44ch]"
          />
          <div className="mt-8">
            <HowWeDoItSteps steps={howSteps} />
          </div>
        </Section>
      ) : null}

      {/* 6. RELATED SERVICES — same group / sensible neighbours */}
      {related.length > 0 ? (
        <Section bg="concrete" padding="tight">
          <SectionHeading
            headingId="related-heading"
            eyebrow="More from Drain Man"
            title="Related services"
            className="max-w-[40ch]"
          />
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} variant="photo" />
            ))}
          </div>
        </Section>
      ) : null}

      {/* 7. SERVICE-SPECIFIC TRUST NOTE (water-heaters → Enercare; else tailored) */}
      <ServiceTrustNote slug={slug} />

      {/* 8. PRE-FOOTER CTA BAND */}
      <CTABand />
    </>
  );
}

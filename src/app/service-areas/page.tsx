// SERVICE AREAS (/service-areas) — Closer (DESIGN-BRIEF §8.9, CONTENT §6).
// Hero → skyline map/intro band (Scarborough HQ "home base" plate) → grouped
// area chips (TORONTO_AREAS + GTA_AREAS) → "don't see your area?" note → CTABand.
//
// Keep the verbatim metadata (CONTENT §13); body is built from the data layer.

import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SpecTag } from "@/components/ui/SpecTag";
import { DepthRule } from "@/components/ui/DepthRule";
import { CTABand } from "@/components/sections/CTABand";
import { TORONTO_AREAS, GTA_AREAS } from "@/data/serviceAreas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Service Areas — Toronto & the GTA | Drain Man" },
  description:
    "Drain Man serves Toronto and the GTA — Scarborough, North York, Etobicoke, Markham, Vaughan, Mississauga and more. Call (416) 699-1370.",
  alternates: { canonical: "/service-areas" },
};

/** A labelled cloud of area chips (a region group). */
function AreaGroup({
  eyebrow,
  areas,
}: {
  eyebrow: string;
  areas: string[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <Eyebrow as="h2">{eyebrow}</Eyebrow>
      <ul className="flex flex-wrap gap-3">
        {areas.map((area) => (
          <li key={area}>
            <Chip>{area}</Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServiceAreasPage() {
  return (
    <>
      {/* 1 — Hero */}
      <Section bg="concrete" padding="tight">
        <div className="max-w-[44rem]">
          <SectionHeading
            as="h1"
            eyebrow="Toronto + the GTA"
            title="Serving Toronto and the Greater Toronto Area."
            lead="Home base is our shop at 440 Brimley Rd in Scarborough, and our trucks cover the city and the surrounding region every day. If you're in Toronto or the GTA, we can help — and if you're not sure, just call."
          />
        </div>
      </Section>

      {/* 2 — Skyline map / intro band: the city we serve + our HQ plate */}
      <section className="relative isolate overflow-hidden bg-iron text-on-dark scrim-iron-left">
        <Image
          src="/images/service-areas/gta-map.jpg"
          alt="Map of Toronto and the GTA served by Drain Man"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="mx-auto w-full max-w-container px-[var(--gutter)] py-9 md:py-10">
          <div className="max-w-[38rem]">
            <SpecTag onPhoto>HOME BASE · SCARBOROUGH</SpecTag>
            <h2 className="mt-5 font-display text-h2 text-on-dark text-balance">
              One shop, the whole region covered.
            </h2>
            <p className="mt-4 max-w-[52ch] text-lead text-on-dark-mut">
              From East York to Etobicoke, Markham to Mississauga — the same
              honest work, upfront price, and no deposit, wherever you are in the
              GTA.
            </p>

            {/* HQ spec plate (mono work-order tag) */}
            <dl className="mt-7 grid max-w-[30rem] grid-cols-1 gap-x-8 gap-y-4 rounded-md border border-pipe-line bg-iron-2/60 p-5 font-mono text-small backdrop-blur-[2px] sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <dt className="text-eyebrow uppercase tracking-[0.14em] text-on-dark-mut">
                  Shop
                </dt>
                <dd className="not-italic text-on-dark">
                  <a
                    href={site.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 text-on-dark link-underline"
                  >
                    <Icon
                      name="map-pin"
                      size={16}
                      className="mt-[2px] shrink-0 text-teal-bright"
                    />
                    <span>
                      {site.address.line1}
                      <br />
                      {site.address.city}, {site.address.region}{" "}
                      {site.address.postalCode}
                    </span>
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-eyebrow uppercase tracking-[0.14em] text-on-dark-mut">
                  Direct line
                </dt>
                <dd className="not-italic text-on-dark">
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="inline-flex items-center gap-2 text-on-dark link-underline"
                  >
                    <Icon
                      name="phone"
                      size={16}
                      className="shrink-0 text-teal-bright"
                    />
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 3 — Grouped area chips */}
      <Section bg="white">
        <div className="flex flex-col gap-9">
          <AreaGroup eyebrow="Toronto" areas={TORONTO_AREAS} />
          <DepthRule />
          <AreaGroup eyebrow="Greater Toronto Area" areas={GTA_AREAS} />
        </div>
      </Section>

      {/* 4 — Don't see your area? (CONTENT §6) */}
      <Section bg="shallow" padding="tight">
        <div className="flex flex-col items-start gap-5 rounded-lg border border-mortar bg-white p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <div className="flex items-start gap-4">
            <span className="grid size-[40px] shrink-0 place-items-center rounded-md bg-amber-soft text-teal">
              <Icon name="map-pin" size={22} />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-display text-h3 font-bold text-ink">
                Don&apos;t see your neighbourhood?
              </h2>
              <p className="max-w-[56ch] text-body text-steel">
                We likely still cover it. Call{" "}
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-semibold text-teal link-underline"
                >
                  {site.phoneDisplay}
                </a>{" "}
                and we&apos;ll let you know — straight answer, no runaround.
              </p>
            </div>
          </div>
          <Button
            variant="amber"
            href={`tel:${site.phoneTel}`}
            icon="phone"
            className="shrink-0"
          >
            {site.phoneDisplay}
          </Button>
        </div>
      </Section>

      {/* 5 — Pre-footer CTA band */}
      <CTABand />
    </>
  );
}

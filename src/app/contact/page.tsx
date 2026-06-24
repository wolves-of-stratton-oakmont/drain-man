// CONTACT (/contact) — Closer (DESIGN-BRIEF §8.12, CONTENT §9).
// This page IS the conversion CTA, so it has NO pre-footer CTABand.
//
// 1) Compact hero.
// 2) Split: EstimateForm (left, floating) + a mono "work-order" spec rail (right)
//    with NAP/hours/phone/email/credentials, the emergency note, and a Google
//    Maps embed for the shop.
// 3) A small service-area strip.
//
// Keep the verbatim metadata (CONTENT §13); body is built from the data layer.

import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { DepthRule } from "@/components/ui/DepthRule";
import { EstimateForm } from "@/components/sections/EstimateForm";
import { site } from "@/lib/site";
import { FEATURED_AREAS } from "@/data/serviceAreas";

export const metadata: Metadata = {
  title: { absolute: "Contact Us | Talk to a Real Plumber | Drain Man" },
  description:
    "Call (416) 699-1370 or message The Drain Man Inc. in Scarborough. Honest answers, upfront pricing, no deposit. Serving Toronto & the GTA.",
  alternates: { canonical: "/contact" },
};

// Standard Google Maps embed (no API key required): q=<address>&output=embed.
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.full,
)}&output=embed`;

/** One row of the mono spec block. */
function SpecRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-pipe-line pb-4 last:border-0 last:pb-0">
      <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-on-dark-mut">
        {label}
      </dt>
      <dd className="font-mono text-small not-italic text-on-dark">{children}</dd>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* 1 — Compact hero */}
      <Section bg="concrete" padding="tight">
        <div className="max-w-[40rem]">
          <SectionHeading
            as="h1"
            eyebrow="Get in touch"
            title="Talk to a real plumber."
            lead="Call us, or send a message and we'll get right back to you. No call centre, no runaround — just honest answers and an upfront price."
          />
        </div>
        <DepthRule className="mt-7" />
      </Section>

      {/* 2 — Split: form + spec rail */}
      <Section bg="white" padding="tight">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-9">
          {/* left: the estimate form (renders its own heading + success state) */}
          <div>
            <EstimateForm floating />
          </div>

          {/* right: the mono work-order spec rail */}
          <div className="flex flex-col gap-5">
            {/* emergency note — the one place brick-red is a fill (DESIGN-BRIEF §2.2) */}
            <aside
              className="flex items-start gap-4 rounded-md border border-emergency/30 bg-emergency/5 p-5"
              aria-label="Emergency notice"
            >
              <span className="grid size-[40px] shrink-0 place-items-center rounded-md bg-emergency text-white">
                <Icon name="alert" size={22} />
              </span>
              <p className="text-body text-ink">
                <span className="font-semibold">Got an emergency right now?</span>{" "}
                Don&apos;t fill out a form — call{" "}
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-semibold text-emergency link-underline"
                >
                  {site.phoneDisplay}
                </a>{" "}
                and a real plumber will answer.
              </p>
            </aside>

            {/* the spec card (dark "clipboard" — NAP / hours / credentials) */}
            <div className="rounded-lg bg-iron p-6 text-on-dark md:p-7">
              <Eyebrow as="h2" onDark>
                The shop
              </Eyebrow>
              <p className="mt-4 font-mono text-h4 uppercase tracking-[0.04em] text-on-dark">
                {site.legalName}
              </p>

              <dl className="mt-5 flex flex-col gap-4">
                <SpecRow label="Address">
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
                </SpecRow>

                <SpecRow label="Phone">
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
                </SpecRow>

                <SpecRow label="Email">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 break-all text-on-dark link-underline"
                  >
                    <Icon
                      name="mail"
                      size={16}
                      className="shrink-0 text-teal-bright"
                    />
                    {site.email}
                  </a>
                </SpecRow>

                <SpecRow label="Hours">
                  <span className="flex items-start gap-2">
                    <Icon
                      name="clock"
                      size={16}
                      className="mt-[2px] shrink-0 text-teal-bright"
                    />
                    <span>
                      {site.hours.weekdays}
                      <br />
                      {site.hours.sunday}
                      <br />
                      <span className="text-teal-bright">
                        {site.hours.emergency}
                      </span>
                    </span>
                  </span>
                </SpecRow>

                <SpecRow label="Credentials">
                  <span className="flex items-center gap-2">
                    <Icon
                      name="shield-check"
                      size={16}
                      className="shrink-0 text-teal-bright"
                    />
                    MASTER-LICENSED · FULLY INSURED
                  </span>
                </SpecRow>
              </dl>
            </div>

            {/* map embed — the "site location" plate */}
            <div className="overflow-hidden rounded-lg border border-mortar bg-white">
              <iframe
                title="Map to The Drain Man Inc. at 440 Brimley Rd, Unit #11, Scarborough"
                src={MAP_EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[300px] w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 3 — Service-area mini-strip */}
      <Section bg="shallow" padding="tight">
        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="Where we work"
            title="Serving Toronto and the GTA."
            lead="Home base is Scarborough; our trucks cover the city and the surrounding region every day."
          />
          <ul className="flex flex-wrap gap-3">
            {FEATURED_AREAS.map((area) => (
              <li key={area}>
                <Chip>{area}</Chip>
              </li>
            ))}
          </ul>
          <div>
            <Button variant="ghost" href="/service-areas">
              {/* CTA.seeAllAreas */}
              See all service areas
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

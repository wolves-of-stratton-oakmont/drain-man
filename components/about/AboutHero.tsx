import * as React from "react";
import Image from "next/image";
import { Users, BadgeCheck, MapPin } from "lucide-react";
import { Section, Container, Badge } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * About hero — matches the Contact and Services heroes: a dark ink band with a
 * full-bleed photo (a vintage workshop tool wall, for the heritage register),
 * eyebrow → headline → lead → trust chips. The thesis is the man the company is
 * named after: "Bill the Drain Man."
 */
export function AboutHero() {
  const yearsServing = new Date().getFullYear() - site.founded;

  return (
    <Section tone="ink" contained={false} spacing="none" className="relative isolate overflow-hidden">
      {/* Heritage workshop — the tools of a lifetime in the trade */}
      <Image
        src="/images/about/about-hero.jpg"
        alt="A vintage workshop wall hung with the hand tools of a lifetime in the trade"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-[1] bg-gradient-to-b from-ink/85 via-ink/80 to-ink"
      />
      <Container className="relative py-16 md:py-24">
        <span className="inline-flex items-center gap-2 font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-signal">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-signal" />
          Our story
        </span>

        <h1 className="mt-4 max-w-[18ch] text-display-lg text-white">
          The man they called{" "}
          <span className="text-accent">&ldquo;the Drain Man.&rdquo;</span>
        </h1>

        <p className="mt-5 max-w-2xl text-lead text-white/80">
          Bill Barber came over from England, started out as a plumber, and found
          his real calling underground — clearing the mains and sewer lines other
          trades wouldn&rsquo;t touch. Contractors across the GTA started calling
          him the Drain Man. He founded the company on it in {site.founded}.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          <li>
            <Badge tone="signal">
              <Users className="size-4" aria-hidden /> Family owned since {site.founded}
            </Badge>
          </li>
          <li>
            <Badge tone="ink" className="ring-1 ring-white/15">
              <BadgeCheck className="size-4" aria-hidden /> Now second generation
            </Badge>
          </li>
          <li>
            <Badge tone="ink" className="ring-1 ring-white/15">
              <MapPin className="size-4" aria-hidden /> Toronto &amp; the GTA, {yearsServing}+ years
            </Badge>
          </li>
        </ul>
      </Container>
    </Section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";
import { Credentials } from "@/components/sections/Credentials";
import { BookCta } from "@/components/sections/BookCta";
import { AboutHero } from "@/components/about/AboutHero";
import { HeritageLine } from "@/components/about/HeritageLine";
import { HeritageQuote } from "@/components/about/HeritageQuote";
import { FamilyGrid } from "@/components/about/FamilyGrid";
import { ValuesGrid } from "@/components/about/ValuesGrid";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bill Barber came from England, found his calling in drains, and founded The Drain Man Inc in 1972. Now run by the second generation — same honest, hands-on values, serving Toronto and the GTA.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — the thesis: the man they called the Drain Man */}
      <AboutHero />

      {/* The heritage, threaded on "The Line" — a true, ordered arc */}
      <Section tone="water" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="1972 to today"
              title="From a plan to a name people trust"
              description="One trade, one family, two generations — and a line that runs straight through all of it."
            />
            <figure className="mt-8 overflow-hidden rounded-2xl shadow-[var(--shadow-md)] ring-1 ring-water-line">
              <Image
                src="/images/about/pipe-wrenches.jpg"
                alt="Two tradespeople running new pipe together on a job — the trade passed down a generation"
                width={1800}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          </div>
          <HeritageLine />
        </div>
      </Section>

      {/* Heritage callout on the deep-main dark band */}
      <Section tone="ink" spacing="lg">
        <HeritageQuote />
      </Section>

      {/* The family today — only the real people */}
      <Section tone="white" spacing="lg">
        <SectionHeading
          eyebrow="The family"
          title="The people who answer the phone"
          description="You won’t be passed around. The Barbers are still the ones running the work — and many of our crew have been with us for 20 years or more."
        />
        <FamilyGrid className="mt-12" />
      </Section>

      {/* What we stand for — real differentiators as scannable cards */}
      <Section tone="water" spacing="lg">
        <SectionHeading
          eyebrow="What we stand for"
          title="Honest is the only way we know how to work"
          description="These aren’t a sales pitch. They’re the rules Bill started with, and the reason most of our work comes by referral."
        />
        <ValuesGrid className="mt-12" />
      </Section>

      {/* Credentials (shared) — already renders its own Section */}
      <Credentials tone="white" />

      {/* Closing CTA (shared) */}
      <BookCta />
    </>
  );
}

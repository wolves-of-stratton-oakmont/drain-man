import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, AlertTriangle, MapPin } from "lucide-react";
import {
  Section,
  SectionHeading,
  Container,
  Badge,
  buttonClasses,
} from "@/components/ui";
import { site } from "@/lib/site";
import { CommonJobs } from "@/components/services/CommonJobs";
import { CoreServices } from "@/components/services/CoreServices";
import { PlumberVsTechnician } from "@/components/sections/PlumberVsTechnician";
import { BookCta } from "@/components/sections/BookCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Drain cleaning, flood prevention, and power flushing across Toronto and the GTA. From a blocked toilet or sink to repiping, sewer camera inspection, and backwater valves — the drain specialists since 1972.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero: the thesis. Drains are the company's whole world. Mirrors the
          Contact hero — dark ink band, full-bleed photo, eyebrow/h1/lead. ── */}
      <Section tone="ink" contained={false} spacing="none" className="relative isolate overflow-hidden">
        {/* Underground main line — the trouble we trace, all the way down */}
        <Image
          src="/images/services/services-hero.jpg"
          alt="A dimly lit underground service tunnel lined with large pipes running into the distance"
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
            <span aria-hidden className="h-2 w-2 rounded-full bg-signal" />
            What we do
          </span>
          <h1 className="mt-4 max-w-[18ch] text-display-lg text-white">
            We trace the trouble all the way down the line.
          </h1>
          <p className="mt-5 max-w-2xl text-lead text-white/80">
            Some plumbers stop at the fixture. We keep going — down the main, with
            a camera and a snake — because drains are where this family has worked
            since {site.founded}. Here&apos;s the everyday stuff and the deep work,
            all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className={buttonClasses({ variant: "primary", size: "lg" })}
            >
              Book a service
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <a
              href={site.phone.href}
              className={buttonClasses({
                variant: "secondary",
                size: "lg",
                className:
                  "border-white/25 bg-transparent text-white hover:border-signal hover:text-signal",
              })}
            >
              <Phone className="h-5 w-5" aria-hidden />
              <span className="font-mono">{site.phone.display}</span>
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            <Badge tone="signal">
              <MapPin className="size-4" aria-hidden /> Toronto &amp; the GTA
            </Badge>
            <Badge tone="alert" className="bg-alert text-white">
              <AlertTriangle className="size-4" aria-hidden /> Backed up right now?
              Call us
            </Badge>
          </ul>
        </Container>
      </Section>

      {/* ── Common jobs: everyday language entry point ── */}
      <Section tone="water" spacing="md">
        <SectionHeading
          eyebrow="Common jobs"
          title="Start with what you're seeing"
          description="The everyday problems people call us about most. Tap any one to send a booking request — we'll call you back to confirm."
        />
        <div className="mt-10">
          <CommonJobs />
        </div>
      </Section>

      {/* ── Three core systems: the real service categories ── */}
      <Section tone="white" spacing="lg">
        <SectionHeading
          eyebrow="Core systems"
          title="Where the real work happens"
          description="Three things we know cold — clearing and rebuilding drains, keeping floods out, and flushing systems back to full flow."
        />
        <div className="mt-12 md:mt-16">
          <CoreServices />
        </div>
      </Section>

      {/* ── Plumber vs. Technician: the distinction (shared section) ── */}
      <PlumberVsTechnician
        tone="water"
        eyebrow="Plumber vs. technician"
        title="Two different jobs. Know which one you need."
        description="Where a standard plumber stops is exactly where a drain technician keeps going — here's the hand-off."
      />

      {/* ── Closing CTA (shared, site-wide) ── */}
      <BookCta />
    </>
  );
}

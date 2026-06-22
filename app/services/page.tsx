import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, AlertTriangle } from "lucide-react";
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
import { PlumberVsTechnician } from "@/components/services/PlumberVsTechnician";
import { BookCta } from "@/components/sections/BookCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Drain cleaning, flood prevention, and power flushing across Toronto and the GTA. From a blocked toilet or sink to repiping, sewer camera inspection, and backwater valves — the drain specialists since 1972.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero: the thesis. Drains are the company's whole world. ── */}
      <Section tone="white" spacing="none" className="pt-16 pb-4 md:pt-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-blue">
            <span aria-hidden className="h-2 w-2 rounded-full bg-blue" />
            What we do
          </span>
          <h1 className="max-w-[16ch] text-display-lg text-ink">
            We trace the trouble all the way down the line.
          </h1>
          <p className="max-w-[60ch] text-lead text-ink/80">
            Some plumbers stop at the fixture. We keep going — down the main, with
            a camera and a snake — because drains are where this family has worked
            since {site.founded}. Here&apos;s the everyday stuff and the deep work,
            all in one place.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/contact"
              className={buttonClasses({ variant: "primary", size: "lg" })}
            >
              Book a service
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <a
              href={site.phone.href}
              className={buttonClasses({ variant: "secondary", size: "lg" })}
            >
              <Phone className="h-5 w-5" aria-hidden />
              <span className="font-mono">{site.phone.display}</span>
            </a>
          </div>

          {/* Genuine urgency — Alert Red used for its real semantic meaning only */}
          <p className="flex items-center gap-2 text-sm text-steel">
            <Badge tone="alert">
              <AlertTriangle className="h-4 w-4" aria-hidden />
              Backed up right now?
            </Badge>
            Call us — we&apos;ll get to you fast.
          </p>
        </div>
      </Section>

      {/* The Line descends from the hero into the page */}
      <Container>
        <div className="relative h-16">
          <div
            aria-hidden
            className="absolute left-5 top-0 h-full w-[3px] rounded-full md:left-8"
            style={{
              background:
                "linear-gradient(180deg, var(--color-blue) 0%, var(--color-blue) 70%, transparent 100%)",
            }}
          >
            <span className="absolute left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-signal shadow-[0_0_0_4px_rgba(255,198,41,0.25)]" />
          </div>
        </div>
      </Container>

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

      {/* ── Plumber vs. Technician: the distinction, drawn on the line ── */}
      <Section tone="water" spacing="lg">
        <SectionHeading
          align="center"
          eyebrow="Plumber vs. technician"
          title="Two different jobs. Know which one you need."
          description="Where a standard plumber stops is exactly where a drain technician keeps going. The line below shows the hand-off."
        />
        <div className="mt-12">
          <PlumberVsTechnician />
        </div>
      </Section>

      {/* ── Closing CTA (shared, site-wide) ── */}
      <BookCta />
    </>
  );
}

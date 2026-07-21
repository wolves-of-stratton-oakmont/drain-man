import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Wrench } from "lucide-react";
import { Section, Container, Badge, buttonClasses } from "@/components/ui";
import { BookingForm } from "@/components/booking/BookingForm";
import { ContactRail } from "@/components/contact/ContactRail";
import { ContactMap } from "@/components/contact/ContactMap";
import { EnercareBand } from "@/components/sections/EnercareBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & booking",
  description:
    "Request a callback from Drainman INC or reach us directly: (416) 699-1370, admin@drainmaninc.com, 440 Brimley Rd, Scarborough. Serving Toronto and the GTA. Ask about the Enercare Plumbing and Drains Protection Plan.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero: "get the drain man on the way" ───────────────────────── */}
      <Section tone="ink" contained={false} spacing="none" className="relative isolate overflow-hidden">
        {/* Toronto skyline — atmospheric, we serve this city */}
        <Image
          src="/images/shared/toronto-skyline.jpg"
          alt="The Toronto skyline and CN Tower lit up at dusk over the lake — the city Drainman INC serves"
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
            Contact &amp; booking
          </span>
          <h1 className="mt-4 max-w-3xl text-display-lg text-white">
            Backed up, leaking, or flooding? Let&apos;s get the drain man on the
            way.
          </h1>
          <p className="mt-5 max-w-2xl text-lead text-white/80">
            Send a request below and we&apos;ll call you back to confirm a time,
            or reach us directly. Family-owned and answering Toronto since{" "}
            {site.founded}.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            <Badge tone="signal">
              <MapPin className="size-4" aria-hidden /> Toronto &amp; the GTA
            </Badge>
            <Badge tone="ink" className="bg-white/10 ring-1 ring-white/20">
              <Wrench className="size-4" aria-hidden /> Drain technicians, not
              just plumbers
            </Badge>
            <Badge tone="ink" className="bg-white/10 ring-1 ring-white/20">
              No deposits, rates up front
            </Badge>
          </ul>

          {/* The Line — threads from the hero down into the page */}
          <div className="relative mt-12 h-px" aria-hidden="true">
            <div className="drain-line absolute inset-x-0 top-0" />
            <span className="drain-line__dot left-0" />
          </div>
        </Container>
      </Section>

      {/* ── Primary action: full-width booking form ─────────────────────── */}
      <Section tone="white" spacing="lg">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-accent">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
            Request a callback
          </span>
          <h2 className="mt-3 text-h2 text-ink">Tell us what&apos;s wrong</h2>
          <p className="mx-auto mt-3 max-w-[55ch] text-lead text-steel">
            Three quick fields and you&apos;re done — we&apos;ll call you back to
            confirm a time. No deposit, no obligation.
          </p>
        </div>
        <BookingForm className="mt-10" />

        {/* Prefer to call? — direct-contact info, same white section as the form */}
        <div className="mt-16 border-t border-water-line pt-12">
          <div className="text-center">
            <h2 className="text-h3 text-ink">
              Prefer to call? Here&apos;s every way to reach us.
            </h2>
          </div>
          <ContactRail className="mt-8" />
        </div>
      </Section>

      {/* ── Enercare partner — shared red panel used everywhere we mention it ── */}
      <Section tone="water" spacing="md">
        <EnercareBand variant="band" />
      </Section>

      {/* ── Service area + map ─────────────────────────────────────────── */}
      <Section tone="white" spacing="lg">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-blue">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-blue" />
              Where we work
            </span>
            <h2 className="mt-3 text-h2 text-ink">Find us in Scarborough</h2>
            <p className="mt-3 max-w-[58ch] text-lead text-steel">
              Our shop is on Brimley Road, and our trucks run drain calls right
              across the city and the wider GTA.
            </p>

            <h3 className="mt-8 font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-steel">
              Service area
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {site.serviceAreas.map((area) => (
                <Badge key={area} tone="neutral">
                  {area}
                </Badge>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.phone.href} className={buttonClasses({ size: "md" })}>
                <Phone className="size-5" aria-hidden />
                <span className="font-mono">{site.phone.display}</span>
              </a>
            </div>
          </div>

          <ContactMap className="lg:mt-1" />
        </div>
      </Section>
    </>
  );
}

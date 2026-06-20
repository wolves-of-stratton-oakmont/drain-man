import * as React from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Section, Container, buttonClasses } from "@/components/ui";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Tone = "ink" | "blue";

export interface CtaBandProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Dark band tone. Both keep white text + the drain-line motif. */
  tone?: Tone;
  /** Primary button label. */
  ctaLabel?: string;
  /** Primary button destination. */
  ctaHref?: string;
}

/**
 * Closing call-to-action band — the one heroic dark moment at the end of a page.
 * Default action books a service; the drain blue + signal yellow make it the
 * "Superman shows up" beat. The drain-line runs across the top as the section
 * joint that connects this to the page above it.
 */
export function CtaBand({
  title = "Drain backed up? We'll trace it to the source.",
  subtitle = "Tell us what's going on and we'll call you back to set a time — or pick up the phone and talk to us now.",
  tone = "ink",
  ctaLabel = "Book a service",
  ctaHref = "/contact",
}: CtaBandProps) {
  const onBlue = tone === "blue";

  return (
    <Section tone={tone} spacing="lg" contained={false} className="relative overflow-hidden">
      {/* The Line — section joint across the top, connecting to the page above */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-[3px] max-w-[var(--container-site)] bg-[linear-gradient(90deg,transparent,var(--color-signal)_15%,var(--color-signal)_85%,transparent)] opacity-40"
      />
      {/* Faint water-flow glow behind the headline (subtle, reduced-motion safe — static) */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full blur-3xl",
          onBlue ? "bg-white/10" : "bg-blue/25",
        )}
      />

      <Container className="relative">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span className="font-mono text-eyebrow uppercase tracking-[0.18em] text-signal">
              Same-day help when it counts
            </span>
            <h2 className="mt-3 text-h2 text-white">{title}</h2>
            <p className="mt-4 text-lead text-white/80">{subtitle}</p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
            <Link
              href={ctaHref}
              className={cn(buttonClasses({ size: "lg" }), "w-full sm:w-auto")}
            >
              {ctaLabel}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href={site.phone.href}
              className={cn(
                "inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border-2 px-8 font-display text-lead font-bold tracking-tight text-white sm:w-auto",
                "transition-[transform,background-color] duration-200 ease-[var(--ease-flow)]",
                "border-white/25 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
              )}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

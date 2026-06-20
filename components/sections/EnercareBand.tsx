import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Section, Container } from "@/components/ui";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export interface EnercareBandProps {
  /**
   * `hero` — front-and-center on Home: the Enercare logo is the most prominent
   * thing, on a clean field, the main booking path.
   * `band` — quieter partner strip for the Contact page (plan link).
   */
  variant?: "hero" | "band";
  className?: string;
}

/**
 * Enercare partner band — the client's #1 priority element. Enercare is the
 * booking partner; the official red logo (`/brand/enercare-logo.svg`,
 * `#F6323E`) sits on a clean white/water field and is never recolored or placed
 * on a clashing blue. Always links the Plumbing & Drains Protection plan in a
 * new tab.
 *
 * Why this composition (not a generic logo wall): the logo gets real space and
 * is paired with a single clear sentence about what the partnership does for the
 * customer (book a protected plumbing & drain plan), plus one obvious action.
 */
export function EnercareBand({ variant = "hero", className }: EnercareBandProps) {
  const isHero = variant === "hero";

  const cta = (
    <a
      href={site.links.enercare}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-xl font-display font-bold tracking-tight text-white",
        "bg-blue shadow-[var(--shadow-blue)] transition-[transform,background-color] duration-200 ease-[var(--ease-flow)]",
        "hover:bg-blue-deep hover:-translate-y-0.5 active:translate-y-0",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
        isHero ? "h-14 px-8 text-lead" : "h-12 px-6 text-base",
      )}
    >
      Book with Enercare
      <ArrowUpRight
        className="h-5 w-5 transition-transform duration-200 ease-[var(--ease-flow)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );

  if (!isHero) {
    // Compact partner strip for the Contact page.
    return (
      <div
        className={cn(
          "rounded-2xl border border-water-line bg-white p-6 shadow-[var(--shadow-sm)] md:p-8",
          className,
        )}
      >
        <span className="font-mono text-eyebrow uppercase tracking-[0.18em] text-blue">
          Authorized partner
        </span>
        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/enercare-logo.svg"
              alt="Enercare"
              width={176}
              height={57}
              className="h-9 w-auto"
            />
            <p className="max-w-xs text-sm text-steel">
              Ask us about Enercare&rsquo;s Plumbing &amp; Drains Protection Plan
              for ongoing coverage.
            </p>
          </div>
          {cta}
        </div>
      </div>
    );
  }

  // Hero variant — Enercare front-and-center on the Home page.
  return (
    <Section
      tone="water"
      spacing="lg"
      contained={false}
      className={cn("scroll-mt-20", className)}
      aria-labelledby="enercare-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-water-line bg-white px-6 py-12 text-center shadow-[var(--shadow-md)] md:px-10 md:py-16">
          {/* Quiet brand accent — a single drain-line arc, kept faint so the red
              Enercare logo stays the loudest thing on a clean field. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-1 w-40 rounded-full bg-blue/20"
          />

          <span className="inline-flex items-center gap-2 rounded-full bg-blue/10 px-3 py-1 font-mono text-eyebrow uppercase tracking-[0.18em] text-blue">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Authorized partner
          </span>

          {/* The logo — the single most prominent element. */}
          <div className="mt-7 flex justify-center">
            <Image
              src="/brand/enercare-logo.svg"
              alt="Enercare"
              width={264}
              height={85}
              priority
              className="h-20 w-auto md:h-28"
            />
          </div>

          <h2
            id="enercare-heading"
            className="mx-auto mt-7 max-w-2xl text-h2 text-ink"
          >
            Book your plumbing &amp; drain service through Enercare
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lead text-steel">
            We&rsquo;re an authorized Enercare partner. Book a protected plumbing
            and drain plan, and we&rsquo;ll be the crew who shows up to do the
            work.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {cta}
            <a
              href={site.phone.href}
              className={cn(
                "inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-8 font-display text-lead font-bold tracking-tight text-ink",
                "transition-[transform,border-color,color] duration-200 ease-[var(--ease-flow)]",
                "hover:border-blue hover:text-blue hover:-translate-y-0.5 active:translate-y-0",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
              )}
            >
              Or call {site.phone.display}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

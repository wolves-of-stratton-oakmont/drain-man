import * as React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui";
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

  // Hero variant — the tradesperson steps out of a sleek accent panel, copy and
  // booking actions on the right. Same rounded/red design language as the home
  // hero. The Enercare red mark stays brand-safe on a white pill.
  return (
    <Section
      tone="water"
      spacing="lg"
      contained={false}
      className={cn("scroll-mt-20", className)}
      aria-labelledby="enercare-heading"
    >
      <div className="mx-auto w-[95%] max-w-[1700px] pt-12 md:pt-14">
        {/* The panel — wide, with a fixed left lane reserved for the cut-out so
            the copy never collides with it. */}
        <div className="relative rounded-2xl bg-accent-deep px-6 py-9 text-center text-white shadow-[var(--shadow-md)] md:py-10 md:pl-[27rem] md:pr-10 md:text-left lg:pl-[30rem] lg:pr-16 xl:pl-[33rem]">
          {/* Faint arcs — clipped to the panel so they read as quiet texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute -left-16 -top-20 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute -bottom-28 right-6 h-72 w-72 rounded-full border border-white/[0.08]" />
          </div>

          <div className="relative">
            <span className="inline-flex w-fit items-center rounded-xl bg-white px-5 py-3 shadow-[var(--shadow-md)]">
              <Image
                src="/brand/enercare-logo.svg"
                alt="Enercare — authorized partner"
                width={264}
                height={85}
                priority
                className="h-[2.6rem] w-auto"
              />
            </span>

            <h2 id="enercare-heading" className="mt-6 text-h2 text-white">
              Book your plumbing &amp; drain service{" "}
              <span className="text-signal">through Enercare</span>
            </h2>
            <p className="mt-3 max-w-lg text-base text-white/85 md:mx-0">
              We&rsquo;re an authorized Enercare partner. Book a protected
              plumbing and drain plan, and we&rsquo;ll be the crew who shows up to
              do the work.
            </p>

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <a
                href={site.links.enercare}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 font-display text-base font-bold tracking-tight text-ink",
                  "shadow-[var(--shadow-md)] transition-[transform] duration-200 ease-[var(--ease-flow)]",
                  "hover:-translate-y-0.5 active:translate-y-0",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
                )}
              >
                Book with Enercare
                <ArrowUpRight
                  className="h-5 w-5 text-accent transition-transform duration-200 ease-[var(--ease-flow)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={site.phone.href}
                className={cn(
                  "inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-transparent px-7 font-display text-base font-bold tracking-tight text-white",
                  "transition-[transform,border-color,color] duration-200 ease-[var(--ease-flow)]",
                  "hover:border-white hover:-translate-y-0.5 active:translate-y-0",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
                )}
              >
                Or call {site.phone.display}
              </a>
            </div>
          </div>

          {/* The tradesperson — steps out of the top-left of the panel */}
          <Image
            src="/images/home/plumber-cutout.png"
            alt="A Drainman plumber holding a cordless drill"
            width={800}
            height={1101}
            priority
            className="pointer-events-none absolute bottom-0 left-2 hidden h-[127%] w-auto select-none drop-shadow-[0_18px_24px_rgba(10,13,20,0.25)] md:block lg:left-8 xl:left-14"
          />
        </div>
      </div>
    </Section>
  );
}

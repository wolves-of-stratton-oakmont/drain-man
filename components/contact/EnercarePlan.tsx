import * as React from "react";
import Image from "next/image";
import { ShieldCheck, ArrowUpRight, CircleCheckBig } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Enercare partner plan card — Contact page.
 *
 * Enercare is the client's protected partner and a booking/coverage channel.
 * The official red logo sits on clean white space and is NEVER recolored
 * (Enercare red #F6323E is the logo's own color — see DESIGN_SYSTEM.md §0).
 *
 * The plan link comes from `site.links.enercare` (single source of truth) so the
 * Home and Contact Enercare links can never drift apart.
 */

const planPoints = [
  "Unlimited plumbing service calls, parts and labour included",
  "One-time camera scope and auger of a below-grade drain blockage",
  "24/7 booking line and priority scheduling",
];

export function EnercarePlan({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-water-line bg-white shadow-[var(--shadow-md)]",
        className,
      )}
    >
      <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        {/* Logo panel — clean white space for the red mark */}
        <div className="flex flex-col items-start justify-center gap-5 border-b border-water-line p-7 md:border-b-0 md:border-r md:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue/10 px-3 py-1 text-sm font-semibold leading-none text-blue">
            <ShieldCheck className="size-4" aria-hidden />
            Partner plan
          </span>
          {/* Official Enercare logo — do not recolor */}
          <Image
            src="/brand/enercare-logo.svg"
            alt="Enercare"
            width={220}
            height={71}
            className="h-14 w-auto md:h-16"
          />
          <p className="text-base text-steel">
            We partner with Enercare on their Plumbing and Drains Protection
            Plan — coverage that pairs with the work we do.
          </p>
        </div>

        {/* Plan detail + CTA */}
        <div className="flex flex-col gap-5 p-7 md:p-10">
          <h3 className="text-h3 text-ink">
            Want ongoing drain protection?
          </h3>
          <ul className="flex flex-col gap-3">
            {planPoints.map((point) => (
              <li key={point} className="flex gap-3 text-base text-ink/90">
                <CircleCheckBig
                  className="mt-0.5 size-5 shrink-0 text-blue"
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a
            href={site.links.enercare}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-6 text-base font-display font-bold tracking-tight text-ink transition-[transform,border-color,color] duration-200 ease-[var(--ease-flow)] hover:-translate-y-0.5 hover:border-blue hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal sm:w-auto"
          >
            View the Enercare plan
            <ArrowUpRight className="size-5" aria-hidden />
          </a>
          <p className="text-sm text-steel">
            Opens enercare.ca in a new tab. Plan terms and pricing are set by
            Enercare.
          </p>
        </div>
      </div>
    </div>
  );
}

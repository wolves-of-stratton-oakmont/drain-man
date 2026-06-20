import * as React from "react";
import Image from "next/image";
import { Users, BadgeCheck, MapPin } from "lucide-react";
import { Badge } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * About hero. The thesis is the man the company is named after: "Bill the
 * Drain Man." Big confident wordmark-style headline (the heroic register),
 * a warm black-and-white portrait of the tradesman in his workshop, and the
 * real trust chips up top so the heritage reads as fact, not slogan.
 */
export function AboutHero() {
  const yearsServing = new Date().getFullYear() - site.founded;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
      {/* Copy column */}
      <div>
        <span className="inline-flex items-center gap-2 font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-blue">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-blue" />
          Our story
        </span>

        <h1 className="mt-4 text-display-lg font-display font-extrabold leading-[0.95] tracking-[-0.01em] text-ink">
          The man they called{" "}
          <span className="text-blue">“the Drain Man.”</span>
        </h1>

        <p className="mt-5 max-w-[56ch] text-lead text-ink/85">
          Bill Barber came over from England, started out as a plumber, and
          found his real calling underground — clearing the mains and sewer
          lines other trades wouldn’t touch. Contractors across the GTA started
          calling him the Drain Man. He founded the company on it in {site.founded}.
        </p>

        <ul className="mt-7 flex flex-wrap gap-2.5">
          <li>
            <Badge tone="blue">
              <Users className="h-4 w-4" aria-hidden /> Family owned since {site.founded}
            </Badge>
          </li>
          <li>
            <Badge tone="blue">
              <BadgeCheck className="h-4 w-4" aria-hidden /> Now second generation
            </Badge>
          </li>
          <li>
            <Badge tone="neutral">
              <MapPin className="h-4 w-4" aria-hidden /> Toronto &amp; the GTA, {yearsServing}+ years
            </Badge>
          </li>
        </ul>
      </div>

      {/* Image column */}
      <figure className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-md)]">
          <Image
            src="/images/about/toronto-fountain.jpg"
            alt="A veteran tradesman in his workshop, surrounded by the tools of a lifetime in the trade"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </div>
        {/* The Line: a short pipe rule with a locate-dot, tying the image to the brand */}
        <span
          aria-hidden="true"
          className="absolute -bottom-3 left-6 hidden h-[3px] w-40 rounded-full bg-blue sm:block"
        >
          <span className="absolute -top-[3px] right-0 h-2.5 w-2.5 rounded-full bg-signal ring-2 ring-white" />
        </span>
      </figure>
    </div>
  );
}

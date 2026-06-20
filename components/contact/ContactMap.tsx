import * as React from "react";
import { Navigation } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Google Maps embed for the shop.
 *
 * Uses the keyless `maps.google.com/maps?...&output=embed` form so there is NO
 * API key in the client HTML (the live site exposed one — see SITE_SPEC App. B).
 * Centered on the real shop coordinates from `@/lib/site`.
 */

const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.address.full,
)}&hl=en&z=15&output=embed`;

const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.address.full,
)}`;

export function ContactMap({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-water-line bg-water shadow-[var(--shadow-sm)]",
        className,
      )}
    >
      <iframe
        title={`Map showing ${site.legalName} at ${site.address.full}`}
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[320px] w-full border-0 md:h-[420px]"
      />
      <figcaption className="flex flex-col gap-2 border-t border-water-line bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm text-steel">
          <span className="font-semibold text-ink">{site.address.line1}</span>
          {", "}
          {site.address.city}, {site.address.province} {site.address.postal}
        </span>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-blue underline-offset-4 hover:underline focus-visible:underline sm:self-auto"
        >
          <Navigation className="size-4" aria-hidden />
          Get directions
        </a>
      </figcaption>
    </figure>
  );
}

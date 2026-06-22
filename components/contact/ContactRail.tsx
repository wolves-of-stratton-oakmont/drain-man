import * as React from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Star } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Direct-contact info as a clean, borderless grid beneath the booking form.
 * Every value shares one type size so the set reads as consistent. All facts
 * come from `@/lib/site`.
 */

const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.address.full,
)}`;

function Item({
  icon: Icon,
  label,
  children,
  sub,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  children: React.ReactNode;
  sub: string;
}) {
  return (
    <div className="flex flex-col">
      <span
        aria-hidden="true"
        className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent"
      >
        <Icon className="size-5" aria-hidden />
      </span>
      <p className="mt-4 font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-steel">
        {label}
      </p>
      <div className="mt-1 text-base font-semibold text-ink">{children}</div>
      <p className="mt-2 text-sm leading-relaxed text-steel">{sub}</p>
    </div>
  );
}

export function ContactRail({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="grid w-full gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <Item
          icon={Phone}
          label="Call or text"
          sub="Backed up right now? Call — we'll get someone moving."
        >
          <a
            href={site.phone.href}
            className="font-mono underline-offset-4 transition-colors hover:text-accent focus-visible:text-accent"
          >
            {site.phone.display}
          </a>
        </Item>

        <Item
          icon={Mail}
          label="Email"
          sub="Best for non-urgent quotes and questions."
        >
          <a
            href={`mailto:${site.email}`}
            className="break-words underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:text-accent"
          >
            {site.email}
          </a>
        </Item>

        <Item icon={MapPin} label="Shop" sub="Get directions to the shop.">
          <a
            href={mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-start gap-1.5 underline-offset-4 transition-colors hover:text-accent focus-visible:text-accent"
          >
            <span className="leading-snug">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.province} {site.address.postal}
            </span>
            <ArrowUpRight
              className="mt-0.5 size-4 shrink-0 text-steel transition-colors group-hover:text-accent"
              aria-hidden
            />
          </a>
        </Item>

        <Item
          icon={Clock}
          label="Hours"
          sub="After hours, call and leave a message — it reaches the on-call line."
        >
          Mon–Fri, 8 a.m. – 5 p.m.
        </Item>
      </div>

      <a
        href={site.links.googleReview}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-water-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:border-accent"
      >
        <Star className="size-4 fill-signal text-signal" aria-hidden />
        Leave us a Google review
        <ArrowUpRight className="size-4 text-steel" aria-hidden />
      </a>
    </div>
  );
}

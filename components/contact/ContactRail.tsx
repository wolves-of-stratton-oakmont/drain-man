import * as React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Direct-contact rail for the Contact page.
 *
 * The booking form is the primary action; this rail is for people who'd rather
 * call, email, or look us up. The phone number is set in the mono utility face —
 * in this trade the number is a thing you dial, like an instrument readout.
 *
 * All facts come from `@/lib/site` — never hard-coded.
 */

const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.address.full,
)}`;

function RailRow({
  icon: Icon,
  label,
  children,
  className,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex gap-4 py-5 first:pt-0 last:pb-0", className)}>
      <span
        aria-hidden="true"
        className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue"
      >
        <Icon className="size-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-steel">
          {label}
        </p>
        <div className="mt-1.5">{children}</div>
      </div>
    </li>
  );
}

export function ContactRail({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <ul className="divide-y divide-water-line">
        <RailRow icon={Phone} label="Call or text">
          <a
            href={site.phone.href}
            className="font-mono text-h3 font-medium text-ink underline-offset-4 transition-colors hover:text-blue focus-visible:text-blue"
          >
            {site.phone.display}
          </a>
          <p className="mt-1 text-sm text-steel">
            Backed up right now? Call — we&apos;ll get someone moving.
          </p>
        </RailRow>

        <RailRow icon={Mail} label="Email">
          <a
            href={`mailto:${site.email}`}
            className="break-words text-lead font-semibold text-ink underline-offset-4 transition-colors hover:text-blue hover:underline focus-visible:text-blue"
          >
            {site.email}
          </a>
          <p className="mt-1 text-sm text-steel">
            Best for non-urgent quotes and questions.
          </p>
        </RailRow>

        <RailRow icon={MapPin} label="Shop">
          <a
            href={mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-start gap-1.5 text-ink underline-offset-4 transition-colors hover:text-blue focus-visible:text-blue"
          >
            <span className="not-italic text-base leading-snug">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.province} {site.address.postal}
            </span>
            <ArrowUpRight
              className="mt-0.5 size-4 shrink-0 text-steel transition-colors group-hover:text-blue"
              aria-hidden
            />
          </a>
          <p className="mt-1 text-sm text-steel">Get directions to the shop.</p>
        </RailRow>

        <RailRow icon={Clock} label="Hours">
          <p className="text-base text-ink">
            Monday to Friday, 8 a.m. – 5 p.m.
          </p>
          <p className="mt-1 text-sm text-steel">
            For burst pipes and floods after hours, call and leave a message —
            it reaches the on-call line.
          </p>
        </RailRow>
      </ul>

      <a
        href={site.links.googleReview}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-2 self-start rounded-full border border-water-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue focus-visible:border-blue"
      >
        <Star className="size-4 fill-signal text-signal" aria-hidden />
        Leave us a Google review
        <ArrowUpRight className="size-4 text-steel" aria-hidden />
      </a>
    </div>
  );
}

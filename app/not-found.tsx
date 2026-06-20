import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Section, buttonClasses } from "@/components/ui";
import { DrainLine } from "@/components/sections/DrainLine";
import { primaryNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "We couldn't find that page. Head back home, browse our drain and plumbing services, or call Drainman INC.",
};

export default function NotFound() {
  return (
    <Section tone="water" spacing="lg" containerWidth="narrow">
      <div className="flex flex-col items-center text-center">
        <span className="font-mono text-eyebrow uppercase tracking-[0.18em] text-blue">
          404 — line not found
        </span>

        {/* Trade-grounded: this route doesn't connect to a main line. The locate
            dot runs the line but finds no joint at the end. */}
        <div className="mt-6 w-full max-w-sm">
          <DrainLine animated joint />
        </div>

        <h1 className="mt-8 text-display-lg text-ink">
          This line doesn&apos;t connect
        </h1>
        <p className="mt-4 max-w-[52ch] text-lead text-steel">
          We ran the camera down it and came up empty — the page you&apos;re
          after has moved or never existed. Let&apos;s get you back to the main
          line.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className={buttonClasses({ size: "lg" })}>
            Back home
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <a
            href={site.phone.href}
            className={cn(buttonClasses({ variant: "secondary", size: "lg" }), "font-mono")}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {site.phone.display}
          </a>
        </div>

        {/* Quiet wayfinding back to the real pages */}
        <nav
          aria-label="Site pages"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-base"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-steel underline decoration-water-line underline-offset-4 transition-colors hover:text-blue hover:decoration-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </Section>
  );
}

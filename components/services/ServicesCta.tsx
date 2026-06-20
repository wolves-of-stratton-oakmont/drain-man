import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { buttonClasses } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * Closing call-to-action for the Services page. Heroic framing: the drain expert
 * who shows up when things back up. Primary = book; secondary = call now.
 * Page-owned so the Services page is self-contained; Home may use the shared CtaBand.
 */
export function ServicesCta() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-ink px-6 py-12 text-white md:px-12 md:py-16">
      {/* The Line, threading across the dark band */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-10 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-blue) 12%, var(--color-blue) 88%, transparent 100%)",
        }}
      >
        <span className="absolute left-[18%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_0_4px_rgba(255,198,41,0.25)]" />
      </div>

      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-h2 text-white">
            Backed up, flooding, or just not sure?
          </h2>
          <p className="mt-3 text-lead text-white/80">
            Tell us what&apos;s happening and we&apos;ll figure out the right fix —
            with our rates up front, not at the front door. No deposits, ever.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className={buttonClasses({ variant: "primary", size: "lg" })}
          >
            Book a service
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <a
            href={site.phone.href}
            className={buttonClasses({
              variant: "secondary",
              size: "lg",
              className: "border-white/25 bg-transparent text-white hover:border-signal hover:text-signal",
            })}
          >
            <Phone className="h-5 w-5" aria-hidden />
            <span className="font-mono">{site.phone.display}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

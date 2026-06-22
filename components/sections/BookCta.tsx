import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Section, buttonClasses } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * Site-wide closing call-to-action — the one heroic dark moment at the end of
 * every page (except Contact, which is itself the booking destination). Drop it
 * in with no props: `<BookCta />`.
 */
export function BookCta() {
  return (
    <Section tone="white" spacing="lg">
      <div className="relative overflow-hidden rounded-2xl bg-ink px-6 py-12 text-white md:px-12 md:py-16">
        {/* The Line, threading across the dark band */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-10 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--color-accent) 12%, var(--color-accent) 88%, transparent 100%)",
          }}
        >
          <span className="absolute left-[18%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_0_4px_rgba(255,198,41,0.25)]" />
        </div>

        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-h2 text-white">
              Backed up, flooding, or just not sure?
            </h2>
            <p className="mt-3 text-lead text-white/80">
              Tell us what&apos;s happening and we&apos;ll figure out the right fix —
              with our rates up front, not at the front door. No deposits, ever.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className={buttonClasses({
                variant: "primary",
                size: "lg",
                className: "w-full whitespace-nowrap sm:w-auto",
              })}
            >
              Book a service
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <a
              href={site.phone.href}
              className={buttonClasses({
                variant: "secondary",
                size: "lg",
                className:
                  "w-full whitespace-nowrap border-white/25 bg-transparent text-white hover:border-signal hover:text-signal sm:w-auto",
              })}
            >
              <Phone className="h-5 w-5" aria-hidden />
              <span className="font-mono">{site.phone.display}</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

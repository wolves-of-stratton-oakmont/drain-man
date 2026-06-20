import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, buttonClasses } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * Home hero — the page thesis. A vivid Drain Blue field with the Toronto skyline
 * clipped into a media panel, the "drain line" spine running from the headline,
 * and the heroic dual CTA. LCP image is the skyline (priority).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Deep-blue field with a subtle "water flow" wash — purely ambient, behind content */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,var(--color-blue)_0%,var(--color-blue-deep)_42%,var(--color-ink)_100%)]" />
        {/* faint horizontal "pipe runs" — quiet texture, not decoration overload */}
        <div className="absolute inset-x-0 top-1/3 h-px bg-white/5" />
        <div className="absolute inset-x-0 top-2/3 h-px bg-white/5" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-28">
          {/* Copy column */}
          <div className="flex flex-col">
            {/* Enercare partner lockup — front and center: the first branded thing
                you see, and a direct path to book a protected plan. The red logo
                sits on a white pill so it never clashes with the blue field. */}
            <a
              href={site.links.enercare}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-7 inline-flex w-fit items-center gap-3 rounded-full bg-white py-2 pl-4 pr-3 shadow-[var(--shadow-md)] transition-transform duration-200 ease-[var(--ease-flow)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              <Image
                src="/brand/enercare-logo.svg"
                alt="Enercare"
                width={104}
                height={34}
                className="h-5 w-auto"
              />
              <span aria-hidden="true" className="hidden h-4 w-px bg-ink/15 sm:block" />
              <span className="hidden text-sm font-semibold text-ink sm:inline">
                Authorized partner — book a protected plan
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 text-blue transition-transform duration-200 ease-[var(--ease-flow)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <span className="inline-flex w-fit items-center gap-2 font-mono text-eyebrow font-medium uppercase text-signal">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-signal" />
              Toronto drain specialists since {site.founded}
            </span>

            <h1 className="mt-5 text-display-xl font-display font-extrabold leading-[0.95] tracking-[-0.01em] text-white">
              When the drain backs up,
              <br className="hidden sm:block" /> we trace it{" "}
              <span className="text-signal">to the source.</span>
            </h1>

            {/* The Line — runs from the headline down into the page */}
            <div className="relative mt-7 mb-7 hidden h-[3px] w-56 rounded-full bg-gradient-to-r from-signal via-signal to-transparent sm:block">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_0_4px_rgba(255,198,41,0.25)]"
              />
            </div>

            <p className="mt-6 max-w-[54ch] text-lead text-white/85 sm:mt-0">
              Drainman INC is a second-generation, family-owned drain and plumbing
              company serving Toronto and the GTA. We bring the cameras, snakes, and
              hydro-jets that clear the main line others can&apos;t — and we tell you the
              price up front, not at the front door.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className={buttonClasses({ variant: "primary", size: "lg" })}
              >
                Book a service
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Link>
              <a
                href={site.phone.href}
                className={buttonClasses({
                  variant: "secondary",
                  size: "lg",
                  className:
                    "border-white/25 bg-transparent text-white hover:border-signal hover:text-signal",
                })}
              >
                <Phone aria-hidden="true" className="h-5 w-5" />
                <span className="font-mono tracking-tight">{site.phone.display}</span>
              </a>
            </div>

            {/* Spec chips — the things this trade actually measures / codes */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              <li className="inline-flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="h-4 w-4 text-signal" />
                Fully licensed &amp; insured
              </li>
              <li className="inline-flex items-center gap-2 font-mono">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
                Master plumber #{site.licenses.master}
              </li>
              <li className="inline-flex items-center gap-2 font-mono">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
                Family owned since {site.founded}
              </li>
            </ul>
          </div>

          {/* Media column — the trade itself: drain & plumbing tools laid out for a job */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-md)] ring-1 ring-white/10">
              <Image
                src="/images/home/plumbing-tools.jpg"
                alt="A plumber in work gloves fitting a threaded pipe connection with specialized blue tools"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
              {/* readability scrim so the floating caption stays AA */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
              />
              <div className="absolute inset-x-5 bottom-5">
                <p className="font-mono text-sm uppercase tracking-[0.14em] text-white/90">
                  The right tools for the main line
                </p>
                <p className="mt-1 text-sm text-white/75">
                  Cameras, snakes, and hydro-jets — serving Toronto &amp; the GTA.
                </p>
              </div>
            </div>

            {/* Floating "we located it" marker on the skyline — the signature dot */}
            <span
              aria-hidden="true"
              className="absolute -left-3 top-10 hidden h-4 w-4 rounded-full bg-signal shadow-[0_0_0_6px_rgba(255,198,41,0.2)] lg:block"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonClasses } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * Home hero — one big rounded panel. A full-bleed work photo fills the whole
 * frame, washed with the brand accent (blue tint) and darkened from the left so
 * the oversized headline and dual CTA read cleanly on top. A white contact band
 * runs along the bottom, carrying the Enercare partnership.
 *
 * Everything colour here derives from the design tokens (--color-accent → the
 * `accent`/`ink` ramp in globals.css), so the single brand knob still recolours
 * the entire hero. LCP = the photo.
 */
export function Hero() {
  return (
    <section className="bg-white pt-4 pb-4 sm:pt-5 sm:pb-5">
      <div className="mx-auto w-[95%] max-w-[1840px]">
        <div className="relative overflow-hidden rounded-xl border border-accent-line bg-white shadow-[var(--shadow-md)]">
          {/* Full-bleed image hero — sized so the whole panel (image + contact
              band) fits within a laptop viewport without scrolling. */}
          <div className="relative flex min-h-[clamp(560px,80svh,720px)] flex-col justify-center lg:min-h-[clamp(460px,calc(100svh-15rem),700px)]">
            <Image
              src="/Plumber in toronto.png"
              alt="A Drainman plumber standing on the Toronto waterfront with the city skyline and CN Tower behind"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_28%] lg:object-[72%_30%] scale-x-[-1]"
            />

            {/* Blue tint — a flat wash of the brand accent across the whole photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-accent/35 mix-blend-multiply"
            />
            {/* Legibility gradient — on mobile the copy is full-width, so darken
                overall (bottom-heavy); on desktop the copy sits left, so darken
                from the left. Uses the accent-bled `ink`. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/35 lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/55 lg:to-ink/5"
            />

            {/* Copy — anchored to the left of the frame */}
            <div className="relative mr-auto w-full max-w-[44rem] px-7 py-14 sm:px-10 sm:py-16 lg:py-16 lg:pl-16 lg:pr-14 xl:pl-20">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
                Toronto drain specialists since {site.founded}
              </span>

              <h1 className="mt-5 max-w-[24ch] text-[clamp(2.25rem,3.6vw,3.5rem)] font-display font-extrabold leading-[1.03] tracking-[-0.015em] text-white">
                When the drain backs up,{" "}
                <span className="text-white underline decoration-accent decoration-[6px] underline-offset-[10px]">
                  we trace the source.
                </span>
              </h1>

              <p className="mt-5 max-w-[52ch] text-lead text-white/85">
                Second-generation Toronto &amp; GTA drain specialists. We clear what
                others can&apos;t — at a price we quote up front.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className={buttonClasses({ variant: "primary", size: "lg" })}
                >
                  Book a service
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </Link>
                <a
                  href={site.phone.href}
                  className={buttonClasses({ variant: "secondary", size: "lg" })}
                >
                  <Phone aria-hidden="true" className="h-5 w-5" />
                  <span className="font-mono tracking-tight">{site.phone.display}</span>
                </a>
              </div>

              {/* Quiet trust line */}
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-white/80">
                <span>Licensed &amp; insured</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                <span>Family owned since {site.founded}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                <span>Serving Toronto &amp; the GTA</span>
              </div>
            </div>
          </div>

          {/* Accent contact band — quick contact on the far left, Enercare
              lockup pushed to the far right. */}
          <div className="relative flex flex-col gap-6 bg-accent px-7 py-6 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-5 lg:pl-16 lg:pr-6 xl:pl-20 xl:pr-6">
            {/* Quick contact — first thing on the left */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
              <a
                href={site.phone.href}
                className="group inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              >
                <Phone aria-hidden="true" className="h-5 w-5 shrink-0" />
                <span className="flex flex-col leading-tight">
                  <span className="text-xs uppercase tracking-[0.14em] text-white/70">
                    Call anytime
                  </span>
                  <span className="text-base font-semibold group-hover:underline">
                    {site.phone.display}
                  </span>
                </span>
              </a>
              <div className="inline-flex items-center gap-3">
                <MapPin aria-hidden="true" className="h-5 w-5 shrink-0" />
                <span className="flex flex-col leading-tight">
                  <span className="text-xs uppercase tracking-[0.14em] text-white/70">
                    Serving
                  </span>
                  <span className="text-base font-semibold">Toronto &amp; the GTA</span>
                </span>
              </div>
            </div>

            {/* Enercare partner lockup — white pill so the red mark stays
                brand-safe. Pushed to the far right. */}
            <a
              href={site.links.enercare}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center gap-5 rounded-xl bg-white py-3 pl-6 pr-5 shadow-[var(--shadow-md)] transition-transform duration-200 ease-[var(--ease-flow)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal lg:w-[30.87rem]"
            >
              <Image
                src="/brand/enercare-logo.svg"
                alt="Enercare"
                width={176}
                height={57}
                className="h-9 w-auto"
              />
              <span aria-hidden="true" className="h-9 w-px bg-ink/10" />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold text-ink">
                  Authorized partner
                </span>
                <span className="text-sm text-steel">Book a protected plan</span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="ml-auto h-6 w-6 shrink-0 text-accent transition-transform duration-200 ease-[var(--ease-flow)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

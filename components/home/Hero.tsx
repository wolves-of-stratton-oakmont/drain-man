import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonClasses } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * Home hero — the whole thing lives in one big rounded panel. A photo of the
 * tradesperson on the left fades out into the panel (masked, washed with the
 * brand accent); the thesis and dual CTA sit on the right; and an accent
 * contact band runs along the bottom, carrying the Enercare partnership on a
 * white pill (the Enercare red mark only ever sits on white). LCP = the photo.
 */
export function Hero() {
  return (
    <section className="bg-white pt-4 sm:pt-5">
      <div className="mx-auto w-[95%] max-w-[1840px]">
        <div className="relative overflow-hidden rounded-2xl border border-accent-line bg-white shadow-[var(--shadow-md)]">
          {/* faint accent arcs, top-right — quiet character, behind everything */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-28 h-[26rem] w-[26rem] rounded-full border border-accent/10" />
            <div className="absolute -right-12 -top-44 h-[26rem] w-[26rem] rounded-full border border-accent/[0.06]" />
          </div>

          <div className="relative grid items-stretch lg:grid-cols-2">
            {/* Media — fades out toward the copy (rightward on desktop, down on mobile) */}
            <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[clamp(420px,calc(100svh_-_16.5rem),800px)]">
              <Image
                src="/images/home/hero-plumber.jpg"
                alt="A Drainman tradesperson in safety gear holding a pipe wrench, ready for the job"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_top]"
              />
              {/* Dissolve the photo into the panel — lands on pure white so it
                  meets the white copy column with no seam (down on mobile,
                  rightward on desktop). A faint warm tint mid-fade keeps it on
                  brand without muddying the image. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-transparent from-45% via-white/30 via-75% to-white lg:bg-gradient-to-r lg:from-40% lg:via-65%"
              />
            </div>

            {/* Copy */}
            <div className="flex flex-col justify-center px-7 pb-9 pt-2 sm:px-10 lg:py-10 lg:pl-14 lg:pr-16 xl:pl-20">
              <span className="inline-flex w-fit items-center gap-2 font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-accent">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
                Toronto drain specialists since {site.founded}
              </span>

              <h1 className="mt-4 text-[clamp(1.75rem,2.9vw,2.5rem)] font-display font-extrabold leading-[1.05] tracking-[-0.015em] text-ink">
                When the drain backs up,{" "}
                <span className="text-accent">we trace it to the source.</span>
              </h1>

              <p className="mt-4 max-w-[46ch] text-base text-steel">
                Second-generation, family-owned drain &amp; plumbing specialists for
                Toronto and the GTA — cameras, snakes, and hydro-jets that clear what
                others can&apos;t, at a price we quote up front.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className={buttonClasses({ variant: "primary", size: "md" })}
                >
                  Book a service
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </Link>
                <a
                  href={site.phone.href}
                  className={buttonClasses({ variant: "secondary", size: "md" })}
                >
                  <Phone aria-hidden="true" className="h-5 w-5" />
                  <span className="font-mono tracking-tight">{site.phone.display}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Accent contact band — mirrors the hero's two columns, so the
              Enercare lockup sits directly under the copy block and spans its
              full width. */}
          <div className="relative grid bg-accent text-white lg:grid-cols-2">
            {/* Quick contact — under the image side */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4 px-7 pb-2 pt-6 sm:px-10 lg:py-5">
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

            {/* Enercare partner lockup — fills the right column (white pill so the
                red Enercare mark stays brand-safe) */}
            <div className="flex items-center px-7 pb-6 sm:px-10 lg:py-5 lg:pl-14 lg:pr-16 xl:pl-20">
              <a
                href={site.links.enercare}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center gap-5 rounded-xl bg-white py-3 pl-6 pr-5 shadow-[var(--shadow-md)] transition-transform duration-200 ease-[var(--ease-flow)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
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
      </div>
    </section>
  );
}

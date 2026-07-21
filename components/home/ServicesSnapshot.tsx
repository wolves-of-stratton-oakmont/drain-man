import Link from "next/link";
import Image from "next/image";
import { Droplets, ShieldAlert, Waves, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";

const services = [
  {
    icon: Droplets,
    image: "/images/home/service-drains.jpg",
    alt: "A plumber's hands fitting drain pipework under a fixture",
    eyebrow: "Drains & sewers",
    title: "Drain services",
    blurb:
      "Blocked drains cleared, sewer video inspections, and underground line location — we find the cause, not just the symptom.",
    href: "/services#drain-services",
  },
  {
    icon: ShieldAlert,
    image: "/images/home/service-flood.jpg",
    alt: "A backwater valve and sump pump system on a basement line",
    eyebrow: "Backflow & sumps",
    title: "Flood prevention",
    blurb:
      "Backwater valves and sump systems installed, repaired, and maintained — so sewer backflow never reaches your basement.",
    href: "/services#flood-prevention",
  },
  {
    icon: Waves,
    image: "/images/home/service-flushing.jpg",
    alt: "A technician servicing a boiler and heating system",
    eyebrow: "Heating & flow",
    title: "Power flushing",
    blurb:
      "Grease and sludge cleared from pipes and heating systems — the fix for slow heat, cold spots, and cloudy tap water.",
    href: "/services#power-flushing",
  },
];

/** Snapshot of the three core service categories, each linking into /services. */
export function ServicesSnapshot() {
  return (
    <Section tone="water" spacing="lg">
      <SectionHeading
        eyebrow="What we do"
        title="Three things we know cold"
        description="From an everyday blocked sink to a main line you can't reach, we bring the right tool for the job — and the honest price to go with it."
      />

      <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
        {services.map(({ icon: Icon, image, alt, eyebrow, title, blurb, href }) => (
          <Link
            key={title}
            href={href}
            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[var(--shadow-sm)] ring-1 ring-water-line transition-[transform,box-shadow] duration-200 ease-[var(--ease-flow)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            {/* Image cap */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 ease-[var(--ease-flow)] group-hover:scale-105"
              />
            </div>

            {/* Body — left-aligned, matching the site's structure */}
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-steel">
                  {eyebrow}
                </span>
              </div>

              <h3 className="mt-4 text-h3 font-display font-bold text-ink">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-steel">{blurb}</p>

              <span className="mt-auto inline-flex items-center gap-1.5 border-t border-water-line pt-4 font-display text-sm font-bold text-accent transition-[gap] duration-200 ease-[var(--ease-flow)] group-hover:gap-2.5">
                Learn more
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

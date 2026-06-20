import Link from "next/link";
import { Droplets, ShieldAlert, Waves, ArrowRight } from "lucide-react";
import { Section, SectionHeading, Card } from "@/components/ui";

const services = [
  {
    icon: Droplets,
    title: "Drain services",
    blurb:
      "Blocked drains cleared, drains installed and cleaned out, sewer video inspections, and underground line location.",
    items: ["Blocked toilet & sink", "Backwater valves", "Sump pumps & ejectors"],
    href: "/services#drain-services",
  },
  {
    icon: ShieldAlert,
    title: "Flood prevention",
    blurb:
      "We install, repair, and maintain backwater systems that stop sewer and municipal backflow from flooding your home.",
    items: ["Backwater valves", "Sump pumps", "Basement protection"],
    href: "/services#flood-prevention",
  },
  {
    icon: Waves,
    title: "Power flushing",
    blurb:
      "We clear grease and sludge from pipes and heating systems — the fix for slow heat, cold spots, and cloudy tap water.",
    items: ["Boiler & heating lines", "Noisy boilers", "Cloudy tap water"],
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

      <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
        {services.map(({ icon: Icon, title, blurb, items, href }) => (
          <Link
            key={title}
            href={href}
            className="group rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            <Card variant="raised" className="flex h-full flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue text-white shadow-[var(--shadow-blue)]">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-h3 font-display font-bold text-ink">{title}</h3>
              <p className="mt-3 text-base text-ink/80">{blurb}</p>

              <ul className="mt-5 flex flex-col gap-2 text-sm text-steel">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-signal"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold text-blue transition-[gap] duration-200 ease-[var(--ease-flow)] group-hover:gap-2.5">
                See the full service
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

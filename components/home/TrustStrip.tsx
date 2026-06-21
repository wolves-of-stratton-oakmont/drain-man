import { CalendarClock, Users, BadgeCheck, MapPin } from "lucide-react";
import { Section } from "@/components/ui";
import { site } from "@/lib/site";

const items = [
  {
    icon: CalendarClock,
    label: `Since ${site.founded}`,
    detail: "Over 50 years on the line",
  },
  {
    icon: Users,
    label: "Family owned",
    detail: "Now run by the second generation",
  },
  {
    icon: BadgeCheck,
    label: `Licensed #${site.licenses.master}`,
    detail: "Master plumbing & drain license",
  },
  {
    icon: MapPin,
    label: "Toronto & the GTA",
    detail: "Scarborough, Brampton, Mississauga",
  },
];

/** Thin band of four scannable trust signals — true credentials, not filler. */
export function TrustStrip() {
  return (
    <Section tone="white" spacing="none" className="border-b border-water-line">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-12">
        {items.map(({ icon: Icon, label, detail }) => (
          <li key={label} className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="font-display text-lg font-bold leading-tight tracking-tight text-ink">
                {label}
              </span>
              <span className="mt-1 text-sm leading-snug text-steel">{detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

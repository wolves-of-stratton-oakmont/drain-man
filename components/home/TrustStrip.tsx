import { Section } from "@/components/ui";
import { site } from "@/lib/site";

const items = [
  {
    eyebrow: "On the line since",
    figure: site.founded,
    detail: "Over 50 years tracing and clearing Toronto's drains — second-generation, family-owned.",
  },
  {
    eyebrow: "Family owned",
    figure: "2nd gen",
    detail: "Still run by the family that started it — the name on the truck answers the phone.",
  },
  {
    eyebrow: "Master license",
    figure: `#${site.licenses.master}`,
    detail: "Fully licensed and insured for master plumbing and drain work.",
  },
  {
    eyebrow: "Service area",
    figure: "GTA",
    detail: "Toronto and across the GTA — Scarborough, Brampton, Mississauga and beyond.",
  },
];

/**
 * Trust figures — four credentials set as large display numerals with a mono
 * eyebrow and a short line of context, divided by hairline rules. No icons: the
 * numbers carry the weight, the dividers do the structuring.
 */
export function TrustStrip() {
  return (
    <Section tone="white" spacing="none" className="border-b border-water-line">
      <div className="py-12 md:py-16">
        <dl className="grid grid-cols-1 gap-y-10 border-t border-water-line sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4">
          {items.map(({ eyebrow, figure, detail }) => (
            <div
              key={eyebrow}
              className="flex flex-col pt-8 sm:px-7 sm:border-l sm:[&:nth-child(odd)]:border-l-0 lg:px-8 lg:[&:nth-child(odd)]:border-l lg:[&:first-child]:border-l-0"
            >
              <dt className="font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </dt>
              <dd className="mt-3 whitespace-nowrap font-display text-[clamp(1.875rem,2.4vw,2.5rem)] font-extrabold leading-none tracking-[-0.02em] text-ink">
                {figure}
              </dd>
              <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-steel">
                {detail}
              </p>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-xs text-steel/80">
          Licensed master plumbing &amp; drain contractor · serving Toronto &amp; the
          GTA since {site.founded}.
        </p>
      </div>
    </Section>
  );
}

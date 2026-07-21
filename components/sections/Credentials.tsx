import * as React from "react";
import { Users, Award, ShieldCheck, HandshakeIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Tone = "white" | "water" | "ink" | "blue";

export interface CredentialsProps {
  /** Background tone for the wrapping section. */
  tone?: Tone;
}

/**
 * Trust spine: who we are and what backs the work. The two licenses are the
 * load-bearing facts, so their numbers are set in the mono "instrument readout"
 * face (per DESIGN_SYSTEM — mono is for things this trade actually codes).
 * Family-owned-since-1972 and fully-insured round it out. Real differentiators,
 * shown as scannable cards rather than buried in a paragraph.
 */
export function Credentials({ tone = "white" }: CredentialsProps) {
  const onDark = tone === "ink" || tone === "blue";
  const yearsServing = new Date().getFullYear() - site.founded;

  const items = [
    {
      icon: Users,
      title: "Family owned since 1972",
      body: `Second-generation, hands-on owners. ${yearsServing}+ years serving Toronto and the GTA.`,
      data: null as string | null,
    },
    {
      icon: Award,
      title: "Master Plumbing License",
      body: "Covers all plumbing and drain work we take on.",
      data: site.licenses.master,
    },
    {
      icon: ShieldCheck,
      title: "Builders License",
      body: "Concrete, waterproofing, and basement underpinning too.",
      data: site.licenses.builder,
    },
    {
      icon: HandshakeIcon,
      title: "Fully insured",
      body: "Rates up front, not at the front door. No deposits to start.",
      data: null,
    },
  ];

  return (
    <Section tone={tone} spacing="lg">
      <SectionHeading
        onDark={onDark}
        eyebrow="Licensed, insured, accountable"
        title="The credentials behind the crew"
        description="Honest work has paperwork to back it. Here's what stands behind every job we do."
      />

      {/* Staggered grid — every other card drops a step so the row reads as a
          dynamic, offset rhythm rather than a flat strip. */}
      <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, body, data }, i) => (
          <div
            key={title}
            className={cn(
              "flex flex-col items-center rounded-xl border p-7 text-center transition-[transform,box-shadow] duration-200 ease-[var(--ease-flow)] hover:-translate-y-1",
              i % 2 === 1 && "lg:mt-14",
              onDark
                ? "border-white/12 bg-white/[0.04] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
                : "border-water-line bg-white shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]",
            )}
          >
            <span
              className={cn(
                "inline-flex h-16 w-16 items-center justify-center rounded-full",
                onDark
                  ? "bg-signal/15 text-signal"
                  : "bg-accent text-white shadow-[var(--shadow-accent)]",
              )}
            >
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            {/* Reserve two lines so 1- and 2-line titles share a baseline and
                the rows below stay aligned across all four cards. */}
            <h3
              className={cn(
                "mt-5 flex min-h-[2.4em] items-start justify-center text-h3 leading-[1.15]",
                onDark ? "text-white" : "text-ink",
              )}
            >
              {title}
            </h3>
            {/* Always reserve the license-number row; cards without a number get
                an invisible placeholder so every card's body text lines up. */}
            <p
              className={cn(
                "mt-1 font-mono text-sm font-medium tracking-tight",
                data ? (onDark ? "text-signal" : "text-accent") : "invisible",
              )}
              aria-hidden={data ? undefined : true}
            >
              {data ? `#${data}` : " "}
            </p>
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed",
                onDark ? "text-white/70" : "text-steel",
              )}
            >
              {body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

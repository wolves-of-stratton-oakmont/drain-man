import * as React from "react";
import Image from "next/image";
import { Check, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

type Tone = "white" | "water" | "ink" | "blue";

export interface PlumberVsTechnicianProps {
  /** Background tone for the wrapping section. */
  tone?: Tone;
  /** Tighter version for the Home page. */
  compact?: boolean;
}

type Row = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  kicker: string;
  blurb: string;
  work: string[];
  closer: string;
  /** us — the emphasized brand row */
  us?: boolean;
};

const rows: Row[] = [
  {
    image: "/images/home/compare-plumber.jpg",
    alt: "A plumber's gloved hands tightening a fixture valve with a wrench",
    eyebrow: "Where most stop",
    title: "A standard plumber",
    kicker: "Handles the fixtures inside your walls.",
    blurb:
      "Most plumbing calls stop where you can see them — at the tap, the toilet, the supply line. Important work, but it ends at the fixture.",
    work: [
      "Dripping faucets and taps",
      "Leaky supply lines and fittings",
      "Toilets, sinks, and fixtures",
      "Water heater swaps",
    ],
    closer: "Stops at the fixture.",
  },
  {
    image: "/images/home/compare-technician.jpg",
    alt: "A drain crew clearing a main sewer line at night with a jetting truck",
    eyebrow: "This is us",
    title: "A drain technician",
    kicker: "Traces and clears the main line, underground.",
    blurb:
      "When the blockage is past the fixture and down the main, it takes a camera, a locator, and a hydro-jet — plus the training to read what's down there.",
    work: [
      "Blocked and collapsed main drains",
      "Sewer camera inspection of the line",
      "Power snaking and hydro-jetting",
      "Backwater valves and flood prevention",
    ],
    closer: "Keeps going down the main.",
    us: true,
  },
];

export function PlumberVsTechnician({
  tone = "white",
  compact = false,
}: PlumberVsTechnicianProps) {
  const onDark = tone === "ink" || tone === "blue";

  return (
    <Section tone={tone} spacing={compact ? "md" : "lg"}>
      <SectionHeading
        align="center"
        onDark={onDark}
        eyebrow="Plumber vs. technician"
        title="Not every plumber runs the main line"
        description="Most plumbing problems stop at a faucet or a fixture. Backed-up drains start underground — and that takes a different trade, different training, and the right machines down the line."
      />

      <div className="mt-12 flex flex-col gap-6 md:mt-14 md:gap-8">
        {rows.map(({ image, alt, eyebrow, title, kicker, blurb, work, closer, us }, i) => {
          const imageRight = i % 2 === 1;
          // The "us" card is a bold red panel; text + marks go white. Other
          // cards follow the section tone.
          const light = us || onDark;
          return (
            <article
              key={title}
              className={cn(
                "grid items-stretch overflow-hidden rounded-2xl md:grid-cols-2",
                us
                  ? "bg-accent-deep shadow-[var(--shadow-md)]"
                  : onDark
                    ? "bg-white/[0.04] ring-1 ring-white/10"
                    : "bg-water ring-1 ring-water-line",
              )}
            >
              {/* Image half */}
              <div
                className={cn(
                  "relative min-h-[260px] md:min-h-[420px]",
                  imageRight && "md:order-2",
                )}
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content half */}
              <div
                className={cn(
                  "flex flex-col justify-center p-8 md:p-12 lg:p-14",
                  imageRight && "md:order-1",
                )}
              >
                <span
                  className={cn(
                    "inline-flex w-fit items-center gap-1.5 font-mono text-eyebrow font-medium uppercase tracking-[0.18em]",
                    us ? "text-white" : onDark ? "text-white/55" : "text-steel",
                  )}
                >
                  {us && <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />}
                  {eyebrow}
                </span>

                <h3 className={cn("mt-3 text-h3", light ? "text-white" : "text-ink")}>
                  {title}
                </h3>
                <p className={cn("mt-1 text-base", light ? "text-white/75" : "text-steel")}>
                  {kicker}
                </p>

                <p
                  className={cn(
                    "mt-5 max-w-prose text-base leading-relaxed",
                    light ? "text-white/85" : "text-ink/80",
                  )}
                >
                  {blurb}
                </p>

                {/* The checklist is only on the technician card — on the
                    standard card the same points are already in the paragraph. */}
                {us && (
                  <ul className="mt-6 flex flex-col gap-3">
                    {work.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-base text-white/95"
                      >
                        <Check
                          aria-hidden="true"
                          className="h-[18px] w-[18px] shrink-0 text-white"
                          strokeWidth={2.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <p
                  className={cn(
                    "mt-7 border-t pt-5 font-display text-lg font-bold tracking-tight",
                    us
                      ? "border-white/25 text-white"
                      : onDark
                        ? "border-white/15 text-white/70"
                        : "border-water-line text-steel",
                  )}
                >
                  {closer}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

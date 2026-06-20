import * as React from "react";
import { Wrench, ScanLine, Droplet, Gauge, ShieldCheck, Camera } from "lucide-react";
import { Section, SectionHeading, Card, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

type Tone = "white" | "water" | "ink" | "blue";

export interface PlumberVsTechnicianProps {
  /** Background tone for the wrapping section. */
  tone?: Tone;
  /** Tighter version for the Home page (smaller copy, no images of jobs). */
  compact?: boolean;
}

/** A standard plumber's everyday territory. */
const standardWork = [
  "Dripping faucets and taps",
  "Leaky supply lines and fittings",
  "Toilets, sinks, and fixtures",
  "Water heater swaps",
];

/** Where the technician keeps going — the main line, with real tools. */
const technicianWork = [
  "Blocked and collapsed main drains",
  "Sewer camera inspection of the line",
  "Power snaking and hydro-jetting",
  "Backwater valves and flood prevention",
];

/** The specialized kit that defines technician-level drain work. */
const tools = [
  { icon: Camera, label: "Sewer camera" },
  { icon: ScanLine, label: "Drain snake" },
  { icon: Droplet, label: "Hydro-jet" },
  { icon: Gauge, label: "Line locator" },
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

      {/* The contrast. The Line literally divides where a standard plumber stops
          from where the technician keeps going. This is a true split, not a
          numbered sequence — so no 01 / 02 / 03 markers. */}
      <div
        className={cn(
          "relative mt-10 grid gap-6 md:mt-14 md:gap-0 lg:grid-cols-2",
        )}
      >
        {/* Left — standard plumber */}
        <Card
          variant={onDark ? "ink" : "outline"}
          className={cn(
            "flex flex-col lg:rounded-r-none lg:border-r-0",
            onDark && "border-white/15",
          )}
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                onDark ? "bg-white/10 text-white" : "bg-ink/[0.06] text-steel",
              )}
            >
              <Wrench className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className={cn("text-h3", onDark ? "text-white" : "text-ink")}>
                A standard plumber
              </h3>
              <p
                className={cn(
                  "text-sm",
                  onDark ? "text-white/60" : "text-steel",
                )}
              >
                Handles the fixtures inside your walls
              </p>
            </div>
          </div>

          <ul className="mt-6 flex flex-col gap-3">
            {standardWork.map((item) => (
              <li
                key={item}
                className={cn(
                  "flex items-start gap-2.5 text-base",
                  onDark ? "text-white/80" : "text-ink/85",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                    onDark ? "bg-white/40" : "bg-steel",
                  )}
                />
                {item}
              </li>
            ))}
          </ul>

          <p
            className={cn(
              "mt-6 border-t pt-4 text-sm font-mono uppercase tracking-[0.14em]",
              onDark ? "border-white/15 text-white/55" : "border-water-line text-steel",
            )}
          >
            …stops at the fixture
          </p>
        </Card>

        {/* The Line — vertical on desktop, horizontal joint between cards on mobile */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-6 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <div className="drain-line relative h-full w-[3px] bg-[linear-gradient(180deg,transparent_0%,var(--color-blue)_6%,var(--color-blue)_94%,transparent_100%)]">
            <span className="drain-line__dot" style={{ left: "50%", top: "50%" }} />
          </div>
        </div>

        {/* Right — technician (the brand). Lifted with a blue edge to signal "this is us". */}
        <Card
          variant={onDark ? "ink" : "default"}
          className={cn(
            "relative flex flex-col lg:rounded-l-none",
            onDark
              ? "border-white/15 ring-1 ring-signal/30"
              : "border-blue/30 shadow-[var(--shadow-md)]",
          )}
        >
          <Badge tone="blue" className="absolute -top-3 left-6">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            This is us
          </Badge>

          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue text-white">
              <Camera className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className={cn("text-h3", onDark ? "text-white" : "text-ink")}>
                A drain technician
              </h3>
              <p
                className={cn(
                  "text-sm",
                  onDark ? "text-white/60" : "text-steel",
                )}
              >
                Traces and clears the main line, underground
              </p>
            </div>
          </div>

          <ul className="mt-6 flex flex-col gap-3">
            {technicianWork.map((item) => (
              <li
                key={item}
                className={cn(
                  "flex items-start gap-2.5 text-base",
                  onDark ? "text-white/85" : "text-ink/90",
                )}
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue"
                >
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
                    <path
                      d="M2.5 6.2 5 8.5 9.5 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {!compact && (
            <>
              <p
                className={cn(
                  "mt-6 text-sm font-mono uppercase tracking-[0.14em] text-blue",
                  onDark && "text-signal",
                )}
              >
                …keeps going down the main
              </p>
              <div
                className={cn(
                  "mt-4 flex flex-wrap gap-2 border-t pt-5",
                  onDark ? "border-white/15" : "border-water-line",
                )}
              >
                {tools.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold",
                      onDark
                        ? "bg-white/10 text-white"
                        : "bg-water text-ink",
                    )}
                  >
                    <Icon className="h-4 w-4 text-blue" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </>
          )}
        </Card>
      </div>
    </Section>
  );
}

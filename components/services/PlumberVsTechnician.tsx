import { Wrench, Camera, Radar, Check, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * The real distinction the client asked us to make explicit (SITE_SPEC §3.3):
 * a standard plumber handles surface fixtures; a drain technician keeps going
 * down the main line with cameras, snakes, and hydro-jets.
 *
 * This is a true contrast, not a sequence — so no 01/02/03 numbering. "The Line"
 * is used literally: it runs down the page and marks the point where a standard
 * plumber stops and the technician keeps tracing the problem to its source.
 */

const standardWork = [
  "Faucets, taps, and fixtures",
  "Leaks under the sink",
  "Running toilets and traps",
  "Swapping valves and supply lines",
];

const technicianWork = [
  "Sewer cameras run down the main",
  "Drain snakes and augers",
  "Hydro-jetting heavy buildup",
  "Locating buried pipe underground",
  "Backwater valves and flood systems",
];

export function PlumberVsTechnician() {
  return (
    <div className="relative grid gap-8 md:gap-10 lg:grid-cols-2">
      {/* The Line — vertical spine that splits the two roles. Decorative. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div
          className="h-full w-[3px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, var(--color-blue) 8%, var(--color-blue) 92%, transparent 100%)",
          }}
        />
        {/* Joint marker — the point where the standard plumber stops */}
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-blue bg-white" />
      </div>

      {/* Standard plumber — where it stops */}
      <div className="flex flex-col gap-4 rounded-2xl border border-water-line bg-white p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink/[0.06] text-steel">
            <Wrench className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-steel">
              A standard plumber
            </p>
            <h3 className="text-h3 text-ink">Handles the fixtures</h3>
          </div>
        </div>
        <p className="text-base text-ink/75">
          Most plumbers do solid work at the surface — the faucets, fixtures, and
          leaks you can see and reach.
        </p>
        <ul className="flex flex-col gap-2.5">
          {standardWork.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-base text-ink/85">
              <Check
                className="mt-0.5 h-5 w-5 shrink-0 text-steel"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-auto flex items-center gap-2 pt-2 font-display text-sm font-bold text-steel">
          <ArrowDown className="h-4 w-4" aria-hidden />
          Then the trail goes underground.
        </p>
      </div>

      {/* Technician — where we keep going */}
      <div className="flex flex-col gap-4 rounded-2xl border-2 border-blue bg-white p-6 shadow-[var(--shadow-md)] md:p-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue text-white">
            <Camera className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-blue">
              A drain technician
            </p>
            <h3 className="text-h3 text-ink">Keeps going down the main</h3>
          </div>
        </div>
        <p className="text-base text-ink/75">
          When the trouble is the main drain itself, you need specialized tools and
          the experience to read what they show you. That&apos;s the work we built
          this company on.
        </p>
        <ul className="flex flex-col gap-2.5">
          {technicianWork.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-base text-ink/85">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          <Badge tone="blue">
            <Radar className="h-4 w-4" aria-hidden />
            That&apos;s us
          </Badge>
          <span className="text-sm text-steel">
            Toronto&apos;s drain specialists since {site.founded}.
          </span>
        </div>
      </div>
    </div>
  );
}

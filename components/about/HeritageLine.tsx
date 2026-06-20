import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * The heritage story, threaded along a vertical drain line — the locked
 * signature element ("The Line"). The beats are genuinely ordered (an arc
 * from England to a founded company to the second generation), so a sequenced
 * spine encodes something true here rather than faking a numbered process.
 *
 * Each beat sits beside a blue pipe spine with a Signal-Yellow locate-dot —
 * the "we found it" marker a sewer camera leaves as it runs the line.
 */

type Beat = {
  /** Year or short tag shown in mono — the "locate" reading on the line. */
  marker: string;
  title: string;
  body: string;
};

const beats: Beat[] = [
  {
    marker: "From England",
    title: "Bill Barber crosses the Atlantic",
    body: "Bill came over from England and learned the trade the hands-on way, starting out as a plumber. The company began as little more than a plan and a willingness to outwork everyone.",
  },
  {
    marker: "The turn",
    title: "He follows the work underground",
    body: "Plumbers were everywhere, but the hard, in-demand jobs were below the floor — the blocked mains and sewer lines nobody else wanted. Bill leaned into drains, and that became the whole craft.",
  },
  {
    marker: "The name",
    title: "Contractors start calling him “the Drain Man”",
    body: "Builders and contractors across the GTA learned that if a drain had them stumped, you called Bill. The nickname stuck, and the company took it for its own.",
  },
  {
    marker: "1972",
    title: "The Drain Man Inc is founded",
    body: "Bill put his name and his word behind it: honest rates told up front, no deposits, and work that earns the next job by referral instead of advertising.",
  },
  {
    marker: "Today",
    title: "The second generation runs the line",
    body: "Bill’s son John and the rest of the family carry it forward with the same values — still hands-on, still answering the phone, still treating your home like the work has their name on it. Because it does.",
  },
];

export function HeritageLine({ className }: { className?: string }) {
  return (
    <ol className={cn("relative space-y-10 md:space-y-12", className)}>
      {beats.map((beat, i) => {
        const last = i === beats.length - 1;
        return (
          <li key={beat.marker} className="relative grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-8">
            {/* The spine column: pipe rule + locate-dot */}
            <div className="relative flex w-6 justify-center md:w-8" aria-hidden="true">
              {/* pipe rule running through the column (not on the last beat) */}
              {!last && (
                <span className="absolute top-1 left-1/2 h-full w-[3px] -translate-x-1/2 rounded-full bg-blue/25" />
              )}
              {/* locate-dot: yellow head ringed in blue */}
              <span className="relative z-10 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue shadow-[var(--shadow-sm)]">
                <span className="h-2.5 w-2.5 rounded-full bg-signal" />
              </span>
            </div>

            {/* Content column */}
            <div className="pb-1">
              <span className="font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-blue">
                {beat.marker}
              </span>
              <h3 className="mt-1.5 text-h3 font-display font-extrabold tracking-[-0.01em] text-ink">
                {beat.title}
              </h3>
              <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-ink/85">
                {beat.body}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

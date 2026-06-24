/**
 * Timeline — the About-page "depth gauge" (DESIGN-BRIEF §8.6.5: "the depth-rule
 * used as a vertical/horizontal gauge"). A real chronological sequence, so the
 * descending order carries meaning. Mono years read like gauge depth markers on
 * a hairline rail with amber ticks; Archivo milestone titles + body to the side.
 *
 * Copy is passed in verbatim from CONTENT §3.5 (page owns the strings).
 * Static + server-rendered; no client JS. Reduced motion is moot (no animation).
 */

import * as React from "react";

export interface Milestone {
  /** Gauge reading, e.g. "1972", "1980s–90s", "Today". */
  year: string;
  body: string;
}

export interface TimelineProps {
  milestones: Milestone[];
  className?: string;
}

export function Timeline({ milestones, className }: TimelineProps) {
  return (
    <ol className={className}>
      {milestones.map((m, i) => {
        const last = i === milestones.length - 1;
        return (
          <li key={m.year} className="relative grid grid-cols-[auto_1fr] gap-x-5">
            {/* gauge column: the rail, an amber depth-tick, and the year reading */}
            <div className="relative flex flex-col items-center">
              {/* the rail hairline runs through the whole item except after the last */}
              {!last ? (
                <span
                  aria-hidden="true"
                  className="absolute top-[10px] bottom-[-4px] left-1/2 w-px -translate-x-1/2 bg-mortar-2"
                />
              ) : null}
              {/* amber depth-tick marker at this reading */}
              <span
                aria-hidden="true"
                className="relative z-10 mt-[6px] h-[10px] w-[10px] rounded-full border-2 border-amber bg-concrete"
              />
            </div>

            {/* reading + milestone, with breathing room before the next */}
            <div className={last ? "pb-0" : "pb-8"}>
              <div className="font-mono text-eyebrow uppercase tracking-[0.16em] text-ember">
                {m.year}
              </div>
              <p className="mt-3 max-w-[58ch] text-body text-ink">{m.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default Timeline;

/**
 * Stat + StatGrid (ARCHITECTURE §4.14; DESIGN-BRIEF §6.6).
 *
 * Oversized mono numeral (text-stat-xl) + uppercase mono caption. Counts up from
 * 0 on first view using stat.countTo (reduced-motion → final value instantly).
 * Non-numeric values ("24/7", "GTA") render as-is. Tabular nums. 4-up → 2×2.
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/site";

/* ----------------------------- count-up hook ----------------------------- */
function useCountUp(
  target: number | undefined,
  active: boolean,
  durationMs = 1400,
) {
  const [value, setValue] = React.useState(target ?? 0);
  const started = React.useRef(false);

  React.useEffect(() => {
    if (target === undefined) return;
    if (!active || started.current) return;
    started.current = true;

    // Under reduced motion, collapse the duration so the very first frame lands
    // on the target — the update happens inside the rAF callback (a subscription),
    // never synchronously in the effect body.
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dur = reduce ? 0 : durationMs;

    let raf = 0;
    const start = performance.now();
    const from = 0;
    const tick = (now: number) => {
      const t = dur === 0 ? 1 : Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(from + (target - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, durationMs]);

  return value;
}

export interface StatProps {
  stat: Stat;
  onDark?: boolean;
  active?: boolean;
  className?: string;
}

export function Stat({ stat, onDark = false, active = true, className }: StatProps) {
  const counted = useCountUp(stat.countTo, active);
  const isNumeric = stat.countTo !== undefined;
  // For the $0 case the value is "$0"; we render prefix + counted.
  const display = isNumeric
    ? `${stat.prefix ?? ""}${counted}${stat.suffix ?? ""}`
    : stat.value;

  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <span
        className={cn(
          // text-stat (52→76px) suits a 4–5-up row; text-stat-xl is for a lone
          // hero stat and overflows narrow columns.
          "font-mono text-stat leading-none tabular-nums",
          onDark ? "text-amber" : "text-teal",
        )}
      >
        {display}
      </span>
      <span
        className={cn(
          "font-mono text-eyebrow uppercase tracking-[0.14em]",
          onDark ? "text-on-dark-mut" : "text-steel",
        )}
      >
        {stat.caption}
      </span>
    </div>
  );
}

export interface StatGridProps {
  stats: Stat[];
  onDark?: boolean;
  className?: string;
}

export function StatGrid({ stats, onDark = false, className }: StatGridProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 5 stats look best as 2/3-up wrapping; generic: 2 cols mobile → up to 5 on xl.
  const cols =
    stats.length >= 5
      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      : "grid-cols-2 lg:grid-cols-4";

  return (
    <div
      ref={ref}
      className={cn("grid gap-x-8 gap-y-8", cols, className)}
    >
      {stats.map((s) => (
        <Stat key={s.caption} stat={s} onDark={onDark} active={active} />
      ))}
    </div>
  );
}

export default StatGrid;

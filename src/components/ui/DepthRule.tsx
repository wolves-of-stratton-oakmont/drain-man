/**
 * DepthRule — the signature gauge divider (ARCHITECTURE §4.6; DESIGN-BRIEF §4.4):
 * a hairline with amber tick marks every 64px. Wraps the `.depth-rule` class.
 * Use 2–3 per page max — it's punctuation, not wallpaper.
 *
 * Optionally "draws" left→right once on first view (reduced-motion: static),
 * via a CSS clip animation gated by IntersectionObserver.
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DepthRuleProps {
  onDark?: boolean;
  /** animate the draw-in on first view. Default true. */
  animate?: boolean;
  className?: string;
}

export function DepthRule({
  onDark = false,
  animate = true,
  className,
}: DepthRuleProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [drawn, setDrawn] = React.useState(!animate);

  // The effect only sets state from the IntersectionObserver callback (a
  // subscription, not a synchronous effect-body update). Under reduced motion the
  // global CSS neutralizes the clip transition, so the "draw" is simply instant.
  React.useEffect(() => {
    if (!animate || drawn) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setDrawn(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate, drawn]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("depth-rule", onDark && "depth-rule--on-dark", className)}
      style={
        animate
          ? {
              clipPath: drawn ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
              transition: "clip-path 700ms var(--ease-depth)",
            }
          : undefined
      }
    />
  );
}

export default DepthRule;

/**
 * Logo — the DRAIN MAN brand lockup (DESIGN-BRIEF §6.2).
 *
 * Mark: a teal water-drop nested inside a pipe-ring (a pipe cross-section /
 * collar drawn as a heavy ring), with a small amber depth-tick on the ring —
 * the "below grade" gauge motif. Wordmark: "DRAIN MAN" set in Archivo 800.
 *
 * Rendered as inline SVG/text (crisp at any size, themeable). The standalone
 * SVG exports for favicon/footer live at /images/brand/*.svg (IMAGE-SPEC §8).
 *
 *   <Logo />                  default (dark wordmark, for light surfaces)
 *   <Logo variant="light" /> reversed (light wordmark, for dark surfaces)
 *   <Logo markOnly />         just the mark (e.g. compact / favicon contexts)
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export interface LogoProps {
  variant?: "default" | "light";
  /** render only the drop-in-pipe-ring mark, no wordmark. */
  markOnly?: boolean;
  /** px height of the mark; the wordmark scales alongside. Default 34. */
  size?: number;
  className?: string;
}

/**
 * The mark only — a 40×40 artboard. Colors are passed so the same geometry
 * drives both the React component and the exported standalone SVGs.
 */
export function LogoMark({
  size = 34,
  className,
  ringColor = "var(--color-teal)",
  dropColor = "var(--color-teal)",
  tickColor = "var(--color-amber)",
  innerColor = "var(--color-white)",
}: {
  size?: number;
  className?: string;
  ringColor?: string;
  dropColor?: string;
  tickColor?: string;
  innerColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      {/* Pipe-ring: a heavy collar (pipe cross-section seen end-on). */}
      <circle
        cx="20"
        cy="20"
        r="17"
        fill="none"
        stroke={ringColor}
        strokeWidth="3.25"
      />
      {/* Inner bore — keeps the ring reading as a pipe, not a coin. */}
      <circle
        cx="20"
        cy="20"
        r="13.25"
        fill={innerColor}
        stroke={ringColor}
        strokeWidth="1.25"
      />
      {/* Amber depth-tick: a gauge mark seated on the top of the ring. */}
      <rect x="17.6" y="1.4" width="4.8" height="5.2" rx="0.6" fill={innerColor} />
      <rect x="18.85" y="1.9" width="2.3" height="4.6" rx="1.15" fill={tickColor} />
      {/* Water-drop nested in the bore. */}
      <path
        d="M20 9.4c4.1 4.9 6.4 8 6.4 11a6.4 6.4 0 0 1-12.8 0c0-3 2.3-6.1 6.4-11Z"
        fill={dropColor}
      />
      {/* Highlight on the drop — a small specular curve, reads as clean water. */}
      <path
        d="M16.7 20.2a3.4 3.4 0 0 0 2.5 3.1"
        fill="none"
        stroke={innerColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function Logo({
  variant = "default",
  markOnly = false,
  size = 34,
  className,
}: LogoProps) {
  const light = variant === "light";
  // On dark surfaces the ring/drop switch to the bright teal + light bore so the
  // mark keeps contrast; the amber tick stays amber.
  const ringColor = light ? "var(--color-teal-bright)" : "var(--color-teal)";
  const innerColor = light ? "var(--color-iron)" : "var(--color-white)";

  const mark = (
    <LogoMark
      size={size}
      ringColor={ringColor}
      dropColor={ringColor}
      innerColor={innerColor}
    />
  );

  if (markOnly) {
    return (
      <span className={cn("inline-flex", className)} aria-label={site.brand}>
        {mark}
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex items-center gap-3", className)}
      aria-label={site.brand}
    >
      {mark}
      <span
        className={cn(
          "font-display font-extrabold leading-none tracking-[-0.02em]",
          light ? "text-on-dark" : "text-iron",
        )}
        style={{ fontSize: `${size * 0.62}px` }}
        aria-hidden="true"
      >
        DRAIN<span className="text-teal">{light ? "" : ""}</span>
        <span className={light ? "text-teal-bright" : "text-teal"}>&nbsp;MAN</span>
      </span>
    </span>
  );
}

export default Logo;

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Flip colors for dark backgrounds (header on scroll over dark, footer). */
  variant?: "light" | "dark";
  /** Overall height in px; width scales with the wordmark. */
  height?: number;
  /** Hide the "INC" suffix (e.g. very tight spaces). */
  showSuffix?: boolean;
}

/**
 * "Drainman INC" wordmark — crisp text + SVG drain-line motif.
 *
 * Design rationale (see DESIGN_SYSTEM.md):
 * - "Drainman" set in the display face (Archivo 800), tight tracking, heroic weight.
 * - The "i" in Drainman is dotted with the Signal-Yellow locate-dot — the camera
 *   head running the line — tying the mark to the site's signature element.
 * - "INC" set in the mono utility face: small, like a stamped registration plate.
 * - A short drain-line underlines the mark.
 *
 * Rendered as live text (not a flattened image) so it stays sharp at any size and
 * inherits the loaded webfont.
 */
export function Logo({
  variant = "light",
  height = 28,
  showSuffix = true,
  className,
  ...props
}: LogoProps) {
  const wordColor = variant === "dark" ? "#FFFFFF" : "var(--color-ink)";
  const incColor = variant === "dark" ? "rgba(255,255,255,0.7)" : "var(--color-steel)";

  return (
    <span
      className={cn("inline-flex items-baseline gap-1.5 leading-none", className)}
      style={{ fontSize: height }}
      aria-label="Drainman INC"
      {...props}
    >
      <span className="relative inline-flex items-baseline font-display font-extrabold tracking-[-0.03em]">
        <span style={{ color: wordColor }} aria-hidden="true">
          Dra
        </span>
        {/* dotted-i: locate dot in Signal Yellow over a stem */}
        <span className="relative inline-flex flex-col items-center" aria-hidden="true">
          <span
            className="absolute rounded-full bg-signal"
            style={{
              width: "0.22em",
              height: "0.22em",
              top: "-0.04em",
              boxShadow: "0 0 0 0.06em rgba(255,198,41,0.25)",
            }}
          />
          <span style={{ color: wordColor }}>ı</span>
        </span>
        <span style={{ color: wordColor }} aria-hidden="true">
          nman
        </span>
        {/* drain-line underline */}
        <span
          aria-hidden="true"
          className="absolute left-0 rounded-full bg-blue"
          style={{
            bottom: "-0.16em",
            height: "0.07em",
            width: "100%",
          }}
        />
      </span>
      {showSuffix && (
        <span
          aria-hidden="true"
          className="font-mono font-medium tracking-[0.12em]"
          style={{ fontSize: "0.42em", color: incColor, transform: "translateY(-0.05em)" }}
        >
          INC
        </span>
      )}
    </span>
  );
}

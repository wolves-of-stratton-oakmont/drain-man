import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Rendered height in px; width scales with the logo's aspect ratio. */
  height?: number;
  /**
   * Sit the chrome wordmark on a dark "equipment plate" so it stays legible on
   * light surfaces (the header). The chrome PNG is built for dark backgrounds —
   * on white it nearly disappears — so on light chrome we set it on a small ink
   * plate (true to the brand's stamped-signage vocabulary). On already-dark
   * surfaces (the footer) leave this off and the logo sits bare.
   */
  plate?: boolean;
}

/**
 * The Drain Man Inc's original brand logo — the chrome "DRAIN MAN" wordmark,
 * carried over verbatim from drainmaninc.com (transparent PNG, intrinsic
 * 361×136). Used in the header (top-left) and the footer.
 */
const LOGO_W = 361;
const LOGO_H = 136;

export function Logo({ height = 38, plate = false, className, ...props }: LogoProps) {
  const width = Math.round((height * LOGO_W) / LOGO_H);
  return (
    <span
      className={cn(
        "inline-flex items-center leading-none",
        plate &&
          "rounded-xl bg-ink px-3 py-2 shadow-[var(--shadow-sm)] ring-1 ring-ink/10",
        className,
      )}
      {...props}
    >
      <Image
        src="/brand/drain-man-logo.png"
        alt="The Drain Man Inc"
        width={width}
        height={height}
        sizes={`${width}px`}
        style={{ height, width }}
      />
    </span>
  );
}

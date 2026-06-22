import * as React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Rendered height in px; width scales with the logo's aspect ratio. */
  height?: number;
}

/**
 * The Drain Man Inc wordmark. The PNG is used as a CSS mask over a solid fill,
 * so the logo simply takes on `currentColor` — it inherits the site accent by
 * default and can be flipped to any color by setting text color on the element
 * (e.g. `text-white` on the dark footer). Change the accent, the logo follows.
 */
const LOGO_W = 879;
const LOGO_H = 165;
const LOGO_SRC = "/brand/drain-man-logo.png";

export function Logo({ height = 32, className, style, ...props }: LogoProps) {
  const width = Math.round((height * LOGO_W) / LOGO_H);
  return (
    <span
      role="img"
      aria-label="The Drain Man Inc"
      className={cn("inline-block bg-current align-middle text-accent", className)}
      style={{
        height,
        width,
        WebkitMaskImage: `url(${LOGO_SRC})`,
        maskImage: `url(${LOGO_SRC})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        ...style,
      }}
      {...props}
    />
  );
}

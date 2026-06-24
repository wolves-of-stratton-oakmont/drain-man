/**
 * EnercareBadge — the official Enercare logo in a clean white card
 * (ARCHITECTURE §4.19; DESIGN-BRIEF §6.15 / §8.4). Partner badge, never the
 * star: ~180–220px wide, never recolored, never larger than the DRAIN MAN
 * wordmark in the same view. Uses next/image (the SVG is the real brand asset).
 */

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { enercare } from "@/lib/site";

export interface EnercareBadgeProps {
  className?: string;
  /** rendered logo width in px (default 180). */
  width?: number;
}

export function EnercareBadge({ className, width = 180 }: EnercareBadgeProps) {
  // native ratio of the official lockup is 176×57
  const height = Math.round((width * 57) / 176);
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-white",
        "border border-mortar shadow-sm px-6 py-5",
        className,
      )}
    >
      <Image
        src={enercare.logo}
        alt={enercare.logoAlt}
        width={width}
        height={height}
        className="h-auto w-auto"
        style={{ width, height }}
      />
    </div>
  );
}

export default EnercareBadge;

/**
 * SpecTag — the stamped work-order label motif (ARCHITECTURE §4.9;
 * DESIGN-BRIEF §6.11). rounded-sm, mono uppercase. On photos (onPhoto): a
 * semi-transparent iron chip with amber/on-dark text, like a stamped tag.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SpecTagProps {
  onPhoto?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function SpecTag({ onPhoto = false, className, children }: SpecTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[8px] rounded-sm font-mono text-eyebrow uppercase",
        "px-[10px] py-[6px] leading-none",
        onPhoto
          ? "bg-iron/85 text-on-dark backdrop-blur-[2px] ring-1 ring-white/10"
          : "bg-amber-soft text-ember",
        className,
      )}
    >
      {/* a small amber tick prefix to echo the depth-rule when on a photo */}
      {onPhoto ? (
        <span className="h-[10px] w-[2px] shrink-0 bg-amber" aria-hidden="true" />
      ) : null}
      {children}
    </span>
  );
}

export default SpecTag;

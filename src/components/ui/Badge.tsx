/**
 * Badge — small pill (ARCHITECTURE §4.10; DESIGN-BRIEF §6.11). The brick-red
 * "24/7 EMERGENCY" pill uses tone="emergency" (the only place emergency red is
 * a fill). Optional leading icon.
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";
import type { IconName } from "@/lib/icons";

export interface BadgeProps {
  tone?: "amber" | "teal" | "emergency" | "neutral";
  icon?: IconName;
  className?: string;
  children: React.ReactNode;
}

const TONES: Record<NonNullable<BadgeProps["tone"]>, string> = {
  amber: "bg-amber-soft text-ember",
  teal: "bg-shallow text-teal",
  emergency: "bg-emergency text-white",
  neutral: "bg-mortar text-ink",
};

export function Badge({ tone = "neutral", icon, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[6px] rounded-pill font-mono text-eyebrow uppercase",
        "px-[10px] py-[5px] leading-none tracking-[0.12em]",
        TONES[tone],
        className,
      )}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      {children}
    </span>
  );
}

export default Badge;

import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "blue" | "signal" | "ink" | "alert" | "neutral";

const tones: Record<Tone, string> = {
  blue: "bg-blue/10 text-blue",
  signal: "bg-signal text-ink", // dark text on yellow (never white)
  ink: "bg-ink text-white",
  alert: "bg-alert/10 text-alert", // emergency / urgency only
  neutral: "bg-ink/[0.06] text-steel",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  /** Render with a leading icon slot; pass the icon as the first child. */
  asChild?: boolean;
}

/**
 * Pill / chip. Use for trust signals (Family-owned, No deposits, Licensed),
 * service tags, and status. Mono-ish, compact, uppercase-friendly.
 */
export function Badge({ className, tone = "blue", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold leading-none",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

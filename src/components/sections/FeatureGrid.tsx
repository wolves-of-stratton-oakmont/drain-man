/**
 * FeatureItem + FeatureGrid (ARCHITECTURE §4.13; DESIGN-BRIEF §6.5).
 *
 * Used in the dark "Why Drain Man" 2×2 (WHY_FEATURES): a 28px teal-bright icon,
 * an H4 title, a 2-line body, no card chrome. Also usable on light (onDark=false)
 * with teal icons. columns 2 (default) or 4.
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import type { Feature } from "@/lib/site";

export interface FeatureItemProps {
  feature: Feature;
  onDark?: boolean;
  className?: string;
}

export function FeatureItem({ feature, onDark = false, className }: FeatureItemProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span
        className={cn(
          "grid size-[44px] place-items-center rounded-md",
          onDark ? "bg-pipe text-teal-bright" : "bg-amber-soft text-teal",
        )}
        aria-hidden="true"
      >
        <Icon name={feature.icon} size={26} />
      </span>
      <h3
        className={cn(
          "font-display text-h4 font-semibold",
          onDark ? "text-on-dark" : "text-ink",
        )}
      >
        {feature.title}
      </h3>
      <p className={cn("text-body", onDark ? "text-on-dark-mut" : "text-steel")}>
        {feature.body}
      </p>
    </div>
  );
}

export interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 4;
  onDark?: boolean;
  className?: string;
}

export function FeatureGrid({
  features,
  columns = 2,
  onDark = false,
  className,
}: FeatureGridProps) {
  return (
    <div
      className={cn(
        "grid gap-x-8 gap-y-7",
        columns === 4
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : "sm:grid-cols-2",
        className,
      )}
    >
      {features.map((f) => (
        <FeatureItem key={f.title} feature={f} onDark={onDark} />
      ))}
    </div>
  );
}

export default FeatureGrid;

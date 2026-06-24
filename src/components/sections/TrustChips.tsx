/**
 * TrustChips (ARCHITECTURE §4.18; DESIGN-BRIEF §6.11).
 *
 * Mono small items each with a small icon, separated by a faint amber tick.
 * Under-hero strip + reusable (the value-prop strip reuses it with VALUE_PROPS).
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { TRUST_CHIPS, type TrustChip } from "@/lib/site";

export interface TrustChipsProps {
  items?: TrustChip[];
  onDark?: boolean;
  className?: string;
  /** layout: inline wrap (default) or a spaced row that justifies on wide screens. */
  align?: "start" | "center";
}

export function TrustChips({
  items = TRUST_CHIPS,
  onDark = false,
  className,
  align = "start",
}: TrustChipsProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      {items.map((item, i) => (
        <li key={item.label} className="flex items-center gap-x-5">
          {i > 0 ? (
            <span
              aria-hidden="true"
              className="hidden h-[12px] w-px bg-amber/60 sm:block"
            />
          ) : null}
          <span className="inline-flex items-center gap-[8px]">
            <Icon
              name={item.icon}
              size={16}
              className={onDark ? "text-teal-bright" : "text-teal"}
            />
            <span
              className={cn(
                "font-mono text-eyebrow uppercase tracking-[0.12em]",
                onDark ? "text-on-dark-mut" : "text-steel",
              )}
            >
              {item.label}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TrustChips;

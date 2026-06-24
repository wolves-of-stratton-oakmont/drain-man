/**
 * Chip — pill for service-area towns + service tags (ARCHITECTURE §4.8;
 * DESIGN-BRIEF §6.11). bg-shallow / text-teal / mono; hover → teal bg, white text.
 * Renders a <Link>/<a> when href is set, else a static <span>.
 */

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ChipProps {
  href?: string;
  active?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** for filter chips rendered as buttons */
  as?: "button";
  "aria-pressed"?: boolean;
}

export function Chip({
  href,
  active = false,
  className,
  children,
  onClick,
  as,
  ...rest
}: ChipProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-pill font-mono text-small leading-none tracking-[0.02em]",
    "px-[14px] py-[8px] min-h-[36px] transition-colors duration-200",
    active
      ? "bg-teal text-white"
      : "bg-shallow text-teal hover:bg-teal hover:text-white",
    className,
  );

  if (as === "button") {
    return (
      <button type="button" className={classes} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  if (href) {
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}

export default Chip;

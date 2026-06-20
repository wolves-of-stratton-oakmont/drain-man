import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Narrower measure for text-heavy pages (e.g. About, FAQ). */
  width?: "default" | "narrow" | "wide";
  as?: React.ElementType;
}

const widths = {
  narrow: "max-w-3xl", // ~768px — prose
  default: "max-w-[var(--container-site)]", // 1200px — standard
  wide: "max-w-[85rem]", // 1360px — full-bleed-ish galleries
} as const;

export function Container({
  className,
  width = "default",
  as: Comp = "div",
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn("mx-auto w-full px-5 md:px-8", widths[width], className)}
      {...props}
    />
  );
}

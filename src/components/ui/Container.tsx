/**
 * Container — horizontal page wrapper (ARCHITECTURE §4.2).
 * Applies mx-auto, a max-width, and the responsive gutter.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps {
  size?: "default" | "wide" | "prose";
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const MAX: Record<NonNullable<ContainerProps["size"]>, string> = {
  default: "max-w-container",
  wide: "max-w-container-wide",
  prose: "max-w-container-prose",
};

export function Container({
  size = "default",
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-[var(--gutter)]", MAX[size], className)}>
      {children}
    </Tag>
  );
}

export default Container;

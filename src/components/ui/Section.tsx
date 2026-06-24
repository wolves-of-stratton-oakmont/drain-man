/**
 * Section — the single source of vertical rhythm for a page band
 * (ARCHITECTURE §4.3; DESIGN-BRIEF §3 spacing, §2.2 backgrounds).
 *
 * Owns the section's vertical padding — do NOT also pad children (the
 * specificity/double-padding trap in DESIGN-BRIEF §4.1). Dark bg variants set
 * on-dark text automatically. Aim for 2–3 dark bands per long page.
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerProps } from "./Container";

export interface SectionProps {
  bg?: "concrete" | "white" | "shallow" | "iron" | "pipe";
  padding?: "default" | "tight" | "none";
  containerSize?: ContainerProps["size"];
  /** Set false to render children without the inner Container (full-bleed). */
  contained?: boolean;
  id?: string;
  className?: string;
  /** Applied to the inner Container when contained. */
  innerClassName?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const BG: Record<NonNullable<SectionProps["bg"]>, string> = {
  concrete: "bg-concrete text-ink",
  white: "bg-white text-ink",
  shallow: "bg-shallow text-ink",
  iron: "bg-iron text-on-dark",
  pipe: "bg-pipe text-on-dark",
};

const PADDING: Record<NonNullable<SectionProps["padding"]>, string> = {
  // numeric scale is overridden: py-10 = 128px, py-8 = 64px, py-9 = 96px, py-7 = 48px
  default: "py-8 md:py-10",
  tight: "py-7 md:py-9",
  none: "",
};

export function Section({
  bg = "concrete",
  padding = "default",
  containerSize = "default",
  contained = true,
  id,
  className,
  innerClassName,
  children,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn(BG[bg], PADDING[padding], className)}>
      {contained ? (
        <Container size={containerSize} className={innerClassName}>
          {children}
        </Container>
      ) : (
        children
      )}
    </Tag>
  );
}

export default Section;

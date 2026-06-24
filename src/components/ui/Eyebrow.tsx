/**
 * Eyebrow — the mono, uppercase, tracked amber label with a leading amber tick
 * (ARCHITECTURE §4.4; DESIGN-BRIEF §3.3 / §6.3). Wraps the canonical `.eyebrow`
 * class from globals.css. Pass clean words ("SINCE 1972"); the tick is the
 * prefix. Leading "—— " in CONTENT eyebrows is stripped via cleanEyebrow.
 */

import * as React from "react";
import { cn, cleanEyebrow } from "@/lib/utils";

export interface EyebrowProps {
  onDark?: boolean;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export function Eyebrow({
  onDark = false,
  as: Tag = "p",
  className,
  children,
}: EyebrowProps) {
  const text = typeof children === "string" ? cleanEyebrow(children) : children;
  return (
    <Tag className={cn("eyebrow", onDark && "eyebrow--on-dark", className)}>
      {text}
    </Tag>
  );
}

export default Eyebrow;

/**
 * SectionHeading — Eyebrow + heading + optional lead (ARCHITECTURE §4.5;
 * DESIGN-BRIEF §6.3). Left-aligned by default (editorial/confident).
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  onDark?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2";
  /** size token override; defaults to text-h1 for h1, text-h2 for h2. */
  titleClassName?: string;
  className?: string;
  /** id for the heading (anchor targets / aria-labelledby). */
  headingId?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  onDark = false,
  align = "left",
  as = "h2",
  titleClassName,
  className,
  headingId,
}: SectionHeadingProps) {
  const Heading = as;
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        // cap the measure on centered intros so leads don't sprawl
        centered && "mx-auto max-w-[58ch]",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow onDark={onDark} className={centered ? "justify-center" : undefined}>
          {eyebrow}
        </Eyebrow>
      ) : null}

      <Heading
        id={headingId}
        className={cn(
          "font-display text-balance",
          as === "h1" ? "text-h1" : "text-h2",
          onDark ? "text-on-dark" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </Heading>

      {lead ? (
        <p
          className={cn(
            "text-lead max-w-[60ch]",
            centered && "mx-auto",
            onDark ? "text-on-dark-mut" : "text-steel",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;

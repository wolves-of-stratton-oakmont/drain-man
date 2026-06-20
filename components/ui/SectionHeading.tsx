import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Mono uppercase kicker above the title. Encodes a true label, not decoration. */
  eyebrow?: string;
  title: React.ReactNode;
  /** Optional supporting line below the title. */
  description?: React.ReactNode;
  align?: "left" | "center";
  /** Use on dark (ink/blue) sections to flip text + eyebrow colors. */
  onDark?: boolean;
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  as: Heading = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  const titleSize =
    Heading === "h1" ? "text-display-lg" : Heading === "h3" ? "text-h3" : "text-h2";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 font-mono text-eyebrow font-medium uppercase",
            onDark ? "text-signal" : "text-blue",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-2 w-2 rounded-full",
              onDark ? "bg-signal" : "bg-blue",
            )}
          />
          {eyebrow}
        </span>
      )}
      <Heading className={cn(titleSize, onDark ? "text-white" : "text-ink")}>
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-lead",
            align === "center" && "mx-auto",
            onDark ? "text-white/80" : "text-steel",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerProps } from "./Container";

type Tone = "white" | "water" | "ink" | "blue";

const tones: Record<Tone, string> = {
  white: "bg-white text-ink",
  water: "bg-water text-ink",
  ink: "bg-ink text-white", // dark band — headings auto-readable via children
  blue: "bg-blue text-white",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Background tone. Dark tones (ink/blue) flip text to white. */
  tone?: Tone;
  /** Vertical rhythm. `none` lets the child control padding. */
  spacing?: "none" | "sm" | "md" | "lg";
  /** Wrap children in a Container automatically. Set false for custom layouts. */
  contained?: boolean;
  containerWidth?: ContainerProps["width"];
  as?: React.ElementType;
}

const spacings = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-28",
} as const;

export function Section({
  className,
  tone = "white",
  spacing = "lg",
  contained = true,
  containerWidth = "default",
  as: Comp = "section",
  children,
  ...props
}: SectionProps) {
  return (
    <Comp className={cn(tones[tone], spacings[spacing], className)} {...props}>
      {contained ? (
        <Container width={containerWidth}>{children}</Container>
      ) : (
        children
      )}
    </Comp>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "raised" | "outline" | "ink";

const variants: Record<Variant, string> = {
  default: "bg-white border border-water-line shadow-[var(--shadow-sm)]",
  raised:
    "bg-white border border-water-line shadow-[var(--shadow-md)] transition-[transform,box-shadow] duration-200 ease-[var(--ease-flow)] hover:-translate-y-1 hover:shadow-[var(--shadow-blue)]",
  outline: "bg-transparent border-2 border-ink/12",
  ink: "bg-ink text-white border border-white/10",
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  as?: React.ElementType;
}

export function Card({
  className,
  variant = "default",
  as: Comp = "div",
  ...props
}: CardProps) {
  return (
    <Comp
      className={cn("rounded-2xl p-6 md:p-8", variants[variant], className)}
      {...props}
    />
  );
}

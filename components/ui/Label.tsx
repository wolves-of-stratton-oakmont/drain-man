import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Marks the field as required with a visible indicator. */
  required?: boolean;
}

export function Label({ className, required, children, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "mb-1.5 block font-display text-sm font-bold tracking-tight text-ink",
        className,
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-0.5 text-alert" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

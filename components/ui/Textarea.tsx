import * as React from "react";
import { cn } from "@/lib/utils";
import { fieldBase } from "./Input";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 5, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(fieldBase, "min-h-[7rem] resize-y py-3 leading-relaxed", className)}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

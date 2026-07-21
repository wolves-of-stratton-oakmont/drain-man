import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-md border border-water-line bg-white px-4 text-base text-ink " +
  "placeholder:text-steel/70 transition-[border-color,box-shadow] duration-150 ease-[var(--ease-flow)] " +
  "focus:border-blue focus:outline-2 focus:outline-offset-2 focus:outline-signal " +
  "disabled:cursor-not-allowed disabled:opacity-60 " +
  "aria-[invalid=true]:border-alert aria-[invalid=true]:focus:outline-alert";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(fieldBase, "h-12", className)}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { fieldBase };

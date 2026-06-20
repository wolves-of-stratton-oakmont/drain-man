import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-display font-bold tracking-tight " +
  "transition-[transform,box-shadow,background-color,color] duration-200 ease-[var(--ease-flow)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal " +
  "disabled:pointer-events-none disabled:opacity-55 select-none";

const variants: Record<Variant, string> = {
  // Primary = Drain Blue, the heroic CTA (white text passes AA on blue at semibold+)
  primary:
    "bg-blue text-white shadow-[var(--shadow-blue)] hover:bg-blue-deep hover:-translate-y-0.5 active:translate-y-0",
  // Secondary = outlined ink on light, fills toward blue on hover
  secondary:
    "border-2 border-ink/15 bg-white text-ink hover:border-blue hover:text-blue hover:-translate-y-0.5 active:translate-y-0",
  // Ghost = quiet text action
  ghost: "bg-transparent text-ink hover:bg-ink/5 hover:text-blue",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lead",
};

export function buttonClasses(opts?: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const { variant = "primary", size = "md", className } = opts ?? {};
  return cn(base, variants[variant], sizes[size], className);
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  /**
   * Render the single child element with button styles instead of a <button>.
   * Use to style a Next <Link> or an <a> as a button:
   *   <Button asChild><Link href="/contact">Book a service</Link></Button>
   */
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, children, ...props },
    ref,
  ) => {
    const classes = buttonClasses({ variant, size, className });

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

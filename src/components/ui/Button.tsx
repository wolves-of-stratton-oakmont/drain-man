/**
 * Button — the action primitive (DESIGN-BRIEF §6.1; ARCHITECTURE §4.1).
 *
 * Variants: amber (primary, dark-on-amber), teal, outline, ghost.
 * If `href` is set it renders a <Link> (internal) or <a> (tel:/mailto:/http);
 * otherwise a <button>. Optional leading/trailing icons (ghost defaults to a
 * trailing arrow with the signature amber underline wipe).
 *
 * Restraint rule: at most ONE amber button competing per viewport.
 */

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";
import type { IconName } from "@/lib/icons";

export type ButtonVariant = "amber" | "teal" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: IconName;
  iconRight?: IconName;
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
  /** Make a link open in a new tab (adds rel + sr hint). */
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
}

const SIZES: Record<ButtonSize, string> = {
  // arbitrary px because the numeric spacing scale is overridden (ARCHITECTURE §3.4)
  sm: "px-[16px] py-[9px] text-small gap-[8px] min-h-[40px]",
  md: "px-[26px] py-[14px] text-body gap-[10px] min-h-[48px]",
  lg: "px-[32px] py-[17px] text-lead gap-[12px] min-h-[56px]",
};

const ICON_SIZE: Record<ButtonSize, number> = { sm: 17, md: 19, lg: 21 };

function variantClasses(variant: ButtonVariant): string {
  switch (variant) {
    case "amber":
      return cn(
        "bg-amber text-iron font-display font-bold rounded-md shadow-sm",
        "hover:bg-ember hover:-translate-y-px hover:shadow-md active:translate-y-0 active:shadow-sm",
      );
    case "teal":
      return cn(
        "bg-teal text-white font-display font-bold rounded-md shadow-sm",
        "hover:bg-teal-deep hover:-translate-y-px hover:shadow-md active:translate-y-0 active:shadow-sm",
      );
    case "outline":
      return cn(
        "bg-transparent border-[1.5px] border-current rounded-md font-display font-semibold",
        // fills in on hover — color set by the consumer's text-* (default ink)
        "hover:bg-current",
      );
    case "ghost":
      return cn(
        "bg-transparent text-teal font-display font-semibold px-0 py-0 min-h-0 shadow-none rounded-none",
      );
  }
}

export function Button({
  variant = "amber",
  size = "md",
  href,
  icon,
  iconRight,
  type = "button",
  className,
  children,
  external,
  onClick,
  disabled,
  ...rest
}: ButtonProps) {
  const isGhost = variant === "ghost";
  // ghost links get a trailing arrow by default
  const trailing = iconRight ?? (isGhost ? "arrow-right" : undefined);
  const iconPx = ICON_SIZE[size];

  const base = cn(
    "group/btn inline-flex items-center justify-center whitespace-nowrap select-none",
    "transition-[background-color,box-shadow,transform,color] duration-200 ease-[var(--ease-depth)]",
    "disabled:opacity-55 disabled:pointer-events-none",
    !isGhost && SIZES[size],
    variantClasses(variant),
    className,
  );

  const inner = (
    <>
      {icon ? (
        <Icon
          name={icon}
          size={iconPx}
          className={cn(
            // outline hover swaps bg to current → keep the icon readable via group
            isGhost && "text-teal",
          )}
        />
      ) : null}
      {/* ghost uses the link-underline wipe on just the label */}
      {isGhost ? <span className="link-underline">{children}</span> : children}
      {trailing ? (
        <Icon
          name={trailing}
          size={iconPx}
          className={cn(
            "transition-transform duration-200 ease-[var(--ease-depth)]",
            "group-hover/btn:translate-x-[3px]",
          )}
        />
      ) : null}
    </>
  );

  // outline fills with `bg-current`; to keep the label legible against the fill,
  // flip the text color on hover. We add a hover utility that consumers can rely
  // on: on light surfaces the label becomes concrete; we expose it via class.
  const outlineHover =
    variant === "outline" ? "hover:text-concrete" : undefined;

  if (href) {
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    const anchorProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    if (isInternal) {
      return (
        <Link
          href={href}
          className={cn(base, outlineHover)}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...rest}
        >
          {inner}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={cn(base, outlineHover)}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...anchorProps}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cn(base, outlineHover)}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      {...rest}
    >
      {inner}
    </button>
  );
}

export default Button;

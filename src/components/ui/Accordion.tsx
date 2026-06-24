/**
 * Accordion + AccordionItem (ARCHITECTURE §4.11; DESIGN-BRIEF §6.9).
 *
 * Full-width button row (Archivo 600 question left, plus/minus rotating affordance
 * right), panel p-5, border-bottom mortar, smooth height via grid-rows trick
 * (reduced-motion → instant, handled by the global CSS that kills transitions).
 * Proper aria-expanded/aria-controls, keyboard operable (native <button>).
 *
 * Used by /faq and the mobile services drawer.
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export interface AccordionProps {
  allowMultiple?: boolean;
  className?: string;
  children: React.ReactNode;
  /** visual frame: bare list (default) used inside cards/sections. */
  bordered?: boolean;
}

export function Accordion({
  allowMultiple = true,
  className,
  children,
  bordered = true,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(
    () => new Set(),
  );

  const toggle = React.useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(allowMultiple ? prev : []);
        if (prev.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    },
    [allowMultiple],
  );

  // register defaultOpen children once
  const register = React.useCallback((id: string) => {
    setOpenItems((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const ctx = React.useMemo<AccordionContextValue & { register: typeof register }>(
    () => ({ openItems, toggle, allowMultiple, register }),
    [openItems, toggle, allowMultiple, register],
  );

  return (
    <AccordionContext.Provider value={ctx}>
      <div
        className={cn(
          bordered && "border-t border-mortar",
          className,
        )}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function AccordionItem({
  question,
  children,
  defaultOpen = false,
  className,
}: AccordionItemProps) {
  const ctx = React.useContext(AccordionContext) as
    | (AccordionContextValue & { register: (id: string) => void })
    | null;
  if (!ctx) {
    throw new Error("AccordionItem must be used within an Accordion");
  }
  const baseId = React.useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  React.useEffect(() => {
    if (defaultOpen) ctx.register(baseId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const open = ctx.openItems.has(baseId);

  return (
    <div className={cn("border-b border-mortar", className)}>
      <h3 className="m-0">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => ctx.toggle(baseId)}
          className={cn(
            "group/acc flex w-full items-center justify-between gap-5 text-left",
            "py-5 font-display text-h4 font-semibold text-ink",
            "transition-colors duration-200 hover:text-teal",
          )}
        >
          <span>{question}</span>
          <span
            className={cn(
              "relative grid size-[28px] shrink-0 place-items-center rounded-full",
              "border border-mortar-2 text-teal transition-colors duration-200",
              "group-hover/acc:border-teal group-hover/acc:bg-teal group-hover/acc:text-white",
            )}
            aria-hidden="true"
          >
            <Icon name={open ? "minus" : "plus"} size={16} />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-depth)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        {/* `inert` (when closed) removes the panel from tab order + a11y tree
            while keeping it mounted so the height can animate. */}
        <div className="overflow-hidden" inert={!open}>
          <div className="pb-5 text-body text-steel">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;

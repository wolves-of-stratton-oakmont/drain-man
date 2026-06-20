import { Plus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface FaqAccordionProps {
  items: FaqItem[];
}

/**
 * Lightweight, de-emphasized FAQ accordion (FAQs are less critical per client).
 * Built on native <details>/<summary> so it's fully keyboard-accessible and
 * works without JavaScript. The "+" toggle rotates to "×" when open via the
 * [open] selector — reduced-motion is respected globally in globals.css.
 *
 * Server component — no client JS needed.
 */
export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i}>
          <details className="group rounded-xl border border-water-line bg-white shadow-[var(--shadow-sm)] transition-[border-color,box-shadow] duration-200 ease-[var(--ease-flow)] open:border-blue/30 open:shadow-[var(--shadow-md)] hover:border-blue/30">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-h3 font-display font-bold text-ink [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal md:px-6 md:py-5">
              <span className="text-pretty">{item.question}</span>
              <span
                aria-hidden="true"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue/10 text-blue transition-[transform,background-color,color] duration-200 ease-[var(--ease-flow)] group-open:rotate-45 group-open:bg-blue group-open:text-white"
              >
                <Plus className="h-4 w-4" />
              </span>
            </summary>
            <div className="px-5 pb-5 text-base leading-relaxed text-ink/85 md:px-6 md:pb-6">
              {item.answer}
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}

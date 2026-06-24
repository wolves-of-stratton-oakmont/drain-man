/**
 * ProcessSteps (ARCHITECTURE §4.17; DESIGN-BRIEF §6.14).
 *
 * A real sequence (how a job goes), so numbering carries meaning. Each step:
 * a big outlined Archivo numeral (01–05, amber outline), title, 2–3 line body,
 * an icon top-right, with a connecting depth-rule running behind the numerals.
 * Horizontal on desktop, stacked on mobile.
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import type { ProcessStep } from "@/lib/site";

export interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
}

export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <ol
      className={cn(
        "grid gap-x-6 gap-y-8",
        "md:grid-cols-2",
        steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4",
        className,
      )}
    >
      {steps.map((step, i) => (
        <li key={step.number} className="relative flex flex-col gap-4">
          {/* numeral row with the connector behind it */}
          <div className="relative">
            {/* connector hairline + amber ticks, sits behind the numeral,
                hidden on the last item and on stacked mobile */}
            {i < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[64px] right-[-24px] top-[26px] hidden h-px bg-mortar lg:block"
              >
                <span className="absolute left-0 top-[-4px] h-[9px] w-px bg-amber" />
                <span className="absolute right-0 top-[-4px] h-[9px] w-px bg-amber" />
              </span>
            ) : null}

            <div className="flex items-start justify-between gap-3">
              {/* outlined numeral — transparent fill, amber stroke via text-stroke */}
              <span
                className="font-display text-[clamp(40px,6vw,56px)] font-extrabold leading-none tracking-[-0.02em] text-transparent"
                style={{
                  WebkitTextStroke: "1.5px var(--color-amber)",
                }}
                aria-hidden="true"
              >
                {step.number}
              </span>
              <span
                className="mt-1 grid size-[40px] shrink-0 place-items-center rounded-md bg-shallow text-teal"
                aria-hidden="true"
              >
                <Icon name={step.icon} size={22} />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-display text-h4 font-semibold text-ink">
              {/* keep the number in the a11y name as part of the sequence */}
              <span className="sr-only">Step {parseInt(step.number, 10)}: </span>
              {step.title}
            </h3>
            <p className="text-body text-steel">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default ProcessSteps;

import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge, taught about our custom `@theme` font sizes.
 *
 * The design system adds fluid type-scale utilities (`text-display-xl`,
 * `text-h2`, `text-lead`, …). Default tailwind-merge doesn't know these are
 * font sizes, so it lumps them into the same `text-*` bucket as text *colors*
 * and drops one when both appear — e.g. `cn("text-h2", "text-ink")` would lose
 * the size, and `cn("text-white", "text-lead")` would lose the color (dark text
 * on the blue CTA, failing contrast). Registering them in the `font-size` group
 * makes size and color resolve independently, the way they should.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["display-xl", "display-lg", "h2", "h3", "lead", "eyebrow"] },
      ],
    },
  },
});

/**
 * Merge Tailwind class names safely.
 * clsx handles conditional classes; tailwind-merge resolves conflicting
 * utilities (e.g. `px-4` + `px-6` → `px-6`).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

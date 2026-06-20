import * as React from "react";
import { cn } from "@/lib/utils";

export interface DrainLineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Direction the line runs. */
  orientation?: "horizontal" | "vertical";
  /**
   * Show the Signal-Yellow "locate dot" travelling the line (a sewer camera
   * running the main). Static when `prefers-reduced-motion` is set — handled
   * via the CSS animation, which the global reduced-motion rule collapses.
   */
  animated?: boolean;
  /** Show the small "joint" marker mid-line (where stages of a job connect). */
  joint?: boolean;
}

/**
 * "The Line" — the drain/sewer-line spine that threads between sections as the
 * site's signature element (see DESIGN_SYSTEM.md §6). Use it as the divider
 * between sections instead of a plain rule: it's true to the trade (they run a
 * camera down a continuous line) and gives structure a real meaning.
 *
 * Wraps the `.drain-line` / `.drain-line__dot` / `.drain-line__joint` hooks from
 * globals.css. The travelling dot uses a scoped keyframe defined inline once so
 * Builder 7 doesn't touch globals.css; reduced-motion is respected globally.
 */
export function DrainLine({
  orientation = "horizontal",
  animated = false,
  joint = false,
  className,
  ...props
}: DrainLineProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "drain-line relative",
        isVertical
          ? "h-full w-[3px] bg-[linear-gradient(180deg,transparent_0%,var(--color-blue)_8%,var(--color-blue)_92%,transparent_100%)]"
          : "w-full",
        className,
      )}
      {...props}
    >
      {joint && (
        <span
          className="drain-line__joint"
          style={isVertical ? { left: "50%", top: "50%" } : { left: "50%" }}
        />
      )}
      {animated ? (
        <span
          className={cn(
            "drain-line__dot drain-man-locate",
            isVertical && "drain-man-locate--v",
          )}
          style={isVertical ? { left: "50%", top: 0 } : { left: 0 }}
        />
      ) : (
        joint || (
          <span
            className="drain-line__dot"
            style={isVertical ? { left: "50%", top: "50%" } : { left: "50%" }}
          />
        )
      )}

      {/* Scoped keyframes for the travelling locate-dot. Global reduced-motion
          rule in globals.css collapses this to a static dot automatically. */}
      <style>{`
        @keyframes drainManLocate { 0% { left: 4%; } 50% { left: 96%; } 100% { left: 4%; } }
        @keyframes drainManLocateV { 0% { top: 4%; } 50% { top: 96%; } 100% { top: 4%; } }
        .drain-man-locate { animation: drainManLocate 4.5s var(--ease-flow) infinite; }
        .drain-man-locate--v { animation-name: drainManLocateV; }
      `}</style>
    </div>
  );
}

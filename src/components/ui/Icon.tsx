/**
 * Icon — the custom "Below Grade" line-icon registry.
 *
 * Every name in `@/lib/icons` is drawn here as an inline SVG, in one disciplined
 * blueprint style (DESIGN-BRIEF §5.2):
 *   • 24×24 viewBox            • 1.75px stroke, round caps + joins
 *   • stroke="currentColor"    • fill="none"  → color via text-* utilities
 *   • single-weight, technical/spec-sheet feel — never emoji, never an icon font.
 *
 * The trade icons (auger, pipe, backwater-valve, sump-pump, camera-cable, …) are
 * drawn to actually read as those objects — they are part of the brand signature.
 *
 * Usage:
 *   <Icon name="auger" />                       decorative (aria-hidden)
 *   <Icon name="phone" title="Call us" />       semantic (role="img" + <title>)
 *   <Icon name="droplet" className="text-amber" size={28} />
 */

import * as React from "react";
import type { IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

export interface IconProps {
  name: IconName;
  /** px size for both width & height; default 24. */
  size?: number;
  /** color via text-* (icons stroke with currentColor). */
  className?: string;
  /** decorative by default. Pass false + a title for meaningful icons. */
  "aria-hidden"?: boolean;
  /** if set, the icon is announced (role="img") with this label. */
  title?: string;
}

/**
 * The path/shape content for each icon, keyed by name. Each entry is the inner
 * markup of a 24×24 svg; the wrapper supplies the shared stroke attributes.
 */
const PATHS: Record<IconName, React.ReactNode> = {
  /* ============================ TRADE / SERVICE ============================ */

  // auger — a coiled drain snake spiralling out of a hand crank/drum
  auger: (
    <>
      {/* crank handle + spindle on the left */}
      <path d="M3.5 5v14" />
      <path d="M3.5 5h2.5M3.5 19h2.5" />
      {/* the coil: an open helix tightening toward the tip */}
      <path d="M6 8c3 0 3 8 6 8M12 16c3 0 3-6 5.5-6M17.5 10c2 0 2 4 3.5 4" />
      <path d="M6 16c3 0 3-8 6-8M12 8c3 0 3 6 5.5 6" />
      {/* boring tip */}
      <path d="M21 14l1.2-1M21 14l-1.1-.6" />
    </>
  ),

  // pipe — an elbow pipe section with flanged ends (cross-section feel)
  pipe: (
    <>
      <path d="M3 7.5h7a4 4 0 0 1 4 4v9" />
      <path d="M3 13.5h4.5a3.5 3.5 0 0 1 .5 0" />
      <path d="M2.5 6.5v7M5.5 6.5v7" />
      <path d="M10.5 20.5h7M10.5 17.5h7" />
    </>
  ),

  // camera-cable — a camera head on a coiled inspection cable
  "camera-cable": (
    <>
      <rect x="14" y="4" width="7" height="5.5" rx="1.5" />
      <path d="M17.5 6v1.5" />
      <path d="M14 6.75c-2 0-2 2-4 2s-2-2-4-2-2 2-3.5 2" />
      <path d="M3 13.5c2 0 2.4 2.2 4.4 2.2S9.8 13.5 12 13.5s2.6 4 4.8 4 2.7-2.5 4.2-2.5" />
    </>
  ),

  // backwater-valve — an inline valve body with an internal flap + flow arrow
  "backwater-valve": (
    <>
      <path d="M2.5 12h4M17.5 12h4" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" />
      <path d="M9 15.5 14.5 9" />
      <circle cx="9" cy="15.5" r="1" />
      <path d="M13 12.5h3l-1.3-1.4M16 12.5l-1.3 1.4" />
    </>
  ),

  // sump-pump — a pump in a pit with a discharge riser, sitting in water
  "sump-pump": (
    <>
      <path d="M4 9V4.5M4 4.5h7v4" />
      <path d="M11 6.5h3v-2" />
      <rect x="5.5" y="12" width="6" height="6" rx="1" />
      <path d="M8.5 12V9.5" />
      <path d="M3 20.5c1.3 0 1.3-1 2.6-1s1.3 1 2.6 1 1.3-1 2.6-1 1.3 1 2.6 1 1.3-1 2.6-1 1.3 1 2.6 1" />
    </>
  ),

  // water-heater — a cylindrical tank with top fittings and a control dial
  "water-heater": (
    <>
      <rect x="6" y="4" width="12" height="16" rx="3" />
      <path d="M9 4V2.5M15 4V2.5" />
      <circle cx="12" cy="13.5" r="2" />
      <path d="M9 8.5h6" />
    </>
  ),

  // tankless — a wall unit with a vent and supply/return pipes below
  tankless: (
    <>
      <rect x="5" y="3.5" width="14" height="11" rx="1.5" />
      <path d="M8 7h8M8 10.5h5" />
      <path d="M9 14.5v3M15 14.5v3" />
      <path d="M7 20.5h4M13 20.5h4" />
    </>
  ),

  // droplet — a water drop
  droplet: (
    <>
      <path d="M12 3.2c3.3 4 5.5 6.6 5.5 9.6a5.5 5.5 0 0 1-11 0c0-3 2.2-5.6 5.5-9.6Z" />
      <path d="M9 13.5a3 3 0 0 0 2.2 2.7" />
    </>
  ),

  // burst-pipe — a split pipe spraying (frozen/burst)
  "burst-pipe": (
    <>
      <path d="M3 16h6.5M14.5 16H21" />
      <path d="M3 12.5v7M21 12.5v7" />
      <path d="m11.8 16-1.6-3 3.2-1.4-1.6-2.6" />
      <path d="M13.5 10.5 16 8M11 7.5l.6 3M16.5 12l2.5-1" />
    </>
  ),

  // excavator — boom + dipper arm + toothed bucket over a tracked base
  excavator: (
    <>
      {/* tracked base */}
      <rect x="3" y="16.5" width="9" height="3.5" rx="1.75" />
      {/* cab */}
      <path d="M5.5 16.5v-3a1.5 1.5 0 0 1 1.5-1.5h2.5l1.5 2v2.5" />
      {/* boom + dipper to the bucket */}
      <path d="M9.5 12 15 8l3 3.5" />
      {/* bucket with teeth */}
      <path d="M18 11.5l2.5.5-.6 3-3.2.4Z" />
      <path d="M16.7 15.4v1.4M18.6 15.6v1.2" />
    </>
  ),

  // faucet — a tap with a spout and a falling drop
  faucet: (
    <>
      <path d="M3 11h5v-1a2 2 0 0 1 2-2h3" />
      <path d="M13 6.5h4M15 6.5V11" />
      <path d="M15 11c0 1.5-1.2 2.5-2.7 2.5H12" />
      <path d="M5.5 11v3M12 17.5v.01" />
    </>
  ),

  // toilet — a tank + bowl in profile
  toilet: (
    <>
      <path d="M6 4h6v4H6z" />
      <path d="M6 8h8.5l-.7 4.5a5.5 5.5 0 0 1-10.8 0L2.5 11" />
      <path d="M5.5 17.5 4.5 21h6l-1-3.2" />
    </>
  ),

  // waterproofing — a house with a protected foundation + waterline below grade
  waterproofing: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v7.5M18 10v7.5" />
      <path d="M4 17.5h16" />
      <path d="M5.5 20.5c1.1 0 1.1-1 2.2-1s1.1 1 2.2 1 1.1-1 2.2-1 1.1 1 2.2 1 1.1-1 2.2-1" />
    </>
  ),

  // water-line — a service line running from a street main up into the house
  "water-line": (
    <>
      <path d="M3 5v8M3 9h7a4 4 0 0 1 4 4v3" />
      <circle cx="3" cy="13" r="1" />
      <path d="M14 16h7" />
      <path d="M17.5 16v4.5M14.5 20.5h6" />
    </>
  ),

  // leak-detect — a droplet inside a locating reticle/scope
  "leak-detect": (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M11 7.8c1.7 2 2.8 3.3 2.8 4.7a2.8 2.8 0 0 1-5.6 0c0-1.4 1.1-2.7 2.8-4.7Z" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),

  // commercial — a multi-storey building with windows
  commercial: (
    <>
      <path d="M4 20.5V5.5L13 3v17.5" />
      <path d="M13 8.5h7v12" />
      <path d="M3 20.5h18" />
      <path d="M7 8h2.5M7 11.5h2.5M7 15h2.5M16 12h1.5M16 15.5h1.5" />
    </>
  ),

  /* ============================ TRUST / VALUE ============================ */

  // shield-check — licensed & insured
  "shield-check": (
    <>
      <path d="M12 3 5 5.5v6c0 4.3 3 7.4 7 9 4-1.6 7-4.7 7-9v-6L12 3Z" />
      <path d="m9 11.7 2.2 2.3L15.2 9.8" />
    </>
  ),

  // clock-247 — a clock with continuous-cycle arrows (24/7)
  "clock-247": (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 8v4l2.5 1.5" />
      <path d="M5 5.5 4 4.2M19 5.5l1-1.3" />
    </>
  ),

  // no-deposit — a dollar sign struck through (no deposits)
  "no-deposit": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.5 9.2c-.5-.9-1.5-1.4-2.7-1.4-1.6 0-2.6.9-2.6 2.1 0 1.3 1.1 1.8 2.8 2.2 1.7.4 2.8.9 2.8 2.2 0 1.2-1 2.1-2.8 2.1-1.2 0-2.3-.5-2.8-1.4" />
      <path d="M12 6.2v1.6M12 16.2v1.6" />
      <path d="m6 18 12-12" />
    </>
  ),

  // map-pin — location
  "map-pin": (
    <>
      <path d="M12 21c4-4.4 6.5-7.6 6.5-10.8A6.5 6.5 0 0 0 5.5 10.2C5.5 13.4 8 16.6 12 21Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),

  // phone — handset
  phone: (
    <path d="M6.5 3.5c.5 0 .9.3 1 .8l.9 3.1c.1.5 0 1-.4 1.3L6.7 9.9a12 12 0 0 0 5.4 5.4l1.2-1.3c.3-.4.8-.5 1.3-.4l3.1.9c.5.1.8.5.8 1V18a2.5 2.5 0 0 1-2.7 2.5C9.2 20 4 14.8 4 6.2A2.5 2.5 0 0 1 6.5 3.5Z" />
  ),

  // tag — upfront pricing / spec tag
  tag: (
    <>
      <path d="M3.5 11.3V4.5h6.8L20 14.2a2 2 0 0 1 0 2.8l-3 3a2 2 0 0 1-2.8 0L3.5 11.3Z" />
      <circle cx="7.5" cy="8.5" r="1.2" />
    </>
  ),

  // handshake — services not sales / referrals
  handshake: (
    <>
      <path d="M2.5 8.5 6 7l4 3.2c.8.7.2 2-1 1.8" />
      <path d="m12 8 2.5-1.3 7 2.3v6L18 17l-3-2.5" />
      <path d="M10 12.5 8.2 11M12.5 13.5l-1.5-1.3M11 15.5 9.5 14.3" />
      <path d="M6 7v6.5M18 7.5V17" />
    </>
  ),

  // wrench — craftsmanship / do-it-right
  wrench: (
    <path d="M15.5 3.5a4.5 4.5 0 0 0-5.3 5.9L3.8 15.8a2 2 0 0 0 2.8 2.8l6.4-6.4a4.5 4.5 0 0 0 5.9-5.3l-2.7 2.7-2.6-.4-.4-2.6 2.3-3Z" />
  ),

  // family — family-owned (two adults + child silhouettes)
  family: (
    <>
      <circle cx="7" cy="6.5" r="2.3" />
      <path d="M3.5 19v-4a3.5 3.5 0 0 1 7 0v4" />
      <circle cx="16.5" cy="6.5" r="2.3" />
      <path d="M13.5 19v-4a3.5 3.5 0 0 1 7 0v4" />
      <circle cx="12" cy="13" r="1.6" />
      <path d="M9.8 20v-2.2a2.2 2.2 0 0 1 4.4 0V20" />
    </>
  ),

  /* ============================ GENERIC UI ============================ */

  "arrow-right": (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),

  "arrow-up-right": (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),

  "chevron-down": <path d="m5 9 7 7 7-7" />,

  "chevron-right": <path d="m9 5 7 7-7 7" />,

  check: <path d="m4.5 12.5 5 5 10-11" />,

  // alert — exclamation in a triangle (signs you need this)
  alert: (
    <>
      <path d="M12 4 2.8 19.5h18.4L12 4Z" />
      <path d="M12 10v4" />
      <path d="M12 17v.01" />
    </>
  ),

  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),

  minus: <path d="M5 12h14" />,

  // star — filled (uses currentColor as fill too); see wrapper override
  star: (
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
  ),

  "star-outline": (
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
  ),

  menu: (
    <>
      <path d="M3.5 6.5h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17.5h17" />
    </>
  ),

  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),

  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),

  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3.5v3M16 3.5v3" />
      <path d="M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2" />
    </>
  ),

  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
};

/** Icons that are meant to be filled solids rather than line work. */
const FILLED: ReadonlySet<IconName> = new Set<IconName>(["star"]);

export function Icon({
  name,
  size = 24,
  className,
  "aria-hidden": ariaHidden,
  title,
}: IconProps) {
  const isFilled = FILLED.has(name);
  const decorative = title ? false : ariaHidden ?? true;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={decorative || undefined}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {PATHS[name]}
    </svg>
  );
}

export default Icon;

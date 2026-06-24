/**
 * Canonical icon-name registry — the single source of truth for icon identifiers.
 *
 * Forge implements an <Icon name="..." /> component (src/components/ui/Icon.tsx)
 * that renders a custom SVG for EACH name below, drawn per DESIGN-BRIEF §5.2
 * (1.75px stroke, round caps/joins, 24×24 grid, single-weight line icons).
 *
 * Data modules (services.ts) and page builders reference these names ONLY.
 * Adding a new icon = add the literal here AND implement it in Icon.tsx.
 * Never use emoji or a generic icon font (DESIGN-BRIEF §1.4 / §5.2).
 */

export const ICON_NAMES = [
  // --- Trade / service icons (DESIGN-BRIEF §5.2 required set) ---
  "auger", // drain/auger — coiled snake (drain cleaning & snaking)
  "pipe", // pipe cross-section (drain repair/replacement)
  "camera-cable", // sewer camera on a cable (camera inspection)
  "backwater-valve", // backwater valve
  "sump-pump", // sump pump in a pit
  "water-heater", // water-heater tank
  "tankless", // tankless unit
  "droplet", // water droplet / leak
  "burst-pipe", // frozen / burst pipe
  "excavator", // excavator / shovel-in-earth (excavation & underpinning)
  "faucet", // faucet (fixtures)
  "toilet", // toilet (fixtures)
  "waterproofing", // house-with-waterline (basement waterproofing)
  "water-line", // service line to the street (water service line)
  "leak-detect", // leak detection (droplet + locate)
  "commercial", // building (commercial plumbing)

  // --- Trust / value-prop icons ---
  "shield-check", // licensed & insured
  "clock-247", // 24/7 emergency
  "no-deposit", // $ with a slash (no deposits)
  "map-pin", // GTA / service areas
  "phone", // phone
  "tag", // upfront pricing / spec tag
  "handshake", // services-not-sales / referrals
  "wrench", // craftsmanship / do-it-right
  "family", // family-owned

  // --- Generic UI icons ---
  "arrow-right", // ghost links, card "learn more →"
  "arrow-up-right", // external / nav
  "chevron-down", // dropdowns, accordion
  "chevron-right", // breadcrumbs
  "check", // checklist (scope items)
  "alert", // "signs you need this" alert-style
  "plus", // accordion closed
  "minus", // accordion open
  "star", // review stars (filled)
  "star-outline", // review stars (empty, for 4★)
  "menu", // hamburger
  "close", // drawer/banner close
  "mail", // email
  "calendar", // estimate / booking
  "clock", // hours
] as const;

export type IconName = (typeof ICON_NAMES)[number];

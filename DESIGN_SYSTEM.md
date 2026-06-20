# Drainman INC — Design System (LOCKED)

> Foundation agent deliverable. This is the single visual source of truth for all 9
> downstream builders. Every color, font, and spacing value below is wired into
> `app/globals.css` (Tailwind v4 `@theme`) and `next/font`. Do not introduce new
> hex values, fonts, or one-off radii — compose from these tokens.

---

## 0. The brief, distilled

A second-generation, family-owned Toronto **drain** company since 1972. The client
wants a vibrant, colorful, modern **"Superman effect"**: confident, heroic,
energetic, dependable — the drain expert who shows up and saves the day when pipes
back up or basements flood. Distinctive choices must be grounded in the real trade:
pipes, water flow, drains, sewer cameras & snakes, the Toronto/GTA cityscape.

**Hard external constraint that shaped everything:** the Enercare partner logo —
which must sit *front and center* on the home page — is **red** (`#F6323E`,
`#DA1B27`, verified from their official SVG). If our brand were red-dominant it
would brawl with Enercare red. So the brand leads with **vivid hero blue**, and red
is reserved for genuine emergency/alarm semantics and Enercare. This is the literal
Superman blue-and-red pairing, but earned by a real constraint rather than chosen as
a costume.

---

## 1. Two-pass process

### Pass 1 — first brainstorm (what I almost shipped)

- Palette: deep navy `#0B1F3A` base, electric blue accent, white, one orange CTA.
- Type: Oswald (display) + Inter (body).
- Layout: full-bleed Toronto-skyline hero, 3-column trust cards, alternating
  image/text service rows.
- Signature: a glowing electric-blue CTA button.

### Pass 1 critique (against the 3 forbidden looks + "would I produce this for any plumber?")

- **Oswald + Inter is the literal default the design audit suggested** ("Barlow
  Condensed, Oswald, or Montserrat"). Every modern trades site reaches for Oswald.
  Reads templated. **Rejected.**
- A "glowing accent button" as the signature is not grounded in the subject at all —
  it's generic SaaS decoration. **Rejected.**
- Navy + single orange accent risks drifting toward forbidden look #2 (dark canvas +
  one hot accent). **Tightened:** keep a light, optimistic canvas; spend color on a
  real material, not a lone accent.
- "3 trust cards + alternating rows" is fine structurally (it's true to the
  content), but needs a stronger organizing idea than gradient blobs.

### Pass 2 — locked direction (revised)

The one idea everything hangs on: **the drain line.** A drain/sewer line is a
continuous run of pipe that water and a camera travel through. We make that literal
flowing line the spine of the site — the **signature element** (see §6). It is the
most characteristic object in this company's actual world (they run cameras and
snakes *down the line*), it carries water (the trade's medium), and it gives the
"hero shows up and clears the path" story a visual grammar that no SaaS template has.

Color leads with a confident **Drain Blue** (water + trust + Superman), warmed by a
single optimistic **Signal Yellow** (high-vis utility marking / "we located it"
paint, the color cities spray on the ground above a buried line), with **Alert Red**
held back strictly for emergencies + Enercare. Canvas stays bright and clean so the
photography of pipes/water and the Enercare logo read instantly.

Type pairs a **wide, mechanical-geometric display** (Archivo) with a humanist body
(Source Sans 3) and a **monospace utility** (Roboto Mono) used only for the things
that are literally measured/coded in this trade: phone number, license numbers, the
pipe-diameter / "depth" style data chips. Archivo's slightly wide, engineered
letterforms feel like stamped equipment plates and municipal signage — not Oswald,
not the condensed-trades cliché.

---

## 2. Color palette (6 named values)

All tokens live as CSS variables in `app/globals.css` and as Tailwind colors via
`@theme`. Use the Tailwind class names; never paste raw hex into components.

| Token | Hex | Tailwind class | Role |
|---|---|---|---|
| **Drain Blue** | `#0E63E6` | `bg-blue` / `text-blue` | Primary brand. Hero washes, primary buttons, links, the drain-line spine. The "Superman" blue. |
| **Deep Main** | `#0A1A3F` | `bg-ink` / `text-ink` | Near-navy ink. Headings, dark sections, footer. The "deep underground / main line" dark. Replaces pure black everywhere. |
| **Signal Yellow** | `#FFC629` | `bg-signal` / `text-signal` | High-vis utility-marking yellow. Eyebrows, underlines, the active drain-line "locate" dot, small heroic highlights. The one warm pop. |
| **Alert Red** | `#E11D2A` | `bg-alert` / `text-alert` | Emergency / urgency ONLY (e.g. "backed up right now? call") + harmonizes with the Enercare red (`#F6323E`). Never a decorative accent. |
| **Pipe Steel** | `#5B6B82` | `text-steel` / `border-steel` | Muted slate-steel for secondary text, captions, borders, dividers. The galvanized-pipe gray. |
| **Clean Water** | `#F4F8FF` | `bg-water` | Faintly blue-tinted off-white canvas. Section backgrounds, cards. NOT cream (avoids forbidden look #1) and NOT the old `lightcyan`. Reads as clean water, not hospital. |
| **White** | `#FFFFFF` | `bg-white` | Base page background, card surfaces, text on dark. |

Supporting (derived, do not treat as new brand colors):
- `--color-blue-deep: #0A4FC0` — pressed/hover state of Drain Blue.
- `--color-water-line: #DCE7FA` — hairline borders on light surfaces.
- Focus ring: **Signal Yellow** at high contrast (`#FFC629`) with a `2px` offset —
  pops on both blue and white, see §8.

**Contrast (WCAG AA verified intent):**
- Deep Main `#0A1A3F` on White / Clean Water → ~15:1 (body & headings). 
- White on Drain Blue `#0E63E6` → ~5.0:1 (large/medium text and buttons; use `font-semibold`).
- Deep Main on Signal Yellow `#FFC629` → ~11:1 (yellow is a *background for dark text only*, never white text on yellow).
- Pipe Steel `#5B6B82` on White → ~4.7:1 (captions/secondary, AA for normal text).
- Never put Alert Red text on Drain Blue or vice-versa.

---

## 3. Typography

Wired via `next/font/google` in `app/layout.tsx`, exposed as CSS vars and mapped in
`@theme`.

| Role | Family | Tailwind | Why this, for THIS brand |
|---|---|---|---|
| **Display** | **Archivo** (700/800, slightly expanded) | `font-display` | Engineered, faintly wide grotesque — looks stamped onto equipment plates & municipal signage. Confident and heroic at large sizes without the over-used condensed-trades look (deliberately NOT Oswald/Barlow Condensed). |
| **Body** | **Source Sans 3** (400/600) | `font-body` (default) | Humanist, highly legible at small sizes, friendly — matches the "family business, talks to you like a person" voice. Reads warm next to Archivo's hardness. |
| **Utility / data** | **Roboto Mono** (500) | `font-mono` | Used ONLY for things this trade actually measures or codes: the phone number, license numbers (P19120 / B18804), and "spec chip" data (pipe Ø, depth, est. response). Mono = instrument readout, reinforces the technician identity. Never used for prose. |

### Type scale (fluid, `clamp()`)

| Step | Token / class | Size | Use |
|---|---|---|---|
| Display XL | `text-display-xl` | `clamp(2.75rem, 6vw, 5rem)` | Home hero H1 |
| Display L | `text-display-lg` | `clamp(2.25rem, 4.5vw, 3.5rem)` | Page H1 / section heroes |
| H2 | `text-h2` | `clamp(1.75rem, 3vw, 2.5rem)` | Section headings |
| H3 | `text-h3` | `clamp(1.25rem, 2vw, 1.625rem)` | Card titles, subheads |
| Lead | `text-lead` | `clamp(1.0625rem, 1.4vw, 1.25rem)` | Hero sub / intro paragraphs |
| Body | `text-base` | `1rem` (16px) | Default copy |
| Small | `text-sm` | `0.875rem` | Captions, chip labels |
| Eyebrow | `text-eyebrow` | `0.75rem` / `0.18em` tracking / uppercase | Section eyebrows (see SectionHeading) |

Display headings: `font-display`, `font-extrabold` (800), `leading-[0.95]`,
`tracking-[-0.01em]`, color `text-ink`. Eyebrows: `font-mono`, uppercase, Signal-
Yellow-on-dark or Drain-Blue-on-light. Body: `font-body`, `leading-relaxed`,
`text-ink/85` for long copy, `text-steel` for secondary.

---

## 4. Spacing, radius, shadow, layout

### Spacing scale (4px base) — use Tailwind defaults, but section rhythm is fixed:
- Section vertical padding: `py-20 md:py-28` (token `--space-section`). Never the old
  `15vh` margins.
- Container max width: **1200px** (`--container: 75rem`), gutters `px-5 md:px-8`.
- Content measure for prose: `max-w-[68ch]`.
- Grid gap default: `gap-6 md:gap-8`.

### Radius
- `--radius-sm: 6px` (chips, inputs) → `rounded-md`
- `--radius: 12px` (cards, buttons) → `rounded-xl`
- `--radius-lg: 20px` (feature panels, hero media) → `rounded-2xl`
- `--radius-pill: 999px` (pills/badges) → `rounded-full`
- One deliberate exception: the drain-line spine and "pipe" elements use full pill
  ends. No zero-radius broadsheet rules anywhere (avoids forbidden look #3).

### Shadow (soft, water-like, never harsh)
- `--shadow-sm: 0 1px 2px rgba(10,26,63,.06)`
- `--shadow-md: 0 8px 24px rgba(10,26,63,.10)` → cards on hover, header on scroll
- `--shadow-blue: 0 10px 30px rgba(14,99,230,.28)` → primary CTA glow (the heroic lift)
- Use `shadow-md`/`shadow-blue` sparingly; flat-by-default, lift on hover/focus.

---

## 5. Motion

- Global ease: `cubic-bezier(.22,.61,.36,1)` (token `--ease-flow`), durations 150–500ms.
- Hover: buttons/cards lift `translateY(-2px)` + shadow; links underline-grow.
- **Signature motion (the only orchestrated moment):** the drain-line spine "fills"
  with Drain Blue + a Signal-Yellow locate-dot travels along it on scroll-into-view
  (a sewer camera running the line). One moment, page-load/scroll-reveal — not
  scattered effects.
- Water/flow accents (subtle) only behind the hero; everything else stays still.
- **`prefers-reduced-motion: reduce`** → all transitions collapse to `0.01ms`, the
  line renders already-filled, the locate-dot is static. Implemented globally in
  `globals.css`. Builders must not add motion that ignores this.

---

## 6. Signature element — "The Line"

A continuous **drain line**: a rounded-end horizontal/vertical pipe rule in Drain
Blue, 3–4px, that threads between sections as the visual spine. At key moments it
carries a **Signal-Yellow locate-dot** (the camera head / the "we found it" marker)
and "joints" (small notches) where sections connect — exactly how a real sewer line
is segmented. It does three honest jobs:

1. **Hero:** the line runs from the headline down into the page — "we trace it to
   the source."
2. **Section dividers:** instead of broadsheet hairlines, sections are joined by the
   line with a joint marker — structure that's *true* (these are connected stages of
   the same job), not decoration.
3. **Plumber-vs-Technician section:** the line literally separates "where a standard
   plumber stops" from "where the technician keeps going (camera + snake down the
   main)."

Implemented as a small reusable presentational piece the Sections agent builds
(`components/sections/DrainLine.tsx` is OPTIONAL/owned by Sections; the CSS hooks
`.drain-line`, `.drain-line__dot` live in `globals.css`). Page builders should not
reinvent dividers — use the line.

This is the ONE place we spend boldness. Everything else stays quiet: clean canvas,
disciplined type, soft shadows.

---

## 7. Why this is not any of the 3 AI-cliché defaults

- **Not** cream + serif + terracotta: canvas is clean blue-white `#F4F8FF`, display
  is a wide grotesque (Archivo), accent is utility-yellow + Enercare red — zero serif,
  zero terracotta, zero cream.
- **Not** near-black + single acid accent: canvas is light and optimistic; dark
  (`#0A1A3F`) is used in bands, not as the whole page; color is a *system* (blue
  lead, yellow warm, red semantic) not one lone neon accent.
- **Not** broadsheet/hairline/zero-radius: generous radii, pill-ended pipe motifs,
  soft water shadows, no dense newspaper columns or hairline rules — dividers are the
  drain-line, not rules.

---

## 8. Accessibility quality floor (non-negotiable for all builders)

- Visible keyboard focus everywhere: `:focus-visible` → `2px` Signal-Yellow ring +
  `2px` offset (global rule in `globals.css`; primitives inherit it). Never remove
  outlines without replacement.
- All interactive targets ≥ 44px touch height on mobile.
- Real, specific `alt` text on every image (see BUILD_CONTRACT image manifest).
- Color is never the only signal (icons/labels accompany Alert Red, etc.).
- `prefers-reduced-motion` respected globally.
- Fully responsive to 320px; mobile nav is a real menu with backdrop + focus trap.
- Copy: sentence case, active voice, plain verbs, no filler (per skill writing guide).

---

## 9. Token implementation map

- `app/globals.css` — `@theme` block + CSS variables + base element styles + focus +
  reduced-motion + `.drain-line` hooks. **Single source.**
- `app/layout.tsx` — `next/font` for Archivo, Source Sans 3, Roboto Mono → CSS vars.
- `lib/utils.ts` — `cn()` (clsx + tailwind-merge).
- `components/ui/*` — primitives consume tokens only.

**Quick reference for builders (memorize these 6):**
`bg-blue #0E63E6` · `text-ink #0A1A3F` · `bg-signal #FFC629` · `text-alert #E11D2A`
· `text-steel #5B6B82` · `bg-water #F4F8FF`. Fonts: `font-display` (Archivo),
`font-body` (Source Sans 3), `font-mono` (Roboto Mono).
</content>
</invoke>

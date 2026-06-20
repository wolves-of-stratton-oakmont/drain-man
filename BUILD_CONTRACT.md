# BUILD CONTRACT — Drainman INC rebuild

> Written by the Foundation agent. This is the binding coordination doc for the 9
> parallel builders. Read it before touching anything. If you need a shared change
> (a new token, a new shared component prop), it belongs to Foundation/Sections —
> coordinate, don't fork.
>
> Companion docs: **DESIGN_SYSTEM.md** (visual law) · **research/SITE_SPEC.md**
> (ground-truth content) · **public/images/CREDITS.md** (image provenance).

---

## 0. Stack & conventions (already set up)

- **Next.js 16.2.9** (App Router, Turbopack), **React 19**, **TypeScript**, **Tailwind v4**.
- Tailwind v4 uses `@theme` in `app/globals.css` — **no `tailwind.config`**. All
  tokens are CSS variables + theme colors there. Use class names like `bg-blue`,
  `text-ink`, `text-display-xl`, `rounded-2xl`. Do not add raw hex in components.
- Import alias: **`@/*`** → project root (e.g. `@/components/ui`, `@/lib/site`).
- Installed deps you may use: `lucide-react` (icons), `clsx`, `tailwind-merge`
  (via `cn`). **Do not add new dependencies** without coordinating — especially no
  animation libs (use CSS/Tailwind transitions).
- Every page file may export its own `metadata` (title/description). The root layout
  provides a title template `"%s · Drainman INC"` — page titles should be short
  (e.g. `title: "Services"`), the template adds the suffix. Home uses the default.
- `npm run build` MUST stay green. Run it before you hand off.
- TypeScript gotcha: when extending `React.HTMLAttributes<...>` and adding a `title`
  prop, `Omit<..., "title">` (see `SectionHeading`).

---

## 1. Routes (final)

| Route | File | Owner |
|---|---|---|
| `/` (Home) | `app/page.tsx` | Builder 2 — Home |
| `/services` | `app/services/page.tsx` | Builder 3 — Services |
| `/about` | `app/about/page.tsx` | Builder 4 — About |
| `/contact` | `app/contact/page.tsx` | Builder 5 — Contact |
| `/faq` | `app/faq/page.tsx` | Builder 8 — FAQ + misc |
| `POST /api/contact` | `app/api/contact/route.ts` | Builder 6 — Booking |

All five pages currently have on-brand **placeholders** using the shared primitives —
replace the body, keep (or extend) the `metadata` export.

---

## 2. File-ownership map (do NOT edit files outside your column)

| Builder | OWNS (create/edit freely) | May READ/IMPORT (never edit) |
|---|---|---|
| **2 — Home** | `app/page.tsx`; `public/images/home/*` | everything in §4, `components/sections/*` (§5), `lib/*` |
| **3 — Services** | `app/services/page.tsx`; `public/images/services/*` | §4 primitives, §5 sections, `lib/*` |
| **4 — About** | `app/about/page.tsx`; `public/images/about/*` | §4, §5, `lib/*` |
| **5 — Contact** | `app/contact/page.tsx`; `public/images/contact/*` | §4, §5, `components/booking/*` (§6), `lib/*` |
| **6 — Booking** | `app/api/contact/route.ts`; `components/booking/*` (incl. `BookingForm.tsx`) | §4 primitives, `lib/*` |
| **7 — Sections** | `components/sections/*` (all cross-page sections in §5) | §4 primitives, `lib/*`, `public/images/shared/*` |
| **8 — FAQ + misc** | `app/faq/page.tsx`; `app/not-found.tsx`; `app/sitemap.ts`; `app/robots.ts` | §4, `lib/*` |

**Shared/foundation files — DO NOT EDIT (owned by Foundation):**
`app/layout.tsx`, `app/globals.css`, `app/icon.svg`, `components/layout/*`,
`components/brand/*`, `components/ui/*`, `lib/utils.ts`, `lib/site.ts`,
`public/favicon.svg`, `public/brand/*`. Need a change here? Flag Foundation.

**Image folders are disjoint per builder** (`home/`, `services/`, `about/`,
`contact/`, `shared/`) so nobody collides. Builder 7 owns `shared/`.

---

## 3. Design tokens — quick reference (full law in DESIGN_SYSTEM.md)

**Colors** (Tailwind classes): `blue #0E63E6` (primary) · `blue-deep #0A4FC0`
(hover) · `ink #0A1A3F` (headings/dark) · `signal #FFC629` (warm pop, dark text
only) · `alert #E11D2A` (emergency only) · `steel #5B6B82` (secondary text/borders)
· `water #F4F8FF` (canvas) · `water-line #DCE7FA` (hairlines) · `white`.
Use as `bg-*`, `text-*`, `border-*`. Opacity ok (`text-ink/85`, `bg-blue/10`).

**Type:** `font-display` (Archivo, headings) · `font-body` (Source Sans 3, default
prose) · `font-mono` (Roboto Mono — phone, license #s, data chips ONLY, never prose).
Sizes: `text-display-xl`, `text-display-lg`, `text-h2`, `text-h3`, `text-lead`,
`text-base`, `text-sm`, `text-eyebrow` (use with `uppercase tracking-[0.18em]`).

**Radius:** `rounded-md` (6, inputs/chips) · `rounded-xl` (12, buttons/cards) ·
`rounded-2xl` (20, panels/media) · `rounded-full` (pills).
**Shadow:** `shadow-[var(--shadow-sm)]`, `shadow-[var(--shadow-md)]`,
`shadow-[var(--shadow-blue)]` (CTA glow). Flat by default, lift on hover.
**Spacing/rhythm:** section padding via `<Section spacing="lg">` (= `py-20 md:py-28`).
Container max 1200px via `<Container>`. Prose measure `max-w-[68ch]`.
**Motion:** ease `ease-[var(--ease-flow)]`, 150–500ms. `prefers-reduced-motion`
handled globally — don't add motion that ignores it.

**Signature element — "The Line":** the drain/sewer line spine. CSS hooks exist:
`.drain-line` (3px rounded pipe rule), `.drain-line__dot` (yellow locate-dot),
`.drain-line__joint` (section joint). Use these for dividers between sections instead
of plain rules. Builder 7 may wrap them in `components/sections/DrainLine.tsx`.

**Accessibility floor (every builder):** real alt text; `:focus-visible` already
yields a yellow ring (don't strip outlines); ≥44px touch targets; AA contrast
(white-on-blue needs `font-semibold`+; never white text on `signal`/yellow); respect
reduced motion; responsive to 320px; sentence-case, active-voice, plain copy.

---

## 4. Shared UI primitives — exact import paths & props

Import from the barrel: `import { Button, Card, ... } from "@/components/ui"`.

### `Button` — `@/components/ui` (or `@/components/ui/Button`)
```tsx
<Button variant="primary|secondary|ghost" size="sm|md|lg" asChild?>
```
- `primary` = Drain Blue CTA, `secondary` = outlined, `ghost` = quiet text.
- `asChild` clones a single child (e.g. a Next `<Link>` or `<a>`) and applies button
  styles. Example:
  ```tsx
  <Button asChild><Link href="/contact">Book a service</Link></Button>
  ```
- Also exported: `buttonClasses({variant,size,className})` to style an arbitrary
  element (Header uses it on `<Link>`).

### `Container` — props: `width?: "default"|"narrow"|"wide"`, `as?`
1200px default, `narrow` ~768px (prose), `wide` ~1360px. Adds responsive gutters.

### `Section` — props: `tone?: "white"|"water"|"ink"|"blue"`, `spacing?: "none"|"sm"|"md"|"lg"`, `contained?: boolean` (default true), `containerWidth?`, `as?`
Wraps content in a `<section>` + `<Container>`. `ink`/`blue` tones flip text white.
Use `contained={false}` for full-bleed (e.g. hero media), then place your own Container.

### `Card` — props: `variant?: "default"|"raised"|"outline"|"ink"`, `as?`
`raised` lifts on hover (use for clickable service cards). `ink` = dark card.

### `Badge` — props: `tone?: "blue"|"signal"|"ink"|"alert"|"neutral"`
Pill/chip for trust signals & tags. Put a lucide icon as the first child for icon+text.
Use `alert` tone ONLY for genuine urgency.

### `SectionHeading` — props: `eyebrow?: string`, `title: ReactNode` (required), `description?: ReactNode`, `align?: "left"|"center"`, `onDark?: boolean`, `as?: "h1"|"h2"|"h3"`
The standard section header (mono eyebrow with a dot + Archivo title + steel desc).
Set `onDark` on `ink`/`blue` sections. Set `as="h1"` for the page's primary heading.

### Form primitives (`Label`, `Input`, `Textarea`) — `@/components/ui`
- `Label` props: `required?: boolean` (adds a red asterisk), standard `htmlFor`.
- `Input` / `Textarea`: standard input/textarea attrs. They already style focus
  (yellow ring) and `aria-invalid="true"` (red border). Always pair an `Input` with a
  `Label htmlFor` + matching `id`. `fieldBase` (string) is exported if you need the
  field styles on a `<select>`.

### `Logo` — `@/components/brand/Logo`
Props: `variant?: "light"|"dark"`, `height?: number` (px), `showSuffix?: boolean`.
Live-text "Drainman INC" wordmark with the locate-dot "i" and blue drain-line. Use
`variant="dark"` on dark backgrounds. Already used in Header (light) & Footer (dark).

### Layout (already mounted in `app/layout.tsx` — do not re-import on pages)
`Header` (`@/components/layout/Header`) and `Footer` (`@/components/layout/Footer`)
render globally. Pages render ONLY their own body. Don't add another header/footer.

### Company facts — `@/lib/site`
`import { site, primaryNav } from "@/lib/site"`. Use `site.phone.href`,
`site.phone.display`, `site.email`, `site.address.*`, `site.licenses.master|builder`,
`site.links.enercare`, `site.links.googleReview`, `site.serviceAreas`, `site.founded`.
**Never hard-code the phone/address/licenses — read from `site`.**

### `cn()` — `@/lib/utils` — merge class names (clsx + tailwind-merge).

---

## 5. Cross-page Section components — agreed names, paths & props (Builder 7 builds; everyone imports)

Builder 7 (Sections) creates these under `components/sections/`. Page builders may
import them **by these exact names/paths before they exist** — write your page against
this API; if Sections isn't done yet, the import will resolve once it lands. Keep
props minimal; sensible defaults so pages can drop them in with no args.

> Sections agent: honor these signatures. If you must change one, update this table
> and ping the affected page owners. Each component should self-contain its own copy
> defaults (pulled from SITE_SPEC) but accept overrides via props.

| Component | Path | Suggested props | Used by |
|---|---|---|---|
| `PlumberVsTechnician` | `components/sections/PlumberVsTechnician.tsx` | `tone?`, `compact?: boolean` | Services (full), Home (compact) |
| `EnercareBand` | `components/sections/EnercareBand.tsx` | `variant?: "hero"\|"band"` | Home (hero/front-and-center), Contact |
| `Credentials` | `components/sections/Credentials.tsx` | `tone?` | Home, About |
| `ServiceArea` | `components/sections/ServiceArea.tsx` | `tone?` | Home, Contact |
| `Testimonials` | `components/sections/Testimonials.tsx` | `tone?` | Home, About |
| `CtaBand` | `components/sections/CtaBand.tsx` | `title?`, `subtitle?`, `tone?` | Home, Services, About, FAQ |
| `DrainLine` (optional) | `components/sections/DrainLine.tsx` | `orientation?`, `animated?: boolean` | dividers anywhere |

Notes for Sections:
- **`EnercareBand`** is the highest-priority partner element. Use the official red
  logo at `/brand/enercare-logo.svg` (alt: `"Enercare"`). Front-and-center on Home
  (most prominent thing above-or-near the fold), linking `site.links.enercare`
  (`target="_blank" rel="noopener noreferrer"`). On Contact, render the booking/plan
  link. Enercare red `#F6323E` is the logo's own color — let it sit on white/water,
  don't recolor it. Don't put it on a clashing blue field; give it clean space.
- **`PlumberVsTechnician`** is real content (see SITE_SPEC §3.3): left = standard
  plumber (faucets, leaks, fixtures), right = technician (main-line: camera, snake,
  hydro-jet, backwater valves). Use "The Line" to literally separate "where a standard
  plumber stops" from "where the technician keeps going." This is a true contrast, not
  a numbered process — do not fake 01/02/03 steps.
- **`Testimonials`** — SITE_SPEC has no quotes. Either omit, or use clearly-attributed
  placeholder review copy the client will replace, and link `site.links.googleReview`
  ("Read our Google reviews"). Do not invent specific named customers as if real.
- **`CtaBand`** — default CTA = "Book a service" → `/contact`, secondary = call
  `site.phone`.

---

## 6. Booking — BookingForm + API (Builder 6)

- **`components/booking/BookingForm.tsx`** — `"use client"` component.
  - Suggested prop: `className?`. Self-contained; the Contact page renders
    `<BookingForm />`.
  - Fields (per SITE_SPEC §6.3): **Name** (required), **Phone** (required), **Email**
    (required), **Description of the issue** (required, `Textarea`), **Preferred
    callback time** (optional). Build with `Label`/`Input`/`Textarea` primitives.
  - On submit: `POST /api/contact` with JSON. Show inline success ("Thanks — we'll
    call you back to confirm.") and field-level errors. Errors are specific and
    actionable (skill writing guide). Honeypot field for spam is fine.
  - Accessibility: associate every input with a `Label htmlFor`/`id`; set
    `aria-invalid` + `aria-describedby` on errors; manage focus to the first error /
    success message; submit button shows a pending state.
- **`app/api/contact/route.ts`** — replace the 501 stub.
  - Validate input server-side. Forward to a webhook that emails the company
    (webhook-to-email; **NOT a live calendar**). Read the webhook URL from a
    **server-side env var** (e.g. `CONTACT_WEBHOOK_URL`) via `process.env` — never
    expose it to the client, never commit a secret. If the env var is missing, return
    a clear 500 (don't crash the build). Return `{ ok: true }` / `{ ok: false, error }`.
  - Document the env var in code comments; do not create a committed `.env`.

---

## 7. Image manifest

**Important:** the images already in `public/images/` are the **client's own photos**
from their live site (re-organized + optimized), depicting the correct subjects — use
them as the real assets. A valid Pexels API key was **not** provided to this build, so
do not rely on fetching new stock; if you add a NEW slot and a key becomes available,
follow the recipe at the bottom and record credits in `public/images/CREDITS.md`.
Each builder owns its page's folder (disjoint). Builder 7 owns `shared/`.

Every `<Image>` should use `next/image` with explicit `width`/`height` or `fill` +
`sizes`, and the alt text below. Hero/LCP images: add `priority`.

### Home — `public/images/home/` (Builder 2)
| File (exists) | Subject | ~Dims | Suggested use | Alt text |
|---|---|---|---|---|
| `toronto-skyline.jpg` | Toronto skyline | 2000×1333 | Hero backdrop | `Toronto skyline at dusk over Lake Ontario` |
| `plumbing-tools.jpg` | Plumbing tools laid out | 1920×1275 | Trust/feature card | `Plumbing tools laid out on a workbench` |
| `pipe-wrenches.jpg` | Pipe wrenches close-up | 1920×1280 | Trust/feature card | `Close-up of pipe wrenches gripping a steel pipe` |
| `toronto-fountain.jpg` | Toronto sign + fountain | 2000×1327 | Feature/area card | `The Toronto sign lit up behind a city fountain` |
| Pexels query if you add a slot | `plumber technician sewer camera inspection` | landscape | — | describe the real action |

### Services — `public/images/services/` (Builder 3)
| File (exists) | Subject | ~Dims | Use | Alt text |
|---|---|---|---|---|
| `floor-drain.jpg` | Round metal floor drain | 2048×1536 | Drain Services row | `A round metal floor drain set into a concrete floor` |
| `flood-prevention.jpg` | Backflow prevention valve (real job site) | 2000×1331 | Flood Prevention row | `A backwater prevention valve installed in a basement floor` |
| `power-flush.png` | Power-flush before/after | 958×360 | Power Flushing row | `Before-and-after comparison of pipe interiors after a power flush` |
| add a slot? | `drain snake auger machine plumber` / `hydro jetting drain` | landscape | — | real tool/action |

### About — `public/images/about/` (Builder 4) — folder empty; you provide
| Suggested slot | Pexels query (if key available) | ~Dims | Alt text |
|---|---|---|---|
| Founder / hands-on portrait | `older tradesman plumber portrait` | 1600×1067 | `Bill Barber, founder of Drainman INC, on a job site` (placeholder for client photo) |
| Team / van | `plumbing company work van` | 1600×1067 | `A Drainman INC service van outside a Toronto home` |
| You may also reuse `../home/toronto-fountain.jpg` or `../shared/toronto-skyline.jpg` for atmosphere. Prefer a warm, human image for the family story; if no key, use an existing client photo and mark it for swap. |

### Contact — `public/images/contact/` (Builder 5) — folder empty
| Suggested slot | Source | ~Dims | Alt text |
|---|---|---|---|
| Map | Use a Google Maps **embed iframe** (no API key in HTML) centered on `site.address` (`lat 43.730682, lng -79.246028`), `title="Map showing Drainman INC at 440 Brimley Rd, Scarborough"`. Not an image file. |
| Optional area/atmosphere image | reuse `../shared/toronto-skyline.jpg` | 2000×1333 | `Toronto skyline — Drainman INC serves the city and the GTA` |

### Shared — `public/images/shared/` (Builder 7)
| File (exists) | Subject | Use |
|---|---|---|
| `toronto-skyline.jpg` | Toronto skyline | ServiceArea / any section needing the city |

### Brand (already in place — do not re-fetch)
`/brand/enercare-logo.svg` (Enercare partner, red, official) · `/brand/enercare-icon-192.png`
· `/favicon.svg` (app icon) · `/brand/drain_man_logo_reference.png` (legacy, reference only).

### Pexels recipe (only if you add a NEW slot AND a valid key exists)
```bash
curl -s -H "Authorization: $PEXELS_KEY" \
  "https://api.pexels.com/v1/search?query=<url-encoded>&orientation=landscape&per_page=15&size=large" > /tmp/px.json
node -e "require('/tmp/px.json').photos.forEach(p=>console.log(p.id,p.alt,p.src.large2x))"
curl -s -o "public/images/<page>/<name>.jpg" "<chosen src.large2x>"
```
Then add the photographer + Pexels URL to `public/images/CREDITS.md` and pair with
meaningful alt text.

---

## 8. Content rules (from SITE_SPEC.md — read it for verbatim copy)

- Preserve all real service content (Drain Services, Flood Prevention, Power Flushing)
  and sub-items; fix the live-site typos ("Drain Sevices" → "Drain Services", "in as
  plumbers"). Add everyday items: blocked toilet, blocked sink, blocked drains,
  repiping.
- About: use the NEW story (Bill from England → discovered drains → "Bill the Drain
  Man" → founded 1972 → second generation John + family). 2–3 concise warm paragraphs;
  trust signals as chips, not paragraphs. Don't over-claim or invent names beyond
  SITE_SPEC (Bill Barber, John, Shawna, Brian).
- FAQ: keep all 4 Q&As verbatim, lighter treatment (accordion/cards), footer-linked.
- "Family owned and operated", "We aim to provide services, not sales", "We will
  never mislead customers to obtain their business", "no deposits", "rates up front,
  not at the front door" — keep these as real differentiators.
- Copy voice: sentence case, active voice, plain verbs, specific over clever. No lorem
  ipsum, no emoji-as-icons (use lucide), no vague AI filler.
- Enercare front-and-center on Home (partner priority); Enercare plan link on Contact.

---

## 9. Definition of done (per builder)

1. Your route/component renders with real content (no placeholder text left).
2. Uses shared primitives & tokens — zero raw hex, zero new fonts/deps.
3. Responsive 320px → desktop; keyboard-navigable; AA contrast; real alt text;
   reduced-motion safe.
4. `npm run build` is green.
5. You only edited files you own (§2). Images in your own folder only.

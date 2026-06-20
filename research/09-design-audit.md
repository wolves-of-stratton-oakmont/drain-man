# Design Audit — The Drain Man Inc (drainmaninc.com)
**Agent 09 | Audited: 2026-06-20**
**Source:** Live HTML/CSS fetched directly from https://www.drainmaninc.com

---

## 1. Color Palette (Exact Values from CSS)

All colors are CSS named colors — no custom hex values are used anywhere in the stylesheet.

| Role | CSS Value | Approximate Hex |
|---|---|---|
| Body background | `lightcyan` | `#E0FFFF` |
| Body text / headings | `darkslateblue` | `#483D8B` |
| Header tagline / accent text | `slateblue` | `#6A5ACD` |
| Nav bar base | `cadetblue` | `#5F9EA0` |
| Nav active state (gradient center) | `darkcyan` | `#008B8B` |
| HR color / glow shadow | `cyan` → `darkcyan` | `#00FFFF` → `#008B8B` |
| Img banner CTA button bg | `rgb(0, 190, 190)` | `#00BEBE` |
| Img banner CTA button hover | `#009090` | `#009090` |
| Img banner overlay (text bg) | `rgba(0, 190, 190, 0.6)` | semi-transparent teal |
| Footer gradient | `lightcyan` → `darkcyan` | `#E0FFFF` → `#008B8B` |
| Text shadows | `darkcyan`, `darkslateblue`, `cyan` | various |
| Modal background | `rgba(0, 0, 0, 0.9)` | near-black overlay |
| Modal close hover | `blue` | `#0000FF` |

**Palette summary:** Near-monochromatic blue-teal. The entire site lives in a narrow band of cyan/teal/slate. No warm tones, no contrast accents, no brand reds, oranges, or strong yellows anywhere.

---

## 2. Typography

| Element | Value |
|---|---|
| Font family | `Arial, Helvetica, sans-serif` — single generic system stack, no web fonts loaded |
| Font weights | `bold` for nav links and CTA; default for body |
| Font sizes | Inline via heading tags (h1–h5) with no explicit rem/px overrides except responsive rules |
| Text rendering | `text-shadow` applied liberally to add "depth" (1px offset cyan/teal shadows on most headings) |
| Body text indentation | Non-breaking space groups (`&nbsp;&nbsp;&nbsp;&nbsp;`) used for paragraph indent — a 1990s pattern |
| Responsive type | h1 → 1.4em, h2 → 1.1em, h3 → 0.75em at ≤650px breakpoint |

**No Google Fonts, no variable fonts, no web font loading of any kind.** Pure system fonts throughout.

---

## 3. Layout Patterns

### 3.1 Overall Structure
- Classic stacked layout: `<header>` → `<nav>` → `<main>` → `<footer>`
- Footer uses `position: absolute; bottom: 0; transform: translateY(100%)` — it is pushed fully below page content, not a sticky/pinned footer. Visible only when the page is short enough.
- No CSS Grid used anywhere. Uses `display: flex` in a few places (header, nav wrapper, service cards), but primarily relies on `float` (nav items, footer columns).

### 3.2 Header
- `display: flex; justify-content: space-between; align-items: center`
- Logo left, tagline text right
- `max-height: 20vh` — hard-capped, can clip content
- Tagline contains: "Family owned and operated" (h3), "Serving the GTA for over 45 years with honesty & integrity." (h4), "Call Today: (416) 699-1370" (h3 link)

### 3.3 Navigation
- Full-width horizontal bar, 5 tabs at `width: 20%` each
- Active tab: `radial-gradient(darkcyan, cadetblue)` background
- Mobile (≤650px): nav hidden off-screen right (`translateX(100%)`), triggered by hamburger icon (&#9776;) in header
- Mobile menu slides in via JS `style.transform = "translateX(-0%)"` — no CSS animation, abrupt

### 3.4 Home Page
- Hero: `#img_banner_div` — full-width image (`toronto_skyline.jpg`) at `height: 75vh`, text overlay bottom-right, animated `fade_in` (slides in from right, 0.9s)
- Three-column card grid: `display: flex; justify-content: space-around`, each card `width: 25%`. Cards contain h2 + image + paragraph.
- Between hero and cards: `.h_and_p` section centered at `width: 70%; margin: 15vh 15%` — large vertical margins

### 3.5 Services Page
- Three `.h_p_img` alternating image-left/image-right rows
- `display: flex; justify-content: space-around; align-items: center`
- Text div `width: 50%`, image span `width: 30%`
- Images are clickable lightbox triggers (`.modal_thumbnail_notext`)
- Closes with `<h2>...And much, much more!</h2>` — vague, no CTA

### 3.6 About Page
- Single `.h_and_p` block: `width: 70%; margin: 15vh 15%`
- Five wall-of-text paragraphs with `&nbsp;` indents. No subheadings, no visuals, no images at all.

### 3.7 FAQ Page
- Bare alternating `<p class="faq_q">` / `<p class="faq_a">` pairs
- `.faq_q`: `margin: 15vh 15% 0px` — enormous top margin between each Q
- `.faq_a`: `margin: 15px 15%`
- No accordion, no expand/collapse, no visual treatment to distinguish Q from A except color (slateblue vs default)
- 4 questions total

### 3.8 Contact Page
- Left float: phone + email + Google Reviews link
- Right float: address
- Full-width Google Maps embed (`height: 80vh`)
- Email is Cloudflare-obfuscated (`data-cfemail` attribute)
- No contact form exists on the current site

### 3.9 Footer
- Two floated children: logo+tagline (left 70%) and contact info (right)
- Footer is always duplicating the contact info already shown on header

---

## 4. Interactive / JS Behavior

| Feature | Implementation |
|---|---|
| Transitions suppressed on load | `.preload *` disables all transitions; removed by `window_load()` on `onload` |
| Mobile nav | JS toggle `translateX` — no animation, no overlay |
| Image lightbox / modal | Custom JS modal on click of `.modal_thumbnail_notext` and `.modal_thumbnail` spans |
| Google Maps | Loaded via `googleapis.com/maps/api/js` with hardcoded API key in HTML |
| Smooth transitions | `transition: all 0.5s` or `0.7s` on hover states for nav, logo, images |

---

## 5. What Looks Dated / Dull — Specific Issues

### Color
1. **Washed-out cyan everywhere.** `lightcyan` body background (`#E0FFFF`) reads as "hospital waiting room." Provides zero visual impact or brand authority.
2. **Monochromatic blue-teal-only palette.** No warm colors, no contrast hierarchy, no hero accent color. Everything blends into itself.
3. **Named CSS colors only.** Using `cadetblue`, `darkcyan`, `lightcyan`, `slateblue`, `darkslateblue` — the browser defaults — signals zero intentional brand color work.
4. **Semi-transparent teal text overlays on photos** (`rgba(0, 190, 190, 0.6)`) wash out the hero photography and look dated.

### Typography
5. **Arial only.** No personality. Arial is the "invisible" fallback font — fine for UI chrome but communicates nothing for a brand.
6. **No typographic scale.** Headings are bare HTML h1–h5 with default browser sizing. No design intent visible.
7. **`&nbsp;` paragraph indents.** A mid-1990s technique — signals the site was written by someone who learned HTML in the early web era.

### Layout
8. **`float`-based layout in 2024+.** `float: left/right` for footer columns and nav items — pre-Flexbox/Grid pattern.
9. **Enormous margins via `margin: 15vh 15%`.** The FAQ page has `15vh` top margin between each question, creating massive blank white-cyan dead space.
10. **Footer positioned off-screen** (`position: absolute; bottom: 0; transform: translateY(100%)`). On longer pages this means the footer is invisible, requiring scroll beyond the `<main>` content. On short pages it overlaps. Broken pattern.
11. **About page: no imagery, pure text wall.** Five dense paragraphs, no visual relief, no hierarchy. Nothing to anchor the eye.
12. **Services page ends with "...And much, much more!"** — a weak, vague close with no CTA.
13. **No contact form.** The Contact page has no form — just text info and a giant map. Friction for converting visitors.
14. **Hero text overlay positioned `bottom: 20px; right: 20px`** — bottom-right is the weakest position for primary messaging. Conventional design places hero messaging center or center-left.
15. **Mobile nav has no animation, no overlay.** The menu slides in instantly with no fade, no backdrop dimming, no close gesture support.

### Content / Hierarchy
16. **"45 years" repeated six times across the site.** Over-reliance on this single credential.
17. **No clear value hierarchy.** Every heading carries equal visual weight. The eye has no path to follow.
18. **No Enercare mention anywhere.** The client's priority partnership has zero presence on the current site.
19. **No differentiation of technician plumbers vs. standard plumbers.** All services are presented generically.
20. **No booking flow.** No form, no CTA beyond a phone number.

---

## 6. Information Hierarchy (Current State)

```
[Header: logo | tagline | phone]
[Nav: 5 equal-weight horizontal tabs]
  Home:
    [Hero 75vh image — toronto_skyline.jpg — text overlay BR]
    [Section: "Serving GTA with honesty" — centered 70%]
    [3-col: Masters Licenced / Services not Sales / Experienced]
  About:
    [Wall of text — 5 paragraphs, no images]
  Services:
    [Alternating text/image rows — 3 services]
    ["...And much, much more!"]
  FAQ:
    [4 Q&A pairs — massive vertical spacing]
  Contact:
    [Phone + Email + Address — floated]
    [Google Maps 80vh]
[Footer: logo + tagline | contact info repeated]
```

All five pages are treated with equal visual weight. Home does not prioritize key trust signals above the fold. There is no hero CTA funnel toward a booking/contact action.

---

## 7. Assets on Live Site

| File | Path | Used On |
|---|---|---|
| Logo | `images/drain_man_logo.png` | All pages (header + footer) |
| Toronto skyline | `images/toronto_skyline.jpg` | Home hero banner |
| Plumbing tools | `images/plumbing_tools.jpg` | Home 3-col card |
| Pipe wrenches | `images/pipe_wrenches.jpg` | Home 3-col card |
| Toronto fountain | `images/toronto_fountain.jpg` | Home 3-col card |
| Floor drain | `images/floor_drain.jpg` | Services — Drain Services |
| Flood prevention | `images/flood_prevention.jpg` | Services — Flood Prevention |
| Power flush (before/after) | `images/powerflush.png` | Services — Power Flushing |
| Favicon | `favicon.ico` | All pages |
| Stylesheet | `css/drain_man_stylesheet.css?v=0.0.1` | All pages |
| JS | `javascript/script_main.js` | All pages |
| Google Maps API | `maps.googleapis.com/maps/api/js` (key in HTML) | Contact page only |

---

## 8. What to KEEP in the Rebuild

| Element | Rationale |
|---|---|
| 5-page route structure (index, about, services, faq, contact) | Client requirement — preserve all pages |
| Phone number: (416) 699-1370 | Core contact info — verified live |
| Address: 440 Brimley Rd, Unit #11, Scarborough, ON M1J 1A1 | Core contact info |
| "Family owned and operated" tagline | Key trust signal — client values this |
| "We aim to provide services, not sales" value statement | Differentiator — keep verbatim |
| "We will never mislead customers to obtain their business" | Core honesty positioning |
| No deposits policy | Trust signal |
| Referral-driven pricing explanation (FAQ Q1) | Trust signal |
| All license numbers (P19120, B18804) | Credibility — verified live |
| Service definitions (Drain Services, Flood Prevention, Power Flushing) | Real content, keep all |
| Service detail text (sump pumps, backwater valves, sewer video, etc.) | Verified live — keep |
| Google Reviews link | Social proof — keep |
| 3-col service preview cards on home (concept) | Good structural idea — modernize execution |
| Alternating image/text layout on services (concept) | Readable pattern — modernize |
| Mobile hamburger nav (concept) | Keep — add animation/overlay |
| Image lightbox (concept) | Keep if images are prominent enough to merit it |
| All 8 existing images | Real photography — keep and reuse |
| `new Date().getFullYear()` for copyright | Client requirement — implement |

---

## 9. What to OVERHAUL

| Element | Current Problem | Target State |
|---|---|---|
| Color palette | `lightcyan` + named CSS colors, washed out mono-teal | Bold, intentional hex palette — deep navy/charcoal base + vivid primary accent (e.g., electric blue, signal red, or construction orange) + white — "Superman effect" |
| Typography | Arial system font only | 1–2 Google Fonts: strong sans-serif display (e.g., Barlow Condensed, Oswald, or Montserrat) for headings; clean readable sans for body |
| Font sizes & scale | Bare browser defaults | Explicit typographic scale (e.g., fluid `clamp()` or fixed rem ladder) |
| Body background | `lightcyan` (`#E0FFFF`) | White or very light neutral — let photography and accent color carry the visual weight |
| Hero section | `bottom: 20px; right: 20px` text; 60% opacity teal wash overlay | Full-bleed hero, centered/left messaging, high-contrast text, strong CTA button; Enercare logo prominent |
| Header layout | Logo + plain text tagline | Logo + concise tagline chip + phone number + prominent CTA button |
| Navigation | 5 equal-weight tabs, cadetblue | 4-tab nav (Home / Services / About / Contact); FAQ demoted to footer link; clean bold styling with clear active state |
| Footer | Absolute-positioned off-screen; repeats header info | Sticky/normal-flow footer with copyright year computed via JS, clean columns |
| About page | 5-paragraph text wall, no images | 2–3 short punchy paragraphs; pull quote or callout for family story; Bill's England origin / "Bill the Drain Man" nickname; second-generation callout; possibly a team photo placeholder |
| FAQ page | Giant vertical spacing, flat Q&A pairs | Accordion or simple card list; moved to footer nav; lighter visual treatment |
| Services page | Vague close ("...And much, much more!") | Concrete CTA ("Call us or book online"); add everyday service items (blocked toilet, blocked sink, repiping); differentiate Technician vs Standard plumber |
| Contact page | No form, giant map only | Booking/contact request form (webhook-to-email); phone, email, address, Enercare website link |
| Mobile nav | No animation, no overlay | Slide-in with backdrop dimming and close gesture |
| `&nbsp;` indents | 1990s technique | Remove; use CSS `text-indent` or no indent with proper paragraph spacing |
| `float`-based layout | Pre-CSS-Grid | Replace with CSS Grid / Flexbox throughout |
| Footer positioning | `position: absolute; transform: translateY(100%)` | Normal document flow footer |
| Enercare | Zero presence | Front and center — logo + booking link prominent on Home and Contact pages |
| Google Maps API key | Exposed in plain HTML | Move to environment variable / server-side embed or use embed URL instead of JS API |

---

## 10. "Superman Effect" — Concrete Design Direction

The client wants the site to feel confident, heroic, and vibrant — not dull or templated. Based on the audit, the gap between current and target is substantial. Key moves to achieve this:

1. **Kill the cyan background.** Replace with white or `#F5F5F5` page background.
2. **Pick one vivid hero accent color** (not teal). The drain/plumbing trade often uses deep navy + signal orange or electric blue — these read as expert and energetic.
3. **Use a strong condensed display font** for headlines. Barlow Condensed Bold or Oswald at large sizes immediately reads as confident and modern.
4. **Full-bleed hero with a strong, high-contrast headline** centered or left-aligned — not bottom-right corner.
5. **Enercare logo must be visible above the fold on the home page** — larger than the company logo if necessary per client direction.
6. **Service cards with icons or photos** — not just three floating image+text blocks. Consider service "pills" or icon cards for the everyday items (blocked toilet, blocked sink, repiping).
7. **Color hierarchy:** Accent color for primary CTAs only. Everything else: black/white/gray. This makes the CTAs pop.
8. **Bold phone number in the header** as a primary CTA — not a secondary link in the corner.
9. **Booking form** replaces "call us" as the primary conversion action — form submission goes to webhook → email.
10. **Trust signals** (licenses, family, 50+ years, no deposits) concentrated in a strip or sidebar — scannable, not buried in paragraphs.

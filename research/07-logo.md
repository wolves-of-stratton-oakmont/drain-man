# 07 — Logo & Brand Assets

Agent 7 assignment: fetch, verify, and document all brand/logo assets from the live site (drainmaninc.com).

---

## Downloaded Files

All files saved to: `/Users/adham/Developer/drain-man/research/assets/brand/`

| File | URL Source | Size | Format | Verified |
|------|-----------|------|--------|---------|
| `drain_man_logo.png` | https://drainmaninc.com/images/drain_man_logo.png | 22,396 bytes | PNG RGBA | YES |
| `favicon.ico` | https://drainmaninc.com/favicon.ico | 109,407 bytes | MS Windows ICO (6 icons) | YES |
| `favicon_preview.png` | Converted from favicon.ico via `sips` | 15,544 bytes | PNG gray+alpha | YES |

---

## 1. Primary Logo: `drain_man_logo.png`

**Absolute path:** `/Users/adham/Developer/drain-man/research/assets/brand/drain_man_logo.png`

### Technical Specifications

| Property | Value |
|----------|-------|
| Pixel Width | 361 px |
| Pixel Height | 136 px |
| Aspect Ratio | ~2.65:1 (wide landscape / horizontal wordmark) |
| Color Mode | RGBA (8-bit per channel, 4 channels) |
| Has Alpha | Yes (transparent background) |
| DPI | 72 dpi (web resolution) |
| Format | PNG, non-interlaced |
| Color Profile | GIMP built-in sRGB |
| Created with | GIMP 2.10.10 |
| Creation Date | 2019-04-23 16:20:32 |
| File size | 22,396 bytes (~21.9 KB) |

### Visual Description (observed from rendered image)

The logo is a **pure wordmark** — no mascot, no icon/symbol, no tagline embedded. It reads:

> **DRAIN MAN**

in two words on a single baseline, rendered in large, bold, blocky all-caps serif/slab lettering.

**Typography style:**
- All-caps, very bold/heavy weight
- Wide letter-spacing
- Appears to be a custom or heavily stylized display face — thick, chunky letterforms with slight inward angles on some strokes

**Color / Finish:**
- The letterforms use a **metallic silver / brushed chrome gradient effect**
- The gradient runs roughly top-to-bottom, lighter (near-white) at the top of each letter transitioning to a medium gray at the bottom, creating a 3D embossed / beveled chrome appearance
- There is a soft white **glow / halo** radiating outward from the letters — a subtle luminous bloom effect
- **Background is fully transparent** (alpha channel): the logo floats on whatever page background is behind it

**Colors extracted (approximate):**
- Highlight (top of letters): near-white (#F0F0F0 – #FFFFFF range)
- Mid-tone (body of letters): medium silver-gray (#A8A8A8 – #C0C0C0 range)
- Shadow/depth (bottom of letters): darker gray (#808080 – #909090 range)
- Outer glow: semi-transparent white diffusion

**The logo does NOT include:**
- "Inc" or "Inc." in the wordmark itself
- A tagline
- Any icon, pipe, drain, or mascot graphic
- Color other than chrome/silver metallic tones

**On-page usage context:** The logo appears with a subtle `border-radius: 10px 3px 10px 3px` and a `box-shadow: 3px 3px 20px darkcyan` hover effect applied in CSS, meaning it visually picks up the site's teal/darkcyan accent color when hovered. Its transparent background allows the lightcyan page background to show through.

---

## 2. Favicon: `favicon.ico`

**Absolute path:** `/Users/adham/Developer/drain-man/research/assets/brand/favicon.ico`

### Technical Specifications

| Property | Value |
|----------|-------|
| Format | MS Windows ICO resource |
| Icon frames | 6 icons embedded |
| Largest frame | 256 x 256 px (PNG-compressed within ICO) |
| Color Mode | 8-bit gray + alpha |
| Color Space | Grayscale |
| File size | 109,407 bytes (~107 KB) |

### Visual Description

Converted PNG preview (`favicon_preview.png`) shows the same **"DRAIN MAN"** wordmark treatment as the main logo, rendered in grayscale (no color). The same chunky all-caps letterforms and metallic/embossed styling are visible. The background is transparent.

The favicon essentially uses the same wordmark artwork as the primary logo, converted/exported in grayscale for the ICO format across multiple sizes (standard browser favicon sizes would be 16x16, 32x32, 48x48, 64x64, 128x128, 256x256 — all 6 embedded frames).

---

## 3. No Additional Variants Found

Searched (all returned 404/empty):
- `images/drain_man_logo_white.png`
- `images/drain_man_logo_dark.png`
- `images/logo.png`
- `images/drain_man_logo@2x.png`
- `images/drainman_logo.png`
- `apple-touch-icon.png`
- `apple-touch-icon-precomposed.png`

**Conclusion:** There is only ONE logo file in use across the entire site. No Retina/2x variant, no dark/light mode variant, no icon-only variant, no apple-touch-icon.

---

## 4. Where the Logo Appears (All 5 Pages)

Every page uses `drain_man_logo.png` in exactly two locations:

1. **Header** — inside `<header>`, linked to `index.html`, as the primary clickable brand mark:
   ```html
   <a href="index.html">
     <img src="images/drain_man_logo.png" alt="The Drain Man Inc | Toronto plumbers: logo"/>
   </a>
   ```

2. **Footer** — inside `#footer_logo_div`, as a brand anchor at the bottom of each page:
   ```html
   <img src="images/drain_man_logo.png" alt="The Drain Man Inc | Toronto plumbers: logo"/>
   ```

The alt text on all instances is: `"The Drain Man Inc | Toronto plumbers: logo"`

---

## 5. Brand Color Palette (from CSS `drain_man_stylesheet.css`)

The logo's silver/chrome tones sit on a site using these brand colors:

| Color | CSS Name / Value | Usage |
|-------|-----------------|-------|
| `lightcyan` | #E0FFFF | Page background, nav borders |
| `darkcyan` | #008B8B | Nav hover, shadows, accents, footer gradient |
| `cadetblue` | #5F9EA0 | Nav bar background |
| `darkslateblue` | #483D8B | Body text, some text-shadow |
| `slateblue` | #6A5ACD | Header links, FAQ questions |
| `cyan` | #00FFFF | HR color, glow effects |
| `rgb(0, 190, 190)` | teal-cyan | CTA buttons (banner) |
| `#009090` | dark teal | CTA button hover |

**Overall palette character:** Cool-toned teal/cyan/blue family. The chrome silver of the logo wordmark complements this palette — silver reads as neutral and professional against the cyan/teal background.

---

## 6. Guidance for New "Drainman INC" Wordmark

Based on the existing brand:

- **Text to render:** "Drainman INC" (as specified by client — new wordmark must read this exact string, space-separated or as one word per client direction: "Drainman INC")
- **Preserve:** The bold, confidence-forward, all-caps (or mixed-case per new direction) display character; the metallic/chrome dimensional feel if keeping legacy aesthetic, OR update to a modern flat/bold treatment for the "Superman effect" direction
- **The original logo has NO icon** — a new logo could remain a pure wordmark, or could incorporate a drain/pipe/shield motif to reinforce the "heroic drain specialist" positioning
- **Background:** The logo should ideally remain on a transparent background to work on varied backgrounds (the new site is to be colorful/vibrant, so the logo needs to work on multiple background colors)
- **Recommended new treatment:** Given the "modern, vibrant, COLORFUL Superman effect" brief, the new wordmark could use a bold sans-serif (e.g., Impact-style or custom slab) with a vivid color — deep blue or teal — and either a gradient or a flat bold style, dropping the dated chrome/embossed effect of the 2019 original
- **Minimum viable:** At minimum, the existing `drain_man_logo.png` can be used temporarily; the new wordmark replaces it with "Drainman INC" text

---

## 7. Summary Table

| Asset | Path | Dimensions | Format | Background | Notes |
|-------|------|-----------|--------|-----------|-------|
| Primary logo | `/research/assets/brand/drain_man_logo.png` | 361 x 136 px | PNG RGBA | Transparent | Chrome metallic wordmark "DRAIN MAN" |
| Favicon | `/research/assets/brand/favicon.ico` | 256x256 (largest frame, 6 total) | ICO (PNG-compressed) | Transparent | Grayscale version of same wordmark |
| Favicon PNG preview | `/research/assets/brand/favicon_preview.png` | 256 x 256 px | PNG gray+alpha | Transparent | Converted from ICO for visual reference |

**No apple-touch-icon, no manifest.json, no SVG version, no @2x retina variant exists on the live site.**

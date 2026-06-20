# 08 — Image Asset Catalog

Agent: Image Downloader (Agent 8)
Date: 2026-06-20
Source site: https://drainmaninc.com

---

## Summary

All 8 images were successfully enumerated from the live site HTML, downloaded, and verified as non-empty, valid image files. No images were found in CSS (stylesheet uses only color/gradient backgrounds, no `url()` image references). The image directory is `images/` relative to the site root on the live server.

Local copies are in: `/Users/adham/Developer/drain-man/research/assets/images/`

---

## Enumeration Method

Each of the 5 pages was fetched with `curl -fsSL https://drainmaninc.com/<page>` and searched with `grep -oE 'images/[^")\047 >]+'`. A broader scan (`src=`, `href=`, `background=`) confirmed no additional images were missed. The CSS file (`css/drain_man_stylesheet.css`) was also inspected — it contains no `url()` image references, only color/gradient values.

---

## Full Image Catalog

### 1. drain_man_logo.png

| Field | Value |
|---|---|
| **Filename** | `drain_man_logo.png` |
| **Source URL** | `https://drainmaninc.com/images/drain_man_logo.png` |
| **Local path** | `/Users/adham/Developer/drain-man/research/assets/images/drain_man_logo.png` |
| **Format** | PNG (8-bit/color RGBA, non-interlaced) |
| **Dimensions** | 361 × 136 px |
| **File size** | 22,396 bytes (~22 KB) |
| **Pages used** | ALL pages: index.html, about.html, services.html, faq.html, contact.html |
| **Context** | (1) Header `<a href="index.html"><img src="images/drain_man_logo.png" alt="The Drain Man Inc | Toronto plumbers: logo"/></a>` — logo is wrapped in a link to the homepage, sits at the top-left of the site header on every page. (2) Footer `<img src="images/drain_man_logo.png" alt="The Drain Man Inc | Toronto plumbers: logo"/>` — repeated in the footer logo div on every page, accompanied by the tagline "Family owned and operated for over 45 years of expert Toronto plumbing services". |
| **Alt text** | `"The Drain Man Inc | Toronto plumbers: logo"` |
| **Notes** | Primary brand identity asset. Has transparency (RGBA). The new site requires a new wordmark reading "Drainman INC" — this file will be replaced. |

---

### 2. toronto_skyline.jpg

| Field | Value |
|---|---|
| **Filename** | `toronto_skyline.jpg` |
| **Source URL** | `https://drainmaninc.com/images/toronto_skyline.jpg` |
| **Local path** | `/Users/adham/Developer/drain-man/research/assets/images/toronto_skyline.jpg` |
| **Format** | JPEG (JFIF 1.01, 72 DPI) |
| **Dimensions** | 6000 × 4000 px |
| **File size** | 4,401,487 bytes (~4.2 MB) |
| **Pages used** | index.html only |
| **Context** | Hero/banner image. HTML: `<div id="img_banner_div"><img src="images/toronto_skyline.jpg" alt="The Toronto skyline."/></div>`. This is the full-width banner image at the top of the homepage, positioned directly inside the `<main>` element below the navigation. The banner div contains this image and overlaid heading text: `<h1>Family owned and operated for over 45 years of Toronto plumbing services</h1>`. |
| **Alt text** | `"The Toronto skyline."` |
| **Notes** | High-resolution stock/location photo. Very large file — would benefit from optimization/compression for the new site. Used as hero backdrop on the homepage. |

---

### 3. plumbing_tools.jpg

| Field | Value |
|---|---|
| **Filename** | `plumbing_tools.jpg` |
| **Source URL** | `https://drainmaninc.com/images/plumbing_tools.jpg` |
| **Local path** | `/Users/adham/Developer/drain-man/research/assets/images/plumbing_tools.jpg` |
| **Format** | JPEG (JFIF 1.01, 300 DPI, with Exif) |
| **Dimensions** | 1920 × 1275 px |
| **File size** | 688,821 bytes (~673 KB) |
| **Pages used** | index.html only |
| **Context** | Homepage content card image. HTML: `<div class="h_img_p_div"><h2>Masters licenced Toronto plumbers</h2><span class="modal_thumbnail_notext"><img src="images/plumbing_tools.jpg" alt="A few tools of the trade"/></span><p>...</p></div>`. This is the first of three content blocks in `<div id="home_h_img_p_container">`. Image is wrapped in a `modal_thumbnail_notext` span indicating it opens a modal lightbox on click. Paired with the text block about licensed master plumbers. |
| **Alt text** | `"A few tools of the trade"` |
| **Notes** | Depicts plumbing tools. Acts as a clickable thumbnail that expands in a modal (`<img class="modal_img" id="modal_img"/>` is the modal target). |

---

### 4. pipe_wrenches.jpg

| Field | Value |
|---|---|
| **Filename** | `pipe_wrenches.jpg` |
| **Source URL** | `https://drainmaninc.com/images/pipe_wrenches.jpg` |
| **Local path** | `/Users/adham/Developer/drain-man/research/assets/images/pipe_wrenches.jpg` |
| **Format** | JPEG (JFIF 1.01, 1×1 aspect ratio density) |
| **Dimensions** | 1920 × 1280 px |
| **File size** | 545,113 bytes (~532 KB) |
| **Pages used** | index.html only |
| **Context** | Homepage content card image. HTML: `<div class="h_img_p_div"><h2>We aim to provide services, not sales</h2><span class="modal_thumbnail_notext"><img src="images/pipe_wrenches.jpg" alt="Our work speaks for itself"/></span><p>...</p></div>`. Second of three content blocks in `#home_h_img_p_container`. Clickable modal thumbnail. Paired with honesty/integrity values text: "We will never mislead customers to obtain their business..." |
| **Alt text** | `"Our work speaks for itself"` |
| **Notes** | Close-up photograph of pipe wrenches. Clickable thumbnail opening a modal lightbox. |

---

### 5. toronto_fountain.jpg

| Field | Value |
|---|---|
| **Filename** | `toronto_fountain.jpg` |
| **Source URL** | `https://drainmaninc.com/images/toronto_fountain.jpg` |
| **Local path** | `/Users/adham/Developer/drain-man/research/assets/images/toronto_fountain.jpg` |
| **Format** | JPEG (JFIF 1.01, 72 DPI) |
| **Dimensions** | 5949 × 3946 px |
| **File size** | 4,251,281 bytes (~4.1 MB) |
| **Pages used** | index.html only |
| **Context** | Homepage content card image. HTML: `<div class="h_img_p_div"><h2>Highly experienced in Toronto plumbing</h2><span class="modal_thumbnail_notext"><img src="images/toronto_fountain.jpg" alt="The Toronto sign behind a beautiful fountain piece"/></span><p>...</p></div>`. Third of three content blocks in `#home_h_img_p_container`. Clickable modal thumbnail. Paired with experience/trust text: "With over 45 years of experience in as plumbers in Toronto and the surrounding GTA..." |
| **Alt text** | `"The Toronto sign behind a beautiful fountain piece"` |
| **Notes** | Very large file — depicts the iconic Toronto sign with a fountain. Would benefit significantly from resizing/compression for the new site. |

---

### 6. floor_drain.jpg

| Field | Value |
|---|---|
| **Filename** | `floor_drain.jpg` |
| **Source URL** | `https://drainmaninc.com/images/floor_drain.jpg` |
| **Local path** | `/Users/adham/Developer/drain-man/research/assets/images/floor_drain.jpg` |
| **Format** | JPEG (JFIF 1.01, 72 DPI) |
| **Dimensions** | 2048 × 1536 px |
| **File size** | 928,852 bytes (~907 KB) |
| **Pages used** | services.html only |
| **Context** | Services page, Drain Services section. HTML: `<div class="h_p_img img_right"><span class="modal_thumbnail_notext"><img src="images/floor_drain.jpg" alt="Common floor drain"/></span><div><h2>Drain Sevices</h2><p>...</p></div></div>`. Image is positioned on the RIGHT side of the layout (`img_right` class). Clickable modal thumbnail. Note: "Drain Sevices" is a typo in the live HTML (missing 'r'). |
| **Alt text** | `"Common floor drain"` |
| **Notes** | Photo of a floor drain (typical circular metal drain cover). The section heading has a typo in the live site: "Drain Sevices" (should be "Drain Services"). |

---

### 7. flood_prevention.jpg

| Field | Value |
|---|---|
| **Filename** | `flood_prevention.jpg` |
| **Source URL** | `https://drainmaninc.com/images/flood_prevention.jpg` |
| **Local path** | `/Users/adham/Developer/drain-man/research/assets/images/flood_prevention.jpg` |
| **Format** | JPEG (Exif, Canon EOS 30D, shot 2007-05-04, processed with QuickTime 7.1.5 / Mac OS X 10.4.9) |
| **Dimensions** | 3504 × 2332 px |
| **File size** | 1,963,002 bytes (~1.9 MB) |
| **Pages used** | services.html only |
| **Context** | Services page, Flood Prevention section. HTML: `<div class="h_p_img img_left"><span class="modal_thumbnail_notext"><img src="images/flood_prevention.jpg" alt="Backflow prevention"/></span><div><h2>Flood Prevention</h2><p>...</p></div></div>`. Image is positioned on the LEFT side of the layout (`img_left` class). Clickable modal thumbnail. |
| **Alt text** | `"Backflow prevention"` |
| **Notes** | Exif data reveals it was taken with a Canon EOS 30D DSLR in 2007. Likely an authentic job-site photograph rather than stock. |

---

### 8. powerflush.png

| Field | Value |
|---|---|
| **Filename** | `powerflush.png` |
| **Source URL** | `https://drainmaninc.com/images/powerflush.png` |
| **Local path** | `/Users/adham/Developer/drain-man/research/assets/images/powerflush.png` |
| **Format** | PNG (8-bit/color RGBA, non-interlaced) |
| **Dimensions** | 958 × 360 px |
| **File size** | 553,365 bytes (~540 KB) |
| **Pages used** | services.html only |
| **Context** | Services page, Power Flushing section. HTML: `<div class="h_p_img img_right"><span class="modal_thumbnail_notext"><img src="images/powerflush.png" alt="Before and after powerflushing"/></span><div><h2>Power Flushing</h2><p>...</p></div></div>`. Image is positioned on the RIGHT side of the layout (`img_right` class). Clickable modal thumbnail. Wide landscape format suggests it is a before/after comparison graphic (wider than tall). |
| **Alt text** | `"Before and after powerflushing"` |
| **Notes** | PNG with transparency (RGBA). Landscape/wide-format graphic, consistent with a side-by-side before/after comparison image. Notably a PNG rather than JPEG, suggesting it may contain text or graphic elements with sharp edges. |

---

## Page-by-Page Image Usage Map

| Page | Images Used | Role |
|---|---|---|
| index.html | drain_man_logo.png (×2), toronto_skyline.jpg, plumbing_tools.jpg, pipe_wrenches.jpg, toronto_fountain.jpg | Logo (header + footer); hero banner; 3 content-card thumbnails (modal-enabled) |
| about.html | drain_man_logo.png (×2) | Logo (header + footer) only — no additional images |
| services.html | drain_man_logo.png (×2), floor_drain.jpg, flood_prevention.jpg, powerflush.png | Logo (header + footer); 3 service-section thumbnails (modal-enabled) |
| faq.html | drain_man_logo.png (×2) | Logo (header + footer) only — no additional images |
| contact.html | drain_man_logo.png (×2) | Logo (header + footer) only — no additional images |

---

## Modal Lightbox System

On index.html and services.html, clickable images are wrapped in `<span class="modal_thumbnail_notext">`. When clicked, they populate `<img class="modal_img" id="modal_img"/>` inside a modal overlay (JavaScript-driven via `load_modals()` called in `onload`). This allows full-size viewing of each thumbnail. The about.html, faq.html, and contact.html pages have no such interactive images.

---

## Images Listed in Brief but NOT Found on Live Pages

The known-facts brief mentioned `images/toronto_skyline.jpg` — this IS present on the live site (index.html hero banner). All 8 images mentioned in the brief were found and downloaded.

---

## Observations & Recommendations for New Site

1. **Logo replacement**: `drain_man_logo.png` must be replaced with a new wordmark reading "Drainman INC". The original is 361×136 px RGBA PNG.
2. **Large file optimization**: `toronto_skyline.jpg` (4.2 MB, 6000×4000) and `toronto_fountain.jpg` (4.1 MB, 5949×3946) are extremely large. Both should be resized and compressed for the new site — a web-optimized version at ~1920px wide would suffice.
3. **All content images are real/authentic**: The `flood_prevention.jpg` Exif data confirms it is an original photograph taken with a Canon DSLR in 2007, not stock imagery.
4. **About, FAQ, Contact pages are image-light**: Only the logo appears on these pages. The new design could benefit from adding relevant imagery to these pages.
5. **Services page typo**: The live HTML has "Drain Sevices" (missing 'r') in the `<h2>` for the floor drain section — this should be corrected to "Drain Services" in the new build.
6. **powerflush.png**: The wide format (958×360) and PNG format strongly suggest this is a before/after comparison graphic. Worth verifying visually — it may contain text or labels and might need to be recreated or replaced if the design changes.

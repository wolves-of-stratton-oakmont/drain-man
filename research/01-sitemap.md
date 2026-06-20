# Site Map — The Drain Man Inc (drainmaninc.com)
## Research Agent 01 — Full Site Structure

Live base URL: `https://drainmaninc.com`
Date crawled: 2026-06-20

---

## 1. Complete Page Inventory

| # | Route (filename) | Full URL | HTTP Status | Notes |
|---|-----------------|----------|-------------|-------|
| 1 | `index.html`   | https://drainmaninc.com/index.html | 200 | Home page |
| 2 | `about.html`   | https://drainmaninc.com/about.html | 200 | About Us |
| 3 | `services.html`| https://drainmaninc.com/services.html | 200 | Services |
| 4 | `faq.html`     | https://drainmaninc.com/faq.html | 200 | Frequently Asked Questions |
| 5 | `contact.html` | https://drainmaninc.com/contact.html | 200 | Contact Us |

**No additional undiscovered pages were found.** The following paths returned 404: `sitemap.xml`, `privacy.html`, `terms.html`, `gallery.html`, `blog.html`, `portfolio.html`, `404.html`.

`robots.txt` exists (HTTP 200) and contains only:
```
User-agent: *
Crawl-Delay: 20
```

---

## 2. Global Navigation Menu (identical across ALL 5 pages)

Rendered as `<nav><ul>` in the page body (slides in on mobile via JS). Each active page gains `class="active"` on its `<li>`.

```
Order | Link Text   | href
------+-------------+---------------
  1   | Home        | index.html
  2   | About Us    | about.html
  3   | Services    | services.html
  4   | F.A.Q.      | faq.html
  5   | Contact Us  | contact.html
```

The nav is toggled on mobile by a hamburger icon `&#9776;` (`☰`) rendered as `<p id="mobile_menu_icon" onclick="show_mobile_menu()">`. On screens narrower than 650 px the nav is hidden by default (translated off-screen via CSS transform) and revealed by `show_mobile_menu()` in `javascript/script_main.js`.

### Header CTA (present on every page, inside `<header>`)
```html
<h3>Family owned and operated</h3>
<h4>Serving the GTA for over 45 years with honesty &amp; integrity.</h4>
<a href="contact.html"><h3>Call Today: (416) 699-1370</h3></a>
```

---

## 3. Footer Structure (identical across ALL 5 pages)

```html
<footer>
    <div id="footer_logo_div">
        <img src="images/drain_man_logo.png" alt="The Drain Man Inc | Toronto plumbers: logo"/>
        <h5>Family owned and operated for over 45 years of expert Toronto plumbing services</h5>
    </div>
    <div id="footer_contact_info_div">
        <a href="contact.html">
            <p>
                Contact Us:
                <hr/>
                440 Brimley Rd, Unit #11<br/>
                Scarborough, ON<br/>
                M1J 1A1<br/>
                (416) 699-1370
                <hr/>
            </p>
        </a>
    </div>
</footer>
```

**Footer links:**
- Logo image links to `contact.html` (wraps the logo `<img>` in an `<a>` on some pages; on index.html the logo is in the footer div without an anchor wrapping it directly, but the contact info block is an `<a href="contact.html">`)
- The contact address block is fully linked to `contact.html`

**No secondary footer nav exists** — there are no additional footer-only links (no privacy, terms, social media, or FAQ links in the footer).

---

## 4. Page-by-Page Link Inventory

### index.html
Internal hrefs: `index.html`, `about.html`, `services.html`, `faq.html`, `contact.html`
External hrefs: none
Asset srcs:
- `images/drain_man_logo.png`
- `images/toronto_skyline.jpg`
- `images/plumbing_tools.jpg`
- `images/pipe_wrenches.jpg`
- `images/toronto_fountain.jpg`
- `javascript/script_main.js`
- `css/drain_man_stylesheet.css?v=0.0.1`
- `favicon.ico`

Special: `onload="load_modals();window_load()"` — the modal lightbox JS is active on this page (clicking any of the three section images opens a lightbox modal). Images wrapped in `<span class="modal_thumbnail_notext">`.

### about.html
Internal hrefs: `index.html`, `about.html`, `services.html`, `faq.html`, `contact.html`
External hrefs: none
Asset srcs:
- `images/drain_man_logo.png`
- `javascript/script_main.js`
- `css/drain_man_stylesheet.css`
- `favicon.ico`

Special: No page-specific images beyond the logo. No modal JS on this page (`onload="window_load()"` only).

### services.html
Internal hrefs: `index.html`, `about.html`, `services.html`, `faq.html`, `contact.html`
External hrefs: none
Asset srcs:
- `images/drain_man_logo.png`
- `images/floor_drain.jpg`
- `images/flood_prevention.jpg`
- `images/powerflush.png`
- `javascript/script_main.js`
- `css/drain_man_stylesheet.css`
- `favicon.ico`

Special: `onload="load_modals();window_load()"` — modal lightbox active. Service images in `<span class="modal_thumbnail_notext">`.

### faq.html
Internal hrefs: `index.html`, `about.html`, `services.html`, `faq.html`, `contact.html`
External hrefs: none
Asset srcs:
- `images/drain_man_logo.png`
- `javascript/script_main.js`
- `css/drain_man_stylesheet.css`
- `favicon.ico`

Special: No modal JS, no page-specific images.

### contact.html
Internal hrefs: `index.html`, `about.html`, `services.html`, `faq.html`, `contact.html`, `tel:+14166991370`
Protected hrefs: `/cdn-cgi/l/email-protection` (Cloudflare email obfuscation — decoded email: `admin@drainmaninc.com`)
External hrefs:
- `https://search.google.com/local/writereview?placeid=ChIJbypPpJXO1IkRTagYYBJsvs4` (Google Reviews, opens `target="_blank"`)
Asset srcs:
- `images/drain_man_logo.png`
- `javascript/script_main.js`
- `css/drain_man_stylesheet.css`
- `favicon.ico`
- `/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js` (Cloudflare anti-spam)
- `https://maps.googleapis.com/maps/api/js?key=AIzaSyBJKvdZ6LAFYZtypT0mV1JwF8q9GtkikmY&callback=load_map` (Google Maps embed)

Special: Embeds a Google Map via `<div class="map" id="drain_man_map">`. The map is centered at lat/lng `43.730682, -79.246028` (440 Brimley Rd, Scarborough). No modal JS on this page.

---

## 5. Static Asset Inventory

### Stylesheets
| File | Path | Notes |
|------|------|-------|
| Main stylesheet | `css/drain_man_stylesheet.css` | HTTP 200. index.html references it with `?v=0.0.1` cache-buster; all other pages reference it without query string |

### JavaScript
| File | Path | Notes |
|------|------|-------|
| Main script | `javascript/script_main.js` | HTTP 200. Handles mobile menu toggle, modal lightbox (open/close), map initialization, and preload class removal on body |

### Images
| File | Used On | Alt Text |
|------|---------|----------|
| `images/drain_man_logo.png` | All pages (header + footer) | "The Drain Man Inc | Toronto plumbers: logo" |
| `images/toronto_skyline.jpg` | index.html | "The Toronto skyline." |
| `images/plumbing_tools.jpg` | index.html | "A few tools of the trade" |
| `images/pipe_wrenches.jpg` | index.html | "Our work speaks for itself" |
| `images/toronto_fountain.jpg` | index.html | "The Toronto sign behind a beautiful fountain piece" |
| `images/floor_drain.jpg` | services.html | "Common floor drain" |
| `images/flood_prevention.jpg` | services.html | "Backflow prevention" |
| `images/powerflush.png` | services.html | "Before and after powerflushing" |

### Favicon
`favicon.ico` — referenced via both `<link rel="shortcut icon">` and `<link rel="icon">` on all pages.

---

## 6. Page Connection Tree

```
drainmaninc.com/
├── index.html          (Home — active on li#1)
│   └── → contact.html  (CTA button in hero banner)
├── about.html          (About Us — active on li#2)
├── services.html       (Services — active on li#3)
├── faq.html            (FAQ — active on li#4)
└── contact.html        (Contact Us — active on li#5)
    ├── tel:+14166991370
    ├── admin@drainmaninc.com (obfuscated via Cloudflare)
    └── → https://search.google.com/local/writereview?placeid=ChIJbypPpJXO1IkRTagYYBJsvs4 (external, _blank)

Every page → every other page (via global nav)
Every page footer → contact.html (via address block link)
```

---

## 7. Shared `<head>` Structure (all pages)

```html
<title>The Drain Man Inc | Experienced Toronto plumbers providing expert plumbing &amp; drains services</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta charset="UTF-8"/>
<link rel="stylesheet" href="css/drain_man_stylesheet.css"/>
<script src="javascript/script_main.js"></script>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

Note: The `<title>` is identical across all 5 pages — there is no per-page title differentiation.

`<body>` attributes on all pages:
- `class="preload"` (removed by `window_load()` on DOMContentLoaded — likely used to suppress CSS transition flicker on initial load)
- `onscroll="hide_menu_on_scroll()"` (auto-closes mobile menu on scroll)
- `onload` varies: most pages use `window_load()` alone; index.html and services.html also call `load_modals()` for the lightbox feature

---

## 8. Observations / Flags for Rebuild

1. **No undiscovered pages** — the site is exactly 5 pages as specified.
2. **Single shared title** — the `<title>` tag is the same on every page; the rebuild should use distinct per-page `<title>` values for SEO.
3. **Typo on services.html**: The first service section heading reads `"Drain Sevices"` (missing the 'r'). Correct to `"Drain Services"` in the rebuild.
4. **Email is obfuscated** via Cloudflare: the real address is `admin@drainmaninc.com`.
5. **Google Maps API key exposed** in HTML: `AIzaSyBJKvdZ6LAFYZtypT0mV1JwF8q9GtkikmY` — note for rebuild (the client may want to move this to an env variable or restrict the key).
6. **Google Maps coordinates**: lat `43.730682`, lng `-79.246028` — confirmed correct for 440 Brimley Rd, Scarborough.
7. **No external CSS frameworks** — the site uses a single hand-written stylesheet (`drain_man_stylesheet.css`).
8. **No analytics tag** visible in the HTML (no GA, GTM, or similar).
9. **No social media links** anywhere on the site.
10. **Mobile nav breakpoint**: 650 px (hard-coded in `script_main.js`: `if (window.innerWidth < 650)`).
11. **Modal lightbox** is present on index.html and services.html — images can be clicked to enlarge. The rebuild should decide whether to keep this pattern.
12. **The FAQ page is linked in the main nav** but is not referenced from any other page content (no in-line links to it from other pages). Per client brief, it should be de-emphasized (e.g., footer-only link).
13. **robots.txt** sets `Crawl-Delay: 20` but does not disallow any paths. No `sitemap.xml` exists.

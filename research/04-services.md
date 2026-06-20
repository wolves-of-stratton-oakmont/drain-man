# Services Page — Full Extraction
**Source URL:** https://drainmaninc.com/services.html
**Extracted by:** Agent 4 (Services page)
**Date:** 2026-06-20

---

## Page Metadata

- **`<title>`:** `The Drain Man Inc | Experienced Toronto plumbers providing expert plumbing & drains services`
- **Favicon:** `favicon.ico` (both `shortcut icon` and `icon` types)
- **Stylesheet:** `css/drain_man_stylesheet.css`
- **JavaScript:** `javascript/script_main.js`
- **`<body>` attributes:**
  - `class="preload"`
  - `onscroll="hide_menu_on_scroll()"`
  - `onload="load_modals();window_load()"`

---

## Header (shared across all pages)

```html
<header>
    <a href="index.html"><img src="images/drain_man_logo.png" alt="The Drain Man Inc | Toronto plumbers: logo"/></a>
    <p id="mobile_menu_icon" onclick="show_mobile_menu()">&#9776;</p>
    <div>
        <h3>Family owned and operated</h3>
        <h4>Serving the GTA for over 45 years with honesty &amp; integrity.</h4>
        <a href="contact.html"><h3>Call Today: (416) 699-1370</h3></a>
    </div>
</header>
```

**Header text (verbatim):**
- `Family owned and operated`
- `Serving the GTA for over 45 years with honesty & integrity.`
- `Call Today: (416) 699-1370` (links to contact.html)

---

## Navigation (shared across all pages)

```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li class="active"><a href="services.html">Services</a></li>
        <li><a href="faq.html">F.A.Q.</a></li>
        <li><a href="contact.html">Contact Us</a></li>
    </ul>
</nav>
```

**Active nav item:** `Services` (class="active" on this `<li>`)

**Nav links:**
1. Home → `index.html`
2. About Us → `about.html`
3. Services → `services.html` (**active**)
4. F.A.Q. → `faq.html`
5. Contact Us → `contact.html`

---

## Main Content — Three Service Sections

### 1. Drain Services

**HTML structure:**
```html
<div class="h_p_img img_right">
    <span class="modal_thumbnail_notext"><img src="images/floor_drain.jpg" alt="Common floor drain"/></span>
    <div>
        <h2>Drain Sevices</h2>
        <p>
            For all of your drainage needs, we can clear blocked drains, install drains as well as drain cleanouts, and 
            make repairs to your drainage systems. <br/>
            We can provide sewer video recording and underground drain location and inspection services. These services 
            should especially be considered when making renovations to your home or if you're purchasing a new home, as it 
            can save you thousands of dollars and the headaches of discovering problems too late. <br/>
            We offer installation, repair, and maintenance services to the following; sewage ejectors, sump pumps, 
            backwater valves, floor drains, drain primer, catch basins, foundation drains, and more. <br/>
        </p>
    </div>
</div>
```

**Section heading (verbatim — NOTE: typo on live site):** `Drain Sevices` *(typo: "Sevices" instead of "Services")*

**Image:**
- src: `images/floor_drain.jpg`
- alt: `Common floor drain`
- HTTP status: 200
- Content-Length: 928,852 bytes (~907 KB)
- CSS class: `modal_thumbnail_notext` (clicking opens lightbox modal showing image + alt text as caption)
- Image position: `img_right` (image on right side, text on left)

**Body text (verbatim, three `<br/>`-separated paragraphs within one `<p>` tag):**

> For all of your drainage needs, we can clear blocked drains, install drains as well as drain cleanouts, and make repairs to your drainage systems.
>
> We can provide sewer video recording and underground drain location and inspection services. These services should especially be considered when making renovations to your home or if you're purchasing a new home, as it can save you thousands of dollars and the headaches of discovering problems too late.
>
> We offer installation, repair, and maintenance services to the following; sewage ejectors, sump pumps, backwater valves, floor drains, drain primer, catch basins, foundation drains, and more.

**Sub-items listed (comma-separated inline, no bullet list):**
- sewage ejectors
- sump pumps
- backwater valves
- floor drains
- drain primer
- catch basins
- foundation drains
- and more

**Separator:** `<hr/>` (full-width, 90%, glowing darkcyan box-shadow)

---

### 2. Flood Prevention

**HTML structure:**
```html
<div class="h_p_img img_left">
    <span class="modal_thumbnail_notext"><img src="images/flood_prevention.jpg" alt="Backflow prevention"/></span>
    <div>
        <h2>Flood Prevention</h2>
        <p>
            We install, repair, replace, and maintain backwater prevention systems that prevent possible backflow from 
            sewer and municipal lines from flooding your home.
        </p>
    </div>
</div>
```

**Section heading (verbatim):** `Flood Prevention`

**Image:**
- src: `images/flood_prevention.jpg`
- alt: `Backflow prevention`
- HTTP status: 200
- Content-Length: 1,963,002 bytes (~1.87 MB)
- CSS class: `modal_thumbnail_notext` (lightbox on click)
- Image position: `img_left` (image on left side, text on right)

**Body text (verbatim):**

> We install, repair, replace, and maintain backwater prevention systems that prevent possible backflow from sewer and municipal lines from flooding your home.

**Separator:** `<hr/>` (full-width, 90%, glowing darkcyan box-shadow)

---

### 3. Power Flushing

**HTML structure:**
```html
<div class="h_p_img img_right">
    <span class="modal_thumbnail_notext"><img src="images/powerflush.png" alt="Before and after powerflushing"/></span>
    <div>
        <h2>Power Flushing</h2>
        <p>
                Our power flushing services will clear your systems of grease and grime that accumulates in your pipes 
                and restricts your system's ability to function properly. Slow warming heating systems, cold spots, noisy 
                boilers, and murky or cloudy tap water are just a few side effects of allowing an excess of sludge to build 
                up in your system, and if you experience any of these or other related symptoms it is a clear indication 
                that your system is due for a power flush.
        </p>
    </div>
</div>
```

**Section heading (verbatim):** `Power Flushing`

**Image:**
- src: `images/powerflush.png`
- alt: `Before and after powerflushing`
- HTTP status: 200
- Content-Length: 553,365 bytes (~540 KB)
- CSS class: `modal_thumbnail_notext` (lightbox on click)
- Image position: `img_right` (image on right side, text on left)

**Body text (verbatim):**

> Our power flushing services will clear your systems of grease and grime that accumulates in your pipes and restricts your system's ability to function properly. Slow warming heating systems, cold spots, noisy boilers, and murky or cloudy tap water are just a few side effects of allowing an excess of sludge to build up in your system, and if you experience any of these or other related symptoms it is a clear indication that your system is due for a power flush.

**Key symptoms listed (inline in text, not bulleted):**
- Slow warming heating systems
- Cold spots
- Noisy boilers
- Murky or cloudy tap water

**Separator after Power Flushing:** `<hr class="half_width_hr"/>` (half-width: 45%, centered)

---

## "And Much More" Tagline

```html
<h2 id="services_much_more_h2">...And much, much more!</h2>
```

**Text (verbatim):** `...And much, much more!`

**CSS:** `text-align: center`

**Followed by:** `<hr class="half_width_hr"/>` (half-width separator)

---

## Lightbox Modal (JS-driven, present on services page)

```html
<div class="modal" id="modal">
    <span class="modal_close">&times;</span>
    <img class="modal_img" id="modal_img"/>
    <div class="modal_caption" id="modal_caption"></div>
</div>
```

All three service images use class `modal_thumbnail_notext`. Clicking any image:
1. Sets `modal_img.src` to the clicked image's `src`
2. Sets `modal_caption.innerHTML` to the clicked image's `alt` text
3. Displays the modal as `flex`

The `×` close button dismisses it.

---

## Footer (shared across all pages)

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

**Footer text (verbatim):**
- Logo: `images/drain_man_logo.png` (alt: `The Drain Man Inc | Toronto plumbers: logo`)
- Tagline: `Family owned and operated for over 45 years of expert Toronto plumbing services`
- Contact label: `Contact Us:`
- Address: `440 Brimley Rd, Unit #11 / Scarborough, ON / M1J 1A1`
- Phone: `(416) 699-1370`
- All wrapped in `<a href="contact.html">` (entire contact block is clickable)

**NOTE:** No dynamic copyright year — footer has NO `<script>` for `new Date().getFullYear()`. Static text only. This is to be CHANGED in the new site per client requirements.

---

## Images Summary (Services Page)

| Image file | Alt text | Position | HTTP | File size |
|---|---|---|---|---|
| `images/floor_drain.jpg` | `Common floor drain` | Section 1, right | 200 | ~907 KB |
| `images/flood_prevention.jpg` | `Backflow prevention` | Section 2, left | 200 | ~1.87 MB |
| `images/powerflush.png` | `Before and after powerflushing` | Section 3, right | 200 | ~540 KB |
| `images/drain_man_logo.png` | `The Drain Man Inc \| Toronto plumbers: logo` | Header + Footer | 200 | (see other agents) |

All image URLs confirmed live at `https://drainmaninc.com/images/<filename>`.

---

## CSS Classes Relevant to Services Layout

| Class | Description |
|---|---|
| `.h_p_img` | Flex container for image+text pairs; `justify-content: space-around; align-items: center; margin: 5%` |
| `.h_p_img div` | Text column: `width: 50%` |
| `.h_p_img span` | Image column: `width: 30%`; hover grows to `32%` |
| `.h_p_img span img` | `max-width: 70%`; hover adds `box-shadow: 0 5px 20px darkslateblue` |
| `.img_left span` | `order: 0` (image appears on left) |
| `.img_right span` | `order: 1` (image appears on right) |
| `.modal_thumbnail_notext` | Clickable span for lightbox; no caption text needed |
| `#services_much_more_h2` | `text-align: center` |
| `.half_width_hr` | `width: 45%` separator |
| `main hr` | Full-width (90%) separator with `box-shadow: 0 0 10px darkcyan` and `color: cyan` |

**Mobile breakpoints affecting services layout:**
- At ≤650px: `.h_p_img` becomes `flex-direction: column`; `.h_p_img div` becomes `width: 100%`; `.h_p_img span` becomes `width: 80%; order: 1` (images always appear below text on mobile)

---

## Color / Visual Design (from CSS)

- `body` background: `lightcyan`
- `body` text color: `darkslateblue`
- Text shadow on service text: `1px 1px 1px cyan`
- `<hr>` separators: `color: cyan`, `box-shadow: 0 0 10px darkcyan`
- Nav active state: `radial-gradient(darkcyan, cadetblue)` background
- Header/nav background: `cadetblue`
- Overall palette: cyan / darkcyan / cadetblue / slateblue / darkslateblue / lightcyan

---

## Notable Observations / Issues for Rebuild

1. **Typo on live site:** Section 1 heading reads `Drain Sevices` (missing 'r' in Services). Should be corrected to `Drain Services` in the rebuild.
2. **No CTAs within service sections** — the only CTA on the page is the header phone link `Call Today: (416) 699-1370`. No "Book Now" or "Get a Quote" buttons within the service cards themselves.
3. **No pricing information** on this page.
4. **Services are purely descriptive** — no forms, no live booking, no interactive elements beyond the image lightbox.
5. **"...And much, much more!"** tagline implies additional unlisted services — the rebuild should expand this with the everyday items (blocked toilet, blocked sink, repiping, etc.) per client requirements.
6. **Three main service categories** (Drain Services, Flood Prevention, Power Flushing) — these are the top-level groupings to preserve.
7. **Footer has no dynamic copyright year** — static. New site must use `new Date().getFullYear()` per client requirements.
8. **Power Flushing note:** This service applies to heating systems (boilers/pipes) not just drains — important distinction for the rebuild's service descriptions.

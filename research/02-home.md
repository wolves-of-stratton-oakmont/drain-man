# Home Page Research — index.html
**Source URL:** https://drainmaninc.com/index.html
**Fetched:** 2026-06-20

---

## Page-Level Meta

| Field | Value |
|-------|-------|
| `<title>` | `The Drain Man Inc \| Experienced Toronto plumbers providing expert plumbing & drains services` |
| `<meta charset>` | `UTF-8` |
| `<meta viewport>` | `width=device-width, initial-scale=1.0` |
| Favicon | `favicon.ico` |
| Stylesheet | `css/drain_man_stylesheet.css?v=0.0.1` |
| JavaScript | `javascript/script_main.js` |
| Body attrs | `class="preload"`, `onscroll="hide_menu_on_scroll()"`, `onload="load_modals();window_load()"` |

---

## Header

```html
<header>
    <a href="index.html"><img src="images/drain_man_logo.png" alt="The Drain Man Inc | Toronto plumbers: logo"/></a>
    <p id="mobile_menu_icon" onclick="show_mobile_menu()">&#9776;</p>
    <div>
        <h3>Family owned and operated</h3>
        <h4>Serving the GTA for over 45 years with honesty & integrity.</h4>
        <a href="contact.html"><h3>Call Today: (416) 699-1370</h3></a>
    </div>
</header>
```

- Logo image: `images/drain_man_logo.png`
- Mobile hamburger menu icon (&#9776;) calls `show_mobile_menu()`
- Header tagline (h3): **"Family owned and operated"**
- Header sub-tagline (h4): **"Serving the GTA for over 45 years with honesty & integrity."**
- Header CTA (h3, linked to contact.html): **"Call Today: (416) 699-1370"**

---

## Navigation

```html
<nav>
    <ul>
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="faq.html">F.A.Q.</a></li>
        <li><a href="contact.html">Contact Us</a></li>
    </ul>
</nav>
```

Nav links (in order):
1. Home → `index.html` (active)
2. About Us → `about.html`
3. Services → `services.html`
4. F.A.Q. → `faq.html`
5. Contact Us → `contact.html`

---

## Main Content

### Section 1 — Hero / Image Banner

```html
<div id="img_banner_div">
    <img src="images/toronto_skyline.jpg" alt="The Toronto skyline."/>
    <div>
        <h1>Family owned and operated for over 45 years of Toronto plumbing services</h1>
        <h3>
            Our family has been providing yours with expert service from Toronto plumbers who care, at affordable prices 
            since 1972
        </h3>
        <br/>
        <a href="contact.html">Contact Us</a>
    </div>
</div>
```

- **Hero image:** `images/toronto_skyline.jpg` (alt: "The Toronto skyline.")
- **Hero H1:** "Family owned and operated for over 45 years of Toronto plumbing services"
- **Hero H3 (sub-headline):** "Our family has been providing yours with expert service from Toronto plumbers who care, at affordable prices since 1972"
- **Hero CTA button:** "Contact Us" → `contact.html`

---

### Section 2 — Intro Paragraph

```html
<div class="h_and_p">
    <h2>Serving the GTA with honesty and integrity</h2>
    <p>
        For over 45 years, The Drain Man Inc. has been serving the GTA with honesty and integrity. A family owned and operated
        business, our goal is to run a business in the modern world on the morals that we were founded upon.
    </p>
</div>
<hr/>
```

- **H2:** "Serving the GTA with honesty and integrity"
- **Body copy (verbatim):** "For over 45 years, The Drain Man Inc. has been serving the GTA with honesty and integrity. A family owned and operated business, our goal is to run a business in the modern world on the morals that we were founded upon."

---

### Section 3 — Three-Column Feature Cards

Container ID: `home_h_img_p_container`
Each card uses class: `h_img_p_div`

#### Card 1 — Masters Licensed Toronto Plumbers

```html
<div class="h_img_p_div">
    <h2>Masters licenced Toronto plumbers</h2>
    <span class="modal_thumbnail_notext"><img src="images/plumbing_tools.jpg" alt="A few tools of the trade"/></span>
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;Our fully licensed master plumbers spend years training and working to become the foremost experts in the field 
        and to provide you with only the highest level of service.
    </p>
</div>
```

- **H2:** "Masters licenced Toronto plumbers"
- **Image:** `images/plumbing_tools.jpg` (alt: "A few tools of the trade"), wrapped in `span.modal_thumbnail_notext`
- **Body copy (verbatim):** "Our fully licensed master plumbers spend years training and working to become the foremost experts in the field and to provide you with only the highest level of service."

#### Card 2 — We Aim to Provide Services, Not Sales

```html
<div class="h_img_p_div">
    <h2>We aim to provide services, not sales</h2>
    <span class="modal_thumbnail_notext"><img src="images/pipe_wrenches.jpg" alt="Our work speaks for itself"/></span>
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;We will never mislead customers to obtain their business. Our company relies on customer and contractor 
        referrals in the GTA, therefore our honesty and integrity has to remain at the top of the trades, as well 
        as our quality of service.
    </p>
</div>
```

- **H2:** "We aim to provide services, not sales"
- **Image:** `images/pipe_wrenches.jpg` (alt: "Our work speaks for itself"), wrapped in `span.modal_thumbnail_notext`
- **Body copy (verbatim):** "We will never mislead customers to obtain their business. Our company relies on customer and contractor referrals in the GTA, therefore our honesty and integrity has to remain at the top of the trades, as well as our quality of service."

#### Card 3 — Highly Experienced in Toronto Plumbing

```html
<div class="h_img_p_div">
    <h2>Highly experienced in Toronto plumbing</h2>
    <span class="modal_thumbnail_notext"><img src="images/toronto_fountain.jpg" alt="The Toronto sign behind a beautiful fountain piece"/></span>
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;With over 45 years of experience in as plumbers in Toronto and the surrounding GTA, we've become more 
        than familiar with every aspect of Toronto plumbing. We're the experts that you can trust to help you.
    </p>
</div>
```

- **H2:** "Highly experienced in Toronto plumbing"
- **Image:** `images/toronto_fountain.jpg` (alt: "The Toronto sign behind a beautiful fountain piece"), wrapped in `span.modal_thumbnail_notext`
- **Body copy (verbatim):** "With over 45 years of experience in as plumbers in Toronto and the surrounding GTA, we've become more than familiar with every aspect of Toronto plumbing. We're the experts that you can trust to help you."

---

### Section 4 — Image Modal (Lightbox)

```html
<div class="modal" id="modal">
    <span class="modal_close">&times;</span>
    <img class="modal_img" id="modal_img"/>
    <div class="modal_caption" id="modal_caption"></div>
</div>
```

- Generic modal/lightbox initialized by `load_modals()` on body load.
- Applies to the three card images above (class `modal_thumbnail_notext`).

---

## Footer

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

- **Footer logo:** `images/drain_man_logo.png` (same as header)
- **Footer tagline (h5):** "Family owned and operated for over 45 years of expert Toronto plumbing services"
- **Footer contact block** (entire block is a link to `contact.html`):
  - Label: "Contact Us:"
  - Address: `440 Brimley Rd, Unit #11`
  - City/Province: `Scarborough, ON`
  - Postal: `M1J 1A1`
  - Phone: `(416) 699-1370`

---

## All Images on Home Page (Complete List)

| src | alt text | location on page |
|-----|----------|-----------------|
| `images/drain_man_logo.png` | "The Drain Man Inc \| Toronto plumbers: logo" | Header (logo) |
| `images/toronto_skyline.jpg` | "The Toronto skyline." | Hero banner background |
| `images/plumbing_tools.jpg` | "A few tools of the trade" | Feature card 1 |
| `images/pipe_wrenches.jpg` | "Our work speaks for itself" | Feature card 2 |
| `images/toronto_fountain.jpg` | "The Toronto sign behind a beautiful fountain piece" | Feature card 3 |
| `images/drain_man_logo.png` | "The Drain Man Inc \| Toronto plumbers: logo" | Footer (logo repeated) |

---

## All CTAs on Home Page

| Text | href | Element | Location |
|------|------|---------|----------|
| "Call Today: (416) 699-1370" | `contact.html` | `<a><h3>` | Header |
| "Contact Us" | `contact.html` | `<a>` (button style) | Hero banner |
| "Contact Us:" (full address block) | `contact.html` | `<a><p>` | Footer |

---

## Taglines / Key Phrases Observed on This Page

1. "Family owned and operated" (header h3)
2. "Serving the GTA for over 45 years with honesty & integrity." (header h4)
3. "Family owned and operated for over 45 years of Toronto plumbing services" (hero h1)
4. "Our family has been providing yours with expert service from Toronto plumbers who care, at affordable prices since 1972" (hero h3)
5. "Serving the GTA with honesty and integrity" (intro h2)
6. "We aim to provide services, not sales" (card 2 h2 — core value statement)
7. "We will never mislead customers to obtain their business." (card 2 body — verbatim)
8. "Family owned and operated for over 45 years of expert Toronto plumbing services" (footer h5)

---

## JavaScript Behaviors Noted

- `hide_menu_on_scroll()` — hides mobile nav on scroll (called via `onscroll`)
- `show_mobile_menu()` — toggles mobile hamburger menu (called on hamburger icon click)
- `load_modals()` — initializes image lightbox/modal functionality
- `window_load()` — called on `onload`; removes `preload` class from body (likely prevents flash of unstyled transitions)

---

## Structural Notes for Rebuild

- The page uses a **3-column feature card layout** below the hero — each card has: H2, image (clickable for lightbox), paragraph.
- Mobile: `<br class="only_display_mobile"/>` and `<hr class="only_display_mobile"/>` dividers between cards indicate responsive stacking with visual separators only on mobile.
- No static copyright year in the footer — just the tagline text. **New build should add dynamic `new Date().getFullYear()` copyright line per client requirements.**
- No Enercare branding present on existing home page — **new build must add Enercare prominently per client spec.**
- No booking/contact form on home page — **new build should feature a booking CTA linking to the contact/booking form per client spec.**

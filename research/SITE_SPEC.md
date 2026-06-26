# SITE_SPEC.md — The Drain Man Inc: Canonical Reference for Phase 2 Rebuild

**Synthesized by:** Agent 10 (Synthesis)
**Date:** 2026-06-20
**Live site verified at:** https://drainmaninc.com
**Source files:** research/01-sitemap.md through 09-design-audit.md + asset downloads in research/assets/

This document is the single source of truth for Phase 2 builders. All copy is quoted verbatim from the live site unless marked [NEW] or [REWRITE].

---

## SECTION 1: PAGE LIST & NAVIGATION/FOOTER STRUCTURE

### 1.1 Pages (5 routes — all must be preserved)

| # | Route | Title (live) | Purpose |
|---|-------|-------------|---------|
| 1 | `/index.html` | Home | Primary landing, hero, feature cards |
| 2 | `/about.html` | About Us | Company story, family, values |
| 3 | `/services.html` | Services | Three service categories with images |
| 4 | `/faq.html` | FAQ | Four Q&As (de-emphasized in rebuild) |
| 5 | `/contact.html` | Contact Us | Phone, email, address, map, form (new) |

No additional pages exist. `sitemap.xml`, `privacy.html`, `terms.html`, `gallery.html`, `blog.html` all return 404.

### 1.2 Navigation (global, identical across all 5 pages)

**Current live nav order:**
1. Home → `index.html`
2. About Us → `about.html`
3. Services → `services.html`
4. F.A.Q. → `faq.html`
5. Contact Us → `contact.html`

**Active item:** Each page sets `class="active"` on its own `<li>`.

**Mobile behavior:** Nav hidden off-screen at ≤650 px breakpoint; hamburger icon `&#9776;` (`id="mobile_menu_icon"`) calls `show_mobile_menu()` to slide it in.

**[REBUILD — nav priority per client]:** Primary tabs = Home, Services, Contact (+ About). FAQ demoted to footer link only.

### 1.3 Header (global — all 5 pages)

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

Key header text (verbatim):
- "Family owned and operated"
- "Serving the GTA for over 45 years with honesty & integrity."
- "Call Today: (416) 699-1370" (links to contact.html)

### 1.4 Footer (global — all 5 pages)

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

Footer tagline (verbatim): "Family owned and operated for over 45 years of expert Toronto plumbing services"

**[REBUILD]:** Footer must:
- Add `© <script>document.write(new Date().getFullYear())</script> The Drain Man Inc` dynamic copyright line
- Include FAQ as a footer-only link (not in main nav)
- Normal document flow (current site has broken absolute positioning)
- No copyright line exists on the live site — this is a new addition per client

---

## SECTION 2: PAGE-BY-PAGE CONTENT INVENTORY

### 2.1 Home Page (index.html)

**Body attributes:** `class="preload"` `onscroll="hide_menu_on_scroll()"` `onload="load_modals();window_load()"`

#### Hero / Image Banner

- **Image:** `images/toronto_skyline.jpg` (alt: "The Toronto skyline.") — full-width at `height: 75vh`
- **H1 (verbatim):** "Family owned and operated for over 45 years of Toronto plumbing services"
- **Sub-headline H3 (verbatim):** "Our family has been providing yours with expert service from Toronto plumbers who care, at affordable prices since 1972"
- **CTA button (verbatim):** "Contact Us" → `contact.html`
- **Text overlay position:** bottom-right (20px from corner) with `rgba(0, 190, 190, 0.6)` teal background

#### Intro Paragraph

- **H2 (verbatim):** "Serving the GTA with honesty and integrity"
- **Body copy (verbatim):** "For over 45 years, The Drain Man Inc. has been serving the GTA with honesty and integrity. A family owned and operated business, our goal is to run a business in the modern world on the morals that we were founded upon."

#### Three-Column Feature Cards (container: `#home_h_img_p_container`, each card: `.h_img_p_div`)

**Card 1 — Masters Licensed:**
- H2 (verbatim): "Masters licenced Toronto plumbers"
- Image: `images/plumbing_tools.jpg` (alt: "A few tools of the trade") — modal-enabled
- Body copy (verbatim): "Our fully licensed master plumbers spend years training and working to become the foremost experts in the field and to provide you with only the highest level of service."

**Card 2 — Services Not Sales:**
- H2 (verbatim): "We aim to provide services, not sales"
- Image: `images/pipe_wrenches.jpg` (alt: "Our work speaks for itself") — modal-enabled
- Body copy (verbatim): "We will never mislead customers to obtain their business. Our company relies on customer and contractor referrals in the GTA, therefore our honesty and integrity has to remain at the top of the trades, as well as our quality of service."

**Card 3 — Experienced:**
- H2 (verbatim): "Highly experienced in Toronto plumbing"
- Image: `images/toronto_fountain.jpg` (alt: "The Toronto sign behind a beautiful fountain piece") — modal-enabled
- Body copy (verbatim): "With over 45 years of experience in as plumbers in Toronto and the surrounding GTA, we've become more than familiar with every aspect of Toronto plumbing. We're the experts that you can trust to help you."

Note: "in as plumbers" is a grammatical error in the live copy — clean up in rebuild.

#### Home Page CTAs

| Text | Destination | Location |
|------|------------|---------|
| "Call Today: (416) 699-1370" | `contact.html` | Header |
| "Contact Us" | `contact.html` | Hero banner |
| "Contact Us:" (address block) | `contact.html` | Footer |

No Enercare presence. No booking form. [REBUILD: Both must be added.]

---

### 2.2 About Page (about.html)

**Body attributes:** `class="preload"` `onload="window_load()"` `onscroll="hide_menu_on_scroll()"`

**Page H1 (verbatim):** "About Us"

**Full body text — 5 paragraphs (verbatim, single `<div class="h_and_p">`):**

> For over 45 years, The Drain Man Inc. has been serving the GTA with honesty and integrity. A family owned and operated business, our goal is to run a business in the modern world on the morals that we were founded upon.

> We are truly family owned and operated. It isn't a gimmick or a sales pitch. Bill Barber is a hands-on owner that is routinely involved at excavation and waterproofing job sites. His son, John, is the office manager. His daughter, Shawna, works in the head office. His son in-law, Brian, works as one of our service men. We believe in valuable employees that see our company as a career choice, not just a stepping stone. We've proudly employed individuals at our company who have been with us for upwards of 20 years.

> We run our business with nothing to hide. As our customer, we aim to find only the best solutions to your problems and to provide them at a fair and reasonable cost. Our job as your contractor is to deliver to you the solutions that you need clearly and honestly with no hidden surprises. We tell you our rates up front, not at the front door. If you need a quote for extensive work, our staff will gladly accommodate your needs.

> We do not believe in deposits. An honest and hard working company shouldn't need your money up front before starting. The customer pays when we've delivered on the work we've promised them. We will never mislead customers to obtain their business. Our company relies on customer and contractor referrals in the GTA, therefore our honesty and integrity has to remain at the top of the trades.

> Burst pipes, blocked up drains, or wet basement walls are very stressful problems to deal with. Hiring a contractor to fix them shouldn't be just as big a problem. So give us a call, and you'll have old fashioned, hard working, honest tradesmen working to help you.

**Images:** None in main content. Only logo in header and footer.

**People named:**
| Name | Role |
|------|------|
| Bill Barber | Hands-on owner/founder; "routinely involved at excavation and waterproofing job sites" |
| John | Office manager (Bill's son) |
| Shawna | Head office (Bill's daughter) |
| Brian | Service man (Bill's son-in-law) |

**[REBUILD — NEW About story from client meeting notes]:**
Bill Barber came over from England. He started out as a plumber — it began as just a plan or idea. He realized drains were where the real, lucrative work was, so he started a drain company. Contractors around the GTA came to know him as "Bill the Drain Man." He founded the company in 1972. Today the company is run by the second generation of the family (his son John and family), carrying on the same honest, hands-on values.

Rebuild treatment: 2–3 short punchy paragraphs. Emphasize second-generation heritage. Keep warm but concise. Add pull-quote or callout. Include trust signals (licenses, no deposits) as scannable chips rather than buried paragraphs.

---

### 2.3 Services Page (services.html)

**Body attributes:** `class="preload"` `onscroll="hide_menu_on_scroll()"` `onload="load_modals();window_load()"`

Layout: Alternating image-left / image-right rows (`.h_p_img` with `.img_left` / `.img_right` classes). Images are modal-enabled (`.modal_thumbnail_notext`).

#### Service 1 — Drain Services

**Heading on live site (verbatim, TYPO):** "Drain Sevices" ← [FIX to "Drain Services"]
**Image:** `images/floor_drain.jpg` (alt: "Common floor drain") — positioned right
**Body copy (verbatim, 3 `<br/>`-separated paragraphs in one `<p>`):**

> For all of your drainage needs, we can clear blocked drains, install drains as well as drain cleanouts, and make repairs to your drainage systems.
>
> We can provide sewer video recording and underground drain location and inspection services. These services should especially be considered when making renovations to your home or if you're purchasing a new home, as it can save you thousands of dollars and the headaches of discovering problems too late.
>
> We offer installation, repair, and maintenance services to the following; sewage ejectors, sump pumps, backwater valves, floor drains, drain primer, catch basins, foundation drains, and more.

Sub-items listed (inline): sewage ejectors, sump pumps, backwater valves, floor drains, drain primer, catch basins, foundation drains, and more.

#### Service 2 — Flood Prevention

**Heading (verbatim):** "Flood Prevention"
**Image:** `images/flood_prevention.jpg` (alt: "Backflow prevention") — positioned left
**Body copy (verbatim):**

> We install, repair, replace, and maintain backwater prevention systems that prevent possible backflow from sewer and municipal lines from flooding your home.

#### Service 3 — Power Flushing

**Heading (verbatim):** "Power Flushing"
**Image:** `images/powerflush.png` (alt: "Before and after powerflushing") — positioned right. Wide landscape (958×360 px) PNG — before/after comparison graphic.
**Body copy (verbatim):**

> Our power flushing services will clear your systems of grease and grime that accumulates in your pipes and restricts your system's ability to function properly. Slow warming heating systems, cold spots, noisy boilers, and murky or cloudy tap water are just a few side effects of allowing an excess of sludge to build up in your system, and if you experience any of these or other related symptoms it is a clear indication that your system is due for a power flush.

Symptoms mentioned: Slow warming heating systems, cold spots, noisy boilers, murky or cloudy tap water.

#### Closing Tagline

**Verbatim:** "...And much, much more!"

No CTA, no everyday items listed. [REBUILD: Replace with concrete everyday items and a booking CTA.]

---

### 2.4 FAQ Page (faq.html)

**Body attributes:** `class="preload"` `onload="window_load()"` `onscroll="hide_menu_on_scroll()"`

**Page H1 (verbatim):** "Frequently Asked Questions"
**Images:** None beyond logo.

**Four Q&As — verbatim:**

**Q1:**
> Q. How do you keep the costs to your customers fair and reasonable?
>
> A. We rely on the quality of our work and satisfaction of our customers. Rather than investing large amounts of money into marketing, and passing on those costs to our customers, we depend on our customers to relay the word of our good work to their friends and family.

**Q2:**
> Q. Where do you offer your services?
>
> A. We offer our services in Toronto and the surrounding GTA including Brampton, Mississauga, Scarborough, and further.

**Q3:**
> Q. Are you fully licensed and insured?
>
> A. Yes, we're fully insured and our Master's plumbing license # is P19120. This License covers the plumbing and drain services that our business provides. Our Builders License # is B18804 and covers work involving concrete, waterproofing, basement underpinning and other construction related work.

**Q4:**
> Q. How can I find out how much it will cost for what I need?
>
> A. Just like every customer we help, every job is unique. Give us a call and we will find the right solutions to best solve your problem at an affordable cost.

CSS classes: `.faq_q` (question styling, slateblue), `.faq_a` (answer styling). No accordion, no `<dl>`. Current vertical spacing is enormous (`margin: 15vh 15% 0px` between questions).

[REBUILD: Keep FAQ page (route preserved) but demote to footer nav link only. Lighter visual treatment — accordion or simple cards. De-emphasize from main navigation.]

---

### 2.5 Contact Page (contact.html)

**Body attributes:** `class="preload"` `onload="window_load()"` `onscroll="hide_menu_on_scroll()"`

**Page H1 (verbatim):** "Contact Us"

**Phone (verbatim):** `(416) 699-1370` | href: `tel:+14166991370`
**Emoji prefix in HTML:** `&#128222;` (telephone receiver)

**Email:** `admin@drainmaninc.com` (obfuscated on live site via Cloudflare `data-cfemail`)
**Emoji prefix in HTML:** `&#128231;` (envelope)

**Address (verbatim from `<h4 id="contact_address">`):**
```
440 Brimley Rd, Unit #11
Scarborough, ON
M1J 1A1
```

**Google Reviews link:**
- Label text: "Write a review:"
- Link text: "Drain Man Google Reviews"
- URL: `https://search.google.com/local/writereview?placeid=ChIJbypPpJXO1IkRTagYYBJsvs4`
- Opens in `target="_blank"`

**Map:** Google Maps JS API embed (NOT iframe). API key: `REDACTED` (exposed in HTML — flag for client). Center coordinates: `lat: 43.730682, lng: -79.246028`. Zoom: 15. Div: `<div class="map" id="drain_man_map">` at `height: 80vh`.

**No contact form** exists on live site.
**No business hours** listed.
**No Enercare link** on live site.

**[REBUILD required additions:]**
1. Booking/contact request form (webhook-to-email flow; NOT a live calendar)
2. Enercare website link (Plumbing Drain Protection Plan) — prominently placed
3. Replace exposed Google Maps API JS call with embedded iframe (or secure the API key)

---

## SECTION 3: FULL SERVICES CONTENT

### 3.1 Core Service Categories (preserve all three)

**1. Drain Services**
- Clear blocked drains
- Install drains and drain cleanouts
- Repairs to drainage systems
- Sewer video recording
- Underground drain location and inspection
- Sewage ejectors (install/repair/maintain)
- Sump pumps (install/repair/maintain)
- Backwater valves (install/repair/maintain)
- Floor drains (install/repair/maintain)
- Drain primer
- Catch basins
- Foundation drains
- Note: Inspections are especially valuable during renovations or before buying a home

**2. Flood Prevention**
- Install, repair, replace, and maintain backwater prevention systems
- Stops sewer and municipal backflow from flooding the home

**3. Power Flushing**
- Clears grease, grime, and sludge from pipes and heating systems
- Fixes: slow heating, cold spots, noisy boilers, murky/cloudy tap water
- Applies to pipes AND heating systems (boilers)

### 3.2 Everyday Service Items (NEW — per client brief, not on live site)

Add to Services page as concrete, everyday language items alongside the above:
- Blocked toilet
- Blocked sink
- Blocked drains (general)
- Repiping
- (Plus the deeper categories above)

### 3.3 Plumber vs. Technician Distinction (NEW — per client brief)

Client wants the site to clearly differentiate:
- **Standard plumbers:** Handle everyday plumbing — faucets, leaks, fixtures
- **Technician plumbers (The Drain Man):** Handle complex main drain issues using specialized tools — drain cameras, snake machines, hydro-jetting, backwater valve systems

This distinction should appear on the Services page and possibly the Home page as a differentiating value proposition.

---

## SECTION 4: CONTACT DETAILS, LICENSES, SERVICE AREAS

### 4.1 Contact Details

| Field | Value |
|-------|-------|
| Phone | (416) 699-1370 |
| Phone href | `tel:+14166991370` |
| Email | admin@drainmaninc.com |
| Address line 1 | 440 Brimley Rd, Unit #11 |
| City/Province | Scarborough, ON |
| Postal code | M1J 1A1 |
| Full address | 440 Brimley Rd, Unit #11, Scarborough, ON M1J 1A1 |
| Map coordinates | lat: 43.730682, lng: -79.246028 |
| Google Place ID | ChIJbypPpJXO1IkRTagYYBJsvs4 |

### 4.2 Licenses

| License | Number | Coverage |
|---------|--------|---------|
| Master Plumbing License | #P19120 | Plumbing and drain services |
| Builders License | #B18804 | Concrete, waterproofing, basement underpinning, other construction work |

Also: Fully insured.

### 4.3 Service Areas

Toronto and the surrounding GTA including: Brampton, Mississauga, Scarborough, and further.

### 4.4 Company Facts

- Founded: 1972
- Family owned and operated
- Founder: Bill Barber (came from England; began as plumber; specialized in drains; known as "Bill the Drain Man")
- Now second-generation: son John (office manager), daughter Shawna (head office), son-in-law Brian (service man)
- Many staff with 20+ years tenure
- No deposits policy
- Referral-driven business model (low marketing spend → fair prices)
- No hidden surprises; rates disclosed up front, not at the front door

---

## SECTION 5: ASSET INVENTORY

### 5.1 Logo / Brand Assets

| File | Local Path | Dimensions | Format | Notes |
|------|-----------|-----------|--------|-------|
| Logo | `/Users/adham/Developer/drain-man/research/assets/brand/drain_man_logo.png` | 361 × 136 px | PNG RGBA | Chrome/silver metallic wordmark "DRAIN MAN" (two words). Transparent background. Created in GIMP 2019. No "Inc" in wordmark. |
| Favicon | `/Users/adham/Developer/drain-man/research/assets/brand/favicon.ico` | 256 × 256 px (largest; 6 frames) | ICO | Grayscale version of same wordmark |
| Favicon preview | `/Users/adham/Developer/drain-man/research/assets/brand/favicon_preview.png` | 256 × 256 px | PNG | Converted from ICO for visual reference |

**Logo visual:** All-caps slab/display wordmark "DRAIN MAN" with brushed chrome/metallic gradient effect, white glow halo. Transparent background. No icon or symbol — pure wordmark. No Retina/2x variant, no SVG, no apple-touch-icon exists.

**[REBUILD]:** New wordmark must read "Drainman INC" (per client direction). Can temporarily use existing logo file while new wordmark is created.

### 5.2 Content Images

All images downloaded and verified at: `/Users/adham/Developer/drain-man/research/assets/images/`

| File | Local Path | Dimensions | Size | Pages Used | Description |
|------|-----------|-----------|------|-----------|------------|
| `drain_man_logo.png` | `/Users/adham/Developer/drain-man/research/assets/images/drain_man_logo.png` | 361 × 136 px | 22 KB | ALL pages (header + footer) | Logo (same as brand copy above) |
| `toronto_skyline.jpg` | `/Users/adham/Developer/drain-man/research/assets/images/toronto_skyline.jpg` | 6000 × 4000 px | 4.2 MB | index.html | Hero banner backdrop — Toronto skyline. Very large — optimize for web (resize to ~1920 px wide). |
| `plumbing_tools.jpg` | `/Users/adham/Developer/drain-man/research/assets/images/plumbing_tools.jpg` | 1920 × 1275 px | 673 KB | index.html | Home card 1 — plumbing tools. Modal-enabled. |
| `pipe_wrenches.jpg` | `/Users/adham/Developer/drain-man/research/assets/images/pipe_wrenches.jpg` | 1920 × 1280 px | 532 KB | index.html | Home card 2 — pipe wrenches close-up. Modal-enabled. |
| `toronto_fountain.jpg` | `/Users/adham/Developer/drain-man/research/assets/images/toronto_fountain.jpg` | 5949 × 3946 px | 4.1 MB | index.html | Home card 3 — Toronto sign + fountain. Very large — optimize. |
| `floor_drain.jpg` | `/Users/adham/Developer/drain-man/research/assets/images/floor_drain.jpg` | 2048 × 1536 px | 907 KB | services.html | Drain Services section. Circular metal floor drain. Modal-enabled. |
| `flood_prevention.jpg` | `/Users/adham/Developer/drain-man/research/assets/images/flood_prevention.jpg` | 3504 × 2332 px | 1.9 MB | services.html | Flood Prevention section. Original Canon EOS 30D job-site photo from 2007 — authentic, not stock. Modal-enabled. |
| `powerflush.png` | `/Users/adham/Developer/drain-man/research/assets/images/powerflush.png` | 958 × 360 px | 540 KB | services.html | Power Flushing section. Wide landscape — before/after comparison graphic. RGBA PNG (may contain text/labels). Modal-enabled. |

**Image optimization notes:**
- `toronto_skyline.jpg` (4.2 MB, 6000×4000) and `toronto_fountain.jpg` (4.1 MB, 5949×3946) need significant compression — resize to ≤1920 px wide at 80% JPEG quality
- `flood_prevention.jpg` is authentic job-site photography — worth preserving
- All 8 images from the live site have been successfully downloaded and verified

---

## SECTION 6: REBUILD MAP

This section translates what exists into what the new site requires. It is organized as: (a) carry over unchanged, (b) revise/update, (c) add new.

---

### 6.1 CARRY OVER UNCHANGED (same content, better execution)

| Element | Verbatim value to preserve |
|---------|--------------------------|
| Company name | The Drain Man Inc |
| Phone number | (416) 699-1370 |
| Email | admin@drainmaninc.com |
| Address | 440 Brimley Rd, Unit #11, Scarborough, ON M1J 1A1 |
| Postal code | M1J 1A1 |
| Map coordinates | lat: 43.730682, lng: -79.246028 |
| Master Plumbing License | #P19120 |
| Builders License | #B18804 |
| Service areas | Toronto + GTA: Brampton, Mississauga, Scarborough, and further |
| Core tagline | "Family owned and operated" |
| Value statement | "We aim to provide services, not sales" |
| Honesty line | "We will never mislead customers to obtain their business." |
| No deposits | "We do not believe in deposits." |
| Rates up front | "We tell you our rates up front, not at the front door." |
| All 3 service categories | Drain Services, Flood Prevention, Power Flushing |
| All service sub-items | (sewage ejectors, sump pumps, backwater valves, etc.) |
| Drain Services body copy | (verbatim from Section 2.3, with typo fixed) |
| Flood Prevention body copy | (verbatim from Section 2.3) |
| Power Flushing body copy | (verbatim from Section 2.3) |
| All 4 FAQ Q&As | (verbatim from Section 2.4) |
| Google Reviews link | https://search.google.com/local/writereview?placeid=ChIJbypPpJXO1IkRTagYYBJsvs4 |
| All 8 images | Reuse (optimize large files) |
| 5 page routes | index.html, about.html, services.html, faq.html, contact.html |
| Founded year | 1972 |
| Family members | Bill Barber, John (son), Shawna (daughter), Brian (son-in-law) |
| 20+ year staff tenure | Mention retained |

---

### 6.2 REVISE / UPDATE

| Element | Current (live) | New (rebuild) |
|---------|---------------|--------------|
| Logo wordmark | "DRAIN MAN" (two words, chrome metallic, no "Inc") | "Drainman INC" (new wordmark per client — one word + "INC") |
| About page story | 5 dense text paragraphs, no Bill backstory | [NEW STORY] — Bill from England, drain specialist discovery, "Bill the Drain Man" nickname, 1972 founding, second-generation handoff. 2–3 concise paragraphs. See client notes. |
| About page format | Single text block, no images | Concise paragraphs + pull quotes + scannable trust chips |
| Services page heading | "Drain Sevices" (TYPO) | "Drain Services" (corrected) |
| Services everyday items | "...And much, much more!" (vague) | Concrete list: blocked toilet, blocked sink, blocked drains, repiping + the deeper categories |
| Services CTA | None | Add "Call us" / booking form CTA button per section or at page bottom |
| Contact page | Phone + email + address + map only; no form | Add contact/booking REQUEST FORM (webhook-to-email; not a live calendar) |
| Contact page | No Enercare link | Add Enercare website link (Plumbing Drain Protection Plan) |
| Navigation | 5 equal tabs (Home, About Us, Services, F.A.Q., Contact Us) | 4 primary tabs (Home, Services, About, Contact) + FAQ in footer only |
| Footer | No copyright; absolute-positioned off-screen | Add `© [dynamic year] The Drain Man Inc` with `new Date().getFullYear()`. Normal document flow. Add FAQ footer link. |
| Page titles | Identical on all 5 pages | Unique per-page `<title>` values for SEO |
| Hero text overlay | Bottom-right corner | Center or center-left, high contrast |
| Color palette | lightcyan background, named CSS colors only | Bold, intentional hex palette — "Superman effect": deep navy/charcoal + vivid accent + white |
| Typography | Arial system font only | 1–2 Google Fonts: strong condensed display (e.g., Barlow Condensed, Oswald) + clean body sans |
| Layout engine | float-based + limited flex | Full CSS Grid / Flexbox throughout |
| Mobile nav | No animation, abrupt slide | Smooth slide-in with backdrop overlay and close gesture |
| Google Maps embed | JS API with key exposed in HTML | Use static embed iframe URL (no API key in HTML) or secure the key |
| Hero on Home | toronto_skyline.jpg hero, teal overlay | Retain image OR upgrade; remove teal wash overlay; center messaging; hero above Enercare CTA |
| Services layout | "...And much, much more!" as close | Plumber vs. Technician distinction section + booking CTA |

---

### 6.3 ADD NEW (does not exist on live site)

| Element | Specification |
|---------|--------------|
| **Enercare logo/placement** | FRONT AND CENTER on Home page — more prominent than any other element on the page. Also present on Contact page. Link to Enercare's Plumbing Drain Protection Plan website. Client priority: protect this partnership relationship. |
| **Booking/contact form** | On Contact page. Fields: Name, Phone, Email, Description of issue, preferred callback time (optional). On submit: sends data to a webhook that emails the company. NOT a live calendar. |
| **Plumber vs. Technician distinction** | New content section on Services page (and possibly Home). Differentiate: standard plumbers (faucets, leaks, everyday fixtures) vs. technician plumbers who handle complex MAIN DRAIN issues with specialized tools (cameras, snakes, hydro-jetting). Drain Man = technician-level specialists. |
| **Dynamic copyright year** | `© <script>document.write(new Date().getFullYear())</script> The Drain Man Inc` in footer on every page. |
| **Per-page `<title>` tags** | Unique SEO titles per page (not the same string on all 5). |
| **FAQ as footer-only link** | FAQ page preserved as a route but linked only in footer, not in main navigation. |
| **"Bill the Drain Man" origin story** | New About page narrative — Bill from England, plumber-to-drain-specialist arc, GTA contractor nickname, 1972 founding, second-generation handoff (John + family). Keep warm, concise, not overbearing. |
| **Everyday service language** | Blocked toilet, blocked sink, repiping etc. added to Services page alongside the technical categories. |
| **Trust signals as scannable chips** | Licenses, family-owned, no deposits, 50+ years — displayed as icon+text chips or badges, not buried in paragraphs. |
| **Service CTAs within pages** | Each service section (or at page bottom) should have a clear "Book" or "Call" CTA button. Currently absent. |
| **Enercare link on Contact page** | Per client: include direct link to Enercare's Plumbing Drain Protection Plan on the Contact page. |

---

## APPENDIX A: ORIGINAL CSS DESIGN SYSTEM (for reference / replacement)

### Color Palette (live site — replace in rebuild)

| Role | CSS value | Approx hex |
|------|----------|-----------|
| Page background | `lightcyan` | #E0FFFF |
| Body text | `darkslateblue` | #483D8B |
| Accent text | `slateblue` | #6A5ACD |
| Nav bar | `cadetblue` | #5F9EA0 |
| Nav active | `darkcyan` | #008B8B |
| HR color | `cyan` | #00FFFF |
| CTA button | `rgb(0,190,190)` | #00BEBE |
| CTA hover | `#009090` | #009090 |
| Hero overlay | `rgba(0,190,190,0.6)` | semi-transparent teal |
| Footer gradient | `lightcyan` → `darkcyan` | #E0FFFF → #008B8B |

### Typography (live site — replace in rebuild)

- Font: `Arial, Helvetica, sans-serif` (no web fonts)
- No explicit rem/px scale — bare heading tag defaults
- `&nbsp;&nbsp;&nbsp;&nbsp;` paragraph indents (remove in rebuild)

### Layout (live site — replace in rebuild)

- Float-based nav and footer columns
- `display: flex` for header and service card rows
- Footer: `position: absolute; bottom: 0; transform: translateY(100%)` (broken)
- Mobile breakpoint: 650 px (hard-coded in JS and CSS)

---

## APPENDIX B: LIVE SITE TECHNICAL NOTES

- `robots.txt`: `User-agent: * / Crawl-Delay: 20` (no disallow rules)
- No `sitemap.xml`
- No analytics (no GA, GTM, or similar)
- No social media links anywhere
- Cloudflare in use (email obfuscation, CDN scripts)
- Google Maps API key in plain HTML: `REDACTED` — flag for client; use embed iframe instead
- JavaScript: single file `javascript/script_main.js` — handles mobile menu, lightbox modal, map initialization, preload class removal
- CSS: single file `css/drain_man_stylesheet.css` — no frameworks, hand-written
- No external CSS frameworks (no Bootstrap, Tailwind, etc.)
- No web fonts loaded
- Mobile breakpoint: 650 px
- Modal lightbox active on: index.html, services.html (not about, faq, contact)
- Identical `<title>` on all 5 pages — SEO issue; fix in rebuild

---

## APPENDIX C: ENERCARE INTEGRATION NOTES

The Enercare partnership is the client's stated top priority for the new site.

- **Current state:** Zero mention of Enercare anywhere on the live site.
- **Required:** Enercare logo must be FRONT AND CENTER on the Home page — the most prominent element visible above the fold (even more prominent than the company logo if needed per client direction).
- **Contact page:** Include a direct link to Enercare's Plumbing Drain Protection Plan website.
- **Booking:** Enercare is the booking mechanism — link prominently. The built-in contact form is a supplementary booking channel (webhook-to-email for direct inquiries).
- **Note for builders:** Obtain the Enercare logo file and the exact URL for the Plumbing Drain Protection Plan from the client before building. The Enercare partner relationship must be protected — the link should open Enercare's own booking/plan page.

---

*End of SITE_SPEC.md*

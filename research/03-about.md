# About Page — drainmaninc.com/about.html
Fetched from: https://drainmaninc.com/about.html (also confirmed via http://www.drainmaninc.com/about.html — identical content)

---

## Page Metadata

- **HTML `<title>`:** `The Drain Man Inc | Experienced Toronto plumbers providing expert plumbing & drains services`
- **Charset:** UTF-8
- **Viewport:** width=device-width, initial-scale=1.0
- **Stylesheet:** `css/drain_man_stylesheet.css`
- **Script:** `javascript/script_main.js`
- **Favicon:** `favicon.ico`
- **Active nav item:** `About Us` (`class="active"` on this `<li>`)

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

- Logo image src: `images/drain_man_logo.png`
- Logo alt text: `The Drain Man Inc | Toronto plumbers: logo`
- Tagline H3: **"Family owned and operated"**
- Tagline H4: **"Serving the GTA for over 45 years with honesty & integrity."**
- CTA H3 (linked to contact.html): **"Call Today: (416) 699-1370"**

---

## Navigation (shared across all pages)

```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li class="active"><a href="about.html">About Us</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="faq.html">F.A.Q.</a></li>
        <li><a href="contact.html">Contact Us</a></li>
    </ul>
</nav>
```

Nav items: Home | About Us (active) | Services | F.A.Q. | Contact Us

---

## Main Content

### Wrapper element
```html
<div class="h_and_p">
```

### H1 Heading
```
About Us
```

### Full Body Text (verbatim, 5 paragraphs)

> For over 45 years, The Drain Man Inc. has been serving the GTA with honesty and integrity. A family owned and operated business, our goal is to run a business in the modern world on the morals that we were founded upon.

> We are truly family owned and operated. It isn't a gimmick or a sales pitch. Bill Barber is a hands-on owner that is routinely involved at excavation and waterproofing job sites. His son, John, is the office manager. His daughter, Shawna, works in the head office. His son in-law, Brian, works as one of our service men. We believe in valuable employees that see our company as a career choice, not just a stepping stone. We've proudly employed individuals at our company who have been with us for upwards of 20 years.

> We run our business with nothing to hide. As our customer, we aim to find only the best solutions to your problems and to provide them at a fair and reasonable cost. Our job as your contractor is to deliver to you the solutions that you need clearly and honestly with no hidden surprises. We tell you our rates up front, not at the front door. If you need a quote for extensive work, our staff will gladly accommodate your needs.

> We do not believe in deposits. An honest and hard working company shouldn't need your money up front before starting. The customer pays when we've delivered on the work we've promised them. We will never mislead customers to obtain their business. Our company relies on customer and contractor referrals in the GTA, therefore our honesty and integrity has to remain at the top of the trades.

> Burst pipes, blocked up drains, or wet basement walls are very stressful problems to deal with. Hiring a contractor to fix them shouldn't be just as big a problem. So give us a call, and you'll have old fashioned, hard working, honest tradesmen working to help you.

### Images on the About page

**None.** The about.html main content section contains NO images — only text paragraphs inside `<div class="h_and_p">`. The only images on this page are:
- Header logo: `images/drain_man_logo.png`
- Footer logo: `images/drain_man_logo.png`

---

## People Named & Their Roles

| Name | Role | Notes |
|------|------|-------|
| Bill Barber | Hands-on owner/founder | "routinely involved at excavation and waterproofing job sites" |
| John | Office manager | Bill's son |
| Shawna | Head office | Bill's daughter |
| Brian | Service man | Bill's son-in-law |

---

## Key Facts & Figures

- **Years in operation (as stated):** "over 45 years" (founded 1972; site copy was written around 2017-2018)
- **Area served:** GTA (Greater Toronto Area)
- **Employee tenure highlight:** "upwards of 20 years" for some staff
- **Deposit policy:** No deposits — "An honest and hard working company shouldn't need your money up front before starting"
- **Payment timing:** Customer pays when work is delivered
- **Business model:** Relies on customer and contractor referrals, NOT heavy marketing

---

## Value/Mission Statements (verbatim)

1. "our goal is to run a business in the modern world on the morals that we were founded upon"
2. "We are truly family owned and operated. It isn't a gimmick or a sales pitch."
3. "We run our business with nothing to hide."
4. "we aim to find only the best solutions to your problems and to provide them at a fair and reasonable cost"
5. "deliver to you the solutions that you need clearly and honestly with no hidden surprises"
6. "We tell you our rates up front, not at the front door."
7. "We do not believe in deposits."
8. "We will never mislead customers to obtain their business."
9. "our honesty and integrity has to remain at the top of the trades"
10. "you'll have old fashioned, hard working, honest tradesmen working to help you"

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

Footer elements:
- Logo: `images/drain_man_logo.png`
- Footer tagline (H5): **"Family owned and operated for over 45 years of expert Toronto plumbing services"**
- Address: 440 Brimley Rd, Unit #11, Scarborough, ON, M1J 1A1
- Phone: (416) 699-1370
- The entire contact block is wrapped in `<a href="contact.html">`
- **No dynamic copyright year** — footer has no copyright line at all on the live site

---

## Body Tag & JS Hooks

```html
<body class="preload" onload="window_load()" onscroll="hide_menu_on_scroll()">
```

- `class="preload"` — likely used to prevent CSS transitions on initial load
- `onload="window_load()"` — fires on page load (defined in `javascript/script_main.js`)
- `onscroll="hide_menu_on_scroll()"` — hides mobile menu on scroll

---

## Structural Notes for Rebuild

- The About page is text-only in `<main>` — no images, no cards, no icons, no sidebars.
- Content is a single `<div class="h_and_p">` with an `<h1>` and one long `<p>` element using `<br/><br/>` to separate paragraphs and `&nbsp;&nbsp;&nbsp;&nbsp;` (4 non-breaking spaces) to indent each paragraph.
- No subheadings within the body text.
- The page is notably plain and text-heavy — the new design should modernize this while preserving the core content.
- The "about" story (Bill coming from England, naming history "Bill the Drain Man," founding year 1972, second-generation transition) is NOT on the current site — this narrative exists only in the client meeting notes and must be written fresh for the rebuild.

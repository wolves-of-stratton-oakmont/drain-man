# FAQ Page — Full Extraction (faq.html)

**Source URL:** https://drainmaninc.com/faq.html
**Fetched:** 2026-06-20

---

## Page `<head>`

```html
<title>The Drain Man Inc | Experienced Toronto plumbers providing expert plumbing & drains services</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta charset="UTF-8"/>
<link rel="stylesheet" href="css/drain_man_stylesheet.css"/>
<script src="javascript/script_main.js"></script>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

---

## Header

- Logo image: `images/drain_man_logo.png`  
  alt: `"The Drain Man Inc | Toronto plumbers: logo"`  
  href: `index.html`
- Mobile menu icon: `&#9776;` (hamburger), onclick `show_mobile_menu()`
- Tagline block:
  - `<h3>Family owned and operated</h3>`
  - `<h4>Serving the GTA for over 45 years with honesty & integrity.</h4>`
  - `<h3><a href="contact.html">Call Today: (416) 699-1370</a></h3>`

---

## Navigation

Active page: **F.A.Q.**

| Label      | href           |
|------------|----------------|
| Home       | index.html     |
| About Us   | about.html     |
| Services   | services.html  |
| F.A.Q.     | faq.html       |
| Contact Us | contact.html   |

---

## Main Content

### Page Heading

```html
<h1 class="h_and_p">Frequently Asked Questions</h1>
```

> **Frequently Asked Questions**

No images in the `<main>` section.

---

### Q&A — Verbatim (4 questions, in order)

---

**Q1**

```html
<p class="faq_q">Q. How do you keep the costs to your customers fair and reasonable?</p>
<p class="faq_a">
    A. We rely on the quality of our work and satisfaction of our customers. Rather than investing large amounts of money 
    into marketing, and passing on those costs to our customers, we depend on our customers to relay the word of our good work 
    to their friends and family.
</p>
```

> **Q. How do you keep the costs to your customers fair and reasonable?**
>
> A. We rely on the quality of our work and satisfaction of our customers. Rather than investing large amounts of money into marketing, and passing on those costs to our customers, we depend on our customers to relay the word of our good work to their friends and family.

---

**Q2**

```html
<p class="faq_q">Q. Where do you offer your services?</p>
<p class="faq_a">
    A. We offer our services in Toronto and the surrounding GTA including Brampton, Mississauga, Scarborough, and further.
</p>
```

> **Q. Where do you offer your services?**
>
> A. We offer our services in Toronto and the surrounding GTA including Brampton, Mississauga, Scarborough, and further.

---

**Q3**

```html
<p class="faq_q">Q. Are you fully licensed and insured?</p>
<p class="faq_a">
    A. Yes, we're fully insured and our Master's plumbing license # is P19120. This License covers the plumbing and drain 
    services that our business provides. Our Builders License # is B18804 and covers work involving concrete, waterproofing, 
    basement underpinning and other construction related work.
</p>
```

> **Q. Are you fully licensed and insured?**
>
> A. Yes, we're fully insured and our Master's plumbing license # is P19120. This License covers the plumbing and drain services that our business provides. Our Builders License # is B18804 and covers work involving concrete, waterproofing, basement underpinning and other construction related work.

---

**Q4**

```html
<p class="faq_q">Q. How can I find out how much it will cost for what I need?</p>
<p class="faq_a">
    A. Just like every customer we help, every job is unique. Give us a call and we will find the right solutions to 
    best solve your problem at an affordable cost.
</p>
```

> **Q. How can I find out how much it will cost for what I need?**
>
> A. Just like every customer we help, every job is unique. Give us a call and we will find the right solutions to best solve your problem at an affordable cost.

---

## Images on This Page

| Location | src                          | alt                                               |
|----------|------------------------------|---------------------------------------------------|
| Header   | `images/drain_man_logo.png`  | `The Drain Man Inc | Toronto plumbers: logo`      |
| Footer   | `images/drain_man_logo.png`  | `The Drain Man Inc | Toronto plumbers: logo`      |

No other images appear on this page.

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

Footer text verbatim:
- `<h5>Family owned and operated for over 45 years of expert Toronto plumbing services</h5>`
- Contact block (linked to `contact.html`):
  - `Contact Us:`
  - `440 Brimley Rd, Unit #11`
  - `Scarborough, ON`
  - `M1J 1A1`
  - `(416) 699-1370`

---

## CSS Classes Used (FAQ-specific)

| Class      | Applied to | Purpose                     |
|------------|------------|-----------------------------|
| `faq_q`    | `<p>`      | Styles each question line   |
| `faq_a`    | `<p>`      | Styles each answer paragraph|
| `h_and_p`  | `<h1>`     | Page heading style          |

---

## Body Attributes

```html
<body class="preload" onscroll="hide_menu_on_scroll()" onload="window_load()">
```

- `class="preload"` — set on load, likely removed by JS to enable transitions
- `onscroll` → `hide_menu_on_scroll()` (defined in `javascript/script_main.js`)
- `onload` → `window_load()` (defined in `javascript/script_main.js`)

---

## Notes for Rebuild

- The FAQ page has exactly **4 Q&As** — no more, no less.
- No images appear in the main content area — only the logo appears twice (header + footer).
- The page uses CSS classes `faq_q` and `faq_a` (not `<dl>`/`<dt>`/`<dd>`) — plain `<p>` tags with class-based styling.
- Client requirement: **de-emphasize** the FAQ page in the new site (e.g., footer link only, lighter treatment). Content should be preserved but not prominently featured in the main nav.
- No JavaScript interactions are specific to the FAQ page itself; it shares the global header/nav JS.

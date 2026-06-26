# Contact Page — Full Extraction (contact.html)

Source: https://drainmaninc.com/contact.html
Fetched: 2026-06-20

---

## Page Title

```
The Drain Man Inc | Experienced Toronto plumbers providing expert plumbing & drains services
```

---

## Contact Details (verbatim from HTML)

### Phone
- Display text: `(416) 699-1370`
- `<a href="tel:+14166991370">(416) 699-1370</a>`

### Email
- Obfuscated via Cloudflare (`/cdn-cgi/l/email-protection`)
- `data-cfemail` attribute value: `ec8d88818582ac889e8d8582818d8285828fc28f8381`
- **Decoded email: `admin@drainmaninc.com`**
- Cloudflare decode script: `/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js`
- The mailto href is rendered at runtime; no static `mailto:` href in source.

### Address (verbatim from HTML `<h4 id="contact_address">`)
```
440 Brimley Rd, Unit #11
Scarborough, ON
M1J 1A1
```

---

## Business Hours

None listed on the page.

---

## Contact / Booking Form

No form exists on the live contact page. There are no `<form>`, `<input>`, `<textarea>`, or `<button>` elements. The page is purely informational.

---

## Map Embed

A Google Maps embed is rendered dynamically via JavaScript (not a static `<iframe>`).

- Div: `<div class="map" id="drain_man_map"></div>`
- Map loaded by `load_map()` callback in `javascript/script_main.js`
- Google Maps JS API key: `REDACTED`
- Script src: `https://maps.googleapis.com/maps/api/js?key=REDACTED&callback=load_map`
- Map center coordinates: `lat: 43.730682, lng: -79.246028`
- Default zoom level: `15`
- A marker is placed at those coordinates; clicking the marker re-centers and re-zooms to default.

---

## Google Reviews Link

```html
<a href="https://search.google.com/local/writereview?placeid=ChIJbypPpJXO1IkRTagYYBJsvs4" target="_blank">Drain Man Google Reviews</a>
```

- Label: "Write a review:"
- Link text: "Drain Man Google Reviews"
- Google Place ID: `ChIJbypPpJXO1IkRTagYYBJsvs4`

---

## Social Media Links

None present on the page.

---

## Images on This Page

| Element | src | alt |
|---------|-----|-----|
| Header logo | `images/drain_man_logo.png` | `The Drain Man Inc \| Toronto plumbers: logo` |
| Footer logo | `images/drain_man_logo.png` | `The Drain Man Inc \| Toronto plumbers: logo` |

No other images appear on the contact page.

---

## Navigation (verbatim)

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="faq.html">F.A.Q.</a></li>
    <li class="active"><a href="contact.html">Contact Us</a></li>
  </ul>
</nav>
```

---

## Header (verbatim)

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

---

## Main Content (verbatim structure)

```html
<main>
  <div id="contact_main_div">
    <h1>Contact Us</h1>
    <div id="contact_info_div">
      <hr/>
      <div id="contact_phone_email">
        <h3>&#128222; Phone: <a href="tel:+14166991370">(416) 699-1370</a></h3>
        <h3>&#128231; E-mail: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ec8d88818582ac889e8d8582818d8285828fc28f8381">[email protected]</a></h3>
        <h3>Write a review: <a href="https://search.google.com/local/writereview?placeid=ChIJbypPpJXO1IkRTagYYBJsvs4" target="_blank">Drain Man Google Reviews</a></h3>
      </div>
      <h4 id="contact_address">
        <strong>Address:</strong><br/>
        440 Brimley Rd, Unit #11 <br/>
        Scarborough, ON <br/>
        M1J 1A1
      </h4>
      <hr/>
    </div>
  </div>
  <div class="map" id="drain_man_map"></div>
</main>
```

---

## Footer (verbatim structure)

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

---

## Scripts Referenced

| Script | Notes |
|--------|-------|
| `javascript/script_main.js` | Loaded in `<head>`; contains `load_map()`, mobile menu logic, modal logic |
| `https://maps.googleapis.com/maps/api/js?key=REDACTED&callback=load_map` | Google Maps API, loaded at bottom of `<body>` |
| `/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js` | Cloudflare email obfuscation decoder, loaded at bottom of `<body>` (has `data-cfasync="false"`) |

---

## CSS

- `css/drain_man_stylesheet.css` (linked in `<head>`)

---

## Favicon

- `favicon.ico` (both `shortcut icon` and `icon` rel types)

---

## Key Observations for Rebuild

1. **No contact form exists** — the new site needs one built from scratch (webhook-to-email flow per client brief).
2. **Email is obfuscated** — the real address is `admin@drainmaninc.com`. The new site should expose it as a `mailto:admin@drainmaninc.com` link or protect it via a server-side form.
3. **Map is Google Maps JS API (dynamic)** — not a simple iframe embed. The rebuild can use a static Google Maps embed iframe or retain the JS approach.
4. **No business hours** — none on the live site; none needed in rebuild unless client supplies them.
5. **No social media presence** listed on site.
6. **Google Place ID** for reviews: `ChIJbypPpJXO1IkRTagYYBJsvs4`
7. Per client brief, the new Contact page should also include an **Enercare website link** (Plumbing Drain Protection Plan) — this does NOT currently exist on the live site.

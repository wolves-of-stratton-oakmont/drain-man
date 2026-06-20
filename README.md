This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Booking form email (wiring `CONTACT_WEBHOOK_URL`)

The Contact page booking form (`components/booking/BookingForm.tsx`) posts to
`app/api/contact/route.ts`, which validates the request and forwards it to an
**email webhook**. There is no live calendar — it simply turns a form submission
into an email to the company.

**To make it send real emails:**

1. Create a webhook that emails `admin@drainmaninc.com`. Any of these work:
   - **Zapier** — "Webhooks by Zapier → Catch Hook" trigger, then a "Gmail / Email" action.
   - **Make.com** — a "Custom webhook" trigger, then an "Email" module.
   - **Formspree** — use the project endpoint URL (it accepts JSON POSTs).
2. Copy `.env.example` to `.env.local` and set the URL:
   ```bash
   cp .env.example .env.local
   # then edit .env.local:
   CONTACT_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/XXXX/YYYY/
   ```
3. Restart the dev server (or redeploy). The route POSTs JSON like:
   `{ name, phone, email, service, city, timing, message, source, submittedAt }`.

`CONTACT_WEBHOOK_URL` is **server-only** (no `NEXT_PUBLIC_` prefix), so the URL is
never exposed to the browser. Never commit a real value — `.env*` is gitignored.

**Before it's wired:** if `CONTACT_WEBHOOK_URL` is unset, the form still works in
dev — the API logs the payload to the server console and returns success, but no
email is sent.

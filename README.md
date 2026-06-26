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

## Booking form email (Mailjet)

The Contact page booking form (`components/booking/BookingForm.tsx`) posts to
`app/api/contact/route.ts`, which validates the request and then sends it as a
**transactional email via [Mailjet](https://www.mailjet.com)** straight from the
server (no Zapier/Make/webhook in between). There is no live calendar — it simply
turns a form submission into an email to the company, with **Reply-To** set to the
customer so a reply reaches them directly.

**To make it send real emails:**

1. **Create a Mailjet account.** The free tier (~200 emails/day, ~6,000/month) is
   plenty for a contact form.
2. **Verify the sender + set up DNS.** In Mailjet → *Senders & Domains*, add a
   domain you control and a sender address on it (e.g. `no-reply@drainmaninc.com`),
   then add the **SPF** and **DKIM** DNS records Mailjet gives you at your domain
   registrar. This is what keeps the emails out of spam. **Do not send "From" a
   Gmail/Outlook address** — it fails authentication and bounces.
3. **Copy your API credentials.** Mailjet → *API Key Management* gives you an
   **API Key** and a **Secret Key** (a username/password pair).
4. **Set the env vars** locally, then on your host:
   ```bash
   cp .env.example .env.local
   # then edit .env.local:
   MAILJET_API_KEY=...
   MAILJET_SECRET_KEY=...
   MAILJET_FROM_EMAIL=no-reply@drainmaninc.com
   # optional:
   # MAILJET_FROM_NAME=The Drain Man Inc
   # CONTACT_TO_EMAIL=admin@drainmaninc.com   (defaults to admin@drainmaninc.com)
   ```
   On Vercel, set the same vars in **Project → Settings → Environment Variables**.
5. **Restart the dev server (or redeploy).** Env changes only take effect on a
   fresh boot/deployment. Leads now arrive at `admin@drainmaninc.com`.

All of these vars are **server-only** (no `NEXT_PUBLIC_` prefix), so your Mailjet
secret is never exposed to the browser. Never commit real values — `.env*` is
gitignored. The Secret Key is sensitive: treat it like a password and rotate it in
Mailjet if it ever leaks.

**Before it's configured:** until the three required vars are set, the form does
**not** silently accept leads — it logs the submission to the server console (so
it's recoverable) and shows a "please call us at (416) 699-1370" message. Set the
vars to enable real delivery.

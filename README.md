# Strike Freight & Logistics — Website

A Next.js (App Router) marketing site for Strike Freight & Logistics, built to convert visitors
into bookings via WhatsApp and a quote/booking form. Mobile-first, lightweight, no animation
libraries.

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + `next/font` (Inter) +
`next/image`. Icons from `lucide-react` (tree-shaken, no brand-icon dependency — WhatsApp/
Instagram/Facebook/TikTok marks are small hand-drawn SVGs in `components/icons/brand-icons.tsx`).

## Running it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm run start
```

## Where to edit content

**Everything business-related lives in one file: [`lib/site-data.ts`](lib/site-data.ts).**
Routes/rates, contact details, FAQ, testimonials, service descriptions, prohibited items,
trust copy, the Friday cutoff schedule — all of it. Edit that file and every page that uses it
updates automatically. No component changes are needed for ordinary content updates.

A few things live in their own small files because they're not plain content:

| What | File |
|---|---|
| Business info, contact details, routes/rates, FAQ, testimonials, etc. | `lib/site-data.ts` |
| WhatsApp link builder + message templates | `lib/site-data.ts` (`buildWhatsAppLink`, `whatsappMessages`) |
| Brand colors & fonts | `app/globals.css` (`@theme` block) |
| SEO helper (title/description/canonical/OG per page) | `lib/seo.ts` |
| JSON-LD structured data (LocalBusiness + Service) | `lib/structured-data.ts` |
| Friday countdown cutoff logic | `lib/next-cutoff.ts` |

## Setting the WhatsApp number and email in one place

Open `lib/site-data.ts` and edit the top of `businessInfo`:

```ts
whatsappNumberRaw: "09051178525",      // local format, for display
whatsappNumberIntl: "2349051178525",   // intl format (no +, no spaces), used in wa.me links
phoneNumberRaw: "09028319799",
phoneNumberIntl: "+2349028319799",
email: "strikefrieghtlogistics@gmail.com",
```

Every WhatsApp button/link on the site goes through `buildWhatsAppLink()` in the same file, so
changing `whatsappNumberIntl` updates every CTA at once — header, floating button, hero,
calculator, forms, footer, everything.

## Where to add the logo and photos

**Logo:** there is no real logo file yet, so `components/layout/Logo.tsx` renders a coded
placeholder (navy "SF" badge + wordmark) that matches the brief's description. Once you have the
real logo:

1. Drop the file at `public/logo.svg` (preferred) or `public/logo.png`.
2. In `components/layout/Logo.tsx`, replace the placeholder markup with an `<Image>` (see the
   comment at the top of that file for the exact snippet).
3. The favicon (`app/icon.tsx`) and social share image (`app/opengraph-image.tsx`) are also
   currently generated placeholders — update them the same way once you have real brand assets,
   or just delete them and drop a static `favicon.ico` / `opengraph-image.jpg` in `app/` instead.

**Photos:** every photo slot on the site (hero, office interior/exterior, packed parcels, about
team, testimonial avatars, Instagram/TikTok embeds) renders through the `PhotoPlaceholder`
component (`components/ui/PhotoPlaceholder.tsx`). Each one currently shows a labelled placeholder
box telling you exactly what photo belongs there. To activate a real photo:

1. Add the image file under `public/images/` (the placeholder label tells you the suggested path
   and filename, e.g. `/public/images/hero-freight.jpg`).
2. Pass `src="/images/your-file.jpg"` to that `PhotoPlaceholder` — it will automatically switch to
   rendering a real, optimized `next/image` (responsive sizes, lazy-loaded except the hero, which
   already has `priority` set).

## Connecting a real email service (currently a TODO)

The quote/booking/contact form (`components/forms/QuoteForm.tsx`) always works out of the box: on
submit, it builds a WhatsApp message from every field and opens `wa.me` — that's the real,
guaranteed-to-work conversion path and needs no configuration.

It also fires a non-blocking `POST /api/quote` so a copy of every submission can reach an email
inbox or CRM. That route currently only logs the submission server-side. To wire up real email
delivery, open **`app/api/quote/route.ts`** — there's a `// TODO` block with two ready-to-use
snippets:

- **Resend** (`https://resend.com`) — add `RESEND_API_KEY` to `.env.local`, install `resend`, and
  uncomment the snippet.
- **Formspree** (`https://formspree.io`) — simplest option, just point a `fetch()` at your form ID,
  no SDK or API key needed.

## Connecting a real tracking API (currently a TODO)

The Track Shipment page (`app/track/page.tsx` + `components/forms/TrackForm.tsx`) currently opens
a pre-filled WhatsApp message asking staff for a status update on a name/waybill reference — there
is no live tracking system yet. Once one exists, replace the `window.open(buildWhatsAppLink(...))`
call in `components/forms/TrackForm.tsx` with a `fetch()` to the real tracking API and render the
status inline. The exact spot is marked with `// TODO`.

## SEO

- Per-page `<title>` / meta description / canonical / Open Graph: `lib/seo.ts` → `pageMetadata()`,
  used by every `app/**/page.tsx`.
- `app/sitemap.ts` and `app/robots.ts` are generated from the same route list — add a new page's
  path to the `routes` array in `app/sitemap.ts` if you add a new top-level page.
- `LocalBusiness` + `Service` JSON-LD is injected on the home page via `lib/structured-data.ts`.
- `app/opengraph-image.tsx` and `app/icon.tsx` generate the social-share image and favicon
  programmatically (no image file needed) — replace with static files once real brand assets exist.

## Performance & accessibility notes

- No animation libraries; only CSS transitions (hover states, the FAQ accordion via native
  `<details>`, the Friday countdown). `prefers-reduced-motion` is respected globally
  (`app/globals.css`).
- All photo slots are zero-weight placeholders until you add real images, so there's nothing to
  optimize away later — just drop files in and pass `src` as described above.
- Focus states are visible everywhere (`:focus-visible` outline in `app/globals.css`); forms have
  proper label associations; the Google Map iframes and all icon-only buttons have accessible
  names.
- One contrast rule to keep in mind if you change colors: don't put `text-brand-red` directly on
  a `bg-brand-navy` background — that combination fails WCAG AA. Use `text-brand-red-light`
  instead (already wired into `PageHero` and `SectionHeading`'s `light` mode).

---

## [CONFIRM] checklist — what the client needs to supply or verify before launch

**Brand**
- [ ] Exact brand hex colors for navy and red, taken from the real logo file (`app/globals.css`,
      `--brand-navy` / `--brand-red`). Current values are a visual estimate from the brief.
- [ ] Real logo file (vector preferred) — see "Where to add the logo and photos" above.

**Contact details** (`lib/site-data.ts` → `businessInfo`)
- [ ] WhatsApp number — flyers show both `09051178525` and `09051175825`; the site currently uses
      the first. Confirm the correct live number.
- [ ] Email spelling/domain — flyers show both "frieght"/"freight" and gmail/yahoo. The site
      currently uses `strikefrieghtlogistics@gmail.com`.
- [ ] Registered/legal company name, if different from "Strike Freight & Logistics".
- [ ] Exact Instagram, TikTok and Facebook handle URLs.
- [ ] Custom domain. The site is currently live at the real Vercel URL
      (`https://strikefreightlogistics.vercel.app`, set as `SITE_URL` in `lib/site-data.ts`) — not
      a placeholder. If you connect a custom domain (e.g. `www.strikefreightlogistics.com`) later,
      update that one constant and canonical links, OG/Twitter tags, the sitemap, robots.txt and
      the JSON-LD URL all follow automatically.
- [ ] Real opening hours and closed days.

**Pricing & shipping**
- [ ] Per-route "from" rates for cargo and courier (USA, UK, Canada, Europe/Germany, Worldwide) —
      every rate is currently an illustrative placeholder flagged `[CONFIRM]` on-site
      (`lib/site-data.ts` → `routes`).
- [ ] Minimum billable weight per shipment (currently 1kg).
- [ ] Flat handling fee, if any (currently disabled / ₦0).
- [ ] Volumetric weight divisor, if different from the industry-standard 5000 used here.
- [ ] Exact Friday cutoff day/time for the countdown (currently Thursday 6:00pm).
- [ ] Exact accepted payment methods/rails (currently "Bank transfer" + "Paystack").

**What We Ship**
- [ ] Destination-specific prohibited/restricted item lists (USA, UK, Canada, Europe) — current
      lists are a general starting point, not verified against current customs rules.

**Trust & social proof**
- [ ] Real customer testimonials (name, city, quote, photo) — 3 placeholder slots in
      `lib/site-data.ts` → `testimonials`.
- [ ] Real Instagram/TikTok video URLs for the delivery feed — 3 placeholder slots in
      `lib/site-data.ts` → `socialEmbeds`.
- [ ] Real stats, if you want the stats band (shipments completed / happy customers / years in
      operation) — currently shows `[CONFIRM]` placeholders only. Set `statsBandEnabled = false`
      in `lib/site-data.ts` to remove the section entirely if you'd rather not show it.

**Photos**
- [ ] Real photos for: hero, office storefront, office interior, packed parcels, about/team photo
      — every slot is a clearly labelled placeholder (see "Where to add the logo and photos").

**Integrations (currently working via WhatsApp fallback, not yet connected to real backends)**
- [ ] An email/CRM service for form submissions (Resend, Formspree, or similar) — see
      `app/api/quote/route.ts`.
- [ ] A real shipment tracking system/API, if you want live tracking instead of a WhatsApp request
      — see `components/forms/TrackForm.tsx`.
#   S t r i k e _ f r e i g h t _ - _ l o g i s t i c s  
 
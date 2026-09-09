# Gold Hill Luxe Tour and Travel — Landing Page

Next.js 15 (App Router) + Tailwind CSS v4 marketing landing page with built-in SEO.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## SEO built in

- Per-page `metadata` (title templates, description, keywords, canonical)
- Open Graph + Twitter cards (`/public/og.jpg` — add a 1200×630 image)
- JSON-LD: `TravelAgency` + `LocalBusiness`, `WebSite`, `FAQPage`, `ItemList`/`TouristTrip`
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`
- Semantic headings, alt text, skip link, reduced-motion support
- Security headers in `next.config.mjs`

## Content

All copy, packages, destinations, testimonials and FAQs live in [`lib/site.ts`](lib/site.ts).

## Assets to add to `public/`

`favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `og.jpg`,
and (optional) `logo.png`. Replace the Unsplash image URLs in `lib/site.ts` and
the gallery/hero components with your own photos before launch.

## Deploy

Vercel: import the repo, no config needed. Set the production domain to
`goldhillluxetourandtravel.in`.

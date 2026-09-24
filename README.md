# RLS Tuition Center

A complete, responsive informational website for RLS Tuition Center in Madurai. Built with React, TypeScript, Vite, Tailwind CSS, GSAP / ScrollTrigger and Lucide React. No backend or account system is required.

## Run locally

```sh
npm install
npm run dev
```

## Validation and production

```sh
npm run lint
npx tsc -b
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host. For subdirectory hosting, set Vite's `base` accordingly.

## Client-editable content

- `src/data/business.ts`: business name, formatted phone, contact URLs, teaching start year, full address and opening-hours placeholder.
- `src/data/media.ts`: all five client photographs, their intrinsic dimensions and alt text, plus the local MP4 video.
- `src/data/journey.ts`: approved founder story, milestones, highlights, school names and award details.
- `src/data/academics.ts`: four course categories, confirmed classes and curricula, subject groups, audience groups, academic support and benefits. Extend these arrays when more courses are confirmed.
- `src/data/programs.ts`: the existing five learning steps.
- `src/data/founder.ts`: approved Sugumar R. profile and founder photograph.
- `src/data/testimonials.ts`: retained as an editable data source, but the testimonials section is not mounted because genuine feedback has not been provided.
- Navigation and contact information live in `src/data/business.ts`.
- `src/components/sections/`: individual sections, composed in `src/App.tsx`.
- `src/components/ui/`: reusable headings and contact links / buttons.
- `src/index.css` and `src/styles/readability.css`: unchanged design system, layouts, breakpoints and typography. `src/styles/extensions.css` adds scoped layouts for the new content, reusing the existing styles.
- `src/hooks/usePageAnimation.ts`: scoped GSAP effects, desktop parallax, progressive horizontal / vertical timeline, responsive conditions and cleanup.
- `vite.config.ts`: generates description, Open Graph tags, business JSON-LD and a no-JavaScript contact fallback from central business data at build time.

## Before going live

1. Confirm opening hours and update `business.hours`.
2. The current course data includes confirmed Classes IX–XII, CBSE / ICSE / IGCSE, B.Sc / M.Sc and the eight supplied subject areas. Applied Mathematics is enquiry-only; additional courses or curricula should be added after confirmation.
3. The five supplied client photographs and local video are used directly. The decorative location view remains illustrative; its button uses the exact supplied Google Maps link.
4. Set `VITE_SITE_URL` to the confirmed HTTPS production origin in `.env` or the host build environment, then rebuild. See `.env.example`. Canonical / Open Graph URL tags are omitted until a real domain is supplied; no fictional domain is published.

5. Supply genuine student feedback with permission before restoring the testimonials section.

## Interaction and accessibility

- The 1.75-second branded opening draws a book, opens a page, introduces the monogram and lifts the curtain. It does not block clicks or wait for network requests, appears only on initial application mount, and uses CSS so dismissal is independent of GSAP. See `src/components/ui/BrandedLoader.tsx` and `src/styles/motion.css`.
- All page content is visible by default. GSAP adds masked heading and image reveals, individually triggered card entrances, desktop parallax, a CTA reveal and a thin reading-progress line. At desktop widths of at least 1000px and heights of at least 850px, the learning journey pins briefly while its five numbered markers progress. Smaller screens retain normal scrolling with a horizontal or vertical progress line. `gsap.context()` and media conditions are reverted on cleanup.
- Reduced-motion preferences disable the loader, GSAP animations, CSS transitions and smooth scrolling.
- The mobile menu supports Escape, Tab / Shift+Tab cycling, outside pointer dismissal and closing on navigation or desktop resize. Closed menu links are inert.
- Semantic landmarks, a skip link, keyboard focus indicators and descriptive links are included. Call and WhatsApp actions remain reachable in a safe-area-aware mobile bar, with footer clearance.
- External web links use `noopener noreferrer`; phone links use `tel:`. The WhatsApp action opens the supplied prefilled enquiry without sending it automatically.
- Fonts are self-hosted with system fallbacks. Hero imagery has responsive sources and high fetch priority; the secondary photograph loads lazily. No map iframe, trackers or heavy scrolling library is included.

## Verification

See `VALIDATION.md` for build and browser review results. Automated Lighthouse scores have not been measured; no unverified score is claimed.
"# RLS-Tution-Center" 

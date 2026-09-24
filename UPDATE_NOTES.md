# RLS content update

## Client media, founder journey and recognition — 17 September 2026

- `src/data/media.ts`: central mapping for all five client images and `tution-video.mp4`, including intrinsic dimensions and meaningful alt text.
- `src/data/founder.ts` and `src/data/journey.ts`: approved Sugumar R. details, founder story, confirmed highlights, milestones, schools and awards.
- `src/components/sections/Hero.tsx`: keeps the established hero composition while using client photography and the confirmed since-2017 Mathematics message.
- `FounderSection.tsx`: final founder portrait, identity, qualifications, highlights and readable story layout.
- `JourneySection.tsx`, `FamilySection.tsx`, `SchoolsSection.tsx`, `AwardsSection.tsx`, `VideoSection.tsx` and `GallerySection.tsx`: new sections in the requested narrative order. The main family photograph is never cropped. The gallery uses a small dependency-free lightbox.
- `src/App.tsx`: mounts the approved page flow and hides placeholder testimonials. Existing course, subject, Why RLS, contact and CTA sections remain.
- `src/styles/extensions.css`: scoped responsive layouts that reuse the existing colours, typography, borders, cards, spacing and breakpoints.
- `src/hooks/usePageAnimation.ts`: extends the existing reveal system to the new sections and safely skips the superseded learning-approach timeline.
- `src/data/business.ts`, `Footer.tsx` and `vite.config.ts`: align visible and structured metadata with the confirmed 2017 teaching journey and Mathematics focus.

No photo was confidently identifiable as a specific award image, so none is presented with an award label.

## Anchor-scroll glitch fix — 16 September 2026

- `src/hooks/usePageAnimation.ts`: tracks entrance animations and completes those along an internal anchor's route before native smooth scrolling starts. This prevents course-card and heading reveals flashing while Enquire Now passes them. Normal scrolling still plays the entrances, and contact links retain native hash navigation.
- Completed route triggers are disabled without reverting their styles. Reveal triggers now retain their lifecycle until media cleanup instead of deleting themselves during a breakpoint refresh, fixing a ScrollTrigger refresh error found while resizing after navigation. The capture listener is removed on media changes and unmount.
- Validation: lint, TypeScript and production build passed. Fresh-page desktop/mobile Enquire Now clicks left all four course cards fully visible with no animation transforms; Contact arrived beneath the header. Ordinary scrolling still animated the first row while leaving the later row pending. Mobile/desktop breakpoint regression checks produced no new console errors and no horizontal overflow.

## Course animation and heading refinement — 16 September 2026

- `src/components/sections/Programs.tsx`: adds the reference-style heading highlight and separate animation wrappers around the course cards.
- `src/styles/extensions.css`: muted amber highlight, wrapping support, and wrappers that preserve equal-height cards and the current grid.
- `src/hooks/usePageAnimation.ts`: course cards use a short upward fade with a 120ms two-column stagger, replacing the perspective tilt. Separate wrappers prevent CSS hover transforms competing with GSAP. Mobile cards enter independently. The heading highlight sweeps left to right; reduced-motion users see it immediately.
- Validation: lint and TypeScript/production build passed; desktop and mobile visual review passed; 320, 390, 768 and 1280px checks found no horizontal overflow. All four cards finished visible, animation transforms cleared, and the browser console reported no errors or warnings.

## Motion refinement — 15 September 2026

The existing visual identity is preserved. No dependencies added.

- `src/components/ui/BrandedLoader.tsx`: new animated book and monogram opening.
- `src/styles/motion.css`: independent 1.75-second loader, curtain dismissal, reading-progress styling and reduced-motion fallback.
- `src/hooks/usePageAnimation.ts`: coordinated hero masks, heading reveals, individual card entrances, desktop parallax, CTA reveal and responsive scroll-driven learning journey. Timeline text stays fully readable during progression.
- `src/App.tsx`: mounts the reusable loader and reading-progress indicator.
- `src/main.tsx`: imports the motion stylesheet.
- `README.md` and `VALIDATION.md`: updated behaviour and verification notes.

The content-update details below remain applicable.

Completed 15 September 2026. The existing colour palette, fonts, navigation, buttons, card styling and responsive contact bar are preserved. No dependencies were added.

## Changed / added files

| File                                              | Update                                                                                                                                                                  |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/App.tsx`                                     | Reordered the page and integrated all new sections; retained the learning timeline.                                                                                     |
| `src/data/academics.ts`                           | Centralised the four course groups, IX–XII classes, three confirmed curricula, B.Sc / M.Sc courses, eight subject areas, audience groups and academic-support benefits. |
| `src/data/programs.ts`                            | Retains the existing learning steps; course data moved into academics.ts.                                                                                               |
| `src/data/founder.ts`                             | Editable founder profile with clearly marked placeholders and an optional photograph.                                                                                   |
| `src/data/testimonials.ts`                        | Typed feedback records, optional ratings / avatars / achievements and a flag to hide pending entries.                                                                   |
| `src/components/sections/Hero.tsx`                | States school, higher-secondary, college and engineering support immediately.                                                                                           |
| `src/components/sections/WhoCanJoinSection.tsx`   | Adds the four student audiences.                                                                                                                                        |
| `src/components/sections/Programs.tsx`            | Presents Courses & Classes We Offer using four reusable course cards.                                                                                                   |
| `src/components/ui/CourseCard.tsx`                | Renders course descriptions, classes, subjects, curricula, learning focus and enquiry links.                                                                            |
| `src/components/sections/SubjectsSection.tsx`     | Groups school subjects and college / engineering assistance.                                                                                                            |
| `src/components/ui/SubjectCard.tsx`               | Reusable subject icon, heading and description.                                                                                                                         |
| `src/components/sections/About.tsx`               | Updates education-level coverage and lists realistic academic support.                                                                                                  |
| `src/components/sections/FounderSection.tsx`      | Adds the founder portrait area, profile, qualifications, experience, expertise, philosophy and message.                                                                 |
| `src/components/sections/WhyRls.tsx`              | Updates benefits and removes the redundant category-count strip.                                                                                                        |
| `src/components/sections/TestimonialsSection.tsx` | Shows neutral pending-feedback cards, or approved genuine testimonials from data.                                                                                       |
| `src/components/ui/TestimonialCard.tsx`           | Prevents placeholder entries from displaying fabricated identity, quotations, ratings or results.                                                                       |
| `src/components/sections/Contact.tsx`             | Professional location description covering every education level; contact information preserved.                                                                        |
| `src/components/sections/ContactCTA.tsx`          | Extracts the existing enquiry callout into a reusable section positioned after location information.                                                                    |
| `src/components/ui/ContactActions.tsx`            | Uses WhatsApp Us and Call Now labels in the final CTA; hero actions remain familiar.                                                                                    |
| `src/styles/extensions.css`                       | Scoped layouts for new sections using the existing design system and breakpoints.                                                                                       |
| `src/main.tsx`                                    | Loads the scoped extension stylesheet.                                                                                                                                  |
| `src/hooks/usePageAnimation.ts`                   | Restricts the existing program stagger to course cards so it does not affect feedback cards; other animations remain unchanged.                                         |
| `vite.config.ts`                                  | Updates SEO / Open Graph descriptions and the no-JavaScript fallback with engineering and higher-secondary coverage.                                                    |
| `README.md`                                       | Documents the new content files, founder replacement process and feedback visibility controls.                                                                          |
| `VALIDATION.md`                                   | Records build, responsive, mobile navigation, placeholder and link checks.                                                                                              |

## Replacing pending content

- Founder: replace the profile fields and `photo` in `src/data/founder.ts`, then set `isPlaceholder` to `false` after approval.
- Feedback: add genuine, consented records in `src/data/testimonials.ts` and mark each `isPlaceholder: false`. Until then, visitors only see neutral “Feedback coming soon” cards. Set `showPlaceholderFeedback: false` to hide those cards entirely.
- Applied Mathematics is enquiry-only, not presented as a confirmed course. Further curricula and courses can be added to the central arrays after confirmation.
- Phone and WhatsApp still use the supplied number, normalised to the existing international format for working links.

## Checks

Lint, TypeScript and production build passed. The final browser console is clean. No overflow at nine widths from 320 to 1920px. All internal anchors and supplied contact destinations were verified. Mobile menu open / close, Escape and course navigation passed. No real messages or calls were made. Lighthouse and a full screen-reader audit were not run.

# Design and motion

- Direction: Clean, minimal, lightweight, and responsive.
- Palette: **Endurance Earth**
  - Deep Pine `#14251F` — primary background
  - Trail Charcoal `#26332D` — cards and secondary surfaces
  - Warm Chalk `#F4F0E6` — primary text on dark
  - Pebble `#B6B5A8` — secondary text
  - Ochre `#E2B84F` — cycling accent and primary calls to action
  - Trail Ember `#D86A45` — running accent
  - River Teal `#3C8C88` — swimming accent
  - Moss `#768A67` — supporting natural tone

## Typography

- Family: Archivo, self-hosted from the official Google Fonts distribution. The font's SIL Open Font License is included at `public/fonts/OFL.txt`.
- Set Archivo's variable width axis to 110% for a slightly broader overall letterform.
- Use ExtraBold (800) for display headings and regular/medium weights for body text and UI; use semibold/bold for emphasis and controls as needed.
- Use the shared responsive type scale, weights, line heights, and tracking tokens in `src/styles/tokens.css`; body text starts at 16px and compact labels do not fall below 12px.
- Body text uses subtle positive letter spacing, while display headings retain only slight negative tracking to keep them bold without crowding the characters.
- Font loading uses `font-display: swap` and a system sans-serif fallback.

## Confirmed composition

- Hero headline: “SWIM, BIKE, RUN”.
- About and achievements: two columns; offers: three cards; profile and quote: two columns with a circular portrait on the left.
- Contact CTA above a three-item footer. The copyright and “Made by Kushal” items are confirmed; third item: [Fill in].

## To confirm

- Visual references: [Fill in]
- Hero background video (4K) asset, playback behavior, and static fallback: [Fill in]
- Profile and offer-card images: [Fill in]
- Further layout preferences: [Fill in]
- GSAP “Infinite Looped Panels”: sections to use and motion intensity: [Fill in]
- Contact button animation style and keyboard/touch behavior: [Fill in]

Use motion sparingly. Keep content usable without animation and respect reduced-motion preferences. Check color contrast with final images and video.

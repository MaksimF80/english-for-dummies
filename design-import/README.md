# Handoff: English for Dummies — Landing Page (Header + Hero + sections)

## Overview
Landing page for "English for Dummies", an online/offline English school for
adults. Sections: sticky Header, Hero ("О школе"), Courses, Team, Blog, FAQ
accordion, Footer.

## About the design files
Everything in `source/` is an **HTML design reference** built on this
project's internal design-system runtime (`x-import` custom elements +
`ds-base.js` + a compiled component bundle). It is NOT meant to be shipped
as-is inside Next.js. Your task: **recreate this design as real React/Next.js
components**, using the tokens and component specs below, wired up with
Tailwind (config included) instead of the runtime bundle.

## Fidelity
**High-fidelity.** Colors, type, spacing, and component structure below are
exact — implement pixel-for-pixel.

## Files in this package
- `README.md` — this file.
- `tailwind.config.js` — theme extension generated from the design tokens
  (colors, fonts, type scale, radii, shadows, easing/duration). Merge into
  your existing config.
- `fonts/fonts.css` — Google Fonts `@import` for Newsreader / Figtree / Caveat.
  For production, self-host via `next/font/google` instead (see below).
- `source/Landing.dc.html` — the full landing page markup (reference only).
- `source/ui_kits/landing/` — supporting UI-kit assets (image-slot behavior
  reference for the founder photo).
- `source/_ds/.../` — full design-system source: `tokens/*.css` (raw token
  values), `_ds_bundle.js` (compiled component implementations — read this to
  see exact JSX/props/markup per component), `styles.css`.
- `source/ds-base.js`, `source/support.js` — runtime glue for the `x-import`
  preview mechanism only; not needed in Next.js.

**To see exact component internals** (Button, Card, CourseCard, TeacherCard,
BlogCard, NavLink, SocialIcon, Badge, Logo, Icon): open
`source/_ds/.../_ds_bundle.js` and search for the component name — it's
plain `React.createElement` calls, straightforward to port to JSX/TSX.

## Fonts
Google Fonts, loaded via `@import` in the prototype:
- **Newsreader** (weights 400/500/600, incl. italics) — display/headings.
- **Figtree** (weights 400/500/600/700/800, incl. italics) — body/UI.
- **Caveat** (weights 500/600/700) — handwritten accents (e.g. "20 лет учу
  говорить" note).

Recommended for Next.js — use `next/font/google` instead of the CSS
`@import` for performance:
```tsx
import { Newsreader, Figtree, Caveat } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin', 'cyrillic'], weight: ['400','500','600'], variable: '--font-display' });
const figtree = Figtree({ subsets: ['latin', 'cyrillic'], weight: ['400','500','600','700','800'], variable: '--font-sans' });
const caveat = Caveat({ subsets: ['latin', 'cyrillic'], weight: ['500','600','700'], variable: '--font-hand' });
```
Then reference `var(--font-display)` etc., or map them into
`tailwind.config.js` `fontFamily` (already stubbed there with the Google
Fonts fallback names — swap in the `next/font` CSS variables once wired).

## Design tokens
See `tailwind.config.js` for the full machine-readable set. Summary:

**Colors** — coral (primary, 50–700), amber (primary, 50–700), teal
(secondary/logo, 50–700), raspberry (secondary/logo, 50–700), cream/ink/line
(warm neutrals), plus semantic success/warning/error/info.

**Type scale** — 12/14/16/18/22/28/36/48/60/72px. Display 60px, H1 48px, H2
36px (all Newsreader/500), H3 22px (Figtree/600), body 16–18px (Figtree/400),
small/label 14px, eyebrow 12px uppercase tracked, handwritten accent 28px
(Caveat/600).

**Spacing** — 4/8 rhythm: 0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128px.
Container max-width 1200px, gutter 32px (20px mobile), section padding
~88–96px vertical.

**Radii** — 4 / 8 / 12 / 18 / 28 / 40px, pill (999px) for buttons/badges.

**Shadows** — soft warm-tinted (rgba of ink `#2B2722`), xs→xl, plus coral/amber
coloured glows under primary CTAs.

**Motion** — 140/220/360ms, soft/out easing (see config). Hover = lift
(-2/-3px translateY); press = scale 0.99; no bounce.

## Screens / sections (in DOM order)

### 1. Header (sticky)
- Full-bleed bar, `background: rgba(254,253,245,0.85)` + `backdrop-filter:
  blur(10px)`, 1px bottom border (`--line`), `position: sticky; top:0; z-index:10`.
- Inner row: `max-width:1200px`, `padding: 16px 32px`, flex, `gap:24px`.
- Left: Logo (~190×44px), links to `#home`.
- Center: nav — Главная / Курсы / Команда / Блог / FAQ (NavLink component,
  underline-grows-on-hover, active state = coral underline). Hidden <960px.
- Right: primary Button ("Узнать о курсе", icon mail, size sm), 1px vertical
  divider, 3 SocialIcon buttons (Instagram/Telegram/YouTube, 38×38px).

### 2. Hero — "О школе" (`#about`)
- Section padding 72px vertical, container 1200px.
- Grid `1fr 1fr`, gap 64px, stacks to 1 column <960px (right column hidden on
  mobile).
- Left: eyebrow "О ШКОЛЕ" (coral, 12px uppercase tracked) → H1 60px Newsreader
  "Английский для тех, кто боится ошибаться" → body 18px paragraph (max-width
  520px) → 3 badges (teal/amber/neutral, one with dot) → 2 buttons (primary
  "Узнать о курсе", ghost "Познакомиться с командой").
- Right: founder photo slot (4:4.4 aspect, 28px radius, `shadow-lg`), a
  radial coral/amber gradient blob behind it (rotated -2.5°), and an
  overlapping white sticky note (rotated 2°, `shadow-lg`, 18px radius)
  reading "20 лет учу говорить" (Caveat 24px, amber-600) / "Анна Морозова" /
  "основатель школы".

### 3. Courses (`#courses`, bg `--surface-raised`)
- Header row: eyebrow "КУРСЫ" → H2 36px "Выберите свой темп" → body 18px
  intro, with a "Все курсы →" link at top-right.
- 3-column grid (gap 28px, 1 column <960px) of CourseCard: title,
  description, level, format, duration, price, accent color (coral / amber /
  teal), CTA button + href.

### 4. Team (`#team`, bg page)
- Header block (eyebrow "КОМАНДА", H2, intro).
- 4-column grid (gap 24px; 2 cols <960px; 1 col <580px) of TeacherCard: name,
  specialization, level, bio, photo slot, accent color (coral/amber/teal/
  raspberry cycling).

### 5. Blog (`#blog`, bg `--surface-raised`)
- Header row + "Все статьи →" link.
- 3-column grid of BlogCard: title, excerpt, category, date, readTime, cover
  photo slot, accent color, href.

### 6. FAQ (`#faq`, bg page)
- Grid `0.85fr 1.15fr`, gap 56px (stacks <960px).
- Left: eyebrow/H2/intro + a raised contact card ("Не нашли ответ?" + primary
  button).
- Right: 5 `<details>` accordion items (`lp-faq-item`), first one open by
  default. Each: white card, 18px radius, hairline border, `shadow-xs`
  (→ `shadow-md` when open); summary row is flex space-between with a 32px
  round chevron badge that rotates 180° and inverts to coral/white when open;
  answer text 16px, max-width 640px, 220ms `ease-soft` transition on shadow
  and icon.

### 7. Footer (bg `--surface-sunken`, top hairline border)
- 4-column grid (`1.6fr 1fr 1fr 1.3fr`, gap 40px; 2 cols <960px; 1 col
  <580px): Brand (logo + blurb + 3 social icons), Курсы links, Школа links,
  Контакты (email/phone/city text).
- Bottom bar: copyright left, privacy/offer links right; 1px top hairline,
  24px top padding.

## Interactions & behavior
- Nav links: underline grows in on hover (soft ease); active link shows
  persistent coral underline.
- Buttons: hover = deepen to `-600` shade + slight lift (-2/-3px); press =
  scale 0.99. Primary buttons carry a coloured coral/amber shadow glow.
- Social icons: fill with brand color + lift on hover.
- Cards (Course/Team/Blog): lift + larger shadow on hover.
- FAQ accordion: native `<details>/<summary>`; only visual affordance is the
  rotating chevron + shadow change — no JS required, but you may want
  single-open-at-a-time behavior in React (controlled state) if desired —
  not implemented in the reference (multiple can be open at once).
- Responsive breakpoints used: 960px (tablet — nav hides behind a burger not
  shown in this artifact, hero stacks, grids collapse to 1–2 cols), 580px
  (mobile — team/footer grids go to 1 column).

## State management
No client state needed beyond the FAQ `<details>` native open/close state
(or a controlled accordion if you want single-open behavior). No forms in
this artifact — CTA buttons link to `#course` anchor (destination not yet
built).

## Assets
- **Logo**: placeholder teal speech-bubble mark with raspberry/amber spark
  — SVG at `source/_ds/.../assets/logo-mark.svg`. Replace with real brand
  logo when available.
- **Founder photo**: empty drop-slot placeholder ("Фото основателя") — needs
  a real photo.
- **Team photos** (`team-anna`, `team-dmitry`, `team-maria`, `team-ivan`) and
  **blog covers** (`blog-fear`, `blog-mistakes`, `blog-habit`): all empty
  placeholder slots — need real imagery.
- **Icons**: Lucide (MIT), 2px stroke, 24×24 grid — install `lucide-react`
  and swap in the referenced icon names (e.g. `mail`) directly.
- **Social glyphs** (Instagram/Telegram/YouTube): simplified placeholder
  marks in the bundle — swap for official brand SVGs in production.

## Copy (exact Russian text)
All headline/body copy is written directly in `source/Landing.dc.html` —
copy verbatim from there section by section; it's the source of truth for
wording, not reproduced in full here to avoid duplication/drift.

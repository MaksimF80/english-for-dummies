# English for Dummies — Design System

A warm, friendly design system for **«English for Dummies»**, an online + offline
English-language school for **adults who are afraid of making mistakes**.

Everything here exists to **lower anxiety**: soft cream surfaces, rounded shapes,
gentle motion, reassuring copy. The system deliberately avoids cold corporate blue,
sterile "startup minimalism", and bank-website seriousness. Reference mood:
*koenigsdeutsch.com* and *deutsch-mit-anna.de*, but warmer and less academic.

> **Sources:** Brief only — no codebase or Figma was provided. Brand colours, name,
> and the Header + Hero structure come from the written brief. Logo, founder copy,
> and imagery are placeholders created here (see Caveats at the bottom).

---

## Content fundamentals

How copy is written for this brand:

- **Language:** Russian (UI), teaching English. Copy is in Russian.
- **Address:** Warm and personal, mostly **«ты»**-adjacent in spirit but written
  inclusively ("учим говорить", "начать можно с любого уровня"). Speak *with* the
  reader, never down to them.
- **Tone:** Reassuring, calm, human. The core promise repeated everywhere:
  *mistakes are not failure.* e.g. «без оценок, без стыда за ошибки»,
  «не бойся ошибаться», «в своём темпе».
- **Casing:** Sentence case everywhere. Eyebrows/labels are the only UPPERCASE
  (tracked), e.g. `О ШКОЛЕ`. Never shout in headlines.
- **Headlines:** Editorial serif, short, emotionally honest:
  «Английский для тех, кто боится ошибаться».
- **Emoji:** **Not used.** Warmth comes from colour, the handwritten font, and the
  smiling logo — not from emoji.
- **Numbers/stats:** Sparingly, and only human ones ("малые группы до 6 человек",
  "20 лет учу говорить"). No vanity metrics.
- **Handwritten asides:** The Caveat font carries the most personal, reassuring
  lines as if jotted by the teacher («20 лет учу говорить»).

---

## Visual foundations

- **Colour:** Coral `#E85550` and amber `#F5A623` lead (primary actions, accents).
  Teal `#2E8B84` and raspberry `#B83050` are **secondary** (from the logo) — for the
  mark, small accents, decoration. Never the main CTA. Backgrounds are warm cream
  `#FEFDF5`. Text is warm near-black ink `#2B2722`, never pure black/grey.
- **Type:** *Newsreader* (warm editorial serif) for display/headings; *Figtree*
  (friendly humanist sans) for body & UI; *Caveat* (handwritten) for reassuring
  asides. See Caveats re: fonts.
- **Backgrounds:** Flat warm cream. Soft radial coral→amber **blobs** sit behind
  feature imagery for warmth. No harsh gradients, no dark hero, no stock-photo
  full-bleed by default. A hand-drawn amber **underline scribble** emphasises key
  words.
- **Imagery:** Warm, real, human (founder/teacher photos). Framed in generously
  rounded corners (`--radius-2xl`, 40px) with a soft shadow and an overlapping
  white "sticker" note. Cool/B&W imagery is off-brand.
- **Shape & radii:** Generous, friendly rounding. Buttons are full pills;
  cards 18px; images up to 40px. Nothing sharp-cornered.
- **Shadows:** Soft, low-contrast, **warm-tinted** (rgba of the ink colour), never
  hard or grey. Coloured coral/amber glows under primary buttons.
- **Borders:** Hairline warm `#E7E1CF`. Used lightly — surfaces separate by colour
  and shadow more than by lines.
- **Motion:** Gentle and reassuring. Soft easing (`--ease-soft`, `--ease-out`),
  140–360ms. Hover = lift (translateY -2/-3px) + colour deepen. Press = subtle
  shrink (scale .99 / translateY 1px). **No bounce, no jarring spring.** Underlines
  grow in on hover.
- **Hover states:** Buttons deepen to the `-600` shade; social icons fill with brand
  colour and lift; nav links grow an underline; cards lift with a larger shadow.
- **Transparency/blur:** Sticky header uses translucent cream + `backdrop-filter:
  blur(10px)`. Used only for the header.
- **Layout:** Centred container, `--container-max` 1200px, 32px gutters (20px
  mobile). Hero splits 50/50 on desktop, stacks on mobile.

---

## Iconography

- **System:** **Lucide** (MIT) — rounded caps/joins, 2px stroke, 24×24 grid. This
  matches the soft, friendly brand. Delivered as the `Icon` React component with an
  inline glyph set (no runtime dependency); also available on CDN
  (`lucide` / `lucide-react`) if a consumer needs the full set.
- **Brand/social glyphs:** instagram, telegram, youtube are simplified marks drawn
  in the same stroke style (the school's primary channels). Substitute the official
  brand SVGs in production if exact logos are required (**flagged**).
- **Emoji:** Never used as icons.
- **Logo mark:** A teal speech bubble with a reassuring smile and a raspberry+amber
  "spark" — conversation + positivity. Lives at `assets/logo-mark.svg` and as the
  `Logo` / `LogoMark` components (token-coloured, adapts to dark surfaces).

---

## Index / manifest

**Root**
- `styles.css` — global entry (consumers link this). `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`,
  `fonts.css`, `base.css`.
- `assets/` — `logo-mark.svg`.
- `SKILL.md` — Agent-Skills-compatible usage guide.

**Foundations** (`foundations/`) — Design System tab specimen cards
- Colors: primary, secondary, neutrals, semantic
- Type: display, body, accent, scale
- Spacing: scale, radii, shadows
- Brand: logo

**Components** (`components/core/`) — reusable React primitives
- `Icon`, `Logo` / `LogoMark`, `Button`, `NavLink`, `SocialIcon`, `Badge`, `Card`,
  `CourseCard`, `TeacherCard`, `BlogCard`
- Each has `.jsx` + `.d.ts` + `.prompt.md`; cards: buttons, nav-social,
  badges-card, icons, coursecard, teachercard, blogcard.

**UI kits** (`ui_kits/`)
- `landing/` — landing-page screens: `Header` (desktop), `MobileHeader` (burger),
  `Hero` (the "О нас"/About split), `Courses` (course grid), `Team` (Команда grid),
  `Blog` (Блог grid).
  `index.html` shows the full flow (desktop + mobile); `courses.html`, `team.html`,
  and `blog.html` show those sections on their own.

**Templates** (`templates/`) — copy-to-start artifacts for consuming projects
- `landing/Landing.dc.html` — responsive Header + Hero starting screen, built on
  the system's components (`ds-base.js` wires the styles + bundle).

---

## Caveats

- **Fonts are Google Fonts substitutions** (Newsreader / Figtree / Caveat), loaded
  via CDN `@import`. No brand fonts were provided — swap in licensed binaries +
  `@font-face` for production/offline.
- **Logo is an original placeholder** created from the brief (teal speech bubble +
  raspberry/amber spark). Replace with the real brand logo when available.
- **Founder photo is an empty drop-slot** (`Фото основателя`) and the founder name
  «Анна Морозова» is placeholder copy.
- **Social glyphs** are simplified marks — use official brand assets in production.

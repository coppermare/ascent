# Design system — Ascent

> Last updated: 2026-05-11
> Visual system for the Ascent marketing site. Pair with [`BRIEF.md`](BRIEF.md) for tone and positioning.

---

## 1. Principles

- **Precise, confident, unhurried.** Whitespace and hierarchy carry weight; nothing decorative earns its place unless it carries meaning.
- **One dominant action per screen.** Primary colour `#5A4FCF` is reserved for that single action.
- **Editorial typography.** Display sizes use light/normal weights — contrast comes from size and spacing, not boldness.
- **Warm off-white canvas.** `#FAF9F6` softens the otherwise minimal palette.
- **Grain on impact only.** Shader-backed gradients live on heroes and closing CTAs, never behind body content.
- **Accessibility first.** 44px minimum touch targets; never rely on colour alone to convey state.

---

## 2. Tokens

### 2.1 Colour

| Token | Hex | Role |
| --- | --- | --- |
| Primary | `#5A4FCF` | CTAs, active nav, key interactive elements |
| Primary Hover | `#4840B8` | Hover state for primary buttons and links |
| Primary Subtle | `#EAE8FA` | Tint behind primary-coloured text, badges |
| Background | `#FAF9F6` | Page background — warm off-white |
| Surface | `#F5F1EA` | Cards, sidebar panels, grouped content |
| Border | `#E4E4E7` | Dividers, input borders, card outlines |
| Heading Text | `#0A0A0A` | H1 through H3, strong emphasis |
| Body Text | `#3F3F46` | Paragraphs, descriptions, general copy |
| Secondary Text | `#71717A` | Labels, meta, timestamps, supporting copy |
| Muted / Disabled | `#A1A1AA` | Disabled states, placeholder text, captions |
| Success | `#16A34A` | Confirmations, completed states |
| Warning | `#D97706` | Alerts, non-critical notices |
| Error | `#DC2626` | Validation errors, destructive actions |

### 2.2 Typography

Font family: **Geist Sans** for headings and body, **Geist Mono** for code only.
Fallback stack: `'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

| Role | Size | Weight | Tailwind | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Hero | 64px | 300 | `font-light` | 1.05 | -0.03em |
| H1 | 52px | 300 | `font-light` | 1.05 | -0.02em |
| H2 | 36px | 400 | `font-normal` | 1.15 | -0.02em |
| H3 | 24px | 600 | `font-semibold` | 1.30 | -0.01em |
| H4 | 20px | 600 | `font-semibold` | 1.35 | -0.01em |
| Body | 16px | 400 | `font-normal` | 1.60 | 0 |
| Small | 14px | 400 | `font-normal` | 1.50 | 0 |
| Caption | 12px | 400 | `font-normal` | 1.40 | 0.01em |
| Button | 14px | 600 | `font-semibold` | 1.00 | 0 |
| Code | 13px | 400 | `font-normal` | 1.60 | 0 |

> **Rationale:** Display sizes get `font-light` (300); body gets `font-normal` (400); `font-semibold` (600) is the cap, reserved for H3/H4 and UI labels. Never `font-bold` on headings.

Rules:
- Keep body line length between 55 and 70 characters.
- Apply letter-spacing only at display sizes (≥ 20px). Never on body copy.

### 2.3 Spacing

Base unit **8px**. Scale: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px`.
Vertical padding on full-width sections is never below 64px. When in doubt, add space rather than remove it.

### 2.4 Radius

| Use | Value | Tailwind |
| --- | --- | --- |
| Status dots, inline chips | 2px | — |
| Hairline chips, tight controls | 4px | `rounded-sm` |
| Inputs, buttons | 6px | `rounded-md` |
| Cards, panels, form containers | 8px | `rounded-lg` |
| Large insets (stat blocks, image frames) | 12px | `rounded-xl` |
| Pills, tags, avatars | 9999px | `rounded-full` |

> **Hard rule.** Never exceed 12px on any card or container. `rounded-2xl` and `rounded-3xl` are forbidden.

### 2.5 Elevation

Shadows use black only. Elevation should be felt, not seen.

| Level | Use | Box shadow |
| --- | --- | --- |
| Flat | Default, inline elements | none |
| Card | Cards, dropdowns, tooltips | `0 1px 3px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)` |
| Raised | Hovered cards, popovers | `0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)` |
| Modal | Modals, command palettes | `0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)` |

---

## 3. Components

### 3.1 Buttons

**Primary** — use for the single dominant action per screen.
- Background `#5A4FCF`, text `#FFFFFF`, radius 6px (`rounded-md`), padding `10px 20px`.
- Geist 600 14px.
- Hover `#4840B8`. Focus: outline `2px solid #5A4FCF` offset 2px. Disabled: background `#A1A1AA`.

**Secondary / Ghost** — use for the supporting action next to a primary.
- Transparent background, text `#0A0A0A`, border `1.5px solid #0A0A0A`, radius 6px (`rounded-md`).
- Hover background `#F5F1EA`. Disabled: text and border `#A1A1AA`.

### 3.2 Input / Form field

- Background `#FFFFFF`, border `1.5px solid #E4E4E7`, radius 6px (`rounded-md`), padding `10px 14px`.
- Geist 400 14px, text `#0A0A0A`. Placeholder `#A1A1AA`.
- Focus: border `#5A4FCF`. Error: border `#DC2626`. Disabled: background `#F5F1EA`, text `#A1A1AA`.

### 3.3 Card

- Background `#FFFFFF`, border `1px solid #E4E4E7`, radius 8px (large insets 12px), padding 24px.
- Card-level shadow at rest, raised shadow on hover. No nested shadows.

### 3.4 Navigation

- Background `#FAF9F6`, border-bottom `1px #E4E4E7`, height 64px, side padding 24px, max-width 1200px centred.
- Wordmark Geist 600 18px `#0A0A0A`. Links 400 14px `#3F3F46`. Active link `#5A4FCF` 600.
- CTA renders a primary button at reduced padding `8px 16px`.
- Below 1024px: collapse to a hamburger that opens a full-width overlay menu.

---

## 4. Layout & responsive

### Containers

| Width | Max | Side padding |
| --- | --- | --- |
| Default | 1200px | 24px |
| Narrow (articles, forms) | 720px | 24px |
| Wide (full-bleed sections) | 100% | 48px |

### Breakpoints

- Mobile `0–639px`
- Tablet `640–1023px`
- Desktop `1024–1279px`
- Large `≥ 1280px`

Touch targets minimum 44×44px. Buttons minimum 48px height on mobile.

| Component | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Navigation | Hamburger, full-screen overlay | Hamburger | Full horizontal nav |
| Card grids | 1 column | 2 columns | 3 columns |
| Hero text | 36px / `font-light` | 48px / `font-light` | 64px / `font-light` |
| Two-column sections | Stack, content first | Stack or 50/50 | Side by side |
| Container padding | 16px | 24px | 24–48px |

---

## 5. Motion

- **Reveal on scroll.** Use `<AnimateIn>` and `<StaggerIn>` from
  `src/components/AnimateIn.tsx` (GSAP under the hood). Default ease is
  unhurried — avoid bouncy or spring easings.
- **Page preloader.** `Preloader.tsx` runs once per session before the first
  paint. Don't add additional intro animations on the page below.
- **Hover feedback.** Card shadow changes from `card` to `raised` over
  `box-shadow 200ms ease`. Avoid scale or rotate transforms on cards.
- **Reduced motion.** Honour `prefers-reduced-motion`; `AnimateIn` already
  short-circuits when set.

---

## 6. Do / Don't

**Do**
- Use `#5A4FCF` for primary CTAs only — one dominant action per screen.
- Use `font-light` (300) for Hero/H1, `font-normal` (400) for H2, `font-semibold` (600) for H3/H4 and UI.
- Keep body line length between 55 and 70 characters.
- Use Surface `#F5F1EA` to visually group related content.
- Reserve success / warning / error tokens for system feedback only.
- Maintain 8px spacing increments throughout.
- Use 44px minimum touch targets on all interactive elements.

**Don't**
- Don't place primary colour on Surface or Card backgrounds.
- Don't use muted text `#A1A1AA` for any interactive element.
- Don't exceed three levels of typographic hierarchy on a single screen.
- Don't use shadows on elements already inside a card.
- Don't add border-radius above 12px except for pills and avatars (`rounded-2xl`, `rounded-3xl` are forbidden).
- Don't use primary colour for decoration — it should always signal action.
- Don't use letter-spacing on body text or anything below 20px.
- Don't apply grain shaders to content sections (cards, tables, forms, text-heavy layouts).
- Don't use icon-only buttons or icon-library components as expand/collapse toggles — use a small inline SVG or plain text glyph styled in secondary text `#71717A`.

---

## 7. Implementation reference

| Concern | File |
| --- | --- |
| Colour and typography custom properties | [`src/app/globals.css`](src/app/globals.css) |
| Root layout, font loading, metadata | [`src/app/layout.tsx`](src/app/layout.tsx) |
| Buttons | [`src/components/Button.tsx`](src/components/Button.tsx) |
| Navigation | [`src/components/Nav.tsx`](src/components/Nav.tsx) |
| Footer | [`src/components/Footer.tsx`](src/components/Footer.tsx) |
| Reveal / stagger primitives | [`src/components/AnimateIn.tsx`](src/components/AnimateIn.tsx) |
| Page header pattern | [`src/components/PageHeader.tsx`](src/components/PageHeader.tsx) |
| Hero shader background | [`src/components/HeroGrainShader.tsx`](src/components/HeroGrainShader.tsx) |
| Closing CTA section | [`src/components/ClosingCTA.tsx`](src/components/ClosingCTA.tsx) |
| Brand wordmark | [`src/components/BrandLogo.tsx`](src/components/BrandLogo.tsx) |

---

## 8. Agent prompt cookbook

Drop-in prompts for generating new sections. They reference this document and
match the typography spec (light/normal display weights, never `font-bold`).

**Colour cheat-sheet**
`Primary #5A4FCF · Primary Hover #4840B8 · Primary Subtle #EAE8FA · Background #FAF9F6 · Surface #F5F1EA · Border #E4E4E7 · Heading #0A0A0A · Body #3F3F46 · Secondary #71717A · Muted #A1A1AA · Success #16A34A · Warning #D97706 · Error #DC2626`

**Hero section**
> Build a hero section using `DESIGN.md`. Full-width, background `#FAF9F6`.
> Headline in Geist `font-light` 64px `#0A0A0A`, max 8 words, tracking `-0.03em`.
> Subheadline in `font-normal` 20px `#3F3F46`, max 15 words. Two buttons:
> primary `#5A4FCF` "Book a Call" and secondary (outlined `#0A0A0A`) "See Our Work".
> Vertical padding 96px. No background image — grain shader optional.

**Feature card grid**
> Build a 3-column card grid using `DESIGN.md`. Each card: background
> `#FFFFFF`, border `1px #E4E4E7`, radius 8px, padding 24px, card-level shadow.
> Card content: icon placeholder 40×40px, H4 Geist `font-semibold` 20px
> `#0A0A0A`, body `font-normal` 16px `#3F3F46`. Stack to 1 column on mobile,
> 2 on tablet. Gap 24px.

**Lead capture section**
> Build a centred lead-capture section using `DESIGN.md`. Background
> `#F5F1EA`, padding `96px 24px`. H2 36px `font-normal` `#0A0A0A`,
> subheadline 16px `font-normal` `#3F3F46`. Email input (border `1.5px #E4E4E7`,
> radius 6px, height 44px) and primary button "Get the Guide" inline on
> desktop, stacked on mobile. Max width 480px, centred.

**Navigation bar**
> Build a nav bar using `DESIGN.md`. Background `#FAF9F6`, border-bottom
> `1px #E4E4E7`, height 64px, max-width 1200px centred, 24px padding. Left:
> wordmark Geist `font-semibold` 18px `#0A0A0A`. Centre: links `font-normal`
> 14px `#3F3F46`, active `#5A4FCF` `font-semibold`. Right: ghost button
> "See Our Work" and primary button "Book a Call". Hamburger below 1024px.

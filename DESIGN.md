# DESIGN.md — Ascent

## 1. Visual Theme & Atmosphere

Ascent is precise, confident, and unhurried. The visual language is clean and
direct: generous whitespace, a sharp typographic hierarchy, and a single strong
primary colour used with restraint. Nothing decorative earns its place unless
it carries meaning. The brand feels like a founder who has done this before,
not a vendor performing expertise.

Key characteristics:
- High contrast between heading and body text creates a clear reading hierarchy
- Primary colour (#5A4FCF) appears sparingly — CTAs, active states, key data points only
- Warm off-white background softens the otherwise minimal palette
- Geist Sans at varying weights does most of the visual work
- Ample negative space signals confidence, not emptiness
- Interactive elements are immediately legible without relying on colour alone
- Grainy gradient shaders on impact sections only — hero, closing CTA, and accent backgrounds
- No decorative gradients or illustrations in content sections

## 2. Colour Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Primary | #5A4FCF | CTAs, active nav, key interactive elements |
| Primary Hover | #4840B8 | Hover state for primary buttons and links |
| Primary Subtle | #EAE8FA | Backgrounds behind primary-coloured text, badges |
| Background | #FAF9F6 | Page background — warm off-white |
| Surface | #F5F1EA | Cards, sidebar panels, grouped content |
| Border | #E4E4E7 | Dividers, input borders, card outlines |
| Heading Text | #0A0A0A | H1 through H3, strong emphasis |
| Body Text | #3F3F46 | Paragraphs, descriptions, general copy |
| Secondary Text | #71717A | Labels, meta, timestamps, supporting copy |
| Muted / Disabled | #A1A1AA | Disabled states, placeholder text, captions |
| Success | #16A34A | Confirmations, completed states |
| Warning | #D97706 | Alerts, non-critical notices |
| Error | #DC2626 | Validation errors, destructive actions |

## 3. Typography — Geist Sans

Font family: Geist Sans for headings and body. Geist Mono for code blocks only.
Fallback: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

| Role | Size (px) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Hero | 64px | 700 | 1.05 | -0.03em |
| H1 | 48px | 700 | 1.10 | -0.02em |
| H2 | 36px | 700 | 1.15 | -0.02em |
| H3 | 24px | 600 | 1.30 | -0.01em |
| H4 | 20px | 600 | 1.35 | -0.01em |
| Body | 16px | 400 | 1.60 | 0 |
| Small | 14px | 400 | 1.50 | 0 |
| Caption | 12px | 400 | 1.40 | 0.01em |
| Button | 14px | 600 | 1.00 | 0.01em |
| Code | 13px | 400 | 1.60 | 0 |

Principles:
- Never use more than two weights in a single component
- Keep body copy line length between 55 and 70 characters
- Use letter-spacing only at display sizes, never on body copy

## 4. Component Stylings

### Buttons

Primary: background #5A4FCF, color #FFFFFF, border-radius 4px, padding 10px 20px,
font Geist 600 14px. Hover: #4840B8. Focus: outline 2px solid #5A4FCF offset 2px.
Disabled: background #A1A1AA.

Secondary: transparent background, color #0A0A0A, border 1.5px solid #0A0A0A,
border-radius 4px. Hover: background #F5F1EA. Disabled: color and border #A1A1AA.

Ghost: transparent background, color #5A4FCF, border 1.5px solid #5A4FCF,
border-radius 8px. Hover: background #EAE8FA.

### Cards
background #FFFFFF, border 1px solid #E4E4E7, border-radius 6px, padding 24px,
shadow: 0 1px 3px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04).
Hover: shadow 0 4px 16px rgba(0,0,0,0.08).

### Input / Form Field
background #FFFFFF, border 1.5px solid #E4E4E7, border-radius 4px, padding 10px 14px,
Geist 400 14px, color #0A0A0A. Focus: border #5A4FCF. Error: border #DC2626.
Disabled: background #F5F1EA, color #A1A1AA. Placeholder: #A1A1AA.

### Navigation
background #FAF9F6, border-bottom 1px #E4E4E7, height 64px, padding 0 24px.
Logo: Geist 600 18px #0A0A0A. Links: 400 14px #3F3F46. Active: #5A4FCF 600.
CTA: primary button at reduced padding 8px 16px.
Mobile: collapse to hamburger at < 1024px, full-width overlay menu.

## 5. Layout Principles

Spacing scale (base 8px): 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px

Container widths:
- Default: 1200px max, 24px side padding
- Narrow (articles, forms): 720px max
- Wide (full-bleed sections): 100%, 48px side padding

Border radius:
- Inputs, buttons: 4px
- Cards, panels: 6px
- Modals: 8px
- Pills, avatars: 9999px

Sections breathe. Vertical padding on full-width sections never below 64px.
When in doubt, add space rather than remove it.

## 6. Depth & Elevation

| Level | Use | Box Shadow |
|---|---|---|
| Flat | Default, inline elements | none |
| Card | Cards, dropdowns, tooltips | 0 1px 3px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04) |
| Raised | Hovered cards, popovers | 0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04) |
| Modal | Modals, command palettes | 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06) |

Shadows use black only. Elevation should be felt, not seen.

## 7. Do's and Don'ts

Do:
- Use #5A4FCF for primary CTAs only — one dominant action per screen
- Use Geist 700 for headings, 400 for all body copy
- Keep body line length between 55 and 70 characters
- Use surface (#F5F1EA) to visually group related content
- Reserve success / warning / error tokens for system feedback only
- Maintain 8px spacing increments throughout
- Use 44px minimum touch targets on all interactive elements

Don't:
- Don't place primary on surface or card backgrounds
- Don't use muted text (#A1A1AA) for any interactive element
- Don't exceed 3 levels of typographic hierarchy on a single screen
- Don't use shadows on elements already inside a card
- Don't add border-radius above 16px except for pills and avatars
- Don't use primary colour for decoration — it should always signal action
- Don't use letter-spacing on body text or anything below 20px
- Don't apply grain shaders to content sections (cards, tables, forms, text-heavy layouts)

## 8. Responsive Behaviour

Breakpoints:
- Mobile: 0 to 639px
- Tablet: 640 to 1023px
- Desktop: 1024 to 1279px
- Large: 1280px and above

Touch targets: minimum 44x44px. Buttons minimum 48px height on mobile.

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navigation | Hamburger, full-screen overlay | Hamburger | Full horizontal nav |
| Card grids | 1 column | 2 columns | 3 columns |
| Hero text | 36px / 700 | 48px / 700 | 64px / 700 |
| Two-column sections | Stack, content first | Stack or 50/50 | Side by side |
| Container padding | 16px | 24px | 24px to 48px |

## 9. Agent Prompt Guide

Colour cheat-sheet:
Primary #5A4FCF | Primary Hover #4840B8 | Primary Subtle #EAE8FA
Background #FAF9F6 | Surface #F5F1EA | Border #E4E4E7
Heading #0A0A0A | Body #3F3F46 | Secondary #71717A | Muted #A1A1AA
Success #16A34A | Warning #D97706 | Error #DC2626

Hero section:
Build a hero section using DESIGN.md. Full-width, background #FAF9F6. Headline
in Geist 700 64px #0A0A0A, max 8 words. Subheadline in 400 20px #3F3F46, max
15 words. Two buttons: primary (#5A4FCF) "Book a Call" and secondary (outlined
#0A0A0A) "See Our Work". Vertical padding 96px. No background image.

Feature card grid:
Build a 3-column card grid using DESIGN.md. Each card: background #FFFFFF,
border 1px #E4E4E7, border-radius 12px, padding 24px, card-level shadow.
Card content: icon placeholder 40x40px, H4 Geist 600 20px #0A0A0A, body
400 16px #3F3F46. Stack to 1 column mobile, 2 tablet. Gap 24px.

Lead capture section:
Build a centred lead capture section using DESIGN.md. Background #F5F1EA,
padding 96px 24px. H2 36px 700 #0A0A0A, subheadline 16px 400 #3F3F46.
Email input (border 1.5px #E4E4E7, radius 8px, height 44px) and primary button
"Get the Guide" inline on desktop, stacked on mobile. Max width 480px, centred.

Navigation bar:
Build a nav bar using DESIGN.md. Background #FAF9F6, border-bottom 1px #E4E4E7,
height 64px, max-width 1200px centred, 24px padding. Left: wordmark Geist 600
18px #0A0A0A. Centre: links 400 14px #3F3F46, active #5A4FCF 600. Right: ghost
button "See Our Work" and primary button "Book a Call". Hamburger at < 1024px.

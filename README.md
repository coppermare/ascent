# Ascent

Marketing site for Ascent — a fictional AI-native growth agency for Series A/B startups. Built as a live case study for the article **[Zero to Live: How to Build a Website With AI That Doesn't Look Like Slop](https://kristikumrija.com/ideas/zero-to-live-how-to-build-a-website-with-ai-that-doesnt-look-like-slop)**.

The site demonstrates that AI-generated websites only look generic when the AI is given nothing to work from. Starting with a positioning brief, brand system, and design spec — before writing a single line of code — produces results that don't look templated.

Live at **[ascent-up.vercel.app](https://ascent-up.vercel.app)**

See [`BRIEF.md`](BRIEF.md) for the full positioning and [`DESIGN.md`](DESIGN.md) for the visual system.

## What this repo is

This is the complete source for Ascent — homepage, services, case studies, insights, FAQ, booking, and contact — built entirely with Claude Code following the process described in the article. Key decisions:

- **Brief first.** `BRIEF.md` documents the value proposition, target audience, tone, and CTAs before any code was written. This is what prevents AI from filling gaps with clichés.
- **Design system second.** `DESIGN.md` locks down the colour palette, typography hierarchy, spacing, and component rules. Claude Code reads it on every task.
- **Custom visuals.** Every image was generated with GPT Image 2 or sourced intentionally — no stock photography.
- **Manual refinement last.** The final 20% (spacing, mobile states, imagery placement) required human judgment that no prompt can fully capture.

## Stack

- **Next.js 16** — App Router, MDX, sitemap, image optimisation
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4** (PostCSS pipeline)
- **GSAP** for reveal animations
- **@paper-design/shaders-react** for grainy gradient shaders
- **@phosphor-icons/react** for iconography

## Local development

```bash
npm install
cp .env.example .env.local   # populate as needed
npm run dev                  # http://localhost:3000
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | ESLint (Next.js config) |

## Folder map

```
src/
  app/            App Router routes — one folder per URL segment
    insights/     Long-form writing (renders MDX from content/blog)
    work/         Case studies (data in src/data/case-studies.ts)
    services/    about/    book/    contact/    faq/    privacy/    terms/
    layout.tsx   globals.css   sitemap.ts   not-found.tsx   error.tsx
  components/     Shared React components (Nav, Footer, shaders, forms, …)
  data/           Typed content collections (case studies, post index)
  lib/            Small utilities (e.g. site URL helper)
content/
  blog/           MDX bodies for /insights articles
public/           Static assets — logo, OG image, hero/case-study images
docs/             Competitor research and other long-form notes
BRIEF.md          Positioning and tone (kept at root for visibility)
DESIGN.md         Visual system spec (kept at root for visibility)
```

## Conventions

- **Read `AGENTS.md` before changing code.** Next.js 16 has breaking changes from what's in most model training data — check `node_modules/next/dist/docs/` when in doubt.
- New visual work must match [`DESIGN.md`](DESIGN.md). Hard rules: never `font-bold` on headings; never `rounded-2xl`/`rounded-3xl`; primary colour `#5A4FCF` is for action only.
- `/blog/*` URLs redirect permanently to `/insights/*` (see `next.config.ts`). Don't reintroduce a `/blog` route.

## Deployment

Deployed on Vercel. `main` auto-deploys to production. Security headers and the MDX loader are configured in [`next.config.ts`](next.config.ts).

If a build fails with "Turbopack build failed — module not found" across all components, it's a stale build cache. Fix: `vercel --prod --force`.

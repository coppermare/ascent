# Ascent

Marketing site for Ascent — an AI-native growth agency for Series A/B startups.
The site presents Ascent's services, case studies, and writing, and converts
qualified founders into discovery calls.

See [`BRIEF.md`](BRIEF.md) for the full positioning and
[`DESIGN.md`](DESIGN.md) for the visual system.

## Stack

- **Next.js 16** — App Router, MDX, sitemap, Image optimisation
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

Scripts:

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

- **Read `AGENTS.md` before changing code.** Next.js 16 has breaking changes
  from what's in most model training data — check `node_modules/next/dist/docs/`
  when in doubt.
- New visual work must match [`DESIGN.md`](DESIGN.md). Notable hard
  rules: never `font-bold` on headings; never `rounded-2xl`/`rounded-3xl`;
  primary colour `#5A4FCF` is for action only.
- `/blog/*` URLs redirect permanently to `/insights/*` (see
  `next.config.ts`). Don't reintroduce a `/blog` route.

## Deployment

Deployed on Vercel. `main` auto-deploys to production. Security headers and
the MDX loader are configured in [`next.config.ts`](next.config.ts).

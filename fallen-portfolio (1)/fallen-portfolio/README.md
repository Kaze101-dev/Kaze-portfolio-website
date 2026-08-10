# Fallen — Portfolio

Personal site for Fallen — Lead Systems Architect & Operations Manager,
developer across TimeNetwork and Solaryn Network, pentester, and game
developer. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and
Framer Motion.

## Stack

- **Next.js 14** — App Router, per-page metadata, static generation
- **TypeScript**
- **Tailwind CSS** — custom navy/blue theme, no default palette
- **Framer Motion** — scroll reveals, hero diagram, mobile nav transition
- **next/font** — Space Grotesk (display), Inter (body), JetBrains Mono (labels/data)

## Project structure

```
fallen-portfolio/
├── app/
│   ├── layout.tsx          # Root layout: fonts, global metadata, Navbar/Footer shell
│   ├── globals.css         # Base styles, focus states, selection color
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── projects/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx        # Empty state, ready for future posts
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Container.tsx
│   ├── SectionHeader.tsx
│   ├── ProjectCard.tsx
│   ├── TimelineItem.tsx
│   ├── StatusBadge.tsx
│   ├── NetworkGraphic.tsx   # Animated hero diagram
│   └── RevealSection.tsx    # Scroll-reveal wrapper (respects prefers-reduced-motion)
├── lib/
│   └── data.ts              # All site copy, nav, experience, projects, contact info
├── public/
│   └── favicon.svg
├── tailwind.config.ts
└── package.json
```

Every piece of editable content — roles, experience entries, projects,
contact details, site name/description — lives in `lib/data.ts`. You
shouldn't need to touch page files to update copy.

### Before you launch this

Two things in `lib/data.ts` are best-guess placeholders because the brief
didn't include exact values — update them before going live:

- `contact.email` (currently `hello@fallen.dev`)
- `contact.discord` / `contact.discordDisplay` (currently `fallen` / `@fallen`)
- `site.url` (currently `https://fallen.dev`) — set to your real domain once you have one, since it feeds the sitemap, robots.txt and Open Graph tags

## Run it locally

Requires Node.js 18.17 or later.

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
```

> Note: `next/font/google` fetches font files at build time, so `npm run
> build` needs internet access the first time (fonts are then cached
> locally). This is normal for any Next.js project using Google Fonts.

## Static export

This site has no server-only features (no API routes, no per-request data),
so `next.config.mjs` builds it as a fully static export:

```js
output: "export",
trailingSlash: true,
```

Running `npm run build` produces a plain static site in `out/` — every
route as `index.html`, plus a real `404.html` — no Node server required to
host it. This is what makes Netlify deploys simple and is why the
instructions below don't need any Next.js runtime plugin.

## Deploy to Netlify

A `netlify.toml` is already included:

```toml
[build]
  command = "npm run build"
  publish = "out"
```

1. Push this project to a GitHub repository.
2. In Netlify, **Add new site → Import an existing project** and pick the repo.
3. Netlify reads `netlify.toml` automatically — build command `npm run
   build`, publish directory `out`. You shouldn't need to touch these
   fields, but if the dashboard shows something different (e.g. an empty
   publish directory, or a leftover setting from an earlier failed
   attempt), override it to match the two values above.
4. Deploy. If a previous deploy is stuck showing a stale config, use
   **Trigger deploy → Clear cache and deploy site** to force it to re-read
   `netlify.toml`.

If you'd previously connected this repo before `netlify.toml` existed,
Netlify may have cached the old (broken) settings — check **Site settings
→ Build & deploy → Build settings** and confirm publish directory is `out`.

## Deploy to Vercel

**Option A — via the Vercel dashboard**

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — leave the default build settings
   (`next build`, output handled automatically).
4. Click **Deploy**.

**Option B — via the CLI**

```bash
npm install -g vercel
vercel login
vercel        # preview deploy
vercel --prod # production deploy
```

Once deployed, update `site.url` in `lib/data.ts` to match your production
domain and redeploy, so the sitemap and Open Graph metadata point to the
right place.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Fallen portfolio"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `.next`, and local env files.

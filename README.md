<div align="center">

# Starfolio

**A modern, minimal Astro portfolio template** - built with Astro v6, React, Tailwind CSS v4, shadcn/ui, and MDX. Edit three files, deploy anywhere.

[![Astro](https://img.shields.io/badge/Astro-v6-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/webrating/starfolio)

[**Live Demo**](https://websiterating.com/astro-portfolio-template/) · [Report Bug](https://github.com/webrating/starfolio/issues) · [Request Feature](https://github.com/webrating/starfolio/issues)

![Starfolio preview](./public/starfolio-preview.png)

</div>

## Why Starfolio?

A developer portfolio template that doesn't make you hunt through twenty component files to change your name. Your entire portfolio - bio, work history, projects, skills, hackathons, social links - lives in a single typed data file. The components read from it. You never touch them.

**TL;DR: Edit three config files, deploy in minutes**

## Features

- **Astro v6** - static-first, ships zero JS by default
- **Three-file customization** - edit your data, config, and posts; never touch components
- **Homepage customization** - show/hide sections, control all of the homepage content, + lots more
- **Tailwind CSS v4 + shadcn/ui** - modern, accessible UI primitives
- **Light & dark mode** - automatic system detection, theme variables in one place
- **MDX blog** - full MDX with components, syntax highlighting, code blocks
- **SEO-ready** - meta tags, Open Graph images, sitemap, robots.txt
- **Type-safe** - TypeScript throughout, including your resume data
- **Variable fonts** - swap fonts in seconds via Fontsource
- **Responsive design** - mobile-first, looks great everywhere
- **Cloudflare Pages adapter** - pre-configured, swappable for Vercel / Netlify / Node

## Three files, one portfolio

| File | Controls |
| --- | --- |
| `src/data/resume.tsx` | Your name, bio, work, education, projects, skills, hackathons, social links |
| `src/data/config.ts` | Site URL, SEO, theme colors, font size |
| `src/content/blog/*.mdx` | Blog posts |

## Stack

- [Astro v6](https://astro.build) - static site generator
- [React](https://react.dev) - interactive islands
- [Tailwind CSS v4](https://tailwindcss.com) - styling
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [Cloudflare Pages](https://pages.cloudflare.com) - deployment adapter (swappable)
- [pnpm](https://pnpm.io) - package manager

## Quick start

**Prerequisites:** Node.js >= 22.12.0, pnpm

```bash
git clone https://github.com/webrating/starfolio
cd starfolio
pnpm install
pnpm dev
```

Open <http://localhost:4321>.

## Customizing your portfolio

### 1. Personal info - `src/data/resume.tsx`

Edit the `DATA` object:

```ts
export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yoursite.com",
  location: "Your City",
  description: "One-line bio shown in meta and hero",
  summary: "Longer about section, supports markdown links",
  avatarUrl: "/me.png",        // place image in public/
  ogImage: "/og_image.png",    // OG image for social sharing
  skills: [...],
  navbar: [...],
  contact: { email, social },
  work: [...],
  education: [...],
  projects: [...],
  hackathons: [...],
}
```

Replace the placeholder logos in `public/` with your own.

### 2. Site settings - `src/data/config.ts`

```ts
export const CONFIG = {
  site: {
    url: "https://yoursite.com",   // must match astro.config.mjs site
    locale: "en_US",
    twitterHandle: "@yourhandle",
  },
  seo: {
    titleTemplate: "%s | %n",      // %s = page title, %n = your name
    twitterCard: "summary_large_image",
    robots: "index, follow",
  },
  typography: {
    baseFontSize: 100,             // 100 = default, 110 = 10% larger
  },
  theme: {
    radius: "0.625rem",
    light: { background, primary, ... },
    dark:  { background, primary, ... },
  },
}
```

**Changing theme colors:** grab any theme from [ui.shadcn.com/themes](https://ui.shadcn.com/themes) or [tweakcn.com](https://tweakcn.com), copy the CSS variables, and paste them into the `light` / `dark` blocks (strip the `--` prefix, camelCase the property names e.g. `card-foreground` → `cardForeground`).

**Changing font size:** set `baseFontSize` to a percentage - `115` = 15% larger across all text, headings, and links at once.

### 3. Blog posts - `src/content/blog/`

Create a `.mdx` file with this frontmatter:

```mdx
---
title: "Your Post Title"
publishedAt: "2025-01-01"
summary: "One-line description shown in the post list."
image: "https://..."   # optional cover image
---

Your content here. Full MDX - components, code blocks, everything.
```

## Changing fonts

1. Find a variable font at [fontsource.org](https://fontsource.org) (filter by Variable)
2. Install it: `pnpm add @fontsource-variable/<font-name>`
3. In `src/styles/global.css`, swap the `@import` and `--font-sans` value:

```css
@import "@fontsource-variable/inter";
--font-sans: 'Inter Variable', sans-serif;
```

You need both a sans and a mono font. The mono font (`--font-mono`) is used for code blocks. Not every sans font has a matching mono - common pairings:

| Sans | Mono |
| --- | --- |
| `geist` | `geist-mono` |
| `inter` | `jetbrains-mono` |
| `plus-jakarta-sans` | `fira-code` |

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |

## Deployment

Pre-configured for **Cloudflare Workers or Pages** via `@astrojs/cloudflare`. Run `pnpm build` and deploy the `dist/` folder.

To use a different host, swap the adapter in `astro.config.mjs` - see [Astro adapters](https://docs.astro.build/en/guides/deploy/).

Starfolio works with any Astro-supported deploy target: **Vercel**, **Netlify**, **Cloudflare Pages**, **GitHub Pages**, **Node**, or static hosting.

## Project structure

```
src/
├── content/blog/     # MDX blog posts
├── data/
│   ├── resume.tsx    # Your personal data
│   └── config.ts     # Site settings & theme
├── components/       # UI components (no need to edit)
├── layouts/
│   └── Layout.astro  # HTML shell, reads from config.ts
├── pages/
│   ├── index.astro
│   └── blog/
└── styles/
    └── global.css    # Font imports & Tailwind base
public/               # Static assets (images, favicon)
```

## Contributing

Issues and PRs welcome. If you build something with Starfolio, open an issue with a link - happy to feature it in a "Built with Starfolio" section.

## Show your support

If this template saved you time, please **star the repo** - it helps others find it.

## Credits

- [dillionverma/portfolio](https://github.com/dillionverma/portfolio) - the original, and AMAZING, Next.js portfolio this template is inspired by
- [Astro](https://astro.build), [shadcn/ui](https://ui.shadcn.com), [Tailwind CSS](https://tailwindcss.com)

## License

[MIT](LICENSE) - free for personal and commercial use.

---

<div align="center">

**Keywords:** astro portfolio template · astro portfolio theme · astro starter · personal website template · developer portfolio · resume website · astro shadcn template · tailwind portfolio · mdx blog template

</div>
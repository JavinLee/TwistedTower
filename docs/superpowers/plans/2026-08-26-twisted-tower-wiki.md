# Twisted Tower Wiki Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static multilingual Twisted Tower fan wiki with a reference-inspired home page, guide directory, and MDX walkthrough article.

**Architecture:** Use a Next.js App Router application with locale as the first route segment. Keep translated UI/data in TypeScript modules and store article content as local MDX files. Server components resolve each locale and content slug, then render reusable layout components with static data.

**Tech Stack:** Next.js 15, React 19, TypeScript 5, `@next/mdx`, `next-mdx-remote`, `gray-matter`, CSS Modules-free global CSS, Vitest, Testing Library.

## Global Constraints

- Use `fireteamelite2.wiki` as the page-layout reference only; do not copy its brands, visual assets, or copy.
- Use the documented Twisted Tower palette: light background, deep-purple primary, dark red-orange emphasis.
- Support `/en` and `/es`; redirect `/` to `/en`.
- Use local MDX and static data; do not add a database, CMS, live API, login, or fake real-time metrics.
- Supply complete English walkthrough content; Spanish article pages may fall back to English MDX content while UI chrome is translated.
- Deliver usable layouts at desktop, tablet, and mobile widths.

---

## File Map

- `package.json`: scripts and application dependencies.
- `next.config.mjs`: MDX integration.
- `tsconfig.json`: strict TypeScript configuration plus `@/*` alias.
- `vitest.config.ts`, `tests/setup.ts`: test runner setup.
- `src/app/layout.tsx`: global document wrapper and metadata.
- `src/app/page.tsx`: root locale redirect.
- `src/app/[locale]/layout.tsx`: locale validation and shared header/footer.
- `src/app/[locale]/page.tsx`: home route.
- `src/app/[locale]/guides/page.tsx`: guide directory route.
- `src/app/[locale]/guides/[slug]/page.tsx`: MDX detail route and static params.
- `src/components/*.tsx`: visual components with isolated inputs.
- `src/lib/i18n.ts`: locale types, translations, localized data.
- `src/lib/guides.ts`: guide cards and MDX/front-matter loading.
- `src/content/guides/en/walkthrough.mdx`: first complete MDX article.
- `src/styles/globals.css`: all global, responsive site styling.
- `tests/*.test.tsx`: component and content behavior tests.

### Task 1: Initialize the Next.js and MDX foundation

**Files:**
- Create: `package.json`
- Create: `next.config.mjs`
- Create: `tsconfig.json`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`
- Create: `.gitignore`

**Interfaces:**
- Produces: `npm run dev`, `npm run build`, and `npm run test` commands.
- Produces: `@/*` TypeScript alias and MDX support for `src/content/**/*.mdx`.

- [ ] **Step 1: Create the package manifest**
```json
{
  "name": "twisted-tower-wiki",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run"
  },
  "dependencies": {
    "@next/mdx": "^15.5.2",
    "@mdx-js/loader": "^3.1.0",
    "@mdx-js/react": "^3.1.0",
    "gray-matter": "^4.0.3",
    "next": "^15.5.2",
    "next-mdx-remote": "^5.0.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.8.0",
    "@testing-library/react": "^16.3.0",
    "@types/node": "^22.15.0",
    "@types/react": "^19.1.0",
    "@types/react-dom": "^19.1.0",
    "jsdom": "^26.1.0",
    "typescript": "^5.8.3",
    "vitest": "^3.2.4"
  }
}
```

- [ ] **Step 2: Add MDX and TypeScript configuration**
```js
// next.config.mjs
import createMDX from "@next/mdx";
const withMDX = createMDX({ extension: /\.mdx?$/ });
export default withMDX({ pageExtensions: ["ts", "tsx", "md", "mdx"] });
```
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022", "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true, "noEmit": true, "module": "esnext", "moduleResolution": "bundler",
    "jsx": "preserve", "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Add test configuration**
```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import path from "node:path";
export default defineConfig({
  test: { environment: "jsdom", setupFiles: ["./tests/setup.ts"] },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } }
});
```
```ts
// tests/setup.ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 4: Install isolated project dependencies**
Run: `C:/Users/Administrator/.workbuddy-ai/binaries/node/versions/22.22.2-1/node.exe C:/Users/Administrator/.workbuddy-ai/binaries/node/workspace/node_modules/npm/bin/npm-cli.js install`
Expected: dependencies are written to `node_modules` and no global packages are installed.

- [ ] **Step 5: Commit**
```bash
git add package.json next.config.mjs tsconfig.json vitest.config.ts tests/setup.ts .gitignore
git commit -m "chore: initialize Next.js MDX wiki"
```

### Task 2: Add typed locales and guide content model

**Files:**
- Create: `src/lib/i18n.ts`
- Create: `src/lib/guides.ts`
- Create: `tests/i18n.test.ts`

**Interfaces:**
- Produces: `Locale = "en" | "es"`, `isLocale(value: string): value is Locale`, `copyFor(locale: Locale)`, and `guidesFor(locale: Locale)`.
- Produces: `GuideCard` with fields `slug`, `number`, `title`, `description`, `status`.

- [ ] **Step 1: Write locale test**
```ts
import { describe, expect, it } from "vitest";
import { isLocale, copyFor } from "@/lib/i18n";

describe("i18n", () => {
  it("only accepts supported locale identifiers", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("es")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });
  it("returns Spanish navigation copy", () => {
    expect(copyFor("es").nav.guides).toBe("Guías");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**
Run: `npm run test -- tests/i18n.test.ts`
Expected: FAIL because `src/lib/i18n.ts` does not exist.

- [ ] **Step 3: Implement translations and guide cards**
```ts
// src/lib/i18n.ts
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
export const copyFor = (locale: Locale) => locale === "es" ? {
  nav: { home: "Inicio", guides: "Guías", steam: "Steam" },
  labels: { startHere: "Empieza aquí", missionIntel: "Información de misión", planned: "Próximamente" }
} : {
  nav: { home: "Home", guides: "Guides", steam: "Steam" },
  labels: { startHere: "Start Here", missionIntel: "Mission Intel", planned: "Planned guide" }
};
```
```ts
// src/lib/guides.ts
import type { Locale } from "@/lib/i18n";
export type GuideCard = { slug: string; number: string; title: string; description: string; status: "published" | "planned" };
const english: GuideCard[] = [
  { slug: "walkthrough", number: "01", title: "Complete Walkthrough", description: "Follow the route through all five areas, key items, gates, and difficult progression points.", status: "published" },
  { slug: "puzzle-solutions", number: "02", title: "Puzzle Solutions", description: "Find switch orders, clues, keys, and every major environmental solution.", status: "planned" },
  { slug: "bosses", number: "03", title: "Boss Guide", description: "Learn attack patterns, weaknesses, recommended weapons, and phase-by-phase tactics.", status: "planned" },
  { slug: "collectibles", number: "04", title: "Collectibles & Secrets", description: "Track hidden items, secret areas, and missable discoveries by location.", status: "planned" },
  { slug: "weapons", number: "05", title: "Weapons & Movement", description: "Compare weapons, upgrades, traversal toys, and practical combat uses.", status: "planned" },
  { slug: "achievements", number: "06", title: "Achievements", description: "Check unlock conditions, chapter timing, and missable achievements.", status: "planned" },
  { slug: "story", number: "07", title: "Story & Ending", description: "Read a spoiler-aware guide to the characters, story beats, and ending.", status: "planned" },
  { slug: "steam", number: "08", title: "Steam Details", description: "Review release information, platforms, requirements, demo status, and price notes.", status: "planned" }
];
export const guidesFor = (_locale: Locale) => english;
```

- [ ] **Step 4: Run the test to verify it passes**
Run: `npm run test -- tests/i18n.test.ts`
Expected: PASS with 2 tests.

- [ ] **Step 5: Commit**
```bash
git add src/lib/i18n.ts src/lib/guides.ts tests/i18n.test.ts
git commit -m "feat: add multilingual guide data"
```

### Task 3: Build MDX content loading and walkthrough source

**Files:**
- Create: `src/content/guides/en/walkthrough.mdx`
- Create: `src/lib/mdx.ts`
- Create: `src/components/Callout.tsx`
- Create: `tests/mdx.test.ts`

**Interfaces:**
- Produces: `getGuide(slug: string)` returning `{ frontmatter, source } | null`.
- Produces: `Callout({ kind, children })` MDX component with `kind: "tip" | "warning"`.

- [ ] **Step 1: Write failing guide lookup test**
```ts
import { describe, expect, it } from "vitest";
import { getGuide } from "@/lib/mdx";

describe("getGuide", () => {
  it("loads walkthrough front matter", () => {
    const guide = getGuide("walkthrough");
    expect(guide?.frontmatter.title).toBe("Twisted Tower Complete Walkthrough");
  });
  it("returns null for an unavailable guide", () => {
    expect(getGuide("bosses")).toBeNull();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**
Run: `npm run test -- tests/mdx.test.ts`
Expected: FAIL because `src/lib/mdx.ts` does not exist.

- [ ] **Step 3: Add MDX guide content**
```mdx
---
title: Twisted Tower Complete Walkthrough
description: Follow the main route through Twisted Tower, including key objectives, gates, puzzle links, and essential preparation.
eyebrow: Complete Route Guide
updatedAt: August 26, 2026
readingTime: 8 min read
toc:
  - id: before-you-enter
    label: Before You Enter
  - id: first-climb
    label: The First Climb
  - id: route-discipline
    label: Route Discipline
  - id: next-steps
    label: Next Steps
---

## Before You Enter

Twisted Tower is a first-person action-adventure horror shooter set inside an abandoned 1950s resort. Your first priority is to learn the route, preserve useful resources, and read each area before pushing forward.

<Callout kind="tip">Use this walkthrough as a route companion. When a locked gate or switch sequence becomes the main obstacle, open the dedicated puzzle guide instead of guessing.</Callout>

## The First Climb

Start by checking the immediate approach for readable signs, reachable doors, and any key item that clearly unlocks the next route. Commit the intended direction to memory before exploring side rooms so you can return to the critical path without losing track of progress.

## Route Discipline

Each of the five main areas combines combat, exploration, and environmental obstacles. Clear the immediate threat, inspect the available interactions, then follow the newest route-opening item or clue. Save optional searches for a short sweep after the next checkpoint.

<Callout kind="warning">Story and secret routes may include spoilers. Use the story guide only after completing the chapter you are currently exploring.</Callout>

## Next Steps

Continue with the <a href="/en/guides/puzzle-solutions">Puzzle Solutions</a> guide for blocked progression points, then review the weapons guide before a boss encounter.
```

- [ ] **Step 4: Implement local MDX loading**
```ts
// src/lib/mdx.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
export type GuideFrontmatter = { title: string; description: string; eyebrow: string; updatedAt: string; readingTime: string; toc: { id: string; label: string }[] };
export const getGuide = (slug: string) => {
  const file = path.join(process.cwd(), "src/content/guides/en", `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const parsed = matter(fs.readFileSync(file, "utf8"));
  return { frontmatter: parsed.data as GuideFrontmatter, source: parsed.content };
};
```
```tsx
// src/components/Callout.tsx
import type { ReactNode } from "react";
export function Callout({ kind, children }: { kind: "tip" | "warning"; children: ReactNode }) {
  return <aside className={`callout callout--${kind}`}><strong>{kind === "tip" ? "Route Tip" : "Spoiler Warning"}</strong><div>{children}</div></aside>;
}
```

- [ ] **Step 5: Run test to verify it passes**
Run: `npm run test -- tests/mdx.test.ts`
Expected: PASS with 2 tests.

- [ ] **Step 6: Commit**
```bash
git add src/content/guides/en/walkthrough.mdx src/lib/mdx.ts src/components/Callout.tsx tests/mdx.test.ts
git commit -m "feat: add MDX walkthrough content"
```

### Task 4: Implement shell, home, and guide-directory pages

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/[locale]/layout.tsx`
- Create: `src/app/[locale]/page.tsx`
- Create: `src/app/[locale]/guides/page.tsx`
- Create: `src/components/SiteHeader.tsx`
- Create: `src/components/SiteFooter.tsx`
- Create: `src/components/GuideCard.tsx`
- Create: `src/components/HeroSection.tsx`
- Create: `tests/GuideCard.test.tsx`

**Interfaces:**
- Consumes: `Locale`, `copyFor`, and `guidesFor`.
- Produces: localized home and directory UI at `/en`, `/es`, `/en/guides`, and `/es/guides`.

- [ ] **Step 1: Write failing GuideCard test**
```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GuideCard } from "@/components/GuideCard";

describe("GuideCard", () => {
  it("renders a published guide as an internal link", () => {
    render(<GuideCard locale="en" guide={{ slug: "walkthrough", number: "01", title: "Complete Walkthrough", description: "Route", status: "published" }} />);
    expect(screen.getByRole("link", { name: /complete walkthrough/i })).toHaveAttribute("href", "/en/guides/walkthrough");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npm run test -- tests/GuideCard.test.tsx`
Expected: FAIL because `GuideCard` does not exist.

- [ ] **Step 3: Implement reusable site components**
```tsx
// src/components/GuideCard.tsx
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { GuideCard as Guide } from "@/lib/guides";
export function GuideCard({ locale, guide }: { locale: Locale; guide: Guide }) {
  const body = <><span className="guide-card__number">// {guide.number}</span><h3>{guide.title}</h3><p>{guide.description}</p><span className="guide-card__cta">{guide.status === "published" ? "Read guide →" : "Planned guide"}</span></>;
  return guide.status === "published" ? <Link className="guide-card" href={`/${locale}/guides/${guide.slug}`}>{body}</Link> : <article className="guide-card guide-card--planned">{body}</article>;
}
```
```tsx
// src/components/SiteHeader.tsx
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { copyFor } from "@/lib/i18n";
export function SiteHeader({ locale }: { locale: Locale }) { const copy = copyFor(locale); return <header className="site-header"><Link href={`/${locale}`} className="wordmark">TWISTED <em>TOWER</em><small>WIKI</small></Link><nav><Link href={`/${locale}`}>{copy.nav.home}</Link><Link href={`/${locale}/guides`}>{copy.nav.guides}</Link><a href="https://store.steampowered.com/app/1575990/Twisted_Tower/" target="_blank">{copy.nav.steam} ↗</a></nav><Link className="locale-link" href={locale === "en" ? "/es" : "/en"}>{locale === "en" ? "ES" : "EN"}</Link></header>; }
```

- [ ] **Step 4: Implement the routes**
```tsx
// src/app/page.tsx
import { redirect } from "next/navigation";
export default function RootPage() { redirect("/en"); }
```
```tsx
// src/app/[locale]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, copyFor } from "@/lib/i18n";
import { guidesFor } from "@/lib/guides";
import { GuideCard } from "@/components/GuideCard";
export default async function Home({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); const copy = copyFor(locale); return <main><section className="hero"><div><p className="eyebrow">Fan-Made Community Wiki</p><h1>Twisted <i>Tower</i></h1><p className="hero__lead">A first-person action-adventure horror shooter set inside an abandoned 1950s resort.</p><div className="hero__actions"><Link href={`/${locale}/guides/walkthrough`} className="button">Start the Walkthrough</Link><Link href={`/${locale}/guides`} className="button button--quiet">Explore all guides</Link></div></div><div className="hero__art"><span>OFFICIAL<br/>LAUNCH<br/>TRAILER</span></div></section><section className="facts"><div><b>Release Date</b><span>Aug 18, 2026</span></div><div><b>Platform</b><span>PC / Steam</span></div><div><b>Main Areas</b><span>5 Levels</span></div><div><b>Genre</b><span>Horror Shooter</span></div></section><section className="section"><p className="eyebrow">{copy.labels.startHere}</p><h2>Your Twisted Tower Journey</h2><div className="guide-grid">{guidesFor(locale).slice(0,4).map((guide) => <GuideCard key={guide.slug} locale={locale} guide={guide} />)}</div></section><section className="intel"><p className="eyebrow">{copy.labels.missionIntel}</p><h2>What is Twisted Tower?</h2><p>Fight corrupted fairy-tale mascots, solve twisted puzzles, and climb five deadly areas to uncover a forgotten past.</p><dl><div><dt>Developer</dt><dd>Atmos Games</dd></div><div><dt>Publisher</dt><dd>3D Realms</dd></div><div><dt>Achievements</dt><dd>18 on Steam</dd></div><div><dt>Language</dt><dd>English</dd></div></dl></section></main>; }
```

- [ ] **Step 5: Run component test**
Run: `npm run test -- tests/GuideCard.test.tsx`
Expected: PASS with 1 test.

- [ ] **Step 6: Commit**
```bash
git add src/app src/components/SiteHeader.tsx src/components/SiteFooter.tsx src/components/GuideCard.tsx src/components/HeroSection.tsx tests/GuideCard.test.tsx
git commit -m "feat: add localized wiki home and guide directory"
```

### Task 5: Implement MDX article route, metadata, and responsive theme

**Files:**
- Create: `src/app/[locale]/guides/[slug]/page.tsx`
- Create: `src/styles/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/[locale]/layout.tsx`
- Create: `tests/article-page.test.tsx`

**Interfaces:**
- Consumes: `getGuide`, `Callout`, `SiteHeader`, `SiteFooter`.
- Produces: article pages for the English and Spanish walkthrough routes with a working table of contents.

- [ ] **Step 1: Write article-page rendering test**
```tsx
import { describe, expect, it } from "vitest";
import { getGuide } from "@/lib/mdx";

describe("walkthrough content", () => {
  it("contains the route discipline anchor needed by the TOC", () => {
    expect(getGuide("walkthrough")?.source).toContain("## Route Discipline");
  });
});
```

- [ ] **Step 2: Run test to verify it passes before route rendering**
Run: `npm run test -- tests/article-page.test.tsx`
Expected: PASS with 1 test.

- [ ] **Step 3: Implement MDX article route**
```tsx
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getGuide } from "@/lib/mdx";
import { isLocale } from "@/lib/i18n";
import { Callout } from "@/components/Callout";
export function generateStaticParams() { return [{ locale: "en", slug: "walkthrough" }, { locale: "es", slug: "walkthrough" }]; }
export default async function GuidePage({ params }: { params: Promise<{ locale: string; slug: string }> }) { const { locale, slug } = await params; if (!isLocale(locale)) notFound(); const guide = getGuide(slug); if (!guide) notFound(); return <main className="article-shell"><nav className="breadcrumbs"><a href={`/${locale}`}>Twisted Tower Wiki</a><span>/</span><a href={`/${locale}/guides`}>Guides</a><span>/</span><span>{guide.frontmatter.title}</span></nav><header className="article-header"><p className="eyebrow">{guide.frontmatter.eyebrow}</p><h1>{guide.frontmatter.title}</h1><p>{guide.frontmatter.description}</p><div>{guide.frontmatter.updatedAt} <span>•</span> {guide.frontmatter.readingTime}</div></header><div className="article-layout"><aside className="toc"><strong>On this page</strong>{guide.frontmatter.toc.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</aside><article className="prose"><MDXRemote source={guide.source} components={{ Callout }} /></article></div></main>; }
```

- [ ] **Step 4: Add global style rules**
```css
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap");
:root { --ink:#211d2b; --paper:#f8f7fb; --surface:#fff; --purple:#6750a4; --purple-dark:#38255f; --orange:#dd5825; --line:#d9d4e4; --teal:#137a70; }
* { box-sizing:border-box; } body { margin:0; background:var(--paper); color:var(--ink); font-family:Inter,Arial,sans-serif; } a { color:inherit; text-decoration:none; } .site-header, main, .site-footer { width:min(1180px,calc(100% - 48px)); margin:auto; } .site-header { min-height:84px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--line); } .wordmark,h1,h2,h3 { font-family:"Barlow Condensed",Impact,sans-serif; text-transform:uppercase; letter-spacing:.02em; } .wordmark { font-size:1.45rem; font-weight:700; } .wordmark em { color:var(--orange); font-style:normal; } .wordmark small { color:var(--purple); font:500 .57rem/1 "DM Mono",monospace; margin-left:7px; letter-spacing:.12em; } .site-header nav { display:flex; gap:26px; font-size:.82rem; font-weight:700; text-transform:uppercase; letter-spacing:.05em; } .locale-link { border:1px solid var(--ink); padding:8px 10px; font:500 .72rem "DM Mono",monospace; } .hero { display:grid; grid-template-columns:1.1fr .9fr; padding:82px 0 46px; gap:56px; align-items:center; } .eyebrow { color:var(--orange); text-transform:uppercase; font:500 .72rem "DM Mono",monospace; letter-spacing:.12em; } h1 { font-size:clamp(4rem,10vw,8.4rem); line-height:.8; margin:18px 0; } h1 i { color:var(--purple); font-style:normal; } h2 { font-size:clamp(2.4rem,5vw,4.3rem); margin:8px 0 30px; } .hero__lead { max-width:600px; color:#574f67; font-size:1.08rem; line-height:1.7; } .hero__actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:30px; } .button { background:var(--purple); color:white; padding:14px 18px; font-size:.78rem; font-weight:700; text-transform:uppercase; letter-spacing:.06em; } .button--quiet { background:transparent; color:var(--ink); border:1px solid var(--ink); } .hero__art { aspect-ratio:1/1.05; display:grid; place-items:end start; padding:28px; color:#fff; background:radial-gradient(circle at 70% 25%,#df6840 0 3%,transparent 21%),linear-gradient(135deg,#23183a,#6750a4 47%,#1b1725); box-shadow:18px 18px 0 #ded8ea; font:500 .86rem/1.05 "DM Mono",monospace; letter-spacing:.08em; } .facts { border-top:1px solid var(--line); border-bottom:1px solid var(--line); display:grid; grid-template-columns:repeat(4,1fr); } .facts div { padding:20px 18px; border-right:1px solid var(--line); } .facts b,.facts span { display:block; } .facts b { color:#756d84; font:500 .63rem "DM Mono",monospace; letter-spacing:.08em; text-transform:uppercase; margin-bottom:8px; } .facts span { font-weight:700; font-size:.9rem; } .section,.intel { padding:90px 0; } .guide-grid { display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid var(--line); border-left:1px solid var(--line); } .guide-card { min-height:240px; padding:22px; background:var(--surface); border-right:1px solid var(--line); border-bottom:1px solid var(--line); transition:background .18s,transform .18s; } .guide-card:hover { background:#f0ecf8; transform:translateY(-4px); } .guide-card--planned { opacity:.7; } .guide-card__number,.guide-card__cta { color:var(--purple); font:500 .67rem "DM Mono",monospace; text-transform:uppercase; } .guide-card h3 { font-size:1.65rem; margin:36px 0 10px; } .guide-card p { color:#625b6d; font-size:.86rem; line-height:1.55; min-height:66px; } .intel { border-top:1px solid var(--line); display:grid; grid-template-columns:1fr 1fr; column-gap:60px; } .intel>p,.intel>h2 { grid-column:1; } .intel>dl { grid-column:2; grid-row:1/4; display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--line); align-self:center; } .intel dl div { background:var(--surface); padding:20px; } dt { color:#756d84; font-size:.73rem; } dd { margin:7px 0 0; font-weight:700; } .article-shell { padding:48px 0 100px; } .breadcrumbs { display:flex; gap:10px; color:#756d84; font-size:.78rem; overflow:auto; white-space:nowrap; } .article-header { max-width:800px; padding:58px 0 38px; border-bottom:1px solid var(--line); } .article-header h1 { font-size:clamp(3.5rem,7vw,6.2rem); } .article-header>p:not(.eyebrow) { font-size:1.1rem; line-height:1.65; color:#625b6d; } .article-header div { font:500 .72rem "DM Mono",monospace; color:#756d84; margin-top:22px; } .article-layout { display:grid; grid-template-columns:210px minmax(0,720px); gap:60px; padding-top:42px; } .toc { position:sticky; top:20px; height:max-content; border-left:2px solid var(--purple); display:grid; gap:12px; padding-left:16px; font-size:.82rem; color:#625b6d; } .toc strong { color:var(--ink); text-transform:uppercase; font-size:.7rem; letter-spacing:.1em; } .prose { font-size:1rem; line-height:1.8; } .prose h2 { font-size:2.6rem; margin:58px 0 12px; scroll-margin-top:20px; } .prose a { color:var(--purple); text-decoration:underline; } .callout { margin:28px 0; padding:18px 20px; border-left:4px solid var(--teal); background:#e7f4f2; } .callout--warning { border-color:var(--orange); background:#fff0e8; } .callout strong { display:block; margin-bottom:6px; text-transform:uppercase; font-size:.72rem; letter-spacing:.08em; } .site-footer { border-top:1px solid var(--line); padding:26px 0 48px; color:#756d84; font-size:.78rem; line-height:1.6; }
@media (max-width:800px) { .site-header,main,.site-footer { width:min(100% - 32px,1180px); }.site-header nav { display:none; }.hero,.intel { grid-template-columns:1fr; gap:28px; padding-top:48px; }.facts,.guide-grid { grid-template-columns:repeat(2,1fr); }.guide-grid { border-right:1px solid var(--line); }.intel>dl { grid-column:1; grid-row:auto; }.article-layout { grid-template-columns:1fr; gap:26px; }.toc { position:static; grid-template-columns:repeat(2,1fr); }.toc strong { grid-column:1/-1; }}
@media (max-width:480px) { .facts,.guide-grid { grid-template-columns:1fr; }.facts div { border-bottom:1px solid var(--line); }.hero__art { aspect-ratio:1.25/1; }.section,.intel { padding:62px 0; }.toc { grid-template-columns:1fr; } }
```

- [ ] **Step 5: Run full test suite and production build**
Run: `npm run test && npm run build`
Expected: all tests PASS and Next.js prints `Compiled successfully`.

- [ ] **Step 6: Commit**
```bash
git add src/app src/styles/globals.css tests/article-page.test.tsx
git commit -m "feat: add MDX guide article and responsive theme"
```

### Task 6: Validate all route outputs and deliver local preview

**Files:**
- Modify: `README.md` only if the project needs a run instruction; otherwise no source-file modification.

**Interfaces:**
- Validates all required routes and production output.

- [ ] **Step 1: Start local server**
Run: `npm run dev`
Expected: Next.js reports a localhost URL.

- [ ] **Step 2: Validate routes**
Open and inspect: `/`, `/en`, `/es`, `/en/guides`, `/es/guides`, `/en/guides/walkthrough`, `/es/guides/walkthrough`.
Expected: root redirects to English; locale pages preserve chrome; walkthrough renders headings and callouts.

- [ ] **Step 3: Run final verification**
Run: `npm run test && npm run build`
Expected: successful test suite and production build.

- [ ] **Step 4: Commit delivery verification**
```bash
git add -A
git commit -m "chore: verify multilingual wiki delivery"
```

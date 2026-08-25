# Twisted Tower Wiki Design

## Goal

Build a static, multilingual Twisted Tower fan wiki using Next.js, TypeScript, and MDX. The first usable version must provide an English and Spanish home page, guides navigation page, and MDX-driven article detail page.

## Reference and Visual Direction

Use https://www.fireteamelite2.wiki/ as the page-layout reference:

- Large game-introduction hero with primary and secondary CTAs.
- Compact game facts strip.
- Numbered "Start Here" guide cards.
- Mission Intel / game information block.
- Strong content hierarchy, fine divider lines, uppercase eyebrow labels, and responsive card grid.

Do not copy the reference site's brand assets, game assets, or text. Implement Twisted Tower's documented visual system: light default interface with deep purple primary actions and dark red-orange danger/emphasis accents; dark mode is out of scope for the initial delivery.

## Technical Architecture

- Next.js App Router with TypeScript.
- Local MDX files for article content.
- Static generation where possible.
- Locale routes: `/en` and `/es`; root `/` redirects to `/en`.
- No database, authentication, CMS, or external live-data dependency.

## Pages

### Home: `/{locale}`

- Hero: Twisted Tower introduction, two primary guide CTAs, trailer visual placeholder, and game facts.
- Start Here: four numbered cards for Beginner Guide, Complete Walkthrough, Puzzle Solutions, and Bosses & Weapons.
- Mission Intel: game overview plus documented game facts.
- Popular guide links and final Steam/guide CTA.

### Guide list: `/{locale}/guides`

- Numbered resource-card grid modeled on the reference site's Deployment Guide section.
- Link entries for Walkthrough, Puzzle Solutions, Boss Guide, Collectibles & Secrets, Weapons, Achievements, Story & Ending, and Steam Details.
- Only the Walkthrough item needs a complete initial article; other entries are clearly rendered as planned guide topics rather than fabricated articles.

### Article: `/{locale}/guides/{slug}`

- Article heading, breadcrumb, editorial metadata, reading-time label, table of contents, structured MDX content, tip/warning callouts, and previous/next guide navigation.
- First complete article: `walkthrough`.

## Content Model

- Shared structured game data and localized interface strings live in TypeScript modules.
- Article front matter provides `title`, `description`, `eyebrow`, `updatedAt`, `readingTime`, and `toc`.
- MDX files contain the guide body and use lightweight callout components.
- English MDX is complete in the first delivery. Spanish uses localized page chrome and falls back to the English article body until a Spanish MDX translation is added.

## Component Boundaries

- `SiteHeader`: logo text, locale switcher, top navigation.
- `HeroSection`: hero copy, CTAs, facts, artwork frame.
- `GuideCard`: reusable numbered navigation card.
- `GameFactsStrip`: compact fact list.
- `ArticleLayout`: breadcrumb, metadata, table of contents, MDX body, guide navigation.
- `SiteFooter`: independent fan-site disclaimer and verified external links.

## Responsive Behavior

- Desktop: hero split layout; 4-column cards when space permits.
- Tablet: 2-column guide cards.
- Mobile: single-column layout, nav collapses, facts wrap, article side table of contents becomes inline.

## Acceptance Criteria

1. `npm run build` succeeds.
2. `/`, `/en`, `/es`, `/en/guides`, `/es/guides`, `/en/guides/walkthrough`, and `/es/guides/walkthrough` resolve correctly.
3. The English walkthrough is rendered from MDX.
4. Page hierarchy reflects the chosen reference layout without copying its protected content or visual assets.
5. Main screens remain usable on mobile widths.

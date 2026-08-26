import type { Locale } from "@/lib/i18n";

export type GuideCard = {
  slug: string;
  number: string;
  title: string;
  description: string;
  status: "published" | "planned";
};

const english: GuideCard[] = [
  { slug: "walkthrough", number: "01", title: "Complete Walkthrough", description: "Follow the researched route through five areas, movement progression, and verified guide steps.", status: "published" },
  { slug: "puzzle-solutions", number: "02", title: "Puzzle Solutions", description: "Use safe puzzle methods, researched clues, and clear coming soon boundaries for room answers.", status: "published" },
  { slug: "bosses", number: "03", title: "Boss Guide", description: "Review confirmed combat framing, Tower Top research, and unverified boss details marked coming soon.", status: "published" },
  { slug: "collectibles", number: "04", title: "Collectibles", description: "Search rooms, revisit movement gates, and track collectible coordinates without inventing a map.", status: "published" },
  { slug: "weapons", number: "05", title: "Weapons", description: "Review the toy-themed arsenal, upgrade direction, movement tools, and research boundaries.", status: "published" },
  { slug: "secrets", number: "06", title: "Secrets", description: "Find research-backed hidden-route methods and revisit advice while exact locations remain coming soon.", status: "published" },
  { slug: "achievements", number: "07", title: "Achievements", description: "Start an evidence-based Steam checklist with the official 18-achievement count and guide leads.", status: "published" },
  { slug: "steam", number: "08", title: "Steam", description: "Check the official Steam platform, release, developer, publisher, and game fact summary.", status: "published" },
  { slug: "steamdb", number: "09", title: "SteamDB", description: "Separate the confirmed Steam App identity from database fields that still need a dated check.", status: "published" },
  { slug: "price", number: "10", title: "Price", description: "Use the official Steam purchase route while current currency, discounts, and regional values stay coming soon.", status: "published" },
  { slug: "demo", number: "11", title: "Demo", description: "Check the official release context and keep demo availability clearly marked coming soon.", status: "published" },
  { slug: "review", number: "12", title: "Review", description: "Read a source-aware review of gameplay, horror atmosphere, puzzles, weapons, and open questions.", status: "published" },
  { slug: "ending", number: "13", title: "Ending Explained", description: "Follow the researched Tower Top route and film-production reveal with spoiler boundaries.", status: "published" },
  { slug: "story", number: "14", title: "Story", description: "Explore the setting, protagonist goal, five-area structure, and researched ending context.", status: "published" },
  { slug: "release-date", number: "15", title: "Release Date", description: "Confirm the August 18, 2026 PC and Steam launch with official source links.", status: "published" },
  { slug: "launch-trailer", number: "16", title: "Launch Trailer", description: "Watch the official YouTube launch trailer and separate visual context from verified facts.", status: "published" },
  { slug: "thomas-brush", number: "17", title: "Thomas Brush", description: "Review the collected developer facts about Thomas Brush, Atmos Games, and 3D Realms.", status: "published" },
  { slug: "game-length", number: "18", title: "Game Length", description: "Understand the single-player format and time factors while measured estimates remain coming soon.", status: "published" },
];

export const guidesFor = (_locale: Locale) => english;

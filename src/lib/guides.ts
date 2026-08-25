import type { Locale } from "@/lib/i18n";

export type GuideCard = {
  slug: string;
  number: string;
  title: string;
  description: string;
  status: "published" | "planned";
};

const english: GuideCard[] = [
  {
    slug: "walkthrough",
    number: "01",
    title: "Complete Walkthrough",
    description: "Follow the route through all five areas, key items, gates, and difficult progression points.",
    status: "published",
  },
  {
    slug: "puzzle-solutions",
    number: "02",
    title: "Puzzle Solutions",
    description: "Find switch orders, clues, keys, and every major environmental solution.",
    status: "planned",
  },
  {
    slug: "bosses",
    number: "03",
    title: "Boss Guide",
    description: "Learn attack patterns, weaknesses, recommended weapons, and phase-by-phase tactics.",
    status: "planned",
  },
  {
    slug: "collectibles",
    number: "04",
    title: "Collectibles & Secrets",
    description: "Track hidden items, secret areas, and missable discoveries by location.",
    status: "planned",
  },
  {
    slug: "weapons",
    number: "05",
    title: "Weapons & Movement",
    description: "Compare weapons, upgrades, traversal toys, and practical combat uses.",
    status: "planned",
  },
  {
    slug: "achievements",
    number: "06",
    title: "Achievements",
    description: "Check unlock conditions, chapter timing, and missable achievements.",
    status: "planned",
  },
  {
    slug: "story",
    number: "07",
    title: "Story & Ending",
    description: "Read a spoiler-aware guide to the characters, story beats, and ending.",
    status: "planned",
  },
  {
    slug: "steam",
    number: "08",
    title: "Steam Details",
    description: "Review release information, platforms, requirements, demo status, and price notes.",
    status: "planned",
  },
];

export const guidesFor = (_locale: Locale) => english;

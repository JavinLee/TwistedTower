import { describe, expect, it } from "vitest";
import { guidesFor } from "@/lib/guides";
import { getGuide } from "@/lib/mdx";

const keywordPages = [
  "walkthrough",
  "puzzle-solutions",
  "bosses",
  "collectibles",
  "weapons",
  "secrets",
  "achievements",
  "steam",
  "steamdb",
  "price",
  "demo",
  "review",
  "ending",
  "story",
  "release-date",
  "launch-trailer",
  "thomas-brush",
  "game-length",
];

describe("keyword inner pages", () => {
  it("has one published content page for every keyword slug", () => {
    const catalog = guidesFor("en");
    expect(catalog.map((guide) => guide.slug)).toEqual(keywordPages);
    expect(catalog.every((guide) => guide.status === "published")).toBe(true);
  });

  it("loads SEO front matter for every keyword page", () => {
    for (const slug of keywordPages) {
      const guide = getGuide(slug);
      expect(guide, slug).not.toBeNull();
      expect(guide?.frontmatter.title.toLowerCase()).toContain("twisted tower");
      expect(guide?.frontmatter.title.length).toBeGreaterThanOrEqual(40);
      expect(guide?.frontmatter.title.length).toBeLessThanOrEqual(60);
      expect(guide?.frontmatter.description.toLowerCase()).toContain("twisted tower");
      expect(guide?.frontmatter.description.length).toBeGreaterThanOrEqual(140);
      expect(guide?.frontmatter.description.length).toBeLessThanOrEqual(160);
      expect(guide?.source.match(/^## /gm)?.length ?? 0).toBeGreaterThanOrEqual(4);
    }
  });

  it("marks unsupported details as coming soon instead of inventing facts", () => {
    expect(getGuide("price")?.source.toLowerCase()).toContain("coming soon");
    expect(getGuide("steamdb")?.source.toLowerCase()).toContain("coming soon");
    expect(getGuide("bosses")?.source.toLowerCase()).toContain("coming soon");
    expect(getGuide("secrets")?.source.toLowerCase()).toContain("coming soon");
  });
});

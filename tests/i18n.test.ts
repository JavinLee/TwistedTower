import { describe, expect, it } from "vitest";
import { copyFor, isLocale } from "@/lib/i18n";
import { guidesFor } from "@/lib/guides";

describe("i18n", () => {
  it("only accepts supported locale identifiers", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("es")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });

  it("returns English navigation and label copy", () => {
    expect(copyFor("en")).toEqual({
      nav: { home: "Home", guides: "Guides", steam: "Steam" },
      labels: { startHere: "Start Here", missionIntel: "Mission Intel", planned: "Planned guide" },
    });
  });

  it("returns Spanish navigation copy", () => {
    expect(copyFor("es").nav.guides).toBe("Guías");
  });
});

describe("guides", () => {
  it("returns the complete guide catalog with stable metadata", () => {
    const expected = [
      { slug: "walkthrough", number: "01", title: "Complete Walkthrough", status: "published" },
      { slug: "puzzle-solutions", number: "02", title: "Puzzle Solutions", status: "planned" },
      { slug: "bosses", number: "03", title: "Boss Guide", status: "planned" },
      { slug: "collectibles", number: "04", title: "Collectibles & Secrets", status: "planned" },
      { slug: "weapons", number: "05", title: "Weapons & Movement", status: "planned" },
      { slug: "achievements", number: "06", title: "Achievements", status: "planned" },
      { slug: "story", number: "07", title: "Story & Ending", status: "planned" },
      { slug: "steam", number: "08", title: "Steam Details", status: "planned" },
    ];
    const guides = guidesFor("en");

    expect(guides).toHaveLength(expected.length);
    expect(guides.map(({ slug, number, title, status }) => ({ slug, number, title, status }))).toEqual(expected);
    expect(guides.every(({ description }) => description.trim().length > 0)).toBe(true);
  });

  it("reuses the English guide catalog for Spanish", () => {
    expect(guidesFor("es")).toEqual(guidesFor("en"));
  });
});

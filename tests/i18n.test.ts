import { describe, expect, it } from "vitest";
import { copyFor, isLocale } from "@/lib/i18n";
import { guidesFor } from "@/lib/guides";

describe("i18n", () => {
  it("only accepts supported locale identifiers", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("es")).toBe(true);
    expect(isLocale("de")).toBe(true);
    expect(isLocale("ja")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });

  it("returns English navigation and label copy", () => {
    expect(copyFor("en")).toEqual({
      nav: { home: "Home", guides: "Guides", steam: "Steam" },
      labels: { startHere: "Start Here", missionIntel: "Mission Intel", planned: "Planned guide", redeemCodes: "Redeem codes", completeWalkthrough: "Complete Walkthrough", openGuide: "Open the guide" },
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
      { slug: "puzzle-solutions", number: "02", title: "Puzzle Solutions", status: "published" },
      { slug: "bosses", number: "03", title: "Boss Guide", status: "published" },
      { slug: "collectibles", number: "04", title: "Collectibles", status: "published" },
      { slug: "weapons", number: "05", title: "Weapons", status: "published" },
      { slug: "secrets", number: "06", title: "Secrets", status: "published" },
      { slug: "achievements", number: "07", title: "Achievements", status: "published" },
      { slug: "steam", number: "08", title: "Steam", status: "published" },
      { slug: "steamdb", number: "09", title: "SteamDB", status: "published" },
      { slug: "price", number: "10", title: "Price", status: "published" },
      { slug: "demo", number: "11", title: "Demo", status: "published" },
      { slug: "review", number: "12", title: "Review", status: "published" },
      { slug: "ending", number: "13", title: "Ending Explained", status: "published" },
      { slug: "story", number: "14", title: "Story", status: "published" },
      { slug: "release-date", number: "15", title: "Release Date", status: "published" },
      { slug: "launch-trailer", number: "16", title: "Launch Trailer", status: "published" },
      { slug: "thomas-brush", number: "17", title: "Thomas Brush", status: "published" },
      { slug: "game-length", number: "18", title: "Game Length", status: "published" },
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

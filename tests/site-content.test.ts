import { describe, expect, it } from "vitest";
import { locales } from "@/lib/i18n";
import { metadataFor, siteCopyFor } from "@/lib/site";

describe("research-backed site content", () => {
  it("configures the research priority locales", () => {
    expect(locales).toEqual(["en", "es", "de", "ja"]);
  });

  it("uses the researched English homepage copy and official links", () => {
    const copy = siteCopyFor("en");
    expect(copy.hero.description).toBe(
      "Twisted Tower is a first-person action-adventure horror shooter set in an abandoned 1950s resort. Fight corrupted fairy-tale mascots, solve twisted puzzles, and climb five deadly levels to save your love.",
    );
    expect(copy.officialLinks.website).toBe("https://3drealms.com/games/twisted-tower/");
    expect(copy.officialLinks.discord).toBe("https://discord.gg/DywJ8NZDx");
    expect(copy.officialLinks.youtube).toBe("https://www.youtube.com/@3drealmsgames");
    expect(copy.redeemCodes.value).toBe("暂无");
    expect(copy.redeemCodes.description).toContain("No official redemption codes");
  });

  it("provides localized homepage chrome for every research-priority locale", () => {
    expect(siteCopyFor("de").hero.eyebrow).toBe("Fan-gemachtes Community-Wiki");
    expect(siteCopyFor("ja").hero.eyebrow).toBe("ファン制作コミュニティWiki");
    expect(siteCopyFor("de").redeemCodes.value).toBe("暂无");
    expect(siteCopyFor("ja").officialLinks.discord).toBe("https://discord.gg/DywJ8NZDx");
  });

  it("uses the researched SEO metadata", () => {
    expect(metadataFor("en")).toEqual({
      title: "Twisted Tower Wiki — Walkthrough, Puzzles & Boss Guides",
      description:
        "Explore the Twisted Tower Wiki for walkthroughs, puzzle solutions, boss strategies, weapons, collectibles, achievements, story details, and Steam info.",
      keywords:
        "Twisted Tower, walkthrough, puzzles, boss guide, weapons, collectibles, achievements, story, Steam",
    });
    expect(metadataFor("es").title).toBe("Wiki de Twisted Tower — Guía, puzles y final");
    expect(metadataFor("de").title).toBe("Twisted Tower Wiki — Komplettlösung, Rätsel und Boss-Guides");
    expect(metadataFor("ja").title).toBe("Twisted Tower 攻略Wiki — 攻略・謎解き・エンディング");
  });
});

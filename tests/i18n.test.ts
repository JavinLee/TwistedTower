import { describe, expect, it } from "vitest";
import { copyFor, isLocale } from "@/lib/i18n";
import { guidesFor } from "@/lib/guides";

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

describe("guides", () => {
  it("returns the planned guide catalog for each supported locale", () => {
    expect(guidesFor("en")).toHaveLength(8);
    expect(guidesFor("es")).toEqual(guidesFor("en"));
    expect(guidesFor("en")[0]).toMatchObject({
      slug: "walkthrough",
      number: "01",
      status: "published",
    });
    expect(guidesFor("en").slice(1).every((guide) => guide.status === "planned")).toBe(true);
  });
});

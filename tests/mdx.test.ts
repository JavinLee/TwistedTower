import { render } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import { Callout } from "@/components/Callout";
import { getGuide } from "@/lib/mdx";

describe("getGuide", () => {
  it("loads walkthrough frontmatter and source", () => {
    const guide = getGuide("walkthrough");

    expect(guide?.frontmatter).toEqual({
      title: "Twisted Tower Complete Walkthrough",
      description: expect.any(String),
      eyebrow: expect.any(String),
      updatedAt: expect.any(String),
      readingTime: expect.any(String),
      toc: expect.arrayContaining([
        expect.objectContaining({ id: "before-you-enter", label: expect.any(String) }),
      ]),
    });
    expect(guide?.source).toContain("## Before You Enter");
    expect(guide?.source).toContain('<Callout kind="tip">');
    expect(guide?.source).toContain('<Callout kind="warning">');
  });

  it("exposes five researched floor chapters with route records", () => {
    const guide = getGuide("walkthrough");
    const source = guide?.source ?? "";
    const floors = [
      "Floor 1 The Hotel",
      "Floor 2 The Waterpark",
      "Floor 3 The Clown Casino",
      "Floor 4 The Carnival Forest",
      "Floor 5 The Space Station",
    ];
    const routeFields = [
      "Entering condition",
      "Progression clues",
      "Key objective / item / key",
      "Required combat",
      "Mechanism / route lock",
      "Movement unlock effect",
      "Branch routes",
      "Final route",
      "Next safe point",
    ];

    expect(source).toContain("## Five-Floor Route Index");
    for (const floor of floors) {
      expect(source).toContain(`## ${floor}`);
    }

    const floorSections = floors.map((floor, index) => {
      const start = source.indexOf(`## ${floor}`);
      const end = source.indexOf(
        index < floors.length - 1 ? `## ${floors[index + 1]}` : "## Movement Unlocks & Backtracking",
        start + 1,
      );
      return source.slice(start, end);
    });
    for (const section of floorSections) {
      for (const field of routeFields) {
        expect(section).toContain(`**${field}:**`);
      }
    }
    expect(source).toContain("guide research");
    expect(source).toContain("verify in-game");
  });

  it("records the researched floor order and movement unlocks", () => {
    const source = getGuide("walkthrough")?.source ?? "";
    const floors = [
      "Floor 1 The Hotel",
      "Floor 2 The Waterpark",
      "Floor 3 The Clown Casino",
      "Floor 4 The Carnival Forest",
      "Floor 5 The Space Station",
    ];

    expect(source).toContain("## Five-Floor Route Index");
    for (const [index, floor] of floors.entries()) {
      expect(source).toContain(`## ${floor}`);
      if (index > 0) {
        expect(source.indexOf(floors[index - 1])).toBeLessThan(source.indexOf(floor));
      }
    }

    for (const movementTool of ["Harpoon", "Fairy Wings", "Bouncy Boots", "Twisted Jet Pack"]) {
      expect(source).toContain(movementTool);
    }
    expect(source).toContain("movement unlocks");
  });

  it("renders tip and warning Callouts with their runtime classes and titles", () => {
    const { container } = render(
      createElement(
        "div",
        null,
        createElement(Callout, { kind: "tip", children: "Keep a route record." }),
        createElement(Callout, { kind: "warning", children: "Spoilers ahead." }),
      ),
    );

    expect(container.querySelector(".callout--tip")).toHaveTextContent("Route Tip");
    expect(container.querySelector(".callout--warning")).toHaveTextContent("Spoiler Warning");
  });

  it("returns null for an unavailable guide", () => {
    expect(getGuide("bosses")).toBeNull();
  });
});

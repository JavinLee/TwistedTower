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

  it("exposes a five-area route framework with verified route records", () => {
    const guide = getGuide("walkthrough");
    const source = guide?.source ?? "";
    const areas = ["Area One", "Area Two", "Area Three", "Area Four", "Area Five"];
    const routeFields = [
      "Entering condition",
      "Key objective",
      "Required combat",
      "Mechanism / route lock",
      "Branch routes",
      "Next safe point",
    ];

    expect(source).toContain("## Five-Area Route Index");
    for (const area of areas) {
      expect(source).toContain(`### ${area} — Verified route record`);
    }
    for (const field of routeFields) {
      expect(source.match(new RegExp(`\\*\\*${field}:\\*\\*`, "g"))).toHaveLength(5);
    }
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

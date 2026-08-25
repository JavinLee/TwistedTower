import { describe, expect, it } from "vitest";
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

  it("returns null for an unavailable guide", () => {
    expect(getGuide("bosses")).toBeNull();
  });
});

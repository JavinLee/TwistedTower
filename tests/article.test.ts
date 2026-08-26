import { describe, expect, it } from "vitest";
import { articleHeadingId } from "@/lib/article";

describe("article heading ids", () => {
  it("normalizes a heading into a stable table-of-contents anchor", () => {
    expect(articleHeadingId("Floor 1 — The Hotel")).toBe("floor-1-the-hotel");
  });
});

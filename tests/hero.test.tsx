import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import { HeroSection } from "@/components/HeroSection";

describe("HeroSection", () => {
  it("shows the official YouTube trailer thumbnail as the hero preview", () => {
    render(createElement(HeroSection, { locale: "en" }));

    expect(screen.getByRole("img", { name: "Official Launch Trailer" })).toHaveAttribute(
      "src",
      "https://i.ytimg.com/vi/2LxB81yhLxo/hqdefault.jpg",
    );
    expect(screen.getByRole("link", { name: "Official Launch Trailer" })).toHaveAttribute(
      "href",
      "https://www.youtube.com/watch?v=2LxB81yhLxo",
    );
  });
});

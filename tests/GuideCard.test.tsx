import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import { GuideCard } from "@/components/GuideCard";

const publishedGuide = {
  slug: "walkthrough",
  number: "01",
  title: "Complete Walkthrough",
  description: "Route",
  status: "published" as const,
};

const plannedGuide = {
  slug: "puzzle-solutions",
  number: "02",
  title: "Puzzle Solutions",
  description: "Switch orders",
  status: "planned" as const,
};

describe("GuideCard", () => {
  it("renders a published guide as an internal locale link", () => {
    render(createElement(GuideCard, { locale: "en", guide: publishedGuide }));

    expect(screen.getByRole("link", { name: /complete walkthrough/i })).toHaveAttribute(
      "href",
      "/en/guides/walkthrough",
    );
  });

  it("renders a planned guide as planned copy without a link", () => {
    render(createElement(GuideCard, { locale: "en", guide: plannedGuide }));

    expect(screen.getByText("Planned guide")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /puzzle solutions/i })).not.toBeInTheDocument();
  });
});

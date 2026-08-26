import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Twisted Tower Wiki — Walkthrough, Puzzles & Boss Guides",
  description:
    "Explore the Twisted Tower Wiki for walkthroughs, puzzle solutions, boss strategies, weapons, collectibles, achievements, story details, and Steam info.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

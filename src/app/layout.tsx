import type { Metadata } from "next";
import "@/styles/globals.css";
import { metadataFor } from "@/lib/site";

export const metadata: Metadata = metadataFor("en");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

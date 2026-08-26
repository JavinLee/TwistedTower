import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import { metadataFor } from "@/lib/site";

export const metadata: Metadata = metadataFor("en");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SVETHGKJ3Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SVETHGKJ3Y');
          `}
        </Script>
      </body>
    </html>
  );
}

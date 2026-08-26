import type { MetadataRoute } from "next";
import { guidesFor } from "@/lib/guides";
import { locales } from "@/lib/i18n";

const siteUrl = "https://www.twistedtower.quest";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedHomepages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
  }));

  const localizedGuideIndexPages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/guides`,
  }));

  const localizedGuidePages = locales.flatMap((locale) =>
    guidesFor(locale).map((guide) => ({
      url: `${siteUrl}/${locale}/guides/${guide.slug}`,
    })),
  );

  return [...localizedHomepages, ...localizedGuideIndexPages, ...localizedGuidePages];
}

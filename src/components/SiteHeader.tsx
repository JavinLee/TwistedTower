import Link from "next/link";
import { copyFor, type Locale } from "@/lib/i18n";
import { siteCopyFor } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = copyFor(locale);
  const siteCopy = siteCopyFor(locale);
  const alternateLocale = locale === "en" ? "es" : "en";

  return (
    <header className="site-header">
      <Link href={`/${locale}`} className="wordmark" aria-label="Twisted Tower Wiki home">
        TWISTED <em>TOWER</em><small>WIKI</small>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href={`/${locale}`}>{copy.nav.home}</Link>
        <Link href={`/${locale}/guides`}>{copy.nav.guides}</Link>
        <a
          href={siteCopy.officialLinks.steam}
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.nav.steam} ↗
        </a>
      </nav>
      <Link className="locale-link" href={`/${alternateLocale}`} aria-label={`Switch to ${alternateLocale}`}>
        {alternateLocale.toUpperCase()}
      </Link>
    </header>
  );
}

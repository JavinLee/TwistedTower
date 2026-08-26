import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { siteCopyFor } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = siteCopyFor(locale);

  return (
    <footer className="site-footer">
      <div>
        <Link href={`/${locale}`} className="wordmark">
          TWISTED <em>TOWER</em><small>WIKI</small>
        </Link>
        <p>{copy.footerDescription}</p>
      </div>
      <div className="site-footer__links">
        <Link href={`/${locale}/guides`}>{locale === "es" ? "Guías" : "Guides"}</Link>
        <a href={copy.officialLinks.website} target="_blank" rel="noopener noreferrer">
          Official Website ↗
        </a>
        <a href={copy.officialLinks.developer} target="_blank" rel="noopener noreferrer">
          Atmos Games ↗
        </a>
        <a href={copy.officialLinks.steam} target="_blank" rel="noopener noreferrer">
          Steam ↗
        </a>
        <a href={copy.officialLinks.discord} target="_blank" rel="noopener noreferrer">
          Discord ↗
        </a>
        <a href={copy.officialLinks.youtube} target="_blank" rel="noopener noreferrer">
          YouTube ↗
        </a>
        <a href={copy.officialLinks.discussions} target="_blank" rel="noopener noreferrer">
          Steam Discussions ↗
        </a>
      </div>
      <small className="site-footer__note">© 2026 Twisted Tower Wiki</small>
    </footer>
  );
}

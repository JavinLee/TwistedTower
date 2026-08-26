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
        <a
          href="https://store.steampowered.com/app/1575990/Twisted_Tower/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steam ↗
        </a>
        <a href="https://discord.gg/DywJ8NZDx" target="_blank" rel="noopener noreferrer">
          Discord ↗
        </a>
      </div>
      <small className="site-footer__note">© 2026 Twisted Tower Wiki</small>
    </footer>
  );
}

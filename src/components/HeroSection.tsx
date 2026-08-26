import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { siteCopyFor } from "@/lib/site";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = siteCopyFor(locale);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <p className="eyebrow">{copy.hero.eyebrow}</p>
        <h1 id="hero-title">
          {copy.hero.titleLead} <i>{copy.hero.titleAccent}</i>
        </h1>
        <p className="hero__lead">{copy.hero.description}</p>
        <div className="hero__actions">
          <Link href={`/${locale}/guides#beginner`} className="button">
            {copy.hero.primaryCta}
          </Link>
          <Link href={`/${locale}/guides`} className="button button--quiet">
            {copy.hero.secondaryCta}
          </Link>
          <a
            href={copy.officialLinks.steam}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--quiet"
          >
            {copy.hero.tertiaryCta} ↗
          </a>
        </div>
      </div>
      <a
        className="hero__art"
        href={copy.officialLinks.trailer}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={copy.hero.trailerLabel}
      >
        <span>{copy.hero.trailerLabel}</span>
      </a>
      <div className="facts" aria-label={locale === "es" ? "Datos del juego" : "Game facts"}>
        {copy.facts.map((fact) => (
          <div key={fact.label}>
            <b>{fact.label}</b>
            <span>{fact.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

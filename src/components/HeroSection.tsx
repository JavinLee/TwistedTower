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
          <Link href={`/${locale}/guides/walkthrough`} className="button">
            {copy.hero.primaryCta}
          </Link>
          <Link href={`/${locale}/guides`} className="button button--quiet">
            {copy.hero.secondaryCta}
          </Link>
        </div>
      </div>
      <div className="hero__art" aria-label={copy.hero.trailerLabel} role="img">
        <span>{copy.hero.trailerLabel}</span>
      </div>
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

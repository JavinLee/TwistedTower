import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideCard } from "@/components/GuideCard";
import { HeroSection } from "@/components/HeroSection";
import { copyFor, isLocale } from "@/lib/i18n";
import { startHereGuidesFor, siteCopyFor } from "@/lib/site";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = copyFor(locale);
  const siteCopy = siteCopyFor(locale);
  const startHereGuides = startHereGuidesFor(locale);

  return (
    <main>
      <HeroSection locale={locale} />
      <section className="section" aria-labelledby="start-here-title">
        <p className="eyebrow">{copy.labels.startHere}</p>
        <h2 id="start-here-title">{siteCopy.startTitle}</h2>
        <div className="guide-grid">
          {startHereGuides.map((guide) => (
            <GuideCard key={guide.slug} locale={locale} guide={guide} />
          ))}
        </div>
      </section>
      <section className="intel" aria-labelledby="mission-intel-title">
        <div>
          <p className="eyebrow">{copy.labels.missionIntel}</p>
          <h2 id="mission-intel-title">{siteCopy.intelTitle}</h2>
          {siteCopy.intelParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl>
          {siteCopy.intelFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="popular" aria-labelledby="popular-guide-title">
        <div>
          <p className="eyebrow">{siteCopy.popularTitle}</p>
          <h2 id="popular-guide-title">Complete Walkthrough</h2>
          <p>{siteCopy.popularDescription}</p>
        </div>
        <Link href={`/${locale}/guides/walkthrough`} className="button">
          {locale === "es" ? "Abrir la guía" : "Open the guide"} →
        </Link>
      </section>
      <section className="final-cta" aria-labelledby="final-cta-title">
        <p className="eyebrow">Twisted Tower Wiki</p>
        <h2 id="final-cta-title">{siteCopy.finalTitle}</h2>
        <p>{siteCopy.finalDescription}</p>
        <div className="hero__actions">
          <Link href={`/${locale}/guides/walkthrough`} className="button">
            {siteCopy.finalPrimary}
          </Link>
          <a
            href="https://store.steampowered.com/app/1575990/Twisted_Tower/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--quiet"
          >
            {siteCopy.finalSecondary} ↗
          </a>
        </div>
      </section>
    </main>
  );
}

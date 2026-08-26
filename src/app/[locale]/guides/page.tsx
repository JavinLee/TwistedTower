import { notFound } from "next/navigation";
import { GuideCard } from "@/components/GuideCard";
import { isLocale } from "@/lib/i18n";
import { guidesFor } from "@/lib/guides";

export default async function GuidesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main className="directory" aria-labelledby="guides-title">
      <header className="directory__header">
        <p className="eyebrow">{locale === "es" ? "Índice de recursos" : "Resource directory"}</p>
        <h1 id="guides-title">{locale === "es" ? "Guías de Twisted Tower" : "Twisted Tower Guides"}</h1>
        <p>
          {locale === "es"
            ? "Consulta la guía publicada o guarda los temas planificados para futuras rutas de investigación."
            : "Open the published route guide or bookmark planned topics for future research-backed updates."}
        </p>
      </header>
      <div className="guide-grid guide-grid--directory">
        {guidesFor(locale).map((guide) => (
          <GuideCard key={guide.slug} locale={locale} guide={guide} />
        ))}
      </div>
    </main>
  );
}

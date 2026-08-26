import * as React from "react";
import Link from "next/link";
import { copyFor, type Locale } from "@/lib/i18n";
import type { GuideCard as Guide } from "@/lib/guides";

export function GuideCard({ locale, guide }: { locale: Locale; guide: Guide }) {
  const copy = copyFor(locale);
  const body = (
    <>
      <span className="guide-card__number">// {guide.number}</span>
      <h3>{guide.title}</h3>
      <p>{guide.description}</p>
      <span className="guide-card__cta">
        {guide.status === "published" ? copy.nav.guides : copy.labels.planned}
        {guide.status === "published" ? " →" : ""}
      </span>
    </>
  );

  if (guide.status === "published") {
    return (
      <Link className="guide-card" href={`/${locale}/guides/${guide.slug}`} id={guide.slug}>
        {body}
      </Link>
    );
  }

  return (
    <article className="guide-card guide-card--planned" id={guide.slug}>
      {body}
    </article>
  );
}

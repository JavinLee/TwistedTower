import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { HTMLAttributes } from "react";
import { notFound } from "next/navigation";
import { Callout } from "@/components/Callout";
import { articleHeadingId } from "@/lib/article";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { guidesFor } from "@/lib/guides";
import { getGuide } from "@/lib/mdx";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => guidesFor(locale).map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
  };
}

function ArticleHeading({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  const label = typeof children === "string" ? children : "";
  return (
    <h2 {...props} id={articleHeadingId(label)}>
      {children}
    </h2>
  );
}

function ArticleTableOfContents({ locale, slug, items }: { locale: Locale; slug: string; items: { id: string; label: string }[] }) {
  return (
    <aside className="article-toc" aria-label="On this page">
      <strong>On this page</strong>
      {items.map((item) => (
        <Link key={item.id} href={`/${locale}/guides/${slug}#${item.id}`}>
          {item.label}
        </Link>
      ))}
    </aside>
  );
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeValue, slug } = await params;
  if (!isLocale(localeValue)) notFound();

  const locale = localeValue as Locale;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const components = {
    Callout,
    h2: ArticleHeading,
  };

  return (
    <main className="article-shell" aria-labelledby="article-title">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href={`/${locale}`}>Twisted Tower Wiki</Link>
        <span>/</span>
        <Link href={`/${locale}/guides`}>Guides</Link>
        <span>/</span>
        <span>{guide.frontmatter.title}</span>
      </nav>

      <header className="article-header">
        <p className="eyebrow">{guide.frontmatter.eyebrow}</p>
        <h1 id="article-title">{guide.frontmatter.title}</h1>
        <p>{guide.frontmatter.description}</p>
        <div className="article-meta">
          <span>{guide.frontmatter.updatedAt}</span>
          <span aria-hidden="true">•</span>
          <span>{guide.frontmatter.readingTime}</span>
        </div>
      </header>

      <div className="article-layout">
        <ArticleTableOfContents locale={locale} slug={slug} items={guide.frontmatter.toc} />
        <article className="prose">
          <MDXRemote source={guide.source} components={components} />
          <nav className="article-footer-nav" aria-label="Guide navigation">
            <Link href={`/${locale}/guides`}>← Back to all guides</Link>
            <Link href={`/${locale}/guides#puzzle-solutions`}>Explore planned topics →</Link>
          </nav>
        </article>
      </div>
    </main>
  );
}

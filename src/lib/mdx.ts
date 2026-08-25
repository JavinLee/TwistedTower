import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type GuideTocItem = {
  id: string;
  label: string;
};

export type GuideFrontmatter = {
  title: string;
  description: string;
  eyebrow: string;
  updatedAt: string;
  readingTime: string;
  toc: GuideTocItem[];
};

type Guide = {
  frontmatter: GuideFrontmatter;
  source: string;
};

const guidesDirectory = path.join(process.cwd(), "src", "content", "guides", "en");

export const getGuide = (slug: string): Guide | null => {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  const file = path.join(guidesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const parsed = matter(fs.readFileSync(file, "utf8"));
  return {
    frontmatter: parsed.data as GuideFrontmatter,
    source: parsed.content,
  };
};

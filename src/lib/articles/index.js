// Central article registry. Each cluster file exports an array of article objects.
//
// Article schema:
// {
//   slug:        string  (URL segment, 3-5 words, no stop words)
//   category:    string  (one of CATEGORIES below — used as the tag)
//   title:       string  (H1)
//   metaTitle:   string  (<60 chars, keyword first)
//   metaDescription: string (150-160 chars)
//   excerpt:     string  (one-line summary for listing cards)
//   date:        "YYYY-MM-DD"
//   readingTime: number  (minutes)
//   intent:      "Informational" | "Commercial" | "Transactional"
//   keyTakeaways: string[]
//   intro:       string[]  (APP formula: Align, Present, Prove)
//   sections:    [{ h: string, p?: string[], list?: string[], steps?: string[] }]
//   faq:         [{ q: string, a: string }]
//   related:     string[]  (slugs of related articles)
//   sources:     [{ label: string, url: string }]  (authoritative external refs)
// }

import { zapierArticles } from "./zapier";
import { notionArticles } from "./notion";
import { airtableArticles } from "./airtable";
import { emailArticles } from "./email";
import { projectArticles } from "./project-management";

export const CATEGORIES = [
  "Automation",
  "Notion",
  "Airtable",
  "Email Marketing",
  "Project Mgmt",
];

const ALL = [
  ...zapierArticles,
  ...notionArticles,
  ...airtableArticles,
  ...emailArticles,
  ...projectArticles,
];

// Newest first for listings.
export function getAllArticles() {
  return [...ALL].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug) {
  return ALL.find((a) => a.slug === slug) || null;
}

export function getArticlesByCategory(category) {
  return getAllArticles().filter((a) => a.category === category);
}

export function getRelatedArticles(article, limit = 3) {
  const bySlug = (article.related || [])
    .map((slug) => ALL.find((a) => a.slug === slug))
    .filter(Boolean);
  if (bySlug.length >= limit) return bySlug.slice(0, limit);
  // Fill remaining slots with same-category articles.
  const filler = ALL.filter(
    (a) => a.category === article.category && a.slug !== article.slug && !bySlug.includes(a)
  );
  return [...bySlug, ...filler].slice(0, limit);
}

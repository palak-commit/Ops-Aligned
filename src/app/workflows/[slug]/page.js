import { notFound } from "next/navigation";
import NewsletterOptIn from "../../components/NewsletterOptIn";
import ArticleBody from "../../components/ArticleBody";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "../../../lib/articles";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found | OpsAligned" };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/workflows/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
    },
  };
}

export default async function WorkflowArticle({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: { "@type": "Organization", name: "OpsAligned" },
    datePublished: article.date,
    dateModified: article.date,
  };

  const faqSchema = article.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <div className="container" style={{ padding: "var(--spacing-md) 0", display: "flex", gap: "var(--spacing-lg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Main Content */}
      <article style={{ flex: "1", maxWidth: "var(--reading-width)" }}>
        <div style={{ marginBottom: "var(--spacing-md)" }}>
          <span className="tag">{article.category}</span>
          <h1 style={{ marginBottom: "var(--spacing-xs)" }}>{article.title}</h1>
          <p className="text-secondary">
            By OpsAligned Team • Updated {formatDate(article.date)} • {article.readingTime} min read
          </p>
        </div>

        <ArticleBody article={article} />
      </article>

      {/* Sidebar */}
      <aside className="workflow-sidebar">
        <div className="sidebar-sticky-container">
          <h3 style={{ fontSize: "1rem", marginTop: 0 }}>Related Workflows</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {related.map((r) => (
              <li key={r.slug} style={{ marginBottom: "0.75rem" }}>
                <a href={`/workflows/${r.slug}`} style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                  {r.title}
                </a>
                <p className="text-secondary" style={{ fontSize: "0.8rem", margin: "0.15rem 0 0" }}>
                  {r.excerpt}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <NewsletterOptIn />
      </aside>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .workflow-sidebar { width: 100%; margin-top: var(--spacing-lg); }
        .sidebar-sticky-container {
          padding: var(--spacing-sm);
          background-color: var(--bg-color-alt);
          border: 1px solid var(--border-color);
          border-radius: 8px;
        }
        @media (min-width: 1024px) {
          .container { flex-direction: row !important; }
          .workflow-sidebar { width: 300px; margin-top: 0; }
          .sidebar-sticky-container { position: sticky; top: 100px; }
        }
      `,
        }}
      />
    </div>
  );
}

function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[m - 1]} ${d}, ${y}`;
}

import { CATEGORIES, getAllArticles, getArticlesByCategory } from "../../lib/articles";

export const metadata = {
  title: "Workflow Library | OpsAligned",
  description:
    "Browse 50+ step-by-step guides for Notion, Airtable, Zapier, email marketing, and project management tools.",
};

export default function WorkflowsPage() {
  const total = getAllArticles().length;

  return (
    <div className="container" style={{ padding: "var(--spacing-md) 0" }}>
      <h1 style={{ marginBottom: "var(--spacing-xs)" }}>Workflow Library</h1>
      <p className="text-secondary" style={{ marginBottom: "var(--spacing-md)" }}>
        {total} step-by-step implementation guides, comparisons, and tutorials for the tools that run modern teams.
      </p>

      {/* Category jump nav */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "var(--spacing-lg)" }}>
        {CATEGORIES.map((cat) => (
          <a
            key={cat}
            href={`#${slugifyCategory(cat)}`}
            className="btn"
            style={{ border: "1px solid var(--border-color)", fontSize: "0.8rem", padding: "0.35rem 0.75rem" }}
          >
            {cat}
          </a>
        ))}
      </div>

      {CATEGORIES.map((cat) => {
        const articles = getArticlesByCategory(cat);
        if (!articles.length) return null;
        return (
          <section key={cat} id={slugifyCategory(cat)} style={{ marginBottom: "var(--spacing-lg)" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-sm)" }}>{cat}</h2>
            <div className="grid">
              {articles.map((a) => (
                <a key={a.slug} href={`/workflows/${a.slug}`} className="card">
                  <span className="tag">{a.category}</span>
                  <h3 className="mb-2" style={{ marginTop: 0, fontSize: "1.1rem" }}>
                    {a.title}
                  </h3>
                  <p className="text-secondary" style={{ fontSize: "0.875rem" }}>
                    {a.excerpt}
                  </p>
                  <div
                    style={{
                      marginTop: "1rem",
                      display: "flex",
                      gap: "0.75rem",
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span>{a.intent}</span>
                    <span>•</span>
                    <span>{a.readingTime} min read</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function slugifyCategory(cat) {
  return cat.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "");
}

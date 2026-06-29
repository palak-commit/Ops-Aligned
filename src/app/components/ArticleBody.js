import AdUnit from "./AdUnit";

// Renders a structured article object (see src/lib/articles schema) as a
// fully-formatted, scannable post following the EEAT / Helpful Content framework.
export default function ArticleBody({ article }) {
  const { intro = [], keyTakeaways = [], sections = [], faq = [], sources = [] } = article;

  return (
    <>
      {/* Intro (APP: Align, Present, Prove) */}
      {intro.map((p, i) => (
        <p key={`intro-${i}`} style={{ fontSize: i === 0 ? "1.1rem" : undefined }}>
          {p}
        </p>
      ))}

      {/* Key Takeaways box (recommended for longer articles) */}
      {keyTakeaways.length > 0 && (
        <div
          style={{
            padding: "var(--spacing-sm)",
            backgroundColor: "var(--bg-color-alt)",
            borderLeft: "4px solid var(--accent)",
            borderRadius: "0 8px 8px 0",
            margin: "var(--spacing-md) 0",
          }}
        >
          <strong>Key Takeaways</strong>
          <ul style={{ paddingLeft: "1.25rem", margin: "0.5rem 0 0" }}>
            {keyTakeaways.map((t, i) => (
              <li key={i} style={{ marginBottom: "0.35rem" }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Body sections, with an in-article ad injected after the 2nd section */}
      {sections.map((s, i) => (
        <section key={`s-${i}`}>
          <h2>{s.h}</h2>
          {(s.p || []).map((p, j) => (
            <p key={j}>{p}</p>
          ))}
          {s.steps && (
            <ol style={{ paddingLeft: "1.5rem", marginBottom: "var(--spacing-sm)" }}>
              {s.steps.map((step, j) => (
                <li key={j} style={{ marginBottom: "0.4rem" }}>
                  {step}
                </li>
              ))}
            </ol>
          )}
          {s.list && (
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "var(--spacing-sm)" }}>
              {s.list.map((item, j) => (
                <li key={j} style={{ marginBottom: "0.4rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          {i === 1 && (
            <div style={{ margin: "var(--spacing-md) 0" }}>
              <AdUnit slot="0000000000" />
            </div>
          )}
        </section>
      ))}

      {/* FAQ (People Also Ask) */}
      {faq.length > 0 && (
        <>
          <h2 style={{ borderTop: "1px solid var(--border-color)", paddingTop: "var(--spacing-md)" }}>
            Frequently Asked Questions
          </h2>
          {faq.map((item, i) => (
            <div key={i} style={{ marginBottom: "var(--spacing-sm)" }}>
              <h3 style={{ fontSize: "1.1rem", marginTop: 0, marginBottom: "0.35rem" }}>{item.q}</h3>
              <p style={{ marginBottom: 0 }}>{item.a}</p>
            </div>
          ))}
        </>
      )}

      {/* Authoritative external references */}
      {sources.length > 0 && (
        <div style={{ marginTop: "var(--spacing-md)", fontSize: "0.875rem" }} className="text-secondary">
          <strong>References</strong>
          <ul style={{ paddingLeft: "1.25rem", margin: "0.5rem 0 0" }}>
            {sources.map((src, i) => (
              <li key={i} style={{ marginBottom: "0.25rem" }}>
                <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

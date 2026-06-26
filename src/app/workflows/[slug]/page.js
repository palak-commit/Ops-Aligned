export default function WorkflowArticle() {
  return (
    <div className="container" style={{ padding: "var(--spacing-md) 0", display: "flex", gap: "var(--spacing-lg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to build a freelance CRM in Notion",
        "author": { "@type": "Organization", "name": "OpsAligned" },
        "datePublished": "2026-03-15",
        "dateModified": "2026-03-15"
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "Can Notion replace Salesforce for small agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While Notion lacks native email sequencing, it is more than capable of managing a pipeline for agencies with fewer than 50 active clients."
          }
        }]
      })}} />
      
      {/* Main Content */}
      <article style={{ flex: "1", maxWidth: "var(--reading-width)" }}>
        <div style={{ marginBottom: "var(--spacing-md)" }}>
          <span className="tag">CRM & Sales</span>
          <h1 style={{ marginBottom: "var(--spacing-xs)" }}>How to build a freelance CRM in Notion</h1>
          <p className="text-secondary">By OpsAligned Team • Updated Mar 15, 2026 • 8 min read</p>
        </div>

        {/* Video Embed Placeholder */}
        <div style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "var(--border-color)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--spacing-md)" }}>
          <span className="text-secondary">▶️ 3-Minute Video Walkthrough</span>
        </div>

        {/* Featured Snippet block */}
        <div style={{ padding: "var(--spacing-sm)", backgroundColor: "var(--bg-color-alt)", borderLeft: "4px solid var(--accent)", borderRadius: "0 8px 8px 0", marginBottom: "var(--spacing-md)" }}>
          <strong>Quick Answer:</strong> To build a freelance CRM in Notion, create two related databases: "Clients" and "Projects". Use Rollups in the Clients database to calculate total project revenue, and use a Board View grouped by "Status" to manage your active sales pipeline.
        </div>

        <h2>Prerequisites</h2>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "var(--spacing-md)" }}>
          <li>A free Notion account</li>
          <li>Basic understanding of Notion Databases</li>
        </ul>

        <h2>Step 1: Setting up the Architecture</h2>
        <p>The foundation of any robust CRM is separating your entities. We don't want to mix companies and projects together.</p>
        
        {/* Mermaid Diagram integration */}
        <div style={{ padding: "2rem", backgroundColor: "var(--bg-color-alt)", border: "1px solid var(--border-color)", borderRadius: "8px", overflowX: "auto", marginBottom: "var(--spacing-md)" }}>
          <pre className="mermaid" style={{ textAlign: "center", margin: 0 }}>
            {`graph LR
    A[Clients Database] -- Relation --> B[Projects Database]
    B -- Rollup --> A`}
          </pre>
          <script type="module" dangerouslySetInnerHTML={{__html: `import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'; mermaid.initialize({ startOnLoad: true });`}}></script>
        </div>

        <h2>Step 2: Configuring the Relations</h2>
        <p>Once your databases are built, add a "Relation" property to the Projects database, and select the Clients database. Now you can link every new project to a specific client.</p>

        {/* AdSense Placement Box */}
        <div style={{ margin: "var(--spacing-md) 0", padding: "1rem", border: "1px dashed #ccc", textAlign: "center", color: "#999" }}>
          [ Google AdSense Native In-Article Ad ]
        </div>

        <h2>Step 3: Calculating Revenue with Rollups</h2>
        <p>In your Clients database, add a "Rollup" property. Point it to the Projects relation, select the "Cost" property, and set the calculation to "Sum".</p>

        {/* FAQ Schema target */}
        <h2 style={{ borderTop: "1px solid var(--border-color)", paddingTop: "var(--spacing-md)" }}>Frequently Asked Questions</h2>
        <h3 style={{ fontSize: "1.1rem" }}>Can Notion replace Salesforce for small agencies?</h3>
        <p>Yes. While Notion lacks native email sequencing, it is more than capable of managing a pipeline for agencies with fewer than 50 active clients.</p>

        {/* B2B Consulting Lead Gen CTA */}
        <div style={{ marginTop: "var(--spacing-lg)", padding: "var(--spacing-md)", backgroundColor: "var(--text-primary)", color: "var(--bg-color)", borderRadius: "8px", textAlign: "center" }}>
          <h3 style={{ marginTop: 0, color: "var(--bg-color)" }}>Need this built for your agency?</h3>
          <p style={{ color: "#CCC", marginBottom: "1rem" }}>Skip the learning curve. Hire our certified experts to build your custom operational OS.</p>
          <button className="btn" style={{ backgroundColor: "var(--bg-color)", color: "var(--text-primary)", fontWeight: "bold" }}>Book a Strategy Call</button>
        </div>
      </article>

      {/* Assets / Sidebar */}
      <aside className="workflow-sidebar">
        <div className="sidebar-sticky-container">
          <h3 style={{ fontSize: "1rem", marginTop: 0 }}>Workflow Assets</h3>
          <p className="text-secondary" style={{ fontSize: "0.875rem", marginBottom: "1rem" }}>Download the complete JSON structure or duplicate the Notion template directly.</p>
          <button className="btn btn-primary" style={{ width: "100%", marginBottom: "0.5rem" }}>Duplicate Template</button>
          <button className="btn" style={{ width: "100%", border: "1px solid var(--border-color)" }}>Download JSON</button>
        </div>
      </aside>

      <style dangerouslySetInnerHTML={{__html: `
        .workflow-sidebar {
          width: 100%;
          margin-top: var(--spacing-lg);
        }
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
      `}} />
    </div>
  );
}

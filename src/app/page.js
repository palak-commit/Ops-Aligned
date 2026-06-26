export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1 style={{ marginBottom: "var(--spacing-sm)" }}>The Modern<br />Workflow Library</h1>
        <p>Turn into an operations expert. Access premium Notion templates, downloadable JSON workflows, and step-by-step implementation guides.</p>
        <a href="/workflows" className="btn btn-primary">Browse Workflows</a>
      </section>

      <section style={{ marginTop: "var(--spacing-xl)" }}>
        <h2 style={{ fontSize: "1.25rem", color: "var(--text-secondary)", fontWeight: 500 }}>Latest Notion Implementations</h2>
        
        <div className="grid">
          <a href="/notion/crm-freelancers" className="card">
            <span className="tag">CRM & Sales</span>
            <h3 className="mb-2" style={{ marginTop: 0 }}>Freelance CRM Dashboard</h3>
            <p className="text-secondary" style={{ fontSize: "0.875rem" }}>Automate lead capture and track your entire sales pipeline within Notion.</p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
              <span>✓ Template</span>
              <span>✓ Video</span>
            </div>
          </a>

          <a href="/notion/project-management-agency" className="card">
            <span className="tag">Project Mgmt</span>
            <h3 className="mb-2" style={{ marginTop: 0 }}>Agency Project OS</h3>
            <p className="text-secondary" style={{ fontSize: "0.875rem" }}>Manage remote teams, sprint planning, and client deliverables using Notion relations.</p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
              <span>✓ Template</span>
              <span>✓ Video</span>
              <span>✓ Diagram</span>
            </div>
          </a>

          <a href="/notion/recurring-invoices" className="card">
            <span className="tag">Automation</span>
            <h3 className="mb-2" style={{ marginTop: 0 }}>Recurring Invoices</h3>
            <p className="text-secondary" style={{ fontSize: "0.875rem" }}>Learn how to automatically generate and track recurring invoices using Notion Buttons.</p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
              <span>✓ JSON</span>
              <span>✓ Video</span>
            </div>
          </a>
        </div>
      </section>

      <section style={{ marginTop: "var(--spacing-xl)", padding: "var(--spacing-lg)", backgroundColor: "var(--bg-color-alt)", borderRadius: "12px", border: "1px solid var(--border-color)", textAlign: "center" }}>
        <h2 style={{ marginTop: 0 }}>Free Operational Utilities</h2>
        <p className="text-secondary" style={{ maxWidth: "500px", margin: "0 auto var(--spacing-md)" }}>Bookmark these tools. They run entirely in your browser and will save you hours of debugging.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="/tools/formula-generator" className="btn" style={{ border: "1px solid var(--border-color)" }}>Notion Formula 2.0 Generator</a>
          <a href="/tools/utm-builder" className="btn" style={{ border: "1px solid var(--border-color)" }}>UTM Link Builder</a>
          <a href="/tools/markdown-converter" className="btn" style={{ border: "1px solid var(--border-color)" }}>Markdown to Block</a>
        </div>
      </section>
    </div>
  );
}

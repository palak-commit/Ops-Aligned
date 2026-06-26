export const metadata = {
  title: "Workflow Libraries | OpsAligned",
  description: "Browse our complete library of Notion workflow implementations.",
};

export default function WorkflowsPage() {
  return (
    <div className="container" style={{ padding: "var(--spacing-md) 0" }}>
      <h1 style={{ marginBottom: "var(--spacing-xs)" }}>Workflow Libraries</h1>
      <p className="text-secondary" style={{ marginBottom: "var(--spacing-lg)" }}>
        Step-by-step implementation guides, downloadable JSON snippets, and video tutorials for Notion.
      </p>

      <div className="grid">
        <a href="/workflows/notion-freelance-crm" className="card">
          <span className="tag">CRM & Sales</span>
          <h3 className="mb-2" style={{ marginTop: 0 }}>How to build a freelance CRM in Notion</h3>
          <p className="text-secondary" style={{ fontSize: "0.875rem" }}>Automate lead capture and track your sales pipeline.</p>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
            <span>✓ JSON Template</span>
            <span>✓ 3m Video</span>
          </div>
        </a>

        <a href="/workflows/notion-recurring-invoices" className="card">
          <span className="tag">Automation</span>
          <h3 className="mb-2" style={{ marginTop: 0 }}>Creating recurring client invoices</h3>
          <p className="text-secondary" style={{ fontSize: "0.875rem" }}>Generate automated monthly invoices using Notion Buttons.</p>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
            <span>✓ JSON Snippet</span>
            <span>✓ 5m Video</span>
          </div>
        </a>
        
        <a href="/workflows/notion-project-dashboard" className="card">
          <span className="tag">Project Mgmt</span>
          <h3 className="mb-2" style={{ marginTop: 0 }}>Automated Notion project dashboard</h3>
          <p className="text-secondary" style={{ fontSize: "0.875rem" }}>Manage remote teams with relations and rollups.</p>
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
            <span>✓ Architecture Diagram</span>
            <span>✓ 4m Video</span>
          </div>
        </a>
      </div>
    </div>
  );
}

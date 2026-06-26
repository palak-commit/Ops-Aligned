export const metadata = {
  title: "Free Utilities | OpsAligned",
  description: "Free operational utilities including Notion Formula Generators and UTM Builders.",
};

export default function ToolsPage() {
  return (
    <div className="container" style={{ padding: "var(--spacing-md) 0" }}>
      <h1 style={{ marginBottom: "var(--spacing-xs)" }}>Free Operational Utilities</h1>
      <p className="text-secondary" style={{ marginBottom: "var(--spacing-lg)" }}>
        Bookmark these tools. Built by operators, for operators.
      </p>

      <div className="grid">
        <a href="/tools/formula-generator" className="card">
          <span className="tag">Notion Tool</span>
          <h3 className="mb-2" style={{ marginTop: 0 }}>Notion Formula 2.0 Generator</h3>
          <p className="text-secondary" style={{ fontSize: "0.875rem" }}>Visually construct complex Notion formulas without writing code.</p>
        </a>

        <a href="/tools/utm-builder" className="card">
          <span className="tag">Marketing Tool</span>
          <h3 className="mb-2" style={{ marginTop: 0 }}>UTM Link Builder</h3>
          <p className="text-secondary" style={{ fontSize: "0.875rem" }}>Generate standard UTM parameters for campaign tracking in Google Analytics.</p>
        </a>

        <a href="/tools/markdown-converter" className="card">
          <span className="tag">Content Tool</span>
          <h3 className="mb-2" style={{ marginTop: 0 }}>Markdown to Blocks</h3>
          <p className="text-secondary" style={{ fontSize: "0.875rem" }}>Convert raw markdown into perfectly formatted Notion JSON blocks.</p>
        </a>
      </div>
    </div>
  );
}

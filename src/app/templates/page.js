import TemplatePreview from "../components/TemplatePreview";

export const metadata = {
  title: "Premium Templates | OpsAligned",
  description: "High-intent premium Notion templates for agencies and freelancers.",
};

export default function TemplatesPage() {
  return (
    <div className="container" style={{ padding: "var(--spacing-md) 0" }}>
      <h1 style={{ marginBottom: "var(--spacing-xs)" }}>Premium Templates</h1>
      <p className="text-secondary" style={{ marginBottom: "var(--spacing-lg)" }}>
        Ready-to-use operational systems. Stop building from scratch.
      </p>

      <div className="grid">
        <div className="card" style={{ display: "flex", flexDirection: "column" }}>
          <TemplatePreview variant="agency" />
          <h3 style={{ marginTop: 0, marginBottom: "0.5rem" }}>Ultimate Agency OS</h3>
          <p className="text-secondary" style={{ fontSize: "0.875rem", flex: 1 }}>The complete operating system for digital agencies. Includes CRM, project management, and client portals.</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
            <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>$149</span>
            <button className="btn btn-primary">Get Template</button>
          </div>
        </div>

        <div className="card" style={{ display: "flex", flexDirection: "column" }}>
          <TemplatePreview variant="invoice" />
          <h3 style={{ marginTop: 0, marginBottom: "0.5rem" }}>Freelance Invoice Tracker</h3>
          <p className="text-secondary" style={{ fontSize: "0.875rem", flex: 1 }}>A simple, bulletproof system for tracking client invoices and managing outstanding payments.</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
            <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>$29</span>
            <button className="btn btn-primary">Get Template</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Renders a realistic CSS mockup of a template's UI (no images needed).
// variant: "agency" -> Kanban board | "invoice" -> invoice table

const wrap = {
  height: "160px",
  borderRadius: "6px",
  marginBottom: "1rem",
  padding: "0.6rem",
  overflow: "hidden",
  background: "var(--bg-color-alt)",
  border: "1px solid var(--border-color)",
  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)",
};

function BrowserBar({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.5rem" }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF5F56" }} />
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FFBD2E" }} />
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#27C93F" }} />
      <span style={{ marginLeft: "0.4rem", fontSize: "0.6rem", color: "var(--text-secondary)", fontWeight: 600 }}>
        {label}
      </span>
    </div>
  );
}

function AgencyBoard() {
  const cols = [
    { title: "Lead", accent: "#5E6AD2", cards: 2 },
    { title: "Active", accent: "#27C93F", cards: 1 },
    { title: "Done", accent: "#888", cards: 2 },
  ];
  return (
    <div style={wrap}>
      <BrowserBar label="Agency OS — CRM" />
      <div style={{ display: "flex", gap: "0.4rem" }}>
        {cols.map((c) => (
          <div key={c.title} style={{ flex: 1, background: "var(--bg-color)", borderRadius: 4, padding: "0.35rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginBottom: "0.35rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.accent }} />
              <span style={{ fontSize: "0.55rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>
                {c.title}
              </span>
            </div>
            {Array.from({ length: c.cards }).map((_, i) => (
              <div key={i} style={{ background: "var(--bg-color-alt)", border: "1px solid var(--border-color)", borderRadius: 3, padding: "0.3rem", marginBottom: "0.25rem" }}>
                <div style={{ height: 4, width: "80%", borderRadius: 2, background: "var(--text-secondary)", opacity: 0.5, marginBottom: 3 }} />
                <div style={{ height: 4, width: "55%", borderRadius: 2, background: "var(--border-color)" }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function InvoiceTable() {
  const rows = [
    { label: "Acme Co.", status: "Paid", color: "#27C93F" },
    { label: "Globex", status: "Pending", color: "#FFBD2E" },
    { label: "Initech", status: "Overdue", color: "#FF5F56" },
    { label: "Umbrella", status: "Paid", color: "#27C93F" },
  ];
  return (
    <div style={wrap}>
      <BrowserBar label="Invoice Tracker" />
      <div style={{ background: "var(--bg-color)", borderRadius: 4, overflow: "hidden", border: "1px solid var(--border-color)" }}>
        <div style={{ display: "flex", padding: "0.3rem 0.4rem", borderBottom: "1px solid var(--border-color)", fontSize: "0.55rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>
          <span style={{ flex: 2 }}>Client</span>
          <span style={{ flex: 1, textAlign: "right" }}>Amount</span>
          <span style={{ flex: 1, textAlign: "right" }}>Status</span>
        </div>
        {rows.map((r) => (
          <div key={r.label} style={{ display: "flex", alignItems: "center", padding: "0.28rem 0.4rem", borderBottom: "1px solid var(--border-color)", fontSize: "0.6rem" }}>
            <span style={{ flex: 2, color: "var(--text-primary)" }}>{r.label}</span>
            <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <span style={{ height: 4, width: "50%", borderRadius: 2, background: "var(--border-color)" }} />
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <span style={{ fontSize: "0.5rem", fontWeight: 700, color: r.color, background: `${r.color}22`, padding: "0.05rem 0.3rem", borderRadius: 8 }}>
                {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TemplatePreview({ variant }) {
  return variant === "invoice" ? <InvoiceTable /> : <AgencyBoard />;
}

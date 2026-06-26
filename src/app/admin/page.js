export default function AdminDashboard() {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--spacing-xl)" }}>
        <h1 style={{ margin: 0 }}>The Cockpit (Publishing OS)</h1>
        <button style={{ padding: "0.5rem 1rem", backgroundColor: "var(--text-primary)", color: "var(--bg-color)", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}>
          + New Workflow
        </button>
      </header>

      {/* KPI Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--spacing-md)", marginBottom: "var(--spacing-xl)" }}>
        
        {/* Revenue Card */}
        <div style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-color-alt)", border: "1px solid var(--border-color)", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: 0, textTransform: "uppercase" }}>Total Revenue (30d)</h3>
          <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--text-primary)" }}>$0.00</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Stripe: $0.00 | AdSense: $0.00
          </div>
        </div>

        {/* Traffic Card */}
        <div style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-color-alt)", border: "1px solid var(--border-color)", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: 0, textTransform: "uppercase" }}>Organic Traffic (30d)</h3>
          <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--text-primary)" }}>0</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            GSC Clicks: 0 | Plausible Active: 0
          </div>
        </div>

        {/* Content Velocity Card */}
        <div style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-color-alt)", border: "1px solid var(--border-color)", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: 0, textTransform: "uppercase" }}>Content Velocity</h3>
          <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--text-primary)" }}>0 / 30</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Published Workflows (AdSense Goal)
          </div>
        </div>

        {/* System Health Card */}
        <div style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-color-alt)", border: "1px solid var(--border-color)", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: 0, textTransform: "uppercase" }}>OS Health</h3>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#10B981", display: "flex", alignItems: "center", gap: "0.5rem", height: "40px" }}>
            <div style={{ width: "12px", height: "12px", backgroundColor: "#10B981", borderRadius: "50%" }}></div>
            All Systems Nominal
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            0 Broken Links | 0 Refresh Alerts
          </div>
        </div>

      </div>

      {/* Editor Needs Refresh List */}
      <h2 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>Action Required (Decay Engine)</h2>
      <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "var(--bg-color-alt)", border: "1px dashed var(--border-color)", borderRadius: "8px", color: "var(--text-secondary)" }}>
        No content is currently experiencing traffic decay (Traffic drop {'>'} 15% AND Age {'>'} 180 days).
      </div>
    </div>
  );
}

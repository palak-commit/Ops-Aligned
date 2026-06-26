export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "var(--bg-color)" }}>
      {/* Admin Sidebar */}
      <aside style={{ width: "250px", backgroundColor: "var(--bg-color-alt)", borderRight: "1px solid var(--border-color)", padding: "var(--spacing-md)" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "var(--spacing-lg)", color: "var(--text-primary)" }}>OpsAligned OS</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <a href="/admin" style={{ padding: "0.5rem", backgroundColor: "var(--accent)", color: "var(--bg-color)", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>Dashboard</a>
          <a href="/admin/content" style={{ padding: "0.5rem", color: "var(--text-secondary)", textDecoration: "none" }}>Content Factory</a>
          <a href="/admin/assets" style={{ padding: "0.5rem", color: "var(--text-secondary)", textDecoration: "none" }}>Asset Pipeline</a>
          <a href="/admin/seo" style={{ padding: "0.5rem", color: "var(--text-secondary)", textDecoration: "none" }}>SEO & Schema</a>
          <a href="/admin/audience" style={{ padding: "0.5rem", color: "var(--text-secondary)", textDecoration: "none" }}>Audience (ConvertKit)</a>
          <a href="/admin/settings" style={{ padding: "0.5rem", color: "var(--text-secondary)", textDecoration: "none" }}>Settings</a>
        </nav>
      </aside>

      {/* Main Admin Content */}
      <main style={{ flex: 1, padding: "var(--spacing-xl)", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}

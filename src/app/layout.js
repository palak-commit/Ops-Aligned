import "./globals.css";

export const metadata = {
  title: "OpsAligned | The Notion Workflow Library",
  description: "Turn non-technical founders into automation experts. Download templates, copy JSON workflows, and master business operations.",
  openGraph: {
    title: "OpsAligned | The Notion Workflow Library",
    description: "Turn non-technical founders into automation experts.",
    url: "https://opsaligned.com",
    siteName: "OpsAligned",
    images: [
      {
        url: "https://opsaligned.com/og-default.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsAligned | The Notion Workflow Library",
    description: "Turn non-technical founders into automation experts.",
    images: ["https://opsaligned.com/og-default.jpg"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container nav">
            <a href="/" className="logo">OpsAligned</a>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <input type="search" placeholder="Search workflows..." style={{ padding: "0.25rem 0.5rem", borderRadius: "4px", border: "1px solid var(--border-color)", fontSize: "0.875rem", backgroundColor: "var(--bg-color)", color: "var(--text-primary)" }} />
              <nav className="nav-links">
                <a href="/workflows">Workflows</a>
                <a href="/templates">Templates</a>
                <a href="/tools">Free Tools</a>
                <a href="/about">About</a>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ borderTop: "1px solid var(--border-color)", padding: "var(--spacing-md) 0", marginTop: "var(--spacing-xl)" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", color: "var(--text-secondary)", fontSize: "0.875rem" }}>
            <span>© 2026 OpsAligned. All rights reserved.</span>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

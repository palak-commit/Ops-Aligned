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

import CookieBanner from "./components/CookieBanner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Verification */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3720190862522195" crossOrigin="anonymous"></script>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        <header className="header">
          <div className="container nav">
            <a href="/" className="logo">OpsAligned</a>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
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
        <CookieBanner />
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

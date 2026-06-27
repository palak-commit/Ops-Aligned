"use client";

export default function NewsletterOptIn() {
  return (
    <div style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-color-alt)", border: "1px solid var(--border-color)", borderRadius: "8px", marginTop: "var(--spacing-lg)" }}>
      <h3 style={{ marginTop: 0, fontSize: "1.1rem" }}>Join 5,000+ Operators</h3>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1rem" }}>
        Get one new Notion workflow JSON snippet delivered to your inbox every Tuesday. No spam, ever.
      </p>
      <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }} onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="operator@agency.com" 
          required
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid var(--border-color)", fontSize: "0.875rem", backgroundColor: "var(--bg-color)", color: "var(--text-primary)" }}
        />
        <button type="submit" className="btn" style={{ width: "100%", justifyContent: "center" }}>
          Subscribe
        </button>
      </form>
    </div>
  );
}

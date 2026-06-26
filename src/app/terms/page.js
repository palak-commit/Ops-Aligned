export const metadata = {
  title: "Terms of Service | OpsAligned",
};

export default function TermsPage() {
  return (
    <div className="container" style={{ padding: "var(--spacing-md) 0", maxWidth: "600px" }}>
      <h1 style={{ marginBottom: "var(--spacing-md)" }}>Terms of Service</h1>
      <p className="text-secondary">Last Updated: March 2026</p>
      
      <h2 style={{ fontSize: "1.25rem" }}>1. Acceptance of Terms</h2>
      <p>By accessing and using OpsAligned, you accept and agree to be bound by the terms and provision of this agreement.</p>

      <h2 style={{ fontSize: "1.25rem" }}>2. Use License for Templates & JSON</h2>
      <p>The free Notion templates and JSON workflows provided on this site are for personal and commercial use in your own business operations. You may not resell or redistribute our digital products without explicit written permission.</p>

      <h2 style={{ fontSize: "1.25rem" }}>3. Disclaimer</h2>
      <p>The materials on OpsAligned are provided on an 'as is' basis. We make no warranties, expressed or implied, regarding the reliability or expected financial outcomes of implementing these operational systems.</p>
    </div>
  );
}

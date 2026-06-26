export const metadata = {
  title: "Privacy Policy | OpsAligned",
};

export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: "var(--spacing-md) 0", maxWidth: "600px" }}>
      <h1 style={{ marginBottom: "var(--spacing-md)" }}>Privacy Policy</h1>
      <p className="text-secondary">Last Updated: March 2026</p>
      
      <h2 style={{ fontSize: "1.25rem" }}>1. Information We Collect</h2>
      <p>We only collect information that you explicitly provide to us (such as your email address when subscribing to our newsletter) and standard analytics data (such as IP addresses and browser types) to improve our website experience.</p>

      <h2 style={{ fontSize: "1.25rem" }}>2. Google AdSense</h2>
      <p>We use Google AdSense to display advertisements on our website. Google, as a third-party vendor, uses cookies to serve ads based on a user's prior visits to our website or other websites. Users may opt-out of personalized advertising by visiting Google's Ads Settings.</p>

      <h2 style={{ fontSize: "1.25rem" }}>3. Data Security</h2>
      <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
    </div>
  );
}

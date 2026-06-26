export const metadata = {
  title: "About Us | OpsAligned",
  description: "The missing manual for modern business operations.",
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: "var(--spacing-md) 0", maxWidth: "600px" }}>
      <h1 style={{ marginBottom: "var(--spacing-md)" }}>About OpsAligned</h1>
      <p>OpsAligned is the missing manual for modern business operations.</p>
      
      <h2 style={{ fontSize: "1.25rem" }}>Our Mission</h2>
      <p>We exist to democratize business automation. We believe that non-technical founders shouldn't have to hire expensive engineering agencies to build basic operational systems.</p>

      <h2 style={{ fontSize: "1.25rem" }}>The Workflow Library Approach</h2>
      <p>Unlike standard tech blogs that write generic "X vs Y" comparison posts, we publish Workflow Libraries. Every piece of content we produce is a tangible asset: a downloadable JSON snippet, a Notion template, an architecture diagram, and a step-by-step video tutorial.</p>

      <h2 style={{ fontSize: "1.25rem" }}>Editorial Policy & EEAT</h2>
      <p>Every workflow is built, tested, and documented by human operators. We never use AI to write our tutorials, because AI cannot understand the nuances of production-grade workflows.</p>
    </div>
  );
}

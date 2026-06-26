# Phase 2: SEO Research & Best Practices (2026 Edition)

## 1. Core SEO Concepts for 2026

### Search Intent
Content must exactly match what the user is trying to accomplish:
- **Informational**: User wants to learn (e.g., "How to start a garden"). Needs comprehensive guides, steps, videos.
- **Navigational**: User is looking for a specific page (e.g., "Facebook login").
- **Commercial Investigation**: User is researching before buying (e.g., "Best gardening tools 2026"). Needs comparisons, pros/cons, reviews.
- **Transactional**: User wants to buy (e.g., "Buy gardening gloves online"). Needs product pages.

### Topical Authority & Semantic SEO
Google ranks *entities*, not just strings of text. To rank, a site must be recognized as an authority on a specific topic.
- **Entity SEO**: Optimize for the concepts behind keywords. Link related entities together (e.g., linking "Coffee Beans" -> "Roasting Profiles" -> "Caffeine Content").
- **Topical Map**: A comprehensive plan covering every possible question and subtopic within a niche before expanding outward.

### Content Clusters & Internal Linking
- **Pillar Pages**: Broad, comprehensive guides (e.g., "The Ultimate Guide to Personal Finance").
- **Cluster Content**: Specific, deep-dive articles (e.g., "How to Budget for Groceries").
- **Internal Linking Strategy**: Every cluster article must link back to the pillar page, and the pillar page links out to cluster articles. Use exact or partial match anchor text naturally.

### Programmatic SEO (pSEO)
- **Appropriate Use**: Creating standardized pages for highly structured data (e.g., "Weather in [City]", "Stock price of [Ticker]").
- **Inappropriate Use**: Spinning articles using AI replacing one keyword (e.g., "Best Plumber in [City]" duplicated 1,000 times).

---

## 2. Advanced On-Page & SERP Features

### Featured Snippets & People Also Ask (PAA)
- **Format for Snippets**: Use explicit query-based H2s followed immediately by a concise, bolded 40-50 word answer, or a well-structured list/table.
- **FAQ Strategy**: Include an FAQ section at the bottom of every informational article addressing exact PAA queries from the SERP.

### Media SEO (Image & Video)
- **Image SEO**: Next-gen formats (WebP/AVIF), descriptive filenames (`red-running-shoes.webp`), accurate alt text, and semantic surrounding text.
- **Video SEO**: Embed relevant YouTube/Custom videos. Use `VideoObject` schema, provide transcripts, and add chapter timestamps.

### Schema Markup
Essential JSON-LD structured data:
- `Article` / `NewsArticle` / `BlogPosting`
- `FAQPage` (crucial for PAA)
- `BreadcrumbList` (crucial for site architecture)
- `Organization` / `Person` (for EEAT)
- `Review` / `Product` (for commercial intent)

---

## 3. Content Lifecycle Management

### Freshness & Content Decay
- **Freshness**: Some queries demand up-to-date info ("Best laptops 2026"). Ensure titles, meta descriptions, and core data are updated annually.
- **Content Decay Audit**: Review analytics quarterly. If an article drops >20% in traffic over 3 months, update it by adding new sections, refreshing images, and updating the publish date (if changes are substantial).

### Topical Depth
- Move beyond "skyscraping" (just making a longer article). Add *Depth*: unique data, expert interviews, custom graphics, or tools/calculators.

---

## 4. Technical SEO & Architecture

### Core Web Vitals & Page Experience
- **LCP (Largest Contentful Paint)**: < 2.5 seconds. Optimize main images, use CDN, implement caching.
- **INP (Interaction to Next Paint)**: < 200 ms. Minimize main-thread work, defer non-critical JS.
- **CLS (Cumulative Layout Shift)**: < 0.1. Set explicit width/height on images and ads. Reserve space for dynamic elements.

### Indexing & Crawl Budget
- Ensure lean HTML. Use `robots.txt` to block low-value pages (e.g., internal search results, tag pages).
- Keep the site architecture flat: no page should be more than 3 clicks away from the homepage.

### Canonicalization & URL Architecture
- **URL Structure**: Short, descriptive, hyphen-separated. (e.g., `domain.com/category/target-keyword`).
- **Canonical Tags**: Self-referencing canonicals on all standard pages to prevent duplicate content issues from parameters (e.g., `?utm_source=...`).

### Information Architecture (IA)
- Logical hierarchy: Home -> Category -> Subcategory -> Article.
- Breadcrumbs implemented both visually and via Schema.

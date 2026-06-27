export const airtableArticles = [
  {
    slug: "airtable-vs-google-sheets",
    category: "Airtable",
    title: "Airtable vs Google Sheets: Which Should You Use?",
    metaTitle: "Airtable vs Google Sheets 2026 (When to Use Each)",
    metaDescription:
      "Airtable vs Google Sheets compared on databases, collaboration, automation, and price. Learn which tool fits your project in 2026 with clear examples.",
    excerpt: "When a spreadsheet stops being enough and you need a real database.",
    date: "2026-06-05",
    readingTime: 9,
    intent: "Commercial",
    keyTakeaways: [
      "Google Sheets is a spreadsheet; Airtable is a database with a spreadsheet-like interface.",
      "Sheets wins for free-form calculations and quick math; Airtable wins for structured, relational data.",
      "Choose Airtable when records relate to each other (projects, tasks, clients); choose Sheets for ad-hoc analysis.",
    ],
    intro: [
      "People treat Airtable and Google Sheets as interchangeable, but they solve different problems. One is a calculator on steroids; the other is a friendly database.",
      "After moving several teams off overgrown spreadsheets, here is how I decide which tool a project actually needs.",
    ],
    sections: [
      {
        h: "The core difference",
        p: [
          "Google Sheets is cell-based: any cell can hold anything. Airtable is record-based: each row is a structured item with typed fields. That structure is what makes Airtable a database, not a spreadsheet.",
        ],
      },
      {
        h: "When Google Sheets wins",
        list: [
          "Heavy numerical analysis and complex formulas.",
          "Quick, throwaway calculations.",
          "Pivot tables and financial modeling.",
        ],
      },
      {
        h: "When Airtable wins",
        list: [
          "Data that relates across tables (clients ↔ projects ↔ tasks).",
          "Rich field types like attachments, single-select, and linked records.",
          "Multiple views (grid, kanban, calendar) over the same data.",
        ],
      },
      {
        h: "Cost and scale",
        p: [
          "Sheets is free with a Google account. Airtable has a free tier with record limits and paid plans that scale with rows and features. For relational work, the upgrade usually pays off.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Airtable just a fancy spreadsheet?",
        a: "No. It looks like one but works like a relational database — records are structured items you can link across tables, which spreadsheets cannot do cleanly.",
      },
      {
        q: "Can Airtable replace Google Sheets entirely?",
        a: "For structured, relational data, yes. For heavy number-crunching and pivot analysis, Sheets is still better. Many teams use both.",
      },
      {
        q: "Which is better for beginners?",
        a: "Google Sheets is more familiar to most people. Airtable is also beginner-friendly but introduces database concepts like linked records.",
      },
    ],
    related: ["airtable-vs-notion", "airtable-interfaces-guide", "airtable-junction-table"],
    sources: [
      { label: "Airtable guides", url: "https://support.airtable.com/" },
      { label: "Google Sheets help", url: "https://support.google.com/docs/topic/9054603" },
    ],
  },
  {
    slug: "airtable-interfaces-guide",
    category: "Airtable",
    title: "How to Use Airtable Interfaces (Step-by-Step)",
    metaTitle: "Airtable Interfaces Guide 2026: Build Apps Without Code",
    metaDescription:
      "Learn how to use Airtable Interfaces to turn your data into dashboards and apps without code. Build record review, dashboards, and forms step-by-step.",
    excerpt: "Turn raw Airtable data into clean dashboards and apps — no code required.",
    date: "2026-06-04",
    readingTime: 7,
    intent: "Informational",
    keyTakeaways: [
      "Interfaces are custom, app-like front ends built on top of your Airtable data.",
      "They let you show stakeholders only what they need, hiding the raw tables.",
      "Layouts include dashboards, record review, and form-style pages.",
    ],
    intro: [
      "Your Airtable base might be powerful, but raw grids overwhelm non-technical teammates. Interfaces solve that by giving people a polished, focused view of just the data they need.",
      "This guide walks through building your first Interface, from picking a layout to sharing it.",
    ],
    sections: [
      {
        h: "What Interfaces are for",
        p: [
          "An Interface is a no-code front end that sits on your base. Instead of handing someone a 20-field table, you give them a clean dashboard or a single-record view tailored to their role.",
        ],
      },
      {
        h: "Choosing a layout",
        list: [
          "Dashboard — charts and numbers for an at-a-glance overview.",
          "Record review — step through records one at a time.",
          "Record summary — a detailed page for a single item.",
        ],
      },
      {
        h: "Building and sharing",
        p: [
          "Drag elements (charts, fields, buttons, filters) onto the canvas, connect them to your tables, then share the Interface with specific people. They interact with the data without ever touching the base structure.",
        ],
      },
    ],
    faq: [
      {
        q: "Do Interfaces change my underlying data?",
        a: "Edits made through an Interface update the source records, but the Interface itself is just a presentation layer — it does not duplicate or alter your table structure.",
      },
      {
        q: "Are Interfaces free?",
        a: "Interfaces are available on Airtable's free and paid plans, with more elements and permissions unlocked on higher tiers.",
      },
      {
        q: "Can I restrict what people see?",
        a: "Yes. Interfaces let you control which fields and records appear and can be shared with view-only or edit permissions per person.",
      },
    ],
    related: ["airtable-vs-google-sheets", "airtable-automations-guide", "airtable-rollup-fields"],
    sources: [{ label: "Airtable Interface Designer", url: "https://support.airtable.com/docs/interface-designer-overview" }],
  },
  {
    slug: "airtable-inventory-template",
    category: "Airtable",
    title: "Build an Airtable Inventory Management System",
    metaTitle: "Airtable Inventory Management Template (2026 Guide)",
    metaDescription:
      "Build an inventory management system in Airtable with stock tracking, low-stock alerts, and supplier links. Step-by-step guide with a free template.",
    excerpt: "Track stock levels, suppliers, and reorder alerts in one Airtable base.",
    date: "2026-06-03",
    readingTime: 8,
    intent: "Informational",
    keyTakeaways: [
      "A good inventory base links Products, Suppliers, and Stock Movements.",
      "A formula field can flag items that fall below their reorder point.",
      "Automations can email you (or the supplier) when stock runs low.",
    ],
    intro: [
      "Spreadsheets break down fast for inventory because stock relates to suppliers, orders, and movements. Airtable's relational model handles this naturally.",
      "Here is how to build an inventory system that tells you what to reorder before you run out.",
    ],
    sections: [
      {
        h: "Step 1: Set up the tables",
        list: [
          "Products — name, SKU, current stock, reorder point.",
          "Suppliers — name, contact, linked products.",
          "Stock Movements — date, product, quantity in/out.",
        ],
      },
      {
        h: "Step 2: Calculate live stock",
        p: [
          "Use a rollup on Products that sums quantities from Stock Movements, so current stock updates automatically as you log items in and out.",
        ],
      },
      {
        h: "Step 3: Flag low stock",
        p: [
          "Add a formula field: if current stock is below the reorder point, output 'Reorder'. Filter a view to show only those items.",
        ],
      },
      {
        h: "Step 4: Automate alerts",
        p: [
          "Create an automation that watches the 'Reorder' view and emails you or the linked supplier when an item needs restocking.",
        ],
      },
    ],
    faq: [
      {
        q: "Can Airtable handle barcode scanning?",
        a: "Yes — the Airtable mobile app supports barcode fields, so you can scan items to look them up or log movements.",
      },
      {
        q: "Is Airtable good for small business inventory?",
        a: "Very. For small to mid-size catalogs it offers relational tracking, alerts, and automations without dedicated inventory software costs.",
      },
      {
        q: "How do I avoid negative stock?",
        a: "Add validation logic in your movement workflow or an automation that flags any product whose calculated stock drops below zero.",
      },
    ],
    related: ["airtable-rollup-fields", "airtable-automations-guide", "airtable-formulas-cheat-sheet"],
    sources: [{ label: "Airtable templates", url: "https://www.airtable.com/templates" }],
  },
  {
    slug: "airtable-junction-table",
    category: "Airtable",
    title: "What Is an Airtable Junction Table? (Many-to-Many)",
    metaTitle: "Airtable Junction Tables Explained (Many-to-Many 2026)",
    metaDescription:
      "Learn what an Airtable junction table is and how it solves many-to-many relationships. Clear example with students and classes you can copy today.",
    excerpt: "The clean way to model many-to-many relationships in Airtable.",
    date: "2026-06-02",
    readingTime: 6,
    intent: "Informational",
    keyTakeaways: [
      "A junction table sits between two tables to model many-to-many relationships.",
      "It stores one record per pairing, plus any data about that pairing.",
      "Without it, many-to-many links get messy and hard to report on.",
    ],
    intro: [
      "When each record on both sides can relate to many records on the other — students and classes, products and orders — a direct link gets awkward. A junction table is the proper solution.",
      "This guide explains the concept with a simple example you can replicate.",
    ],
    sections: [
      {
        h: "The problem with many-to-many",
        p: [
          "A student takes many classes, and a class has many students. Linking them directly works but gives you nowhere to store data about each enrollment, like a grade or attendance.",
        ],
      },
      {
        h: "The junction table solution",
        p: [
          "Create an 'Enrollments' table. Each record links to one Student and one Class, and can hold enrollment-specific fields like grade or status. Both original tables link to Enrollments instead of each other.",
        ],
      },
      {
        h: "Why it pays off",
        p: [
          "Now you can report cleanly: all classes for a student, all students in a class, and the specifics of each pairing. Rollups work properly, and the data stays tidy as it grows.",
        ],
      },
    ],
    faq: [
      {
        q: "When do I need a junction table?",
        a: "Whenever you have a many-to-many relationship and need to store information about the pairing itself, like a grade, quantity, or date.",
      },
      {
        q: "Is a junction table the same as a linked record?",
        a: "It uses linked records, but it is a dedicated table whose whole purpose is to connect two other tables and hold data about each connection.",
      },
      {
        q: "Does Notion need junction tables too?",
        a: "Notion handles many-to-many relations more directly, but a junction-style database is still useful when you need to store data about each relationship.",
      },
    ],
    related: ["airtable-rollup-fields", "airtable-vs-google-sheets", "airtable-formulas-cheat-sheet"],
    sources: [{ label: "Airtable: linked records", url: "https://support.airtable.com/docs/linked-record-fields-overview" }],
  },
  {
    slug: "connect-airtable-to-webflow",
    category: "Airtable",
    title: "How to Connect Airtable to Webflow (CMS Sync)",
    metaTitle: "Connect Airtable to Webflow 2026: Sync Your CMS (Guide)",
    metaDescription:
      "Sync Airtable to Webflow CMS so content edits flow to your site automatically. Compare native, Zapier, and Make methods in this step-by-step guide.",
    excerpt: "Manage site content in Airtable and push it to Webflow automatically.",
    date: "2026-06-01",
    readingTime: 7,
    intent: "Informational",
    keyTakeaways: [
      "You can sync Airtable records to Webflow CMS collections via automation tools.",
      "This lets non-technical teammates edit content in Airtable, not Webflow.",
      "Map Airtable fields to Webflow CMS fields carefully to avoid broken items.",
    ],
    intro: [
      "Webflow's CMS is great for design but clunky for bulk content editing. Many teams prefer to manage content in Airtable and sync it over — best of both worlds.",
      "Here are the main ways to connect the two and when to use each.",
    ],
    sections: [
      {
        h: "Method 1: Automation tools",
        p: [
          "Use Zapier or Make to watch an Airtable table and create or update Webflow CMS items when records change. This is the most flexible approach and needs no code.",
        ],
      },
      {
        h: "Method 2: Dedicated sync tools",
        p: [
          "Tools built specifically for Airtable-to-Webflow sync offer two-way updates and field mapping UIs, which can be worth it for content-heavy sites.",
        ],
      },
      {
        h: "Field mapping tips",
        list: [
          "Match Airtable field types to compatible Webflow field types.",
          "Use a unique key (like a slug) to update rather than duplicate items.",
          "Publish the Webflow item in the same automation if you want changes live immediately.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I sync Airtable to Webflow without code?",
        a: "Yes. Zapier, Make, and dedicated sync tools all connect the two without writing code, using field mapping interfaces.",
      },
      {
        q: "Is the sync two-way?",
        a: "It can be, depending on the tool. Automation platforms usually do one-way (Airtable → Webflow); some dedicated tools support two-way sync.",
      },
      {
        q: "Will syncing publish my Webflow site automatically?",
        a: "Only if you include a publish step. By default, new CMS items may stay as drafts until you publish.",
      },
    ],
    related: ["airtable-automations-guide", "airtable-interfaces-guide", "best-zapier-alternatives"],
    sources: [
      { label: "Webflow CMS API", url: "https://developers.webflow.com/" },
      { label: "Airtable automations", url: "https://support.airtable.com/docs/getting-started-with-airtable-automations" },
    ],
  },
  {
    slug: "airtable-automations-guide",
    category: "Airtable",
    title: "Airtable Automations: A Practical Getting-Started Guide",
    metaTitle: "Airtable Automations Guide 2026 (Triggers + Actions)",
    metaDescription:
      "Learn Airtable automations from scratch — triggers, actions, and real examples like Slack alerts and auto-emails. Build your first automation today.",
    excerpt: "Build trigger-and-action automations inside Airtable without any external tools.",
    date: "2026-05-30",
    readingTime: 7,
    intent: "Informational",
    keyTakeaways: [
      "Airtable has built-in automations — no Zapier required for in-base actions.",
      "Each automation is a trigger plus one or more actions.",
      "Common uses: send notifications, update records, and email on status change.",
    ],
    intro: [
      "Before reaching for an external tool, check what Airtable can do natively — its built-in automations cover a surprising amount of everyday work for free.",
      "This guide shows how triggers and actions fit together, with examples you can build in minutes.",
    ],
    sections: [
      {
        h: "How automations work",
        p: [
          "Pick a trigger (a record enters a view, a field changes, a form is submitted), then add actions (update a record, send an email, post to Slack). Airtable runs the actions whenever the trigger fires.",
        ],
      },
      {
        h: "Example: status-change alert",
        p: [
          "Trigger when a project's Status becomes 'Blocked', then send a Slack message to the manager. The team hears about blockers immediately instead of at the next standup.",
        ],
      },
      {
        h: "Example: auto-fill on creation",
        p: [
          "When a new record is created, run an action that sets a default owner or stamps a created-date field, keeping data consistent.",
        ],
      },
    ],
    faq: [
      {
        q: "Are Airtable automations free?",
        a: "Yes, with a monthly run limit on the free plan. Paid plans raise the number of automation runs significantly.",
      },
      {
        q: "When should I use Zapier instead?",
        a: "Use Zapier or Make when you need to connect Airtable to apps it cannot reach natively, or for complex multi-app logic. For in-base actions, native automations are simpler.",
      },
      {
        q: "Can automations run custom code?",
        a: "Yes. Airtable automations include a 'Run a script' action for advanced logic when the standard actions are not enough.",
      },
    ],
    related: ["connect-airtable-to-webflow", "airtable-interfaces-guide", "airtable-inventory-template"],
    sources: [{ label: "Airtable automations", url: "https://support.airtable.com/docs/getting-started-with-airtable-automations" }],
  },
  {
    slug: "airtable-formulas-cheat-sheet",
    category: "Airtable",
    title: "Airtable Formulas Cheat Sheet (With Examples)",
    metaTitle: "Airtable Formulas Cheat Sheet 2026 (Copy-Paste Examples)",
    metaDescription:
      "An Airtable formulas cheat sheet with copy-paste examples for text, dates, logic, and rollups. Bookmark this reference and build smarter bases.",
    excerpt: "Copy-paste Airtable formulas for text, dates, and conditional logic.",
    date: "2026-05-28",
    readingTime: 8,
    intent: "Informational",
    keyTakeaways: [
      "Airtable formulas use field references in curly braces, like {Field Name}.",
      "The big three categories are text, dates, and logical functions.",
      "IF() and nested IFs handle most conditional needs.",
    ],
    intro: [
      "Airtable formulas unlock automation and reporting, but the syntax differs from spreadsheets. A handful of patterns cover most real-world needs.",
      "Keep this cheat sheet handy — these are the formulas I use most often.",
    ],
    sections: [
      {
        h: "Text formulas",
        list: [
          "Combine fields: CONCATENATE({First}, ' ', {Last})",
          "Uppercase: UPPER({Name})",
          "Trim spaces: TRIM({Input})",
        ],
      },
      {
        h: "Date formulas",
        list: [
          "Days until due: DATETIME_DIFF({Due}, TODAY(), 'days')",
          "Format date: DATETIME_FORMAT({Due}, 'MMM D, YYYY')",
          "Is overdue: IF(IS_BEFORE({Due}, TODAY()), '⚠️ Overdue', 'OK')",
        ],
      },
      {
        h: "Logical formulas",
        list: [
          "Simple IF: IF({Score} >= 50, 'Pass', 'Fail')",
          "Nested: IF({S}>=90,'A',IF({S}>=80,'B','C'))",
          "Blank check: IF({Email}, 'Has email', 'Missing')",
        ],
      },
    ],
    faq: [
      {
        q: "How do I reference a field in an Airtable formula?",
        a: "Wrap the field name in curly braces, like {Order Total}. Airtable also offers an autocomplete dropdown as you type.",
      },
      {
        q: "Can Airtable formulas reference other tables?",
        a: "Not directly. To use data from another table, bring it in with a lookup or rollup field first, then reference that field in your formula.",
      },
      {
        q: "Why is my formula returning an error?",
        a: "Common causes are mismatched data types (text vs number), missing closing parentheses, or referencing a blank field. Build formulas in small pieces to isolate the issue.",
      },
    ],
    related: ["airtable-rollup-fields", "airtable-junction-table", "airtable-inventory-template"],
    sources: [{ label: "Airtable formula reference", url: "https://support.airtable.com/docs/formula-field-reference" }],
  },
  {
    slug: "airtable-vs-notion",
    category: "Airtable",
    title: "Airtable vs Notion: Which Database Tool Wins?",
    metaTitle: "Airtable vs Notion 2026: Which Is Better for You?",
    metaDescription:
      "Airtable vs Notion compared on databases, docs, automation, and pricing. Find out which all-in-one tool fits your team's workflow in 2026.",
    excerpt: "Two flexible tools, two philosophies — here's how to pick the right one.",
    date: "2026-05-26",
    readingTime: 8,
    intent: "Commercial",
    keyTakeaways: [
      "Airtable is a database-first tool; Notion is a docs-first tool with databases attached.",
      "Choose Airtable for serious data work; choose Notion for knowledge, notes, and lightweight databases.",
      "Many teams run both — Notion for docs, Airtable for operational data.",
    ],
    intro: [
      "Airtable and Notion overlap enough to cause real indecision, but their centers of gravity differ. Knowing which one is 'database-first' versus 'document-first' makes the choice clear.",
      "Here is a practical comparison based on what each tool is genuinely best at.",
    ],
    sections: [
      {
        h: "Airtable is database-first",
        p: [
          "Airtable treats data as the star: strong field types, robust filtering, powerful linked records, and an interface designer. If your work is fundamentally about records and relationships, Airtable feels more solid.",
        ],
      },
      {
        h: "Notion is document-first",
        p: [
          "Notion centers on pages and writing, with databases woven in. It is unbeatable for wikis, notes, and docs that occasionally need structured data.",
        ],
      },
      {
        h: "Automation and pricing",
        p: [
          "Both offer native automations and buttons. Pricing is comparable; Airtable's limits are record-based while Notion's are member- and block-based. Match the limit model to how your data grows.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Airtable or Notion better for databases?",
        a: "Airtable. It offers richer field types, stronger filtering, and a dedicated interface builder. Notion's databases are excellent but lighter.",
      },
      {
        q: "Is Notion or Airtable better for notes?",
        a: "Notion, by a wide margin. Its document editor and nesting make it the better home for wikis, notes, and long-form content.",
      },
      {
        q: "Can I use both together?",
        a: "Yes, and many teams do. A common split is Notion for documentation and Airtable for operational data, connected via automation tools.",
      },
    ],
    related: ["airtable-vs-google-sheets", "notion-databases-for-beginners", "airtable-interfaces-guide"],
    sources: [
      { label: "Airtable", url: "https://www.airtable.com/" },
      { label: "Notion", url: "https://www.notion.so/" },
    ],
  },
  {
    slug: "airtable-rollup-fields",
    category: "Airtable",
    title: "Airtable Rollup Fields Explained (With Examples)",
    metaTitle: "Airtable Rollup Fields Explained 2026 (Beginner Guide)",
    metaDescription:
      "Understand Airtable rollup fields with clear examples. Learn to sum, count, and summarize linked records to build powerful reports. Beginner-friendly guide.",
    excerpt: "Summarize linked records — sums, counts, and more — with rollup fields.",
    date: "2026-05-24",
    readingTime: 6,
    intent: "Informational",
    keyTakeaways: [
      "A rollup summarizes values from records linked through a linked-record field.",
      "You choose the linked field, the value to pull, and an aggregation (SUM, COUNT, etc.).",
      "Rollups require a linked-record field to exist first.",
    ],
    intro: [
      "Rollups are how Airtable turns linked data into useful numbers — total order value, number of tasks, latest activity date. They are simpler than they first appear.",
      "This guide explains rollups with concrete examples you can adapt.",
    ],
    sections: [
      {
        h: "What a rollup needs",
        p: [
          "A rollup field operates through an existing linked-record field. You select that link, choose which field of the linked records to read, and pick an aggregation function.",
        ],
      },
      {
        h: "Common aggregations",
        list: [
          "SUM(values) — total of a numeric field, e.g., order revenue.",
          "COUNT(values) — how many linked records exist.",
          "MAX(values) — the latest date or highest number.",
          "ARRAYJOIN(values) — combine linked text into one string.",
        ],
      },
      {
        h: "Example: revenue per customer",
        p: [
          "Link Orders to Customers, then add a rollup on Customers that SUMs the Total field of linked Orders. Each customer now shows lifetime spend automatically.",
        ],
      },
    ],
    faq: [
      {
        q: "What's the difference between a rollup and a lookup?",
        a: "A lookup simply displays values from linked records. A rollup goes further and aggregates them — summing, counting, or otherwise summarizing.",
      },
      {
        q: "Can a rollup use a formula?",
        a: "Yes. Rollups let you apply a function and even wrap the result in formula-like aggregations for more advanced summaries.",
      },
      {
        q: "Why is my rollup blank?",
        a: "Usually because no records are linked yet, or the chosen field is empty on the linked records. Confirm the link and the source field both have data.",
      },
    ],
    related: ["airtable-junction-table", "airtable-formulas-cheat-sheet", "airtable-inventory-template"],
    sources: [{ label: "Airtable: rollup fields", url: "https://support.airtable.com/docs/rollup-field-overview" }],
  },
  {
    slug: "airtable-sync-tables",
    category: "Airtable",
    title: "Airtable Sync: Share Data Across Bases the Right Way",
    metaTitle: "Airtable Sync Guide 2026: Share Tables Across Bases",
    metaDescription:
      "Learn how Airtable Sync shares a table across multiple bases so teams stay aligned. Setup, permissions, and common pitfalls explained step-by-step.",
    excerpt: "Keep one source of truth across multiple bases with synced tables.",
    date: "2026-05-22",
    readingTime: 6,
    intent: "Informational",
    keyTakeaways: [
      "Airtable Sync copies a source table into other bases, kept up to date automatically.",
      "Synced tables are read-only in the destination by default.",
      "It is ideal for sharing a master list (clients, products) across teams.",
    ],
    intro: [
      "When several teams need the same data but work in different bases, copy-paste leads to chaos. Airtable Sync keeps everyone on one source of truth.",
      "Here is how syncing works and where teams typically trip up.",
    ],
    sections: [
      {
        h: "How sync works",
        p: [
          "You enable sharing on a source table, then add it as a synced table in another base. Changes in the source flow to every destination automatically on a schedule.",
        ],
      },
      {
        h: "Read-only by design",
        p: [
          "Synced tables are read-only in the destination so the source stays authoritative. Teams can build their own views and add local fields without affecting the original.",
        ],
      },
      {
        h: "Good use cases",
        list: [
          "A master product catalog shared with sales and ops bases.",
          "A central client list referenced by project bases.",
          "Company-wide reference data maintained in one place.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Airtable Sync real-time?",
        a: "It is near-real-time on a short interval and can also be refreshed manually. It is not instant, but updates propagate quickly.",
      },
      {
        q: "Can I edit a synced table?",
        a: "Synced records are read-only in the destination, but you can add your own local fields and views alongside the synced data.",
      },
      {
        q: "Does sync count against my record limits?",
        a: "Synced records count toward the destination base's totals, so factor that into your plan limits when syncing large tables.",
      },
    ],
    related: ["airtable-automations-guide", "airtable-interfaces-guide", "airtable-vs-google-sheets"],
    sources: [{ label: "Airtable Sync", url: "https://support.airtable.com/docs/airtable-sync-integrations" }],
  },
];

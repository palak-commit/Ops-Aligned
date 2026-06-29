export const notionArticles = [
  {
    slug: "notion-freelance-crm",
    category: "Notion",
    title: "How to Build a Freelance CRM in Notion",
    metaTitle: "Build a Freelance CRM in Notion 2026 (Free Template)",
    metaDescription:
      "Build a freelance CRM in Notion with two linked databases, rollups for revenue, and a pipeline board. Step-by-step guide with a free template inside.",
    excerpt: "Track leads, clients, and revenue with two linked databases and a pipeline board.",
    date: "2026-06-25",
    readingTime: 8,
    intent: "Informational",
    keyTakeaways: [
      "A solid Notion CRM separates Clients and Projects into two related databases.",
      "Rollups let you sum project revenue per client automatically.",
      "A board view grouped by Status turns your CRM into a visual sales pipeline.",
    ],
    intro: [
      "If you are juggling clients in your inbox and revenue in your head, you do not need expensive CRM software — you need a system. Notion is more than capable for any freelancer or small agency.",
      "In this guide I will show you the exact two-database structure I have used to manage pipelines for agencies with dozens of active clients.",
      "After testing a dozen CRMs over the years, I keep coming back to Notion for its flexibility and zero cost.",
    ],
    sections: [
      {
        h: "Step 1: Set up the architecture",
        p: [
          "The foundation of any robust CRM is separating your entities. Create two databases: 'Clients' and 'Projects'. Do not mix companies and projects in one table — it breaks reporting later.",
        ],
      },
      {
        h: "Step 2: Configure the relations",
        p: [
          "In the Projects database, add a Relation property pointing to the Clients database. Now every project links to a specific client, and you can see all of a client's projects in one place.",
        ],
      },
      {
        h: "Step 3: Calculate revenue with rollups",
        p: [
          "In Clients, add a Rollup property. Point it at the Projects relation, select the Cost property, and set the calculation to Sum. You now have lifetime revenue per client, updated automatically.",
        ],
      },
      {
        h: "Step 4: Build the pipeline board",
        p: [
          "Add a Status property to Projects (Lead, Proposal, Active, Done) and create a Board view grouped by Status. Drag cards across stages to manage your sales pipeline visually.",
        ],
      },
    ],
    faq: [
      {
        q: "Can Notion replace Salesforce for small agencies?",
        a: "For agencies with fewer than ~50 active clients, yes. Notion lacks native email sequencing, but it handles pipeline, contacts, and revenue tracking beautifully at a fraction of the cost.",
      },
      {
        q: "How do I capture leads into Notion automatically?",
        a: "Connect a form tool (or Zapier) to your Clients database so new inquiries create records without manual entry.",
      },
      {
        q: "Is a Notion CRM good for teams?",
        a: "Yes. Share the workspace, assign owners with a Person property, and use filtered views so each team member sees only their accounts.",
      },
    ],
    related: ["notion-relations-rollups", "notion-recurring-invoices", "notion-databases-for-beginners"],
    sources: [
      { label: "Notion: databases", url: "https://www.notion.so/help/intro-to-databases" },
      { label: "Notion: rollups", url: "https://www.notion.so/help/relations-and-rollups" },
    ],
  },
  {
    slug: "notion-recurring-invoices",
    category: "Notion",
    title: "Creating Recurring Client Invoices in Notion",
    metaTitle: "Recurring Invoices in Notion 2026 (Buttons + Templates)",
    metaDescription:
      "Automate recurring client invoices in Notion using buttons and database templates. Stop rewriting invoices every month with this step-by-step guide.",
    excerpt: "Generate monthly invoices on demand using Notion buttons and database templates.",
    date: "2026-06-24",
    readingTime: 7,
    intent: "Informational",
    keyTakeaways: [
      "Notion buttons can create a pre-filled invoice record with one click.",
      "Database templates store your standard invoice line items so you never start from scratch.",
      "Pair this with a rollup to track outstanding vs. paid totals.",
    ],
    intro: [
      "Rewriting the same invoice every month is exactly the kind of repetitive task that invites errors. With Notion buttons and templates, you can generate a fresh invoice in a single click.",
      "Here is the setup I use to spin up consistent, professional invoices for retainer clients without touching a spreadsheet.",
    ],
    sections: [
      {
        h: "Step 1: Create an Invoices database",
        p: [
          "Add properties for Client (relation), Amount, Due Date, and Status (Draft, Sent, Paid). This is the backbone of your invoicing.",
        ],
      },
      {
        h: "Step 2: Build a database template",
        p: [
          "Inside the database, create a template that pre-fills your standard terms and line items. Every new invoice from this template starts consistent and complete.",
        ],
      },
      {
        h: "Step 3: Add a button to generate invoices",
        p: [
          "Use a Notion button configured to 'Add page to' your Invoices database using the template. One click produces a ready-to-edit invoice with the right defaults.",
        ],
      },
      {
        h: "Step 4: Track what's outstanding",
        p: [
          "Create a filtered view showing only 'Sent' invoices and a rollup that sums their amounts, so you always know how much money is owed to you.",
        ],
      },
    ],
    faq: [
      {
        q: "Can Notion send invoices automatically?",
        a: "Notion cannot email invoices on its own. Pair it with Zapier or a dedicated tool to send the PDF, while Notion handles creation and tracking.",
      },
      {
        q: "How do I turn a Notion invoice into a PDF?",
        a: "Use Notion's Export → PDF on the invoice page, or connect a document-generation tool for branded, automated PDFs.",
      },
      {
        q: "Can I schedule invoices to generate monthly?",
        a: "Buttons are manual by design. For true scheduling, trigger creation from an external automation tool on a monthly schedule.",
      },
    ],
    related: ["notion-freelance-crm", "notion-buttons-automation", "notion-relations-rollups"],
    sources: [
      { label: "Notion: buttons", url: "https://www.notion.so/help/buttons" },
      { label: "Notion: database templates", url: "https://www.notion.so/help/database-templates" },
    ],
  },
  {
    slug: "notion-project-dashboard",
    category: "Notion",
    title: "Building an Automated Notion Project Dashboard",
    metaTitle: "Notion Project Dashboard 2026: Relations & Rollups Guide",
    metaDescription:
      "Build an automated Notion project dashboard using relations, rollups, and progress bars. Manage remote teams and deadlines in one view. Full tutorial.",
    excerpt: "Manage remote teams, deadlines, and progress with relations and rollups.",
    date: "2026-06-23",
    readingTime: 8,
    intent: "Informational",
    keyTakeaways: [
      "Link Tasks to Projects with a relation so progress rolls up automatically.",
      "A formula-based progress bar shows completion at a glance.",
      "Filtered views give each team member a personal task list from the same data.",
    ],
    intro: [
      "A good project dashboard answers one question instantly: are we on track? Built well, a Notion dashboard does that without anyone updating a status report.",
      "This tutorial walks through the relations, rollups, and formulas that make a Notion project hub feel automated.",
    ],
    sections: [
      {
        h: "Step 1: Two databases, one relation",
        p: [
          "Create Projects and Tasks databases, then relate Tasks to Projects. Each task belongs to a project, which is what makes roll-up reporting possible.",
        ],
      },
      {
        h: "Step 2: Roll up task progress",
        p: [
          "In Projects, add a rollup that counts completed tasks versus total tasks. This gives each project a live completion ratio with no manual updates.",
        ],
      },
      {
        h: "Step 3: Add a progress bar formula",
        p: [
          "Use a formula property to turn that ratio into a visual bar. Seeing 70% complete is far more motivating than reading '14 of 20 tasks'.",
        ],
      },
      {
        h: "Step 4: Personalized views for the team",
        p: [
          "Create a view filtered by Assignee = current user, or one grouped by due date, so every person opens Notion to exactly what they need to do today.",
        ],
      },
    ],
    faq: [
      {
        q: "Can Notion show a Gantt chart?",
        a: "Yes. Use the Timeline view on your Tasks or Projects database to get a Gantt-style visualization of start and end dates.",
      },
      {
        q: "How do I show only overdue tasks?",
        a: "Create a filtered view where Due Date is before today and Status is not Done. It becomes an instant 'needs attention' list.",
      },
      {
        q: "Is Notion good for managing remote teams?",
        a: "Very. Shared databases, assignee fields, and filtered views keep distributed teams aligned without endless status meetings.",
      },
    ],
    related: ["notion-relations-rollups", "notion-create-recurring-task", "notion-databases-for-beginners"],
    sources: [
      { label: "Notion: relations and rollups", url: "https://www.notion.so/help/relations-and-rollups" },
      { label: "Notion: timeline view", url: "https://www.notion.so/help/timeline-view" },
    ],
  },
  {
    slug: "notion-create-recurring-task",
    category: "Notion",
    title: "How to Create a Recurring Task in Notion",
    metaTitle: "How to Create Recurring Tasks in Notion (2026 Methods)",
    metaDescription:
      "Learn three ways to create recurring tasks in Notion — native recurring templates, buttons, and automations. Never forget a repeating to-do again.",
    excerpt: "Three reliable ways to make tasks repeat automatically in Notion.",
    date: "2026-06-22",
    readingTime: 6,
    intent: "Informational",
    keyTakeaways: [
      "Notion now has a native recurring-template feature for database items.",
      "Buttons offer a manual 'duplicate this task' fallback.",
      "External automations can create recurring tasks on any schedule you want.",
    ],
    intro: [
      "Recurring chores — weekly reports, monthly reviews, daily standups — are easy to forget and tedious to recreate. Notion gives you a few ways to put them on autopilot.",
      "Here are the three methods, from the built-in feature to automation, so you can pick the one that fits your workflow.",
    ],
    sections: [
      {
        h: "Method 1: Native recurring templates",
        p: [
          "Open a database template's menu and set it to repeat on a schedule (daily, weekly, monthly). Notion will auto-create the task at the chosen interval — the simplest option for most people.",
        ],
      },
      {
        h: "Method 2: A duplicate button",
        p: [
          "If you prefer manual control, add a button that duplicates a template task on demand. Good for irregular but repeated tasks.",
        ],
      },
      {
        h: "Method 3: External automation",
        p: [
          "For full control over timing or to trigger from another app, use an automation tool to create a database item on a schedule via the Notion API.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Notion have built-in recurring tasks?",
        a: "Yes. Database templates can be set to recur automatically on daily, weekly, or monthly schedules without any third-party tools.",
      },
      {
        q: "Can I set custom intervals like every two weeks?",
        a: "The native feature covers common intervals. For unusual cadences, an external automation gives you precise control.",
      },
      {
        q: "Will recurring tasks clutter my database?",
        a: "Use a filtered view that hides completed items so only active tasks show, keeping the workspace clean.",
      },
    ],
    related: ["notion-buttons-automation", "notion-project-dashboard", "notion-databases-for-beginners"],
    sources: [{ label: "Notion: recurring templates", url: "https://www.notion.so/help/database-templates" }],
  },
  {
    slug: "notion-formula-cheat-sheet",
    category: "Notion",
    title: "Notion Formula 2.0 Cheat Sheet (With Examples)",
    metaTitle: "Notion Formula 2.0 Cheat Sheet 2026 (Copy-Paste Examples)",
    metaDescription:
      "Master Notion Formula 2.0 with this cheat sheet of copy-paste examples — dates, conditionals, lists, and rollup math explained simply for beginners.",
    excerpt: "Copy-paste formulas for dates, conditionals, and rollup math in Notion 2.0.",
    date: "2026-06-21",
    readingTime: 9,
    intent: "Informational",
    keyTakeaways: [
      "Formula 2.0 introduced variables, the dot syntax, and native list handling.",
      "Most everyday needs come down to dates, if/then logic, and text formatting.",
      "You can chain methods with dots, like prop('Tags').map(current).join(', ').",
    ],
    intro: [
      "Notion's Formula 2.0 is far more powerful than the original, but the new syntax confuses people coming from spreadsheets. A few patterns cover 90% of real use.",
      "This cheat sheet collects the formulas I reach for constantly, each with a plain-English explanation.",
    ],
    sections: [
      {
        h: "Date formulas",
        list: [
          "Days until due: dateBetween(prop('Due'), now(), 'days')",
          "Is overdue: prop('Due') < now() and prop('Status') != 'Done'",
          "Format a date: formatDate(prop('Due'), 'MMM D, YYYY')",
        ],
      },
      {
        h: "Conditional logic",
        list: [
          "Simple if: if(prop('Score') > 80, 'Pass', 'Fail')",
          "Nested with ifs(): ifs(prop('S') > 90, 'A', prop('S') > 80, 'B', 'C')",
          "Status emoji: if(prop('Done'), '✅', '⬜')",
        ],
      },
      {
        h: "Text and lists",
        list: [
          "Join tags: prop('Tags').join(', ')",
          "First name: prop('Name').split(' ').first()",
          "Length check: length(prop('Notes'))",
        ],
      },
      {
        h: "The new dot syntax",
        p: [
          "Formula 2.0 lets you write prop('X').method() instead of nesting functions. It reads left to right, which makes long formulas far easier to follow.",
        ],
      },
    ],
    faq: [
      {
        q: "What changed in Notion Formula 2.0?",
        a: "It added variables (let), the dot/method syntax, native list and date objects, and many new functions — making complex formulas readable and reusable.",
      },
      {
        q: "Can formulas reference other formulas?",
        a: "Yes. A formula can read another formula property, letting you break complex logic into smaller, testable pieces.",
      },
      {
        q: "Do formula properties slow Notion down?",
        a: "Heavy rollups and deeply nested formulas across thousands of rows can add lag. Keep formulas lean and avoid recalculating across huge datasets where possible.",
      },
    ],
    related: ["notion-relations-rollups", "notion-databases-for-beginners", "notion-create-recurring-task"],
    sources: [{ label: "Notion: formula reference", url: "https://www.notion.so/help/formulas" }],
  },
  {
    slug: "best-notion-widgets",
    category: "Notion",
    title: "Best Notion Widgets to Supercharge Your Pages",
    metaTitle: "11 Best Notion Widgets in 2026 (Free + Premium)",
    metaDescription:
      "Discover the best Notion widgets in 2026 — clocks, weather, progress trackers, and embeds that make your dashboards more useful and beautiful.",
    excerpt: "Clocks, trackers, and embeds that make your Notion dashboards genuinely useful.",
    date: "2026-06-10",
    readingTime: 7,
    intent: "Commercial",
    keyTakeaways: [
      "Widgets are embedded mini-apps that add live data Notion lacks natively.",
      "The most useful categories are clocks, progress trackers, and calendars.",
      "Most widgets embed via a simple /embed block and a URL.",
    ],
    intro: [
      "Notion is brilliant at structured content but light on live, dynamic elements. Widgets fill that gap, turning a static page into a real dashboard.",
      "These are the widgets I have found genuinely worth embedding, grouped by what they do.",
    ],
    sections: [
      {
        h: "Productivity widgets",
        list: [
          "Clocks and world time — handy for distributed teams.",
          "Countdown timers — keep deadlines visible.",
          "Habit and progress trackers — visualize streaks and goals.",
        ],
      },
      {
        h: "Information widgets",
        list: [
          "Weather — a small but pleasant dashboard touch.",
          "Google Calendar embeds — see your schedule without leaving Notion.",
          "Stock or crypto tickers — for finance dashboards.",
        ],
      },
      {
        h: "How to add a widget",
        p: [
          "Copy the widget's share URL, type /embed on a Notion page, and paste the link. Resize the block to taste. That is all there is to it.",
        ],
      },
    ],
    faq: [
      {
        q: "Are Notion widgets free?",
        a: "Many are free with optional premium tiers for customization. Popular providers like Indify and WidgetBox offer solid free options.",
      },
      {
        q: "Do widgets work on the Notion mobile app?",
        a: "Most embedded widgets render on mobile, though some interactive ones display better on desktop. Test critical widgets on both.",
      },
      {
        q: "Can widgets slow down my page?",
        a: "A few are fine, but stacking many live embeds on one page can increase load time. Use them where they add real value.",
      },
    ],
    related: ["notion-project-dashboard", "best-notion-widgets", "notion-vs-obsidian-students"],
    sources: [{ label: "Notion: embeds", url: "https://www.notion.so/help/embed-and-connect-other-apps" }],
  },
  {
    slug: "notion-vs-obsidian-students",
    category: "Notion",
    title: "Notion vs Obsidian for Students: Which Is Better?",
    metaTitle: "Notion vs Obsidian for Students 2026 (Honest Comparison)",
    metaDescription:
      "Notion vs Obsidian for students compared on note-taking, offline access, cost, and linking. Find out which app suits your study style in 2026.",
    excerpt: "Which note-taking app actually fits how students study? A practical breakdown.",
    date: "2026-06-09",
    readingTime: 8,
    intent: "Commercial",
    keyTakeaways: [
      "Notion excels at structured databases and collaboration; Obsidian excels at fast, linked, offline notes.",
      "Obsidian stores notes as local Markdown files you fully own.",
      "Students who plan and organize prefer Notion; those who write and connect ideas prefer Obsidian.",
    ],
    intro: [
      "Both Notion and Obsidian are loved by students, but they reward different habits. Picking the right one depends on whether you organize information or connect ideas.",
      "Having used both through coursework, here is the honest comparison across the factors students actually care about.",
    ],
    sections: [
      {
        h: "Structure vs. linking",
        p: [
          "Notion organizes notes into databases, pages, and tables — great for tracking assignments and courses. Obsidian focuses on linking atomic notes into a web of knowledge, ideal for essays and research.",
        ],
      },
      {
        h: "Offline and ownership",
        p: [
          "Obsidian stores everything as local Markdown files, so it works fully offline and your notes are future-proof. Notion is cloud-first and needs a connection for most tasks.",
        ],
      },
      {
        h: "Cost",
        p: [
          "Notion offers a generous free plan and free education upgrades. Obsidian is free for personal use, with paid sync and publish add-ons.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Notion or Obsidian better for studying?",
        a: "Notion suits students who want to organize courses, deadlines, and resources in databases. Obsidian suits students who write a lot and want to link ideas together.",
      },
      {
        q: "Can I use both?",
        a: "Many students do — Obsidian for deep note-taking and Notion for project and deadline management. They serve different jobs.",
      },
      {
        q: "Is Obsidian really free?",
        a: "Yes, for personal use including studying. You only pay if you want official Sync across devices or the Publish feature.",
      },
    ],
    related: ["best-notion-widgets", "notion-databases-for-beginners", "notion-formula-cheat-sheet"],
    sources: [
      { label: "Obsidian", url: "https://obsidian.md/" },
      { label: "Notion for Education", url: "https://www.notion.so/product/notion-for-education" },
    ],
  },
  {
    slug: "notion-relations-rollups",
    category: "Notion",
    title: "Notion Relations vs Rollups: What's the Difference?",
    metaTitle: "Notion Relations vs Rollups Explained (2026 Beginner Guide)",
    metaDescription:
      "Confused by Notion relations and rollups? This beginner guide explains the difference with clear examples so you can link databases and report on them.",
    excerpt: "The clearest explanation of Notion's two most powerful — and confusing — features.",
    date: "2026-06-08",
    readingTime: 6,
    intent: "Informational",
    keyTakeaways: [
      "A relation links two databases together; a rollup pulls and summarizes data through that link.",
      "You must create a relation before you can build a rollup on it.",
      "Together they turn Notion from a note app into a relational database.",
    ],
    intro: [
      "Relations and rollups are where Notion gets genuinely powerful — and where most beginners get stuck. The distinction is simpler than it looks.",
      "Think of it this way: a relation is the bridge between two databases, and a rollup is the truck that drives data across it.",
    ],
    sections: [
      {
        h: "What a relation does",
        p: [
          "A relation connects a record in one database to one or more records in another — like linking a Task to its Project, or a Project to its Client. It establishes the relationship but does not calculate anything.",
        ],
      },
      {
        h: "What a rollup does",
        p: [
          "A rollup travels along an existing relation and brings back data: the sum of related costs, the count of related tasks, the latest due date. No relation, no rollup.",
        ],
      },
      {
        h: "A concrete example",
        p: [
          "Relate Projects to Clients. Then add a rollup on Clients that sums the Cost of all related Projects. The relation creates the link; the rollup turns that link into total revenue per client.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a relation to use a rollup?",
        a: "Yes. A rollup can only operate through an existing relation property — it reads data from the connected database.",
      },
      {
        q: "Can a rollup do math?",
        a: "Yes. Rollups can sum, average, count, find min/max, and more across related records, which is how Notion handles reporting.",
      },
      {
        q: "Can I roll up a rollup?",
        a: "Indirectly. A rollup can reference another database's rollup if a relation connects them, letting you chain calculations across multiple databases.",
      },
    ],
    related: ["notion-freelance-crm", "notion-project-dashboard", "notion-databases-for-beginners"],
    sources: [{ label: "Notion: relations and rollups", url: "https://www.notion.so/help/relations-and-rollups" }],
  },
  {
    slug: "notion-databases-for-beginners",
    category: "Notion",
    title: "Notion Databases for Beginners: A Complete Guide",
    metaTitle: "Notion Databases for Beginners 2026 (Complete Guide)",
    metaDescription:
      "New to Notion databases? Learn properties, views, filters, and sorts in this complete beginner's guide and build your first database in minutes.",
    excerpt: "Everything a beginner needs to build their first Notion database with confidence.",
    date: "2026-06-07",
    readingTime: 8,
    intent: "Informational",
    keyTakeaways: [
      "A Notion database is a collection of pages, each with the same set of properties.",
      "Views let you display the same data as a table, board, calendar, or gallery.",
      "Filters and sorts shape each view without changing the underlying data.",
    ],
    intro: [
      "Once databases click, Notion stops being a fancy notepad and becomes a flexible app builder. The core ideas are few and worth learning properly.",
      "This guide takes you from zero to a working database, explaining each concept in plain language.",
    ],
    sections: [
      {
        h: "Pages and properties",
        p: [
          "Every row in a database is actually a full page, and every column is a 'property' — text, number, date, select, person, and so on. Choosing the right property types up front saves rework later.",
        ],
      },
      {
        h: "Views change the display",
        p: [
          "The same data can appear as a Table, Board (kanban), Calendar, Timeline, List, or Gallery. You create multiple views over one database, each suited to a task.",
        ],
      },
      {
        h: "Filters and sorts",
        p: [
          "Filters hide records that do not match a rule (e.g., Status is Active). Sorts order them (e.g., by due date). Each view keeps its own filters and sorts.",
        ],
      },
      {
        h: "Linked databases",
        p: [
          "You can surface the same database on any page with a 'linked view', so one source of truth appears wherever you need it without duplicating data.",
        ],
      },
    ],
    faq: [
      {
        q: "What's the difference between a page and a database?",
        a: "A page is a single document. A database is a structured collection of pages that all share the same properties and can be viewed and filtered in many ways.",
      },
      {
        q: "How many properties can a database have?",
        a: "Practically as many as you need, but fewer, well-chosen properties keep a database fast and easy to use. Resist the urge to track everything.",
      },
      {
        q: "Can I import a spreadsheet into Notion?",
        a: "Yes. Notion can import CSV files directly into a new database, mapping columns to properties automatically.",
      },
    ],
    related: ["notion-relations-rollups", "notion-formula-cheat-sheet", "notion-project-dashboard"],
    sources: [{ label: "Notion: intro to databases", url: "https://www.notion.so/help/intro-to-databases" }],
  },
  {
    slug: "notion-buttons-automation",
    category: "Notion",
    title: "Notion Buttons: Automate Repetitive Actions in One Click",
    metaTitle: "Notion Buttons Guide 2026: Automate Tasks in One Click",
    metaDescription:
      "Learn how Notion buttons automate repetitive actions — add pages, edit properties, and run steps with a single click. Practical examples inside.",
    excerpt: "Add pages, update properties, and run multi-step actions with a single click.",
    date: "2026-06-06",
    readingTime: 6,
    intent: "Informational",
    keyTakeaways: [
      "Buttons run a defined sequence of actions when clicked, right inside Notion.",
      "They can add pages, edit properties, show confirmations, and open pages.",
      "Buttons are the closest thing to native automation Notion offers without external tools.",
    ],
    intro: [
      "Notion buttons are an underrated feature that removes repetitive clicking from your day. If you do the same little sequence often, a button can collapse it into one tap.",
      "Here is how buttons work and a few high-value ways to use them.",
    ],
    sections: [
      {
        h: "What buttons can do",
        list: [
          "Add a new page to a database using a template.",
          "Edit properties of existing pages (e.g., mark all as Done).",
          "Show a confirmation before acting.",
          "Open a page or run multiple steps in sequence.",
        ],
      },
      {
        h: "Example: a 'New Client' button",
        p: [
          "Configure a button to add a page to your Clients database using a template that pre-fills your onboarding checklist. Every new client starts with the same steps, instantly.",
        ],
      },
      {
        h: "Example: bulk status update",
        p: [
          "Add a button that edits pages matching a filter — for instance, setting all of this week's completed tasks to 'Archived' in one click.",
        ],
      },
    ],
    faq: [
      {
        q: "Are Notion buttons free?",
        a: "Yes, buttons are available on all plans, including the free plan.",
      },
      {
        q: "Can buttons trigger external apps?",
        a: "Not directly. Buttons act within Notion. To reach external apps, combine Notion's API with an automation tool like Zapier or Make.",
      },
      {
        q: "Can a button run multiple actions?",
        a: "Yes. A single button can chain several actions in order, such as adding a page and then editing related properties.",
      },
    ],
    related: ["notion-recurring-invoices", "notion-create-recurring-task", "notion-relations-rollups"],
    sources: [{ label: "Notion: buttons", url: "https://www.notion.so/help/buttons" }],
  },
];

import { mntnPortfolioItems } from "./mntnProjects"

export interface PortfolioItem {
  isPlaceholder?: boolean
  slug: string
  title: string
  eyebrow: string
  summary: string
  challenge: string[]
  approach: {
    title: string
    detail: string
  }[]
  results: {
    value: string
    label: string
    detail: string
  }[]
  screenshots: {
    src: string
    alt: string
    caption: string
  }[]
  diagrams?: {
    title: string
    caption: string
    source: string
  }[]
  techStack: string[]
  demoUrl: string
  demoEmbedUrl: string
  context: string
  approachLead: string
  resultsTitle: string
  resultsLead: string
  visualsTitle: string
  demoTitle?: string
  demoLead?: string
}

export const portfolioItems: PortfolioItem[] = [
  ...mntnPortfolioItems,
  {
    slug: "llm-contact-discovery",
    title: "LLM Contact Discovery",
    eyebrow: "AI prospect research & data enrichment",
    summary:
      "A production-ready workflow that turns a plain-language university search into a reviewable, exportable directory of verified contacts.",
    challenge: [
      "Finding the right contacts across university websites is slow, inconsistent, and difficult to scale. Useful information is scattered across faculty directories, profile pages, tables, subdomains, and PDFs, while titles and departments vary widely between institutions.",
      "The system needed to discover contacts efficiently without treating an LLM as an unchecked source of truth. Every result had to remain traceable, reviewable, and useful to an operator.",
    ],
    approach: [
      {
        title: "Interpret the search",
        detail:
          "OpenAI web search translates a plain-language query into likely university candidates, with confidence and source reasoning presented before a discovery run begins.",
      },
      {
        title: "Crawl deterministically",
        detail:
          "A resumable breadth-first crawler explores sitemaps, directories, common subdomains, profile pages, and HTML tables. Deterministic parsing does the bulk of discovery; AI fills targeted gaps.",
      },
      {
        title: "Validate and enrich",
        detail:
          "Contacts are deduplicated, checked for valid names, sanitized through rules and batched AI review, then enriched with public emails, phone numbers, office details, and source URLs.",
      },
      {
        title: "Keep people in control",
        detail:
          "Progress states, confidence scores, flags, source links, selective enrichment, and CSV export make the automation inspectable instead of opaque.",
      },
    ],
    results: [
      {
        value: "15,000",
        label: "page crawl ceiling",
        detail:
          "A resumable queue and persisted crawl state support broad institutional sites without losing progress.",
      },
      {
        value: "100",
        label: "contacts per enrichment pass",
        detail:
          "Priority ordering and controlled concurrency keep enrichment focused on the highest-value records.",
      },
      {
        value: "3",
        label: "operator stages",
        detail:
          "Search, discovery, and results turn an open-ended research task into a clear, repeatable workflow.",
      },
    ],
    screenshots: [
      {
        src: "/img/portfolio/llm-contact-discovery/home.png",
        alt: "University Contact Finder home screen with an overview of the discovery workflow",
        caption:
          "A focused starting point explains the workflow before an operator begins.",
      },
      {
        src: "/img/portfolio/llm-contact-discovery/search.png",
        alt: "University search screen showing candidate institutions returned for review",
        caption:
          "Plain-language search returns candidate institutions with context for selection.",
      },
      {
        src: "/img/portfolio/llm-contact-discovery/results.png",
        alt: "Contact discovery results table with filters, status, and export controls",
        caption:
          "Reviewable results expose contact details, confidence, status, and next actions.",
      },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "OpenAI API",
      "Vercel AI SDK",
      "PostgreSQL",
      "Prisma",
      "Neon",
      "Inngest",
      "Clerk",
      "Cheerio",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "Vitest",
      "Vercel",
    ],
    demoUrl: "https://www.youtube.com/watch?v=GaPaiBukl_s",
    demoEmbedUrl: "https://www.youtube-nocookie.com/embed/GaPaiBukl_s",
    context:
      "Designed and built end-to-end as a full-stack AI system: product workflow, application architecture, crawler, AI orchestration, persistence, background processing, validation, and deployment.",
    approachLead:
      "A hybrid architecture pairs deterministic crawling and validation with selective AI reasoning, so the system stays scalable, inspectable, and grounded in source data.",
    resultsTitle: "A repeatable research system.",
    resultsLead:
      "The finished product replaces scattered manual browsing with one traceable workflow, while keeping operators in control of review and enrichment.",
    visualsTitle: "From search to actionable results.",
    demoTitle: "See the workflow in action.",
    demoLead:
      "Follow the full journey from a university query to discovered, reviewable contacts.",
  },
  {
    slug: "ai-instructor-validation",
    title: "AI Instructor Validation",
    eyebrow: "Real-time identity validation & access control",
    summary:
      "An AI-assisted access portal that verifies academic instructors against official university sources, routes uncertain cases for human approval, and returns a clear decision in one guided flow.",
    challenge: [
      "Instructor access requests were a high-volume operational bottleneck. Teams had to confirm that an applicant belonged to a legitimate institution and department before granting access, turning a simple account request into repetitive research and follow-up.",
      "The workflow needed to move quickly without letting AI make an opaque access-control decision. Strong matches could be approved automatically, but incomplete or conflicting evidence needed a safe path to manual review.",
    ],
    approach: [
      {
        title: "Capture verified inputs",
        detail:
          "A focused account flow collects the instructor’s name, .edu email, institution, and department, with required-field, domain, and input validation before any external work begins.",
      },
      {
        title: "Ground the decision",
        detail:
          "The backend searches public faculty information and asks OpenAI to evaluate name, institution, department, and email alignment. Validation is constrained to official school sources and returned as structured confidence and reasoning.",
      },
      {
        title: "Route by confidence",
        detail:
          "High-confidence matches are activated automatically. Missing university or department evidence is denied, while ambiguous matches remain pending and are routed to a department head for approval.",
      },
      {
        title: "Close the operational loop",
        detail:
          "The system persists every request, records status changes in an audit log, sends outcome notifications, and gives internal teams search, filtering, reporting, and manual override controls.",
      },
    ],
    results: [
      {
        value: "85%",
        label: "less validation time",
        detail:
          "Automated research and decision routing remove most of the repetitive work from instructor access reviews.",
      },
      {
        value: "≈5,000",
        label: "hours saved per year",
        detail:
          "The production workflow turns a recurring manual process into a scalable, real-time service.",
      },
      {
        value: "3",
        label: "confidence-based paths",
        detail:
          "Requests resolve to automated approval, manual review, or denial based on grounded evidence and explicit thresholds.",
      },
    ],
    screenshots: [
      {
        src: "/img/portfolio/ai-instructor-validation/demo-1-lets-get-started.png",
        alt: "Showroom welcome screen inviting an instructor to begin creating an account",
        caption:
          "A concise entry point sets expectations before the validation flow begins.",
      },
      {
        src: "/img/portfolio/ai-instructor-validation/demo-2-create-account-validating.png",
        alt: "Create Account form validating instructor credentials",
        caption:
          "The interface keeps the applicant informed while official academic sources are checked.",
      },
      {
        src: "/img/portfolio/ai-instructor-validation/demo-3-create-account-denied.png",
        alt: "Instructor access request denied with a manual review option",
        caption:
          "Unverified requests fail safely and provide a clear route to manual review.",
      },
      {
        src: "/img/portfolio/ai-instructor-validation/demo-4-create-account-approved.png",
        alt: "Instructor account approved after automated validation",
        caption:
          "Strong evidence produces an immediate, unambiguous approval outcome.",
      },
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "OpenAI API",
      "Perplexity AI SDK",
      "PostgreSQL",
      "Prisma",
      "SendGrid",
      "Tailwind CSS",
      "Jest",
      "Replit",
    ],
    demoUrl: "",
    demoEmbedUrl: "",
    context:
      "Built as a unified full-stack application spanning the applicant experience, validation API, AI-assisted research, confidence-based decision logic, approval routing, email notifications, persistence, audit logging, and internal operations tooling.",
    approachLead:
      "The architecture separates evidence gathering, AI interpretation, and policy-based routing so each decision remains explainable and uncertain cases stay under human control.",
    resultsTitle: "Faster access without giving up control.",
    resultsLead:
      "The finished system automates the common path, preserves a human decision point for ambiguity, and gives every applicant a clear outcome.",
    visualsTitle: "One request, three transparent states.",
  },
  {
    slug: "production-document-chat",
    title: "Production Document Chat",
    eyebrow: "Conversational analytics & customer activation",
    summary:
      "A multi-tenant AI assistant that gave winery teams a natural-language interface to their customer, club, order, and sales data—then let them turn answers into charts, exports, tags, and customer messages without leaving the conversation.",
    challenge: [
      "A winery SaaS company held valuable customer and commerce data, but its customers still needed reports, technical queries, or operational help to use it. The information was available, yet answering everyday questions about sales, club members, tasting-room activity, and customer segments remained slow and inaccessible.",
      "A useful chatbot needed more than generic document search. It had to keep every winery’s data isolated and current, preserve conversational context, generate trustworthy analysis, and safely connect recommendations to real actions in external customer systems.",
    ],
    approach: [
      {
        title: "Refresh each winery’s data nightly",
        detail:
          "A scheduled pipeline compiled current customer, club membership, order header, and order-line data for every tenant. The latest datasets were attached to that winery’s dedicated assistant so answers reflected a consistent, recently synchronized snapshot.",
      },
      {
        title: "Create a tenant-aware chat experience",
        detail:
          "Authenticated users were scoped to authorized wineries and could switch context explicitly. Persistent threads, chat history, sync timestamps, prompt validation, and suggested questions made the assistant approachable while keeping conversations tied to the correct business.",
      },
      {
        title: "Turn data into answers and artifacts",
        detail:
          "OpenAI Assistants and Code Interpreter analyzed the winery datasets to answer natural-language questions, calculate segments and summaries, create charts, and produce downloadable customer lists directly inside the chat workflow.",
      },
      {
        title: "Connect insight to action",
        detail:
          "Guarded function calls integrated with Commerce7 and RedChirp, allowing users to look up or create tags, apply tags to customers or orders, and send targeted customer messages. Validation and queued processing kept consequential actions controlled and observable.",
      },
    ],
    results: [
      {
        value: "$24K",
        label: "annual recurring revenue",
        detail:
          "The production assistant became a paid SaaS capability that made customer data directly useful to winery operators.",
      },
      {
        value: "Nightly",
        label: "tenant data refresh",
        detail:
          "Each winery’s assistant received a consistent, up-to-date view of customers, memberships, orders, and sales activity.",
      },
      {
        value: "3-in-1",
        label: "analytics workflow",
        detail:
          "One conversational interface combined business Q&A, visual and downloadable analysis, and operational customer actions.",
      },
    ],
    screenshots: [
      {
        src: "/img/portfolio/production-document-chat/prod-doc-chat-1-welcome-login.png",
        alt: "ChatDTC secure welcome screen with account login",
        caption:
          "Secure authentication opens a tenant-aware assistant for authorized winery users.",
      },
      {
        src: "/img/portfolio/production-document-chat/prod-doc-chat-2-chat-suggestions-list.png",
        alt: "ChatDTC home screen with synced date, chat history, and suggested winery data questions",
        caption:
          "Suggested questions make customer, club, order, and sales analysis approachable from the first conversation.",
      },
      {
        src: "/img/portfolio/production-document-chat/prod-doc-chat-3-validation-switch-wineries.png",
        alt: "Winery selection and validation interface for switching the active business context",
        caption:
          "Explicit winery selection keeps every question and action scoped to the correct tenant.",
      },
      {
        src: "/img/portfolio/production-document-chat/prod-doc-chat-4-chat-customer-list-request.png",
        alt: "Chat conversation requesting a targeted customer list from winery data",
        caption:
          "Operators describe a segment in plain language instead of building a report or database query.",
      },
      {
        src: "/img/portfolio/production-document-chat/prod-doc-chat-5-chat-customer-list-download.png",
        alt: "ChatDTC response providing a generated customer list for download",
        caption:
          "The assistant converts an analysis into a downloadable artifact ready for operational use.",
      },
      {
        src: "/img/portfolio/production-document-chat/prod-doc-chat-6-chat-sales-summary-graph-generation.png",
        alt: "ChatDTC generating a February sales summary visualization",
        caption:
          "Code-assisted analysis turns a natural-language sales request into an on-demand visual summary.",
      },
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "Material UI",
      "Node.js",
      "Express",
      "OpenAI Assistants API",
      "Code Interpreter",
      "Socket.IO",
      "Sequelize",
      "MySQL",
      "Microsoft SQL Server",
      "Commerce7 API",
      "RedChirp",
      "SendGrid",
      "LDAP",
      "JWT",
      "AWS EC2",
      "PM2",
    ],
    demoUrl: "",
    demoEmbedUrl: "",
    context:
      "Built and operated as a production, multi-tenant AI product across two applications: a responsive React chat client and a Node/Express service responsible for authentication, tenant authorization, assistant orchestration, conversation persistence, streaming updates, data access, tool execution, and third-party integrations.",
    approachLead:
      "The architecture joined a predictable nightly data pipeline with tenant-specific AI assistants and guarded operational tools, giving users fresh answers without exposing cross-winery data or treating every prompt as permission to act.",
    resultsTitle: "From stored data to a working conversation.",
    resultsLead:
      "The product made winery data self-service: users could explore performance, build an audience, and activate that audience from the same interface.",
    visualsTitle: "Ask, analyze, download, and act.",
  },
]

export const getPortfolioItem = (slug: string) =>
  portfolioItems.find(item => item.slug === slug)

import type { PortfolioItem } from "./portfolioItems"

interface MntnProject {
  slug: string
  title: string
  category: string
  tags: string[]
  summary: string
  problem: string
  architecture: string
  metric: string
  approach: PortfolioItem["approach"]
  results: PortfolioItem["results"]
  techStack: string[]
  workflow: string
  context: string
}

export const mntnProjects: MntnProject[] = [
  {
    slug: "mntn-express",
    tags: ["Full-stack", "Platform rebuild"],
    title: "MNTN Express",
    category: "Platform architecture & simplified campaign creation",
    summary:
      "A 0-to-1 platform rebuild that made connected TV campaign creation approachable for advertisers new to AdTech.",
    problem:
      "The full advertising platform exposed more settings and terminology than new customers needed to launch a campaign confidently.",
    architecture:
      "React frontend, reusable UI packages, authenticated APIs and legacy platform integrations.",
    metric: "0 to 1 platform rebuild",
    approach: [
      {
        title: "Rebuild the platform",
        detail:
          "Led the frontend rebuild, repository foundation, architecture, deployment pipelines and legacy integrations. Defined service boundaries and API contracts.",
      },
      {
        title: "Simplify campaign setup",
        detail:
          "Built creation, editing, review, launch, duplication with unique names and campaign stopping. Removed unnecessary settings and presented one budget over the existing multi-flight backend.",
      },
      {
        title: "Keep the underlying rules",
        detail:
          "Combined prorated initial flights and recurring monthly budgets into a single display. Supported scheduled, continuous and ended campaigns; bounded reporting to relevant flight dates.",
      },
      {
        title: "Guide the next decision",
        detail:
          "Integrated spend-confidence badges and recommendations, subscription budget presets, custom amounts, estimated daily spend and monthly reach.",
      },
    ],
    results: [
      {
        value: "0 to 1",
        label: "Platform ownership",
        detail:
          "Architecture, frontend implementation, legacy integration and deployment.",
      },
      {
        value: "One budget",
        label: "Simplified customer experience",
        detail:
          "A single understandable budget backed by established flight and billing rules.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "TanStack",
      "Tailwind CSS",
      "shadcn/ui",
      "GraphQL",
      "REST",
      "Docker",
      "GCP",
    ],
    workflow:
      'flowchart TD\n  A["Campaign setup"] --> B["Single-budget experience"]\n  B --> C["Authenticated APIs"]\n  C --> D["Existing flight and billing rules"]\n  D --> E["Review and launch"]',
    context:
      "Led the MNTN Go / Express frontend rebuild and delivery, integrating with existing platform services and their business rules.",
  },
  {
    slug: "mntn-nova",
    tags: ["Frontend", "Design systems", "Performance"],
    title: "MNTN Nova",
    category: "Platform redesign & frontend performance",
    summary:
      "A full frontend redesign with a consistent design system, clearer campaign workflows and more efficient data access.",
    problem:
      "A fragmented mix of UI libraries and styling approaches made the platform harder to use, maintain and evolve.",
    architecture:
      "Tailwind and shadcn design system, responsive campaign workflows and PAPI-backed data access.",
    metric: "Up to 45% faster frontend",
    approach: [
      {
        title: "Establish a consistent UI",
        detail:
          "Owned the frontend redesign, replacing Ant Design, styled-components and raw CSS with Tailwind, custom design tokens and shadcn components matched to Figma.",
      },
      {
        title: "Build the campaign workspace",
        detail:
          "Implemented responsive empty, single and multi-campaign dashboards, cards/table views, server pagination, search, sorting, status/strategy filters and row actions. Added mode/objective selection, name validation, step navigation, goal editing and persisted themes.",
      },
      {
        title: "Rework Budget & Goal",
        detail:
          "Built budget filters, monthly totals, mobile sheets and create/edit/delete/review drawers. Covered gaps, overlaps, running-flight changes, stale previews, high-intent/Max Reach sliders and budget alerts while retaining backend rules.",
      },
      {
        title: "Reduce data overhead",
        detail:
          "Trimmed GraphQL selections and unnecessary calls; fetched one summary row with server totals and prefetched alternate views. Later branch work brought Express mode and simplified creation into Nova.",
      },
    ],
    results: [
      {
        value: "Up to 45%",
        label: "Frontend performance improvement",
        detail:
          "Reported project outcome from reduced data requests and frontend optimization.",
      },
      {
        value: "One system",
        label: "Consistent platform styling",
        detail:
          "Shared components and tokens across responsive campaign workflows.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "TanStack Start",
      "Tailwind CSS",
      "shadcn/ui",
      "Figma",
      "PAPI",
      "GraphQL",
    ],
    workflow:
      'flowchart TD\n  A["Figma and design tokens"] --> B["Shared components"]\n  B --> C["Responsive campaign workflows"]\n  C --> D["PAPI"]\n  D --> E["GaryQL business rules"]',
    context:
      "Owned the frontend redesign and campaign/budget workflows. Express consolidation includes later branch work.",
  },
  {
    slug: "campaign-suite",
    tags: ["Microfrontends", "BFF", "CI/CD"],
    title: "Campaign Suite",
    category: "Microfrontend & backend-for-frontend architecture",
    summary:
      "A microfrontend and BFF foundation that let the campaign team develop and deploy product features independently.",
    problem:
      "Shared application boundaries and tightly coupled delivery made campaign development harder to coordinate across engineers.",
    architecture:
      "Federated React UI, typed tRPC BFF, GaryQL SDK and independently deployed containers.",
    metric: "~50% fewer merge conflicts",
    approach: [
      {
        title: "Bootstrap the foundation",
        detail:
          "Bootstrapped the MFE/BFF and researched Tailwind, shadcn, Prisma, tRPC, pnpm and Turborepo. Trained the team and established typed campaign queries, schema work, codegen and Storybook.",
      },
      {
        title: "Integrate the platform",
        detail:
          "Built standalone and embedded session handling, GaryQL integration, Select inventory-impression/budget views and remaining-budget queries. Migrated authentication from Clerk to the MNTN SDK with protected tRPC sessions.",
      },
      {
        title: "Own delivery",
        detail:
          "Built Docker/Helm and AWS deployment work, GCP/ArgoCD migration, separate UI/BFF images, QA/production pipelines and temporary PR environments with cleanup. Added typecheck, lint and test gates.",
      },
      {
        title: "Simplify the architecture over time",
        detail:
          "Retired the redundant campaign service, database package and related deployment machinery as system boundaries evolved.",
      },
    ],
    results: [
      {
        value: "~50%",
        label: "Fewer merge conflicts",
        detail:
          "Reported outcome of introducing microfrontend and BFF boundaries.",
      },
      {
        value: "End to end",
        label: "Architecture and delivery",
        detail:
          "Foundation, authenticated integrations, team onboarding and CI/CD ownership.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Module Federation",
      "tRPC",
      "Prisma",
      "pnpm",
      "Turborepo",
      "Storybook",
      "Docker",
      "Helm",
      "ArgoCD",
    ],
    workflow:
      'flowchart TD\n  A["Premier UI host"] --> B["Campaign microfrontend"]\n  B --> C["Authenticated tRPC BFF"]\n  C --> D["GaryQL SDK"]\n  D --> E["Platform services"]',
    context:
      "Bootstrapped and led the campaign MFE/BFF work, deployment and team training within a shared engineering effort.",
  },
  {
    slug: "predictive-budget-spend-system",
    tags: ["Machine learning", "Full-stack", "AdTech"],
    title: "Deliverability: Predictive Budget Spend",
    category: "Predictive campaign planning & decision support",
    summary:
      "Live spend-likelihood guidance that helped advertisers adjust budgets, audiences and delivery settings before campaigns underspent.",
    problem:
      "Advertisers could combine large budgets with narrow audiences or restrictive delivery settings without knowing whether the campaign could spend in full.",
    architecture:
      "Campaign UI → GaryQL feature assembly → forecast REST API → confidence and recommendations.",
    metric: "40% reported revenue lift",
    approach: [
      {
        title: "Connect predictions to campaign data",
        detail:
          "Built the backend integration that assembled budget, dates, audience, frequency caps, daypart exclusions, blocked networks and spend context for the forecast API.",
      },
      {
        title: "Make predictions actionable",
        detail:
          "Built the federated widget and audience/budget sliders, confidence states, high-intent and total reach, estimated/Max Reach, Peak Performance and budget summaries. Added scenario tests and budget recommendation flows.",
      },
      {
        title: "Integrate guidance across products",
        detail:
          "Embedded the experience in Premier and migrated it into Express/Nova budget workflows. Integrated recommendation banners and suppressed CTAs already pointing to the current page.",
      },
      {
        title: "Collaborate across engineering and ML",
        detail:
          "Teammates built the AutoGluon/Kedro model, data research and animated recommendation banner. My work connected the forecast service to the product and included an engineering all-hands demo. The model combines structured predictions, guardrails and pace shortcuts.",
      },
    ],
    results: [
      {
        value: "40%",
        label: "Reported revenue increase",
        detail:
          "Project notes associate deliverability guidance with increased revenue and fewer support tickets.",
      },
      {
        value: "Before launch",
        label: "Actionable spend guidance",
        detail:
          "High, Medium and Low feedback updates while campaign settings can still be adjusted.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Microfrontends",
      "GraphQL",
      "REST",
      "GaryQL",
      "AutoGluon / Kedro integration",
      "FastAPI integration",
    ],
    workflow:
      'flowchart TD\n  A["Budget, audience and delivery settings"] --> B["GaryQL feature assembly"]\n  B --> C["Forecast API"]\n  C --> D["ML, guardrails and spend pace"]\n  D --> E["Confidence and recommendations"]\n  E --> A',
    context:
      "Owned backend integration, widget and reach/budget controls. ML model development, source-data research and animated banner implementation were separate teammate contributions. Deliverability estimates spend likelihood.",
  },
  {
    slug: "flighted-budgets",
    tags: ["Full-stack", "Budgeting", "AdTech"],
    title: "Flighted Budgets",
    category: "Campaign scheduling & budget orchestration",
    summary:
      "A reusable budget system supporting seasonal flights, recurring spend and consistent rules across successive product generations.",
    problem:
      "Advertisers needed flexible campaign schedules and budget changes without breaking billing, spend history or downstream delivery.",
    architecture:
      "Backend-owned validation and flight logic reused by Premier UI, PAPI, Express and Nova.",
    metric: "Up to 30% seasonal revenue lift",
    approach: [
      {
        title: "Build the original system",
        detail:
          "Built the Premier UI and GaryQL feature with backend-owned validation: monthly/fixed-date flights, previews, proration, overlap boost/replace, gaps, spend-aware changes, timezone boundaries, parent/child splits and active/scheduled/ended states.",
      },
      {
        title: "Protect downstream behavior",
        detail:
          "Handled extension campaigns, start/end synchronization, pagination/filtering, audit fields, upsert/archive behavior and UTC boundaries through legacy SHAPI and core-flight integrations.",
      },
      {
        title: "Test and migrate the rules",
        detail:
          "Wrote unit and integration scenarios, logging and observability. Migrated the rules into PAPI, Express and Nova; simplified Express into a single-budget experience while preserving full Nova functionality.",
      },
      {
        title: "Enable adoption",
        detail:
          "Created Confluence documentation, Loom walkthroughs and migration/QA training. Connected the system to deliverability, audience sliders, Flat CPM and nightly core-flight processing.",
      },
    ],
    results: [
      {
        value: "Up to 30%",
        label: "Reported seasonal revenue increase",
        detail:
          "The flighted-budget feature supported more flexible seasonal advertising.",
      },
      {
        value: "Shared rules",
        label: "Reusable across product generations",
        detail:
          "Backend validation stayed consistent through frontend and API migrations.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Sequelize",
      "PAPI",
      "Unit tests",
      "Integration tests",
    ],
    workflow:
      'flowchart TD\n  A["Customer budget and schedule"] --> B["Backend validation"]\n  B --> C["Preview and confirm"]\n  C --> D["UI flights"]\n  D --> E["Core flights and delivery"]',
    context:
      "Built the original budget feature and its subsequent integrations, tests, documentation and migrations.",
  },
  {
    slug: "ui-to-core-flight-pipeline",
    tags: ["Backend", "Data pipelines", "Automation"],
    title: "UI-to-Core Flight Pipeline",
    category: "Scheduled data processing & budget reconciliation",
    summary:
      "A nightly pipeline translating customer-facing budgets into concrete flight records for downstream delivery services.",
    problem:
      "Recurring UI schedules needed to become monthly core flights without losing identifiers, spend history or billing compatibility.",
    architecture:
      "BullMQ scheduled jobs, flight conversion and reconciliation against existing core records.",
    metric: "Nightly budget processing",
    approach: [
      {
        title: "Translate the schedule",
        detail:
          "Converted recurring customer budgets into monthly core flights with proration and advertiser timezone handling.",
      },
      {
        title: "Reconcile existing records",
        detail:
          "Preserved or updated identifiers, archived removed flights and maintained spend history and downstream compatibility.",
      },
      {
        title: "Process scheduled and immediate changes",
        detail:
          "Built nightly future-month generation and queued user-triggered budget/billing updates, with logging and script-based dry runs.",
      },
    ],
    results: [
      {
        value: "Nightly",
        label: "Future-flight generation",
        detail:
          "Ongoing budgets produce the core records required for the next month.",
      },
      {
        value: "Reconciled",
        label: "Spend and flight continuity",
        detail:
          "Updates account for existing IDs, spend history and removed schedules.",
      },
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "BullMQ",
      "PostgreSQL",
      "GaryQL",
      "Scheduled jobs",
    ],
    workflow:
      'flowchart TD\n  A["Nightly schedule or budget edit"] --> B["BullMQ job"]\n  B --> C["UI-to-core conversion"]\n  C --> D["Reconcile existing flights"]\n  D --> E["Downstream delivery records"]',
    context:
      "Built the conversion and scheduled-processing pipeline connecting UI budgets to core backend services.",
  },
  {
    slug: "flat-cpm",
    tags: ["Billing", "Internal tools", "AdTech"],
    title: "Flat CPM Billing Controls",
    category: "Internal tooling & spend-aware billing transitions",
    summary:
      "Internal controls and backend conversion logic for fixed-CPM billing without disrupting active budget schedules.",
    problem:
      "Changing billing settings during a campaign required accurate treatment of prior spend and remaining budgets.",
    architecture:
      "Command Center configuration, audited billing changes and core-flight splitting.",
    metric: "Audited billing transitions",
    approach: [
      {
        title: "Expose controlled configuration",
        detail:
          "Built the Command Center toggle and validated target CPM, including permission-aware controls and hotel-portfolio support.",
      },
      {
        title: "Apply billing changes correctly",
        detail:
          "Built GaryQL helper/conversion logic to split core flights at billing changes, reconcile prior spend and remaining budget, and assign the appropriate billing types.",
      },
      {
        title: "Keep transitions observable",
        detail:
          "Added billing audit records, batched audit lookups and flight-billing scenario tests.",
      },
    ],
    results: [
      {
        value: "Audited",
        label: "Billing changes",
        detail:
          "Configuration changes remain traceable through flight conversion.",
      },
      {
        value: "Spend-aware",
        label: "Remaining-budget treatment",
        detail:
          "Transitions account for amounts already spent before new billing takes effect.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "GraphQL",
      "PostgreSQL",
      "DataLoader",
      "Command Center",
    ],
    workflow:
      'flowchart TD\n  A["Internal CPM controls"] --> B["Validate and audit"]\n  B --> C["Reconcile prior spend"]\n  C --> D["Split core flights"]\n  D --> E["Apply billing type"]',
    context:
      "Built both the internal frontend controls and backend flight/billing behavior.",
  },
  {
    slug: "papi-campaign-budget-apis",
    tags: ["Backend", "APIs", "AdTech"],
    title: "Campaign, Budget & Reach APIs",
    category: "Public API contracts & reusable backend integration",
    summary:
      "Reusable PAPI endpoints that brought established campaign and budget rules into the redesigned platform.",
    problem:
      "New product surfaces needed reliable API contracts for flights, budget previews, spend and audience reach.",
    architecture:
      "Typed PAPI controllers and services forwarding authorization and business validation to GaryQL.",
    metric: "Reusable API contracts",
    approach: [
      {
        title: "Expose flight and spend data",
        detail:
          "Added authorized flight listing with filtering, sorting and pagination, campaign spend windows and reach calculations.",
      },
      {
        title: "Support the budget wizard",
        detail:
          "Built the flight-change endpoint, forwarding GaryQL rules and mapping preview, saved, action-required and field-invalid outcomes. Preserved mid-month monthly-budget behavior.",
      },
      {
        title: "Keep list requests efficient",
        detail:
          "Made audience/creative ID expansion opt-in, excluded irrelevant ended-before-launch budgets and added campaign-mode support for Express/Nova consolidation.",
      },
    ],
    results: [
      {
        value: "Shared",
        label: "Budget validation",
        detail:
          "New interfaces consume the existing business rules through explicit API outcomes.",
      },
      {
        value: "Lean lists",
        label: "Less per-row data fetching",
        detail:
          "Related audience and creative IDs are expanded when requested.",
      },
    ],
    techStack: [
      "TypeScript",
      "NestJS",
      "REST",
      "OpenAPI",
      "GraphQL",
      "Zod",
      "Contract tests",
    ],
    workflow:
      'flowchart TD\n  A["Nova and Express"] --> B["PAPI contract"]\n  B --> C["Authorization and request mapping"]\n  C --> D["GaryQL rules"]\n  D --> E["Typed outcomes"]',
    context:
      "Implemented campaign, flight-change, spend and reach API contributions and their validation/contract coverage.",
  },
  {
    slug: "node-graphql-api-modernization",
    tags: ["GraphQL", "Backend", "Performance"],
    title: "Node & GraphQL API Modernization",
    category: "Backend performance & data access",
    summary:
      "Resolver and data-access improvements that reduced redundant work across campaign, budget and audience APIs.",
    problem:
      "N+1 queries, oversized selections, legacy service calls and unnecessary resolver work slowed product workflows.",
    architecture:
      "Request-aware GraphQL resolvers, batched/cached loaders and targeted database access.",
    metric: "Up to 90% faster APIs",
    approach: [
      {
        title: "Find the bottlenecks",
        detail:
          "Used Datadog and Grafana to investigate resolver timing and N+1 behavior. Reduced frontend field selections and unnecessary API requests.",
      },
      {
        title: "Reduce repeated work",
        detail:
          "Replaced legacy SHAPI reads with DataLoaders, batched and cached related rows, invalidated caches after writes, simplified nested loops and parallelized independent operations.",
      },
      {
        title: "Query only what is needed",
        detail:
          "Added pagination/filtering, selective database fields and GraphQL-selection-aware row/count queries. Migrated Sequelize models to TypeScript and hardened cross-advertiser record access.",
      },
    ],
    results: [
      {
        value: "Up to 90%",
        label: "Reported API performance improvement",
        detail:
          "Resume and project notes report the improvement across API modernization work.",
      },
      {
        value: "Batched",
        label: "Related-data access",
        detail:
          "Loaders reduce repeated database and downstream-service requests.",
      },
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "GraphQL",
      "DataLoader",
      "PostgreSQL",
      "Sequelize",
      "Datadog",
      "Grafana",
    ],
    workflow:
      'flowchart TD\n  A["Requested GraphQL fields"] --> B["Selection-aware resolvers"]\n  B --> C["Batch and cache loaders"]\n  C --> D["Targeted SQL or service calls"]\n  D --> E["Requested results"]',
    context:
      "Backend and frontend query optimization across GaryQL and its product consumers. Percentage outcomes are reported in the resume and project notes.",
  },
  {
    slug: "database-migration-tooling",
    tags: ["Database", "Developer tooling"],
    title: "Repeatable Database Migration Tooling",
    category: "Database tooling & test-environment reliability",
    summary:
      "Ordered SQL migrations and an applied-migration ledger for repeatable database setup and schema changes.",
    problem:
      "Manual schema and data updates were difficult to repeat consistently when testing new features.",
    architecture:
      "Umzug SQL execution with Sequelize-backed migration tracking and test-database guards.",
    metric: "Repeatable test migrations",
    approach: [
      {
        title: "Automate ordered execution",
        detail:
          "Built SQL/DDL/data-migration discovery and execution with Umzug and a Sequelize migration ledger.",
      },
      {
        title: "Constrain the runner",
        detail:
          "The inspected CLI explicitly requires the test environment and testdb. It supports repeatable test schema setup; production execution is outside the verified scope of this runner.",
      },
      {
        title: "Rehearse feature rollouts",
        detail:
          "Project notes describe Dev/QA rehearsals before production and a goal of reducing data-loss risk and deployment downtime. Budget migration documentation records QA dry runs.",
      },
    ],
    results: [
      {
        value: "Ordered",
        label: "Repeatable migration execution",
        detail: "Applied migrations are recorded in a database-backed ledger.",
      },
      {
        value: "Test-only",
        label: "Explicit execution boundary",
        detail:
          "The CLI validates its environment and database before running.",
      },
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "SQL",
      "PostgreSQL",
      "Umzug",
      "Sequelize",
    ],
    workflow:
      'flowchart TD\n  A["SQL migration files"] --> B["Test environment guard"]\n  B --> C["Ordered Umzug execution"]\n  C --> D["Applied-migration ledger"]',
    context:
      "Built the repeatable migration tooling. The inspected CLI is restricted to test databases; rollout-risk reduction is an intended benefit rather than a measured result.",
  },
  {
    slug: "ai-rag-campaign-workflow",
    tags: ["AI", "Hackathon", "Prototype"],
    title: "AdDNA Campaign Prototype",
    category: "Hackathon prototype & AI-assisted campaign planning",
    summary:
      "A one-day prototype turning a company URL into an editable starting point for an advertising campaign.",
    problem:
      "Campaign planning required repeated website research and manual decisions about audiences, keywords and budgets.",
    architecture:
      "Next.js frontend, Java Spring Boot REST backend and AI-assisted website analysis.",
    metric: "One-day working prototype",
    approach: [
      {
        title: "Bootstrap the prototype",
        detail:
          "Bootstrapped frontend and backend for a ten-person team spanning product, database and engineering. Learned Java during implementation; configured Next.js, React, TypeScript, Tailwind, Spring Boot, PostgreSQL and Turborepo.",
      },
      {
        title: "Turn a URL into editable recommendations",
        detail:
          "Built a workflow for product summaries, age/gender/income/interests, audience keywords, budget amounts and campaign duration, with editable fields. Added Audience Mood Scanner, trending keywords and sentiment presentation.",
      },
      {
        title: "Explore the campaign-planning scope",
        detail:
          "The initial concept also included scraping/RAG, location/device targeting, budget dates and creative-image inspiration. The prototype includes mock fallbacks and randomized estimates; those broader outputs need further validation.",
      },
      {
        title: "Hand off the next stage",
        detail:
          "Teammates subsequently developed the production Shopper Graph/MNTN Match system. Its scraping, LangChain/OpenAI generation and taxonomy retrieval are later team work.",
      },
    ],
    results: [
      {
        value: "One day",
        label: "Working hackathon prototype",
        detail:
          "A cross-functional ten-person team produced an end-to-end demo.",
      },
      {
        value: "Editable",
        label: "Campaign-planning starting point",
        detail:
          "Users could revise generated summaries, demographics, keywords and budget/duration recommendations.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "AI APIs",
      "PostgreSQL",
      "Turborepo",
    ],
    workflow:
      'flowchart TD\n  A["Company URL"] --> B["Java analysis API"]\n  B --> C["AI-assisted analysis"]\n  C --> D["Summary, audience and budget"]\n  D --> E["Editable planning UI"]',
    context:
      "Hackathon prototype ownership covers the application foundation and documented UI contributions. Later production Shopper Graph work belongs to the subsequent team. Earlier portfolio notes associate the broader initiative with approximately 15% reductions in build time/churn; prototype attribution and measurement remain unconfirmed.",
  },
  {
    slug: "nova-assistant",
    tags: ["AI agents", "Prototype", "APIs"],
    title: "Nova Campaign Assistant",
    category: "Agentic UI prototype & controlled API actions",
    summary:
      "A conversational prototype for describing campaign changes, reviewing proposed actions and working with campaign reports.",
    problem:
      "Campaign operators needed a shorter path from describing a change to finding the right controls and applying it.",
    architecture:
      "Chat UI, LangSmith Managed Deep Agent, approval interrupts and a scoped PAPI gateway.",
    metric: "8 API tools · prototype",
    approach: [
      {
        title: "Build the conversation",
        detail:
          "Built a chat panel with streamed progress and campaign/report links. Tools list/create/launch/pause campaigns, list flights/update budgets and discover reporting columns/run reports.",
      },
      {
        title: "Keep writes reviewable",
        detail:
          "Required approve/reject decisions for campaign creation, launch, pause and budget changes. Routed action-required budget cases back into the budget UI.",
      },
      {
        title: "Scope access to the user",
        detail:
          "Added short-lived encrypted grants, user/advertiser-bound threads, allowed-operation checks and campaign ownership verification. Raw PAPI credentials stay outside the hosted agent.",
      },
    ],
    results: [
      {
        value: "8 tools",
        label: "Campaign and reporting actions",
        detail: "In-process tools call PAPI REST through the Nova server.",
      },
      {
        value: "Human approval",
        label: "Controlled write execution",
        detail:
          "The prototype pauses supported writes for explicit user review.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "LangSmith",
      "Managed Deep Agents",
      "LangChain tools",
      "PAPI REST",
      "AES-GCM",
    ],
    workflow:
      'flowchart TD\n  A["Chat request"] --> B["Nova server"]\n  B --> C["Hosted agent"]\n  C --> D["Approve proposed write"]\n  D --> E["Scoped PAPI gateway"]\n  E --> F["Campaign or report result"]',
    context:
      "Proof-of-concept branch work. The assistant calls PAPI directly through Nova; public MCP integration is a future direction.",
  },
  {
    slug: "mntn-public-mcp-validation",
    tags: ["MCP", "AI", "Validation"],
    title: "MNTN Public MCP Validation",
    category: "AI integration validation & protocol research",
    summary:
      "Validation and integration research for customer-facing AI access to MNTN campaign and reporting capabilities.",
    problem:
      "Exposing an advertising platform to AI assistants requires understandable tools and authorization that follows the caller.",
    architecture:
      "External AI client, public MCP server and authenticated PAPI requests.",
    metric: "MCP validation",
    approach: [
      {
        title: "Validate the public interface",
        detail:
          "Worked with and validated the customer-facing MCP for advertiser, campaign, flight, audience and reporting access.",
      },
      {
        title: "Understand action and access boundaries",
        detail:
          "Researched how campaign lifecycle actions and caller authorization flow through the MCP server into PAPI.",
      },
      {
        title: "Evaluate future product integration",
        detail:
          "Explored the relationship between external MCP tools and Nova assistant workflows, whose prototype currently uses direct PAPI tools.",
      },
    ],
    results: [
      {
        value: "Validation",
        label: "Public AI integration contribution",
        detail:
          "Contribution covers working with the MCP and understanding its platform integration.",
      },
      {
        value: "Caller-scoped",
        label: "Authorization model research",
        detail:
          "Requests retain the caller identity when forwarded to platform APIs.",
      },
    ],
    techStack: [
      "Model Context Protocol",
      "AI assistants",
      "REST",
      "PAPI",
      "Authorization",
    ],
    workflow:
      'flowchart TD\n  A["External AI assistant"] --> B["Public MCP tools"]\n  B --> C["Caller authorization"]\n  C --> D["PAPI"]\n  D --> E["Campaign and reporting data"]',
    context:
      "Validation and integration research contribution. Authorship of the public MCP server is not part of this project claim.",
  },
  {
    slug: "quickframe-creative-workflows",
    tags: ["AI integration", "Frontend", "Video"],
    title: "QuickFrame AI Creative Workflows",
    category: "Creative management & AI product integration",
    summary:
      "Creative selection, upload, preview and review workflows connecting campaign setup to QuickFrame AI.",
    problem:
      "Advertisers needed to manage creative readiness and move between generated assets and campaign activation.",
    architecture:
      "Campaign creative library, upload validation, review/status handling and QuickFrame entry points.",
    metric: "Creative-to-campaign workflow",
    approach: [
      {
        title: "Build the creative library",
        detail:
          "Built Express library/picker views, previews, details, generating placeholders and Edit in QuickFrame entry points.",
      },
      {
        title: "Handle the asset lifecycle",
        detail:
          "Added video upload validation, playback/status, review, rejection reasons, duplication/attachment, replacement and deletion.",
      },
      {
        title: "Extend and monitor the workflow",
        detail:
          "Extended creative workflows and poster extraction in Nova Express branch work; added rejected pre-generated creative monitoring/report assets.",
      },
    ],
    results: [
      {
        value: "Connected",
        label: "Creative and campaign setup",
        detail:
          "Advertisers can select assets and understand readiness within campaign creation.",
      },
      {
        value: "Visible status",
        label: "Actionable review feedback",
        detail:
          "Generating, validation and rejection states provide next steps.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "QuickFrame AI integration",
      "Video APIs",
      "Pendo",
      "SQL",
      "Mode",
    ],
    workflow:
      'flowchart TD\n  A["Upload or select creative"] --> B["Validate and preview"]\n  B --> C["Review and status"]\n  C --> D["Attach to campaign"]\n  C --> E["Replace or edit in QuickFrame"]',
    context:
      "Owned documented frontend creative-management contributions and monitoring assets. Nova Express extensions include branch work.",
  },
  {
    slug: "dsp-delivery-controls",
    tags: ["Full-stack", "AdTech", "Delivery controls"],
    title: "DSP Delivery Controls",
    category: "Advertising controls & downstream synchronization",
    summary:
      "Advertiser and campaign controls for when, where and how often ads can be delivered.",
    problem:
      "Delivery restrictions needed to remain consistent across inherited settings, customer changes and downstream buying services.",
    architecture:
      "Advanced-settings UI, backend validation and synchronized publisher/daypart/frequency rules.",
    metric: "Cross-platform delivery controls",
    approach: [
      {
        title: "Expose useful controls",
        detail:
          "Built frequency caps, day/week parting, TV-network and publisher-domain exclusions, automated/manual controls, inheritance and role-aware configuration.",
      },
      {
        title: "Keep downstream restrictions consistent",
        detail:
          "Handled timezone/UTC conversion and SHAPI schedule synchronization. Extended publisher-blocklist sync so unblocking one setting preserves overlapping TV-network or Multi-Touch exclusions.",
      },
      {
        title: "Support real input formats",
        detail:
          "Added bulk domain uploads, wildcard/subdomain validation and public-suffix handling; improved network lookup efficiency and removed warehouse-backed UI blocklist dependencies.",
      },
    ],
    results: [
      {
        value: "Consistent",
        label: "Inherited and explicit restrictions",
        detail:
          "UI settings and downstream exclusions preserve the same delivery intent.",
      },
      {
        value: "Bulk input",
        label: "Validated domain controls",
        detail:
          "Domain uploads and wildcard rules support practical advertiser workflows.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "PostgreSQL",
      "SHAPI",
      "Sync services",
    ],
    workflow:
      'flowchart TD\n  A["Advertiser and campaign settings"] --> B["Validate and merge inheritance"]\n  B --> C["Normalize time and domains"]\n  C --> D["Synchronize restrictions"]\n  D --> E["Delivery services"]',
    context:
      "Contributions span Premier UI, GaryQL, SHAPI, shared URL tooling and publisher-blocklist synchronization.",
  },
  {
    slug: "audience-reach-and-spend",
    tags: ["Analytics", "Budgeting", "AdTech"],
    title: "Audience Reach & Spend Planning",
    category: "Budget recommendations & reporting reconciliation",
    summary:
      "Reach and cost estimates that connect audience planning, recommended budgets and actual campaign spend.",
    problem:
      "Advertisers needed to relate audience size and cost to a budget decision and understand spend against the right flight.",
    architecture:
      "Available Reach UI, budget recommendation APIs and flight-aware spend reconciliation.",
    metric: "Reach-to-budget planning",
    approach: [
      {
        title: "Make reach actionable",
        detail:
          "Built audience/cost estimates and navigation into the budget drawer for new and existing campaigns.",
      },
      {
        title: "Connect recommendations to goals",
        detail:
          "Supported budget recommendations with CPA/ROAS, conversion and visit estimates.",
      },
      {
        title: "Reconcile reported spend",
        detail:
          "Improved recent-spend reporting, active/batch comparison and association with the correct flight records.",
      },
    ],
    results: [
      {
        value: "Connected",
        label: "Audience and budget decisions",
        detail: "Reach estimates lead into an actionable budget workflow.",
      },
      {
        value: "Flight-aware",
        label: "Spend reconciliation",
        detail:
          "Recent reporting and budget records are associated with the relevant campaign flight.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "GraphQL",
      "PostgreSQL",
      "Reporting APIs",
      "GaryQL",
    ],
    workflow:
      'flowchart TD\n  A["Audience and campaign goals"] --> B["Reach and cost estimates"]\n  B --> C["Budget recommendation"]\n  C --> D["Flight budget"]\n  E["Recent spend reports"] --> D',
    context:
      "Built reach/recommendation UI and backend spend-reconciliation contributions across the existing platform.",
  },
  {
    slug: "campaign-operations-tooling",
    tags: ["Internal tools", "Automation"],
    title: "Campaign Operations Tooling",
    category: "Internal tools & customer-service workflows",
    summary:
      "Operational tools for private-marketplace deals, insertion orders, customer notifications and campaign support.",
    problem:
      "Campaign operations crossed inventory, billing and support systems, requiring traceable tools and reliable event handling.",
    architecture:
      "Command Center tools, GaryQL mutations, scheduled reporting and customer-service integrations.",
    metric: "Inventory, billing and support",
    approach: [
      {
        title: "Manage marketplace inventory",
        detail:
          "Built PMP vendor/group/deal tools: prefix validation, many-to-many membership, channel/date/budget controls, edit/detail drawers, pagination, synchronization and archive handling.",
      },
      {
        title: "Support billing and review",
        detail:
          "Built insertion-order create/query/archive and invoice/user resolution; improved UI validation and preview/download/PDF workflows. Extended guest creative review and Zendesk escalation.",
      },
      {
        title: "Route useful notifications",
        detail:
          "Added budget/launch/pause notifications with deduplication and company/budget/pause-reason context. Built a scheduled Lambda for daily month-to-date revenue alerts and reporting integration/tests.",
      },
      {
        title: "Prototype faster operator workflows",
        detail:
          "Built an editable-tree bulk-update prototype for campaigns, budgets and audiences with duplication/deletion, plus command-palette hackathon search/navigation.",
      },
    ],
    results: [
      {
        value: "Integrated",
        label: "Inventory and billing operations",
        detail:
          "Tools connect editable records with downstream synchronization and support workflows.",
      },
      {
        value: "Scheduled",
        label: "Revenue and customer-service signals",
        detail:
          "Operational events and reporting reach the teams responsible for follow-up.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "GraphQL",
      "PostgreSQL",
      "AWS Lambda",
      "Serverless",
      "Zendesk",
      "Slack integration",
    ],
    workflow:
      'flowchart TD\n  A["Operations tools"] --> B["Validated platform mutations"]\n  B --> C["Inventory and billing sync"]\n  B --> D["Customer-service events"]\n  E["Scheduled reporting"] --> D',
    context:
      "Includes production-system contributions and explicitly identified bulk-edit/command-palette prototypes; PDF and support workflows were shared codebases.",
  },
  {
    slug: "authentication-and-session-reliability",
    tags: ["Authentication", "Reliability"],
    title: "Authentication & Session Reliability",
    category: "Onboarding, account state & cross-origin sessions",
    summary:
      "More reliable signup, advertiser-domain approval and session synchronization across product surfaces.",
    problem:
      "Account-creation races, domain issues and cross-origin session feedback could interrupt onboarding or produce repeated requests.",
    architecture:
      "Validated onboarding, profile-aware redirects and deduplicated broadcast/socket synchronization.",
    metric: "Reliable account transitions",
    approach: [
      {
        title: "Guide domain remediation",
        detail:
          "Built company-URL/logo validation and domain-approval issue handling, retries, configured limits and escalation.",
      },
      {
        title: "Make signup state explicit",
        detail:
          "Fixed redirects racing MNTN profile creation and added registration failure/retry tests. Earlier work also established an SMS two-factor authentication foundation/POC.",
      },
      {
        title: "Break session feedback loops",
        detail:
          "Fixed Flight Deck cross-origin session-sync loops using shared deduplication and throttling to bound repeated broadcast and network activity.",
      },
    ],
    results: [
      {
        value: "Profile-ready",
        label: "Signup navigation",
        detail: "Redirects wait for the required MNTN profile creation step.",
      },
      {
        value: "Bounded",
        label: "Session synchronization",
        detail:
          "Deduplication and throttling prevent repeated cross-origin feedback.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Authentication APIs",
      "BroadcastChannel",
      "WebSockets",
      "Integration tests",
    ],
    workflow:
      'flowchart TD\n  A["Signup or advertiser change"] --> B["Validate account state"]\n  B --> C["Create profile or sync session"]\n  C --> D["Deduplicate and throttle"]\n  D --> E["Ready product session"]',
    context:
      "Contributions span Express domain handling, MNTN Pass signup, Flight Deck session synchronization and an earlier SMS 2FA prototype.",
  },
  {
    slug: "design-systems-and-developer-tooling",
    tags: ["Design systems", "Developer tooling"],
    title: "Design Systems & Developer Tooling",
    category: "Reusable components & engineering enablement",
    summary:
      "Installable UI components, hosted documentation and reusable tooling for product engineers.",
    problem:
      "Teams needed a practical way to reuse components and tokens across applications without repeating installation and setup work.",
    architecture:
      "Generated shadcn registry, hosted Storybook and documented component/setup contracts.",
    metric: "Installable shared UI",
    approach: [
      {
        title: "Build the component registry",
        detail:
          "Built the shadcn registry service/generator to discover components, hooks, assets and tokens; rewrite monorepo imports; infer dependencies; and serve installable registry assets.",
      },
      {
        title: "Document and extend the system",
        detail:
          "Hosted browsable Storybook, documented installation/contribution and extended contextual menus, status badges, reach visuals and shared URL helpers.",
      },
      {
        title: "Enable the wider team",
        detail:
          "Contributed MFE starter/setup documentation, local proxy routes and interview exercises for React/API, TypeScript/Express, CSV parsing, SQL and QA.",
      },
    ],
    results: [
      {
        value: "Installable",
        label: "Shared components and tokens",
        detail:
          "Registry generation resolves source files and dependencies for consuming applications.",
      },
      {
        value: "Documented",
        label: "Team development workflows",
        detail:
          "Storybook and setup guidance make components and conventions easier to adopt.",
      },
    ],
    techStack: [
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Storybook",
      "Node.js",
      "Docker",
      "Monorepo tooling",
    ],
    workflow:
      'flowchart TD\n  A["Components, hooks and tokens"] --> B["Registry generator"]\n  B --> C["Imports and dependencies"]\n  C --> D["Installable registry assets"]\n  D --> E["Product applications"]\n  A --> F["Storybook documentation"]',
    context:
      "Built registry generation/hosting contributions in Express and Nova and extended shared tooling and documentation.",
  },
  {
    slug: "ci-cd-infrastructure-acceleration",
    tags: ["CI/CD", "Cloud", "Observability"],
    title: "CI/CD & Operational Engineering",
    category: "Delivery automation & production observability",
    summary:
      "Automated delivery environments and observability that shortened release cycles and made product issues easier to investigate.",
    problem:
      "Long build/deploy cycles, environment setup and noisy error signals slowed engineering feedback.",
    architecture:
      "GitHub Actions, Docker/Helm, GCP/ArgoCD previews, codegen and client/service observability.",
    metric: "40% shorter delivery cycles",
    approach: [
      {
        title: "Automate environments and releases",
        detail:
          "Built GCP/ArgoCD QA and PR-preview configuration across Campaign Suite, GaryQL, Premier, Command Center, Express and Nova; contributed staging integration and calendar-driven release branch creation.",
      },
      {
        title: "Establish useful checks",
        detail:
          "Added codegen, type/lint/test gates, secret scanning and domain-boundary enforcement. Docker, declarative configuration and cleanup reduced repeated environment work.",
      },
      {
        title: "Improve operational signals",
        detail:
          "Added Faro GraphQL/client errors and advertiser context, retries/noise filtering, Pendo creative events, Grafana alerts, synthetic monitors, PagerDuty routing and advertiser page-load dashboards.",
      },
      {
        title: "Address reliability edges",
        detail:
          "Fixed R2 report loading/error callbacks; added budget audit queries and enhanced-visit-tracking migration SQL. Deployment-recovery branch work covered uncached HTML, immutable hashed assets and early chunk reloads.",
      },
    ],
    results: [
      {
        value: "40%",
        label: "Reported reduction in delivery time",
        detail:
          "Resume/project notes report shorter test, build and deploy cycles.",
      },
      {
        value: "2×",
        label: "Reported developer velocity",
        detail:
          "Project notes attribute improved velocity to AI-assisted/background-agent workflows and system design.",
      },
    ],
    techStack: [
      "GitHub Actions",
      "Docker",
      "Helm",
      "ArgoCD",
      "AWS",
      "GCP",
      "Grafana Faro",
      "Grafana",
      "PagerDuty",
      "Pendo",
    ],
    workflow:
      'flowchart TD\n  A["Code change"] --> B["Checks and image build"]\n  B --> C["PR preview or QA environment"]\n  C --> D["Release pipeline"]\n  D --> E["Client and service telemetry"]\n  E --> A',
    context:
      "Delivery and operational contributions across multiple MNTN repositories. Recovery work includes branch changes; outcome percentages come from the resume/project notes.",
  },
]

export const mntnPortfolioItems: PortfolioItem[] = mntnProjects.map(
  project => ({
    slug: project.slug,
    title: project.title,
    eyebrow: project.category,
    summary: project.summary,
    challenge: [project.problem],
    approach: project.approach,
    results: project.results,
    screenshots: [],
    diagrams: [
      {
        title: project.title,
        caption: project.architecture,
        source: project.workflow,
      },
    ],
    techStack: project.techStack,
    demoUrl: "",
    demoEmbedUrl: "",
    context: project.context,
    approachLead: project.architecture,
    resultsTitle: "Project outcomes",
    resultsLead: project.summary,
    visualsTitle: "How the workflow fits together",
  })
)

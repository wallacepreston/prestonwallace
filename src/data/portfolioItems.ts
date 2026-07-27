export interface PortfolioItem {
  isPlaceholder?: boolean;
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  challenge: string[];
  approach: {
    title: string;
    detail: string;
  }[];
  results: {
    value: string;
    label: string;
    detail: string;
  }[];
  screenshots: {
    src: string;
    alt: string;
    caption: string;
  }[];
  diagrams?: {
    title: string;
    caption: string;
    source: string;
  }[];
  techStack: string[];
  demoUrl: string;
  demoEmbedUrl: string;
  context: string;
  approachLead: string;
  resultsTitle: string;
  resultsLead: string;
  visualsTitle: string;
  demoTitle?: string;
  demoLead?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'llm-contact-discovery',
    title: 'LLM Contact Discovery',
    eyebrow: 'AI prospect research & data enrichment',
    summary:
      'A production-ready workflow that turns a plain-language university search into a reviewable, exportable directory of verified contacts.',
    challenge: [
      'Finding the right contacts across university websites is slow, inconsistent, and difficult to scale. Useful information is scattered across faculty directories, profile pages, tables, subdomains, and PDFs, while titles and departments vary widely between institutions.',
      'The system needed to discover contacts efficiently without treating an LLM as an unchecked source of truth. Every result had to remain traceable, reviewable, and useful to an operator.',
    ],
    approach: [
      {
        title: 'Interpret the search',
        detail:
          'OpenAI web search translates a plain-language query into likely university candidates, with confidence and source reasoning presented before a discovery run begins.',
      },
      {
        title: 'Crawl deterministically',
        detail:
          'A resumable breadth-first crawler explores sitemaps, directories, common subdomains, profile pages, and HTML tables. Deterministic parsing does the bulk of discovery; AI fills targeted gaps.',
      },
      {
        title: 'Validate and enrich',
        detail:
          'Contacts are deduplicated, checked for valid names, sanitized through rules and batched AI review, then enriched with public emails, phone numbers, office details, and source URLs.',
      },
      {
        title: 'Keep people in control',
        detail:
          'Progress states, confidence scores, flags, source links, selective enrichment, and CSV export make the automation inspectable instead of opaque.',
      },
    ],
    results: [
      {
        value: '15,000',
        label: 'page crawl ceiling',
        detail:
          'A resumable queue and persisted crawl state support broad institutional sites without losing progress.',
      },
      {
        value: '100',
        label: 'contacts per enrichment pass',
        detail:
          'Priority ordering and controlled concurrency keep enrichment focused on the highest-value records.',
      },
      {
        value: '3',
        label: 'operator stages',
        detail:
          'Search, discovery, and results turn an open-ended research task into a clear, repeatable workflow.',
      },
    ],
    screenshots: [
      {
        src: '/img/portfolio/llm-contact-discovery/home.png',
        alt: 'University Contact Finder home screen with an overview of the discovery workflow',
        caption: 'A focused starting point explains the workflow before an operator begins.',
      },
      {
        src: '/img/portfolio/llm-contact-discovery/search.png',
        alt: 'University search screen showing candidate institutions returned for review',
        caption: 'Plain-language search returns candidate institutions with context for selection.',
      },
      {
        src: '/img/portfolio/llm-contact-discovery/results.png',
        alt: 'Contact discovery results table with filters, status, and export controls',
        caption: 'Reviewable results expose contact details, confidence, status, and next actions.',
      },
    ],
    techStack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'OpenAI API',
      'Vercel AI SDK',
      'PostgreSQL',
      'Prisma',
      'Neon',
      'Inngest',
      'Clerk',
      'Cheerio',
      'Zod',
      'Tailwind CSS',
      'shadcn/ui',
      'Vitest',
      'Vercel',
    ],
    demoUrl: 'https://www.youtube.com/watch?v=GaPaiBukl_s',
    demoEmbedUrl: 'https://www.youtube-nocookie.com/embed/GaPaiBukl_s',
    context:
      'Designed and built end-to-end as a full-stack AI system: product workflow, application architecture, crawler, AI orchestration, persistence, background processing, validation, and deployment.',
    approachLead:
      'A hybrid architecture pairs deterministic crawling and validation with selective AI reasoning, so the system stays scalable, inspectable, and grounded in source data.',
    resultsTitle: 'A repeatable research system.',
    resultsLead:
      'The finished product replaces scattered manual browsing with one traceable workflow, while keeping operators in control of review and enrichment.',
    visualsTitle: 'From search to actionable results.',
    demoTitle: 'See the workflow in action.',
    demoLead:
      'Follow the full journey from a university query to discovered, reviewable contacts.',
  },
  {
    slug: 'ai-instructor-validation',
    title: 'AI Instructor Validation',
    eyebrow: 'Real-time identity validation & access control',
    summary:
      'An AI-assisted access portal that verifies academic instructors against official university sources, routes uncertain cases for human approval, and returns a clear decision in one guided flow.',
    challenge: [
      'Instructor access requests were a high-volume operational bottleneck. Teams had to confirm that an applicant belonged to a legitimate institution and department before granting access, turning a simple account request into repetitive research and follow-up.',
      'The workflow needed to move quickly without letting AI make an opaque access-control decision. Strong matches could be approved automatically, but incomplete or conflicting evidence needed a safe path to manual review.',
    ],
    approach: [
      {
        title: 'Capture verified inputs',
        detail:
          'A focused account flow collects the instructor’s name, .edu email, institution, and department, with required-field, domain, and input validation before any external work begins.',
      },
      {
        title: 'Ground the decision',
        detail:
          'The backend searches public faculty information and asks OpenAI to evaluate name, institution, department, and email alignment. Validation is constrained to official school sources and returned as structured confidence and reasoning.',
      },
      {
        title: 'Route by confidence',
        detail:
          'High-confidence matches are activated automatically. Missing university or department evidence is denied, while ambiguous matches remain pending and are routed to a department head for approval.',
      },
      {
        title: 'Close the operational loop',
        detail:
          'The system persists every request, records status changes in an audit log, sends outcome notifications, and gives internal teams search, filtering, reporting, and manual override controls.',
      },
    ],
    results: [
      {
        value: '85%',
        label: 'less validation time',
        detail:
          'Automated research and decision routing remove most of the repetitive work from instructor access reviews.',
      },
      {
        value: '≈5,000',
        label: 'hours saved per year',
        detail:
          'The production workflow turns a recurring manual process into a scalable, real-time service.',
      },
      {
        value: '3',
        label: 'confidence-based paths',
        detail:
          'Requests resolve to automated approval, manual review, or denial based on grounded evidence and explicit thresholds.',
      },
    ],
    screenshots: [
      {
        src: '/img/portfolio/ai-instructor-validation/demo-1-lets-get-started.png',
        alt: 'Showroom welcome screen inviting an instructor to begin creating an account',
        caption: 'A concise entry point sets expectations before the validation flow begins.',
      },
      {
        src: '/img/portfolio/ai-instructor-validation/demo-2-create-account-validating.png',
        alt: 'Create Account form validating instructor credentials',
        caption: 'The interface keeps the applicant informed while official academic sources are checked.',
      },
      {
        src: '/img/portfolio/ai-instructor-validation/demo-3-create-account-denied.png',
        alt: 'Instructor access request denied with a manual review option',
        caption: 'Unverified requests fail safely and provide a clear route to manual review.',
      },
      {
        src: '/img/portfolio/ai-instructor-validation/demo-4-create-account-approved.png',
        alt: 'Instructor account approved after automated validation',
        caption: 'Strong evidence produces an immediate, unambiguous approval outcome.',
      },
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'OpenAI API',
      'Perplexity AI SDK',
      'PostgreSQL',
      'Prisma',
      'SendGrid',
      'Tailwind CSS',
      'Jest',
      'Replit',
    ],
    demoUrl: '',
    demoEmbedUrl: '',
    context:
      'Built as a unified full-stack application spanning the applicant experience, validation API, AI-assisted research, confidence-based decision logic, approval routing, email notifications, persistence, audit logging, and internal operations tooling.',
    approachLead:
      'The architecture separates evidence gathering, AI interpretation, and policy-based routing so each decision remains explainable and uncertain cases stay under human control.',
    resultsTitle: 'Faster access without giving up control.',
    resultsLead:
      'The finished system automates the common path, preserves a human decision point for ambiguity, and gives every applicant a clear outcome.',
    visualsTitle: 'One request, three transparent states.',
  },
  {
    slug: 'predictive-budget-spend-system',
    title: 'Predictive Budget Spend System',
    eyebrow: 'Predictive campaign planning & decision support',
    summary:
      'A two-phase machine-learning system that learns from historical campaign outcomes, then gives users an immediate High, Medium, or Low budget-spend prediction while they configure a campaign.',
    challenge: [
      'Campaign teams had to choose budgets, time frames, audiences, network blocklists, and delivery settings before they knew whether those parameters were likely to spend the full budget. Poorly balanced configurations could limit delivery and leave revenue unrealized.',
      'The opportunity was to turn historical spend behavior into practical, pre-launch guidance. The prediction needed to arrive inside the existing campaign workflow and translate a model score into language a user could act on immediately.',
    ],
    approach: [
      {
        title: 'Build the historical dataset',
        detail:
          'Combine past campaign configurations—budget, time frame, audience size, network blocklists, targeting, and delivery parameters—with the observed outcome of whether each campaign spent its full budget on time.',
      },
      {
        title: 'Train and validate the model',
        detail:
          'Use those labeled outcomes to identify delivery patterns, train the predictive model, evaluate its performance, and derive validated thresholds for High, Medium, and Low likelihood classifications.',
      },
      {
        title: 'Serve predictions through an API',
        detail:
          'Deploy the trained model behind a REST endpoint that accepts a current campaign configuration, applies the same feature preparation used in training, and returns a spend-likelihood score and classification.',
      },
      {
        title: 'Put guidance in the workflow',
        detail:
          'Request a prediction as campaign parameters change and display the result in the UI before launch, giving the user time to adjust the configuration while the decision is still reversible.',
      },
    ],
    results: [
      {
        value: '40%',
        label: 'revenue increase',
        detail:
          'Predictive budget-spend guidance helped teams recognize and act on campaign configurations with stronger delivery potential.',
      },
      {
        value: '3',
        label: 'clear classifications',
        detail:
          'High, Medium, and Low translate a raw model prediction into concise guidance that campaign users can understand.',
      },
      {
        value: 'Pre-launch',
        label: 'decision feedback',
        detail:
          'The prediction appears while a campaign is being configured, when budget, timing, audience, and delivery inputs can still be changed.',
      },
    ],
    screenshots: [],
    diagrams: [
      {
        title: 'Model training and threshold validation',
        caption:
          'The offline training pipeline connects each campaign configuration to its observed spend outcome, then validates both the model and the user-facing classification boundaries.',
        source: `flowchart TD
  subgraph INPUTS["HISTORICAL CAMPAIGN INPUTS"]
    B["Budget amount"]
    T["Campaign time frame"]
    A["Audience size"]
    N["Network blocklists"]
    P["Targeting & delivery parameters"]
  end

  B --> J["Join configuration with outcome"]
  T --> J
  A --> J
  N --> J
  P --> J
  S["Label: full budget spent<br/>within time frame?"] --> J
  J --> Q["Clean, encode & prepare features"]
  Q --> R["Training dataset"]
  R --> M["Train predictive model"]
  M --> V["Validate on historical holdout data"]
  V --> TH["Derive High / Medium / Low thresholds"]
  TH --> G{"Meets performance criteria?"}
  G -->|"No"| Q
  G -->|"Yes"| D[("Deploy model + thresholds")]`,
      },
      {
        title: 'Two-phase system architecture',
        caption:
          'Historical outcomes produce a validated model; the full-stack application then uses that model for real-time campaign guidance.',
        source: `flowchart LR
  subgraph TRAIN["1 · TRAINING PHASE"]
    A["Historical campaign<br/>configurations"] --> B["Feature preparation"]
    O["Actual spend outcomes"] --> B
    B --> C["Train predictive model"]
    C --> D["Validate model &<br/>classification thresholds"]
    D --> E[("Versioned model")]
  end

  subgraph APP["2 · FULL-STACK PREDICTION PHASE"]
    U["Campaign UI"] -->|"Current configuration"| API["Prediction REST API"]
    API --> F["Apply feature preparation"]
    F --> M["Model inference"]
    E -.->|"Deploy"| M
    M --> K{"Classification"}
    K --> H["High"]
    K --> MD["Medium"]
    K --> L["Low"]
    H --> U
    MD --> U
    L --> U
  end`,
      },
      {
        title: 'Real-time classification request',
        caption:
          'The online path keeps model complexity behind a REST API and returns a simple classification to the campaign-planning interface.',
        source: `sequenceDiagram
  actor User
  participant UI as Campaign UI
  participant API as Prediction REST API
  participant Prep as Feature Preparation
  participant Model as Predictive Model

  User->>UI: Configure budget, timing,<br/>audience and delivery settings
  UI->>API: POST current campaign configuration
  API->>Prep: Validate and transform inputs
  Prep->>Model: Send model-ready features
  Model-->>API: Return spend-likelihood score
  API->>API: Apply validated thresholds
  API-->>UI: Return High, Medium, or Low
  UI-->>User: Display pre-launch guidance`,
      },
    ],
    techStack: [
      'Historical campaign data',
      'Feature engineering',
      'Supervised machine learning',
      'Predictive classification',
      'Model validation',
      'Classification thresholds',
      'REST API',
      'Full-stack application integration',
      'Campaign configuration UI',
    ],
    demoUrl: '',
    demoEmbedUrl: '',
    context:
      'The portfolio visuals document the system at the architecture level because source code and product screenshots are not available. The work spans offline model training, threshold validation, model deployment, REST inference, and pre-launch UI feedback.',
    approachLead:
      'The design separates offline learning from online inference: training can evolve independently while the product consumes a stable, explainable prediction contract.',
    resultsTitle: 'Prediction at the point of decision.',
    resultsLead:
      'Instead of reviewing underdelivery after launch, the system gives campaign teams an actionable signal while configuration choices can still be improved.',
    visualsTitle: 'From historical outcomes to a live classification.',
  },
];

export const getPortfolioItem = (slug: string) =>
  portfolioItems.find((item) => item.slug === slug);

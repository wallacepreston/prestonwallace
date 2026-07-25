export const heroTestimonial = {
  name: "Jean Leconte II",
  detail: "Generative AI Engineer, AWS",
  image: "/images/testimonials/jean-leconte-ii.jpeg",
  socialUrl: "https://www.linkedin.com/in/jean-leconte-ii/",
  quote:
    "I've learned a ton from Preston and recommend if anyone reading this has the opportunity to work with him in any capacity they should take it!",
}

export const proofStats = [
  {
    value: "40%",
    label: "revenue increase",
    detail:
      "Predictive budget-spend work turned campaign and revenue signals into timely action.",
    href: "#predictive-budget-spend-system",
  },
  {
    value: "85%",
    label: "time savings",
    detail:
      "AI instructor validation replaced repetitive access checks with real-time search and webhook automation.",
    href: "#ai-instructor-validation",
  },
  {
    value: "5,000",
    label: "hours saved per year",
    detail:
      "The same instructor validation system removed approximately 5,000 hours of manual work each year.",
    href: "#ai-instructor-validation",
  },
  {
    value: "$500K+",
    label: "annual efficiency gains",
    detail:
      "AI office-hours automation used OCR, APIs, and Salesforce integration to reduce manual operations.",
    href: "#ai-office-hours-automation",
  },
  {
    value: "90%",
    label: "API performance improvement",
    detail:
      "Node and GraphQL API modernization made production product surfaces faster and more reliable.",
    href: "#node-graphql-api-modernization",
  },
  {
    value: "40%",
    label: "CI/CD cycle reduction",
    detail:
      "Infrastructure and CI/CD work reduced test-build-deploy time for the engineering workflow.",
    href: "#ci-cd-infrastructure-acceleration",
  },
]

export const capabilities = [
  {
    icon: "fa-cogs",
    title: "Full-stack development",
    summary:
      "I build scalable software with React, TypeScript, Next.js, Node.js, and GraphQL.",
    points: ["React and Next.js", "TypeScript", "Node APIs"],
  },
  {
    icon: "fa-database",
    title: "AI-powered systems",
    summary:
      "I design and ship practical AI workflows that reduce manual work and speed up delivery.",
    points: ["RAG workflows", "Automation", "Operational AI"],
  },
  {
    icon: "fa-file-text-o",
    title: "Cloud architecture",
    summary:
      "I deploy and scale systems on AWS and GCP with reliable CI/CD and observability.",
    points: ["AWS and GCP", "Docker and Kubernetes", "CI/CD"],
  },
  {
    icon: "fa-code",
    title: "Backend engineering",
    summary:
      "I build low-latency APIs and event-driven services for high-volume production workloads.",
    points: ["GraphQL and REST", "SQS and Kafka", "PostgreSQL"],
  },
  {
    icon: "fa-random",
    title: "Front-end architecture",
    summary:
      "I create reusable UI systems and micro frontends that scale across product teams.",
    points: ["Micro frontends", "Design systems", "Performance"],
  },
  {
    icon: "fa-shield",
    title: "Team leadership",
    summary:
      "I lead engineering teams, mentor developers, and drive measurable outcomes from idea to production.",
    points: ["Technical leadership", "Mentorship", "Cross-functional delivery"],
  },
]

export const selectedWork = [
  {
    id: "predictive-budget-spend-system",
    title: "Predictive budget-spend system",
    problem:
      "Campaign and revenue signals were spread across systems, making it harder to spot spend opportunities quickly.",
    architecture:
      "Data modeling, budget-spend prediction, workflow surfacing, and operational reporting.",
    type: "Predictive operations workflow",
    metric: "40% revenue lift",
    outcomes: ["40% revenue increase", "fewer support tickets"],
    details: [
      "Connected operational and revenue signals to help teams act earlier on budget-spend patterns.",
      "Kept the outcome tied to business movement rather than a standalone AI demo.",
    ],
  },
  {
    id: "llm-contact-discovery",
    title: "LLM contact discovery",
    problem:
      "Sales teams needed a faster way to identify and enrich prospects from public web data.",
    architecture:
      "Full-stack scraping pipeline with LLM extraction, enrichment workflow, review states, and application UI.",
    type: "LLM-powered prospecting pipeline",
    metric: "Prospecting pipeline",
    outcomes: ["Prospect discovery and enrichment pipeline"],
    details: [
      "Built a workflow that found, extracted, and enriched contact data for sales prospecting.",
      "Kept the system scoped around repeatable discovery work instead of broad, unbounded automation.",
    ],
  },
  {
    id: "ai-instructor-validation",
    title: "AI instructor validation",
    problem:
      "Manual instructor validation and access checks created delays and repetitive operational work.",
    architecture:
      "Search workflow, webhook integration, validation logic, access control, and operational handoff.",
    type: "Real-time validation and access control",
    metric: "85% time savings",
    outcomes: ["85% time savings", "approximately 5,000 hours per year saved"],
    details: [
      "Built real-time search and webhook automation for validation decisions.",
      "Reduced manual validation work while keeping access control decisions explicit.",
    ],
  },
  {
    id: "ai-office-hours-automation",
    title: "AI office-hours automation",
    problem:
      "Office-hours workflows depended on repetitive document review and manual Salesforce updates.",
    architecture:
      "OCR processing, API orchestration, Salesforce integration, validation steps, and operational reporting.",
    type: "OCR and API workflow automation",
    metric: "$500K+ gains",
    outcomes: ["$500K+ in annual efficiency gains"],
    details: [
      "Built an OCR and API workflow that moved information into Salesforce.",
      "Focused automation on the repeated operational steps that created the largest time drain.",
    ],
  },
  {
    id: "production-document-chat",
    title: "Production document chat",
    problem:
      "Users needed a reliable way to ask questions across data and documents in a production environment.",
    architecture:
      "Document chat application, data access layer, EC2 infrastructure ownership, deployment, and production support.",
    type: "AI chat platform for data and document access",
    metric: "$24K ARR",
    outcomes: ["$24K ARR"],
    details: [
      "Deployed an AI chat platform for document and data access.",
      "Owned the EC2 infrastructure required to keep the product running in production.",
    ],
  },
  {
    id: "ai-rag-campaign-workflow",
    title: "AI/RAG campaign workflow",
    problem:
      "Campaign build work was slowed by repeated research, scattered context, and handoffs.",
    type: "RAG and workflow acceleration",
    architecture:
      "Retrieval workflows, campaign context, application integration, and human review loops.",
    metric: "~15% faster builds",
    outcomes: [
      "approximately 15% reduction in campaign build time",
      "approximately 15% churn reduction",
    ],
    details: [
      "Used retrieval and workflow design to shorten campaign build cycles.",
      "Kept campaign context available where operators were already doing the work.",
    ],
  },
  {
    id: "node-graphql-api-modernization",
    title: "Node and GraphQL API modernization",
    problem:
      "Production APIs needed to handle product demand with lower latency and more predictable behavior.",
    type: "Backend performance engineering",
    architecture:
      "Node services, GraphQL APIs, performance tuning, query optimization, and production monitoring.",
    metric: "up to 90% faster APIs",
    outcomes: ["up to 90% API performance improvement"],
    details: [
      "Improved the backend systems that product and AI-facing workflows depended on.",
      "Focused the work on measurable response-time improvements and operational reliability.",
    ],
  },
  {
    id: "ci-cd-infrastructure-acceleration",
    title: "CI/CD infrastructure acceleration",
    problem:
      "The engineering workflow was slowed by long test, build, and deploy cycles.",
    type: "Infrastructure and delivery automation",
    architecture:
      "CI/CD pipeline optimization, infrastructure automation, build tuning, and release workflow cleanup.",
    metric: "40% faster CI/CD",
    outcomes: ["40% reduction in test-build-deploy time"],
    details: [
      "Reduced delivery friction so production work could move faster with less waiting.",
      "Kept the improvement tied to the software delivery system rather than a single feature.",
    ],
  },
]

export const experienceHistory = [
  {
    title: "Software Engineer (Node/React/GraphQL)",
    company: "MNTN",
    period: "Jul 2021 - Present",
    summary:
      "Integrating user-facing elements with server-side logic while building reusable, testable, low-latency, and secure applications.",
    bullets: [
      "Designing and implementing high-availability, performant backend and frontend systems.",
      "Collaborating with Product Designers, Product Managers, and Engineers to ship production features.",
      "Building efficient Node and GraphQL services that support React product surfaces.",
    ],
  },
  {
    title: "Software Engineer (Node/Vue/REST)",
    company: "Liquidity Services",
    period: "Apr 2019 - Jul 2021",
    summary:
    "Built internal software solutions for reverse supply-chain operations handling millions of records.",
    bullets: [
      "Created automated inventory data-collection tooling, improving warehouse efficiency by about 50%.",
      "Bootstrapped integration testing for REST and GraphQL endpoints, raising coverage from 0% to 70%+.",
      "Implemented tools and workflows used by hundreds of enterprise users to reduce repetitive support tasks.",
    ],
  },
  {
    title: "Lead Software Engineering Curriculum Writer",
    company: "Multiverse",
    period: "Dec 2021 - Present",
    summary:
      "Created intensive admissions assessments and wrote technical SWE apprenticeship content for enterprise programs.",
    bullets: [
      "Developed automated testing challenges to evaluate candidate readiness.",
      "Led curriculum writers, reviewed lessons, and added advanced topics like Docker, AWS, and React.",
      "Supported program quality and consistency across cohorts and partner companies.",
    ],
  },
  {
    title: "Lead Software Engineering Instructor",
    company: "Fullstack Academy",
    period: "Apr 2019 - Nov 2021",
    summary:
      "Led remote software engineering cohorts as part of Cal Poly's Extended Education Program.",
    bullets: [
      "Instructed CSS/HTML, DOM, OOP, React, Node, REST, Express, and PostgreSQL.",
      "Delivered lectures on complex CS concepts and performed live coding demos multiple times per week.",
      "Developed curriculum and mentored students toward professional software engineering outcomes.",
    ],
  },
  {
    title: "Network Admin, Assistant Manager",
    company: "K.Jons Diamonds and Gems",
    period: "Feb 2010 - Oct 2018",
    summary:
      "Managed business technology, network systems, and e-commerce operations for a multi-million-dollar retail business.",
    bullets: [
      "Designed and managed a major e-commerce version with 1,000+ items and about $800K inventory.",
      "Oversaw migration from local database workflows to API-driven third-party updates.",
      "Supported a network of workstations and daily operations across a small business team.",
    ],
  },
  {
    title: "Web Developer",
    company: "K.Jons Diamonds and Gems",
    period: "Feb 2008 - Feb 2010",
    summary:
      "Transitioned the company website from static HTML to a dynamic WordPress platform.",
    bullets: [
      "Implemented blog support, automated backups, and scheduled deployment workflows.",
      "Improved website traffic by roughly 100% over two years and achieved strong SERP positioning.",
      "Managed a $50K marketing budget and created digital and print campaigns.",
    ],
  },
  {
    title: "Web Developer",
    company: "Preston's Creations",
    period: "Sep 2008 - Jul 2011",
    summary:
      "Delivered end-to-end client website builds from intake and wireframes through deployment.",
    bullets: [
      "Designed in Photoshop and hand-coded HTML/CSS site implementations.",
      "Secured domains, hosting, and production deployment via FTP.",
      "Tracked analytics and reported traffic performance to clients.",
    ],
  },
]

export const processSteps = [
  {
    title: "Understand the business goal",
    detail:
      "Align on outcomes, constraints, users, and what success looks like before writing code.",
  },
  {
    title: "Ship the smallest useful version",
    detail:
      "Build an end-to-end implementation quickly, then iterate with real usage and feedback.",
  },
  {
    title: "Scale with reliability",
    detail:
      "Harden performance, testing, observability, and deployment so the system can grow safely.",
  },
]

export const founderPrinciples = [
  {
    title: "Product-minded engineering",
    detail:
      "I focus on solutions that improve real workflows, not demos that look good but do little.",
  },
  {
    title: "End-to-end ownership",
    detail:
      "From architecture to deployment, I stay accountable for the outcome and handoff quality.",
  },
  {
    title: "Clear communication",
    detail:
      "I explain tradeoffs in plain language and keep scope practical so teams can move confidently.",
  },
]

export const founder = {
  name: "Preston Wallace",
  role: "Full-Stack AI Software Engineer",
  headline: "Hi, I'm Preston Wallace.",
  image: "/images/headshot.jpg",
  summary:
    "I am a startup-tested engineer focused on building scalable SaaS and AI systems that simplify complex workflows.",
  paragraphs: [
    "I currently work at MNTN where I build production systems with React, TypeScript, Node.js, and GraphQL.",
    "My work spans micro frontends, event-driven services, AI workflows, and cloud infrastructure with measurable business impact.",
    "Outside product engineering, I have led technical instruction and curriculum writing for software engineering programs.",
  ],
}

export const testimonials = [
  {
    name: "Jean Leconte II",
    detail: "Generative AI Engineer, AWS",
    image: "/images/testimonials/jean-leconte-ii.jpeg",
    socialUrl: "https://www.linkedin.com/in/jean-leconte-ii/",
    quote:
      "I've learned a ton from Preston and recommend if anyone reading this has the opportunity to work with him in any capacity they should take it!",
  },
  {
    name: "Bienvenido Rodriguez",
    detail: "AI Platform, Coinbase",
    image: "/images/testimonials/b17z.jpeg",
    socialUrl: "https://www.linkedin.com/in/b17z/",
    quote:
      "Preston is a gifted Software Engineer and a thought leader in technical education, training, and communication.",
  },
  {
    name: "Yahya Hafez",
    detail: "Senior Software Engineer",
    image: "/images/testimonials/yahya-hafez.jpeg",
    socialUrl: "https://www.linkedin.com/in/yahya-hafez/",
    quote:
      "Preston's impressive experience and skill as a developer was consistently highlighted through the deep knowledge of web development he shared.",
  },
  {
    name: "Tiffany Heath",
    detail: "Business Development Manager",
    image: "/images/testimonials/tiffany-heath.png",
    socialUrl: "https://www.linkedin.com/in/tiffaniheath/",
    quote:
      "Preston built our organization's website completely from scratch. Whenever revisions were needed — and there were many — he responded quickly and was always incredibly helpful. He was happy to jump on Zoom calls to walk through options or help troubleshoot issues. He also took the time to patiently explain the backend functions in a way that was easy for a non-technical person to understand.",
  },
  {
    name: "Remy Sabiani",
    detail: "Founder, WinePulse",
    image: "/images/testimonials/remy-sabiani.png",
    socialUrl: "https://www.linkedin.com/in/remy-sabiani/",
    quote:
      "Preston was instrumental in helping us build ChatDTC, our custom-tailored AI chat solution. He quickly understood our product and business needs, brought strong technical execution, and helped us move fast under tight deadlines.",
  },
]

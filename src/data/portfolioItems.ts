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
  techStack: string[];
  demoUrl: string;
  demoEmbedUrl: string;
  context: string;
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
  },
  {
    isPlaceholder: true,
    slug: 'next-project',
    title: 'Next Portfolio Item',
    eyebrow: 'Coming soon',
    summary: 'This space is reserved for the next portfolio case study.',
    challenge: [],
    approach: [],
    results: [],
    screenshots: [],
    techStack: [],
    demoUrl: '',
    demoEmbedUrl: '',
    context: '',
  },
];

export const getPortfolioItem = (slug: string) =>
  portfolioItems.find((item) => item.slug === slug);

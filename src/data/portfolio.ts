export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  githubUrl: string;
  theme: "editorial-light" | "trading-dark";
  tags: string[];
  metrics: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  engineeringHighlights: {
    title: string;
    details: string;
  }[];
  architectureSteps: {
    step: string;
    title: string;
    tech: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  organization: string;
  program: string;
  role: string;
  location: string;
  summary: string;
  achievements: {
    metric?: string;
    text: string;
  }[];
  technologies: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  context: string;
  category: "Algorithms" | "AI & ML" | "Systems Latency" | "Web Performance";
}

export interface SkillCategory {
  title: string;
  discipline: string;
  description: string;
  skills: {
    name: string;
    focus?: string;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Lokender Rao Maddila",
    shortName: "Lokender Rao",
    initials: "LR",
    title: "Software Engineer",
    currentStatus: "CS Undergraduate @ NIT Silchar · Available for 2027 Roles",
    location: "Silchar, Assam, India",
    email: "lokender_ug_23@cse.nits.ac.in",
    phone: "+91-7386622677",
    resumeUrl: "/Lokender_Rao_Maddila_Resume.pdf",
    githubUrl: "https://github.com/lokender11101",
    leetcodeUrl: "https://leetcode.com/lokender11101",
    // Configurable LinkedIn - omitted until valid custom URL is supplied
    linkedinUrl: null as string | null,
    education: {
      degree: "B.Tech, Computer Science and Engineering",
      institution: "National Institute of Technology, Silchar",
      period: "August 2023 – May 2027",
      location: "Assam, India",
      secondaryInstitutions: [
        {
          institution: "Achievers Junior College",
          credential: "Higher Secondary Certificate",
          period: "June 2020 – May 2022",
          location: "Visakhapatnam, India",
        },
        {
          institution: "Jawahar Navodaya Vidyalaya",
          credential: "Secondary School Certificate",
          period: "April 2019 – March 2020",
          location: "Srikakulam, India",
        },
      ],
    },
    positioning: [
      "AI agents & LLM-powered applications",
      "Backend engineering & distributed systems",
      "Semantic search, retrieval, & ranking",
      "High-performance algorithms & systems",
      "Real-time architectures & data-intensive applications",
    ],
    hero: {
      headline: "I build the systems behind intelligent products.",
      subhead:
        "I'm Lokender Rao Maddila, a computer science undergraduate at NIT Silchar working across AI engineering, backend infrastructure, and performance-driven software systems.",
      supporting:
        "From intelligent retrieval pipelines to real-time matching engines — I enjoy building products where engineering depth meets practical impact.",
      badge: "NIT Silchar · Computer Science · 2027",
      focusTags: ["AI Systems", "Backend Engineering", "Systems Design"],
    },
    about: {
      headline: "A little about how I think.",
      paragraphs: [
        "I'm interested in the engineering decisions that turn an idea into a reliable product.",
        "I enjoy working on problems involving algorithms, retrieval systems, backend architecture, and real-time data processing.",
        "Whether it's building an AI agent that reasons over information or designing a low-latency matching engine, I find the most interesting work at the intersection of product thinking and engineering fundamentals.",
      ],
      interests: [
        "AI agents & semantic search",
        "Retrieval and ranking systems",
        "LLM evaluation & validation",
        "High-ownership backend engineering",
      ],
    },
  },

  projects: [
    {
      id: "nextstep",
      number: "01",
      title: "NextStep",
      subtitle: "AI Career Agent & Semantic Matching Platform",
      tagline:
        "An AI-powered career intelligence platform that helps users understand skill gaps, discover relevant career opportunities, and receive explainable, context-aware recommendations.",
      description:
        "Engineered an end-to-end career intelligence engine combining strict LLM tool calling, hybrid vector/keyword retrieval, and real-time Server-Sent Events to deliver transparent career navigation with under 3-second response latency.",
      githubUrl: "https://github.com/lokender11101/NextStep",
      theme: "editorial-light",
      tags: [
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "LangChain",
        "Gemini LLM",
        "Pinecone",
        "Hybrid RAG",
        "Semantic Search",
        "Server-Sent Events",
      ],
      metrics: [
        {
          value: "<3s",
          label: "Matching Latency",
          sublabel: "End-to-end career matching response time",
        },
        {
          value: "45%",
          label: "Page Load Reduction",
          sublabel: "Achieved via SSR and optimized assets",
        },
        {
          value: "60%",
          label: "Friction Reduction",
          sublabel: "Streamlined structured onboarding flow",
        },
      ],
      engineeringHighlights: [
        {
          title: "LLM Agent & Structured Reasoning",
          details:
            "Developed an LLM-powered career agent using LangChain and Gemini LLMs with prompt engineering, tool usage, and structured outputs for resume parsing, skill-gap reasoning, and explainable career matches in under 3 seconds.",
        },
        {
          title: "Hybrid Retrieval Architecture",
          details:
            "Engineered a hybrid retrieval architecture combining Pinecone vector embeddings with BM25 keyword retrieval and reciprocal rank fusion, delivering personalized, context-aware recommendations while suppressing hallucinations.",
        },
        {
          title: "Output Validation & Regression Testing",
          details:
            "Implemented systematic LLM output validation, JSON schema enforcement, model evaluations, and automated regression testing suites to measure response relevance and harden edge cases against drift.",
        },
        {
          title: "Resilient SSE Streaming",
          details:
            "Engineered stateful real-time conversational streaming using Server-Sent Events (SSE) with context retention, client-side cancellation, and reconnect handling for seamless interactive user sessions.",
        },
        {
          title: "Full-Stack Production Infrastructure",
          details:
            "Shipped the production full-stack architecture on Next.js, Express.js, PostgreSQL, and Redis caching with automated CI/CD, JWT/Google OAuth authentication, and server-side rendering.",
        },
      ],
      architectureSteps: [
        {
          step: "01",
          title: "Resume Ingestion & Parsing",
          tech: "Next.js · PDF Extraction",
          description: "Raw resume ingestion with multi-format parsing into tokenized text chunks.",
        },
        {
          step: "02",
          title: "Structured Skill Extraction",
          tech: "Gemini LLM · JSON Schema",
          description: "Deterministic schema validation isolating competencies, tenure, and verified tools.",
        },
        {
          step: "03",
          title: "Hybrid Retrieval Pipeline",
          tech: "Pinecone + BM25 Keyword Search",
          description: "Dual-stream query execution merging dense semantic vectors with sparse exact keywords.",
        },
        {
          step: "04",
          title: "Reciprocal Rank Fusion",
          tech: "Ranking Algorithm",
          description: "Harmonizes keyword precision and vector relevance to score candidates objectively.",
        },
        {
          step: "05",
          title: "Agent Reasoning & Skill Gap",
          tech: "LangChain · Tool Orchestration",
          description: "Generates clear, explainable match rationale and identifies actionable learning paths.",
        },
        {
          step: "06",
          title: "Stateful SSE Stream Delivery",
          tech: "Server-Sent Events · Redis State",
          description: "Streams tokens progressively with sub-3s TTFT, cancellation, and auto-reconnect.",
        },
      ],
    },
    {
      id: "tradealpha",
      number: "02",
      title: "TradeAlpha",
      subtitle: "High-Throughput Backend & Async Matching Engine",
      tagline:
        "A backend-focused trading platform built around low-latency order matching, asynchronous processing, real-time data delivery, and transactional financial consistency.",
      description:
        "Architected an event-driven exchange backend that decouples incoming HTTP requests from the in-memory order book matching engine, processing high-volume order flows through BullMQ with an idempotent double-entry ledger.",
      githubUrl: "https://github.com/lokender11101/TradeAlpha",
      theme: "trading-dark",
      tags: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "BullMQ",
        "WebSockets",
        "Docker",
        "OpenTelemetry",
        "Prometheus",
        "Jaeger",
      ],
      metrics: [
        {
          value: "60%",
          label: "Latency Reduction",
          sublabel: "Optimized in-memory order matching algorithms",
        },
        {
          value: "<200ms",
          label: "WebSocket Feed",
          sublabel: "Sub-200ms market data broadcast to clients",
        },
        {
          value: "100%",
          label: "Transactional Consistency",
          sublabel: "Idempotent double-entry PostgreSQL ledger",
        },
      ],
      engineeringHighlights: [
        {
          title: "Decoupled Architecture & API Gateway",
          details:
            "Designed a scalable backend system separating API gateways, order matching, asynchronous background workers, and real-time feed pipelines for high reliability under concurrent load.",
        },
        {
          title: "Low-Latency In-Memory Matching Engine",
          details:
            "Implemented an in-memory order book and matching engine supporting MARKET, LIMIT, STOP, and STOP LIMIT orders, optimizing core data structures and matching logic to reduce execution latency by 60%.",
        },
        {
          title: "Asynchronous BullMQ & Outbox Pipeline",
          details:
            "Built BullMQ and transactional Outbox-based background pipelines for high-volume event ingestion, webhooks, and scheduled jobs, decoupling heavy processing from user-facing APIs.",
        },
        {
          title: "Real-Time WebSocket Feed & Idempotent Ledger",
          details:
            "Engineered WebSocket APIs delivering sub-200ms market updates and designed an idempotent double-entry PostgreSQL ledger guaranteeing strict SQL transactional consistency across concurrent executions.",
        },
        {
          title: "Containerization, Security & Observability",
          details:
            "Shipped containerized services using Docker, enforced API-key/HMAC authentication and rate limiting, and implemented full production observability via OpenTelemetry, Prometheus, and Jaeger.",
        },
      ],
      architectureSteps: [
        {
          step: "01",
          title: "API Gateway & Security",
          tech: "HMAC Auth · Token Bucket Limiter",
          description: "Validates signatures, authenticates callers, and controls inbound order rate.",
        },
        {
          step: "02",
          title: "In-Memory Order Book",
          tech: "Priority Heaps · Binary Trees",
          description: "Maintains price-time priority levels for bids and asks with O(log N) operations.",
        },
        {
          step: "03",
          title: "Matching Engine Core",
          tech: "Market · Limit · Stop Orders",
          description: "Executes atomic trade matches and resolves partial fills with deterministic latency.",
        },
        {
          step: "04",
          title: "BullMQ / Outbox Pipeline",
          tech: "Redis Cluster · Reliable Queues",
          description: "Dispatches matched trade events asynchronously without blocking execution thread.",
        },
        {
          step: "05",
          title: "Double-Entry SQL Ledger",
          tech: "PostgreSQL · ACID Transactions",
          description: "Enforces strict financial idempotency and balance constraints across accounts.",
        },
        {
          step: "06",
          title: "Real-Time WebSocket Feed",
          tech: "Pub/Sub Broadcast · <200ms",
          description: "Broadcasts updated depth charts, trades, and ticker prices to subscribed clients.",
        },
      ],
    },
  ] as Project[],

  experience: [
    {
      period: "May 2026 – July 2026",
      organization: "National Institute of Technology, Silchar",
      program: "Satyendra Nath Bose Summer Internship",
      role: "Research Intern — MediOptima (Smart Healthcare Solution)",
      location: "Silchar, India",
      summary:
        "Conducted systems and machine learning research on MediOptima, an intelligent healthcare fulfillment platform, architecting demand forecasting models, routing optimization algorithms, and transactional backend services.",
      achievements: [
        {
          metric: "88% Accuracy",
          text: "Trained and deployed predictive Python Machine Learning models into production backend pipelines, iterating on feature quality and evaluation checks to achieve 88% accuracy in operational demand forecasting.",
        },
        {
          metric: "25% Efficiency",
          text: "Engineered high-performance ranking and routing optimization algorithms in C++ from first principles to resolve complex multi-variable constraints and edge cases, improving order fulfillment efficiency by 25%.",
        },
        {
          metric: "Production APIs",
          text: "Owned end-to-end backend services and PostgreSQL schemas using Node.js, React.js, and SQL, building clean modular APIs that shipped reliably to end users.",
        },
      ],
      technologies: ["C++", "Python", "Machine Learning", "Node.js", "React.js", "PostgreSQL", "SQL"],
    },
  ] as ExperienceItem[],

  metrics: [
    {
      value: "800+",
      label: "DSA Problems Solved",
      context: "Solved across LeetCode and Take U Forward in C++, honing first-principles systems thinking and algorithm optimization.",
      category: "Algorithms",
    },
    {
      value: "88%",
      label: "Demand Forecasting Accuracy",
      context: "Achieved by training and deploying predictive Python ML models into production backend pipelines at MediOptima.",
      category: "AI & ML",
    },
    {
      value: "25%",
      label: "Fulfillment Efficiency Improvement",
      context: "Engineered high-performance C++ ranking and routing algorithms solving multi-variable constraints.",
      category: "Algorithms",
    },
    {
      value: "45%",
      label: "Reduction in Page-Load Times",
      context: "Achieved on NextStep through server-side rendering, asset optimization, and modular architecture.",
      category: "Web Performance",
    },
    {
      value: "60%",
      label: "Reduction in Execution Latency",
      context: "Achieved in TradeAlpha by optimizing in-memory order book data structures and ranking/matching logic.",
      category: "Systems Latency",
    },
    {
      value: "<200ms",
      label: "Real-Time WebSocket Updates",
      context: "Engineered low-latency market data delivery pipeline broadcasting order book updates to subscribers.",
      category: "Systems Latency",
    },
    {
      value: "60%",
      label: "Reduction in Onboarding Friction",
      context: "Streamlined resume ingestion, automatic skill gap reasoning, and structured feedback in NextStep.",
      category: "Web Performance",
    },
  ] as MetricItem[],

  skills: [
    {
      title: "AI, LLMs & Search",
      discipline: "Intelligent Systems",
      description: "Building reliable, evaluation-backed retrieval engines and agent workflows that reason over data without hallucinating.",
      skills: [
        { name: "LLM Agents & Tool Use", focus: "LangChain · Structured Prompts" },
        { name: "Hybrid RAG Architectures", focus: "Vector + Sparse Keyword" },
        { name: "Semantic Search & Ranking", focus: "Pinecone · Reciprocal Rank Fusion" },
        { name: "LLM Evaluations & Testing", focus: "JSON Schema Enforcement · Regression" },
        { name: "Machine Learning Pipelines", focus: "Predictive Modeling · Demand Forecasting" },
      ],
    },
    {
      title: "Programming Languages",
      discipline: "Core Fundamentals",
      description: "Deep first-principles understanding of data structures, memory layout, type safety, and systems programming.",
      skills: [
        { name: "C++", focus: "High-Performance Algorithms · DSA (800+ solved)" },
        { name: "Python", focus: "ML Pipelines · Data Modeling · Rapid Tooling" },
        { name: "SQL", focus: "Complex Queries · Schema Design · ACID Guarantees" },
        { name: "TypeScript / JavaScript", focus: "Type-Safe Full-Stack Systems · Async/Event Loops" },
        { name: "Java & C", focus: "Systems Concepts · Memory & OOP Foundations" },
      ],
    },
    {
      title: "Backend & Data",
      discipline: "Distributed Infrastructure",
      description: "Designing low-latency, transactional services capable of handling concurrent reads, writes, and real-time feeds.",
      skills: [
        { name: "PostgreSQL & Schema Design", focus: "Double-Entry Ledgers · Query Optimization" },
        { name: "Redis & In-Memory Stores", focus: "Caching · Distributed State · Rate Limiting" },
        { name: "Node.js & Express.js", focus: "Event-Driven Services · Modular APIs" },
        { name: "WebSockets & SSE", focus: "Sub-200ms Feeds · Resilient Streaming" },
        { name: "BullMQ & Message Queues", focus: "Outbox Pattern · Async Workers" },
      ],
    },
    {
      title: "Infrastructure & Web",
      discipline: "Reliability & Production",
      description: "Ensuring reproducibility, containerized deployments, observability, and clean web interfaces.",
      skills: [
        { name: "Docker & Containerization", focus: "Multi-stage Builds · Service Isolation" },
        { name: "Observability Stack", focus: "OpenTelemetry · Prometheus · Jaeger" },
        { name: "Cloud & CI/CD", focus: "Vercel · Railway · AWS · GitHub Actions" },
        { name: "Next.js & React.js", focus: "Server Components · Modern Frontend Architecture" },
        { name: "Linux & Git", focus: "CLI Workflows · Version Control · Production Tooling" },
      ],
    },
  ] as SkillCategory[],

  achievements: [
    {
      metric: "800+ Problems",
      title: "Data Structures & Algorithms in C++",
      organization: "LeetCode & Take U Forward",
      description:
        "Solved over 800 complex algorithmic problems focusing on graph theory, dynamic programming, trees, heaps, and concurrency — demonstrating rigorous first-principles problem-solving and rapid debugging under latency constraints.",
      highlight: true,
    },
    {
      metric: "AIR 16,542",
      title: "Joint Entrance Examination (JEE)",
      organization: "National Testing Agency, India",
      description:
        "Secured All India Rank 16,542 among over 1.1 million candidates in India's most competitive national engineering entrance examination.",
      highlight: false,
    },
    {
      metric: "Rank 5,260",
      title: "Andhra Pradesh EAPCET",
      organization: "State Engineering Entrance",
      description:
        "Ranked 5,260th among hundreds of thousands of state aspirants in the Engineering, Agriculture & Pharmacy Common Entrance Test.",
      highlight: false,
    },
    {
      metric: "High Ownership",
      title: "Independent Systems Engineering",
      organization: "Continuous Self-Directed Craft",
      description:
        "Proven track record of architecting, deploying, and maintaining production-grade applications end-to-end, learning new frameworks and distributed architectures directly from canonical documentation.",
      highlight: false,
    },
  ],
};

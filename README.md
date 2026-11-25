# Lokender Rao Maddila — Engineering Portfolio

A bespoke, editorial-inspired software engineering portfolio designed for **Lokender Rao Maddila**, undergraduate in Computer Science and Engineering at the National Institute of Technology, Silchar (2023–2027).

Positioned across **AI Systems, LLM Agent Architectures, Low-Latency Backend Systems, and Semantic Retrieval & Ranking**.

---

## Creative Direction & Design System

- **Palette**:
  - Background: Warm Ivory / Off-White (`#F5F3EE`)
  - Primary Text: Deep Ink (`#171717`)
  - Secondary Text: Muted Graphite (`#737373`)
  - Accent: Restrained Burnt Orange (`#C65A3A`)
  - Hairline Borders: Subtle Warm Grey (`#E5E2DC`)
  - Contrasting Dark Canvas: Trading System Obsidian (`#0D0F13`)
- **Typography**:
  - Editorial Headings: `Newsreader` (Google Serif font with italic styles)
  - Body Copy: `Geist Sans`
  - Technical Data & Latencies: `Geist Mono`
- **Architectural Diagrams**:
  - **Hero System Node Graph**: Interactive SVG/CSS distributed topology showing Ingress, In-Memory Matching, Hybrid RAG, Redis state cache, BullMQ Outbox, and PostgreSQL WAL.
  - **NextStep Case Study**: Visual pipeline illustrating `Resume Input → Structured Extraction → Hybrid Retrieval (Pinecone + BM25) → Reciprocal Rank Fusion → Skill Gap Reasoning → Stateful SSE Delivery (<3s TTFT)`.
  - **TradeAlpha Case Study**: Dark trading terminal featuring a live simulated Level-2 Order Book (Bid/Ask ladders with depth bars), atomic matching executions, BullMQ Outbox queue status, and double-entry PostgreSQL ledger balance checks with `<200ms` WebSocket updates.

---

## Featured Case Studies

### 1. NextStep — AI Career Agent & Semantic Matching Platform
- **Stack**: Next.js, Express.js, PostgreSQL, Redis, LangChain, Gemini LLM, Pinecone, Hybrid RAG, Semantic Search, Server-Sent Events.
- **Key Metrics**: `<3s` matching response latency, `45%` reduction in page-load times, `60%` reduction in onboarding friction.
- **Repository**: [github.com/lokender11101/NextStep](https://github.com/lokender11101/NextStep)

### 2. TradeAlpha — High-Throughput Backend & Async Matching Engine
- **Stack**: Node.js, TypeScript, PostgreSQL, Redis, BullMQ, WebSockets, Docker, OpenTelemetry, Prometheus, Jaeger.
- **Key Metrics**: `60%` reduction in execution latency, `<200ms` real-time WebSocket market updates, idempotent double-entry ledger.
- **Repository**: [github.com/lokender11101/TradeAlpha](https://github.com/lokender11101/TradeAlpha)

---

## Verified Professional Metrics

- **800+** Data Structures & Algorithms problems solved across LeetCode and Take U Forward in C++.
- **88%** Operational demand forecasting accuracy (MediOptima ML research internship at NIT Silchar).
- **25%** Improvement in order fulfillment efficiency (C++ routing and ranking algorithms).
- **45%** Reduction in page-load times via Next.js SSR and asset optimization.
- **60%** Reduction in order execution latency via in-memory matching logic.
- **<200ms** Real-time WebSocket market data updates.
- **60%** Reduction in user onboarding friction.

---

## Local Development & Production Build

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run type check and linter
npm run lint
npx tsc --noEmit

# Production build
npm run build

# Start production server
npm run start
```

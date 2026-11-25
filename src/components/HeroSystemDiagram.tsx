"use client";

import React, { useState } from "react";

interface SystemNode {
  id: string;
  name: string;
  role: string;
  layer: string;
  tech: string;
  metric: string;
  status: "active" | "standby";
  connections: string[];
}

const NODES: Record<string, SystemNode> = {
  gateway: {
    id: "gateway",
    name: "API Ingress & Auth",
    role: "Edge routing, HMAC verification & rate-limiting",
    layer: "L7 Gateway",
    tech: "Next.js · Express · SSE/WS",
    metric: "p99 < 12ms",
    status: "active",
    connections: ["matching", "rag", "cache"],
  },
  matching: {
    id: "matching",
    name: "In-Memory Matching Engine",
    role: "Price-time priority matching with atomic execution",
    layer: "Core Engine",
    tech: "C++ / TypeScript · Priority Heaps",
    metric: "Latency -60%",
    status: "active",
    connections: ["queue", "ledger"],
  },
  rag: {
    id: "rag",
    name: "Hybrid Retrieval Pipeline",
    role: "Dense vector embeddings combined with sparse BM25",
    layer: "Semantic Engine",
    tech: "Pinecone · LangChain · Gemini",
    metric: "TTFT < 3s",
    status: "active",
    connections: ["cache", "ledger"],
  },
  cache: {
    id: "cache",
    name: "In-Memory State & Cache",
    role: "Session states, token buckets & real-time pub/sub",
    layer: "Distributed Memory",
    tech: "Redis Cluster · In-Memory Store",
    metric: "Hit Rate 99.4%",
    status: "active",
    connections: ["gateway"],
  },
  queue: {
    id: "queue",
    name: "BullMQ Asynchronous Outbox",
    role: "Decoupled trade events, webhooks & worker jobs",
    layer: "Async Bus",
    tech: "BullMQ · Transactional Outbox",
    metric: "0 dropped jobs",
    status: "active",
    connections: ["ledger"],
  },
  ledger: {
    id: "ledger",
    name: "PostgreSQL Double-Entry Ledger",
    role: "ACID consistency, financial audit trail & WAL",
    layer: "Persistence",
    tech: "PostgreSQL · Relational SQL",
    metric: "Strict ACID",
    status: "active",
    connections: [],
  },
};

export default function HeroSystemDiagram() {
  const [selectedNode, setSelectedNode] = useState<string>("gateway");
  const [activeSignal, setActiveSignal] = useState<boolean>(true);

  const activeNodeData = NODES[selectedNode] || NODES["gateway"];

  return (
    <div className="relative w-full rounded-2xl border border-[#E5E2DC] bg-[#FAF8F5] p-5 sm:p-6 lg:p-7 shadow-[0_4px_24px_-6px_rgba(23,23,23,0.04)]">
      {/* Header bar / technical meta */}
      <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C65A3A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C65A3A]"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#737373]">
            SYS.TOPOLOGY // ARCHITECTURAL TOPOLOGY (ILLUSTRATIVE)
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#737373]">
          <span className="hidden sm:inline">STATE: HEALTHY</span>
          <span className="rounded bg-[#E5E2DC]/60 px-1.5 py-0.5 text-[#171717] font-medium">
            TICK: 0.2ms
          </span>
        </div>
      </div>

      {/* SVG Canvas & Node Topology */}
      <div className="relative aspect-[16/11] w-full select-none">
        <svg
          viewBox="0 0 640 440"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Subtle grid pattern */}
            <pattern id="editorial-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="#D6D1C7" opacity="0.6" />
            </pattern>

            {/* Linear gradients for signals */}
            <linearGradient id="signal-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C65A3A" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#C65A3A" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C65A3A" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Background grid */}
          <rect width="640" height="440" fill="url(#editorial-grid)" />

          {/* Connection Lines (Orthogonal & Clean) */}
          {/* Gateway (120, 100) -> Cache (120, 310) */}
          <path
            d="M 120 135 L 120 280"
            stroke="#D6D1C7"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            fill="none"
          />

          {/* Gateway (180, 100) -> Matching Engine (340, 100) */}
          <path
            d="M 180 100 L 280 100"
            stroke={selectedNode === "gateway" || selectedNode === "matching" ? "#C65A3A" : "#D6D1C7"}
            strokeWidth={selectedNode === "gateway" || selectedNode === "matching" ? "2" : "1.5"}
            fill="none"
          />

          {/* Gateway (180, 115) -> RAG (340, 220) */}
          <path
            d="M 180 115 L 240 115 L 240 220 L 280 220"
            stroke={selectedNode === "gateway" || selectedNode === "rag" ? "#C65A3A" : "#D6D1C7"}
            strokeWidth={selectedNode === "gateway" || selectedNode === "rag" ? "2" : "1.5"}
            fill="none"
          />

          {/* Matching (400, 100) -> BullMQ (520, 100) */}
          <path
            d="M 400 100 L 460 100"
            stroke={selectedNode === "matching" || selectedNode === "queue" ? "#C65A3A" : "#D6D1C7"}
            strokeWidth={selectedNode === "matching" || selectedNode === "queue" ? "2" : "1.5"}
            fill="none"
          />

          {/* BullMQ (520, 135) -> PostgreSQL (520, 300) */}
          <path
            d="M 520 135 L 520 270"
            stroke={selectedNode === "queue" || selectedNode === "ledger" ? "#C65A3A" : "#D6D1C7"}
            strokeWidth={selectedNode === "queue" || selectedNode === "ledger" ? "2" : "1.5"}
            strokeDasharray="4 4"
            fill="none"
          />

          {/* RAG (400, 220) -> PostgreSQL (460, 310) */}
          <path
            d="M 400 220 L 440 220 L 440 310 L 460 310"
            stroke={selectedNode === "rag" || selectedNode === "ledger" ? "#C65A3A" : "#D6D1C7"}
            strokeWidth="1.5"
            fill="none"
          />

          {/* Cache (180, 310) -> PostgreSQL (460, 310) */}
          <path
            d="M 180 310 L 460 310"
            stroke="#D6D1C7"
            strokeWidth="1.5"
            strokeDasharray="2 4"
            fill="none"
          />

          {/* Animated signal pulse along active path */}
          {activeSignal && (
            <circle r="3.5" fill="#C65A3A">
              <animateMotion
                path="M 180 100 L 280 100 M 400 100 L 460 100 M 520 135 L 520 270"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          {activeSignal && (
            <circle r="3" fill="#C65A3A" opacity="0.8">
              <animateMotion
                path="M 180 115 L 240 115 L 240 220 L 280 220"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          {/* Nodes (Clean architectural blocks) */}

          {/* Node 1: API Gateway (x: 60, y: 70, w: 120, h: 60) */}
          <g
            className="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => setSelectedNode("gateway")}
          >
            <rect
              x="60"
              y="70"
              width="120"
              height="60"
              rx="8"
              fill={selectedNode === "gateway" ? "#FFFFFF" : "#F5F3EE"}
              stroke={selectedNode === "gateway" ? "#C65A3A" : "#D6D1C7"}
              strokeWidth={selectedNode === "gateway" ? "2" : "1.2"}
            />
            <text x="72" y="92" fontFamily="var(--font-mono)" fontSize="9" fill="#737373">
              [INGRESS 01]
            </text>
            <text x="72" y="108" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="#171717">
              API Gateway
            </text>
            <text x="72" y="122" fontFamily="var(--font-mono)" fontSize="9" fill="#C65A3A">
              p99 &lt; 12ms
            </text>
          </g>

          {/* Node 2: Matching Engine (x: 280, y: 70, w: 120, h: 60) */}
          <g
            className="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => setSelectedNode("matching")}
          >
            <rect
              x="280"
              y="70"
              width="120"
              height="60"
              rx="8"
              fill={selectedNode === "matching" ? "#FFFFFF" : "#F5F3EE"}
              stroke={selectedNode === "matching" ? "#C65A3A" : "#D6D1C7"}
              strokeWidth={selectedNode === "matching" ? "2" : "1.2"}
            />
            <text x="292" y="92" fontFamily="var(--font-mono)" fontSize="9" fill="#737373">
              [ENGINE 02]
            </text>
            <text x="292" y="108" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="#171717">
              Order Matching
            </text>
            <text x="292" y="122" fontFamily="var(--font-mono)" fontSize="9" fill="#C65A3A">
              Latency -60%
            </text>
          </g>

          {/* Node 3: BullMQ Queue (x: 460, y: 70, w: 120, h: 60) */}
          <g
            className="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => setSelectedNode("queue")}
          >
            <rect
              x="460"
              y="70"
              width="120"
              height="60"
              rx="8"
              fill={selectedNode === "queue" ? "#FFFFFF" : "#F5F3EE"}
              stroke={selectedNode === "queue" ? "#C65A3A" : "#D6D1C7"}
              strokeWidth={selectedNode === "queue" ? "2" : "1.2"}
            />
            <text x="472" y="92" fontFamily="var(--font-mono)" fontSize="9" fill="#737373">
              [ASYNC BUS]
            </text>
            <text x="472" y="108" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="#171717">
              BullMQ Outbox
            </text>
            <text x="472" y="122" fontFamily="var(--font-mono)" fontSize="9" fill="#737373">
              Workers: 4x
            </text>
          </g>

          {/* Node 4: Semantic RAG (x: 280, y: 190, w: 120, h: 60) */}
          <g
            className="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => setSelectedNode("rag")}
          >
            <rect
              x="280"
              y="190"
              width="120"
              height="60"
              rx="8"
              fill={selectedNode === "rag" ? "#FFFFFF" : "#F5F3EE"}
              stroke={selectedNode === "rag" ? "#C65A3A" : "#D6D1C7"}
              strokeWidth={selectedNode === "rag" ? "2" : "1.2"}
            />
            <text x="292" y="212" fontFamily="var(--font-mono)" fontSize="9" fill="#737373">
              [RETRIEVAL 03]
            </text>
            <text x="292" y="228" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="#171717">
              Hybrid RAG
            </text>
            <text x="292" y="242" fontFamily="var(--font-mono)" fontSize="9" fill="#C65A3A">
              TTFT &lt; 3s
            </text>
          </g>

          {/* Node 5: Redis State & Cache (x: 60, y: 280, w: 120, h: 60) */}
          <g
            className="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => setSelectedNode("cache")}
          >
            <rect
              x="60"
              y="280"
              width="120"
              height="60"
              rx="8"
              fill={selectedNode === "cache" ? "#FFFFFF" : "#F5F3EE"}
              stroke={selectedNode === "cache" ? "#C65A3A" : "#D6D1C7"}
              strokeWidth={selectedNode === "cache" ? "2" : "1.2"}
            />
            <text x="72" y="302" fontFamily="var(--font-mono)" fontSize="9" fill="#737373">
              [MEMORY 04]
            </text>
            <text x="72" y="318" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="#171717">
              Redis State
            </text>
            <text x="72" y="332" fontFamily="var(--font-mono)" fontSize="9" fill="#737373">
              Hit: 99.4%
            </text>
          </g>

          {/* Node 6: PostgreSQL Double-Entry Ledger (x: 460, y: 280, w: 120, h: 60) */}
          <g
            className="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => setSelectedNode("ledger")}
          >
            <rect
              x="460"
              y="280"
              width="120"
              height="60"
              rx="8"
              fill={selectedNode === "ledger" ? "#FFFFFF" : "#F5F3EE"}
              stroke={selectedNode === "ledger" ? "#C65A3A" : "#D6D1C7"}
              strokeWidth={selectedNode === "ledger" ? "2" : "1.2"}
            />
            <text x="472" y="302" fontFamily="var(--font-mono)" fontSize="9" fill="#737373">
              [STORAGE 05]
            </text>
            <text x="472" y="318" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="#171717">
              PostgreSQL WAL
            </text>
            <text x="472" y="332" fontFamily="var(--font-mono)" fontSize="9" fill="#C65A3A">
              Strict ACID
            </text>
          </g>

          {/* Subtle axis coordinates */}
          <text x="24" y="24" fontFamily="var(--font-mono)" fontSize="8" fill="#A8A39B">
            [x:0 y:0]
          </text>
          <text x="590" y="426" fontFamily="var(--font-mono)" fontSize="8" fill="#A8A39B" textAnchor="end">
            [SYS::DISTRIBUTED]
          </text>
        </svg>
      </div>

      {/* Selected Node Details Bar */}
      <div className="mt-4 rounded-xl border border-[#E5E2DC] bg-[#FFFFFF] p-3.5 transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E2DC] pb-2.5 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#C65A3A] font-semibold">
              INSPECTING: {activeNodeData.layer}
            </span>
            <span className="text-xs text-[#737373]">·</span>
            <span className="text-xs font-semibold text-[#171717]">{activeNodeData.name}</span>
          </div>
          <div className="font-mono text-[11px] text-[#737373]">
            Target Metric: <strong className="text-[#C65A3A] font-medium">{activeNodeData.metric}</strong>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#525252]">
          <p className="line-clamp-1">{activeNodeData.role}</p>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#737373] shrink-0">
            <span>Stack:</span>
            <span className="rounded bg-[#FAF8F5] px-1.5 py-0.5 text-[#171717] font-medium border border-[#E5E2DC]">
              {activeNodeData.tech}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive prompt */}
      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#8E8E8E]">
        <span>Tap any node to trace architecture path</span>
        <button
          onClick={() => setActiveSignal(!activeSignal)}
          className="hover:text-[#171717] transition-colors"
        >
          {activeSignal ? "[Signals: Active]" : "[Signals: Paused]"}
        </button>
      </div>
    </div>
  );
}

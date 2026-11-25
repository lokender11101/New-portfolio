"use client";

import React, { useState } from "react";

interface PipelineStep {
  id: string;
  name: string;
  protocol: string;
  duration: string;
  detail: string;
  outputExample: string;
  tags: string[];
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "input",
    name: "01. Resume Ingestion & Parsing",
    protocol: "PDF / DOCX Stream Parser",
    duration: "~140ms",
    detail: "Tokenizes unstructured documents, strips noise, sanitizes raw text, and segments into chronological employment chunks.",
    outputExample: "{\n  status: 'SANITIZED',\n  tokens: 1840,\n  sections: ['work_history', 'skills', 'education']\n}",
    tags: ["Next.js SSR", "Buffer Stream", "Multer"],
  },
  {
    id: "extraction",
    name: "02. Structured Skill Extraction",
    protocol: "Gemini LLM · Strict JSON Schema",
    duration: "~420ms",
    detail: "Deterministic zero-shot prompt with strict JSON schema enforcement to isolate core proficiencies, tooling, and operational scale without hallucinated qualifications.",
    outputExample: "{\n  competencies: ['Distributed Systems', 'C++', 'PostgreSQL'],\n  experience_years: 3.2,\n  system_scale: 'High Throughput'\n}",
    tags: ["Gemini 1.5", "Zod Validation", "Schema Guard"],
  },
  {
    id: "retrieval",
    name: "03. Hybrid Retrieval Engine",
    protocol: "Pinecone Vector + BM25 Keyword Search",
    duration: "~180ms",
    detail: "Dual-stream query execution. Dense embeddings (768-dim) capture semantic conceptual intent while sparse BM25 preserves critical exact keyword matches.",
    outputExample: "{\n  dense_vector_matches: 42,\n  sparse_keyword_matches: 19,\n  cosine_threshold: 0.84\n}",
    tags: ["Pinecone Vector DB", "text-embedding-004", "BM25"],
  },
  {
    id: "ranking",
    name: "04. Reciprocal Rank Fusion (RRF)",
    protocol: "Score Normalization & Ranking",
    duration: "~45ms",
    detail: "Merges heterogeneous vector and keyword ranks using RRF (k=60), dampening outlier bias and promoting opportunities with both semantic and tooling relevance.",
    outputExample: "{\n  rrf_score = sum(1 / (60 + rank_i)),\n  top_candidates: 5,\n  confidence_p95: 0.942\n}",
    tags: ["RRF Algorithm", "Deterministic Scoring", "Cache Hits"],
  },
  {
    id: "reasoning",
    name: "05. Explainable Career Match",
    protocol: "LangChain Agent · Skill Gap Reasoning",
    duration: "~680ms",
    detail: "Synthesizes the specific reasons for each role match, explicitly flagging missing competencies and generating a step-by-step career navigation roadmap.",
    outputExample: "{\n  match_verdict: 'Strong Fit (91%)',\n  primary_strengths: ['Low-latency systems', 'SQL consistency'],\n  skill_gap: ['Kafka Event Streaming']\n}",
    tags: ["LangChain", "Tool Calling", "Context Retention"],
  },
  {
    id: "streaming",
    name: "06. Stateful SSE Delivery",
    protocol: "Server-Sent Events (SSE) Stream",
    duration: "Continuous",
    detail: "Streams chunks in real time directly to the browser over persistent HTTP with client-side cancellation tokens and auto-reconnect state buffers.",
    outputExample: "event: delta\ndata: {\"chunk\": \"Accelerating backend pipelines...\"}\nevent: end\ndata: [DONE]",
    tags: ["SSE", "Express.js", "Sub-3s Response"],
  },
];

export default function NextStepArchitecture() {
  const [activeStep, setActiveStep] = useState<string>("retrieval");
  const [viewMode, setViewMode] = useState<"flow" | "trace">("flow");

  const current = PIPELINE_STEPS.find((s) => s.id === activeStep) || PIPELINE_STEPS[2];

  return (
    <div className="rounded-2xl border border-[#E5E2DC] bg-[#FAF8F5] p-5 sm:p-7 lg:p-8 overflow-hidden">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E2DC] pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C65A3A] font-medium">
              SYSTEM ARCHITECTURE // SPECIFICATION
            </span>
            <span className="text-xs text-[#737373]">·</span>
            <span className="font-mono text-xs text-[#737373]">v2.4 Production Pipeline</span>
          </div>
          <h4 className="mt-1 font-serif text-xl sm:text-2xl font-medium text-[#171717]">
            Hybrid Retrieval &amp; Explainable Matching Pipeline
          </h4>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-[#E5E2DC] bg-[#F5F3EE] p-1 self-start sm:self-auto">
          <button
            onClick={() => setViewMode("flow")}
            className={`px-3 py-1 text-xs font-mono transition-all rounded ${
              viewMode === "flow"
                ? "bg-[#FFFFFF] text-[#171717] font-semibold shadow-xs"
                : "text-[#737373] hover:text-[#171717]"
            }`}
          >
            Pipeline Flow
          </button>
          <button
            onClick={() => setViewMode("trace")}
            className={`px-3 py-1 text-xs font-mono transition-all rounded ${
              viewMode === "trace"
                ? "bg-[#FFFFFF] text-[#171717] font-semibold shadow-xs"
                : "text-[#737373] hover:text-[#171717]"
            }`}
          >
            Payload Trace
          </button>
        </div>
      </div>

      {viewMode === "flow" ? (
        <div>
          {/* Visual Step-by-Step Pipeline Flow */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-6">
            {PIPELINE_STEPS.map((step) => {
              const isSelected = step.id === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`text-left p-3 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? "border-[#C65A3A] bg-[#FFFFFF] shadow-sm ring-1 ring-[#C65A3A]/20"
                      : "border-[#E5E2DC] bg-[#FFFFFF]/70 hover:border-[#D6D1C7] hover:bg-[#FFFFFF]"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px] mb-1.5">
                    <span className={isSelected ? "text-[#C65A3A] font-semibold" : "text-[#737373]"}>
                      {step.id.toUpperCase()}
                    </span>
                    <span className="text-[10px] text-[#8E8E8E]">{step.duration}</span>
                  </div>
                  <div className="font-sans text-xs font-medium text-[#171717] line-clamp-2">
                    {step.name.replace(/^\d+\.\s*/, "")}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep Dive Card */}
          <div className="rounded-xl border border-[#E5E2DC] bg-[#FFFFFF] p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-3 lg:max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#FAF8F5] text-[#C65A3A] border border-[#E5E2DC]">
                    {current.protocol}
                  </span>
                  <span className="font-mono text-xs text-[#737373]">Execution: {current.duration}</span>
                </div>

                <h5 className="font-serif text-lg font-medium text-[#171717]">
                  {current.name}
                </h5>

                <p className="text-sm text-[#525252] leading-relaxed">
                  {current.detail}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {current.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#FAF8F5] text-[#525252] border border-[#E5E2DC]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code/Data artifact preview */}
              <div className="w-full lg:w-80 rounded-lg bg-[#141820] p-4 text-xs font-mono text-[#D6D1C7] shadow-inner overflow-x-auto">
                <div className="flex items-center justify-between border-b border-[#262E3D] pb-2 mb-3 text-[10px] text-[#737373]">
                  <span>SCHEMA // VERIFIED_OUTPUT</span>
                  <span className="text-[#10B981]">OK 200</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-[#ECE8E1]">
                  {current.outputExample}
                </pre>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Trace Mode */
        <div className="rounded-xl border border-[#E5E2DC] bg-[#FFFFFF] p-5 sm:p-6">
          <div className="font-mono text-xs text-[#737373] mb-4">
            END-TO-END LATENCY BREAKDOWN (ILLUSTRATIVE P95 SAMPLE TRACE)
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="space-y-1">
              <div className="flex justify-between text-[#171717]">
                <span>Ingest &amp; Extract (Multer + Gemini 1.5)</span>
                <span>560ms (21%)</span>
              </div>
              <div className="h-2 w-full rounded bg-[#FAF8F5] overflow-hidden border border-[#E5E2DC]">
                <div className="h-full bg-[#D6D1C7]" style={{ width: "21%" }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[#171717]">
                <span>Hybrid Query (Pinecone Vector + BM25 Sparse)</span>
                <span>180ms (7%)</span>
              </div>
              <div className="h-2 w-full rounded bg-[#FAF8F5] overflow-hidden border border-[#E5E2DC]">
                <div className="h-full bg-[#C65A3A]" style={{ width: "7%" }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[#171717]">
                <span>Reciprocal Rank Fusion (RRF Algorithm)</span>
                <span>45ms (2%)</span>
              </div>
              <div className="h-2 w-full rounded bg-[#FAF8F5] overflow-hidden border border-[#E5E2DC]">
                <div className="h-full bg-[#A9472B]" style={{ width: "2%" }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[#171717]">
                <span>LLM Reasoning &amp; Skill Gap Explanations</span>
                <span>680ms (26%)</span>
              </div>
              <div className="h-2 w-full rounded bg-[#FAF8F5] overflow-hidden border border-[#E5E2DC]">
                <div className="h-full bg-[#C65A3A]" style={{ width: "26%" }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[#171717]">
                <span>SSE Token Stream (Time to First Token)</span>
                <span className="text-[#C65A3A] font-semibold">&lt; 3.0s total TTFT</span>
              </div>
              <div className="h-2 w-full rounded bg-[#FAF8F5] overflow-hidden border border-[#E5E2DC]">
                <div className="h-full bg-[#10B981]" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#E5E2DC] flex flex-wrap items-center justify-between gap-3 text-xs text-[#525252]">
            <span>Verification: Automated LLM regression tests check JSON schema compliance on every commit.</span>
            <span className="font-mono text-[#C65A3A] font-semibold">Zero Unchecked Schema Drift</span>
          </div>
        </div>
      )}

      {/* Footer architectural workflow summary */}
      <div className="mt-6 pt-4 border-t border-[#E5E2DC] flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#737373]">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10B981]"></span>
          <span>SSE Channel: Connected &amp; Keep-Alive</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Vector Space: Pinecone (768-dim)</span>
          <span>·</span>
          <span>Cache: Redis (TTL: 3600s)</span>
        </div>
      </div>
    </div>
  );
}

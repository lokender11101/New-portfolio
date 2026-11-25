"use client";

import React, { useState } from "react";

interface OrderLevel {
  price: number;
  size: number;
  total: number;
  depthPercent: number;
}

const INITIAL_ASKS: OrderLevel[] = [
  { price: 184.60, size: 240, total: 980, depthPercent: 88 },
  { price: 184.55, size: 180, total: 740, depthPercent: 66 },
  { price: 184.50, size: 310, total: 560, depthPercent: 50 },
  { price: 184.45, size: 250, total: 250, depthPercent: 22 },
];

const INITIAL_BIDS: OrderLevel[] = [
  { price: 184.40, size: 290, total: 290, depthPercent: 26 },
  { price: 184.35, size: 340, total: 630, depthPercent: 56 },
  { price: 184.30, size: 210, total: 840, depthPercent: 75 },
  { price: 184.25, size: 280, total: 1120, depthPercent: 100 },
];

export default function TradeAlphaArchitecture() {
  const [activeTab, setActiveTab] = useState<"book" | "architecture">("book");
  const [recentTrades, setRecentTrades] = useState<
    { id: string; time: string; side: "BUY" | "SELL"; price: number; size: number }[]
  >([
    { id: "tx-891", time: "16:24:02.104", side: "BUY", price: 184.45, size: 100 },
    { id: "tx-890", time: "16:23:59.812", side: "SELL", price: 184.40, size: 50 },
  ]);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateExecution = (side: "BUY" | "SELL") => {
    setIsSimulating(true);
    const newPrice = side === "BUY" ? 184.45 : 184.40;
    const newSize = Math.floor(Math.random() * 80) + 40;
    const now = new Date();
    const timeStr = `${now.toTimeString().split(" ")[0]}.${String(now.getMilliseconds()).padStart(3, "0")}`;

    setTimeout(() => {
      setRecentTrades((prev) => [
        {
          id: `tx-${Math.floor(Math.random() * 900 + 100)}`,
          time: timeStr,
          side,
          price: newPrice,
          size: newSize,
        },
        ...prev.slice(0, 3),
      ]);
      setIsSimulating(false);
    }, 180);
  };

  return (
    <div className="rounded-2xl border border-[#262E3D] bg-[#0D0F13] p-5 sm:p-7 lg:p-8 text-[#ECE8E1] shadow-2xl">
      {/* Dark Theme Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262E3D] pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#06B6D4] font-medium">
              EXCHANGE BACKEND // SIMULATED ENGINE TELEMETRY
            </span>
            <span className="text-xs text-[#737373]">·</span>
            <span className="font-mono text-xs text-[#10B981] flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              WS FEED: CONNECTED (&lt;200ms)
            </span>
          </div>
          <h4 className="mt-1 font-serif text-xl sm:text-2xl font-medium text-white">
            In-Memory Matching &amp; Async Event Pipeline
          </h4>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 rounded-lg border border-[#262E3D] bg-[#141820] p-1 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("book")}
            className={`px-3 py-1 text-xs font-mono transition-all rounded ${
              activeTab === "book"
                ? "bg-[#262E3D] text-white font-semibold shadow-xs"
                : "text-[#8E8E8E] hover:text-white"
            }`}
          >
            Order Book &amp; Matching
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-1 text-xs font-mono transition-all rounded ${
              activeTab === "architecture"
                ? "bg-[#262E3D] text-white font-semibold shadow-xs"
                : "text-[#8E8E8E] hover:text-white"
            }`}
          >
            System Pipeline
          </button>
        </div>
      </div>

      {activeTab === "book" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Order Book Column (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-[#262E3D] bg-[#141820] p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-[#262E3D] pb-3 mb-3 font-mono text-[11px] text-[#737373]">
              <span>LEVEL-2 ORDER BOOK (ILLUSTRATIVE DEMO SIMULATION)</span>
              <span>IN-MEMORY PRIORITY HEAP</span>
            </div>

            {/* Asks (Sell Levels) */}
            <div className="space-y-1 mb-3">
              <div className="grid grid-cols-3 text-[10px] font-mono text-[#737373] px-2 pb-1">
                <span>PRICE (USD)</span>
                <span className="text-right">SIZE</span>
                <span className="text-right">TOTAL</span>
              </div>
              {INITIAL_ASKS.map((ask, idx) => (
                <div
                  key={idx}
                  className="relative grid grid-cols-3 font-mono text-xs py-1 px-2 rounded overflow-hidden"
                >
                  <div
                    className="absolute top-0 right-0 bottom-0 bg-[#EF4444]/10 transition-all duration-300"
                    style={{ width: `${ask.depthPercent}%` }}
                  ></div>
                  <span className="relative text-[#EF4444] font-medium">
                    ${ask.price.toFixed(2)}
                  </span>
                  <span className="relative text-right text-[#ECE8E1]">{ask.size}</span>
                  <span className="relative text-right text-[#737373]">{ask.total}</span>
                </div>
              ))}
            </div>

            {/* Spread Bar */}
            <div className="flex items-center justify-between rounded bg-[#1B212C] px-3 py-2 my-2 border border-[#262E3D]/80 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#8E8E8E]">SPREAD:</span>
                <span className="text-white font-semibold">$0.05 (0.027%)</span>
              </div>
              <div className="text-[11px] text-[#06B6D4]">
                MATCH LATENCY: <strong className="text-white">-60% OPTIMIZED</strong>
              </div>
            </div>

            {/* Bids (Buy Levels) */}
            <div className="space-y-1 mt-3">
              {INITIAL_BIDS.map((bid, idx) => (
                <div
                  key={idx}
                  className="relative grid grid-cols-3 font-mono text-xs py-1 px-2 rounded overflow-hidden"
                >
                  <div
                    className="absolute top-0 right-0 bottom-0 bg-[#10B981]/10 transition-all duration-300"
                    style={{ width: `${bid.depthPercent}%` }}
                  ></div>
                  <span className="relative text-[#10B981] font-medium">
                    ${bid.price.toFixed(2)}
                  </span>
                  <span className="relative text-right text-[#ECE8E1]">{bid.size}</span>
                  <span className="relative text-right text-[#737373]">{bid.total}</span>
                </div>
              ))}
            </div>

            {/* Interactive Simulation Controls */}
            <div className="mt-5 pt-4 border-t border-[#262E3D] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  disabled={isSimulating}
                  onClick={() => simulateExecution("BUY")}
                  className="rounded bg-[#10B981]/15 hover:bg-[#10B981]/25 text-[#10B981] border border-[#10B981]/40 px-3 py-1.5 font-mono text-xs font-semibold transition-all"
                >
                  + Simulate LIMIT BUY
                </button>
                <button
                  disabled={isSimulating}
                  onClick={() => simulateExecution("SELL")}
                  className="rounded bg-[#EF4444]/15 hover:bg-[#EF4444]/25 text-[#EF4444] border border-[#EF4444]/40 px-3 py-1.5 font-mono text-xs font-semibold transition-all"
                >
                  - Simulate MARKET SELL
                </button>
              </div>
              <span className="font-mono text-[11px] text-[#737373]">
                {isSimulating ? "Matching atomic order..." : "Engine status: Idle"}
              </span>
            </div>
          </div>

          {/* Engine & Pipeline Feeds (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Real-time matched trades log */}
            <div className="rounded-xl border border-[#262E3D] bg-[#141820] p-4">
              <div className="flex items-center justify-between border-b border-[#262E3D] pb-2 mb-3 text-[11px] font-mono text-[#737373]">
                <span>MATCHING ENGINE AUDIT LOG</span>
                <span className="text-[#10B981]">DOUBLE-ENTRY ACK</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                {recentTrades.map((t) => (
                  <div
                    key={t.id}
                    className="flex items-center justify-between rounded bg-[#1B212C]/60 p-2 border border-[#262E3D]/50"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                          t.side === "BUY"
                            ? "bg-[#10B981]/20 text-[#10B981]"
                            : "bg-[#EF4444]/20 text-[#EF4444]"
                        }`}
                      >
                        {t.side}
                      </span>
                      <span className="text-[#ECE8E1]">${t.price.toFixed(2)}</span>
                    </div>
                    <div className="text-[11px] text-[#737373]">
                      <span>{t.size} units</span>
                      <span className="ml-2 text-[#8E8E8E]">{t.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BullMQ Outbox & Double-entry Ledger status */}
            <div className="rounded-xl border border-[#262E3D] bg-[#141820] p-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-[#737373] border-b border-[#262E3D] pb-2">
                <span>ASYNC PIPELINE HEALTH</span>
                <span className="text-[#06B6D4]">BULLMQ OUTBOX</span>
              </div>

              <div className="flex justify-between text-[#8E8E8E]">
                <span>Ledger Idempotency:</span>
                <span className="text-[#10B981]">Guaranteed (SQL Constraints)</span>
              </div>
              <div className="flex justify-between text-[#8E8E8E]">
                <span>BullMQ Workers:</span>
                <span className="text-white">4 Active / 0 Failed</span>
              </div>
              <div className="flex justify-between text-[#8E8E8E]">
                <span>Telemetry Traces:</span>
                <span className="text-white">OpenTelemetry + Prometheus</span>
              </div>
              <div className="flex justify-between text-[#8E8E8E]">
                <span>WebSocket Broadcast:</span>
                <span className="text-[#06B6D4]">&lt;200ms Latency SLA</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Architecture Flow Mode */
        <div className="rounded-xl border border-[#262E3D] bg-[#141820] p-5 sm:p-6 space-y-6">
          <div className="font-mono text-xs text-[#737373] border-b border-[#262E3D] pb-3">
            DECOUPLED LOW-LATENCY WORKFLOW SPECIFICATION
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 font-mono text-xs">
            {/* Step 1 */}
            <div className="rounded-lg border border-[#262E3D] bg-[#1B212C] p-3.5 space-y-2">
              <div className="text-[10px] text-[#06B6D4]">01. INGRESS</div>
              <div className="font-semibold text-white">API Gateway</div>
              <p className="text-[11px] text-[#8E8E8E] font-sans">
                HMAC authentication, token-bucket rate limiting &amp; signature validation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-lg border border-[#262E3D] bg-[#1B212C] p-3.5 space-y-2">
              <div className="text-[10px] text-[#10B981]">02. MEMORY</div>
              <div className="font-semibold text-white">Order Book</div>
              <p className="text-[11px] text-[#8E8E8E] font-sans">
                In-memory priority heaps with O(log N) price-time priority indexing.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-lg border border-[#262E3D] bg-[#1B212C] p-3.5 space-y-2">
              <div className="text-[10px] text-[#C65A3A]">03. EXECUTION</div>
              <div className="font-semibold text-white">Matching Engine</div>
              <p className="text-[11px] text-[#8E8E8E] font-sans">
                Atomic trade resolution for MARKET, LIMIT, STOP, and STOP LIMIT orders.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-lg border border-[#262E3D] bg-[#1B212C] p-3.5 space-y-2">
              <div className="text-[10px] text-[#F59E0B]">04. ASYNC BUS</div>
              <div className="font-semibold text-white">BullMQ Outbox</div>
              <p className="text-[11px] text-[#8E8E8E] font-sans">
                Asynchronous event queue decoupling execution thread from heavy writes.
              </p>
            </div>

            {/* Step 5 */}
            <div className="rounded-lg border border-[#262E3D] bg-[#1B212C] p-3.5 space-y-2">
              <div className="text-[10px] text-[#06B6D4]">05. PERSISTENCE</div>
              <div className="font-semibold text-white">PostgreSQL Ledger</div>
              <p className="text-[11px] text-[#8E8E8E] font-sans">
                Double-entry idempotent SQL ledger guaranteeing ACID consistency.
              </p>
            </div>
          </div>

          {/* WebSocket stream highlight */}
          <div className="rounded-lg border border-[#06B6D4]/30 bg-[#06B6D4]/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <div>
              <span className="text-[#06B6D4] font-semibold">Separate WebSocket Feed Pipeline:</span>
              <p className="text-[#ECE8E1] font-sans text-xs mt-0.5">
                Broadcasts market depth and executed trades directly to subscribers via Redis Pub/Sub in sub-200ms.
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className="rounded bg-[#06B6D4]/20 text-[#06B6D4] px-2.5 py-1 text-[11px] font-semibold border border-[#06B6D4]/30">
                P95 &lt; 180ms
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Footer bar */}
      <div className="mt-6 pt-4 border-t border-[#262E3D] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[11px] text-[#737373]">
        <div className="flex items-center gap-3">
          <span>Engine: TypeScript / Node.js</span>
          <span>·</span>
          <span>Ledger: PostgreSQL ACID</span>
          <span>·</span>
          <span>Queue: BullMQ + Redis</span>
        </div>
        <div>
          <span>Observability: OpenTelemetry / Prometheus</span>
        </div>
      </div>
      <div className="mt-2 text-[10px] font-mono text-[#525252]">
        * Illustrative architectural simulation of in-memory order matching and decoupled event delivery.
      </div>
    </div>
  );
}

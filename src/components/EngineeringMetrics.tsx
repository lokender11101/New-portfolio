"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function EngineeringMetrics() {
  const metrics = PORTFOLIO_DATA.metrics;

  return (
    <section id="metrics" className="py-20 sm:py-28 lg:py-32 border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C65A3A] font-medium">
              BENCHMARKS // QUANTIFIABLE IMPACT
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717]">
            Engineering Impact &amp; Metrics
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#737373] font-serif italic">
            Measurable latency reductions, algorithmic optimizations, and production accuracy figures.
          </p>
        </div>

        {/* Typographic Grid (Deliberately structured with hairline dividers) */}
        <div className="rounded-3xl border border-[#E5E2DC] bg-[#FAF8F5] overflow-hidden shadow-[0_4px_24px_-6px_rgba(23,23,23,0.02)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-editorial">
            {metrics.slice(0, 3).map((m, idx) => (
              <div key={idx} className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#737373] mb-4">
                    <span>CATEGORY // {m.category.toUpperCase()}</span>
                    <span>[0{idx + 1}]</span>
                  </div>
                  <div className="font-serif text-5xl sm:text-6xl font-normal tracking-tight text-[#171717]">
                    {m.value}
                  </div>
                  <div className="font-sans text-base font-semibold text-[#171717] mt-3">
                    {m.label}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed pt-4 border-t border-[#E5E2DC]">
                  {m.context}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-[#E5E2DC] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x border-editorial">
            {metrics.slice(3, 7).map((m, idx) => (
              <div key={idx} className="p-7 sm:p-8 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#737373] mb-3">
                    <span>{m.category.toUpperCase()}</span>
                    <span>[0{idx + 4}]</span>
                  </div>
                  <div className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#C65A3A]">
                    {m.value}
                  </div>
                  <div className="font-sans text-sm font-semibold text-[#171717] mt-2">
                    {m.label}
                  </div>
                </div>
                <p className="text-xs text-[#525252] leading-relaxed pt-3 border-t border-[#E5E2DC]">
                  {m.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Note */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-[#737373] px-2">
          <span>* All metrics verified against production code, system benchmarks, and documented research outcomes.</span>
          <span>Zero fabricated benchmarks</span>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function TechnicalCapabilities() {
  const skillDisciplines = PORTFOLIO_DATA.skills;

  return (
    <section id="capabilities" className="py-20 sm:py-28 lg:py-32 border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C65A3A] font-medium">
              CORE DISCIPLINES // ENGINEERING TOOLKIT
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717]">
            What I work with
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#737373] font-serif italic">
            Disciplined technical foundations organized by domain rather than arbitrary rating scales.
          </p>
        </div>

        {/* 4 Disciplines Typographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillDisciplines.map((discipline, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E5E2DC] bg-[#FAF8F5] p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-[0_4px_24px_-6px_rgba(23,23,23,0.02)] transition-all hover:border-[#D6D1C7]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#E5E2DC]/80 text-[#171717]">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs text-[#C65A3A] font-medium uppercase tracking-wider">
                      {discipline.discipline}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#737373]">
                    {discipline.skills.length} Capabilities
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-[#171717]">
                  {discipline.title}
                </h3>

                <p className="mt-2 text-sm text-[#525252] leading-relaxed">
                  {discipline.description}
                </p>

                {/* Skills List with Focus Area */}
                <div className="mt-6 space-y-2.5">
                  {discipline.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 transition-all"
                    >
                      <span className="font-sans text-xs sm:text-sm font-semibold text-[#171717]">
                        {skill.name}
                      </span>
                      {skill.focus && (
                        <span className="font-mono text-[11px] text-[#737373] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E5E2DC]/80 self-start sm:self-auto">
                          {skill.focus}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#E5E2DC] flex items-center justify-between font-mono text-[11px] text-[#737373]">
                <span>Applied in Production</span>
                <span className="text-[#171717] font-medium">Production Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function EngineeringExperience() {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-32 border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C65A3A] font-medium">
              EXPERIENCE // RESEARCH &amp; SYSTEMS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717]">
            Engineering Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#737373] font-serif italic">
            Production machine learning models, optimization algorithms, and full-stack backend services.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-[#E5E2DC] bg-[#FAF8F5] p-6 sm:p-10 lg:p-12 transition-all shadow-[0_4px_24px_-6px_rgba(23,23,23,0.02)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Meta column (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-block font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#E5E2DC]/80 text-[#171717]">
                    {exp.period}
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#171717]">
                      {exp.organization}
                    </h3>
                    <p className="text-xs font-mono text-[#C65A3A] font-semibold mt-1">
                      {exp.program}
                    </p>
                    <p className="text-sm font-sans font-medium text-[#525252] mt-0.5">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#737373]">
                    <MapPin className="w-3.5 h-3.5 text-[#A8A39B]" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#737373] mb-2">
                      CORE STACK
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#E5E2DC] text-[#171717]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content column (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base text-[#525252] leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="space-y-4 border-t border-[#E5E2DC] pt-6">
                    {exp.achievements.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-[#E5E2DC] bg-[#FFFFFF] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-4 transition-all hover:border-[#D6D1C7]"
                      >
                        {item.metric && (
                          <div className="shrink-0 self-start">
                            <span className="inline-block font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#FAF8F5] text-[#C65A3A] border border-[#E5E2DC]">
                              {item.metric}
                            </span>
                          </div>
                        )}
                        <p className="text-sm text-[#525252] leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

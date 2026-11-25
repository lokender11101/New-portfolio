"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AchievementsSection() {
  const achievements = PORTFOLIO_DATA.achievements;

  return (
    <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C65A3A] font-medium">
              HONORS &amp; MILESTONES // MERIT
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717]">
            Achievements
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#737373] font-serif italic">
            Competitive examinations, algorithmic problem-solving track record, and end-to-end execution.
          </p>
        </div>

        {/* Clean, Restrained Editorial Grid (No tacky trophies/medals) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E5E2DC] bg-[#FAF8F5] p-6 sm:p-8 flex flex-col justify-between space-y-4 shadow-2xs transition-all hover:border-[#D6D1C7]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-[#FFFFFF] border border-[#E5E2DC] text-[#C65A3A]">
                    {item.metric}
                  </span>
                  <span className="font-mono text-[11px] text-[#737373]">
                    {item.organization}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#171717]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#525252] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E2DC] flex items-center justify-between font-mono text-[11px] text-[#737373]">
                <span>Verified Metric</span>
                <span className="text-[#171717]">Active Record</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

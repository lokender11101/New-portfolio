"use client";

import React from "react";
import { GraduationCap, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AboutSection() {
  const { about, education } = PORTFOLIO_DATA.personal;

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C65A3A] font-medium">
                PHILOSOPHY // ENGINEERING MINDSET
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717]">
              {about.headline}
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#525252] leading-relaxed font-sans">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "font-serif text-xl sm:text-2xl text-[#171717] italic leading-snug" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Core Interests Tags */}
            <div className="pt-4 border-t border-[#E5E2DC]">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#737373] mb-3">
                CURRENT AREAS OF FOCUS &amp; INTEREST
              </div>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D6D1C7] text-[#171717]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Education Context (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-[#E5E2DC] bg-[#FAF8F5] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#737373]">
                <GraduationCap className="w-4 h-4 text-[#C65A3A]" />
                <span>Academic Foundation</span>
              </div>
              <span className="font-mono text-xs text-[#171717] font-semibold">
                Class of 2027
              </span>
            </div>

            {/* Primary University */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-medium text-[#171717]">
                  {education.institution}
                </h3>
              </div>
              <p className="text-sm font-sans font-medium text-[#C65A3A]">
                {education.degree}
              </p>
              <div className="flex items-center justify-between font-mono text-xs text-[#737373] pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#A8A39B]" />
                  {education.location}
                </span>
                <span>{education.period}</span>
              </div>
            </div>

            {/* Prior Academic Milestones */}
            <div className="space-y-4 pt-4 border-t border-[#E5E2DC]">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#737373]">
                PRIOR MILESTONES
              </div>

              {education.secondaryInstitutions.map((sec, idx) => (
                <div key={idx} className="rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] p-3.5 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#171717]">
                    <span>{sec.institution}</span>
                    <span className="font-mono font-normal text-[#737373] text-[11px]">{sec.period}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#525252]">
                    <span>{sec.credential}</span>
                    <span className="font-mono text-[11px] text-[#A8A39B]">{sec.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Motto */}
            <div className="pt-4 border-t border-[#E5E2DC] font-mono text-xs text-[#737373] italic">
              &ldquo;Engineering depth over superficial abstractions; reliable systems over quick hacks.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

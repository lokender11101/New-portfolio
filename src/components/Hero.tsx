"use client";

import React from "react";
import { ArrowDown, Download, ArrowUpRight, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import HeroSystemDiagram from "./HeroSystemDiagram";
import GithubIcon from "./icons/GithubIcon";

export default function Hero() {
  const { hero, resumeUrl, githubUrl, leetcodeUrl } = PORTFOLIO_DATA.personal;

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Expressive Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Metadata Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 font-mono text-xs text-[#737373]">
              <span className="rounded-full border border-[#D6D1C7] bg-[#FAF8F5] px-3 py-1 font-medium text-[#171717]">
                {hero.badge}
              </span>
              <span className="hidden sm:inline text-[#D6D1C7]">/</span>
              <div className="flex items-center gap-1.5 text-[11px] text-[#525252]">
                {hero.focusTags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {idx < hero.focusTags.length - 1 && <span className="text-[#A8A39B]">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#171717] leading-[1.12]">
              {hero.headline}
            </h1>

            {/* Supporting Copy */}
            <div className="space-y-4 max-w-2xl text-base sm:text-lg text-[#525252] leading-relaxed font-sans">
              <p>{hero.subhead}</p>
              <p className="text-sm sm:text-base text-[#737373] italic font-serif">
                {hero.supporting}
              </p>
            </div>

            {/* Call to Actions & Verified Links */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-xs sm:text-sm font-medium text-white transition-all hover:bg-[#C65A3A] shadow-xs"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href={resumeUrl}
                  download="Lokender_Rao_Maddila_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D6D1C7] bg-[#FAF8F5] px-5 py-3 text-xs sm:text-sm font-medium text-[#171717] transition-all hover:border-[#171717] hover:bg-[#FFFFFF]"
                >
                  <Download className="w-4 h-4 text-[#C65A3A]" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Profiles */}
              <div className="flex items-center gap-4 font-mono text-xs text-[#737373] pt-2 sm:pt-0 sm:border-l sm:border-[#E5E2DC] sm:pl-6">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#171717] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A8A39B]" />
                </a>

                <a
                  href={leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#171717] transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  <span>LeetCode</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A8A39B]" />
                </a>
              </div>
            </div>

            {/* Quick stats ribbon */}
            <div className="pt-4 border-t border-[#E5E2DC] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="font-serif text-2xl font-medium text-[#171717]">800+</div>
                <div className="font-mono text-[11px] text-[#737373] mt-0.5">DSA Problems Solved</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-medium text-[#171717]">&lt;3s</div>
                <div className="font-mono text-[11px] text-[#737373] mt-0.5">LLM Stream Latency</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-medium text-[#171717]">-60%</div>
                <div className="font-mono text-[11px] text-[#737373] mt-0.5">Matching Latency</div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Visual System Node Composition (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <HeroSystemDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

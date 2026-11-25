"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import NextStepArchitecture from "./NextStepArchitecture";
import TradeAlphaArchitecture from "./TradeAlphaArchitecture";
import GithubIcon from "./icons/GithubIcon";

export default function SelectedWork() {
  const [nextStep, tradeAlpha] = PORTFOLIO_DATA.projects;

  return (
    <section id="work" className="py-20 sm:py-28 lg:py-36 border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C65A3A] font-medium">
              PORTFOLIO ARCHIVE // CASE STUDIES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717]">
            Selected Work
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-[#737373] font-serif italic">
            Systems I&apos;ve designed, engineered, and shipped.
          </p>
        </div>

        {/* PROJECT 01 — NextStep (Editorial Light Canvas) */}
        <div className="mb-24 lg:mb-32">
          <div className="rounded-3xl border border-[#E5E2DC] bg-[#FAF8F5] p-6 sm:p-10 lg:p-12 shadow-[0_4px_30px_-8px_rgba(23,23,23,0.03)]">
            {/* Project Header Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#E5E2DC] pb-8 mb-10">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E5E2DC]/70 text-[#171717]">
                    PROJECT {nextStep.number}
                  </span>
                  <span className="text-xs text-[#737373]">·</span>
                  <span className="font-mono text-xs text-[#C65A3A] font-medium">
                    AI AGENT &amp; SEMANTIC RETRIEVAL
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171717]">
                  {nextStep.title}
                </h3>
                <p className="text-base sm:text-lg text-[#525252] font-medium max-w-2xl">
                  {nextStep.subtitle}
                </p>
              </div>

              {/* GitHub Link Button */}
              <div className="flex items-center gap-3 self-start lg:self-auto">
                <a
                  href={nextStep.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-2.5 text-xs font-medium text-white transition-all hover:bg-[#C65A3A]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E07353]" />
                </a>
              </div>
            </div>

            {/* Project Overview Copy & Impact Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
              <div className="lg:col-span-7 space-y-4 text-base text-[#525252] leading-relaxed">
                <p className="text-lg font-serif text-[#171717] italic">
                  {nextStep.tagline}
                </p>
                <p>{nextStep.description}</p>
                
                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#737373] mb-2">
                    TECHNOLOGIES &amp; PROTOCOLS
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {nextStep.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#FFFFFF] border border-[#E5E2DC] text-[#171717]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact Metrics Grid */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {nextStep.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-[#E5E2DC] bg-[#FFFFFF] p-4 shadow-2xs"
                  >
                    <div className="font-serif text-3xl font-medium text-[#C65A3A]">
                      {m.value}
                    </div>
                    <div className="font-sans text-xs font-semibold text-[#171717] mt-0.5">
                      {m.label}
                    </div>
                    <div className="font-mono text-[11px] text-[#737373] mt-1">
                      {m.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Visual Illustration */}
            <div className="mb-12">
              <NextStepArchitecture />
            </div>

            {/* Engineering Highlights Accordion/Grid */}
            <div className="border-t border-[#E5E2DC] pt-10">
              <div className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-6">
                ENGINEERING SPECIFICATIONS &amp; IMPLEMENTATION DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nextStep.engineeringHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#E5E2DC] bg-[#FFFFFF] p-5 space-y-2.5"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs text-[#C65A3A] font-semibold">
                      <span>[0{idx + 1}]</span>
                      <span>{highlight.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                      {highlight.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 02 — TradeAlpha (Contrasting Dark Trading Canvas) */}
        <div>
          <div className="rounded-3xl border border-[#262E3D] bg-[#0A0C10] p-6 sm:p-10 lg:p-12 text-[#ECE8E1] shadow-2xl">
            {/* Project Header Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#262E3D] pb-8 mb-10">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#1B212C] text-[#ECE8E1] border border-[#262E3D]">
                    PROJECT {tradeAlpha.number}
                  </span>
                  <span className="text-xs text-[#737373]">·</span>
                  <span className="font-mono text-xs text-[#06B6D4] font-medium">
                    LOW-LATENCY DISTRIBUTED ENGINE
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
                  {tradeAlpha.title}
                </h3>
                <p className="text-base sm:text-lg text-[#A8A39B] font-medium max-w-2xl">
                  {tradeAlpha.subtitle}
                </p>
              </div>

              {/* GitHub Link Button */}
              <div className="flex items-center gap-3 self-start lg:self-auto">
                <a
                  href={tradeAlpha.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-[#171717] transition-all hover:bg-[#06B6D4] hover:text-black"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Project Overview Copy & Impact Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
              <div className="lg:col-span-7 space-y-4 text-base text-[#A8A39B] leading-relaxed">
                <p className="text-lg font-serif text-white italic">
                  {tradeAlpha.tagline}
                </p>
                <p>{tradeAlpha.description}</p>
                
                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#737373] mb-2">
                    TECHNOLOGIES &amp; PROTOCOLS
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tradeAlpha.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#141820] border border-[#262E3D] text-[#ECE8E1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact Metrics Grid */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {tradeAlpha.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-[#262E3D] bg-[#141820] p-4"
                  >
                    <div className="font-serif text-3xl font-medium text-[#06B6D4]">
                      {m.value}
                    </div>
                    <div className="font-sans text-xs font-semibold text-white mt-0.5">
                      {m.label}
                    </div>
                    <div className="font-mono text-[11px] text-[#8E8E8E] mt-1">
                      {m.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Architecture Visual Illustration */}
            <div className="mb-12">
              <TradeAlphaArchitecture />
            </div>

            {/* Engineering Highlights Grid */}
            <div className="border-t border-[#262E3D] pt-10">
              <div className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-6">
                BACKEND ARCHITECTURE &amp; FINANCIAL CONSISTENCY DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tradeAlpha.engineeringHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#262E3D] bg-[#141820] p-5 space-y-2.5"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs text-[#06B6D4] font-semibold">
                      <span>[0{idx + 1}]</span>
                      <span>{highlight.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed">
                      {highlight.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

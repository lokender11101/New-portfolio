"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E5E2DC] py-14 sm:py-20 text-[#737373]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 border-b border-[#E5E2DC] pb-12 mb-10">
          {/* Identity & Mission */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-medium text-[#171717]">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="font-mono text-xs text-[#737373]">/ LR.</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#525252] leading-relaxed">
              Undergraduate at NIT Silchar. Building intelligent products, distributed backend infrastructure, and low-latency systems.
            </p>
            <div className="font-mono text-xs text-[#C65A3A]">
              NIT Silchar · Computer Science &amp; Engineering · 2023–2027
            </div>
          </div>

          {/* Understated Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            {/* Column 1: Index */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-[#171717] font-semibold">
                INDEX
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="#work" className="hover:text-[#171717] transition-colors">
                    Selected Work
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-[#171717] transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#metrics" className="hover:text-[#171717] transition-colors">
                    Impact Metrics
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-[#171717] transition-colors">
                    Capabilities
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Profiles */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-[#171717] font-semibold">
                PROFILES
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#171717] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#171717] transition-colors"
                  >
                    LeetCode
                  </a>
                </li>
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.resumeUrl}
                    download="Lokender_Rao_Maddila_Resume.pdf"
                    className="hover:text-[#171717] transition-colors"
                  >
                    Resume PDF
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <div className="text-[11px] uppercase tracking-wider text-[#171717] font-semibold">
                CONTACT
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="hover:text-[#171717] transition-colors"
                  >
                    Email Direct
                  </a>
                </li>
                <li>
                  <span className="text-[#8E8E8E]">{PORTFOLIO_DATA.personal.phone}</span>
                </li>
                <li>
                  <span className="text-[#8E8E8E]">Silchar, Assam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px]">
          <div className="flex items-center gap-3">
            <span>&copy; 2026 Lokender Rao Maddila. All rights reserved.</span>
            <span>·</span>
            <span className="text-[#525252]">Crafted with Next.js, TypeScript &amp; Editorial Precision</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#171717] hover:text-[#C65A3A] transition-colors self-start sm:self-auto"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

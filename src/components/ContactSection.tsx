"use client";

import React, { useState } from "react";
import { Code2, Copy, Check, Download, ArrowUpRight, Send } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import GithubIcon from "./icons/GithubIcon";

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E5E2DC] bg-[#FAF8F5] p-8 sm:p-12 lg:p-16 shadow-[0_4px_30px_-8px_rgba(23,23,23,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Editorial Invitation (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#C65A3A] font-medium">
                  INITIATE CONVERSATION // CONTACT
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#171717] leading-tight">
                Have an interesting problem to solve?
              </h2>

              <p className="text-base sm:text-lg text-[#525252] leading-relaxed max-w-xl font-sans">
                I&apos;m always interested in discussing thoughtful products, challenging engineering problems, and opportunities to build meaningful software.
              </p>

              {/* Direct Email Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#171717] px-6 py-3.5 text-xs sm:text-sm font-medium text-white transition-all hover:bg-[#C65A3A] shadow-xs"
                >
                  <Send className="w-4 h-4 text-[#E07353]" />
                  <span>Send an Email Directly</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D6D1C7] bg-[#FFFFFF] px-5 py-3.5 text-xs sm:text-sm font-medium text-[#171717] transition-all hover:border-[#171717]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#10B981]" />
                      <span className="text-[#10B981]">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#737373]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status note */}
              <div className="pt-4 flex items-center gap-2.5 font-mono text-xs text-[#737373]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                </span>
                <span>Active &amp; Available for 2027 Engineering Opportunities &amp; SDE Roles</span>
              </div>
            </div>

            {/* Right Column: Direct Contact Details & Links (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="font-mono text-xs uppercase tracking-wider text-[#737373] border-b border-[#E5E2DC] pb-3">
                DIRECT CONTACT CHANNELS
              </div>

              {/* Email item */}
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-[#737373]">EMAIL</div>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-[#171717] hover:text-[#C65A3A] transition-colors break-all"
                >
                  {personal.email}
                </a>
              </div>

              {/* Phone item */}
              <div className="space-y-1 pt-3 border-t border-[#E5E2DC]">
                <div className="text-[11px] font-mono text-[#737373]">MOBILE PHONE</div>
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-[#171717] hover:text-[#C65A3A] transition-colors"
                >
                  {personal.phone}
                </a>
              </div>

              {/* Location */}
              <div className="space-y-1 pt-3 border-t border-[#E5E2DC]">
                <div className="text-[11px] font-mono text-[#737373]">LOCATION</div>
                <div className="font-sans text-xs sm:text-sm font-medium text-[#171717]">
                  {personal.location}
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-[#E5E2DC] flex flex-col gap-2.5">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg bg-[#FAF8F5] p-2.5 border border-[#E5E2DC] hover:border-[#171717] transition-all text-xs font-mono text-[#171717]"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>github.com/lokender11101</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#737373]" />
                </a>

                <a
                  href={personal.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg bg-[#FAF8F5] p-2.5 border border-[#E5E2DC] hover:border-[#171717] transition-all text-xs font-mono text-[#171717]"
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    <span>leetcode.com/lokender11101</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#737373]" />
                </a>

                <a
                  href={personal.resumeUrl}
                  download="Lokender_Rao_Maddila_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg bg-[#171717] p-2.5 text-xs font-mono text-white hover:bg-[#C65A3A] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#E07353]" />
                    <span>Download Formal Resume (PDF)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ECE8E1]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

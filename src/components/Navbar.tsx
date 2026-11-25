"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Metrics", href: "#metrics" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F3EE]/90 backdrop-blur-md border-b border-[#E5E2DC] shadow-[0_2px_12px_rgba(23,23,23,0.03)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-colors"
          >
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#171717]">
              {PORTFOLIO_DATA.personal.shortName}
            </span>
            <span className="font-mono text-xs text-[#737373] hidden sm:inline">
              / {PORTFOLIO_DATA.personal.initials}.
            </span>
            <span className="relative flex h-2 w-2 ml-1" title="Available for 2027 Roles">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 font-sans text-xs font-medium tracking-wide text-[#737373]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-[#171717] relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C65A3A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}

            <div className="h-4 w-[1px] bg-[#E5E2DC]" />

            {/* Resume Download CTA */}
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Lokender_Rao_Maddila_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D6D1C7] bg-[#FAF8F5] px-3.5 py-1.5 text-xs font-medium text-[#171717] transition-all hover:border-[#171717] hover:bg-[#FFFFFF] shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-[#C65A3A]" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Lokender_Rao_Maddila_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[#D6D1C7] bg-[#FAF8F5] px-2.5 py-1 text-xs font-medium text-[#171717]"
            >
              <Download className="w-3 h-3 text-[#C65A3A]" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171717] hover:text-[#C65A3A] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E2DC] bg-[#FAF8F5]/98 px-6 py-6 shadow-xl backdrop-blur-lg">
          <div className="flex flex-col space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#737373] pb-2 border-b border-[#E5E2DC]">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-[#171717] hover:text-[#C65A3A] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E5E2DC] flex flex-col gap-3">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Lokender_Rao_Maddila_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#171717] py-2.5 text-xs font-medium text-white shadow-sm"
              >
                <Download className="w-4 h-4 text-[#E07353]" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="flex items-center justify-between text-xs font-mono text-[#737373] pt-2">
                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#171717]"
                >
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#171717]"
                >
                  LeetCode <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

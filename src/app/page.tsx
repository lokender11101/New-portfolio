import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import EngineeringExperience from "@/components/EngineeringExperience";
import EngineeringMetrics from "@/components/EngineeringMetrics";
import TechnicalCapabilities from "@/components/TechnicalCapabilities";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F3EE] text-[#171717]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <EngineeringExperience />
        <EngineeringMetrics />
        <TechnicalCapabilities />
        <AboutSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

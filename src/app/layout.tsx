import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#F5F3EE",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Lokender Rao Maddila | Software Engineer | AI Systems & Backend Engineering",
  description:
    "Software engineering portfolio of Lokender Rao Maddila, Computer Science undergraduate at NIT Silchar. Focused on AI agents, LLM applications, distributed backend systems, and low-latency matching engines.",
  keywords: [
    "Lokender Rao Maddila",
    "Lokender Rao",
    "NIT Silchar",
    "Software Engineer",
    "AI Systems",
    "Backend Engineering",
    "Distributed Systems",
    "NextStep",
    "TradeAlpha",
    "Semantic Search",
    "Low-Latency Systems",
  ],
  authors: [{ name: "Lokender Rao Maddila", url: "https://github.com/lokender11101" }],
  creator: "Lokender Rao Maddila",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Lokender Rao Maddila | Software Engineer | AI Systems & Backend Engineering",
    description:
      "I build the systems behind intelligent products. Undergraduate at NIT Silchar working across AI engineering, backend infrastructure, and performance-driven software systems.",
    siteName: "Lokender Rao Maddila Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokender Rao Maddila | Software Engineer | AI Systems & Backend Engineering",
    description:
      "I build the systems behind intelligent products. NIT Silchar CS '27. AI Systems, Low-Latency Matching Engines, Distributed Architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F5F3EE] text-[#171717] font-sans antialiased selection:bg-[#C65A3A]/15 selection:text-[#171717]">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import DevToolsDetector from "@/components/DevToolsDetector";
import AntiDebug from "@/components/AntiDebug";

export const metadata: Metadata = {
  title: "Code Capital | Developer & Digital Alchemist",
  description: "Full-stack developer turning coffee into code. Building cool stuff with Web3, AI, and whatever else seems fun. Warning: May contain bugs features.",
  keywords: ["developer", "portfolio", "web3", "blockchain", "full-stack", "typescript", "react", "solidity", "defi", "cyberpunk"],
  authors: [{ name: "Code Capital" }],
  openGraph: {
    title: "Code Capital | Developer & Digital Alchemist", 
    description: "Portfolio of a developer who builds things that (mostly) work. Featuring terminals, glitch effects, and an unhealthy amount of coffee references.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden antialiased">
        <DevToolsDetector />
        <AntiDebug />
        <div className="relative min-h-screen">
          {/* CRT effect overlay */}
          <div className="fixed inset-0 pointer-events-none crt-effect z-50" />
          
          {/* Main content */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./site-components";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henry Jones, PhD — Ocean & Atmospheric Science Advisor",
  description: "Retired U.S. Navy Commander and PhD physical oceanographer with senior experience in ocean and atmospheric science, operational meteorology, environmental risk, defense, and federal programs.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Dr. Henry Jones — Strategic Advisor", description: "Ocean and atmospheric science. Federal programs. Environmental risk." },
  twitter: { card: "summary", title: "Dr. Henry Jones — Strategic Advisor", description: "Ocean and atmospheric science. Federal programs. Environmental risk." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><SiteHeader />{children}<SiteFooter /></body></html>;
}

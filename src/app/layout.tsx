import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./sections.css";

// Garden's type, self-hosted (OFL). Display serif, humanist body, mono labels.
const display = localFont({
  src: "../fonts/young-serif-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "../fonts/hanken-grotesk-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/hanken-grotesk-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/hanken-grotesk-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-body",
  display: "swap",
});

const mono = localFont({
  src: "../fonts/GeistMono-Variable.woff2",
  weight: "100 900",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saumya Pant — performance marketing and AI for marketing teams",
  description:
    "Saumya Pant plans, runs and automates Google, Meta and YouTube campaigns, builds GA4 measurement, and puts AI agents to work for marketing teams. Nine years across Oracle, Reckitt, Udaan and Google.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

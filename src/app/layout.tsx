import type { Metadata } from "next";
import { Instrument_Serif, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quantsuite — Autonomous Trading Intelligence",
  description:
    "AI-powered market system intelligence for autonomous hedge funds. SwarmEngine, Factor Zoo, Walk-Forward Backtester, and real-time regime detection.",
  keywords: [
    "quantitative trading",
    "algorithmic trading",
    "AI hedge fund",
    "autonomous trading",
    "alpha generation",
    "backtesting",
    "SwarmEngine",
    "market intelligence",
    "factor models",
  ],
  authors: [{ name: "Quantsuite" }],
  creator: "Quantsuite",
  openGraph: {
    title: "Quantsuite — Autonomous Trading Intelligence",
    description:
      "AI-powered market system intelligence for autonomous hedge funds.",
    type: "website",
    locale: "en_US",
    siteName: "Quantsuite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantsuite — Autonomous Trading Intelligence",
    description:
      "AI-powered market system intelligence for autonomous hedge funds.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${redHatDisplay.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-accent-cyan/25">
        {children}
      </body>
    </html>
  );
}

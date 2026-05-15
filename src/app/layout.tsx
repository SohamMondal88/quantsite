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
  title: "Quantsuite — Trade Beyond Human Limits",
  description:
    "Market system intelligence for autonomous hedge funds. AI-powered trading infrastructure built for quants, traders, and visionaries.",
  keywords: [
    "quantitative trading",
    "algorithmic trading",
    "AI hedge fund",
    "autonomous trading",
    "alpha generation",
    "backtesting",
    "SwarmEngine",
    "market intelligence",
  ],
  authors: [{ name: "Quantsuite" }],
  creator: "Quantsuite",
  openGraph: {
    title: "Quantsuite — Trade Beyond Human Limits",
    description:
      "Market system intelligence for autonomous hedge funds. AI-powered trading infrastructure.",
    type: "website",
    locale: "en_US",
    siteName: "Quantsuite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantsuite — Trade Beyond Human Limits",
    description:
      "Market system intelligence for autonomous hedge funds. AI-powered trading infrastructure.",
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
      className={`${instrumentSerif.variable} ${redHatDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-accent-cyan/25">
        {children}
      </body>
    </html>
  );
}

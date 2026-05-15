import type { Metadata } from "next";
import { Instrument_Serif, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title:
    "Quantsuite - Trade Beyond Human Limits | AI-Powered Trading Intelligence",
  description:
    "Market system intelligence for autonomous hedge funds. AI-powered trading infrastructure with advanced risk management and real-time market analysis.",
  keywords:
    "trading, AI, quantitative finance, hedge fund, market intelligence",
  authors: [{ name: "Quantsuite Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Quantsuite - Trade Beyond Human Limits",
    description:
      "AI-powered trading intelligence platform for quants and institutional traders",
    type: "website",
    url: "https://quantsuite.io",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quantsuite Trading Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantsuite - Trade Beyond Human Limits",
    description: "AI-powered trading intelligence platform",
    images: ["/og-image.png"],
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
      className={`${instrumentSerif.variable} ${redHatDisplay.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#060606" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            * {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          `}
        </style>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative">
        {children}
      </body>
    </html>
  );
}

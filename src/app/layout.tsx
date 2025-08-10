import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAdSense from "@/components/GoogleAdSense";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multi-Function Calculator - Free Online Math Tools | Calculate Tools",
  description: "Free online calculator with basic operations, percentage calculations, and change rate calculations. Simple, fast, and accurate math tools for everyone.",
  keywords: "calculator, online calculator, percentage calculator, math tools, free calculator, calculation tools",
  authors: [{ name: "Calculate Tools Team" }],
  creator: "Calculate Tools",
  publisher: "Calculate Tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://calculate-tools.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Multi-Function Calculator - Free Online Math Tools",
    description: "Free online calculator with basic operations, percentage calculations, and change rate calculations.",
    url: 'https://calculate-tools.com',
    siteName: 'Calculate Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Multi-Function Calculator - Free Online Math Tools",
    description: "Free online calculator with basic operations, percentage calculations, and change rate calculations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16 min-h-screen bg-gray-50">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <StructuredData />
        <GoogleAdSense />
      </body>
    </html>
  );
}

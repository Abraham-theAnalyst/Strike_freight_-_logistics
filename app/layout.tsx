import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatButton from "@/components/layout/WhatsAppFloatButton";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { businessInfo } from "@/lib/site-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.siteUrl),
  title: {
    default: `${businessInfo.name} | Cargo, Courier & Air/Sea Freight`,
    template: `%s | ${businessInfo.shortName}`,
  },
  description: businessInfo.metaDescription,
  openGraph: {
    type: "website",
    siteName: businessInfo.name,
    title: `${businessInfo.name} | Cargo, Courier & Air/Sea Freight`,
    description: businessInfo.metaDescription,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} | Cargo, Courier & Air/Sea Freight`,
    description: businessInfo.metaDescription,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-brand-ink">
        {/* Skip link for keyboard/screen-reader users to jump past the header */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <ScrollRevealInit />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}

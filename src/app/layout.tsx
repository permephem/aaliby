import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = `${BUSINESS.name} | Billings, MT Emergency Towing`;
const description = `24/7 emergency towing in Billings, Montana. Family-owned, locally operated — repairs available on towed vehicles. Serving Yellowstone County since ${BUSINESS.foundingYear}. Call ${BUSINESS.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "towing Billings MT",
    "emergency towing Billings",
    "auto repair Billings Montana",
    "roadside assistance Billings",
    "tow truck Billings",
    "Yellowstone County towing",
    "Aaliby Auto Repair and Towing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <LocalBusinessJsonLd />
        <FaqJsonLd />
        {children}
      </body>
    </html>
  );
}

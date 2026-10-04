import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baqiatullahfoundation.org"),
  title: "Baqiatullah Foundation Pakistan | Nurturing Care & Education",
  description:
    "Official website of Baqiatullah Foundation Pakistan. Providing compassionate home care, quality education, meals, and emergency flood relief for children in need.",
  keywords: [
    "Baqiatullah Foundation",
    "Orphanage Lahore",
    "Child welfare Pakistan",
    "Donate Pakistan",
    "Education scholarships",
    "Nawab Town Lahore",
  ],
  openGraph: {
    title: "Baqiatullah Foundation Pakistan",
    description: "Transforming children's lives through compassionate care and education.",
    url: "https://baqiatullahfoundation.org",
    siteName: "Baqiatullah Foundation",
    images: [{ url: "/logo/emblem.png", width: 800, height: 800 }],
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased font-sans">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 pt-24 sm:pt-28">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

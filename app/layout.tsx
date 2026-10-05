import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import AmbientSvgBackground from "@/components/motion/AmbientSvgBackground";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
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
    <html lang="en" className={`${poppins.variable} min-h-screen scroll-smooth`}>
      <body className="min-h-screen flex flex-col text-slate-900 antialiased font-sans relative selection:bg-[#008B8B] selection:text-white bg-[#EDF6F6]">
        <AmbientSvgBackground />

        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

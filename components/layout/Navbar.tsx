"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "News & Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-2.5 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2 flex items-center justify-between ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border border-gray-200/80"
            : "bg-white/80 backdrop-blur-sm shadow-xs border border-white/90"
        }`}
      >
        {/* Brand Lockup: Emblem (Image 2) + Cropped Text (Image 3) */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#FFBF00] shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0 bg-[#FFBF00]">
            <Image
              src="/logo/emblem.png"
              alt="Baqiatullah Foundation Emblem"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative h-8 sm:h-10 w-44 sm:w-60 shrink-0">
            <Image
              src="/logo/brand-text.png"
              alt="بقیتہ اللہ فاؤنڈیشن پاکستان - BAQIATULLAH FOUNDATION PAKISTAN"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                  active ? "text-[#008B8B]" : "text-gray-700 hover:text-[#008B8B]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#008B8B] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Donate Action + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button href="/donate" variant="donate" size="sm" className="hidden sm:inline-flex shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Donate Now</span>
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden mx-auto max-w-7xl mt-2 px-4 py-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-200 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    active ? "bg-[#008B8B]/10 text-[#008B8B]" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-gray-100 mt-1">
              <Button href="/donate" variant="donate" size="md" className="w-full justify-center">
                <Heart className="w-4 h-4 fill-current mr-2" />
                <span>Donate Now</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

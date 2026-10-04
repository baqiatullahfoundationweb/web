"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Globe, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { switchLocalePath, getDictionary } from "@/lib/i18n";

export interface NavLinkItem {
  href: string;
  label: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isUrdu = pathname.startsWith("/ur");
  const locale = isUrdu ? "ur" : "eng";
  const dict = getDictionary(locale);
  const currentLinks = dict.nav.links;
  const targetLocale = isUrdu ? "eng" : "ur";
  const switchUrl = switchLocalePath(pathname, targetLocale);
  const donateHref = isUrdu ? "/ur/donate" : "/eng/donate";
  const homeHref = isUrdu ? "/ur" : "/eng";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change or resize
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-6 py-2 sm:py-3 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl rounded-2xl md:rounded-full transition-all duration-300 px-3 sm:px-5 py-2 flex items-center justify-between gap-2 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl shadow-teal-950/10 border border-primary/20"
            : "bg-white/90 backdrop-blur-md shadow-md shadow-teal-950/5 border border-primary/15"
        }`}
        dir={isUrdu ? "rtl" : "ltr"}
      >
        {/* Brand Lockup */}
        <Link href={homeHref} className="flex items-center gap-2 sm:gap-3 group shrink min-w-0" aria-label="Baqiatullah Foundation">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden ring-2 ring-[#FFBF00] shadow-sm shrink-0 bg-[#FFBF00]">
            <Image src="/logo/emblem.png" alt="Baqiatullah Emblem" fill className="object-cover" priority />
          </div>
          <div className="relative h-6 sm:h-8 md:h-9 w-32 sm:w-44 md:w-56 lg:w-64 shrink-0">
            <Image
              src="/logo/brand-text.png"
              alt="بقیتہ اللہ فاؤنڈیشن پاکستان - BAQIATULLAH FOUNDATION PAKISTAN"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 640px) 140px, (max-width: 1024px) 200px, 260px"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {currentLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs xl:text-sm font-semibold px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 relative ${
                  active
                    ? "bg-primary text-white shadow-xs"
                    : "text-gray-700 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Group: Language Switcher + Donate CTA + Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Language Switcher Pill */}
          <Link
            href={switchUrl}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 hover:text-primary bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all cursor-pointer interactive-tap min-h-[36px]"
            title={isUrdu ? "Switch to English" : "اردو میں دیکھیں"}
          >
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span>{isUrdu ? "English" : "اردو"}</span>
          </Link>

          {/* Donate CTA (visible from sm and up) */}
          <Button href={donateHref} variant="donate" size="sm" className="hidden sm:inline-flex shadow-md shadow-red-950/20 shrink-0 px-3 sm:px-4">
            <Heart className="w-3.5 h-3.5 fill-current mr-1" />
            <span>{dict.nav.donateNow}</span>
          </Button>

          {/* Responsive Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-800 hover:text-primary bg-gray-100 hover:bg-primary/15 transition-all cursor-pointer active:scale-95"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden mx-auto max-w-7xl mt-2 px-4 py-5 rounded-2xl bg-white/98 backdrop-blur-2xl shadow-2xl border border-primary/25 text-gray-900 animate-in fade-in slide-in-from-top-2 duration-200"
          dir={isUrdu ? "rtl" : "ltr"}
        >
          <nav className="flex flex-col gap-1.5">
            {currentLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors min-h-[46px] flex items-center ${
                    active ? "bg-primary text-white shadow-xs" : "text-gray-800 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-gray-200/80 mt-2 flex flex-col gap-2.5">
              <Button href={donateHref} variant="donate" size="md" className="w-full justify-center shadow-lg">
                <Heart className="w-4 h-4 fill-current mr-1.5" />
                <span>{dict.nav.donateNow}</span>
              </Button>

              <div className="flex items-center justify-between text-xs text-gray-600 px-2 pt-1 font-medium">
                <a href="tel:03006500512" className="flex items-center gap-1.5 text-primary hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  <span>0300-6500512</span>
                </a>
                <span>{isUrdu ? "لاہور سینکچوئری" : "Lahore Sanctuary"}</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

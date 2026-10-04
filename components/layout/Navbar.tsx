"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Globe } from "lucide-react";
import Button from "@/components/ui/Button";
import { switchLocalePath } from "@/lib/i18n";

export interface NavLinkItem {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: NavLinkItem[];
  phone?: string;
}

const ENG_LINKS: NavLinkItem[] = [
  { href: "/eng", label: "Home" },
  { href: "/eng/about", label: "About" },
  { href: "/eng/projects", label: "Projects" },
  { href: "/eng/gallery", label: "Gallery" },
  { href: "/eng/blog", label: "News & Events" },
  { href: "/eng/contact", label: "Contact" },
];

const URDU_LINKS: NavLinkItem[] = [
  { href: "/ur", label: "صفحۂ اول" },
  { href: "/ur/about", label: "ہمارے بارے میں" },
  { href: "/ur/projects", label: "منصوبہ جات" },
  { href: "/ur/gallery", label: "تصویری گیلری" },
  { href: "/ur/blog", label: "خبریں و ریلیف" },
  { href: "/ur/contact", label: "رابطہ کریں" },
];

export default function Navbar({ phone = "0300-6500512" }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isUrdu = pathname.startsWith("/ur");
  const currentLinks = isUrdu ? URDU_LINKS : ENG_LINKS;
  const targetLocale = isUrdu ? "eng" : "ur";
  const switchUrl = switchLocalePath(pathname, targetLocale);
  const donateHref = isUrdu ? "/ur/donate" : "/eng/donate";
  const donateLabel = isUrdu ? "عطیہ دیں" : "Donate Now";
  const homeHref = isUrdu ? "/ur" : "/eng";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 py-2 sm:py-3 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl rounded-2xl sm:rounded-full transition-all duration-300 px-3 sm:px-5 py-1.5 sm:py-2 flex items-center justify-between gap-2 lg:gap-4 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl shadow-teal-950/10 border border-primary/20"
            : "bg-white/90 backdrop-blur-md shadow-md shadow-teal-950/5 border border-primary/15"
        }`}
        dir={isUrdu ? "rtl" : "ltr"}
      >
        {/* Brand Lockup */}
        <Link href={homeHref} className="flex items-center gap-2 sm:gap-3 group shrink-0" aria-label="Baqiatullah Foundation">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden ring-2 ring-[#FFBF00] shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0 bg-[#FFBF00]">
            <Image src="/logo/emblem.png" alt="Baqiatullah Emblem" fill className="object-cover" priority />
          </div>
          <div className="relative h-7 sm:h-8 md:h-9 w-40 sm:w-48 md:w-56 lg:w-64 shrink-0">
            <Image
              src="/logo/brand-text.png"
              alt="بقیتہ اللہ فاؤنڈیشن پاکستان - BAQIATULLAH FOUNDATION PAKISTAN"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 280px"
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
                className={`text-xs xl:text-sm font-semibold px-2.5 xl:px-3.5 py-1.5 rounded-full transition-all duration-200 relative ${
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Pill */}
          <Link
            href={switchUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 hover:text-primary bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all cursor-pointer interactive-tap"
            title={isUrdu ? "Switch to English" : "اردو میں دیکھیں"}
          >
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span>{isUrdu ? "English" : "اردو"}</span>
          </Link>

          <Button href={donateHref} variant="donate" size="sm" className="shadow-md shadow-red-950/20 shrink-0 px-3 sm:px-3.5 py-2 sm:py-2.5">
            <Heart className="w-3.5 h-3.5 fill-current mr-1" />
            <span>{donateLabel}</span>
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden mx-auto max-w-7xl mt-2 px-4 py-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-primary/20 text-gray-800 animate-in fade-in duration-200"
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
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    active ? "bg-primary text-white" : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-gray-100 mt-1 flex items-center justify-between gap-3">
              <Link
                href={switchUrl}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-primary/10 text-primary border border-primary/20"
              >
                <Globe className="w-4 h-4 text-primary" />
                <span>{isUrdu ? "Switch to English" : "اردو میں پڑھیں"}</span>
              </Link>
              <Button href={donateHref} variant="donate" size="md" className="flex-1 justify-center">
                <Heart className="w-4 h-4 fill-current mr-1.5" />
                <span>{donateLabel}</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

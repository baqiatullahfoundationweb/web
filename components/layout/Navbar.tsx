"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export interface NavLinkItem {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: NavLinkItem[];
  phone?: string;
}

const DEFAULT_LINKS: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "News & Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ links = DEFAULT_LINKS, phone = "0300-6500512" }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl shadow-teal-900/5 border border-primary/20"
            : "bg-white/90 backdrop-blur-md shadow-md shadow-black/5 border border-white/90"
        }`}
      >
        {/* Brand Lockup: Larger Emblem + Clear Brand Typography */}
        <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Baqiatullah Foundation Home">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-[#FFBF00] shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0 bg-[#FFBF00]">
            <Image
              src="/logo/emblem.png"
              alt="Baqiatullah Foundation Emblem"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative h-10 sm:h-12 w-48 sm:w-64 lg:w-72 shrink-0">
            <Image
              src="/logo/brand-text.png"
              alt="بقیتہ اللہ فاؤنڈیشن پاکستان - BAQIATULLAH FOUNDATION PAKISTAN"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 relative ${
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

        {/* Right Action Group: Helpline + Donate CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${phone.replace(/[^0-9]/g, "")}`}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors border border-gray-200/80"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>{phone}</span>
          </a>

          <Button href="/donate" variant="donate" size="sm" className="shadow-md shadow-red-900/10 shrink-0">
            <Heart className="w-3.5 h-3.5 fill-current mr-1.5" />
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
        <div className="lg:hidden mx-auto max-w-7xl mt-2 px-4 py-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-gray-200 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-1.5">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    active ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-gray-100 mt-1 flex flex-col gap-2">
              <a
                href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-gray-700 hover:text-primary"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>Helpline: {phone}</span>
              </a>
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

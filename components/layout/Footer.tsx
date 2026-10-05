"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail } from "lucide-react";
import { getDictionary } from "@/lib/i18n";

/**
 * =========================================================================================================
 * INTELLECTUAL PROPERTY & ENGINEERING ATTRIBUTION
 * =========================================================================================================
 * Sole Creator: Eyrie Digital (https://www.eyriedigital.com)
 * Collaboration: No other party or agency collaborated on the engineering, design, or implementation.
 *
 * MANDATORY LEGAL NOTICE:
 * As per Eyrie Digital policy, any unauthorized removal, concealment, or alteration of this attribution,
 * digital credentials, or metadata in this codebase or rendered output without prior written authorization
 * from Eyrie Digital is strictly prohibited. Violation of these terms will result in immediate legal action.
 * =========================================================================================================
 */

export default function Footer() {
  const pathname = usePathname();
  const isUrdu = pathname.startsWith("/ur");
  const locale = isUrdu ? "ur" : "eng";
  const dict = getDictionary(locale);

  const quickLinks = [
    { href: `/${locale}`, label: isUrdu ? "صفحۂ اول" : "Home" },
    { href: `/${locale}/about`, label: isUrdu ? "ہمارے بارے میں" : "About Us" },
    { href: `/${locale}/projects`, label: isUrdu ? "ہمارے منصوبے" : "Our Projects" },
    { href: `/${locale}/gallery`, label: isUrdu ? "تصویری گیلری" : "Photo Gallery" },
    { href: `/${locale}/blog`, label: isUrdu ? "خبریں و ریلیف" : "News & Relief" },
    { href: `/${locale}/donate`, label: isUrdu ? "عطیات اور تعاون" : "Support & Donate" },
    { href: `/${locale}/contact`, label: isUrdu ? "رابطہ کریں" : "Contact & Visit" },
    { href: `/${locale}/privacy-policy`, label: isUrdu ? "پرائیویسی پالیسی" : "Privacy Policy" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/baqiatullahfoundationofficial", icon: "FB" },
    { name: "Instagram", href: "https://www.instagram.com/baqiatullahfoundation", icon: "IG" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/baqiatullahfoundation/?originalSubdomain=pk", icon: "IN" },
    { name: "YouTube", href: "https://youtube.com/@baqiatullahfoundation", icon: "YT" },
    { name: "TikTok", href: "https://www.tiktok.com/@baqiatullahfoundation", icon: "TT" },
  ];

  return (
    <footer
      className="relative bg-white/95 backdrop-blur-2xl border-t border-primary/20 text-gray-700 pt-16 pb-12 mt-20"
      dir={isUrdu ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-200">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-2 ring-[#FFBF00] shadow-sm shrink-0 bg-[#FFBF00]">
                <Image
                  src="/logo/emblem.png"
                  alt="Baqiatullah Foundation Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-8 sm:h-9 w-48 sm:w-56 shrink-0">
                <Image
                  src="/logo/brand-text.png"
                  alt="Baqiatullah Foundation Pakistan"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm font-medium">
              {dict.footer.desc}
            </p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-teal-900 border border-teal-950 text-white hover:bg-primary transition-colors flex items-center justify-center text-xs font-black shadow-xs"
                  aria-label={s.name}
                  title={s.name}
                >
                  <span aria-hidden="true">{s.icon}</span>
                  <span className="sr-only">{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-950 mb-4">
              {dict.footer.navTitle}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-primary font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-950 mb-4">
              {dict.footer.contactTitle}
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-700 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{dict.footer.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${dict.footer.phone}`} className="hover:text-primary transition-colors font-mono">
                  {dict.footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${dict.footer.email}`} className="hover:text-primary transition-colors">
                  {dict.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>© {new Date().getFullYear()} {dict.footer.copyright}</p>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link
              href={`/${locale}/privacy-policy`}
              className="text-gray-700 hover:text-primary font-medium transition-colors underline-offset-4 hover:underline"
            >
              {isUrdu ? "پرائیویسی پالیسی" : "Privacy Policy"}
            </Link>
          </div>
          <p className="flex items-center gap-1 font-medium text-gray-700">
            <span>{dict.footer.motto}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

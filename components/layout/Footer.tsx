import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Our Projects" },
    { href: "/gallery", label: "Photo Gallery" },
    { href: "/blog", label: "News & Relief" },
    { href: "/donate", label: "Support & Donate" },
    { href: "/contact", label: "Contact & Visit" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/baqiatullahfoundationofficial", icon: "FB" },
    { name: "Instagram", href: "https://www.instagram.com/baqiatullahfoundation", icon: "IG" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/baqiatullahfoundation/?originalSubdomain=pk", icon: "IN" },
    { name: "YouTube", href: "https://youtube.com/@baqiatullahfoundation", icon: "YT" },
    { name: "TikTok", href: "https://www.tiktok.com/@baqiatullahfoundation", icon: "TT" },
  ];

  return (
    <footer className="bg-[#FBFBFA] border-t border-[#EAEAEA] text-gray-800 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-200">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm shrink-0">
                <Image
                  src="/logo/emblem.png"
                  alt="Baqiatullah Foundation Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-11 w-52 shrink-0">
                <Image
                  src="/logo/brand-text.png"
                  alt="Baqiatullah Foundation Pakistan"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Empowering orphaned and vulnerable children across Pakistan since 2016 through compassionate home care, quality schooling, and moral nourishment.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:border-[#008B8B] hover:text-[#008B8B] flex items-center justify-center text-xs font-bold text-gray-600 transition-colors shadow-2xs"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#008B8B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#008B8B] shrink-0 mt-0.5" />
                <span>House No.123/A Block, Nawab Town, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#008B8B] shrink-0" />
                <a href="tel:+923146500512" className="hover:text-[#008B8B] transition-colors">
                  +92 314 6500512
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#008B8B] shrink-0" />
                <a href="mailto:baqiatullahpak@gmail.com" className="hover:text-[#008B8B] transition-colors">
                  baqiatullahpak@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} Baqiatullah Foundation Pakistan. Registered Non-Profit.</p>
          <p className="flex items-center gap-1">
            <span>Dedicated to the care and future of children.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

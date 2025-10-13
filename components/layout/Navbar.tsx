'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'News' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-1' : 'bg-white/95 backdrop-blur-sm py-2'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="group-hover:scale-110 transition-transform">
              <img 
                src="/logo/logo-01.png" 
                alt="Baqiatullah Foundation Logo" 
                className="h-16 w-auto"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-urdu-bold text-[#03a1ac] leading-tight mb-2">
                بقیتہ اللہ فاؤنڈیشن پاکستان
              </span>
              <span className="text-2xl font-brand-bold text-[#03a1ac]">
                Baqiatullah Foundation Pakistan
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#03a1ac] font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#03a1ac] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
                    <Link href="/donate">
                      <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                        Donate Us
                      </Button>
                    </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
                    <Link href="/donate" className="block">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                        Donate Us
                      </Button>
                    </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

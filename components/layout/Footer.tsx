import Link from 'next/link';
import { Heart, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'News' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
            <footer className="bg-[#FFBF00] text-gray-900">
      <div className="w-full px-2 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/logo/logo-01.png" 
                alt="Baqiatullah Foundation Logo" 
                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto flex-shrink-0"
              />
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-sm sm:text-base md:text-lg font-urdu-bold text-[#03a1ac] leading-tight mb-1 sm:mb-2 truncate">
                          بقیتہ اللہ فاؤنڈیشن پاکستان
                        </span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-brand-bold text-[#03a1ac] truncate">
                          Baqiatullah Foundation Pakistan
                        </span>
                      </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Building brighter futures for children through compassionate care, quality education, and unwavering community support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#03a1ac]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-[#03a1ac] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#03a1ac]">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#03a1ac] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">House No.123/A Block, Nawab Town, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#03a1ac] flex-shrink-0" />
                <span className="text-gray-700 text-sm">+923146500512</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#03a1ac] flex-shrink-0" />
                <span className="text-gray-700 text-sm">baqiatullahpak@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#03a1ac]">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/baqiatullahfoundationofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/20 p-3 rounded-full hover:bg-[#03a1ac] hover:text-white transition-colors"
                title="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/baqiatullahfoundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/20 p-3 rounded-full hover:bg-[#03a1ac] hover:text-white transition-colors"
                title="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/baqiatullahfoundation/?originalSubdomain=pk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/20 p-3 rounded-full hover:bg-[#03a1ac] hover:text-white transition-colors"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@baqiatullahfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/20 p-3 rounded-full hover:bg-[#03a1ac] hover:text-white transition-colors"
                title="Subscribe to our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@baqiatullahfoundation?_t=ZS-90VxtwoCsgz&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/20 p-3 rounded-full hover:bg-[#03a1ac] hover:text-white transition-colors"
                title="Follow us on TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-700 text-sm">
            &copy; {new Date().getFullYear()} Baqiatullah Foundation. All rights reserved. Made with{' '}
            <Heart className="h-4 w-4 inline text-red-500 fill-red-500" /> for children by{' '}
            <a 
              href="https://portfolio-seven-flame-s35fi4x2xg.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#03a1ac] hover:bg-[#03a1ac] hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all font-semibold"
            >
              Ali Zain
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

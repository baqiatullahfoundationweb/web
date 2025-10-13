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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo/logo-01.png" 
                alt="Baqiatullah Foundation Logo" 
                className="h-14 w-auto"
              />
                      <div className="flex flex-col">
                        <span className="text-lg font-urdu-bold text-[#03a1ac] leading-tight">
                          بقیتہ اللہ فاؤنڈیشن پاکستان
                        </span>
                        <span className="text-xl font-brand-bold text-[#03a1ac]">
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
                <span className="text-gray-700 text-sm">House No.123/A-Block, Nawab Block A Town, Lahore, Pakistan</span>
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
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-700 text-sm">
            &copy; {new Date().getFullYear()} Baqiatullah Foundation. All rights reserved. Made with{' '}
            <Heart className="h-4 w-4 inline text-red-500 fill-red-500" /> for children.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

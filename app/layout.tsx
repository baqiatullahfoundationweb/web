import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://baqiatullahfoundation.org'),
  title: 'Baqiatullah Foundation | Building Brighter Futures for Children',
  description:
    'Baqiatullah Foundation provides a safe, nurturing environment for orphaned and vulnerable children. Join us in transforming lives through care, education, and community support.',
  keywords:
    'Baqiatullah Foundation, orphanage, child care, volunteer, donate, NGO, charity, child welfare, education, nutrition',
  authors: [{ name: 'Baqiatullah Foundation' }],
  icons: {
    icon: '/logo/logo-01.png',
    shortcut: '/logo/logo-01.png',
    apple: '/logo/logo-01.png',
  },
  openGraph: {
    title: 'Baqiatullah Foundation | Building Brighter Futures for Children',
    description:
      'Transforming lives through care, education, and community support',
    type: 'website',
    siteName: 'Baqiatullah Foundation',
    images: ['/logo/logo-01.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baqiatullah Foundation | Building Brighter Futures for Children',
    description:
      'Transforming lives through care, education, and community support',
    images: ['/logo/logo-01.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Baqiatullah Foundation",
              "alternateName": "بقیتہ اللہ فاؤنڈیشن پاکستان",
              "description": "Baqiatullah Foundation provides a safe, nurturing environment for orphaned and vulnerable children. Join us in transforming lives through care, education, and community support.",
              "url": "https://baqiatullahfoundation.org",
              "logo": "https://baqiatullahfoundation.org/logo/logo-01.png",
              "image": "https://baqiatullahfoundation.org/logo/logo-01.png",
              "foundingDate": "2016",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "House No.123/A Block, Nawab Town",
                "addressLocality": "Lahore",
                "addressCountry": "Pakistan"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+923146500512",
                "contactType": "customer service",
                "email": "baqiatullahpak@gmail.com"
              },
              "sameAs": [
                "https://www.facebook.com/baqiatullahfoundationofficial",
                "https://www.instagram.com/baqiatullahfoundation",
                "https://www.linkedin.com/company/baqiatullahfoundation",
                "https://www.youtube.com/@baqiatullahfoundation"
              ],
              "nonprofitStatus": "Nonprofit",
              "areaServed": "Pakistan",
              "serviceType": "Child Welfare",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Education Excellence Program",
                      "description": "Providing scholarships, tutoring, and educational resources"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Nutrition & Health Initiative",
                      "description": "Ensuring balanced meals and regular health check-ups"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Safe & Caring Home",
                      "description": "Family-like environment for orphaned children"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        <ErrorBoundary>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  );
}

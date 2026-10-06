import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import MapEmbed from "@/components/contact/MapEmbed";
import CtaBanner from "@/components/home/CtaBanner";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const isUrdu = lang === "ur";
  const canonicalUrl = `https://baqiatullahfoundation.org/${isUrdu ? "ur" : "eng"}/contact`;
  const title = isUrdu
    ? "رابطہ اور دورہ | بقیۃ اللہ فاؤنڈیشن پاکستان — نواب ٹاؤن لاہور مرکز"
    : "Contact & Visit Us | Baqiatullah Foundation Pakistan — Orphanage Lahore";
  const description = isUrdu
    ? "لاہور نواب ٹاؤن میں ہمارے مرکز کا پتہ، ہیلپ لائن 03146500512، ملاقات کے اوقات اور گوگل میپس لوکیشن۔"
    : "Contact Baqiatullah Foundation. Located at House No.123/A Block, Nawab Town, Lahore, Pakistan. Phone: +92 314 6500512.";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://baqiatullahfoundation.org/eng/contact",
        ur: "https://baqiatullahfoundation.org/ur/contact",
        "x-default": "https://baqiatullahfoundation.org/eng/contact",
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Baqiatullah Foundation Pakistan",
      images: [{
        url: "https://baqiatullahfoundation.org/gallery/89.jpg",
        width: 1200,
        height: 630,
        alt: "Baqiatullah Foundation Pakistan Orphanage Contact",
      }],
      locale: isUrdu ? "ur_PK" : "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://baqiatullahfoundation.org/gallery/89.jpg"],
    },
  };
}

export default async function LocalizedContactPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);
  const data = dict.contactPage;
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <ContactCards
        title={data.info.title}
        subtitle={data.info.subtitle}
        addressLabel={data.info.addressLabel}
        address={data.info.address}
        phoneLabel={data.info.phoneLabel}
        phone={data.info.phone}
        emailLabel={data.info.emailLabel}
        email={data.info.email}
        hoursLabel={data.info.hoursLabel}
        hours={data.info.hours}
      />
      <section className="pb-16 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <ContactForm {...data.form} />
      </section>
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <MapEmbed isUrdu={validLang === "ur"} />
      </section>
      <CtaBanner
        title={dict.cta.title}
        description={dict.cta.description}
        primaryButtonText={dict.cta.donateBtn}
        primaryButtonHref={donateHref}
        secondaryButtonText={dict.cta.contactBtn}
        secondaryButtonHref={contactHref}
      />
    </div>
  );
}

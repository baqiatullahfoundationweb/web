import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
import PrivacyContent from "@/components/privacy/PrivacyContent";
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
  const canonicalUrl = `https://baqiatullahfoundation.org/${isUrdu ? "ur" : "eng"}/privacy-policy`;
  return {
    title: isUrdu
      ? "پرائیویسی پالیسی اور تحفظ | بقیۃ اللہ فاؤنڈیشن پاکستان"
      : "Privacy Policy & Safeguarding | Baqiatullah Foundation Pakistan",
    description: isUrdu
      ? "عطیہ دہندگان کے کوائف کی رازداری، مالی شفافیت اور یتیم بچوں کے تحفظ سے متعلق بقیۃ اللہ فاؤنڈیشن کی آفیشل پالیسی۔"
      : "Official privacy policy, donor data confidentiality, financial transparency, and child safeguarding standards of Baqiatullah Foundation Pakistan.",
    keywords: [
      "Privacy Policy Baqiatullah Foundation",
      "Child Safeguarding Pakistan",
      "Donor Data Protection Lahore",
      "Non-Profit Privacy Standards",
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://baqiatullahfoundation.org/eng/privacy-policy",
        ur: "https://baqiatullahfoundation.org/ur/privacy-policy",
        "x-default": "https://baqiatullahfoundation.org/eng/privacy-policy",
      },
    },
  };
}

export default async function LocalizedPrivacyPolicyPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);
  const data = dict.privacyPolicyPage;
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <PrivacyContent
        data={data}
        isUrdu={validLang === "ur"}
        contactHref={contactHref}
      />
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

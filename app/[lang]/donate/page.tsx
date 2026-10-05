import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
import PaymentMethods from "@/components/donate/PaymentMethods";
import TransparencyBreakdown from "@/components/donate/TransparencyBreakdown";
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
  const canonicalUrl = `https://baqiatullahfoundation.org/${isUrdu ? "ur" : "eng"}/donate`;
  const title = isUrdu
    ? "لاہور یتیم خانے کو عطیات و زکوٰۃ | بقیۃ اللہ فاؤنڈیشن پاکستان"
    : "Donate to Orphanage Lahore | Zakat Eligible Child Sponsorship Pakistan";
  const description = isUrdu
    ? "بینک الحبیب اور راست کے ذریعے 100 فیصد مستحقِ زکوٰۃ یتیم بچوں کی کفالت اور فلاحی عطیات کی سرکاری تفصیلات۔"
    : "Official donation channels for Baqiatullah Foundation Pakistan. 100% Zakat-eligible child sponsorship, Bank Al-Habib wire transfer, and RAAST / IBAN.";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://baqiatullahfoundation.org/eng/donate",
        ur: "https://baqiatullahfoundation.org/ur/donate",
        "x-default": "https://baqiatullahfoundation.org/eng/donate",
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
        alt: "Donate to Baqiatullah Foundation Pakistan",
        type: "image/jpeg",
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

export default async function LocalizedDonatePage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);
  const data = dict.donatePage;
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <PaymentMethods
        title={data.payment.title}
        highlight={data.payment.highlight}
        subtitle={data.payment.subtitle}
        bankTitle={data.payment.bankTitle}
        bankSubtitle={data.payment.bankSubtitle}
        accountNameLabel={data.payment.accountNameLabel}
        accountName={data.payment.accountName}
        accountNumberLabel={data.payment.accountNumberLabel}
        accountNumber={data.payment.accountNumber}
        ibanLabel={data.payment.ibanLabel}
        iban={data.payment.iban}
        bankNameLabel={data.payment.bankNameLabel}
        bankName={data.payment.bankName}
        branchLabel={data.payment.branchLabel}
        branch={data.payment.branch}
        swiftLabel={data.payment.swiftLabel}
        swift={data.payment.swift}
        receiptNotice={data.payment.receiptNotice}
        copyButtonText={data.payment.copyButtonText}
        copiedButtonText={data.payment.copiedButtonText}
        isUrdu={validLang === "ur"}
      />
      <TransparencyBreakdown
        title={data.transparency.title}
        highlight={data.transparency.highlight}
        subtitle={data.transparency.subtitle}
        stats={data.transparency.stats}
        breakdown={data.transparency.breakdown}
        isUrdu={validLang === "ur"}
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

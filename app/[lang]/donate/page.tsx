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
  return {
    title: isUrdu ? "عطیات اور تعاون | بقیۃ اللہ فاؤنڈیشن پاکستان" : "Donate & Support | Baqiatullah Foundation Pakistan",
    description: isUrdu
      ? "بینک الحبیب، جیز کیش اور ایزی پیسہ کے ذریعے تصدیق شدہ فلاحی عطیات کی تفصیلات۔"
      : "Official donation channels for Baqiatullah Foundation. Bank Al-Habib wire transfer, JazzCash, Easypaisa.",
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
        bankNameLabel={data.payment.bankNameLabel}
        bankName={data.payment.bankName}
        branchLabel={data.payment.branchLabel}
        branch={data.payment.branch}
        swiftLabel={data.payment.swiftLabel}
        swift={data.payment.swift}
        instantWalletBadge={data.payment.instantWalletBadge}
        jazzCashTitle={data.payment.jazzCashTitle}
        jazzCashNumber={data.payment.jazzCashNumber}
        easypaisaTitle={data.payment.easypaisaTitle}
        easypaisaNumber={data.payment.easypaisaNumber}
        receiptNotice={data.payment.receiptNotice}
        copyButtonText={data.payment.copyButtonText}
        copiedButtonText={data.payment.copiedButtonText}
      />
      <TransparencyBreakdown
        title={data.transparency.title}
        highlight={data.transparency.highlight}
        subtitle={data.transparency.subtitle}
        stats={data.transparency.stats}
        breakdown={data.transparency.breakdown}
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

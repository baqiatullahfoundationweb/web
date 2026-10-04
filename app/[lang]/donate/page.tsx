import type { Metadata } from "next";
import { LOCALES } from "@/lib/i18n";
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
  const isUrdu = lang === "ur";

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <PaymentMethods />
      <TransparencyBreakdown />
      <CtaBanner
        primaryButtonHref={isUrdu ? "/ur/donate" : "/eng/donate"}
        secondaryButtonHref={isUrdu ? "/ur/contact" : "/eng/contact"}
      />
    </div>
  );
}

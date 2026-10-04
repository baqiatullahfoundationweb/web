import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
import GalleryGrid from "@/components/gallery/GalleryGrid";
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
    title: isUrdu ? "تصویری گیلری | بقیۃ اللہ فاؤنڈیشن پاکستان" : "Photo Gallery | Baqiatullah Foundation Pakistan",
    description: isUrdu
      ? "فاؤنڈیشن کے بچوں کی تعلیمی، تربیتی اور سیلاب ریلیف کی اصل تصاویر دیکھیں۔"
      : "View over 80 authentic photos capturing moments of education, daily care, flood relief.",
  };
}

export default async function LocalizedGalleryPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);
  const data = dict.galleryPage;
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <GalleryGrid
        title={data.title}
        highlight={data.highlight}
        subtitle={data.subtitle}
        categories={data.categories}
        loadMoreBtnText={data.loadMoreBtn}
        remainingText={data.remainingText}
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

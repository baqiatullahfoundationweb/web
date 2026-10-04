import type { Metadata } from "next";
import { LOCALES } from "@/lib/i18n";
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
  const isUrdu = lang === "ur";

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <GalleryGrid />
      <CtaBanner
        primaryButtonHref={isUrdu ? "/ur/donate" : "/eng/donate"}
        secondaryButtonHref={isUrdu ? "/ur/contact" : "/eng/contact"}
      />
    </div>
  );
}

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
  const canonicalUrl = `https://baqiatullahfoundation.org/${isUrdu ? "ur" : "eng"}/gallery`;
  const title = isUrdu
    ? "تصویری گیلری | بقیۃ اللہ فاؤنڈیشن پاکستان — یتیم بچوں کی زندگی کی جھلکیاں"
    : "Photo Gallery | Baqiatullah Foundation Pakistan — Life at Orphan Sanctuary";
  const description = isUrdu
    ? "فاؤنڈیشن کے بچوں کی تعلیمی، تربیتی اور سیلاب ریلیف کی اصل تصاویر دیکھیں۔ لاہور یتیم خانہ۔"
    : "View over 80 authentic photos capturing moments of education, daily care, sports, and emergency flood relief in Pakistan.";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://baqiatullahfoundation.org/eng/gallery",
        ur: "https://baqiatullahfoundation.org/ur/gallery",
        "x-default": "https://baqiatullahfoundation.org/eng/gallery",
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
        alt: "Baqiatullah Foundation Photo Moments",
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

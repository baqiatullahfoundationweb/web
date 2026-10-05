import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import ValuesGrid from "@/components/about/ValuesGrid";
import TeamSection from "@/components/about/TeamSection";
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
  const canonicalUrl = `https://baqiatullahfoundation.org/${isUrdu ? "ur" : "eng"}/about`;
  const title = isUrdu
    ? "ہمارے بارے میں | بقیۃ اللہ فاؤنڈیشن پاکستان — یتیم خانے کی تاریخ و قیادت"
    : "About Us | Baqiatullah Foundation Pakistan — Orphan Care & Leadership";
  const description = isUrdu
    ? "ہماری فاؤنڈیشن کا 8 سالہ فلاحی سفر، عزم، وژن اور بااعتماد قیادت کا تعارف۔ رجسٹرڈ این جی او لاہور۔"
    : "Learn about our 8-year journey, mission, vision, and leadership team providing holistic orphan care in Lahore, Pakistan.";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://baqiatullahfoundation.org/eng/about",
        ur: "https://baqiatullahfoundation.org/ur/about",
        "x-default": "https://baqiatullahfoundation.org/eng/about",
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
        alt: "Baqiatullah Foundation Leadership & Journey",
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
      creator: "@baqiatullahpak",
    },
  };
}

export default async function LocalizedAboutPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);
  const data = dict.aboutPage;
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <OurStory
        title={data.story.title}
        highlight={data.story.highlight}
        subtitle={data.story.subtitle}
        badge={data.story.badge}
        heading={data.story.heading}
        p1={data.story.p1}
        p2={data.story.p2}
        p3={data.story.p3}
      />
      <MissionVision
        missionTitle={data.missionVision.missionTitle}
        missionDesc={data.missionVision.missionDesc}
        visionTitle={data.missionVision.visionTitle}
        visionDesc={data.missionVision.visionDesc}
      />
      <ValuesGrid
        title={data.values.title}
        highlight={data.values.highlight}
        subtitle={data.values.subtitle}
        items={data.values.items}
      />
      <TeamSection
        title={data.team.title}
        highlight={data.team.highlight}
        subtitle={data.team.subtitle}
        members={data.team.members}
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

import type { Metadata } from "next";
import { LOCALES } from "@/lib/i18n";
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
  return {
    title: isUrdu ? "ہمارے بارے میں | بقیۃ اللہ فاؤنڈیشن پاکستان" : "About Us | Baqiatullah Foundation Pakistan",
    description: isUrdu
      ? "ہماری فاؤنڈیشن کا 8 سالہ فلاحی سفر، عزم، وژن اور بااعتماد قیادت کا تعارف۔"
      : "Learn about our 8-year journey, mission, vision, and leadership team providing holistic orphan care.",
  };
}

export default async function LocalizedAboutPage({ params }: PageProps) {
  const { lang } = await params;
  const isUrdu = lang === "ur";

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <OurStory />
      <MissionVision />
      <ValuesGrid />
      <TeamSection />
      <CtaBanner
        primaryButtonHref={isUrdu ? "/ur/donate" : "/eng/donate"}
        secondaryButtonHref={isUrdu ? "/ur/contact" : "/eng/contact"}
      />
    </div>
  );
}

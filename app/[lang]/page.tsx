import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
import HeroSlider from "@/components/home/HeroSlider";
import ImpactSection from "@/components/home/ImpactSection";
import HomeAbout from "@/components/home/HomeAbout";
import FeaturedCauses from "@/components/home/FeaturedCauses";
import VolunteersSection from "@/components/home/VolunteersSection";
import EventsSection from "@/components/home/EventsSection";
import GetInvolved from "@/components/home/GetInvolved";
import ProjectSpotlight from "@/components/home/ProjectSpotlight";
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
    title: isUrdu
      ? "بقیۃ اللہ فاؤنڈیشن پاکستان | یتیم بچوں کی پرورش اور تعلیم"
      : "Baqiatullah Foundation Pakistan | Nurturing Care & Education",
    description: isUrdu
      ? "بقیۃ اللہ فاؤنڈیشن پاکستان کی آفیشل ویب سائٹ۔ 250 سے زائد یتیم بچوں کی رہائش، تعلیم، روزانہ خوراک اور سیلاب ریلیف خدمات۔"
      : "Official website of Baqiatullah Foundation Pakistan. Providing compassionate home care, quality education, meals, and emergency flood relief.",
  };
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);

  return (
    <div className="flex flex-col">
      <HeroSlider slides={dict.hero.slides} />
      <ImpactSection
        metrics={dict.impact.metrics}
        title={dict.impact.title}
        highlight={dict.impact.highlight}
        subtitle={dict.impact.subtitle}
        eyebrow={dict.impact.eyebrow}
      />
      <HomeAbout
        title={dict.about.title}
        description={dict.about.description}
        eyebrow={dict.about.eyebrow}
        establishedYear={dict.about.establishedYear}
      />
      <FeaturedCauses
        causes={dict.causes.items}
        title={dict.causes.title}
        highlight={dict.causes.highlight}
        subtitle={dict.causes.subtitle}
        eyebrow={dict.causes.eyebrow}
      />
      <VolunteersSection
        title={dict.volunteers.title}
        highlight={dict.volunteers.highlight}
        subtitle={dict.volunteers.subtitle}
        eyebrow={dict.volunteers.eyebrow}
      />
      <EventsSection
        title={dict.events.title}
        highlight={dict.events.highlight}
        subtitle={dict.events.subtitle}
        eyebrow={dict.events.eyebrow}
      />
      <GetInvolved
        title={dict.getInvolved.title}
        highlight={dict.getInvolved.highlight}
        subtitle={dict.getInvolved.subtitle}
        eyebrow={dict.getInvolved.eyebrow}
      />
      <ProjectSpotlight
        badge={dict.spotlight.badge}
        title={dict.spotlight.title}
        description={dict.spotlight.description}
      />
      <CtaBanner
        badge={dict.cta.badge}
        title={dict.cta.title}
        description={dict.cta.description}
        primaryButtonText={dict.cta.donateBtn}
        primaryButtonHref={validLang === "ur" ? "/ur/donate" : "/eng/donate"}
        secondaryButtonText={dict.cta.contactBtn}
        secondaryButtonHref={validLang === "ur" ? "/ur/contact" : "/eng/contact"}
      />
    </div>
  );
}

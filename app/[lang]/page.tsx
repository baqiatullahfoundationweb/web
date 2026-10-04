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
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;
  const aboutHref = `/${validLang}/about`;
  const projectsHref = `/${validLang}/projects`;

  return (
    <div className="flex flex-col">
      <HeroSlider slides={dict.hero.slides} />
      <ImpactSection
        metrics={dict.impact.metrics}
        title={dict.impact.title}
        highlight={dict.impact.highlight}
        subtitle={dict.impact.subtitle}
      />
      <HomeAbout
        title={dict.about.title}
        description={dict.about.description}
        establishedYear={dict.about.establishedYear}
        card1Title={dict.about.card1Title}
        card1Desc={dict.about.card1Desc}
        card2Title={dict.about.card2Title}
        card2Desc={dict.about.card2Desc}
        storyBtnText={dict.about.storyBtn}
        storyHref={aboutHref}
        visitBtnText={dict.about.visitBtn}
        visitHref={contactHref}
      />
      <FeaturedCauses
        causes={dict.causes.items}
        title={dict.causes.title}
        highlight={dict.causes.highlight}
        subtitle={dict.causes.subtitle}
        raisedLabel={dict.causes.raisedLabel}
        goalLabel={dict.causes.goalLabel}
        fundedLabel={dict.causes.fundedLabel}
        donateBtnText={dict.causes.donateBtn}
        detailsBtnText={dict.causes.detailsBtn}
        donateHref={donateHref}
      />
      <VolunteersSection
        volunteers={dict.volunteers.items}
        title={dict.volunteers.title}
        highlight={dict.volunteers.highlight}
        subtitle={dict.volunteers.subtitle}
        badgeText={dict.volunteers.badge}
        calloutTitle={dict.volunteers.calloutTitle}
        calloutDesc={dict.volunteers.calloutDesc}
        calloutBtnText={dict.volunteers.calloutBtn}
        contactHref={contactHref}
      />
      <EventsSection
        events={dict.events.items}
        title={dict.events.title}
        highlight={dict.events.highlight}
        subtitle={dict.events.subtitle}
        attendBtnText={dict.events.attendBtn}
        contactHref={contactHref}
      />
      <GetInvolved
        pathways={dict.getInvolved.pathways}
        title={dict.getInvolved.title}
        highlight={dict.getInvolved.highlight}
        subtitle={dict.getInvolved.subtitle}
      />
      <ProjectSpotlight
        title={dict.spotlight.title}
        description={dict.spotlight.description}
        stat1Val={dict.spotlight.stat1Val}
        stat1Lbl={dict.spotlight.stat1Lbl}
        stat2Val={dict.spotlight.stat2Val}
        stat2Lbl={dict.spotlight.stat2Lbl}
        feat1={dict.spotlight.feat1}
        feat2={dict.spotlight.feat2}
        exploreBtnText={dict.spotlight.exploreBtn}
        exploreHref={projectsHref}
        supportBtnText={dict.spotlight.supportBtn}
        supportHref={donateHref}
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

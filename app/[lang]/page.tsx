import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
import HeroSlider from "@/components/home/HeroSlider";
import ImpactSection from "@/components/home/ImpactSection";
import HouseClipProjectsGrid from "@/components/projects/HouseClipProjectsGrid";
import HomeAbout from "@/components/home/HomeAbout";
import FeaturedCauses from "@/components/home/FeaturedCauses";
import VolunteersSection from "@/components/home/VolunteersSection";
import EventsSection from "@/components/home/EventsSection";
import GetInvolved from "@/components/home/GetInvolved";
import ProjectSpotlight from "@/components/home/ProjectSpotlight";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import StructuredData from "@/components/home/StructuredData";
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
  const canonicalUrl = `https://baqiatullahfoundation.org/${isUrdu ? "ur" : "eng"}`;

  return {
    title: isUrdu
      ? "بقیۃ اللہ فاؤنڈیشن پاکستان | لاہور یتیم خانے کو عطیات اور زکوٰۃ کفالت"
      : "Baqiatullah Foundation Pakistan | Donate to Orphanage Lahore | Zakat Eligible NGO",
    description: isUrdu
      ? "لاہور میں مستند فلاحی این جی او (پنجاب چیریٹی کمیشن PB-LHR-2016-8921)۔ 250+ یتیم بچوں کی رہائش، زکوٰۃ کے مستحق تعلیمی اسکالرشپ، روزانہ کھانا اور سیلاب ریلیف۔"
      : "Registered NGO in Lahore (Punjab Charity Commission PB-LHR-2016-8921). Donate to Orphanage Lahore: 100% Zakat-eligible child sponsorship, accredited schooling, meals, and relief.",
    keywords: [
      "Donate to Orphanage Lahore",
      "Zakat Eligible Child Sponsorship Pakistan",
      "NGO in Lahore",
      "Baqiatullah Foundation Pakistan",
      "Orphan Care Lahore",
      "Sponsor a Child Pakistan",
      "Sadqah Jariyah Pakistan",
      "Punjab Charity Commission Registered NGO",
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://baqiatullahfoundation.org/eng",
        ur: "https://baqiatullahfoundation.org/ur",
        "x-default": "https://baqiatullahfoundation.org/eng",
      },
    },
    openGraph: {
      title: isUrdu
        ? "بقیۃ اللہ فاؤنڈیشن پاکستان | لاہور یتیم خانہ و فلاحی این جی او"
        : "Baqiatullah Foundation Pakistan | Donate to Orphanage Lahore",
      description: isUrdu
        ? "250 سے زائد یتیم بچوں کی رہائش، زکوٰۃ کے مستحق تعلیمی وظائف اور مفت علاج۔"
        : "Nurturing 250+ orphans in Lahore through 100% Zakat-eligible sponsorship, education, and shelter.",
      url: canonicalUrl,
      siteName: "Baqiatullah Foundation Pakistan",
      images: [
        {
          url: "https://baqiatullahfoundation.org/gallery/89.jpg",
          width: 1200,
          height: 630,
          alt: "Baqiatullah Foundation Pakistan Orphanage in Lahore",
        },
      ],
      locale: isUrdu ? "ur_PK" : "en_PK",
      type: "website",
    },
  };
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const isUrdu = validLang === "ur";
  const dict = getDictionary(validLang);
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;
  const aboutHref = `/${validLang}/about`;
  const projectsHref = `/${validLang}/projects`;

  return (
    <div className="flex flex-col">
      {/* JSON-LD Schemas for GEO and LLMO: NonprofitOrganization, FAQPage, Event, DonateAction */}
      <StructuredData lang={validLang} />

      {/* Main Single Primary H1 Hero Stage */}
      <HeroSlider slides={dict.hero.slides} />

      <ImpactSection
        metrics={dict.impact.metrics}
        title={dict.impact.title}
        highlight={dict.impact.highlight}
        subtitle={dict.impact.subtitle}
      />

      <HouseClipProjectsGrid
        isUrdu={isUrdu}
        className="bg-gradient-to-b from-white/70 via-transparent to-transparent border-b border-primary/10"
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

      {/* AEO: Direct Answer FAQ Section targeting Perplexity, Gemini, ChatGPT, and Google AI Overviews */}
      <HomeFaqSection isUrdu={isUrdu} />

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

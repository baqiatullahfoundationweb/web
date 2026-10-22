import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
import OngoingProjects from "@/components/projects/OngoingProjects";
import HouseClipProjectsGrid from "@/components/projects/HouseClipProjectsGrid";
import CompletedProjects from "@/components/projects/CompletedProjects";
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
  const canonicalUrl = `https://baqiatullahfoundation.org/${isUrdu ? "ur" : "eng"}/projects`;
  const title = isUrdu
    ? "فلاحی منصوبے | بقیۃ اللہ فاؤنڈیشن پاکستان — یتیم بچوں کی کفالت و تعلیم"
    : "Our Welfare Projects | Baqiatullah Foundation Pakistan — Orphan Care Programs";
  const description = isUrdu
    ? "لاہور میں یتیم بچوں کی معیاری تعلیم، روزانہ متوازن خوراک، آئی ٹی لیب اور ہنگامی ریلیف کے بنیادی منصوبے۔"
    : "Explore our ongoing and completed welfare projects in orphan education, child nutrition, IT labs, and flood relief across Pakistan.";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://baqiatullahfoundation.org/eng/projects",
        ur: "https://baqiatullahfoundation.org/ur/projects",
        "x-default": "https://baqiatullahfoundation.org/eng/projects",
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Baqiatullah Foundation Pakistan",
      images: [{
        url: "https://baqiatullahfoundation.org/gallery/49.jpg",
        width: 1200,
        height: 630,
        alt: "Baqiatullah Foundation Welfare Projects",
        type: "image/jpeg",
      }],
      locale: isUrdu ? "ur_PK" : "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://baqiatullahfoundation.org/gallery/49.jpg"],
    },
  };
}

export default async function LocalizedProjectsPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);
  const data = dict.projectsPage;
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;

  const isUrdu = validLang === "ur";

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <HouseClipProjectsGrid isUrdu={isUrdu} />
      <OngoingProjects
        title={data.ongoing.title}
        highlight={data.ongoing.highlight}
        subtitle={data.ongoing.subtitle}
        fundedLabel={data.ongoing.fundedLabel}
        supportBtnText={data.ongoing.supportBtn}
        supportHref={donateHref}
        items={data.ongoing.items.map((item) => ({
          ...item,
          detailHref: item.detailHref,
        }))}
      />
      <CompletedProjects
        title={data.completed.title}
        highlight={data.completed.highlight}
        subtitle={data.completed.subtitle}
        items={data.completed.items}
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

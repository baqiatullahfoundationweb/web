import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
import OngoingProjects from "@/components/projects/OngoingProjects";
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
  return {
    title: isUrdu ? "منصوبہ جات | بقیۃ اللہ فاؤنڈیشن پاکستان" : "Our Projects | Baqiatullah Foundation Pakistan",
    description: isUrdu
      ? "یتیم بچوں کی تعلیم، روزانہ خوراک، ہاسٹل کی توسیع اور ہنر سکھانے کے منصوبے۔"
      : "Explore our ongoing and completed projects in child education, daily nutrition, dorm expansions.",
  };
}

export default async function LocalizedProjectsPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);
  const data = dict.projectsPage;
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <OngoingProjects
        title={data.ongoing.title}
        highlight={data.ongoing.highlight}
        subtitle={data.ongoing.subtitle}
        fundedLabel={data.ongoing.fundedLabel}
        supportBtnText={data.ongoing.supportBtn}
        supportHref={donateHref}
        items={data.ongoing.items}
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

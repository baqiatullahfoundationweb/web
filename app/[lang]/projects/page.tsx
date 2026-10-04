import type { Metadata } from "next";
import { LOCALES } from "@/lib/i18n";
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
  const isUrdu = lang === "ur";

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <OngoingProjects />
      <CompletedProjects />
      <CtaBanner
        primaryButtonHref={isUrdu ? "/ur/donate" : "/eng/donate"}
        secondaryButtonHref={isUrdu ? "/ur/contact" : "/eng/contact"}
      />
    </div>
  );
}

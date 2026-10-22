import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
import { BAQIATULLAH_PROJECTS, PROJECT_DETAILS } from "@/components/projects/programsData";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

interface PageProps {
  params: Promise<{ lang: string; id: string }>;
}

// Pre-generate all [lang]/projects/[id] paths at build time
export function generateStaticParams() {
  const params: Array<{ lang: string; id: string }> = [];
  for (const lang of LOCALES) {
    for (const project of BAQIATULLAH_PROJECTS) {
      params.push({ lang, id: project.id });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, id } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const isUrdu = validLang === "ur";
  const detail = PROJECT_DETAILS[id];

  if (!detail) {
    return { title: "Project Not Found | Baqiatullah Foundation" };
  }

  const title = isUrdu
    ? `${detail.titleUrdu} | بقیۃ اللہ فاؤنڈیشن پاکستان`
    : `${detail.title} | Baqiatullah Foundation`;

  const description = isUrdu
    ? detail.descriptionUrdu[0]
    : detail.description[0];

  const canonicalUrl = `https://baqiatullahfoundation.org/${validLang}/projects/${id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `https://baqiatullahfoundation.org/eng/projects/${id}`,
        ur: `https://baqiatullahfoundation.org/ur/projects/${id}`,
        "x-default": `https://baqiatullahfoundation.org/eng/projects/${id}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Baqiatullah Foundation Pakistan",
      images: [
        {
          url: `https://baqiatullahfoundation.org${detail.heroImage.src}`,
          width: 1200,
          height: 630,
          alt: detail.heroImage.alt,
          type: "image/jpeg",
        },
      ],
      locale: isUrdu ? "ur_PK" : "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://baqiatullahfoundation.org${detail.heroImage.src}`],
    },
  };
}

export default async function LocalizedProjectDetailPage({ params }: PageProps) {
  const { lang, id } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const isUrdu = validLang === "ur";

  // Look up detail data — 404 if project id is unknown
  const detail = PROJECT_DETAILS[id];
  if (!detail) notFound();

  return (
    <ProjectDetailPage project={detail} lang={validLang} isUrdu={isUrdu} />
  );
}

import { redirect } from "next/navigation";
import { LOCALES } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function LocalizedPrivacyAliasPage({ params }: PageProps) {
  const { lang } = await params;
  redirect(`/${lang}/privacy-policy`);
}

import { getDictionary, LOCALES, Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);

  return (
    <div
      dir={dict.dir}
      lang={validLang}
      className={validLang === "ur" ? "lang-ur" : "lang-en"}
      style={{
        fontFamily: validLang === "ur" ? "'Unwan Unicode', 'Noto Nastaliq Urdu', serif" : "var(--font-poppins), 'Poppins', sans-serif"
      }}
    >
      {children}
    </div>
  );
}

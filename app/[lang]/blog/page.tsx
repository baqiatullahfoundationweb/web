import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CtaBanner from "@/components/home/CtaBanner";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";

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
    title: isUrdu ? "خبریں اور فلاحی رپورٹس | بقیۃ اللہ فاؤنڈیشن" : "News & Relief | Baqiatullah Foundation Pakistan",
    description: isUrdu
      ? "سیلاب ریلیف، یتیم بچوں کی تعلیمی پیش رفت اور زمینی امدادی سرگرمیوں کی تفصیلی رپورٹس۔"
      : "Read the latest operational reports, flood relief campaigns, and community welfare updates.",
  };
}

export default async function LocalizedBlogPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);
  const data = dict.blogPage;
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <SectionHeader
          title={data.title}
          highlight={data.highlight}
          subtitle={data.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.posts.map((post) => (
            <Link
              key={post.id}
              href={`/${validLang}/blog/${post.id}`}
              className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden group flex flex-col justify-between border border-primary/20 shadow-xl hover:shadow-2xl transition-all"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-600"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFBF00] text-gray-950 shadow-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-primary" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-950 group-hover:text-primary transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center text-xs font-bold text-primary">
                <span>{data.readFull}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

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

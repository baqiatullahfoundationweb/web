import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CtaBanner from "@/components/home/CtaBanner";
import { BLOG_POSTS } from "@/lib/blogData";
import { LOCALES } from "@/lib/i18n";

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
  const isUrdu = lang === "ur";

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <SectionHeader
          eyebrow={isUrdu ? "میدانی رپورٹس" : "Field Reports"}
          title={isUrdu ? "خبریں اور امدادی" : "News & Humanitarian"}
          highlight={isUrdu ? "پیش رفت" : "Updates"}
          subtitle={isUrdu ? "سیلاب ریلیف اور بچوں کی دیکھ بھال کی مکمل شفاف زمینی رپورٹس۔" : "Transparent reporting on our ground operations, emergency flood relief drives, and milestones achieved."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              href={`/${lang}/blog/${post.id}`}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/80 shadow-lg hover:shadow-2xl"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-600"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-amber text-gray-950 shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-primary" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center text-xs font-semibold text-primary">
                <span>{isUrdu ? "مکمل رپورٹ پڑھیں" : "Read Full Report"}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner
        primaryButtonHref={isUrdu ? "/ur/donate" : "/eng/donate"}
        secondaryButtonHref={isUrdu ? "/ur/contact" : "/eng/contact"}
      />
    </div>
  );
}

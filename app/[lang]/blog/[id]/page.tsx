import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, CheckCircle2, ShieldCheck, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/blogData";
import { LOCALES } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string; id: string }>;
}

export function generateStaticParams() {
  const params: Array<{ lang: string; id: string }> = [];
  for (const lang of LOCALES) {
    for (const post of BLOG_POSTS) {
      params.push({ lang, id: post.id });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);
  if (!post) return { title: "Post Not Found | Baqiatullah Foundation" };
  return {
    title: `${post.title} | Baqiatullah Foundation Pakistan`,
    description: post.excerpt,
  };
}

export default async function LocalizedBlogPostPage({ params }: PageProps) {
  const { lang, id } = await params;
  const isUrdu = lang === "ur";
  const post = BLOG_POSTS.find((p) => p.id === id);
  if (!post) notFound();

  return (
    <article className="pt-24 sm:pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6">
      <Link
        href={`/${lang}/blog`}
        className="inline-flex items-center text-xs font-semibold text-primary hover:underline mb-8 interactive-tap"
      >
        <ArrowLeft className="w-4 h-4 mr-1.5" />
        <span>{isUrdu ? "خبروں پر واپس جائیں" : "Back to News & Reports"}</span>
      </Link>

      <div className="space-y-4 mb-8">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber text-gray-950 inline-block shadow-2xs">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-xs text-gray-500 pt-2 border-b border-gray-100 pb-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            {post.author}
          </span>
        </div>
      </div>

      <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl mb-10 border border-white/60">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed mb-10">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-primary/20 mb-10 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span>{isUrdu ? "تقسیم کردہ ضروری اشیاء" : "Essential Aid Distributed"}</span>
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {post.bulletPoints.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/15 to-amber/20 border border-primary/20 text-center space-y-4 shadow-xl">
        <h4 className="text-2xl font-bold text-gray-900">
          {isUrdu ? "ہنگامی انسانی امداد میں تعاون کریں" : "Support Ongoing Humanitarian Relief"}
        </h4>
        <p className="text-sm text-gray-600 max-w-lg mx-auto">
          {isUrdu ? "سیلاب متاثرہ خاندانوں اور یتیم بچوں کی مستقل کفالت کے لیے فنڈ میں حصہ ڈالیں۔" : "Help us replenish emergency rations and sponsor vulnerable children impacted by climate disaster."}
        </p>
        <div className="pt-2">
          <Button href={isUrdu ? "/ur/donate" : "/eng/donate"} variant="donate" size="lg">
            <Heart className="w-4 h-4 fill-current mr-1.5" />
            <span>{isUrdu ? "ریلیف فنڈ میں عطیہ دیں" : "Donate to Relief Fund"}</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

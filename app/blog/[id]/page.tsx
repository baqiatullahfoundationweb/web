import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, CheckCircle2, ShieldCheck, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/blogData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: post.id }));
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

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);
  if (!post) notFound();

  return (
    <article className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
      <Link
        href="/blog"
        className="inline-flex items-center text-xs font-semibold text-[#008B8B] hover:underline mb-8 interactive-tap"
      >
        <ArrowLeft className="w-4 h-4 mr-1.5" />
        Back to News & Reports
      </Link>

      {/* Header Info */}
      <div className="space-y-4 mb-8">
        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFBF00] text-gray-950 inline-block shadow-2xs">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-xs text-gray-500 pt-2 border-b border-gray-100 pb-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#008B8B]" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#008B8B]" />
            {post.author}
          </span>
        </div>
      </div>

      {/* Hero Media */}
      <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-md mb-10 border border-gray-200">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
      </div>

      {/* Narrative Prose */}
      <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed mb-10">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Supplies Distributed Bento */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gray-200 mb-10">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#008B8B]" />
          Essential Aid Distributed
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {post.bulletPoints.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Impact Numbers */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBFA] border border-[#EAEAEA] mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Mission Reach & Verified Impact</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {post.impactPoints.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-gray-800">
              <span className="w-2 h-2 rounded-full bg-[#008B8B]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-[#008B8B]/10 to-[#FFBF00]/15 border border-[#008B8B]/20 text-center space-y-4">
        <h4 className="text-2xl font-bold text-gray-900">Support Ongoing Humanitarian Relief</h4>
        <p className="text-sm text-gray-600 max-w-lg mx-auto">
          Help us replenish emergency rations and sponsor vulnerable children impacted by climate disaster.
        </p>
        <div className="pt-2">
          <Button href="/donate" variant="donate" size="lg">
            <Heart className="w-4 h-4 fill-current mr-1.5" />
            <span>Donate to Relief Fund</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

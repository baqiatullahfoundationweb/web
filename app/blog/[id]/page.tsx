import { redirect } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blogData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: post.id }));
}

export default async function RootBlogPostPage({ params }: PageProps) {
  const { id } = await params;
  redirect(`/eng/blog/${id}`);
}

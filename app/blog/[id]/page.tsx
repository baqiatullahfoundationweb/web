import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return [
    { id: '1' },
  ];
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}

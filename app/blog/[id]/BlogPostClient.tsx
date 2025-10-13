'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogPostClient() {
  const params = useParams();
  const id = params.id as string;

  const posts = [
    {
      id: '1',
      title: 'Flood Relief Campaign Jhang',
      content: `Baqiatullah Foundation successfully completed a comprehensive flood relief campaign in the remote areas of Jhang, providing essential support to 300 families affected by devastating floods. This humanitarian effort represents our commitment to serving communities in their time of greatest need.

The campaign focused on delivering basic necessities to families who had lost their homes, belongings, and livelihoods due to the floodwaters. Our team worked tirelessly to reach the most vulnerable communities in areas that were difficult to access due to damaged infrastructure.

Essential supplies distributed included:

• Food packages with rice, flour, cooking oil, and canned goods
• Clean drinking water and water purification tablets
• Emergency medical supplies and first aid kits
• Blankets, clothing, and temporary shelter materials
• Hygiene kits with soap, toothpaste, and sanitary items

Impact and Reach:
- 300 families received comprehensive relief packages
- 1,200+ individuals directly benefited from our support
- 15 remote villages reached across Jhang district
- 50 volunteers participated in distribution efforts

The relief operation was made possible through the generous support of our donors and the dedication of our volunteers who braved challenging conditions to reach affected families. Many families expressed deep gratitude for the timely assistance during their most difficult moments.

This campaign demonstrates Baqiatullah Foundation's commitment to humanitarian service beyond our regular programs. We believe in standing with communities during crises and providing hope when it's needed most.`,
      image: '/gallery/88.jpeg',
      category: 'Flood Relief Campaign 2025',
      date: 'September 20, 2025',
      author: 'Abbas Raza',
    },
  ];

  const post = posts.find((p) => p.id === id) || posts[0];

  return (
    <div className="pt-16">
      <section className="relative py-12 bg-gradient-to-br from-[#03a1ac]/10 via-white to-[#FFBF00]/10">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 hover:bg-transparent p-0 h-auto">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Button>
          </Link>
        </div>
      </section>

      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-[#FFBF00] text-gray-900 hover:bg-[#FFBF00]/90">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
              <div className="flex items-center gap-6 text-gray-600">
                <span className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-[#03a1ac]" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-[#03a1ac]" />
                  {post.author}
                </span>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </article>

      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#03a1ac] to-[#03a1ac]/90 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">Make an Impact Today</h2>
            <p className="text-white/90 mb-6">
              Your support helps us continue creating success stories like these.
            </p>
            <Link href="/donate">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6">
                Donate Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Flood Relief Campaign Jhang',
      excerpt: 'Supplied basic necessities to 300 families victimized by flood in remote areas of Jhang',
      image: '/gallery/88.jpeg',
      category: 'Flood Relief Campaign 2025',
      date: 'September 20, 2025',
      author: 'Abbas Raza',
    },
  ];


  return (
    <div className="pt-16">
      <section className="relative py-20 bg-gradient-to-br from-[#03a1ac]/10 via-white to-[#FFBF00]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              News & <span className="text-[#03a1ac]">Updates</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed about our latest events, success stories, and community impact from Baqiatullah Foundation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#FFBF00] text-gray-900 hover:bg-[#FFBF00]/90">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#03a1ac] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center text-[#03a1ac] font-semibold group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

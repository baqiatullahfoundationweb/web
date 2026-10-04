'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Eye, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AboutPage() {
  const team = [
    {
      name: 'Mr. Zain Ali',
      role: 'Founder & Director',
      image: '/team/founder2.jpg',
      initials: 'ZA',
    },
    {
      name: 'Aleena Maryam',
      role: 'Chairperson',
      image: '/team/chairperson.jpg',
      initials: 'AM',
    },
    {
      name: 'Syed Sajjad Hussain',
      role: 'Education Coordinator',
      image: '/team/educationist.jpg',
      initials: 'SSH',
    },
    {
      name: 'Sohail Raza',
      role: 'Finance Secretary',
      image: '/team/finance.jpg',
      initials: 'SR',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every child with love, dignity, and respect.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in care and education.',
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'We operate with transparency and accountability.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We envision a future where every child thrives.',
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
              About <span className="text-[#03a1ac]">Baqiatullah Foundation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 8 years, we&apos;ve been transforming lives through compassionate care, quality education, and unwavering community support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/gallery/89.jpg"
                alt="Our story"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                style={{ maxHeight: '400px' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Baqiatullah Foundation Pakistan was founded in 2016 by a group of dedicated individuals who shared a common vision: to provide a safe, loving home for orphaned and vulnerable children. What started as a small initiative with just 12 children has grown into a thriving community supporting over 250 children.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey has been marked by countless success stories, from children graduating college to reuniting with families, and building meaningful careers. Each day, we continue to work towards our goal of ensuring every child has the opportunity to reach their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-l-4 border-l-[#FFBF00] shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-[#FFBF00] w-14 h-14 rounded-xl flex items-center justify-center">
                    <Target className="h-7 w-7 text-[#03a1ac]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide a nurturing, family-like environment where orphaned and vulnerable children receive quality care, education, and support to become confident, successful individuals who contribute positively to society.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-l-4 border-l-[#03a1ac] shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-[#FFBF00] w-14 h-14 rounded-xl flex items-center justify-center">
                    <Eye className="h-7 w-7 text-[#03a1ac]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A world where every child, regardless of their circumstances, has access to love, education, and opportunities to thrive. We envision communities where children are empowered to break cycles of poverty and build bright futures.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Baqiatullah Foundation.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-[#FFBF00] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="h-8 w-8 text-[#03a1ac]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals working tirelessly to transform children&apos;s lives.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-[#FFBF00] bg-gradient-to-br from-white via-white to-[#FFBF00]/5 group-hover:from-[#FFBF00]/5 group-hover:to-[#03a1ac]/5 h-[400px]">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FFBF00]/20 to-[#03a1ac]/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#03a1ac]/20 to-[#FFBF00]/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500" />
                  
                  <CardContent className="relative p-8 pb-16 text-center space-y-6 h-full flex flex-col justify-center">
                    {/* Avatar with enhanced styling */}
                    <div className="relative">
                      <Avatar className="w-32 h-32 mx-auto border-4 border-[#FFBF00] shadow-2xl group-hover:border-[#03a1ac] transition-all duration-300 group-hover:scale-110">
                        <AvatarImage src={member.image} alt={member.name} className="object-cover object-top" style={{objectPosition: 'center 20%'}} />
                        <AvatarFallback className="bg-gradient-to-br from-[#FFBF00] to-[#03a1ac] text-white text-3xl font-bold group-hover:from-[#03a1ac] group-hover:to-[#FFBF00] transition-all duration-300">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      {/* Floating badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#FFBF00] to-[#03a1ac] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Content with enhanced styling */}
                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#03a1ac] transition-colors duration-300 leading-tight mb-4">
                          {member.name}
                        </h3>
                      </div>
                      <div className="relative h-12 flex items-center justify-center">
                        <p className="text-[#03a1ac] font-semibold bg-gradient-to-r from-[#FFBF00]/20 to-[#03a1ac]/20 px-4 py-2 rounded-full text-sm border border-[#FFBF00]/30 group-hover:from-[#03a1ac]/20 group-hover:to-[#FFBF00]/20 group-hover:border-[#03a1ac]/30 transition-all duration-300 text-center leading-tight">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFBF00]/5 to-[#03a1ac]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

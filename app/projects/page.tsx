'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Utensils, Chrome as Home, Heart, CircleCheck as CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProjectsPage() {
  const ongoingProjects = [
    {
      title: 'Education Excellence Program',
      description: 'Providing scholarships, tutoring, and educational resources to ensure every child receives quality education and reaches their academic potential.',
      image: '/gallery/2.jpg',
      icon: BookOpen,
      progress: 75,
      status: 'Ongoing',
    },
    {
      title: 'Nutrition & Health Initiative',
      description: 'Ensuring all children receive balanced meals, regular health check-ups, and access to medical care for optimal growth and development.',
      image: '/gallery/16.jpg',
      icon: Utensils,
      progress: 90,
      status: 'Ongoing',
    },
    {
      title: 'Housing Expansion Project',
      description: 'Building new dormitories to accommodate more children in need while providing comfortable, safe living spaces that feel like home.',
      image: 'https://images.pexels.com/photos/8612982/pexels-photo-8612982.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Home,
      progress: 45,
      status: 'Ongoing',
    },
  ];

  const pastProjects = [
    {
      title: 'Computer Literacy Program',
      description: 'Successfully equipped all children with computer skills and digital literacy, preparing them for the modern workforce.',
      year: '2024',
      impact: '250+ children trained',
      icon: CheckCircle,
    },
    {
      title: 'Library & Learning Center',
      description: 'Established a comprehensive library with books, computers, and study spaces to enhance children\'s learning and reading skills.',
      year: '2023',
      impact: 'Serves 200+ children daily',
      icon: CheckCircle,
    },
    {
      title: 'Vocational Training Program',
      description: 'Launched skill development workshops teaching practical trades like carpentry, tailoring, and computer skills for future employment.',
      year: '2023',
      impact: '120+ children trained',
      icon: CheckCircle,
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
              Our <span className="text-[#03a1ac]">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the initiatives transforming children&apos;s lives through targeted programs and sustainable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Ongoing Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Current initiatives making a real difference in children&apos;s lives.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#FFBF00] overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#03a1ac] hover:bg-[#03a1ac]/90 text-white">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#03a1ac] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-gray-700">Progress</span>
                          <span className="text-sm font-bold text-[#03a1ac]">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="bg-gradient-to-r from-[#FFBF00] to-[#03a1ac] h-full rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                      
                      <Link href="/donate">
                        <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                          Donate Now
                        </button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Completed Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Successful initiatives that have created lasting positive change.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {pastProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-t-4 border-t-[#FFBF00]">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <Badge variant="outline" className="border-green-600 text-green-600">
                        {project.year}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-[#03a1ac] flex items-center">
                        <Heart className="h-4 w-4 mr-2" />
                        {project.impact}
                      </p>
                    </div>
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

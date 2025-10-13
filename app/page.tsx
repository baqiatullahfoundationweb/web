"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Utensils, Shield, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    {
      image: '/gallery/49.jpg',
      title: 'Building Brighter Futures',
      subtitle: 'Together, we provide care, education, and opportunity for every child to thrive.',
      cta: 'Learn More'
    },
    {
      image: '/gallery/20.jpg',
      title: 'Education Excellence',
      subtitle: 'Empowering children through quality education and digital literacy programs.',
      cta: 'View Projects'
    },
    {
      image: '/gallery/75.jpg',
      title: 'Community Support',
      subtitle: 'Creating a family-like environment where every child feels valued and loved.',
      cta: 'Donate Us'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [mounted, slides.length]);

  const highlights = [
    {
      title: 'Who We Are',
      description: 'Learn about our mission, values, and the dedicated team behind our work.',
      icon: Heart,
      link: '/about',
      buttonText: 'About Us'
    },
    {
      title: 'Get Involved',
      description: 'Discover ways to support our cause through donations, volunteering, or partnerships.',
      icon: Users,
      link: '/contact',
      buttonText: 'Contact Us'
    },
    {
      title: 'Our Impact',
      description: 'See the real difference we make in children&apos;s lives through our programs and initiatives.',
      icon: Shield,
      link: '/projects',
      buttonText: 'View Projects'
    }
  ];

  const stats = [
    { label: 'Children Supported', value: '250+' },
    { label: 'Volunteers', value: '85+' },
    { label: 'Annual Meals', value: '100k+' },
    { label: 'Scholarships', value: '50+' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={mounted ? slides[currentSlide].image : slides[0].image}
            alt={mounted ? slides[currentSlide].title : slides[0].title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30 mb-6">
                <Image 
                  src="/logo/logo-01.png" 
                  alt="Baqiatullah Foundation Logo" 
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                />
                <span className="text-sm font-medium text-white">Baqiatullah Foundation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                {mounted ? slides[currentSlide].title : slides[0].title}
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {mounted ? slides[currentSlide].subtitle : slides[0].subtitle}
              </p>
              <Link href="/donate">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg">
                  {mounted ? slides[currentSlide].cta : slides[0].cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Only show when mounted */}
        {mounted && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlide ? 'bg-[#FFBF00] scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Stats Section */}
      <section className="py-10">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-[#FFBF00] rounded-lg">
                <div className="text-3xl font-bold text-[#03a1ac] mb-2">{stat.value}</div>
                <div className="text-[#03a1ac] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-[#FFBF00] flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-[#03a1ac]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{highlight.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{highlight.description}</p>
                    <Link href={highlight.link}>
                      <Button className="w-full bg-[#FFBF00] hover:bg-[#FFBF00]/90 text-gray-900 font-semibold py-3 transition-all duration-300 hover:scale-105">
                        {highlight.buttonText}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-[#03a1ac]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Education Excellence</h3>
                <p className="text-gray-600">Providing quality education and learning opportunities for every child.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-[#03a1ac]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nutrition & Health</h3>
                <p className="text-gray-600">Ensuring balanced meals and regular health check-ups for optimal growth.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[#03a1ac]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safe & Caring Home</h3>
                <p className="text-gray-600">Creating a family-like environment where every child feels loved and valued.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFBF00] to-[#03a1ac]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join us in transforming children&apos;s lives. Every contribution, no matter how small, makes a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg">
                  Donate Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-gray-900 bg-white/20 hover:bg-white hover:text-gray-900 font-semibold px-8 py-6 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Latest News</h2>
              <p className="text-lg text-gray-600">Stay updated with our latest activities and success stories.</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src="/gallery/88.jpeg"
                      alt="Flood Relief Campaign Jhang"
                      width={400}
                      height={300}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#FFBF00] text-[#03a1ac] rounded-full text-sm font-semibold">
                        Flood Relief Campaign 2025
                      </span>
                      <span className="text-gray-500">September 20, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Flood Relief Campaign Jhang</h3>
                    <p className="text-gray-600 mb-6">
                      Supplied basic necessities to 300 families victimized by flood in remote areas of Jhang
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By Abbas Raza</span>
                      <Link href="/blog/1">
                        <Button className="bg-[#FFBF00] hover:bg-[#FFBF00]/90 text-gray-900 font-semibold">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
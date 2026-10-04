"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

const SLIDES = [
  {
    image: "/gallery/49.jpg",
    badge: "Accredited Non-Profit • Since 2016",
    title: "Empowering Pakistan's Orphans with Dignity, Love & Education",
    subtitle: "Providing full residential care, wholesome nutrition, and accredited schooling for over 250 children in Lahore, Pakistan.",
    ctaPrimary: "Donate to Support",
    ctaPrimaryHref: "/donate",
    ctaSecondary: "Explore Our Story",
    ctaSecondaryHref: "/about",
  },
  {
    image: "/gallery/20.jpg",
    badge: "Education & Digital Literacy Program",
    title: "Breaking Generational Poverty Through Modern Knowledge",
    subtitle: "From computer literacy labs to college scholarships, our children build real skills to graduate as independent, confident leaders.",
    ctaPrimary: "Sponsor a Child",
    ctaPrimaryHref: "/donate",
    ctaSecondary: "View All Projects",
    ctaSecondaryHref: "/projects",
  },
  {
    image: "/gallery/75.jpg",
    badge: "Emergency Relief & Community Support",
    title: "Humanitarian Hope Extended to Flood-Affected Communities",
    subtitle: "Reaching beyond our sanctuary to provide clean water, food rations, and medical kits to 300+ vulnerable families in remote crisis zones.",
    ctaPrimary: "Emergency Relief Fund",
    ctaPrimaryHref: "/donate",
    ctaSecondary: "Read Field Reports",
    ctaSecondaryHref: "/blog/1",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, 6500);
    return () => clearInterval(timer);
  }, [paused, nextSlide]);

  return (
    <section
      className="relative w-full h-[600px] sm:h-[680px] lg:h-[750px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide Images */}
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            className="object-cover object-center scale-102 transition-transform duration-7000 ease-out"
            sizes="100vw"
          />
          {/* Multi-layered cinematic gradient: preserves readability without losing image richness */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold mb-4 sm:mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FFBF00]" />
            <span>{SLIDES[current].badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4 sm:mb-6 drop-shadow-md">
            {SLIDES[current].title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mb-8 drop-shadow-xs">
            {SLIDES[current].subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button href={SLIDES[current].ctaPrimaryHref} variant="donate" size="lg" className="shadow-lg">
              <Heart className="w-4 h-4 fill-current mr-2" />
              <span>{SLIDES[current].ctaPrimary}</span>
            </Button>
            <Button
              href={SLIDES[current].ctaSecondaryHref}
              variant="glass"
              size="lg"
              className="bg-white/15 hover:bg-white text-white hover:text-gray-900 border-white/40 shadow-sm"
            >
              <span>{SLIDES[current].ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Carousel Progress Bar & Controls */}
        <div className="flex items-center justify-between pt-10 mt-6 border-t border-white/20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#FFBF00]">
              0{current + 1}
            </span>
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-[#FFBF00]" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-white/60">
              0{SLIDES.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer interactive-tap"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer interactive-tap"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

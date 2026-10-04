"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { type HeroSlide, DEFAULT_SLIDES } from "./heroSlides";

export type { HeroSlide };

export interface HeroSliderProps {
  slides?: HeroSlide[];
  autoPlayInterval?: number;
  className?: string;
}

export default function HeroSlider({
  slides = DEFAULT_SLIDES,
  autoPlayInterval = 7000,
  className = "",
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [key, setKey] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setKey((prev) => prev + 1);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [paused, nextSlide, autoPlayInterval]);

  const activeSlide = slides[current] || slides[0];

  return (
    <section
      className={`relative w-full h-[620px] sm:h-[720px] lg:h-[800px] overflow-hidden bg-[#041a1c] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Foundation Highlights"
    >
      {/* Background Slides with Ken Burns Zoom */}
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className={`relative w-full h-full transition-transform duration-[7500ms] ease-out ${isActive ? "scale-108 translate-x-1" : "scale-100 translate-x-0"}`}>
              <Image src={slide.image} alt={slide.title} fill priority={idx === 0} className="object-cover object-center" sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          </div>
        );
      })}

      {/* Kinetic SVG Light Filament Overlay */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-24 z-15 pointer-events-none opacity-40" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0 80 Q 360 20, 720 70 T 1440 40" fill="none" stroke="url(#heroLineGlow)" strokeWidth="2" />
        <defs>
          <linearGradient id="heroLineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#008B8B" stopOpacity="0" />
            <stop offset="30%" stopColor="#008B8B" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#FFBF00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#AF0000" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Hero Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-20">
        <div key={key} className="max-w-5xl">
          {/* Strict 2-Line Wide Headline with Staggered Kinetic Entrance */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.12] mb-5 drop-shadow-md animate-in fade-in slide-in-from-bottom-5 duration-700">
            {activeSlide.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed max-w-3xl mb-8 drop-shadow-xs animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            {activeSlide.subtitle}
          </p>

          {/* Elevated Call-to-Actions (Taller Height, Compact Width) */}
          <div className="flex flex-wrap items-center gap-3.5 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-300">
            <Button href={activeSlide.ctaPrimaryHref} variant="donate" size="lg" className="shadow-xl shadow-red-950/40">
              <Heart className="w-4 h-4 fill-current mr-2" />
              <span>{activeSlide.ctaPrimary}</span>
            </Button>
            <Button href={activeSlide.ctaSecondaryHref} variant="glass" size="lg" className="bg-white/10 hover:bg-white/25 text-white border-white/25 shadow-md">
              <span>{activeSlide.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Carousel Timeline & Kinetic Progress Tracker */}
        <div className="flex items-center justify-between pt-7 mt-8 border-t border-white/15">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-mono text-xs font-bold text-amber tracking-wider">0{current + 1}</span>

            {/* Kinetic Progress Bar */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setKey((prev) => prev + 1); }}
                  className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer bg-white/20"
                  style={{ width: i === current ? "48px" : "12px" }}
                  aria-label={`Jump to slide ${i + 1}`}
                >
                  {i === current && (
                    <div key={`progress-${key}`} className="absolute inset-0 bg-gradient-to-r from-primary to-amber rounded-full animate-[progress_7s_linear_forwards]" />
                  )}
                </button>
              ))}
            </div>

            <span className="font-mono text-xs text-slate-400">0{slides.length}</span>
          </div>

          {/* Frosted Control Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/15 transition-all duration-200 cursor-pointer interactive-tap"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/15 transition-all duration-200 cursor-pointer interactive-tap"
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

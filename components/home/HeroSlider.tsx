"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ArrowRight, Sparkles } from "lucide-react";
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
  autoPlayInterval = 6500,
  className = "",
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [paused, nextSlide, autoPlayInterval]);

  const activeSlide = slides[current] || slides[0];

  return (
    <section
      className={`relative w-full h-[620px] sm:h-[700px] lg:h-[780px] overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, idx) => (
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        </div>
      ))}

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-22">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold mb-4 sm:mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber" />
            <span>{activeSlide.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4 sm:mb-6 drop-shadow-md">
            {activeSlide.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mb-8 drop-shadow-xs">
            {activeSlide.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href={activeSlide.ctaPrimaryHref} variant="donate" size="lg" className="shadow-lg">
              <Heart className="w-4 h-4 fill-current mr-2" />
              <span>{activeSlide.ctaPrimary}</span>
            </Button>
            <Button
              href={activeSlide.ctaSecondaryHref}
              variant="glass"
              size="lg"
              className="bg-white/15 hover:bg-white text-white hover:text-gray-900 border-white/40 shadow-sm"
            >
              <span>{activeSlide.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 mt-6 border-t border-white/20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-amber">
              0{current + 1}
            </span>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-amber" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-white/60">
              0{slides.length}
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

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ArrowRight, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { HeroSlide, DEFAULT_SLIDES } from "./heroSlides";

export interface HeroSliderProps {
  slides?: HeroSlide[];
}

export default function HeroSlider({ slides = DEFAULT_SLIDES }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prevSlide = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 7500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = slides[current];

  return (
    <section
      className="relative h-screen min-h-[640px] max-h-[1080px] w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Foundation Highlights"
    >
      {/* 100vh Full-Bleed Photographic Carousel Background with Ken Burns Zoom */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className={`object-cover transition-transform duration-7500 ease-out ${
              idx === current ? "scale-108" : "scale-100"
            }`}
            priority={idx === 0}
            sizes="100vw"
          />
          {/* Creative Light Luminous Overlays (NOT dark blackish) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#EDF6F6] via-[#EDF6F6]/90 sm:via-[#EDF6F6]/80 to-[#EDF6F6]/30 rtl:bg-gradient-to-l rtl:from-[#EDF6F6] rtl:via-[#EDF6F6]/90 rtl:to-[#EDF6F6]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EDF6F6] via-transparent to-[#EDF6F6]/40" />
        </div>
      ))}

      {/* Main Content Stage: Centered Vertically */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Headline & Action Block */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 text-primary border border-primary/25 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>{slide.badge}</span>
            </div>

            <h1
              key={`h1-${current}`}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black text-gray-950 tracking-tight leading-[1.12] drop-shadow-2xs animate-in fade-in slide-in-from-bottom-3 duration-500"
            >
              {slide.title}
            </h1>

            <p
              key={`p-${current}`}
              className="text-base sm:text-xl text-gray-700 leading-relaxed max-w-2xl font-normal drop-shadow-2xs animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100"
            >
              {slide.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button href={slide.ctaPrimaryHref} variant="donate" size="lg" className="shadow-xl shadow-red-950/25">
                <Heart className="w-4 h-4 fill-current mr-2" />
                <span>{slide.ctaPrimary}</span>
              </Button>
              <Button
                href={slide.ctaSecondaryHref}
                variant="glass"
                size="lg"
                className="bg-white/95 hover:bg-white text-gray-950 font-bold border-primary/30 shadow-lg"
              >
                <span>{slide.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 ml-2 text-primary" />
              </Button>
            </div>
          </div>

          {/* Floating Live Verification Badge in Visual Zone */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-primary/25 shadow-2xl max-w-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>24/7 Verified Operation</span>
              </div>
              <div className="text-3xl font-extrabold font-mono text-primary">250+</div>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Resident children receiving maternal home care, nutritious meals, and quality schooling in Lahore.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Console: Slide Controls & Progress */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-primary/20 shadow-xl">
          {/* Segmented Timeline Indicator Bars */}
          <div className="flex items-center gap-3 w-full sm:w-auto flex-1 max-w-md">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className="group flex-1 text-left cursor-pointer transition-all"
                aria-label={`Slide ${idx + 1}`}
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-600 mb-1">
                  <span className={idx === current ? "text-primary font-black" : ""}>0{idx + 1}</span>
                  <span className="truncate max-w-[80px] hidden md:inline text-[10px] text-gray-400">
                    {idx === 0 ? "Care" : idx === 1 ? "Education" : "Relief"}
                  </span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden bg-gray-200">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      idx === current
                        ? "bg-primary w-full animate-pulse"
                        : idx < current
                        ? "bg-primary/50 w-full"
                        : "w-0"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Prev / Next Circular Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

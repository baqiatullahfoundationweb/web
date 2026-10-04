"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import { HeroSlide, DEFAULT_SLIDES } from "./heroSlides";
import HeroCardRail from "./HeroCardRail";

export default function HeroSlider({ slides = DEFAULT_SLIDES }: { slides?: HeroSlide[] }) {
  const pathname = usePathname();
  const isUrdu = pathname.startsWith("/ur");
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent((p) => (p + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((p) => (p - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = slides[current] || slides[0];

  // Format title with editorial dash if present
  const titleParts = slide.title.includes("——")
    ? slide.title.split("——")
    : [slide.title, ""];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-8 px-4 sm:px-8 select-none bg-[#E9EEF3]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Editorial Humanitarian Hero Showcase"
    >
      {/* Massive Vertical Typographic Ghost Watermark */}
      <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden opacity-[0.05] select-none">
        <span className="block text-[140px] sm:text-[220px] font-black tracking-widest text-gray-900 whitespace-nowrap rotate-90 transform origin-center">
          {isUrdu ? "امید اور وقار" : "UP IN HOPE"}
        </span>
      </div>

      {/* Floating Horizontal Staggered Cards Rail */}
      <div className="relative z-10 w-full mt-4 sm:mt-8">
        <HeroCardRail
          slides={slides}
          activeIdx={current}
          onSelect={(idx) => setCurrent(idx)}
          isRtl={isUrdu}
        />
      </div>

      {/* Lower Stage: Editorial Headline, Subtitle, CTA and Circular Hairline Nav */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-6 pb-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        {/* Left / Editorial Title and Description */}
        <div className="lg:col-span-8 space-y-4">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-gray-950 tracking-tight leading-[1.08] uppercase">
              {titleParts[0]}
              {titleParts[1] && (
                <>
                  <span className="mx-2 sm:mx-3 text-gray-500 font-normal">——</span>
                  <span className="block sm:inline">{titleParts[1]}</span>
                </>
              )}
            </h1>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal max-w-2xl">
            {slide.subtitle}
          </p>

          {/* High-Contrast Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              href={slide.ctaPrimaryHref}
              variant="donate"
              size="lg"
              className="shadow-xl font-black text-sm"
            >
              <Heart className="w-4 h-4 fill-current mr-2" />
              <span>{slide.ctaPrimary}</span>
            </Button>
            <Button
              href={slide.ctaSecondaryHref}
              variant="gold"
              size="lg"
              className="shadow-lg font-black text-sm"
            >
              <span>{slide.ctaSecondary}</span>
            </Button>
          </div>
        </div>

        {/* Right / Minimal Circular Hairline Navigation Arrows */}
        <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-4">
          <div className="text-xs font-mono font-black text-gray-500 tracking-widest mr-2">
            0{current + 1} / 0{total}
          </div>

          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-400 hover:border-gray-950 hover:bg-gray-950 hover:text-white text-gray-900 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Previous Slide"
          >
            {isUrdu ? <ArrowRight className="w-5 h-5 stroke-[2]" /> : <ArrowLeft className="w-5 h-5 stroke-[2]" />}
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-400 hover:border-gray-950 hover:bg-gray-950 hover:text-white text-gray-900 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Next Slide"
          >
            {isUrdu ? <ArrowLeft className="w-5 h-5 stroke-[2]" /> : <ArrowRight className="w-5 h-5 stroke-[2]" />}
          </button>
        </div>
      </div>
    </section>
  );
}

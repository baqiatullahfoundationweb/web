"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import { HeroSlide, DEFAULT_SLIDES } from "./heroSlides";
import { URDU_SLIDES } from "./heroSlidesUrdu";
import HeroCardRail from "./HeroCardRail";

export default function HeroSlider({ slides }: { slides?: HeroSlide[] }) {
  const pathname = usePathname();
  const isUrdu = pathname.startsWith("/ur");
  // Always ensure rich 12-slide experience
  const slideList = slides && slides.length > 5 ? slides : isUrdu ? URDU_SLIDES : DEFAULT_SLIDES;
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slideList.length;

  const nextSlide = useCallback(() => {
    setCurrent((p) => (p + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((p) => (p - 1 + total) % total);
  }, [total]);

  // Reliable Auto-Switching every 4.5 seconds
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  // Smooth Laser Progress Animation
  useEffect(() => {
    const raf = requestAnimationFrame(() => setProgress(0));
    const start = Date.now();
    const duration = 4500;
    const interval = setInterval(() => {
      if (isPaused) return;
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
    }, 50);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
    };
  }, [current, isPaused]);

  const slide = slideList[current] || slideList[0];

  // Clean editorial title with dash
  const titleParts = slide.title.includes("——")
    ? slide.title.split("——")
    : [slide.title, ""];

  return (
    <section
      className="relative h-screen max-h-[110vh] min-h-[640px] w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-22 pb-6 px-4 sm:px-8 select-none bg-[#E9EEF3]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Editorial Humanitarian Hero Showcase"
    >
      {/* Massive Vertical Typographic Ghost Watermark */}
      <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden opacity-[0.05] select-none">
        <span className="block text-[140px] sm:text-[230px] font-black tracking-widest text-gray-900 whitespace-nowrap rotate-90 transform origin-center">
          {isUrdu ? "امید اور وقار" : "UP IN HOPE"}
        </span>
      </div>

      {/* Floating Horizontal Staggered Cards Rail (12 Images) */}
      <div className="relative z-10 w-full my-auto">
        <HeroCardRail
          slides={slideList}
          activeIdx={current}
          onSelect={(idx) => setCurrent(idx)}
          isRtl={isUrdu}
        />
      </div>

      {/* Lower Stage: Ultra-Minimal Editorial Headline & Circular Hairline Nav */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-3 pb-2 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
        {/* Minimal Editorial Title (No Bulky Paragraphs) */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-primary uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span>{slide.badge}</span>
          </div>

          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[50px] font-black text-gray-950 tracking-tight leading-none uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-[85vw] sm:max-w-2xl lg:max-w-3xl block">
            <span className="inline">{titleParts[0]}</span>
            {titleParts[1] && (
              <span className="inline whitespace-nowrap">
                <span className="mx-1.5 sm:mx-2.5 text-gray-400 font-light">——</span>
                <span>{titleParts[1]}</span>
              </span>
            )}
          </h1>

          {/* Thin Laser Progress Track */}
          <div className="w-48 sm:w-64 h-[2px] bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-75 ease-linear shadow-[0_0_8px_#008B8B]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Minimal Controls & Action Cockpit */}
        <div className="flex items-center gap-4 sm:gap-6 self-end sm:self-auto">
          {/* High-Contrast Quick Donate CTA */}
          <Button
            href={slide.ctaPrimaryHref}
            variant="donate"
            size="md"
            className="shadow-xl font-black text-xs sm:text-sm px-5 py-2.5"
          >
            <Heart className="w-3.5 h-3.5 fill-current mr-1.5" />
            <span>{slide.ctaPrimary}</span>
          </Button>

          {/* Slide Numeric Indicator */}
          <div className="text-xs sm:text-sm font-mono font-black text-gray-600 tracking-widest">
            {current + 1 < 10 ? `0${current + 1}` : current + 1} / {total < 10 ? `0${total}` : total}
          </div>

          {/* Circular Hairline Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-400 hover:border-gray-950 hover:bg-gray-950 hover:text-white text-gray-900 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Previous Slide"
            >
              {isUrdu ? <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" /> : <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />}
            </button>

            <button
              onClick={nextSlide}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-400 hover:border-gray-950 hover:bg-gray-950 hover:text-white text-gray-900 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Next Slide"
            >
              {isUrdu ? <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" /> : <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

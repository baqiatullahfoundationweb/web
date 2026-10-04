"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Heart, ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { HeroSlide, DEFAULT_SLIDES } from "./heroSlides";
import HeroTelemetry from "./HeroTelemetry";
import HeroProgressRail from "./HeroProgressRail";

export default function HeroSlider({ slides = DEFAULT_SLIDES }: { slides?: HeroSlide[] }) {
  const pathname = usePathname();
  const isUrdu = pathname.startsWith("/ur");
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent((p) => (p + 1) % total);
    setProgress(0);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((p) => (p - 1 + total) % total);
    setProgress(0);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          nextSlide();
          return 0;
        }
        return p + 0.67; // ~7.5s cycle
      });
    }, 50);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = slides[current];

  return (
    <section
      className="relative h-screen min-h-[700px] max-h-[1080px] w-full overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 select-none bg-[#EDF6F6]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Quantum Spatial Humanitarian Portal"
    >
      {/* Dynamic 100vh Ambient Background Canvas */}
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
            className={`object-cover transition-transform duration-7000 ease-out filter brightness-105 contrast-105 ${
              idx === current ? "scale-105" : "scale-100"
            }`}
            priority={idx === 0}
            sizes="100vw"
          />
          {/* Light High-Contrast Frosted Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 rtl:bg-gradient-to-l rtl:from-white/95 rtl:via-white/85 rtl:to-white/30 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-radial from-transparent via-white/20 to-[#EDF6F6]/80" />
        </div>
      ))}

      {/* Top Futuristic Telemetry HUD */}
      <HeroTelemetry isUrdu={isUrdu} />

      {/* Main Spatial Stage */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Razor-Sharp Minimalist Typography */}
        <div className="lg:col-span-7 relative">
          {/* Giant Ghost Holographic Numeral */}
          <span className="absolute -top-14 sm:-top-20 -left-6 rtl:-right-6 text-[120px] sm:text-[180px] font-mono font-black text-primary/10 select-none pointer-events-none leading-none">
            0{current + 1}
          </span>

          <div className="relative space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-black bg-white/90 text-primary border border-primary/30 shadow-md backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>// {slide.badge}</span>
            </div>

            <h1
              key={`title-${current}`}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.12] drop-shadow-xs animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              {slide.title}
            </h1>

            <p
              key={`sub-${current}`}
              className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal max-w-xl animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100"
            >
              {slide.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                href={slide.ctaPrimaryHref}
                variant="donate"
                size="lg"
                className="shadow-2xl shadow-teal-950/25 font-black text-sm"
              >
                <Heart className="w-4 h-4 fill-current mr-2" />
                <span>{slide.ctaPrimary}</span>
              </Button>
              <Button
                href={slide.ctaSecondaryHref}
                variant="gold"
                size="lg"
                className="shadow-xl font-black text-sm"
              >
                <span>{slide.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 ml-2 stroke-[2.5]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Floating Spatial Perspective Portal (Desktop) */}
        <div className="hidden lg:flex lg:col-span-5 justify-center relative">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white shadow-[0_25px_60px_rgba(0,139,139,0.22)] ring-1 ring-primary/30 bg-white/20 backdrop-blur-md group transition-transform duration-700 hover:scale-102">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

            {/* Precision Optical Reticles */}
            <span className="absolute top-3 left-3 text-[10px] font-mono font-bold text-white/80 bg-gray-950/40 px-2 py-0.5 rounded backdrop-blur-xs">
              + 31.4570° N
            </span>
            <span className="absolute top-3 right-3 text-[10px] font-mono font-bold text-white/80 bg-gray-950/40 px-2 py-0.5 rounded backdrop-blur-xs">
              OPTIC // 0{current + 1}
            </span>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono font-black text-white">
              <span>HAVEN SANCTUARY</span>
              <span className="text-emerald-400">● LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Futuristic Laser Segment Rail */}
      <HeroProgressRail
        slides={slides}
        current={current}
        progress={progress}
        isPaused={isPaused}
        onSelect={(idx) => {
          setCurrent(idx);
          setProgress(0);
        }}
        onPrev={prevSlide}
        onNext={nextSlide}
        onTogglePause={() => setIsPaused((p) => !p)}
      />
    </section>
  );
}

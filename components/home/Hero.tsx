"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SLIDES = [
  {
    image: "/gallery/opt/49.webp",
    title: "Building Brighter Futures",
    subtitle: "Providing compassionate care, quality schooling, and unconditional love for orphaned children in Pakistan.",
    badge: "Baqiatullah Home & Care",
  },
  {
    image: "/gallery/opt/20.webp",
    title: "Excellence in Education",
    subtitle: "Empowering every child with modern digital literacy, tutoring, and academic scholarships.",
    badge: "Knowledge & Growth",
  },
  {
    image: "/gallery/opt/89.webp",
    title: "Community & Humanitarian Hope",
    subtitle: "Creating a nurturing family sanctuary where every single child is cherished and protected.",
    badge: "Sanctuary for Hope",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax with GSAP ScrollTrigger
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !bgRef.current || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Auto carousel advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section ref={containerRef} className="relative min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden rounded-3xl mx-3 sm:mx-6">
      {/* Background Image with Parallax */}
      <div ref={bgRef} className="absolute inset-0 -top-12 -bottom-12 w-full h-[120%]">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className="object-cover transition-opacity duration-1000"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
      </div>

      {/* Floating Glassmorphism Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
        <div className="max-w-2xl glass-panel p-6 sm:p-10 rounded-3xl border border-white/40 shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#008B8B]/15 text-[#008B8B] text-xs font-semibold mb-5 border border-[#008B8B]/20">
            <span className="w-2 h-2 rounded-full bg-[#008B8B] animate-pulse" />
            <span>{slide.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-5">
            {slide.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
            {slide.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Button href="/donate" variant="donate" size="lg">
              <Heart className="w-4 h-4 fill-current mr-1" />
              <span>Donate to Support</span>
            </Button>
            <Button href="/about" variant="outline" size="lg">
              <span>Our Story & Mission</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
          className="p-2.5 rounded-full glass-panel hover:bg-white text-gray-800 transition-colors shadow-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-1.5 px-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#008B8B]" : "w-2 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
          className="p-2.5 rounded-full glass-panel hover:bg-white text-gray-800 transition-colors shadow-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

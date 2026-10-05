"use client";

import Image from "next/image";
import { HeroSlide } from "./heroSlides";

interface HeroCardRailProps {
  slides: HeroSlide[];
  activeIdx: number;
  onSelect: (idx: number) => void;
  isRtl?: boolean;
}

export default function HeroCardRail({
  slides,
  activeIdx,
  onSelect,
  isRtl = false,
}: HeroCardRailProps) {
  // Staggered vertical offsets tuned for exact 100vh viewport fit
  const offsets = [
    "translate-y-2 sm:translate-y-4",
    "-translate-y-4 sm:-translate-y-7",
    "translate-y-3 sm:translate-y-5",
    "-translate-y-3 sm:-translate-y-6",
    "translate-y-3 sm:translate-y-6",
    "-translate-y-4 sm:-translate-y-7",
  ];

  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-12 select-none">
      {/* Horizontal Graphic Accent Line passing behind the cards */}
      <div className="absolute top-[35%] left-0 right-0 h-[1.5px] bg-gray-400/40 pointer-events-none z-0" />

      {/* Triple Minimalist Graphic Signature */}
      <div className="absolute top-0 left-6 rtl:left-auto rtl:right-6 flex flex-col gap-1.5 pointer-events-none z-0 opacity-40">
        <span className="w-10 h-1 bg-gray-500 rounded-full" />
        <span className="w-6 h-1 bg-gray-500 rounded-full" />
        <span className="w-8 h-1 bg-gray-500 rounded-full" />
      </div>

      {/* Kinetic Translating Cards Track */}
      <div
        className="flex items-center gap-5 sm:gap-7 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 px-4 sm:px-10"
        style={{
          transform: isRtl
            ? `translateX(${activeIdx * 280}px)`
            : `translateX(-${activeIdx * 280}px)`,
        }}
      >
        {slides.map((s, idx) => {
          const isSelected = idx === activeIdx;
          const offsetClass = offsets[idx % offsets.length];

          return (
            <div
              key={idx}
              onClick={() => onSelect(idx)}
              className={`relative shrink-0 w-[230px] sm:w-[270px] lg:w-[300px] h-[340px] sm:h-[400px] lg:h-[440px] cursor-pointer transition-all duration-700 ease-out group ${offsetClass} ${
                isSelected
                  ? "scale-103 z-20"
                  : "scale-98 opacity-85 hover:opacity-100 hover:scale-101"
              }`}
            >
              {/* Photo Box with Realistic Drop Shadow and Razor Borders */}
              <div
                className={`relative w-full h-full overflow-hidden rounded-xs sm:rounded-sm bg-gray-200 transition-all duration-500 ${
                  isSelected
                    ? "shadow-[0_30px_70px_rgba(0,139,139,0.22)] ring-2 ring-primary"
                    : "shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-white/70 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.altText || s.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 230px, (max-width: 1024px) 270px, 300px"
                  priority={idx < 5}
                  loading={idx < 6 ? "eager" : "lazy"}
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Minimalist Micro Index Pill */}
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-white/95 text-gray-950 rounded-xs shadow-xs backdrop-blur-xs">
                    0{idx + 1}
                  </span>
                </div>

                {/* Badge Tag at Bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[11px] font-mono font-bold text-white tracking-wider line-clamp-1 drop-shadow-sm uppercase">
                    {s.badge}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

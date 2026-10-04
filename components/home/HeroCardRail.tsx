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
  return (
    <div className="relative w-full overflow-hidden py-12 select-none">
      {/* Horizontal Graphic Accent Line passing behind the cards */}
      <div className="absolute top-[38%] left-0 right-0 h-[1.5px] bg-gray-400/35 pointer-events-none z-0" />

      {/* Triple Architectural Accent Bars */}
      <div className="absolute top-2 left-8 rtl:left-auto rtl:right-8 flex flex-col gap-1 pointer-events-none z-0 opacity-40">
        <span className="w-12 h-1 bg-gray-400 rounded-full" />
        <span className="w-8 h-1 bg-gray-400 rounded-full" />
        <span className="w-10 h-1 bg-gray-400 rounded-full" />
      </div>

      {/* Sliding Cards Strip */}
      <div
        className="flex items-center gap-6 sm:gap-8 transition-transform duration-700 ease-out z-10 px-4 sm:px-8"
        style={{
          transform: isRtl
            ? `translateX(${activeIdx * 280}px)`
            : `translateX(-${activeIdx * 280}px)`,
        }}
      >
        {slides.map((s, idx) => {
          const isSelected = idx === activeIdx;
          // Staggered vertical offsets matching user reference image
          const isElevated = idx % 2 === 1;

          return (
            <div
              key={idx}
              onClick={() => onSelect(idx)}
              className={`relative shrink-0 w-[240px] sm:w-[280px] lg:w-[310px] h-[350px] sm:h-[410px] lg:h-[450px] cursor-pointer transition-all duration-700 ease-out group ${
                isElevated
                  ? "-translate-y-6 sm:-translate-y-10"
                  : "translate-y-4 sm:translate-y-8"
              } ${isSelected ? "scale-102 z-20" : "scale-98 opacity-90 hover:opacity-100"}`}
            >
              {/* Photo Container with soft shadow and crisp edges */}
              <div className="relative w-full h-full overflow-hidden rounded-xs sm:rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-white/60 bg-gray-200">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                  priority={idx < 3}
                />

                {/* Subtle bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                {/* Slide index badge */}
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-white/90 text-gray-950 rounded-xs shadow-xs backdrop-blur-xs">
                    0{idx + 1}
                  </span>
                </div>

                {/* Badge title at bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs font-mono font-bold text-white tracking-wider line-clamp-1 drop-shadow-sm">
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

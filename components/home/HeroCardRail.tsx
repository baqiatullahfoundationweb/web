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
  const offsets = [
    "translate-y-2 sm:translate-y-4",
    "-translate-y-4 sm:-translate-y-7",
    "translate-y-3 sm:translate-y-5",
    "-translate-y-3 sm:-translate-y-6",
    "translate-y-3 sm:translate-y-6",
    "-translate-y-4 sm:-translate-y-7",
  ];

  // Responsive card width: 160px on mobile, 230px sm, 270px md, 300px lg
  const CARD_WIDTH_MOBILE = 165;
  const CARD_WIDTH_SM = 245;

  return (
    <div className="relative w-full h-full overflow-hidden py-4 sm:py-8 select-none flex items-center">
      {/* Horizontal Graphic Accent Line */}
      <div className="absolute top-[35%] left-0 right-0 h-[1.5px] bg-gray-400/40 pointer-events-none z-0" />

      {/* Triple Minimalist Graphic Signature */}
      <div className="absolute top-0 left-6 rtl:left-auto rtl:right-6 flex flex-col gap-1.5 pointer-events-none z-0 opacity-40">
        <span className="w-10 h-1 bg-gray-500 rounded-full" />
        <span className="w-6 h-1 bg-gray-500 rounded-full" />
        <span className="w-8 h-1 bg-gray-500 rounded-full" />
      </div>

      {/* Kinetic Translating Cards Track */}
      <div
        className="flex items-center gap-3 sm:gap-5 lg:gap-7 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 px-3 sm:px-10 pr-[40vw] sm:pr-[60vw]"
        style={{
          transform: isRtl
            ? `translateX(calc(${activeIdx} * (${CARD_WIDTH_MOBILE}px + 12px)))`
            : `translateX(calc(-${activeIdx} * (${CARD_WIDTH_MOBILE}px + 12px)))`,
        }}
      >
        {slides.map((s, idx) => {
          const isSelected = idx === activeIdx;
          const offsetClass = offsets[idx % offsets.length];

          return (
            <div
              key={idx}
              onClick={() => onSelect(idx)}
              className={`relative shrink-0 
                w-[140px] h-[42vh]
                sm:w-[200px] sm:h-[46vh]
                lg:w-[250px] lg:h-[50vh]
                xl:w-[290px] xl:h-[52vh]
                cursor-pointer transition-all duration-700 ease-out group ${offsetClass} ${
                isSelected
                  ? "scale-103 z-20"
                  : "scale-98 opacity-85 hover:opacity-100 hover:scale-101"
              }`}
            >
              <div
                className={`relative w-full h-full overflow-hidden rounded-sm bg-gray-200 transition-all duration-500 ${
                  isSelected
                    ? "shadow-[0_20px_50px_rgba(0,139,139,0.22)] ring-2 ring-primary"
                    : "shadow-[0_12px_30px_rgba(0,0,0,0.14)] border border-white/70 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.altText || s.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 200px, (max-width: 1280px) 250px, 290px"
                  priority={idx < 5}
                  loading={idx < 6 ? "eager" : "lazy"}
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Minimalist Micro Index Pill */}
                <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2">
                  <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold bg-white/95 text-gray-950 rounded-xs shadow-xs backdrop-blur-xs">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Badge Tag at Bottom */}
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-[9px] sm:text-[11px] font-mono font-bold text-white tracking-wider line-clamp-1 drop-shadow-sm uppercase">
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

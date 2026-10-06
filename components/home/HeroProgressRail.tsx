"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { HeroSlide } from "./heroSlides";

interface HeroProgressRailProps {
  slides: HeroSlide[];
  current: number;
  progress: number;
  isPaused: boolean;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onTogglePause: () => void;
}

export default function HeroProgressRail({
  slides,
  current,
  progress,
  isPaused,
  onSelect,
  onPrev,
  onNext,
  onTogglePause,
}: HeroProgressRailProps) {
  return (
    <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-4 sm:pb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 sm:p-4 rounded-3xl bg-white/85 backdrop-blur-2xl border-2 border-white ring-1 ring-primary/20 shadow-2xl">
        {/* Interactive Segmented Laser Tracks */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full md:w-auto md:flex-1">
          {slides.map((s, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={idx}
                onClick={() => onSelect(idx)}
                className={`relative text-left rtl:text-right p-2.5 sm:p-3 rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer group ${
                  isActive
                    ? "bg-white shadow-lg border border-primary/30"
                    : "bg-gray-100/80 hover:bg-white/80 border border-transparent"
                }`}
              >
                {/* Laser Progress Beam for Active Slide */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-primary shadow-[0_0_8px_#008B8B] transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 mb-1">
                  <span
                    className={`text-[10px] sm:text-xs font-mono font-black ${
                      isActive ? "text-primary" : "text-gray-500"
                    }`}
                  >
                    0{idx + 1} {"//"}
                  </span>

                  {/* Micro Visualizer Equalizer on Active Slide */}
                  {isActive && !isPaused && (
                    <div className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 h-full bg-primary animate-pulse rounded-full" />
                      <span className="w-0.5 h-2 bg-primary animate-pulse delay-75 rounded-full" />
                      <span className="w-0.5 h-3 bg-primary animate-pulse delay-150 rounded-full" />
                    </div>
                  )}
                </div>

                <p
                  className={`text-[11px] sm:text-xs font-bold line-clamp-1 transition-colors ${
                    isActive ? "text-gray-950" : "text-gray-600 group-hover:text-gray-900"
                  }`}
                >
                  {s.badge}
                </p>
              </button>
            );
          })}
        </div>

        {/* Minimal Tactile Cockpit Navigation Controls */}
        <div className="flex items-center gap-2 self-end md:self-center">
          <button
            onClick={onTogglePause}
            className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
          >
            {isPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4 fill-current" />}
          </button>
          <button
            onClick={onPrev}
            className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-primary hover:text-white text-gray-900 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 font-bold"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            onClick={onNext}
            className="w-10 h-10 rounded-xl bg-primary text-white hover:bg-[#007070] flex items-center justify-center transition-all cursor-pointer shadow-md shadow-teal-950/20 active:scale-95 font-bold"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}

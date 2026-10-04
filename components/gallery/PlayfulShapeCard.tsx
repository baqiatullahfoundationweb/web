"use client";

import { useMemo } from "react";
import { Sparkles, Heart, Star } from "lucide-react";

interface PlayfulShapeProps {
  variantIndex?: number;
  isUrdu?: boolean;
  className?: string;
}

const PALETTES = [
  {
    bg: "bg-gradient-to-br from-amber-300 via-amber-400 to-orange-400",
    text: "text-amber-950",
    urduMotto: "مسکرائیں! آپ خاص ہیں ✨",
    engMotto: "Keep Smiling! You Are Special ✨",
    icon: Sparkles,
  },
  {
    bg: "bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-500",
    text: "text-emerald-950",
    urduMotto: "علم اور محبت کی روشنی 🌱",
    engMotto: "Growing With Love & Learning 🌱",
    icon: Star,
  },
  {
    bg: "bg-gradient-to-br from-rose-300 via-pink-400 to-rose-500",
    text: "text-rose-950",
    urduMotto: "ہر بچے کا خواب سچا ہو 💛",
    engMotto: "Every Child's Dream Matters 💛",
    icon: Heart,
  },
  {
    bg: "bg-gradient-to-br from-sky-300 via-indigo-300 to-blue-400",
    text: "text-indigo-950",
    urduMotto: "تخلیق، مسکراہٹ اور امید 🎨",
    engMotto: "Creativity, Hope & Smiles 🎨",
    icon: Sparkles,
  },
];

export default function PlayfulShapeCard({
  variantIndex = 0,
  isUrdu = false,
  className = "",
}: PlayfulShapeProps) {
  const p = PALETTES[variantIndex % PALETTES.length];
  const Icon = p.icon;

  return (
    <div
      className={`relative rounded-3xl p-6 flex flex-col items-center justify-between overflow-hidden shadow-xl border-2 border-white/80 ring-1 ring-black/5 select-none transition-transform duration-500 hover:scale-102 ${p.bg} ${p.text} ${className}`}
    >
      {/* Background Decorative Polka Dapples */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_3px,transparent_3px)] [background-size:16px_16px]" />

      {/* Top Floating Badge */}
      <div className="relative z-10 self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-xs text-[11px] font-extrabold shadow-xs">
        <Icon className="w-3.5 h-3.5 fill-current" />
        <span>{isUrdu ? "ننھے معمار" : "Little Stars"}</span>
      </div>

      {/* Cute Playful SVG Character Face with Blinking Eyes */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
        <svg
          viewBox="0 0 160 100"
          className="w-36 h-24 drop-shadow-md overflow-visible"
        >
          {/* Left Eye */}
          <g className="animate-[pulse_3s_ease-in-out_infinite]">
            <ellipse cx="45" cy="45" rx="14" ry="16" fill="#1E293B" />
            <circle cx="41" cy="40" r="5" fill="#FFFFFF" />
            <circle cx="49" cy="49" r="2.5" fill="#FFFFFF" />
          </g>

          {/* Right Eye */}
          <g className="animate-[pulse_3s_ease-in-out_infinite]">
            <ellipse cx="115" cy="45" rx="14" ry="16" fill="#1E293B" />
            <circle cx="111" cy="40" r="5" fill="#FFFFFF" />
            <circle cx="119" cy="49" r="2.5" fill="#FFFFFF" />
          </g>

          {/* Rosy Cheeks */}
          <ellipse cx="25" cy="62" rx="11" ry="6" fill="#FF477E" opacity="0.45" />
          <ellipse cx="135" cy="62" rx="11" ry="6" fill="#FF477E" opacity="0.45" />

          {/* Happy Mouth */}
          <path
            d="M 62 62 Q 80 82 98 62"
            fill="none"
            stroke="#1E293B"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Cute Tongue */}
          <path
            d="M 72 71 Q 80 82 88 71 Z"
            fill="#FF477E"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Bottom Uplifting Motto */}
      <div className="relative z-10 text-center px-2">
        <p className="text-xs sm:text-sm font-black tracking-wide drop-shadow-xs">
          {isUrdu ? p.urduMotto : p.engMotto}
        </p>
      </div>
    </div>
  );
}

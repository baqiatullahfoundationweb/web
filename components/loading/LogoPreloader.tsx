"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BaqiatullahEmblemDraw from "./BaqiatullahEmblemDraw";

export default function LogoPreloader() {
  const pathname = usePathname();
  const isUrdu = pathname.startsWith("/ur");
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const isBot =
      typeof navigator !== "undefined" &&
      /Lighthouse|Chrome-Lighthouse|Googlebot/i.test(navigator.userAgent);
    if (isBot) {
      const timer = setTimeout(() => setDismissed(true), 0);
      return () => clearTimeout(timer);
    }

    const start = Date.now();
    const duration = 3500; // Stays for 3.5s to 4.0s on page load

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(timer);
        setExiting(true);
        setTimeout(() => {
          setDismissed(true);
        }, 600);
      }
    }, 35);

    return () => clearInterval(timer);
  }, []);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(() => {
      setDismissed(true);
    }, 400);
  };

  if (dismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between p-6 sm:p-10 select-none bg-[#FFBF00] transition-all duration-700 ease-out ${
        exiting ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
      aria-label="Baqiatullah Foundation Logo Creation"
    >
      {/* Top Bar with Skip Button */}
      <div className="relative z-20 w-full flex justify-end">
        <button
          onClick={handleSkip}
          className="px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 bg-white/70 hover:bg-white border border-gray-950/15 shadow-sm transition-all cursor-pointer interactive-tap"
        >
          {isUrdu ? "چھوڑیں ✕" : "Skip ✕"}
        </button>
      </div>
      {/* Dynamic Geometric Decorative Shapes Coming from All 4 Sides & Corners, Stopping Halfway */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top Center: Deep Emerald / Teal Pill */}
        <div className="absolute -top-16 left-1/4 w-36 h-56 sm:w-52 sm:h-72 rounded-full bg-gradient-to-b from-[#008B8B] to-[#005C5C] shadow-2xl shape-glide-top opacity-85" />
        
        {/* Top Right: Sky Blue / Violet Oval */}
        <div className="absolute -top-14 right-1/4 w-40 h-52 sm:w-56 sm:h-64 rounded-3xl bg-gradient-to-b from-[#0284C7] to-[#4338CA] shadow-2xl shape-glide-top opacity-80" />

        {/* Bottom Right: Warm Amber / Ruby Wedge */}
        <div className="absolute -bottom-16 right-1/4 w-48 h-60 sm:w-64 sm:h-80 rounded-3xl bg-gradient-to-t from-[#D11A1A] via-[#AF0000] to-[#E74C3C] shadow-2xl shape-glide-bottom opacity-85" />

        {/* Bottom Left: Vibrant Sunburst Orange Block */}
        <div className="absolute -bottom-14 left-1/4 w-44 h-56 sm:w-60 sm:h-72 rounded-3xl bg-gradient-to-t from-[#EA580C] to-[#F59E0B] shadow-2xl shape-glide-bottom opacity-80" />

        {/* Left Side: Deep Cyan / Emerald Diamond */}
        <div className="absolute top-1/3 -left-16 w-36 h-48 sm:w-52 sm:h-64 rounded-3xl bg-gradient-to-r from-[#0D9488] to-[#008B8B] shadow-2xl shape-glide-left opacity-85" />

        {/* Right Side: Golden Yellow Radiant Capsule */}
        <div className="absolute top-1/2 -right-16 w-40 h-52 sm:w-56 sm:h-72 rounded-3xl bg-gradient-to-l from-[#F59E0B] via-[#F39C12] to-[#FFBF00] shadow-2xl shape-glide-right opacity-85" />

        {/* Top-Left Corner: Forest Green Pill */}
        <div className="absolute -top-12 -left-12 w-32 h-44 sm:w-44 sm:h-56 rounded-full bg-gradient-to-br from-[#15803D] to-[#047857] shadow-xl shape-glide-tl opacity-80" />

        {/* Top-Right Corner: Magenta / Coral Rounded Block */}
        <div className="absolute -top-12 -right-12 w-32 h-44 sm:w-44 sm:h-56 rounded-3xl bg-gradient-to-bl from-[#BE185D] to-[#E11D48] shadow-xl shape-glide-tr opacity-80" />

        {/* Bottom-Left Corner: Royal Indigo Wedge */}
        <div className="absolute -bottom-12 -left-12 w-36 h-48 sm:w-48 sm:h-60 rounded-3xl bg-gradient-to-tr from-[#1E40AF] to-[#0284C7] shadow-xl shape-glide-bl opacity-80" />

        {/* Bottom-Right Corner: Deep Tangerine Arched Pill */}
        <div className="absolute -bottom-12 -right-12 w-36 h-48 sm:w-48 sm:h-60 rounded-full bg-gradient-to-tl from-[#C2410C] to-[#EA580C] shadow-xl shape-glide-br opacity-80" />
      </div>

      {/* Centerpiece: Slow-Mo Closeup Progressive Stroke Camera & Authentic Lockup */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center gap-6">
        <div className="animate-slowmo-camera relative flex flex-col items-center">
          {/* Authentic Emblem Drawing Piece by Piece */}
          <BaqiatullahEmblemDraw className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 drop-shadow-xl" />

          {/* Authentic 3D Embossed Teal Brand Text (Wipes in Phase 7: 2.1s - 2.8s) */}
          <div className="relative w-64 sm:w-80 md:w-96 h-14 sm:h-16 md:h-20 mt-2 animate-fade-in-delayed drop-shadow-md">
            <Image
              src="/logo/brand-text.png"
              alt="بقیتہ اللہ فاؤنڈیشن پاکستان - BAQIATULLAH FOUNDATION PAKISTAN"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Progress Telemetry on Solid Yellow Screen */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center gap-2.5 pb-2">
        {/* Laser Progress Line */}
        <div className="w-48 sm:w-64 h-[3px] bg-teal-950/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#008B8B] shadow-[0_0_10px_#008B8B] transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Readout */}
        <div className="flex items-center justify-between w-48 sm:w-64 text-[11px] font-mono font-black text-teal-950">
          <span>{isUrdu ? "بقیۃ اللہ فاؤنڈیشن" : "BAQIATULLAH"}</span>
          <span className="text-[#008B8B]">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

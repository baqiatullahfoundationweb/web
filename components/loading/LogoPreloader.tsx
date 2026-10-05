"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import BaqiatullahLogoSvg from "./BaqiatullahLogoSvg";

export default function LogoPreloader() {
  const pathname = usePathname();
  const isUrdu = pathname.startsWith("/ur");
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [dismissed, setDismissed] = useState(true); // default dismissed until checked

  useEffect(() => {
    // Check session storage so intro plays only once per session
    const hasPlayed = sessionStorage.getItem("baiq_intro_seen");
    if (hasPlayed) {
      setDismissed(true);
      return;
    }

    setDismissed(false);
    setMounted(true);

    // Progress counter 0% -> 100% over 2.5s
    const start = Date.now();
    const duration = 2500;
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(timer);
        // Begin exit dissolve
        setTimeout(() => setExiting(true), 300);
        // Completely unmount after fade
        setTimeout(() => {
          sessionStorage.setItem("baiq_intro_seen", "true");
          setDismissed(true);
        }, 1000);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(() => {
      sessionStorage.setItem("baiq_intro_seen", "true");
      setDismissed(true);
    }, 500);
  };

  if (dismissed || !mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between p-6 sm:p-10 select-none bg-[#EDF6F6] transition-all duration-700 ease-out ${
        exiting ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
      aria-label="Foundation Logo Creation Loading Screen"
    >
      {/* Ambient Radial Pearl/Teal Aura */}
      <div className="absolute inset-0 bg-radial from-white/80 via-transparent to-[#008B8B]/10 pointer-events-none" />

      {/* Top Telemetry Header with Skip Button */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between text-[11px] font-mono font-bold tracking-widest text-gray-500 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span>BAQIATULLAH // LAHORE SANCTUARY</span>
        </div>

        <button
          onClick={handleSkip}
          className="px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-950 border border-primary/20 shadow-xs backdrop-blur-xs transition-all cursor-pointer font-sans text-xs font-bold"
        >
          {isUrdu ? "چھوڑیں Skip →" : "Skip Intro →"}
        </button>
      </div>

      {/* Centerpiece: Slow-Mo Closeup Progressive Stroke Camera */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center">
        <div className="animate-slowmo-camera relative p-8">
          <BaqiatullahLogoSvg className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 drop-shadow-2xl" />
        </div>
      </div>

      {/* Bottom Loading Progress Telemetry & Motto */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center gap-3 pb-4">
        {/* Progress Bar with Glowing Laser Tip */}
        <div className="w-48 sm:w-60 h-[2.5px] bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary shadow-[0_0_10px_#008B8B] transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Percentage Readout */}
        <div className="flex items-center justify-between w-48 sm:w-60 text-[10px] font-mono font-bold text-gray-500">
          <span>INITIALIZING</span>
          <span className="text-primary font-black">{progress}%</span>
        </div>

        {/* Localized Foundation Motto */}
        <p className="text-xs sm:text-sm font-black text-gray-800 tracking-wide text-center">
          {isUrdu
            ? "بقیۃ اللہ فاؤنڈیشن پاکستان • امید، کفالت اور وقار"
            : "BAQIATULLAH FOUNDATION PAKISTAN • HOPE & DIGNITY"}
        </p>
      </div>
    </div>
  );
}

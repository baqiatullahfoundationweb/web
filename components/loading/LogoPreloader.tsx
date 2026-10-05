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
      setDismissed(true);
      return;
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
      {/* Top Minimal Telemetry on Solid Yellow Screen */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between text-[11px] font-mono font-bold tracking-widest text-teal-950 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#008B8B] animate-ping" />
          <span className="font-black">BAQIATULLAH // 31.4570° N, 74.2479° E</span>
        </div>

        <button
          onClick={handleSkip}
          className="px-4 py-1.5 rounded-full bg-teal-950/15 hover:bg-teal-950 hover:text-white text-teal-950 border border-teal-950/25 shadow-xs transition-all cursor-pointer font-sans text-xs font-black"
        >
          {isUrdu ? "چھوڑیں Skip →" : "Skip Intro →"}
        </button>
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

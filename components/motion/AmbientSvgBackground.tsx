"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function AmbientSvgBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#EDF6F6]"
      aria-hidden="true"
    >
      {/* Parallax Background Photographic Depth Layers */}
      <div
        className="absolute -top-10 left-0 w-[600px] sm:w-[800px] h-[500px] sm:h-[650px] opacity-[0.09] transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.12}px, 0)` }}
      >
        <Image
          src="/gallery/75.jpg"
          alt=""
          fill
          className="object-cover rounded-full filter blur-[2px] saturate-150"
        />
        <div className="absolute inset-0 bg-radial from-transparent to-[#EDF6F6]" />
      </div>

      <div
        className="absolute top-[40%] right-[-100px] w-[500px] sm:w-[700px] h-[500px] sm:h-[650px] opacity-[0.08] transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translate3d(0, ${-scrollY * 0.08}px, 0)` }}
      >
        <Image
          src="/gallery/89.jpg"
          alt=""
          fill
          className="object-cover rounded-full filter blur-[2px] saturate-150"
        />
        <div className="absolute inset-0 bg-radial from-transparent to-[#EDF6F6]" />
      </div>

      <div
        className="absolute bottom-[-100px] left-[15%] w-[600px] sm:w-[750px] h-[500px] opacity-[0.09] transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.06}px, 0)` }}
      >
        <Image
          src="/gallery/20.jpg"
          alt=""
          fill
          className="object-cover rounded-full filter blur-[2px] saturate-150"
        />
        <div className="absolute inset-0 bg-radial from-transparent to-[#EDF6F6]" />
      </div>

      {/* Radiant Color Mesh Glows */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-primary/14 blur-[130px]" />
      <div className="absolute top-[35%] -right-32 w-[550px] h-[550px] rounded-full bg-amber/16 blur-[140px]" />
      <div className="absolute -bottom-32 left-[30%] w-[650px] h-[650px] rounded-full bg-primary/12 blur-[140px]" />
      <div className="absolute top-[75%] left-[-80px] w-[450px] h-[450px] rounded-full bg-accent-red/8 blur-[120px]" />

      {/* Animated Flowing SVG Waves in Theme Colors */}
      <svg
        className="absolute inset-0 w-full h-full opacity-65"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lightTealGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#008B8B" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#00A3A3" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFBF00" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="lightAmberGlow" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFBF00" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#D49E00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#008B8B" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="lightAccentRed" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AF0000" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFBF00" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Primary Sinuous Ribbon */}
        <path
          d="M -100 220 C 320 80, 680 340, 1120 160 C 1320 60, 1500 200, 1600 180"
          fill="none"
          stroke="url(#lightTealGlow)"
          strokeWidth="2"
          className="animate-[pulse_9s_ease-in-out_infinite]"
        />

        {/* Amber Flowing Harmonizer */}
        <path
          d="M -100 460 C 260 590, 720 300, 1060 530 C 1320 660, 1500 430, 1600 480"
          fill="none"
          stroke="url(#lightAmberGlow)"
          strokeWidth="2"
          strokeDasharray="10 8"
          className="animate-[pulse_12s_ease-in-out_infinite_2s]"
        />

        {/* Deep Cyan Organic Baseline */}
        <path
          d="M -100 740 C 420 660, 820 830, 1220 670 C 1420 580, 1550 700, 1600 680"
          fill="none"
          stroke="url(#lightTealGlow)"
          strokeWidth="1.75"
          className="animate-[pulse_15s_ease-in-out_infinite_4s]"
        />

        {/* Dynamic Warm Filament */}
        <path
          d="M -50 140 C 360 280, 780 90, 1180 260 C 1380 340, 1500 160, 1600 200"
          fill="none"
          stroke="url(#lightAccentRed)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          className="animate-[pulse_10s_ease-in-out_infinite_1s]"
        />
      </svg>
    </div>
  );
}

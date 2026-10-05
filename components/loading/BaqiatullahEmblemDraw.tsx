"use client";

import Image from "next/image";

interface BaqiatullahEmblemDrawProps {
  className?: string;
}

export default function BaqiatullahEmblemDraw({
  className = "w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96",
}: BaqiatullahEmblemDrawProps) {
  return (
    <div className={`relative ${className} flex items-center justify-center select-none`}>
      {/* 1. Authentic High-Res Emblem (Clean, Whole, No Slicing Lines) */}
      <div className="relative w-full h-full">
        <Image
          src="/logo/logo-teal.png"
          alt="Baqiatullah Foundation Emblem"
          fill
          className="object-contain"
          priority
        />

        {/* 2. Specular Shining Sweep - Masked directly over the teal emblem pixels */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            WebkitMaskImage: "url(/logo/logo-teal.png)",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: "url(/logo/logo-teal.png)",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        >
          {/* Luminous Diagonal Light Beam Sweeping Across the Logo */}
          <div className="w-[200%] h-full absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-shine-sweep" />
        </div>

        {/* 3. Delicate Lens Flare Glint Sparkle at the Crescent Apex */}
        <div className="absolute top-[8%] right-[32%] w-6 h-6 pointer-events-none animate-glint">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white drop-shadow-[0_0_8px_#ffffff]">
            <path
              d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface HouseClipProjectCardProps {
  title: string;
  category?: string;
  image: string;
  hdImage?: string;
  blurDataUrl?: string;
  color: string; // e.g. '#F39C12', '#E74C3C', '#A21CAF', '#0284C7'
  badgeText?: string;
  href?: string;
  className?: string;
  showTitle?: boolean;
}

export default function HouseClipProjectCard({
  title,
  category,
  image,
  hdImage,
  blurDataUrl,
  color,
  badgeText,
  href = "/donate",
  className = "",
  showTitle = true,
}: HouseClipProjectCardProps) {
  const [loaded, setLoaded] = useState(false);

  // Iconic House Silhouette polygon with pointed roof apex & signature right-wall notch
  const outerClipPath =
    "polygon(50% 0%, 100% 28%, 100% 46%, 96% 48%, 100% 50%, 100% 100%, 0% 100%, 0% 28%)";
  const innerClipPath =
    "polygon(50% 0%, 100% 28%, 100% 100%, 0% 100%, 0% 28%)";

  return (
    <Link
      href={href}
      className={`group flex flex-col items-center select-none cursor-pointer transition-transform duration-300 hover:-translate-y-2 ${className}`}
    >
      {/* 1. Outer House Silhouette Frame with Colored Architectural Border */}
      <div
        className="relative w-full aspect-[1/1.08] max-w-[280px] p-[10px] sm:p-[12px] transition-all duration-300 rounded-b-2xl filter drop-shadow-lg group-hover:drop-shadow-2xl"
        style={{
          backgroundColor: color,
          clipPath: outerClipPath,
        }}
      >
        {/* 2. Inner House Photo Container */}
        <div
          className="relative w-full h-full overflow-hidden bg-slate-100 rounded-b-xl"
          style={{
            clipPath: innerClipPath,
          }}
        >
          {/* Shimmer Skeleton Placeholder while loading */}
          {!loaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
          )}

          {/* Photo with Next.js Image Optimization, Fuzzy Blur, and Smooth Reveal */}
          <Image
            src={hdImage || image}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
            loading="lazy"
            decoding="async"
            placeholder={blurDataUrl ? "blur" : "empty"}
            blurDataURL={blurDataUrl}
            onLoad={() => setLoaded(true)}
            className={`object-cover transition-all duration-700 ease-out group-hover:scale-108 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />

          {/* Subtle Ambient Vignette for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Optional Badge on Hover */}
          {badgeText && (
            <div className="absolute bottom-3 inset-x-3 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-white/95 text-gray-900 shadow-md backdrop-blur-xs">
                {badgeText}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 3. Centered Project Title with High Contrast */}
      {showTitle && (
        <>
          <h3 className="mt-4 text-center text-base sm:text-lg lg:text-xl font-extrabold text-gray-950 group-hover:text-primary transition-colors duration-200 leading-tight px-2">
            {title}
          </h3>

          {category && (
            <span className="text-xs font-bold text-gray-600 mt-1">
              {category}
            </span>
          )}
        </>
      )}
    </Link>
  );
}

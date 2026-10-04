import React from "react";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 rounded-full shadow-2xs">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15] mb-4">
        {title}{" "}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[65ch] mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

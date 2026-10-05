"use client";

import HouseClipProjectCard from "./HouseClipProjectCard";

export interface ProgramItem {
  id: string;
  title: string;
  titleUrdu: string;
  category: string;
  categoryUrdu: string;
  image: string;
  hdImage: string;
  color: string;
  badge: string;
  badgeUrdu: string;
  href: string;
}

export const FLAGSHIP_PROGRAMS: ProgramItem[] = [
  {
    id: "disaster",
    title: "Disaster Management",
    titleUrdu: "آفات کا انتظام",
    category: "Emergency Relief",
    categoryUrdu: "ہنگامی ریلیف و امداد",
    image: "/gallery/opt/75.webp",
    hdImage: "/gallery/opt/75.webp",
    color: "#F39C12",
    badge: "Flood & Crisis Relief",
    badgeUrdu: "سیلاب اور قدرتی آفات ریلیف",
    href: "/donate",
  },
  {
    id: "health",
    title: "Health Services",
    titleUrdu: "صحت کی سہولیات",
    category: "Medical Care",
    categoryUrdu: "طبی علاج اور کلینکس",
    image: "/gallery/opt/10.webp",
    hdImage: "/gallery/opt/10.webp",
    color: "#E74C3C",
    badge: "Free Medical Camps",
    badgeUrdu: "مفت میڈیکل کیمپس و ادویات",
    href: "/donate",
  },
  {
    id: "education",
    title: "Education Program",
    titleUrdu: "تعلیمی پروگرام",
    category: "Schooling & Skills",
    categoryUrdu: "معیاری اسکولنگ و ڈیجیٹل ہنر",
    image: "/gallery/opt/49.webp",
    hdImage: "/gallery/opt/49.webp",
    color: "#A21CAF",
    badge: "250+ Enrolled Students",
    badgeUrdu: "250+ زیرِ تعلیم یتیم بچّے",
    href: "/donate",
  },
  {
    id: "wash",
    title: "WASH Program",
    titleUrdu: "صاف پانی (WASH)",
    category: "Clean Water & Hygiene",
    categoryUrdu: "صاف پینے کا پانی و حفظانِ صحت",
    image: "/gallery/opt/62.webp",
    hdImage: "/gallery/opt/62.webp",
    color: "#0284C7",
    badge: "Pure Water & Nutrition",
    badgeUrdu: "صاف پینے کا پانی و غذائیت",
    href: "/donate",
  },
];

interface HouseClipProjectsGridProps {
  isUrdu?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function HouseClipProjectsGrid({
  isUrdu = false,
  className = "",
  title,
  subtitle,
}: HouseClipProjectsGridProps) {
  const displayTitle =
    title ||
    (isUrdu
      ? "بقیۃ اللہ فاؤنڈیشن کے بنیادی فلاحی پروگرامز"
      : "Our Flagship Welfare & Relief Programs");

  const displaySubtitle =
    subtitle ||
    (isUrdu
      ? "زندگیاں سنوارنے اور محروم خاندانوں کو وقار دینے کے چار اہم ستون"
      : "Four core pillars dedicated to safeguarding vulnerable lives with hope and dignity");

  return (
    <div className={`w-full py-12 ${className}`}>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          {displayTitle}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
          {displaySubtitle}
        </p>
      </div>

      {/* 4 Iconic House-Clipped Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 items-start justify-items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {FLAGSHIP_PROGRAMS.map((prog) => (
          <HouseClipProjectCard
            key={prog.id}
            title={isUrdu ? prog.titleUrdu : prog.title}
            category={isUrdu ? prog.categoryUrdu : prog.category}
            image={prog.image}
            hdImage={prog.hdImage}
            color={prog.color}
            badgeText={isUrdu ? prog.badgeUrdu : prog.badge}
            href={isUrdu ? `/ur${prog.href}` : `/eng${prog.href}`}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
}

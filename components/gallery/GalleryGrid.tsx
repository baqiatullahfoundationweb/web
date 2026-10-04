"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export interface GalleryCategories {
  all: string;
  classes: string;
  care: string;
  activities: string;
  relief: string;
}

export interface GalleryGridProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  categories?: GalleryCategories;
  loadMoreBtnText?: string;
  remainingText?: string;
}

const DEFAULT_CATEGORIES: GalleryCategories = {
  all: "All Photos",
  classes: "Learning & Classes",
  care: "Daily Care & Meals",
  activities: "Activities & Hope",
  relief: "Emergency Relief",
};

export default function GalleryGrid({
  title = "Moments of Growth,",
  highlight = "Learning & Joy",
  subtitle = "Unfiltered photo moments documenting our children's daily educational pursuits, meals, and relief drives.",
  categories = DEFAULT_CATEGORIES,
  loadMoreBtnText = "Load More Photos",
  remainingText = "remaining",
}: GalleryGridProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeCategoryKey, setActiveCategoryKey] = useState<keyof GalleryCategories>("all");
  const [visibleCount, setVisibleCount] = useState(24);

  const categoryList: Array<{ key: keyof GalleryCategories; label: string }> = [
    { key: "all", label: categories.all },
    { key: "classes", label: categories.classes },
    { key: "care", label: categories.care },
    { key: "activities", label: categories.activities },
    { key: "relief", label: categories.relief },
  ];

  const allImages = useMemo(() => {
    return Array.from({ length: 87 }, (_, i) => {
      const id = i + 1;
      let catKey: keyof GalleryCategories = "classes";
      if (id % 4 === 1) catKey = "care";
      else if (id % 4 === 2) catKey = "activities";
      else if (id === 88 || id === 89 || id % 7 === 0) catKey = "relief";

      return {
        id,
        src: id === 88 ? "/gallery/88.jpeg" : `/gallery/${id}.jpg`,
        alt: `Baqiatullah Foundation activity ${id}`,
        categoryKey: catKey,
      };
    });
  }, []);

  const filtered = useMemo(() => {
    if (activeCategoryKey === "all") return allImages;
    return allImages.filter((img) => img.categoryKey === activeCategoryKey);
  }, [allImages, activeCategoryKey]);

  const visibleImages = filtered.slice(0, visibleCount);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categoryList.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveCategoryKey(cat.key);
              setVisibleCount(24);
            }}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeCategoryKey === cat.key
                ? "bg-primary text-white shadow-md"
                : "bg-white/95 text-gray-800 hover:text-primary hover:bg-white border border-primary/20"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {visibleImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setSelectedIdx(idx)}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-white/95 cursor-pointer border border-primary/20 shadow-md hover:shadow-xl transition-all"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              className="object-cover group-hover:scale-108 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-3 rounded-full bg-white text-primary shadow-lg">
                <Eye className="w-5 h-5 stroke-[2.5]" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filtered.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((p) => p + 24)}
            className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 border border-primary/30 text-gray-900 text-sm font-bold shadow-md hover:border-primary transition-all cursor-pointer"
          >
            {loadMoreBtnText} ({filtered.length - visibleCount} {remainingText})
          </button>
        </div>
      )}

      {/* Lightbox */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/90 text-gray-900 hover:bg-white transition-colors cursor-pointer"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev! > 0 ? prev! - 1 : visibleImages.length - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-gray-900 hover:bg-white transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={visibleImages[selectedIdx].src} alt="" fill className="object-contain" />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev! < visibleImages.length - 1 ? prev! + 1 : 0));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-gray-900 hover:bg-white transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}

"use client";

import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import PlayfulShapeCard from "./PlayfulShapeCard";
import {
  GalleryCategories,
  DEFAULT_CATEGORIES,
  generateGalleryImages,
  buildGaplessGalleryItems,
} from "./galleryData";

export interface GalleryGridProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  categories?: GalleryCategories;
  loadMoreBtnText?: string;
  remainingText?: string;
}

export default function GalleryGrid({
  title = "Moments of Growth,",
  highlight = "Learning & Joy",
  subtitle = "Unfiltered photo moments documenting our children's daily educational pursuits, meals, and relief drives.",
  categories = DEFAULT_CATEGORIES,
  loadMoreBtnText = "Load More Photos",
  remainingText = "remaining",
}: GalleryGridProps) {
  const pathname = usePathname();
  const isUrdu = pathname.startsWith("/ur");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeCat, setActiveCat] = useState<keyof GalleryCategories>("all");
  const [visibleCount, setVisibleCount] = useState(24);

  const categoryList: Array<{ key: keyof GalleryCategories; label: string }> = [
    { key: "all", label: categories.all },
    { key: "classes", label: categories.classes },
    { key: "care", label: categories.care },
    { key: "activities", label: categories.activities },
    { key: "relief", label: categories.relief },
  ];

  const allImages = useMemo(() => generateGalleryImages(), []);

  const filtered = useMemo(() => {
    if (activeCat === "all") return allImages;
    return allImages.filter((img) => img.categoryKey === activeCat);
  }, [allImages, activeCat]);

  const visibleImages = filtered.slice(0, visibleCount);

  // Generate mathematically gapless items (photos + playful character cards)
  const gridItems = useMemo(
    () => buildGaplessGalleryItems(visibleImages),
    [visibleImages]
  );

  return (
    <section className="py-16 max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title={title} highlight={highlight} subtitle={subtitle} />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categoryList.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveCat(cat.key);
              setVisibleCount(24);
            }}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeCat === cat.key
                ? "bg-primary text-white shadow-md shadow-teal-950/20"
                : "bg-white/95 text-gray-800 hover:text-primary hover:bg-white border border-primary/20 shadow-xs"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 100% Mathematically Gapless Bento Grid in 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[190px] sm:auto-rows-[200px] lg:auto-rows-[210px] grid-flow-row-dense">
        {gridItems.map((item) => {
          if (item.type === "playful") {
            return (
              <PlayfulShapeCard
                key={item.id}
                variantIndex={item.variantIndex}
                isUrdu={isUrdu}
                className={item.spanClass}
              />
            );
          }

          return (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(item.originalIdx)}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border-2 border-white ring-1 ring-primary/20 shadow-md hover:shadow-2xl transition-all duration-300 bg-slate-200 ${item.spanClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading={item.originalIdx === 0 ? "eager" : "lazy"}
                priority={item.originalIdx === 0}
                decoding="async"
                className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {item.isFeatured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#FFBF00] text-gray-950 shadow-md">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>Featured Moment</span>
                  </span>
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="p-3.5 rounded-full bg-white text-gray-950 font-extrabold shadow-2xl scale-90 group-hover:scale-100 transition-transform flex items-center gap-1.5 text-xs">
                  <Eye className="w-4 h-4 text-primary stroke-[2.5]" />
                  <span>View</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      {visibleCount < filtered.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((p) => p + 16)}
            className="px-6 py-3.5 rounded-2xl bg-white hover:bg-gray-50 border-2 border-primary/30 text-gray-950 text-sm font-black shadow-lg hover:border-primary transition-all cursor-pointer active:scale-95"
          >
            {loadMoreBtnText} ({filtered.length - visibleCount} {remainingText})
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white text-gray-950 font-bold hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((p) => (p! > 0 ? p! - 1 : visibleImages.length - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white text-gray-950 font-bold hover:bg-gray-200 transition-colors cursor-pointer shadow-xl"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={visibleImages[selectedIdx].src} alt={visibleImages[selectedIdx].alt || "Baqiatullah Foundation Pakistan gallery photo"} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 896px" />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((p) => (p! < visibleImages.length - 1 ? p! + 1 : 0));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white text-gray-950 font-bold hover:bg-gray-200 transition-colors cursor-pointer shadow-xl"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>
      )}
    </section>
  );
}

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const CATEGORIES = ["All", "Learning & Classes", "Daily Care & Meals", "Activities & Hope", "Emergency Relief"];

export default function GalleryGrid() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(24);

  // Generate 87 real image references with categories
  const allImages = useMemo(() => {
    return Array.from({ length: 87 }, (_, i) => {
      const id = i + 1;
      let category = "Learning & Classes";
      if (id % 4 === 1) category = "Daily Care & Meals";
      else if (id % 4 === 2) category = "Activities & Hope";
      else if (id === 88 || id === 89 || id % 7 === 0) category = "Emergency Relief";

      return {
        id,
        src: id === 88 ? "/gallery/88.jpeg" : `/gallery/${id}.jpg`,
        alt: `Baqiatullah Foundation welfare activity image ${id}`,
        category,
      };
    });
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return allImages;
    return allImages.filter((img) => img.category === activeCategory);
  }, [allImages, activeCategory]);

  const visibleImages = filtered.slice(0, visibleCount);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Visual Record"
        title="Moments of Growth,"
        highlight="Learning & Joy"
        subtitle="Unfiltered moments documenting our children's daily educational pursuits, meals, and community relief operations."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(24);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer interactive-tap ${
              activeCategory === cat
                ? "bg-[#008B8B] text-white shadow-sm"
                : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {visibleImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setSelectedIdx(idx)}
            className="group relative aspect-square rounded-2xl overflow-hidden glass-card cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              className="object-cover group-hover:scale-108 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-3 rounded-full glass-panel text-white shadow-lg">
                <Eye className="w-5 h-5 text-gray-900" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filtered.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 text-sm font-semibold shadow-2xs hover:border-[#008B8B] transition-all cursor-pointer interactive-tap"
          >
            Load More Photos ({filtered.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 p-2 rounded-full glass-panel text-gray-900 hover:bg-white transition-colors"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev! > 0 ? prev! - 1 : visibleImages.length - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-panel text-gray-900 hover:bg-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={visibleImages[selectedIdx].src}
              alt={visibleImages[selectedIdx].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev! < visibleImages.length - 1 ? prev! + 1 : 0));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-panel text-gray-900 hover:bg-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}

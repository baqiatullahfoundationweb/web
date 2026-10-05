export interface GalleryCategories {
  all: string;
  classes: string;
  care: string;
  activities: string;
  relief: string;
}

export const DEFAULT_CATEGORIES: GalleryCategories = {
  all: "All Photos",
  classes: "Learning & Classes",
  care: "Daily Care & Meals",
  activities: "Activities & Hope",
  relief: "Emergency Relief",
};

export interface RawGalleryImage {
  id: number;
  src: string;
  alt: string;
  categoryKey: keyof GalleryCategories;
}

export type GalleryGridItem =
  | {
      type: "image";
      id: number;
      src: string;
      alt: string;
      categoryKey: keyof GalleryCategories;
      spanClass: string;
      isFeatured?: boolean;
      originalIdx: number;
    }
  | {
      type: "playful";
      id: string;
      variantIndex: number;
      spanClass: string;
    };

export const generateGalleryImages = (): RawGalleryImage[] => {
  return Array.from({ length: 89 }, (_, i) => {
    const id = i + 1;
    let catKey: keyof GalleryCategories = "classes";
    if (id === 75 || id === 88 || id === 89 || id % 7 === 0) {
      catKey = "relief";
    } else if (id === 10 || id === 16 || id === 30 || id === 62 || id % 4 === 1) {
      catKey = "care";
    } else if (id === 24 || id === 34 || id === 54 || id % 4 === 2) {
      catKey = "activities";
    }

    return {
      id,
      src: `/gallery/opt/${id}.webp`,
      alt: `Baqiatullah Foundation activity ${id}`,
      categoryKey: catKey,
    };
  });
};

// 100% Mathematically Gapless Bento for 4-column desktop grid:
// Block A (8 cells = 2 rows): 1 Featured (2x2=4) + 2 Photos + 1 Playful + 1 Photo
// Alternates featured item left and right for an engaging magazine layout.
// Block B (4 cells = 1 row):  4 standard Photos
// Every block perfectly fills the 4-column grid with ZERO gaps.
export const buildGaplessGalleryItems = (images: RawGalleryImage[]): GalleryGridItem[] => {
  const result: GalleryGridItem[] = [];
  let playfulCount = 0;
  let blockIndex = 0;
  let i = 0;

  while (i < images.length) {
    const isAlt = blockIndex % 2 === 1;
    blockIndex++;

    if (!isAlt) {
      // Left featured: [Featured 2x2][Photo1][Photo2] / [Featured 2x2][Playful][Photo3]
      if (i < images.length) {
        result.push({
          type: "image",
          ...images[i],
          spanClass: "col-span-1 sm:col-span-2 sm:row-span-2 min-h-[220px] sm:min-h-full",
          isFeatured: true,
          originalIdx: i,
        });
        i++;
      }
      if (i < images.length) {
        result.push({
          type: "image",
          ...images[i],
          spanClass: "col-span-1 min-h-[170px] sm:min-h-full",
          originalIdx: i,
        });
        i++;
      }
      if (i < images.length) {
        result.push({
          type: "image",
          ...images[i],
          spanClass: "col-span-1 min-h-[170px] sm:min-h-full",
          originalIdx: i,
        });
        i++;
      }
      result.push({
        type: "playful",
        id: `playful-${playfulCount}`,
        variantIndex: playfulCount++,
        spanClass: "col-span-1 min-h-[170px] sm:min-h-full",
      });
      if (i < images.length) {
        result.push({
          type: "image",
          ...images[i],
          spanClass: "col-span-1 min-h-[170px] sm:min-h-full",
          originalIdx: i,
        });
        i++;
      }
    } else {
      // Right featured: [Photo1][Photo2][Featured 2x2] / [Playful][Photo3][Featured 2x2]
      if (i < images.length) {
        result.push({
          type: "image",
          ...images[i],
          spanClass: "col-span-1 min-h-[170px] sm:min-h-full",
          originalIdx: i,
        });
        i++;
      }
      if (i < images.length) {
        result.push({
          type: "image",
          ...images[i],
          spanClass: "col-span-1 min-h-[170px] sm:min-h-full",
          originalIdx: i,
        });
        i++;
      }
      if (i < images.length) {
        result.push({
          type: "image",
          ...images[i],
          spanClass: "col-span-1 sm:col-span-2 sm:row-span-2 min-h-[220px] sm:min-h-full",
          isFeatured: true,
          originalIdx: i,
        });
        i++;
      }
      result.push({
        type: "playful",
        id: `playful-${playfulCount}`,
        variantIndex: playfulCount++,
        spanClass: "col-span-1 min-h-[170px] sm:min-h-full",
      });
      if (i < images.length) {
        result.push({
          type: "image",
          ...images[i],
          spanClass: "col-span-1 min-h-[170px] sm:min-h-full",
          originalIdx: i,
        });
        i++;
      }
    }

    // Block B: Standard row — 1 row × 4 cols = 4 cells
    for (let k = 0; k < 4 && i < images.length; k++) {
      result.push({
        type: "image",
        ...images[i],
        spanClass: "col-span-1 min-h-[170px] sm:min-h-full",
        originalIdx: i,
      });
      i++;
    }
  }

  return result;
};

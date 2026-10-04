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
};

// 100% Mathematically Gapless Bento:
// Block A: 1 Feature (4 cells) + 1 Photo (1 cell) + 1 Playful (1 cell) = 6 cells (2 full rows)
// Block B: 3 Photos (3 cells) = 3 cells (1 full row)
// Every block perfectly fills the 3-column grid with ZERO gaps and ZERO orphaned rectangles.
export const buildGaplessGalleryItems = (images: RawGalleryImage[]): GalleryGridItem[] => {
  const result: GalleryGridItem[] = [];
  let playfulCount = 0;
  let i = 0;

  while (i < images.length) {
    // 1. Feature Block: 2 rows x 3 columns = 6 cells
    if (i < images.length) {
      result.push({
        type: "image",
        ...images[i],
        spanClass: "col-span-1 md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-full",
        isFeatured: true,
        originalIdx: i,
      });
      i++;
    }

    if (i < images.length) {
      result.push({
        type: "image",
        ...images[i],
        spanClass: "col-span-1 md:col-span-1 md:row-span-1 min-h-[220px] md:min-h-full",
        originalIdx: i,
      });
      i++;

      // Slot playful card directly underneath to complete the 2x3 block!
      result.push({
        type: "playful",
        id: `playful-${playfulCount}`,
        variantIndex: playfulCount++,
        spanClass: "col-span-1 md:col-span-1 md:row-span-1 min-h-[220px] md:min-h-full",
      });
    }

    // 2. Standard Row Block: 1 row x 3 columns = 3 cells
    for (let k = 0; k < 3 && i < images.length; k++) {
      result.push({
        type: "image",
        ...images[i],
        spanClass: "col-span-1 md:col-span-1 md:row-span-1 min-h-[220px] md:min-h-full",
        originalIdx: i,
      });
      i++;
    }
  }

  return result;
};

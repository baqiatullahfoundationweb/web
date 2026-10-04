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

// Mathematically gapless bento tiling: 7 photos + 2 playful cards = exactly 5 full rows x 3 columns
export const buildGaplessGalleryItems = (images: RawGalleryImage[]): GalleryGridItem[] => {
  const result: GalleryGridItem[] = [];
  let playfulCount = 0;

  for (let i = 0; i < images.length; i++) {
    const cycle = i % 7;
    const img = images[i];

    if (cycle === 0) {
      result.push({
        type: "image",
        ...img,
        spanClass: "col-span-1 md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-full",
        isFeatured: true,
        originalIdx: i,
      });
    } else if (cycle === 1) {
      result.push({
        type: "image",
        ...img,
        spanClass: "col-span-1 md:col-span-1 md:row-span-1 min-h-[220px] md:min-h-full",
        originalIdx: i,
      });
      // Slot playful card directly underneath item 1 to fill row 2 of column 3!
      result.push({
        type: "playful",
        id: `playful-${i}`,
        variantIndex: playfulCount++,
        spanClass: "col-span-1 md:col-span-1 md:row-span-1 min-h-[220px] md:min-h-full",
      });
    } else if (cycle === 5) {
      result.push({
        type: "image",
        ...img,
        spanClass: "col-span-1 md:col-span-1 md:row-span-1 min-h-[220px] md:min-h-full",
        originalIdx: i,
      });
      // Slot playful card directly underneath item 5 to fill row 5 of column 1!
      result.push({
        type: "playful",
        id: `playful-${i}`,
        variantIndex: playfulCount++,
        spanClass: "col-span-1 md:col-span-1 md:row-span-1 min-h-[220px] md:min-h-full",
      });
    } else if (cycle === 6) {
      result.push({
        type: "image",
        ...img,
        spanClass: "col-span-1 md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-full",
        isFeatured: true,
        originalIdx: i,
      });
    } else {
      // cycles 2, 3, 4 (the clean 3-across row)
      result.push({
        type: "image",
        ...img,
        spanClass: "col-span-1 md:col-span-1 md:row-span-1 min-h-[220px] md:min-h-full",
        originalIdx: i,
      });
    }
  }

  return result;
};

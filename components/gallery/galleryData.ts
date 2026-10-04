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

// Seamless 7-item tiling: 0(2x2) + 1(1x2) + 2(1x1) + 3(1x1) = 2 rows x 4 cols; 4(2x1) + 5(1x1) + 6(1x1) = 1 row x 4 cols
export const getBentoClasses = (idx: number) => {
  const mod = idx % 7;
  if (mod === 0) return "sm:col-span-2 sm:row-span-2 h-[340px] sm:h-[460px]";
  if (mod === 1) return "sm:col-span-1 sm:row-span-2 h-[300px] sm:h-[460px]";
  if (mod === 4) return "sm:col-span-2 h-[220px]";
  return "sm:col-span-1 h-[220px]";
};

export const generateGalleryImages = () => {
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

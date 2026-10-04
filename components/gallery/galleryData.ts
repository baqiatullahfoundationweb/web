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

// Wide-aspect bento distribution: No narrow vertical cards, all expansive and wide
export const getBentoClasses = (idx: number) => {
  const mod = idx % 6;
  if (mod === 0) return "md:col-span-2 h-[340px] sm:h-[440px]";
  if (mod === 1) return "md:col-span-1 h-[340px] sm:h-[440px]";
  if (mod === 2) return "md:col-span-1 h-[300px] sm:h-[380px]";
  if (mod === 3) return "md:col-span-2 h-[300px] sm:h-[380px]";
  if (mod === 4) return "md:col-span-2 h-[300px] sm:h-[380px]";
  return "md:col-span-1 h-[300px] sm:h-[380px]";
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

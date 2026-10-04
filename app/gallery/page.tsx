import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Photo Gallery | Baqiatullah Foundation Pakistan",
  description:
    "View over 80 authentic photos capturing moments of education, daily care, flood relief, and community activities at Baqiatullah Foundation.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <GalleryGrid />
      <CtaBanner />
    </div>
  );
}

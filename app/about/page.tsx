import type { Metadata } from "next";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import ValuesGrid from "@/components/about/ValuesGrid";
import TeamSection from "@/components/about/TeamSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Baqiatullah Foundation Pakistan",
  description:
    "Learn about our 8-year journey, mission, vision, and leadership team providing holistic orphan care, schooling, and shelter across Pakistan.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <OurStory />
      <MissionVision />
      <ValuesGrid />
      <TeamSection />
      <CtaBanner />
    </div>
  );
}

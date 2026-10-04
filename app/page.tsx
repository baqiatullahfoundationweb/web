import Hero from "@/components/home/Hero";
import StatsCounter from "@/components/home/StatsCounter";
import HighlightsGrid from "@/components/home/HighlightsGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedRelief from "@/components/home/FeaturedRelief";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatsCounter />
      <HighlightsGrid />
      <WhyChooseUs />
      <FeaturedRelief />
      <CtaBanner />
    </div>
  );
}

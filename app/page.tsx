import HeroSlider from "@/components/home/HeroSlider";
import ImpactSection from "@/components/home/ImpactSection";
import HomeAbout from "@/components/home/HomeAbout";
import FeaturedCauses from "@/components/home/FeaturedCauses";
import VolunteersSection from "@/components/home/VolunteersSection";
import EventsSection from "@/components/home/EventsSection";
import GetInvolved from "@/components/home/GetInvolved";
import ProjectSpotlight from "@/components/home/ProjectSpotlight";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Carousel Slider */}
      <HeroSlider />

      {/* 2. Impact Section: Achievements & Metrics */}
      <ImpactSection />

      {/* 3. About Section: Mission, Narrative & Photo Collage */}
      <HomeAbout />

      {/* 4. Featured Causes: Urgent Campaigns with Progress */}
      <FeaturedCauses />

      {/* 5. Volunteers Section: Ground Mentors & Contributors */}
      <VolunteersSection />

      {/* 6. Events Section: Upcoming Activities & Camps */}
      <EventsSection />

      {/* 7. Get Involved: 4 Participation Pathways */}
      <GetInvolved />

      {/* 8. Flagship Project Spotlight */}
      <ProjectSpotlight />

      {/* 9. Final Call to Action */}
      <CtaBanner />
    </div>
  );
}

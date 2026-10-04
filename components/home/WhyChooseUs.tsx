import { BookOpen, Utensils, Home } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const PILLARS = [
  {
    icon: BookOpen,
    title: "Education Excellence",
    description: "Personalized tutoring, digital computer labs, and scholarships supporting each student from primary school through higher education.",
  },
  {
    icon: Utensils,
    title: "Nutrition & Health",
    description: "Over 100,000 warm, nutritious meals prepared yearly with regular medical screenings, vaccinations, and dental checkups.",
  },
  {
    icon: Home,
    title: "Safe & Caring Sanctuary",
    description: "A nurturing home environment with round-the-clock caregivers, clean living quarters, sports activities, and psychological well-being.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-[#FBFBFA] border-y border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Foundation Core"
          title="A Comprehensive Standard of"
          highlight="Loving Care"
          subtitle="We address every dimension of a child's growth so they develop into self-reliant, compassionate leaders of tomorrow."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#EAEAEA] shadow-2xs hover:shadow-md hover:border-[#008B8B]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFBF00]/15 flex items-center justify-center text-[#997300] mb-5">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2.5">{pillar.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

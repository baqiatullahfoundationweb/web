import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const CAUSES = [
  {
    title: "Emergency Flood Relief Campaign Jhang",
    category: "Disaster Emergency",
    image: "/gallery/88.jpeg",
    raised: "PKR 2,870,000",
    goal: "PKR 3,500,000",
    percent: 82,
    description: "Delivering life-saving dry food parcels, clean water filtration kits, and medical aid to 300 displaced families.",
  },
  {
    title: "Orphan Daily Meals & Nutrition Fund",
    category: "Ongoing Nutrition",
    image: "/gallery/16.jpg",
    raised: "PKR 1,360,000",
    goal: "PKR 2,000,000",
    percent: 68,
    description: "Ensuring 250+ resident children receive three fresh, wholesome daily meals, milk, and medical dietary supplements.",
  },
  {
    title: "Digital Literacy & High-School Tuition",
    category: "Education & Growth",
    image: "/gallery/2.jpg",
    raised: "PKR 1,330,000",
    goal: "PKR 1,800,000",
    percent: 74,
    description: "Funding modern computer lab equipment, coding mentorship, private school fees, and academic textbooks.",
  },
];

export default function FeaturedCauses() {
  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFA] border-y border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Urgent Priorities"
          title="Featured Causes Needing"
          highlight="Your Generous Hand"
          subtitle="Directly support targeted campaigns where urgent funding provides immediate shelter, food, and classroom seats."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAUSES.map((cause, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#EAEAEA] shadow-2xs hover:shadow-xl hover:border-[#008B8B]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cause Photo */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={cause.image}
                    alt={cause.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFBF00] text-gray-950 shadow-sm">
                    {cause.category}
                  </div>
                </div>

                {/* Cause Information */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                    {cause.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {cause.description}
                  </p>

                  {/* Progress Meter */}
                  <div className="space-y-2 mb-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-600">
                        Raised: <strong className="text-gray-900 font-mono">{cause.raised}</strong>
                      </span>
                      <span className="text-[#008B8B] font-mono">{cause.percent}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#008B8B] to-[#FFBF00] rounded-full"
                        style={{ width: `${cause.percent}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-gray-400 text-right">
                      Goal: {cause.goal}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <Button href="/donate" variant="donate" size="md" className="w-full justify-center shadow-sm">
                  <Heart className="w-4 h-4 fill-current mr-2" />
                  <span>Donate to This Cause</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

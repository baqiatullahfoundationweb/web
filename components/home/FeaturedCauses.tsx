import Image from "next/image";
import { Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export interface CauseItem {
  title: string;
  category: string;
  image: string;
  raised: string;
  goal: string;
  percent: number;
  description: string;
}

export interface FeaturedCausesProps {
  causes?: CauseItem[];
  eyebrow?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_CAUSES: CauseItem[] = [
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

export default function FeaturedCauses({
  causes = DEFAULT_CAUSES,
  eyebrow = "Urgent Priorities",
  title = "Featured Causes Needing",
  highlight = "Your Generous Hand",
  subtitle = "Directly support targeted campaigns where urgent funding provides immediate shelter, food, and classroom seats.",
  className = "",
}: FeaturedCausesProps) {
  return (
    <section className={`relative py-20 sm:py-28 overflow-hidden ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-96 h-96 bg-amber/12 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl overflow-hidden border border-white/80 shadow-lg hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={cause.image}
                    alt={cause.title}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-amber text-gray-950 shadow-md">
                    {cause.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                    {cause.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {cause.description}
                  </p>

                  <div className="space-y-2 mb-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-600">
                        Raised: <strong className="text-gray-900 font-mono">{cause.raised}</strong>
                      </span>
                      <span className="text-primary font-mono font-bold">{cause.percent}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-primary/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary via-primary-light to-amber rounded-full"
                        style={{ width: `${cause.percent}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-gray-500 text-right">
                      Goal: {cause.goal}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button href="/donate" variant="donate" size="md" className="w-full justify-center shadow-md">
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

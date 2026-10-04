import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";
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
  title?: string;
  highlight?: string;
  subtitle?: string;
  raisedLabel?: string;
  goalLabel?: string;
  fundedLabel?: string;
  donateBtnText?: string;
  detailsBtnText?: string;
  donateHref?: string;
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
  title = "Featured Causes Needing",
  highlight = "Your Generous Hand",
  subtitle = "Directly support targeted campaigns where urgent funding provides immediate shelter, food, and classroom seats.",
  raisedLabel = "Raised:",
  goalLabel = "Goal:",
  fundedLabel = "Funded",
  donateBtnText = "Donate Now",
  detailsBtnText = "Details",
  donateHref = "/donate",
  className = "",
}: FeaturedCausesProps) {
  return (
    <section className={`relative py-20 sm:py-28 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={title}
          highlight={highlight}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, idx) => (
            <div
              key={idx}
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 border border-white/15 hover:border-primary/50"
            >
              <Image
                src={cause.image}
                alt={cause.title}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B0D] via-[#020B0D]/65 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber text-gray-950 shadow-md">
                  {cause.category}
                </span>
                <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-white/10 backdrop-blur-md text-white border border-white/20">
                  {cause.percent}% {fundedLabel}
                </span>
              </div>

              <div className="relative z-10 text-white">
                <h3 className="text-xl font-bold text-white mb-2 leading-snug drop-shadow-sm group-hover:text-primary-light transition-colors">
                  {cause.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {cause.description}
                </p>

                <div className="space-y-1.5 mb-5">
                  <div className="w-full h-2 rounded-full bg-white/15 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-amber rounded-full"
                      style={{ width: `${cause.percent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-300 font-mono">
                    <span>{raisedLabel} <strong className="text-white">{cause.raised}</strong></span>
                    <span>{goalLabel} {cause.goal}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button href={donateHref} variant="donate" size="sm" className="flex-1 justify-center shadow-lg shadow-red-950/40">
                    <Heart className="w-3.5 h-3.5 fill-current mr-1.5" />
                    <span>{donateBtnText}</span>
                  </Button>
                  <Button
                    href={donateHref}
                    variant="glass"
                    size="sm"
                    className="bg-white text-gray-950 hover:bg-gray-100 font-extrabold shadow-md border border-gray-200"
                  >
                    <span>{detailsBtnText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

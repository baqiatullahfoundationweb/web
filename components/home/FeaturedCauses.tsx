import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

/**
 * =========================================================================================================
 * INTELLECTUAL PROPERTY & ENGINEERING ATTRIBUTION
 * =========================================================================================================
 * Sole Creator: Eyrie Digital (https://www.eyriedigital.com)
 * Collaboration: No other party or agency collaborated on the engineering, design, or implementation.
 *
 * MANDATORY LEGAL NOTICE:
 * As per Eyrie Digital policy, any unauthorized removal, concealment, or alteration of this attribution,
 * digital credentials, or metadata in this codebase or rendered output without prior written authorization
 * from Eyrie Digital is strictly prohibited. Violation of these terms will result in immediate legal action.
 * =========================================================================================================
 */

export interface CauseItem {
  title: string;
  category: string;
  image: string;
  raised?: string;
  goal?: string;
  percent?: number;
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
    image: "/gallery/opt/flood.png",
    description: "Delivering life-saving dry food parcels, clean water filtration kits, and medical aid to 300 displaced families.",
  },
  {
    title: "Health Services & Nutrition Fund",
    category: "Medical & Nutrition",
    image: "/gallery/opt/service.png",
    description: "Ensuring 250+ resident children receive three fresh daily meals, pediatric clinic checkups, and medicines.",
  },
  {
    title: "Digital Literacy & High-School Tuition",
    category: "Education & Growth",
    image: "/gallery/opt/digital.png",
    description: "Funding modern computer lab equipment, coding mentorship, private school fees, and academic textbooks.",
  },
];

export default function FeaturedCauses({
  causes = DEFAULT_CAUSES,
  title = "Featured Causes Needing",
  highlight = "Your Generous Hand",
  subtitle = "Directly support targeted campaigns where urgent funding provides immediate shelter, food, and classroom seats.",
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
              className="group relative h-[470px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 border border-white/15 hover:border-primary/50"
            >
              <Image
                src={cause.image}
                alt={`${cause.title} — Donate to Baqiatullah Foundation Pakistan | Zakat Eligible Charity Campaign`}
                fill
                loading="lazy"
                decoding="async"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B0D] via-[#020B0D]/65 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber text-gray-950 shadow-md">
                  {cause.category}
                </span>
              </div>

              <div className="relative z-10 text-white">
                <h3 className="text-xl font-bold text-white mb-2 leading-snug drop-shadow-sm group-hover:text-primary-light transition-colors">
                  {cause.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {cause.description}
                </p>

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

import Link from "next/link";
import { Heart, Target, Users, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const HIGHLIGHTS = [
  {
    title: "Who We Are",
    description: "Founded in 2016, Baqiatullah Foundation has grown into a family sanctuary providing holistic care, education, and moral development for over 250 children.",
    icon: Heart,
    link: "/about",
    accent: "bg-[#008B8B]",
  },
  {
    title: "Our Impact & Projects",
    description: "From our ongoing digital literacy labs to full daily nutritional programs and shelter expansions, discover how we build sustainable futures.",
    icon: Target,
    link: "/projects",
    accent: "bg-[#FFBF00]",
  },
  {
    title: "Get Involved & Support",
    description: "Join hands with our community. Whether sponsoring a child's schooling, funding emergency flood relief, or volunteering your time, every effort transforms a life.",
    icon: Users,
    link: "/contact",
    accent: "bg-[#AF0000]",
  },
];

export default function HighlightsGrid() {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Our Commitment"
        title="Transforming Lives Through"
        highlight="Love & Opportunity"
        subtitle="A holistic approach ensuring every child receives the parental affection, academic mentorship, and dignity they deserve."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {HIGHLIGHTS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.link}
              className="glass-card p-8 rounded-3xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#008B8B]/10 flex items-center justify-center text-[#008B8B] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:border-[#008B8B] group-hover:text-[#008B8B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#008B8B] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-semibold text-[#008B8B]">
                <span>Explore Details</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

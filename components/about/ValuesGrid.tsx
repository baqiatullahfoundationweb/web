import { Heart, Award, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export interface ValueItem {
  title: string;
  desc: string;
}

export interface ValuesGridProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  items?: ValueItem[];
}

const DEFAULT_ICONS: LucideIcon[] = [Heart, Award, ShieldCheck, Sparkles];

export default function ValuesGrid({
  title = "The Pillars That Define",
  highlight = "Our Care Philosophy",
  subtitle = "Every policy, meal, and lesson is guided by four core values of empathy, integrity, transparency, and lifelong commitment.",
  items = [
    { title: "Maternal Affection", desc: "Providing family warmth and emotional healing to replace the loneliness of orphanhood." },
    { title: "Academic Excellence", desc: "Empowering minds with English-medium schooling, digital skills, and university scholarships." },
    { title: "Uncompromising Integrity", desc: "Maintaining 100% financial transparency with every rupee accounted for and audited." },
    { title: "Lifelong Empowerment", desc: "Guiding children into self-reliant adulthood, careers, and honorable social contribution." },
  ],
}: ValuesGridProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title={title}
          highlight={highlight}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((val, idx) => {
            const Icon = DEFAULT_ICONS[idx % DEFAULT_ICONS.length];
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md p-7 rounded-3xl border border-primary/20 shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#008B8B]/10 text-primary flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="text-lg font-extrabold text-gray-950 mb-2">{val.title}</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

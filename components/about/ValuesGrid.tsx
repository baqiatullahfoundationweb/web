import { Heart, Award, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const VALUES = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "Treating every orphan with unconditional love, warmth, and familial dignity.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Uncompromising standards in living care, nutrition, and academic rigor.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Complete financial transparency, ethical stewardship, and honest reporting.",
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    desc: "Instilling confidence and self-sufficiency so children shape their own destiny.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="py-16 bg-[#FBFBFA] border-y border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Core Ethos"
          title="Guiding Principles That"
          highlight="Define Our Work"
          subtitle="The moral foundation that informs every decision, caregiver interaction, and program at Baqiatullah."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#EAEAEA] shadow-2xs hover:shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#008B8B]/10 text-[#008B8B] flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

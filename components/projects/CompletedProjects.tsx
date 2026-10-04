import Image from "next/image";
import { CheckCircle2, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export interface CompletedProjectItem {
  title: string;
  desc: string;
  image: string;
  impact: string;
}

export interface CompletedProjectsProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  items?: CompletedProjectItem[];
}

export default function CompletedProjects({
  title = "Completed Welfare Milestones &",
  highlight = "Impact Deliveries",
  subtitle = "Major humanitarian initiatives executed with complete community success.",
  items = [
    { title: "Jhang Emergency Flood Relief", desc: "Supplied 300 vulnerable families with multi-week food rations, water filtration kits, and medical aid.", image: "/gallery/88.jpeg", impact: "300 Families Supported" },
    { title: "Modern IT Computer Lab", desc: "Installed 35 desktop workstations with high-speed internet and coding mentorship curriculum.", image: "/gallery/49.jpg", impact: "100% Student Digital Literacy" },
    { title: "Healthcare Screening Drive", desc: "Completed comprehensive dental and pediatric assessments for all 250+ resident children.", image: "/gallery/10.jpg", impact: "250+ Children Screened" },
  ],
}: CompletedProjectsProps) {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/20 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFBF00]/20 text-gray-950">
                    {item.impact}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-950 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-primary mt-4">
              <Heart className="w-3.5 h-3.5 fill-current text-accent-red" />
              <span>{item.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

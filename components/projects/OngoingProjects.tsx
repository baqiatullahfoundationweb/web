import Image from "next/image";
import { BookOpen, Utensils, Home, type LucideIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export interface OngoingProjectItem {
  title: string;
  desc: string;
  image: string;
  progress: number;
  status: string;
}

export interface OngoingProjectsProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  fundedLabel?: string;
  supportBtnText?: string;
  supportHref?: string;
  items?: OngoingProjectItem[];
}

const DEFAULT_ICONS: LucideIcon[] = [BookOpen, Utensils, Home];

export default function OngoingProjects({
  title = "Current Programs Transforming",
  highlight = "Young Lives",
  subtitle = "Transparent progress tracking on key welfare and educational programs active today.",
  fundedLabel = "Funded / Completed",
  supportBtnText = "Support This Program",
  supportHref = "/donate",
  items = [
    { title: "Education Excellence Program", desc: "Providing customized tutoring, English proficiency, and school fees to ensure academic potential.", image: "/gallery/2.jpg", progress: 75, status: "Active Phase II" },
    { title: "Nutrition & Health Initiative", desc: "Supplying balanced, high-protein daily meals alongside pediatric examinations and hygiene kits.", image: "/gallery/16.jpg", progress: 90, status: "Active Ongoing" },
    { title: "Housing & Dorm Expansion", desc: "Constructing modern living quarters and study halls to welcome more vulnerable children.", image: "/gallery/49.jpg", progress: 45, status: "Construction" },
  ],
}: OngoingProjectsProps) {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => {
          const Icon = DEFAULT_ICONS[idx % DEFAULT_ICONS.length];
          return (
            <div key={idx} className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden flex flex-col justify-between border border-primary/20 shadow-xl hover:shadow-2xl transition-all">
              <div>
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-xs font-bold bg-[#008B8B] text-white shadow-md">
                    {item.status}
                  </div>
                  <div className="absolute bottom-3.5 left-3.5 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#008B8B] shadow-sm">
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-gray-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-6 font-normal">{item.desc}</p>

                  <div className="space-y-1.5 mb-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-600">{fundedLabel}</span>
                      <span className="text-[#008B8B] font-mono">{item.progress}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#008B8B] to-[#FFBF00] rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button href={supportHref} variant="teal" size="md" className="w-full justify-center shadow-md">
                  <span>{supportBtnText}</span>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

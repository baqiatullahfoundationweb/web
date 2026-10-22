import Image from "next/image";
import Link from "next/link";
import { BookOpen, Utensils, Home, type LucideIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export interface OngoingProjectItem {
  title: string;
  desc: string;
  image: string;
  progress: number;
  status: string;
  /** Optional per-item detail page link; falls back to supportHref */
  detailHref?: string;
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
  supportBtnText = "Support This Program",
  supportHref = "/donate",
  items = [
    { title: "Education Excellence Program", desc: "Providing customized tutoring, English proficiency, and school fees to ensure academic potential.", image: "/projects/education.png", progress: 75, status: "Active Phase II" },
    { title: "Nutrition & Health Initiative", desc: "Supplying balanced, high-protein daily meals alongside pediatric examinations and hygiene kits.", image: "/gallery/opt/service.png", progress: 90, status: "Active Ongoing" },
    { title: "Clean Water (WASH) Program", desc: "Installing solar-powered clean drinking water filtration plants and sanitation facilities.", image: "/projects/wash-hd.webp", progress: 65, status: "Active Phase I" },
  ],
}: OngoingProjectsProps) {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => {
          const Icon = DEFAULT_ICONS[idx % DEFAULT_ICONS.length];
          const cardHref = item.detailHref ?? supportHref;
          return (
            <div key={idx} className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden flex flex-col justify-between border border-primary/20 shadow-xl hover:shadow-2xl transition-all">
              <div>
                <Link href={cardHref} className="block group">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      decoding="async"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-xs font-bold bg-[#008B8B] text-white shadow-md">
                      {item.status}
                    </div>
                    <div className="absolute bottom-3.5 left-3.5 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#008B8B] shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <Link href={cardHref} className="hover:text-primary transition-colors">
                    <h3 className="text-xl font-extrabold text-gray-950 mb-2">{item.title}</h3>
                  </Link>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 font-normal">{item.desc}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button href={cardHref} variant="teal" size="md" className="w-full justify-center shadow-md">
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

import Image from "next/image";
import { BookOpen, Utensils, Home } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const ONGOING = [
  {
    title: "Education Excellence Program",
    desc: "Providing customized tutoring, English proficiency, and school fees to ensure every student reaches full academic potential.",
    image: "/gallery/2.jpg",
    icon: BookOpen,
    progress: 75,
    status: "Active Phase II",
  },
  {
    title: "Nutrition & Health Initiative",
    desc: "Supplying balanced, high-protein daily meals alongside pediatric examinations, hygiene kits, and medical emergency care.",
    image: "/gallery/16.jpg",
    icon: Utensils,
    progress: 90,
    status: "Active Ongoing",
  },
  {
    title: "Housing & Dorm Expansion",
    desc: "Constructing modern living quarters and recreational study halls to welcome more vulnerable children awaiting residential care.",
    image: "/gallery/49.jpg",
    icon: Home,
    progress: 45,
    status: "Construction",
  },
];

export default function OngoingProjects() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Active Initiatives"
        title="Current Programs Transforming"
        highlight="Young Lives"
        subtitle="Transparent progress tracking on the key welfare and infrastructure programs active today."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ONGOING.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#008B8B] text-white shadow-sm">
                    {item.status}
                  </div>
                  <div className="absolute bottom-3.5 left-3.5 w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-[#008B8B]">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.desc}</p>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 mb-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-500">Funded / Completed</span>
                      <span className="text-[#008B8B]">{item.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#008B8B] to-[#FFBF00] rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button href="/donate" variant="teal" size="sm" className="w-full justify-center">
                  Support This Program
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

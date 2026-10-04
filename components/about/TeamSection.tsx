import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export interface TeamMemberItem {
  name: string;
  role: string;
  desc: string;
  image: string;
}

export interface TeamSectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  members?: TeamMemberItem[];
}

const DEFAULT_MEMBERS: TeamMemberItem[] = [
  {
    name: "Muhammad Abbas Raza",
    role: "Founder & Executive Director",
    image: "/gallery/20.jpg",
    desc: "Leading grassroots child welfare initiatives across Pakistan with over 15 years of humanitarian service.",
  },
  {
    name: "Dr. Samina Kausar",
    role: "Director of Pediatric Care",
    image: "/gallery/30.jpg",
    desc: "Supervising maternal health screenings, nutritional diets, and child emotional development programs.",
  },
  {
    name: "Syed Ali Haider",
    role: "Head of Academic Programs",
    image: "/gallery/35.jpg",
    desc: "Overseeing primary education, STEM computer labs, and higher secondary tuition pipelines.",
  },
];

export default function TeamSection({
  title = "Dedicated Humanitarians Behind",
  highlight = "Baqiatullah Foundation",
  subtitle = "Meet the directors, trustees, and operational stewards directing our educational mission.",
  members = DEFAULT_MEMBERS,
}: TeamSectionProps) {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden flex flex-col justify-between border border-primary/20 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="relative h-64 sm:h-72 w-full bg-gray-100 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-extrabold text-gray-950 mb-1">{member.name}</h4>
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">{member.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

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
    name: "Zain Ali",
    role: "Founder & Director",
    image: "/team/image.png",
    desc: "Leading the Foundation’s work to support orphaned and vulnerable children.",
  },
  {
    name: "Aleena Maryam",
    role: "Chairperson",
    image: "/team/chairperson.jpg",
    desc: "Providing leadership and guidance as Chairperson of the Foundation.",
  },
  {
    name: "Syed Sajjad Hussain",
    role: "Education Coordinator",
    image: "/team/educationist.jpg",
    desc: "Coordinating the Foundation’s education programs.",
  },
  {
    name: "Sohail Raza",
    role: "Finance Secretary",
    image: "/team/finance.jpg",
    desc: "Managing the Foundation’s financial administration.",
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
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain object-center hover:scale-105 transition-transform duration-500"
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

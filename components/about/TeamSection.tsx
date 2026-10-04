import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const TEAM = [
  {
    name: "Mr. Zain Ali",
    role: "Founder & Executive Director",
    image: "/team/founder2.jpg",
    bio: "Pioneered Baqiatullah Foundation in 2016 with a commitment to providing vulnerable orphans with family security and educational opportunity.",
  },
  {
    name: "Aleena Maryam",
    role: "Chairperson",
    image: "/team/chairperson.jpg",
    bio: "Oversees governance, institutional partnerships, and child welfare standards to ensure world-class care and emotional growth.",
  },
  {
    name: "Syed Sajjad Hussain",
    role: "Education Coordinator",
    image: "/team/educationist.jpg",
    bio: "Leads curriculum development, educational mentorship, and vocational training across partner schools and internal academies.",
  },
  {
    name: "Sohail Raza",
    role: "Finance Secretary",
    image: "/team/finance.jpg",
    bio: "Ensures rigorous fiscal accountability, transparent audit oversight, and ethical donor fund allocation for all welfare initiatives.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Leadership & Trust"
        title="Dedicated Stewards of"
        highlight="Our Mission"
        subtitle="Meet the experienced trustees and professionals working tirelessly each day to serve Pakistan's children."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {TEAM.map((member, idx) => (
          <div
            key={idx}
            className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between"
          >
            <div className="relative h-64 sm:h-72 w-full bg-gray-100 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-xs font-semibold text-[#008B8B] uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { HeartHandshake, UserCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export interface VolunteerItem {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface VolunteersSectionProps {
  volunteers?: VolunteerItem[];
  title?: string;
  highlight?: string;
  subtitle?: string;
  badgeText?: string;
  calloutTitle?: string;
  calloutDesc?: string;
  calloutBtnText?: string;
  contactHref?: string;
  className?: string;
}

const DEFAULT_VOLUNTEERS: VolunteerItem[] = [
  {
    name: "Zain Ali",
    role: "Founder & Executive Director",
    image: "/team/founder.jpg",
    quote: "Creating loving mentorship circles and providing complete care so every orphan grows with honor, quality education, and self-reliance.",
  },
  {
    name: "Dr. Samina Kausar",
    role: "Chairperson & Senior Trustee",
    image: "/team/chairperson.jpg",
    quote: "Ensuring every young girl and boy receives routine health screenings, nutrition monitoring, and compassionate care.",
  },
  {
    name: "Syed Ali Haider",
    role: "Head of Academic Programs",
    image: "/team/educationist.jpg",
    quote: "Teaching digital literacy, STEM curricula, and academic mastery to open doors for children in modern careers.",
  },
];

export default function VolunteersSection({
  volunteers = DEFAULT_VOLUNTEERS,
  title = "Showcasing Our Dedicated",
  highlight = "Volunteers",
  subtitle = "Recognizing the extraordinary doctors, teachers, and compassionate citizens who give their time and love to mentor our children.",
  badgeText = "Verified Foundation Volunteer",
  calloutTitle = "Want to Make a Direct Difference?",
  calloutDesc = "Join our 85+ active volunteers in Lahore for weekend tutoring, computer literacy, sports mentoring, or medical health camps.",
  calloutBtnText = "Join as a Volunteer",
  contactHref = "/contact",
  className = "",
}: VolunteersSectionProps) {
  return (
    <section className={`relative py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {volunteers.map((v, idx) => (
          <div
            key={idx}
            className="group relative h-[440px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 border border-white/15 hover:border-primary/50"
          >
            <Image
              src={v.image}
              alt={v.name}
              fill
              className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B0D] via-[#020B0D]/65 to-transparent" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-amber border border-white/20">
                {v.role}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>

            <div className="relative z-10 text-white">
              <h4 className="text-2xl font-extrabold text-white mb-2 leading-tight drop-shadow-xs">
                {v.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-4">
                &ldquo;{v.quote}&rdquo;
              </p>
              <div className="pt-2 border-t border-white/15 flex items-center gap-1.5 text-xs font-bold text-amber">
                <span>{badgeText}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 p-8 sm:p-12 text-white">
        <Image
          src="/gallery/opt/75.webp"
          alt="Volunteers with community"
          fill
          loading="lazy"
          decoding="async"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B0D]/95 via-[#020B0D]/80 to-primary/60" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">{calloutTitle}</h4>
            <p className="text-sm text-slate-200 max-w-xl">
              {calloutDesc}
            </p>
          </div>
          <Button href={contactHref} variant="gold" size="lg" className="shrink-0 shadow-2xl hover:scale-105 transition-all text-gray-950 font-black">
            <HeartHandshake className="w-5 h-5 mr-2 stroke-[2.5]" />
            <span>{calloutBtnText}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

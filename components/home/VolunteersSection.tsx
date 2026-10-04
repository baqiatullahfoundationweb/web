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
  className?: string;
}

const DEFAULT_VOLUNTEERS: VolunteerItem[] = [
  {
    name: "Dr. Fatima Zahra",
    role: "Medical & Health Caregiver",
    image: "/gallery/30.jpg",
    quote: "Ensuring every young girl and boy receives routine health screenings, nutrition monitoring, and preventative care.",
  },
  {
    name: "Hamza Tariq",
    role: "Youth STEM & Coding Mentor",
    image: "/gallery/35.jpg",
    quote: "Teaching digital literacy and web development on weekends to open doors for children in modern tech careers.",
  },
  {
    name: "Zainab Raza",
    role: "Educational Tutor & Art Guide",
    image: "/gallery/14.jpg",
    quote: "Creating creative art therapies and English reading circles so children express their imaginations freely.",
  },
];

export default function VolunteersSection({
  volunteers = DEFAULT_VOLUNTEERS,
  title = "Showcasing Our Dedicated",
  highlight = "Volunteers",
  subtitle = "Recognizing the extraordinary doctors, teachers, and compassionate citizens who give their time and love to mentor our children.",
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
            {/* Full-bleed real photograph */}
            <Image
              src={v.image}
              alt={v.name}
              fill
              className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B0D] via-[#020B0D]/65 to-transparent" />

            {/* Top Role Indicator */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-amber border border-white/20">
                {v.role}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 text-white">
              <h4 className="text-2xl font-extrabold text-white mb-2 leading-tight drop-shadow-xs">
                {v.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-4">
                &ldquo;{v.quote}&rdquo;
              </p>
              <div className="pt-2 border-t border-white/15 flex items-center gap-1.5 text-xs font-bold text-amber">
                <span>Verified Foundation Volunteer</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Volunteer Action Callout */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 p-8 sm:p-12 text-white">
        <Image
          src="/gallery/75.jpg"
          alt="Volunteers with community"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B0D]/95 via-[#020B0D]/80 to-primary/60" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="text-left space-y-2">
            <h4 className="text-2xl sm:text-3xl font-bold text-white">Want to Make a Direct Difference?</h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Join our 85+ active volunteers in Lahore for weekend tutoring, computer literacy, sports mentoring, or medical health camps.
            </p>
          </div>
          <Button href="/contact" variant="glass" size="lg" className="shrink-0 bg-white/15 hover:bg-white/30 text-white border-white/30 shadow-xl">
            <HeartHandshake className="w-4 h-4 mr-2" />
            <span>Join as a Volunteer</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

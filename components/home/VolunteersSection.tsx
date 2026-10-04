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
  eyebrow?: string;
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
  eyebrow = "Heart of Our Foundation",
  title = "Showcasing Our Dedicated",
  highlight = "Volunteers",
  subtitle = "Recognizing the extraordinary doctors, teachers, and compassionate citizens who give their time and love to mentor our children.",
  className = "",
}: VolunteersSectionProps) {
  return (
    <section className={`relative py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Radiant ambient bloom */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {volunteers.map((v, idx) => (
          <div
            key={idx}
            className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/80 shadow-lg hover:shadow-2xl"
          >
            <div>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-xl font-bold leading-tight drop-shadow-xs">{v.name}</h4>
                  <p className="text-xs font-semibold text-amber">{v.role}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  &ldquo;{v.quote}&rdquo;
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center gap-1.5 text-xs font-bold text-primary">
              <UserCheck className="w-4 h-4" />
              <span>Certified Baqiatullah Volunteer</span>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-primary/20 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="text-left">
          <h4 className="text-xl font-bold text-gray-900">Want to Make a Direct Difference?</h4>
          <p className="text-sm text-gray-600 mt-1">
            Join our 85+ volunteers in Lahore for teaching, mentoring, or medical support.
          </p>
        </div>
        <Button href="/contact" variant="teal" size="md" className="shrink-0 shadow-md">
          <HeartHandshake className="w-4 h-4 mr-2" />
          <span>Join as a Volunteer</span>
        </Button>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export interface EventItem {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
}

export interface EventsSectionProps {
  events?: EventItem[];
  eyebrow?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_EVENTS: EventItem[] = [
  {
    title: "Annual Sports & Outdoor Joy Festival",
    date: "November 15, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Nawab Town Sports Grounds, Lahore",
    image: "/gallery/24.jpg",
    description: "A joyful day of athletics, cricket tournaments, races, and awards celebrating our children's physical stamina and teamwork.",
  },
  {
    title: "Comprehensive Pediatric Medical & Dental Camp",
    date: "October 28, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "Baqiatullah Healthcare Wing, Lahore",
    image: "/gallery/10.jpg",
    description: "Volunteer physicians and pediatric dentists conducting thorough preventative screenings, eye tests, and hygiene workshops.",
  },
  {
    title: "Digital Literacy & Web Coding Workshop",
    date: "December 05, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "IT & Computer Resource Lab",
    image: "/gallery/49.jpg",
    description: "Senior students demonstrating digital portfolios, basic software programming, and typing speed competitions.",
  },
];

export default function EventsSection({
  events = DEFAULT_EVENTS,
  eyebrow = "Community & Action",
  title = "Upcoming Foundation Events &",
  highlight = "Activities",
  subtitle = "Engage with our children, observe educational milestones, and participate in community enrichment days in Lahore.",
  className = "",
}: EventsSectionProps) {
  return (
    <section className={`relative py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="group relative h-[440px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 border border-white/30"
          >
            {/* Full-bleed real event photo */}
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />

            {/* Top Date Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-amber border border-white/30 shadow-md">
                {event.date}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-primary text-white shadow-xs">
                Community
              </span>
            </div>

            {/* Bottom Event Details */}
            <div className="relative z-10 text-white">
              <div className="flex items-center gap-2 text-xs text-white/80 mb-2">
                <Calendar className="w-3.5 h-3.5 text-amber" />
                <span>{event.time}</span>
                <span>•</span>
                <MapPin className="w-3.5 h-3.5 text-amber" />
                <span className="truncate">{event.location}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug drop-shadow-xs group-hover:text-amber transition-colors">
                {event.title}
              </h3>

              <p className="text-xs text-white/85 leading-relaxed mb-4 line-clamp-2">
                {event.description}
              </p>

              <Button
                href="/contact"
                variant="glass"
                size="sm"
                className="w-full justify-center bg-white/20 hover:bg-white text-white hover:text-gray-900 border-white/40 shadow-sm"
              >
                <span>Attend / Inquire</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

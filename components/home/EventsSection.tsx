import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const EVENTS = [
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

export default function EventsSection() {
  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Community & Action"
        title="Upcoming Foundation Events &"
        highlight="Activities"
        subtitle="Engage with our children, observe educational milestones, and participate in community enrichment days in Lahore."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {EVENTS.map((event, idx) => (
          <div
            key={idx}
            className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Event Photo */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-gray-900 border border-white/60 shadow-xs">
                  Event
                </div>
              </div>

              {/* Event Info */}
              <div className="p-6">
                <div className="flex flex-col gap-1.5 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1.5 text-[#008B8B] font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#008B8B] transition-colors">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Button href="/contact" variant="outline" size="sm" className="w-full justify-center">
                <span>Attend / Inquire</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

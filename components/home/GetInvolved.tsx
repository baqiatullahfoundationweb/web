import Image from "next/image";
import { Heart, BookOpen, Utensils, Building2, ArrowRight, type LucideIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export interface PathwayItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  actionText: string;
  href: string;
  badge: string;
}

export interface GetInvolvedProps {
  pathways?: PathwayItem[];
  eyebrow?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_PATHWAYS: PathwayItem[] = [
  {
    icon: Heart,
    title: "Sponsor a Child Monthly",
    description: "Provide complete shelter, schooling, healthcare, and clothing for PKR 12,000 / month.",
    image: "/gallery/20.jpg",
    actionText: "Sponsor Now",
    href: "/donate",
    badge: "Most Direct Impact",
  },
  {
    icon: BookOpen,
    title: "Volunteer Your Skills",
    description: "Teach English, coding, sports, or offer pediatric medical screening at our Lahore facility.",
    image: "/gallery/35.jpg",
    actionText: "Join Volunteers",
    href: "/contact",
    badge: "Mentorship",
  },
  {
    icon: Utensils,
    title: "Fund Daily Meals",
    description: "Sponsor fresh daily breakfasts, lunches, or celebratory feasts for 250+ resident children.",
    image: "/gallery/16.jpg",
    actionText: "Feed a Child",
    href: "/donate",
    badge: "Daily Nutrition",
  },
  {
    icon: Building2,
    title: "Corporate CSR & In-Kind",
    description: "Partner with us for digital computer labs, solar installations, or corporate matching grants.",
    image: "/gallery/75.jpg",
    actionText: "Partner With Us",
    href: "/contact",
    badge: "Institutional",
  },
];

export default function GetInvolved({
  pathways = DEFAULT_PATHWAYS,
  eyebrow = "Take Action Today",
  title = "Ways You Can Make a",
  highlight = "Lifelong Difference",
  subtitle = "Whether through financial sponsorship, active volunteering, or community sharing, every hand creates hope.",
  className = "",
}: GetInvolvedProps) {
  return (
    <section className={`relative py-20 sm:py-28 overflow-hidden ${className}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group relative h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 border border-white/60"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md text-amber border border-white/25">
                    {p.badge}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <Button
                    href={p.href}
                    variant="glass"
                    size="sm"
                    className="w-full justify-center bg-white/20 hover:bg-white text-white hover:text-gray-900 border-white/40 shadow-sm"
                  >
                    <span>{p.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

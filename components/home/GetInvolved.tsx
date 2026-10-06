import Image from "next/image";
import { Heart, BookOpen, Utensils, Building2, ArrowRight, type LucideIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export interface PathwayItem {
  icon?: LucideIcon;
  title: string;
  description: string;
  image: string;
  actionText: string;
  href: string;
  badge: string;
}

export interface GetInvolvedProps {
  pathways?: PathwayItem[];
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
    image: "/gallery/opt/89.webp",
    actionText: "Sponsor Now",
    href: "/donate",
    badge: "Most Direct Impact",
  },
  {
    icon: BookOpen,
    title: "Volunteer Your Skills",
    description: "Teach English, coding, sports, or offer pediatric medical screening at our Lahore facility.",
    image: "/gallery/opt/35.webp",
    actionText: "Join Volunteers",
    href: "/contact",
    badge: "Mentorship",
  },
  {
    icon: Utensils,
    title: "Fund Daily Meals",
    description: "Sponsor fresh daily breakfasts, lunches, or celebratory feasts for 250+ resident children.",
    image: "/gallery/opt/16.webp",
    actionText: "Feed a Child",
    href: "/donate",
    badge: "Daily Nutrition",
  },
  {
    icon: Building2,
    title: "Corporate CSR & In-Kind",
    description: "Partner with us for digital computer labs, solar installations, or corporate matching grants.",
    image: "/gallery/opt/36.webp",
    actionText: "Partner With Us",
    href: "/contact",
    badge: "Institutional",
  },
];

const FALLBACK_ICONS = [Heart, BookOpen, Utensils, Building2];

export default function GetInvolved({
  pathways = DEFAULT_PATHWAYS,
  title = "Ways You Can Make a",
  highlight = "Lifelong Difference",
  subtitle = "Whether through financial sponsorship, active volunteering, or community sharing, every hand creates hope.",
  className = "",
}: GetInvolvedProps) {
  return (
    <section className={`relative py-20 sm:py-28 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={title}
          highlight={highlight}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((p, idx) => {
            const Icon = p.icon || FALLBACK_ICONS[idx % FALLBACK_ICONS.length];
            return (
              <div
                key={idx}
                className="group relative h-[420px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 border border-white/15 hover:border-primary/50"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B0D] via-[#020B0D]/65 to-transparent" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-amber border border-white/20">
                    {p.badge}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-primary-light transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <Button
                    href={p.href}
                    variant="glass"
                    size="sm"
                    className="w-full justify-center bg-white text-gray-950 hover:bg-gray-100 font-extrabold shadow-md border border-gray-200"
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

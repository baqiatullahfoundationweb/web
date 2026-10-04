import Image from "next/image";
import { ArrowRight, ShieldCheck, Heart } from "lucide-react";
import Button from "@/components/ui/Button";

export interface HomeAboutProps {
  title?: string;
  description?: string;
  primaryImage?: string;
  secondaryImage?: string;
  establishedYear?: string;
  card1Title?: string;
  card1Desc?: string;
  card2Title?: string;
  card2Desc?: string;
  storyBtnText?: string;
  storyHref?: string;
  visitBtnText?: string;
  visitHref?: string;
  className?: string;
}

export default function HomeAbout({
  title = "More Than an Orphanage — A Loving, Lifelong Family",
  description = "Baqiatullah Foundation was born from a singular promise: that no orphaned child should grow up feeling abandoned, uneducated, or forgotten. What began with 12 children in 2016 has evolved into an accredited residential haven nurturing 250+ youth in Lahore.",
  primaryImage = "/gallery/89.jpg",
  secondaryImage = "/gallery/75.jpg",
  establishedYear = "Established 2016 in Pakistan",
  card1Title = "Maternal Home Care",
  card1Desc = "24/7 dedicated caregivers offering affection, psychological warmth, and security.",
  card2Title = "Academic Rigor",
  card2Desc = "Private English-medium schooling, digital skills, and college degree support.",
  storyBtnText = "Read Our Full Story",
  storyHref = "/about",
  visitBtnText = "Visit Our Lahore Sanctuary",
  visitHref = "/contact",
  className = "",
}: HomeAboutProps) {
  return (
    <section className={`relative py-20 sm:py-28 overflow-hidden ${className}`}>
      {/* Background photographic depth layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image
          src="/gallery/75.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.09] filter saturate-150 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EDF6F6]/95 via-transparent to-[#EDF6F6]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Dual Image Collage with light glass highlight */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-80 sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white ring-1 ring-primary/25">
              <Image
                src={primaryImage}
                alt="Children and mentors at Baqiatullah Foundation"
                fill
                className="object-cover hover:scale-104 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-60 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white glass-panel ring-1 ring-primary/30">
              <Image
                src={secondaryImage}
                alt="Community life at sanctuary"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="260px"
              />
            </div>
            <div className="absolute top-4 left-4 glass-panel px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-md border border-primary/20">
              {establishedYear}
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/95 border border-primary/20 shadow-md backdrop-blur-md">
                <Heart className="w-5 h-5 text-accent-red mb-2" />
                <h4 className="text-sm font-bold text-gray-950">{card1Title}</h4>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed font-normal">{card1Desc}</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/95 border border-primary/20 shadow-md backdrop-blur-md">
                <ShieldCheck className="w-5 h-5 text-primary mb-2" />
                <h4 className="text-sm font-bold text-gray-950">{card2Title}</h4>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed font-normal">{card2Desc}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href={storyHref} variant="teal" size="md">
                <span>{storyBtnText}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                href={visitHref}
                variant="glass"
                size="md"
                className="bg-white/95 hover:bg-white text-gray-950 font-bold border-primary/30 shadow-sm"
              >
                <span>{visitBtnText}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

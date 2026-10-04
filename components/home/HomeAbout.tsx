import Image from "next/image";
import { ArrowRight, ShieldCheck, Heart, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export interface HomeAboutProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryImage?: string;
  secondaryImage?: string;
  establishedYear?: string;
  className?: string;
}

export default function HomeAbout({
  eyebrow = "Who We Are & What We Believe",
  title = "More Than an Orphanage — A Loving, Lifelong Family",
  description = "Baqiatullah Foundation was born from a singular promise: that no orphaned child should grow up feeling abandoned, uneducated, or forgotten. What began with 12 children in 2016 has evolved into an accredited residential haven nurturing 250+ youth in Lahore.",
  primaryImage = "/gallery/89.jpg",
  secondaryImage = "/gallery/75.jpg",
  establishedYear = "Established 2016 in Pakistan",
  className = "",
}: HomeAboutProps) {
  return (
    <section className={`relative py-20 sm:py-28 overflow-hidden ${className}`}>
      {/* Subtle background photo watermark & ambient lighting */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image
          src="/gallery/75.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.035] filter saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3F8F8] via-transparent to-[#F3F8F8]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Dual Image Collage with futuristic glass highlight */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-primary/20">
              <Image
                src={primaryImage}
                alt="Children and mentors at Baqiatullah Foundation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white glass-panel ring-1 ring-primary/20">
              <Image
                src={secondaryImage}
                alt="Community life at sanctuary"
                fill
                className="object-cover"
                sizes="250px"
              />
            </div>
            <div className="absolute top-4 left-4 glass-panel px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm border border-primary/20">
              {establishedYear}
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-card border border-primary/15 shadow-sm">
                <Heart className="w-5 h-5 text-accent-red mb-2" />
                <h4 className="text-sm font-bold text-gray-900">Maternal Home Care</h4>
                <p className="text-xs text-gray-600 mt-1">24/7 dedicated caregivers offering affection, psychological warmth, and security.</p>
              </div>
              <div className="p-4 rounded-2xl glass-card border border-primary/15 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-primary mb-2" />
                <h4 className="text-sm font-bold text-gray-900">Academic Rigor</h4>
                <p className="text-xs text-gray-600 mt-1">Private English-medium schooling, digital skills, and college degree support.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="teal" size="md">
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/contact" variant="outline" size="md">
                <span>Visit Our Lahore Sanctuary</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Laptop, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export interface ProjectSpotlightProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryImage?: string;
  secondaryImage?: string;
  className?: string;
}

export default function ProjectSpotlight({
  title = "Baqiatullah IT & Digital Skills Resource Center",
  description = "Equipped with high-speed internet, modern desktop workstations, and volunteer software mentors, our computer lab equips children with real 21st-century vocational skills — turning dreams of tech careers into reality.",
  primaryImage = "/gallery/49.jpg",
  secondaryImage = "/gallery/20.jpg",
  className = "",
}: ProjectSpotlightProps) {
  return (
    <section className={`py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#005C5C] via-[#008B8B] to-[#006B6B] p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-white/20">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-white/95 leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                <div className="text-3xl font-extrabold font-mono text-amber">100%</div>
                <div className="text-xs text-white/90 mt-1">Computer Literacy Rate for Grade 5+</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                <div className="text-3xl font-extrabold font-mono text-amber">35+</div>
                <div className="text-xs text-white/90 mt-1">Active Coding & Typing Workstations</div>
              </div>
            </div>

            <div className="space-y-2 pt-1 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                <span>Web basics, graphic design, and typing speed certifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                <span>Mentored by university volunteer computer science students</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/projects" variant="glass" size="md" className="bg-white text-gray-950 hover:bg-white/90 shadow-md font-semibold border-white/40">
                <Laptop className="w-4 h-4 mr-2 text-primary" />
                <span>Explore All Projects</span>
              </Button>
              <Button href="/donate" variant="donate" size="md" className="shadow-lg shadow-red-950/40">
                <span>Support This Lab</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
              <Image
                src={primaryImage}
                alt="Students in IT classroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-48 h-36 rounded-xl overflow-hidden shadow-2xl border-2 border-white/30">
              <Image
                src={secondaryImage}
                alt="Mentorship in action"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

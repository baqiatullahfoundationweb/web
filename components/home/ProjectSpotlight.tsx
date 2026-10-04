import Image from "next/image";
import { Laptop, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ProjectSpotlight() {
  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#004D4D] to-[#008B8B] p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
        {/* Subtle patterned backdrop */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text & Key Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#FFBF00] text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Flagship Initiative Spotlight</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Baqiatullah IT & Digital Skills Resource Center
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Equipped with high-speed internet, modern desktop workstations, and volunteer software mentors, our computer lab equips children with real 21st-century vocational skills — turning dreams of tech careers into reality.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="text-3xl font-extrabold font-mono text-[#FFBF00]">100%</div>
                <div className="text-xs text-white/80 mt-1">Computer Literacy Rate for Grade 5+</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="text-3xl font-extrabold font-mono text-[#FFBF00]">35+</div>
                <div className="text-xs text-white/80 mt-1">Active Coding & Typing Workstations</div>
              </div>
            </div>

            <div className="space-y-2 pt-1 text-xs text-white/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFBF00] shrink-0" />
                <span>Web basics, graphic design, and typing speed certifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFBF00] shrink-0" />
                <span>Mentored by university volunteer computer science students</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/projects" variant="glass" size="md" className="bg-white text-gray-900 hover:bg-gray-100 shadow-md">
                <Laptop className="w-4 h-4 mr-2 text-[#008B8B]" />
                <span>Explore All Projects</span>
              </Button>
              <Button href="/donate" variant="donate" size="md" className="shadow-md">
                <span>Support This Lab</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Photographic Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/gallery/49.jpg"
                alt="Students in IT classroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-48 h-36 rounded-xl overflow-hidden shadow-2xl border-4 border-white/30">
              <Image
                src="/gallery/20.jpg"
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

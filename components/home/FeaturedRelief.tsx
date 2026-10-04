import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function FeaturedRelief() {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Emergency Aid"
        title="Humanitarian Relief in"
        highlight="Action"
        subtitle="Standing with vulnerable communities in times of crisis with vital food rations, potable water, and emergency medical kits."
      />

      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-gray-200/80 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="/gallery/88.jpeg"
              alt="Flood Relief Campaign Jhang"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FFBF00] text-gray-950 text-xs font-bold shadow-sm">
              Flood Relief Campaign
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#008B8B]" />
                September 20, 2025
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#008B8B]" />
                By Abbas Raza
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Flood Relief Campaign Jhang — Serving 300 Displaced Families
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Baqiatullah Foundation completed an emergency humanitarian operation delivering basic food rations, water purification kits, and temporary shelter to over 1,200 individuals across 15 remote villages victimized by flash flooding in Jhang district.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button href="/blog/1" variant="teal" size="md">
                <span>Read Full Operation Report</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/donate" variant="donate" size="md">
                <span>Contribute to Relief Fund</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

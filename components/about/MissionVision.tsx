import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#FFBF00]">
          <div className="w-12 h-12 rounded-2xl bg-[#FFBF00]/15 flex items-center justify-center text-[#997300] mb-5">
            <Target className="w-6 h-6 stroke-[2]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            To provide a nurturing, family-like sanctuary where orphaned and vulnerable children receive unconditional affection, comprehensive medical protection, quality education, and moral guidance to step forward as empowered, virtuous citizens.
          </p>
        </div>

        {/* Vision Card */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#008B8B]">
          <div className="w-12 h-12 rounded-2xl bg-[#008B8B]/15 flex items-center justify-center text-[#008B8B] mb-5">
            <Eye className="w-6 h-6 stroke-[2]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            A world where no child is deprived of childhood, dignity, or education due to tragedy. We envision communities across Pakistan where marginalized youth break cycles of generational poverty through knowledge, character, and opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}

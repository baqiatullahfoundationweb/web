import { Target, Eye } from "lucide-react";

export interface MissionVisionProps {
  missionTitle?: string;
  missionDesc?: string;
  visionTitle?: string;
  visionDesc?: string;
}

export default function MissionVision({
  missionTitle = "Our Mission",
  missionDesc = "To provide a nurturing, family-like sanctuary where orphaned and vulnerable children receive unconditional affection, comprehensive medical protection, quality education, and moral guidance.",
  visionTitle = "Our Vision",
  visionDesc = "A world where no child is deprived of childhood, dignity, or education due to tragedy. We envision communities across Pakistan where marginalized youth break cycles of generational poverty.",
}: MissionVisionProps) {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#FFBF00] shadow-xl border border-primary/15">
          <div className="w-12 h-12 rounded-2xl bg-[#FFBF00]/20 flex items-center justify-center text-gray-950 mb-5">
            <Target className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-950 mb-3">{missionTitle}</h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
            {missionDesc}
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#008B8B] shadow-xl border border-primary/15">
          <div className="w-12 h-12 rounded-2xl bg-[#008B8B]/15 flex items-center justify-center text-[#006B6B] mb-5">
            <Eye className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-950 mb-3">{visionTitle}</h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
            {visionDesc}
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import HouseClipProjectCard from "./HouseClipProjectCard";
import { BAQIATULLAH_PROJECTS } from "./programsData";
import { Users, ShieldCheck, Utensils, Award } from "lucide-react";

interface HouseClipProjectsGridProps {
  isUrdu?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function HouseClipProjectsGrid({
  isUrdu = false,
  className = "",
  title,
  subtitle,
}: HouseClipProjectsGridProps) {
  const displayTitle =
    title ||
    (isUrdu
      ? "بقیۃ اللہ فاؤنڈیشن کے 8 بنیادی فلاحی منصوبے"
      : "Official Projects of Baqiatullah Foundation");

  const displaySubtitle =
    subtitle ||
    (isUrdu
      ? "تعلیم، آئی ٹی، کفالت، خوراک، لباس، اقامت، ہنگامی ریلیف اور مفت علاج کے جامع فلاحی پروگرامز"
      : "Comprehensive welfare initiatives covering Education, Digital Skills, Orphan Support, Food, Clothing, Care, Disaster Relief, and Healthcare");

  return (
    <section className={`w-full py-16 sm:py-20 ${className}`}>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-wider mb-4 shadow-2xs">
          <Award className="w-3.5 h-3.5" />
          <span>{isUrdu ? "فلاحی منصوبے و خدمات" : "8 Flagship Welfare Initiatives"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
          {displayTitle}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
          {displaySubtitle}
        </p>
      </div>

      {/* 8 Iconic House-Clipped Cards Grid (2 rows of 4 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {BAQIATULLAH_PROJECTS.map((prog) => (
          <div
            key={prog.id}
            className="flex flex-col bg-white/95 backdrop-blur-md rounded-3xl border border-primary/20 p-5 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            {/* Visual House Silhouette */}
            <div className="w-full flex justify-center mb-2">
              <HouseClipProjectCard
                title={isUrdu ? `${prog.num}. ${prog.titleUrdu}` : `${prog.num}. ${prog.title}`}
                category={isUrdu ? prog.categoryUrdu : prog.category}
                image={prog.image}
                hdImage={prog.hdImage}
                color={prog.color}
                badgeText={isUrdu ? prog.badgeUrdu : prog.badge}
                href={isUrdu ? `/ur${prog.href}` : `/eng${prog.href}`}
                className="w-full"
              />
            </div>

            {/* Explicit Program Specification Facts */}
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2.5 text-xs text-gray-700 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-start gap-2 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                  <Users className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-gray-900 block">
                      {isUrdu ? "اہلیت کا معیار:" : "Eligibility:"}
                    </span>
                    <span className="text-gray-600">
                      {isUrdu ? prog.eligibilityUrdu : prog.eligibility}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-gray-900 block">
                      {isUrdu ? "گنجائش و کوریج:" : "Capacity:"}
                    </span>
                    <span className="text-gray-600 font-medium">
                      {isUrdu ? prog.capacityUrdu : prog.capacity}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                  <Utensils className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-gray-900 block">
                      {isUrdu ? "بنیادی تفصیل و خدمات:" : "Core Services:"}
                    </span>
                    <span className="text-gray-600">
                      {isUrdu ? prog.keyFactUrdu : prog.keyFact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

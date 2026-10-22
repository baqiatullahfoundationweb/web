"use client";

import Link from "next/link";
import HouseClipProjectCard from "./HouseClipProjectCard";
import { BAQIATULLAH_PROJECTS } from "./programsData";
import { Users, ShieldCheck, Utensils, Award, ArrowRight } from "lucide-react";

/**
 * =========================================================================================================
 * INTELLECTUAL PROPERTY & ENGINEERING ATTRIBUTION
 * =========================================================================================================
 * Sole Creator: Eyrie Digital (https://www.eyriedigital.com)
 * Collaboration: No other party or agency collaborated on the engineering, design, or implementation.
 *
 * MANDATORY LEGAL NOTICE:
 * As per Eyrie Digital policy, any unauthorized removal, concealment, or alteration of this attribution,
 * digital credentials, or metadata in this codebase or rendered output without prior written authorization
 * from Eyrie Digital is strictly prohibited. Violation of these terms will result in immediate legal action.
 * =========================================================================================================
 */

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
      ? "بقیۃ اللہ فاؤنڈیشن کے 7 بنیادی فلاحی منصوبے"
      : "Official Projects of Baqiatullah Foundation");

  const displaySubtitle =
    subtitle ||
    (isUrdu
      ? "تعلیم، آئی ٹی، خوراک، لباس، یتیم نگہداشت، ہنگامی ریلیف اور مفت علاج کے جامع فلاحی پروگرامز"
      : "Comprehensive welfare initiatives covering Education, Digital Skills, Food, Clothing, Orphan Care, Disaster Relief, and Healthcare");

  return (
    <section className={`w-full py-16 sm:py-20 ${className}`}>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-wider mb-4 shadow-2xs">
          <Award className="w-3.5 h-3.5" />
          <span>{isUrdu ? "فلاحی منصوبے و خدمات" : "7 Flagship Welfare Initiatives"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
          {displayTitle}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
          {displaySubtitle}
        </p>
      </div>

      {/* 8 Flagship Welfare Project Cards (Wider 2-Column Grid on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {BAQIATULLAH_PROJECTS.map((prog) => (
          <div
            key={prog.id}
            className="flex flex-col sm:flex-row bg-white/95 backdrop-blur-md rounded-3xl border border-primary/20 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group gap-5 lg:gap-6 items-center sm:items-start"
          >
            {/* Visual House Silhouette */}
            <div className="w-40 sm:w-44 md:w-48 shrink-0 flex justify-center">
              <HouseClipProjectCard
                title={isUrdu ? `${prog.num}. ${prog.titleUrdu}` : `${prog.num}. ${prog.title}`}
                category={isUrdu ? prog.categoryUrdu : prog.category}
                image={prog.image}
                hdImage={prog.hdImage}
                color={prog.color}
                badgeText={isUrdu ? prog.badgeUrdu : prog.badge}
                href={isUrdu ? `/ur/projects/${prog.id}` : `/eng/projects/${prog.id}`}
                showTitle={false}
                className="w-full"
              />
            </div>

            {/* Content & Specifications */}
            <div className="flex-1 min-w-0 w-full flex flex-col justify-between self-stretch">
              <div>
                {/* Title & Category Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <Link
                      href={isUrdu ? `/ur/projects/${prog.id}` : `/eng/projects/${prog.id}`}
                      className="group-hover:text-primary transition-colors block"
                    >
                      <h3 className="text-lg sm:text-xl font-black text-gray-950 leading-tight">
                        {isUrdu ? `${prog.num}. ${prog.titleUrdu}` : `${prog.num}. ${prog.title}`}
                      </h3>
                    </Link>
                    <p className="text-xs font-bold text-primary mt-0.5">
                      {isUrdu ? prog.categoryUrdu : prog.category}
                    </p>
                  </div>
                  <span
                    className="px-2.5 py-1 text-[11px] font-bold rounded-full text-white shrink-0 shadow-2xs"
                    style={{ backgroundColor: prog.color }}
                  >
                    {isUrdu ? prog.badgeUrdu : prog.badge}
                  </span>
                </div>

                {/* Explicit Program Specification Facts */}
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-start gap-2 bg-gray-50/80 p-2 sm:p-2.5 rounded-xl border border-gray-100">
                    <Users className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="font-extrabold text-gray-900 mr-1.5 rtl:ml-1.5 inline">
                        {isUrdu ? "اہلیت:" : "Eligibility:"}
                      </span>
                      <span className="text-gray-600">
                        {isUrdu ? prog.eligibilityUrdu : prog.eligibility}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-gray-50/80 p-2 sm:p-2.5 rounded-xl border border-gray-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="font-extrabold text-gray-900 mr-1.5 rtl:ml-1.5 inline">
                        {isUrdu ? "گنجائش:" : "Capacity:"}
                      </span>
                      <span className="text-gray-600 font-medium">
                        {isUrdu ? prog.capacityUrdu : prog.capacity}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-gray-50/80 p-2 sm:p-2.5 rounded-xl border border-gray-100">
                    <Utensils className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="font-extrabold text-gray-900 mr-1.5 rtl:ml-1.5 inline">
                        {isUrdu ? "خدمات:" : "Services:"}
                      </span>
                      <span className="text-gray-600">
                        {isUrdu ? prog.keyFactUrdu : prog.keyFact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={isUrdu ? `/ur/projects/${prog.id}` : `/eng/projects/${prog.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  <span>{isUrdu ? "تفصیلات اور تعاون" : "Support This Project"}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
                <span className="text-[11px] font-mono font-bold text-gray-600">
                  #{prog.num}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import {
  PieChart,
  ShieldCheck,
  CheckCircle2,
  Heart,
  BookOpen,
  Home,
  Stethoscope,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export interface TransparencyStat {
  label: string;
  value: string;
}

export interface TransparencySlice {
  category: string;
  percent: number;
  desc: string;
}

export interface TransparencyBreakdownProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  stats?: TransparencyStat[];
  breakdown?: TransparencySlice[];
  isUrdu?: boolean;
}

const CATEGORY_ICONS = [Heart, BookOpen, Home, Stethoscope];

export default function TransparencyBreakdown({
  title = "Where Every Single Rupee",
  highlight = "Is Invested",
  subtitle = "Strict audited breakdown ensuring maximum direct impact on children's nourishment, education, and shelter.",
  stats = [
    { label: "Direct Child Welfare", value: "85%" },
    { label: "Facilities & Living Care", value: "10%" },
    { label: "Audited Administration", value: "5%" },
  ],
  breakdown = [
    { category: "Nutritious Food & Fresh Milk", percent: 35, desc: "Fresh wholesome meals prepared three times daily under pediatric guidelines." },
    { category: "Schooling & Digital Education", percent: 30, desc: "Accredited school tuition, textbooks, uniform kits, and modern computer laboratory." },
    { category: "Sanctuary Living & Utilities", percent: 20, desc: "Clean dormitory accommodation, warm bedding, solar power, and 24/7 security." },
    { category: "Pediatric Healthcare & Dental", percent: 15, desc: "Doctor checkups, vitamins, vaccinations, and emergency medical hospital care." },
  ],
  isUrdu = false,
}: TransparencyBreakdownProps) {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
        align="center"
      />

      {/* 3 Metric Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-primary/20 shadow-xl text-center relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-4xl sm:text-5xl font-black font-mono text-primary mb-2 tracking-tight">
              {s.value}
            </div>
            <h4 className="text-base font-extrabold text-gray-950 mb-1">{s.label}</h4>
            <p className="text-xs text-gray-500 font-medium">
              {isUrdu ? "مکمل آڈٹ شدہ شفافیت" : "Independently audited & verified"}
            </p>
          </div>
        ))}
      </div>

      {/* Breakdown Progress and Allocation Cards */}
      <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-primary/20 shadow-xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <PieChart className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-950">
                {isUrdu ? "تفصیلی مالیاتی تقسیم اور خرچ" : "Detailed Allocation Breakdown"}
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                {isUrdu ? "سالانہ اخراجات کا تفصیلی تناسب" : "Verified financial distribution of donations"}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "سالانہ بیرونی آڈٹ شدہ" : "Annual Independent Audit"}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {breakdown.map((item, idx) => {
            const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-3"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-gray-950">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-base font-black font-mono text-primary">
                    {item.percent}%
                  </span>
                </div>

                <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-amber rounded-full transition-all duration-700"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>

                <p className="text-xs text-gray-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Audit Assurance Footer */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="font-semibold text-gray-800">
              {isUrdu
                ? "پنجاب چیریٹی کمیشن اور وفاقی قوانین کے تحت مکمل رجسٹرڈ اور مصدقہ ریکارڈ"
                : "Registered under Punjab Charity Commission with transparent audit records"}
            </span>
          </div>
          <span className="text-gray-500 font-medium">
            {isUrdu ? "مالی سال 2025–2026 آڈٹ رپورٹ دستیاب ہے" : "Fiscal Year 2025-2026 Audit Report Available"}
          </span>
        </div>
      </div>
    </section>
  );
}

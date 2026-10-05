"use client";

import HouseClipProjectCard from "./HouseClipProjectCard";
import { Users, Clock, ShieldCheck, Utensils, Award } from "lucide-react";

export interface ProgramItem {
  id: string;
  title: string;
  titleUrdu: string;
  category: string;
  categoryUrdu: string;
  image: string;
  hdImage: string;
  color: string;
  badge: string;
  badgeUrdu: string;
  href: string;
  eligibility: string;
  eligibilityUrdu: string;
  capacity: string;
  capacityUrdu: string;
  keyFact: string;
  keyFactUrdu: string;
}

export const FLAGSHIP_PROGRAMS: ProgramItem[] = [
  {
    id: "disaster",
    title: "Disaster Emergency Relief",
    titleUrdu: "ہنگامی قدرتی آفات ریلیف فنڈ",
    category: "Emergency Relief & Food Packs",
    categoryUrdu: "ہنگامی ریلیف و راشن ترسیل",
    image: "/gallery/opt/75.webp",
    hdImage: "/gallery/opt/75.webp",
    color: "#F39C12",
    badge: "Flood & Crisis Relief",
    badgeUrdu: "سیلاب اور قدرتی آفات ریلیف",
    href: "/donate",
    eligibility: "Displaced & crisis-affected vulnerable families across Punjab & Sindh",
    eligibilityUrdu: "پنجاب اور سندھ کے سیلاب و قدرتی آفات سے متاثرہ بے سہارا خاندان",
    capacity: "300+ Family Rations Monthly",
    capacityUrdu: "ماہانہ 300 سے زائد خاندانوں کے لیے راشن پیکس",
    keyFact: "Clean water filtration kits, dry flour, rice, and emergency medical mobile aid",
    keyFactUrdu: "صاف پانی، آٹا، چاول، دالیں اور ہنگامی موبائل میڈیکل کیمپ کٹس",
  },
  {
    id: "health",
    title: "Pediatric Healthcare & Nutrition",
    titleUrdu: "طبی علاج و متوازن غذائیت",
    category: "Medical Clinic & Meals",
    categoryUrdu: "طبی علاج اور کلینکس",
    image: "/gallery/opt/10.webp",
    hdImage: "/gallery/opt/10.webp",
    color: "#E74C3C",
    badge: "Free Medical Care",
    badgeUrdu: "مفت میڈیکل کیمپس و ادویات",
    href: "/donate",
    eligibility: "All 250+ resident orphans & impoverished neighborhood children",
    eligibilityUrdu: "تمام 250+ یتیم بچے اور نواب ٹاؤن و گردونواح کے نادار افراد",
    capacity: "250+ Residents (100% Medical Coverage)",
    capacityUrdu: "250+ بچے (100 فیصد مفت معائنہ اور ادویات)",
    keyFact: "Daily 3 hot balanced meals, fresh milk schedule (7:30 AM, 1:30 PM, 8:00 PM)",
    keyFactUrdu: "روزانہ 3 وقت تازہ کھانا و دودھ (صبح 7:30، دوپہر 1:30، رات 8:00 بجے)",
  },
  {
    id: "education",
    title: "Accredited Schooling & Digital IT",
    titleUrdu: "معیاری اسکولنگ و ڈیجیٹل آئی ٹی لیب",
    category: "Schooling & Digital Skills",
    categoryUrdu: "معیاری اسکولنگ و ڈیجیٹل ہنر",
    image: "/gallery/opt/49.webp",
    hdImage: "/gallery/opt/49.webp",
    color: "#A21CAF",
    badge: "250+ Enrolled Students",
    badgeUrdu: "250+ زیرِ تعلیم یتیم بچّے",
    href: "/donate",
    eligibility: "Orphan boys and girls from Nursery through College/University degree level",
    eligibilityUrdu: "نرسری سے لے کر یونیورسٹی ڈگری لیول تک کے تمام یتیم بچے",
    capacity: "250+ Enrolled Students & Scholars",
    capacityUrdu: "250+ زیرِ تعلیم اسکول اور کالج اسکالرز",
    keyFact: "Accredited English-medium curriculum, computer workstations, and coding labs",
    keyFactUrdu: "منظور شدہ انگلش میڈیم نصاب، جدید کمپیوٹر لیب اور پروگرامنگ کی تربیت",
  },
  {
    id: "wash",
    title: "WASH Clean Water & Sanctuary Living",
    titleUrdu: "صاف پینے کا پانی و محفوظ ہوم شیلٹر",
    category: "Clean Water & Hygiene",
    categoryUrdu: "صاف پینے کا پانی و حفظانِ صحت",
    image: "/gallery/opt/62.webp",
    hdImage: "/gallery/opt/62.webp",
    color: "#0284C7",
    badge: "Pure Water & Living Care",
    badgeUrdu: "صاف پینے کا پانی و رہائش",
    href: "/donate",
    eligibility: "Full residential shelter for orphans with zero parental guardian support",
    eligibilityUrdu: "بے آسرا اور یتیم بچوں کے لیے 24 گھنٹے مکمل گھریلو رہائش",
    capacity: "24/7 Residential Sanctuary in Lahore",
    capacityUrdu: "لاہور میں 24/7 مکمل محفوظ اقامتی مرکز",
    keyFact: "Clean RO filtration plant water, solar power backup, clean bedding, and laundry",
    keyFactUrdu: "فلٹریشن پلانٹ کا صاف پانی، 24 گھنٹے سولر پاور، صاف بستر اور لانڈری",
  },
];

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
      ? "بقیۃ اللہ فاؤنڈیشن کے بنیادی فلاحی پروگرامز — حقائق اور تفصیلات"
      : "Structured Orphan Care & Welfare Programs in Lahore");

  const displaySubtitle =
    subtitle ||
    (isUrdu
      ? "مصدقہ حقائق، گنجائش، اہلیت اور روزانہ کی بنیاد پر دی جانے والی مفت سہولیات"
      : "Explicit program facts, eligibility criteria, student capacity, and daily nutrition schedules");

  return (
    <section className={`w-full py-16 sm:py-20 ${className}`}>
      {/* Section Header with H2 */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Award className="w-3.5 h-3.5" />
          <span>{isUrdu ? "ادارہ جاتی پروگرام کی تفصیلات" : "Institutional Program Specifications"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
          {displayTitle}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
          {displaySubtitle}
        </p>
      </div>

      {/* 4 Iconic House-Clipped Cards Row with Explicit Program Fact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {FLAGSHIP_PROGRAMS.map((prog) => (
          <div
            key={prog.id}
            className="flex flex-col bg-white/95 backdrop-blur-md rounded-3xl border border-primary/20 p-5 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Visual House Silhouette */}
            <div className="w-full flex justify-center mb-2">
              <HouseClipProjectCard
                title={isUrdu ? prog.titleUrdu : prog.title}
                category={isUrdu ? prog.categoryUrdu : prog.category}
                image={prog.image}
                hdImage={prog.hdImage}
                color={prog.color}
                badgeText={isUrdu ? prog.badgeUrdu : prog.badge}
                href={isUrdu ? `/ur${prog.href}` : `/eng${prog.href}`}
                className="w-full"
              />
            </div>

            {/* Explicit Program Specification Facts (Targeting Answer & Generative Engines) */}
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
                  <Utensils className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-gray-900 block">
                      {isUrdu ? "بنیادی تفصیل و شیڈول:" : "Operational Schedule:"}
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

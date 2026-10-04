import { PieChart, ShieldCheck, HeartHandshake } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const TIERS = [
  {
    title: "Monthly Nutrition Sponsor",
    amount: "PKR 5,000 / mo",
    impact: "Provides three wholesome daily meals, clean milk, and seasonal fruits for one child.",
  },
  {
    title: "Full Academic Scholarship",
    amount: "PKR 12,000 / mo",
    impact: "Funds private school tuition, uniforms, textbooks, computer lab access, and specialized tutoring.",
  },
  {
    title: "Complete Residential Care",
    amount: "PKR 25,000 / mo",
    impact: "Covers complete living costs: room lodging, nutrition, clothing, healthcare, and parental caregiving.",
  },
];

export default function TransparencyBreakdown() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Donor Trust"
          title="Where Your Contribution"
          highlight="Creates Real Impact"
          subtitle="We adhere to the highest standards of fiscal stewardship. Every rupee is accounted for and audited annually."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-primary/15 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <HeartHandshake className="w-5 h-5 stroke-[2]" />
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{tier.title}</h4>
                <div className="text-xl font-bold font-mono text-primary mb-3">{tier.amount}</div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{tier.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-700 shadow-md">
          <div className="flex items-center gap-3">
            <PieChart className="w-6 h-6 text-primary shrink-0" />
            <span>
              <strong>Fund Distribution:</strong> 40% Daily Nutrition & Meals · 35% Academic Tuition & Supplies · 25% Residential Care & Medical Health.
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 shrink-0">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>100% Verified Allocation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

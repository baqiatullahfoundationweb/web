import { PieChart, ShieldCheck } from "lucide-react";
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
}

export default function TransparencyBreakdown({
  title = "Where Every Single Rupee",
  highlight = "Is Invested",
  subtitle = "Strict audited breakdown ensuring maximum direct impact on children's nourishment, education, and shelter.",
  stats = [
    { label: "Direct Child Welfare", value: "85%" },
    { label: "Facilities & Utilities", value: "10%" },
    { label: "Administration & Audit", value: "5%" },
  ],
  breakdown = [
    { category: "Nutritious Food & Milk", percent: 35, desc: "Fresh wholesome meals prepared three times daily." },
    { category: "Schooling & Computers", percent: 30, desc: "Private school fees, textbooks, uniforms, and computer lab." },
    { category: "Sanctuary Living & Utilities", percent: 20, desc: "Safe dormitory accommodation, bedding, and solar electricity." },
    { category: "Pediatric Healthcare", percent: 15, desc: "Doctor visits, routine vaccinations, and emergency medications." },
  ],
}: TransparencyBreakdownProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title={title}
          highlight={highlight}
          subtitle={subtitle}
        />

        {/* 3 Metric Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-primary/20 shadow-xl text-center"
            >
              <div className="text-4xl font-black font-mono text-primary mb-2">{s.value}</div>
              <h4 className="text-base font-bold text-gray-950">{s.label}</h4>
            </div>
          ))}
        </div>

        {/* Breakdown Progress Bars */}
        <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-primary/20 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
            <PieChart className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-extrabold text-gray-950">Detailed Allocation Overview</h3>
          </div>

          <div className="space-y-5">
            {breakdown.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-center text-sm font-bold text-gray-950">
                  <span>{item.category}</span>
                  <span className="text-primary font-mono">{item.percent}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-amber rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 font-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="font-semibold">Independently Audited & Verified Annually</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

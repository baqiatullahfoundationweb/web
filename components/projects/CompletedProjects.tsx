import { CheckCircle2, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const COMPLETED = [
  {
    title: "Computer Literacy Lab",
    year: "2024",
    impact: "250+ youth equipped with computers and digital skills",
    description: "Built a fully functioning computer lab with broadband internet, enabling children to learn coding, graphic design, and typing.",
  },
  {
    title: "Library & Study Resource Center",
    year: "2023",
    impact: "Serving 200+ students daily with books and mentorship",
    description: "Curated over 2,000 academic textbooks, Urdu literature, and quiet study stations fostering a profound reading culture.",
  },
  {
    title: "Vocational Skills Workshops",
    year: "2023",
    impact: "120+ senior youth graduated with accredited certificates",
    description: "Offered practical training in tailoring, electrical work, and digital office administration to establish immediate career readiness.",
  },
];

export default function CompletedProjects() {
  return (
    <section className="py-16 sm:py-24 bg-[#FBFBFA] border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Milestones"
          title="Completed Programs of"
          highlight="Enduring Value"
          subtitle="A track record of donor accountability and sustainable projects that continue to benefit children every day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPLETED.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#EAEAEA] shadow-2xs hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 stroke-[2]" />
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                    Completed {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#008B8B]">
                <Heart className="w-3.5 h-3.5 fill-current text-[#AF0000]" />
                <span>{item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

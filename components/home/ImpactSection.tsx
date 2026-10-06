import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
  image: string;
}

export interface ImpactSectionProps {
  metrics?: ImpactMetric[];
  title?: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_METRICS: ImpactMetric[] = [
  {
    value: "250+",
    label: "Orphaned Children Supported",
    description: "Full-time residential sanctuary, medical care, and family love in Lahore.",
    image: "/gallery/opt/89.webp",
  },
  {
    value: "100k+",
    label: "Nutritious Meals Served",
    description: "Three warm, protein-rich prepared meals delivered every single day.",
    image: "/gallery/opt/16.webp",
  },
  {
    value: "50+",
    label: "Academic Scholarships",
    description: "Tuition, uniforms, and textbooks funding primary through college education.",
    image: "/gallery/opt/14.webp",
  },
  {
    value: "85+",
    label: "Dedicated Field Volunteers",
    description: "Compassionate caregivers, teachers, and emergency relief responders.",
    image: "/gallery/opt/30.webp",
  },
];

export default function ImpactSection({
  metrics = DEFAULT_METRICS,
  title = "Our Direct Impact &",
  highlight = "Real Achievements",
  subtitle = "Behind every number is a child whose life was safeguarded from poverty, hunger, and vulnerability.",
  className = "",
}: ImpactSectionProps) {
  return (
    <section className={`relative py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-[440px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 sm:p-7 border border-white/15 hover:border-primary/50"
          >
            {/* Full-bleed real photograph */}
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B0D] via-[#020B0D]/65 to-transparent" />

            {/* Bottom Metrics Content */}
            <div className="relative z-10 text-white">
              <div className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-amber mb-2 drop-shadow-md">
                {item.value}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary-light transition-colors">
                {item.label}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

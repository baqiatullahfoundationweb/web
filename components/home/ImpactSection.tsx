import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
  image: string;
  badge: string;
}

export interface ImpactSectionProps {
  metrics?: ImpactMetric[];
  eyebrow?: string;
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
    image: "/gallery/20.jpg",
    badge: "Full Care",
  },
  {
    value: "100k+",
    label: "Nutritious Meals Served",
    description: "Three warm, protein-rich prepared meals delivered every single day.",
    image: "/gallery/16.jpg",
    badge: "Daily Nutrition",
  },
  {
    value: "50+",
    label: "Academic Scholarships",
    description: "Tuition, uniforms, and textbooks funding primary through college education.",
    image: "/gallery/2.jpg",
    badge: "Education",
  },
  {
    value: "85+",
    label: "Dedicated Field Volunteers",
    description: "Compassionate caregivers, teachers, and emergency relief responders.",
    image: "/gallery/30.jpg",
    badge: "Volunteers",
  },
];

export default function ImpactSection({
  metrics = DEFAULT_METRICS,
  eyebrow = "Measurable Difference",
  title = "Our Direct Impact &",
  highlight = "Real Achievements",
  subtitle = "Behind every number is a child whose life was safeguarded from poverty, hunger, and vulnerability.",
  className = "",
}: ImpactSectionProps) {
  return (
    <section className={`relative py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Ambient glowing orb for futuristic depth */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-end border border-white/60"
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent" />

            <div className="relative z-10 p-6 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md text-amber border border-white/25 mb-3">
                {item.badge}
              </span>

              <div className="text-4xl font-extrabold font-mono tracking-tight text-white mb-1.5 drop-shadow-xs">
                {item.value}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {item.label}
              </h3>

              <p className="text-xs text-white/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

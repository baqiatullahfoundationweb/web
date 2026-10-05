import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export interface OurStoryProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  badge?: string;
  heading?: string;
  p1?: string;
  p2?: string;
  p3?: string;
}

export default function OurStory({
  title = "Founded on Compassion,",
  highlight = "Driven by Hope",
  subtitle = "Transforming the landscape of orphan care in Pakistan since 2016 through unwavering family commitment.",
  badge = "Over 8 years of nurturing orphan care in Lahore, Pakistan",
  heading = "From 12 Children to a Thriving Family Community of Over 250",
  p1 = "Baqiatullah Foundation Pakistan was established in 2016 by a dedicated group of humanitarians who recognized a profound need: to provide a safe, family-like sanctuary for orphaned and vulnerable children who have lost parental care.",
  p2 = "What began as an intimate initiative with 12 children in Lahore has blossomed into an accredited charitable foundation supporting more than 250 young souls. We do not operate as an impersonal institution—every child receives maternal care, medical protection, and individualized schooling.",
  p3 = "Today, our graduates are enrolled in accredited universities, excelling in technical vocations, and stepping forward as confident, compassionate leaders of Pakistan.",
}: OurStoryProps) {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Story Photo */}
        <div className="lg:col-span-5 relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border-2 border-white ring-1 ring-primary/20">
          <Image
            src="/gallery/89.jpg"
            alt="Baqiatullah Foundation children and caregivers"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl text-xs text-gray-950 font-bold border border-primary/20 shadow-md">
            {badge}
          </div>
        </div>

        {/* Story Narrative */}
        <div className="lg:col-span-7 space-y-5 text-gray-700 leading-relaxed text-base">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 leading-snug">
            {heading}
          </h3>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>
      </div>
    </section>
  );
}

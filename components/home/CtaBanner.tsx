import Image from "next/image";
import { Heart, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export interface CtaBannerProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export default function CtaBanner({
  title = "Give a Child a Future Filled with Dignity & Hope",
  description = "Every donation, no matter how small, directly funds daily meals, school tuition, books, and loving residential shelter for vulnerable children in Pakistan.",
  primaryButtonText = "Donate Online Now",
  primaryButtonHref = "/donate",
  secondaryButtonText = "Contact Foundation",
  secondaryButtonHref = "/contact",
  className = "",
}: CtaBannerProps) {
  return (
    <section className={`py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 ${className}`}>
      <div className="relative overflow-hidden rounded-3xl p-8 sm:p-16 text-center shadow-2xl border border-white/15 text-white">
        {/* Real panoramic background photograph */}
        <Image
          src="/gallery/89.jpg"
          alt="Baqiatullah Foundation children and caregivers"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020B0D]/95 via-[#020B0D]/80 to-primary/50" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5 drop-shadow-md">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed mb-8 drop-shadow-xs max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryButtonHref} variant="donate" size="lg" className="shadow-2xl shadow-red-950/50">
              <Heart className="w-4 h-4 fill-current mr-2" />
              <span>{primaryButtonText}</span>
            </Button>
            <Button
              href={secondaryButtonHref}
              variant="glass"
              size="lg"
              className="bg-white/10 hover:bg-white/25 text-white border-white/25 shadow-xl"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>{secondaryButtonText}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

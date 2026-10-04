import { Heart, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export interface CtaBannerProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export default function CtaBanner({
  badge = "Make a Lasting Impact",
  title = "Give a Child a Future Filled with Dignity & Hope",
  description = "Every donation, no matter how small, directly funds daily meals, school tuition, books, and loving shelter for vulnerable children in Pakistan.",
  primaryButtonText = "Donate Online Now",
  primaryButtonHref = "/donate",
  secondaryButtonText = "Contact Foundation",
  secondaryButtonHref = "/contact",
  className = "",
}: CtaBannerProps) {
  return (
    <section className={`py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 ${className}`}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/12 via-white/80 to-amber/15 border border-primary/20 p-8 sm:p-14 text-center shadow-xl backdrop-blur-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-red/10 text-accent-red text-xs font-bold uppercase tracking-wider mb-4 border border-accent-red/20 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-current" />
            {badge}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryButtonHref} variant="donate" size="lg" className="shadow-lg">
              <Heart className="w-4 h-4 fill-current mr-1.5" />
              <span>{primaryButtonText}</span>
            </Button>
            <Button href={secondaryButtonHref} variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5">
              <Mail className="w-4 h-4 mr-1.5 text-primary" />
              <span>{secondaryButtonText}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

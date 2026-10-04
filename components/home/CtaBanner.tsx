import { Heart, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#008B8B]/12 via-white to-[#FFBF00]/15 border border-[#008B8B]/20 p-8 sm:p-14 text-center">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#008B8B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFBF00]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AF0000]/10 text-[#AF0000] text-xs font-bold uppercase tracking-wider mb-4 border border-[#AF0000]/20">
            <Heart className="w-3.5 h-3.5 fill-current" />
            Make a Lasting Impact
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
            Give a Child a Future Filled with Dignity & Hope
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            Every donation, no matter how small, directly funds daily meals, school tuition, books, and loving shelter for vulnerable children in Pakistan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/donate" variant="donate" size="lg">
              <Heart className="w-4 h-4 fill-current mr-1" />
              <span>Donate Online Now</span>
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <Mail className="w-4 h-4 mr-1 text-[#008B8B]" />
              <span>Contact Foundation</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

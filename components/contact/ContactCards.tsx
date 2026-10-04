import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const CONTACTS = [
  {
    icon: MapPin,
    title: "Visit Our Home",
    value: "House No.123/A Block, Nawab Town, Lahore, Pakistan",
    link: "https://maps.app.goo.gl/u7u5iRnzp5VwSoJ18?g_st=iwb",
    action: "Get Directions on Google Maps",
  },
  {
    icon: Phone,
    title: "Call Direct / WhatsApp",
    value: "+92 314 6500512",
    link: "tel:+923146500512",
    action: "Call +92 314 6500512",
  },
  {
    icon: Mail,
    title: "Official Email",
    value: "baqiatullahpak@gmail.com",
    link: "mailto:baqiatullahpak@gmail.com",
    action: "Send Email Message",
  },
];

export default function ContactCards() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Connect Directly"
        title="We Welcome Your"
        highlight="Questions & Visits"
        subtitle="Schedule a visit to see our facilities, speak with our administration, or explore volunteer and sponsorship programs."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {CONTACTS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#008B8B]/10 text-[#008B8B] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#008B8B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#008B8B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.value}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 text-xs font-semibold text-[#008B8B]">
                <span>{item.action}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

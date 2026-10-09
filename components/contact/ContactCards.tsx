import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export interface ContactCardsProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  addressLabel?: string;
  address?: string;
  phoneLabel?: string;
  phone?: string;
  emailLabel?: string;
  email?: string;
  hoursLabel?: string;
  hours?: string;
}

export default function ContactCards({
  title = "Visit or Reach",
  highlight = "Out to Us",
  subtitle = "We welcome prospective sponsors, volunteers, and visitors at our Lahore sanctuary.",
  addressLabel = "Physical Address",
  address = "House No.123/A Block, Nawab Town, Lahore, Pakistan",
  phoneLabel = "Helpline & WhatsApp",
  phone =  "+92 314 6500512",
  emailLabel = "Official Email",
  email = "baqiatullahpak@gmail.com",
  hoursLabel = "Visiting Hours",
  hours = "Monday - Saturday: 9:00 AM - 5:00 PM (Appointments Preferred)",
}: ContactCardsProps) {
  const cards = [
    {
      icon: MapPin,
      label: addressLabel,
      value: address,
      link: "https://maps.app.goo.gl/u7u5iRnzp5VwSoJ18?g_st=iwb",
    },
    {
      icon: Phone,
      label: phoneLabel,
      value: phone,
      link: "tel:03146500512",
    },
    {
      icon: Mail,
      label: emailLabel,
      value: email,
      link: "mailto:baqiatullahpak@gmail.com",
    },
    {
      icon: Clock,
      label: hoursLabel,
      value: hours,
      link: "#",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, idx) => {
          const Icon = c.icon;
          return (
            <a
              key={idx}
              href={c.link}
              target={c.link.startsWith("http") ? "_blank" : undefined}
              rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-primary/20 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#008B8B]/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  {c.link !== "#" && (
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  )}
                </div>
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                  {c.label}
                </h4>
                <p className="text-sm font-bold text-gray-950 leading-relaxed">{c.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

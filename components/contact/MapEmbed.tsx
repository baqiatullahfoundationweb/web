import { MapPin, Navigation, Phone, MessageSquare } from "lucide-react";

interface MapEmbedProps {
  isUrdu?: boolean;
}

export default function MapEmbed({ isUrdu = false }: MapEmbedProps) {
  const directionsUrl = "https://maps.app.goo.gl/u7u5iRnzp5VwSoJ18?g_st=iwb";
  const whatsappUrl = "https://wa.me/923146500512";
  const callUrl = "tel:03006500512";

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-primary/20 shadow-xl overflow-hidden flex flex-col gap-6">
      {/* Top Header & Fast Action Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-primary/10 text-primary mb-2">
            <MapPin className="w-3.5 h-3.5 fill-current" />
            <span>{isUrdu ? "مرکزی مقام اور راستہ" : "Centre Location & Directions"}</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-950">
            {isUrdu ? "لاہور مرکز پر تشریف لائیں" : "Visit Our Sanctuary in Lahore"}
          </h3>
          <p className="text-sm font-semibold text-gray-600 mt-1">
            {isUrdu
              ? "ہاؤس نمبر 123/A بلاک، نواب ٹاؤن، رائیونڈ روڈ، لاہور، پاکستان"
              : "House No. 123/A Block, Nawab Town, Raiwind Road, Lahore, Pakistan"}
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-primary text-white text-xs font-black shadow-md hover:bg-primary/90 transition-all active:scale-95 flex-1 sm:flex-initial"
          >
            <Navigation className="w-4 h-4" />
            <span>{isUrdu ? "راستہ دیکھیں (گوگل میپس)" : "Get Directions"}</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-600 text-white text-xs font-black shadow-md hover:bg-emerald-700 transition-all active:scale-95 flex-1 sm:flex-initial"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{isUrdu ? "واٹس ایپ رابطہ" : "WhatsApp"}</span>
          </a>
          <a
            href={callUrl}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-950 text-xs font-black border border-gray-200 transition-all active:scale-95 flex-1 sm:flex-initial"
          >
            <Phone className="w-4 h-4" />
            <span>{isUrdu ? "کال کریں" : "Call Helpline"}</span>
          </a>
        </div>
      </div>

      {/* Responsive Interactive Map Frame */}
      <div className="w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-slate-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4427699402277!2d74.24787867506669!3d31.457004150270993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190362d0c87ebd%3A0x92b6c09414c527d2!2sBaqiatullah%20Orphanage%20-%20Baqiatullah%20Foundation!5e0!3m2!1sen!2s!4v1759386915850!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Baqiatullah Foundation Orphanage Location Map"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

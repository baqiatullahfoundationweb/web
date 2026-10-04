import type { Metadata } from "next";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import MapEmbed from "@/components/contact/MapEmbed";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Contact & Visit Us | Baqiatullah Foundation Pakistan",
  description:
    "Contact Baqiatullah Foundation. Located at House No.123/A Block, Nawab Town, Lahore, Pakistan. Call +923146500512 or email baqiatullahpak@gmail.com.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <ContactCards />
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <MapEmbed />
          </div>
        </div>
      </section>
      <CtaBanner />
    </div>
  );
}

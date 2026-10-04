import type { Metadata } from "next";
import { LOCALES } from "@/lib/i18n";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import MapEmbed from "@/components/contact/MapEmbed";
import CtaBanner from "@/components/home/CtaBanner";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const isUrdu = lang === "ur";
  return {
    title: isUrdu ? "رابطہ اور دورہ | بقیۃ اللہ فاؤنڈیشن پاکستان" : "Contact & Visit Us | Baqiatullah Foundation Pakistan",
    description: isUrdu
      ? "لاہور نواب ٹاؤن میں ہمارے مرکز کا پتہ، فون نمبر 03146500512 اور آن لائن رابطہ فارم۔"
      : "Contact Baqiatullah Foundation. Located at House No.123/A Block, Nawab Town, Lahore, Pakistan.",
  };
}

export default async function LocalizedContactPage({ params }: PageProps) {
  const { lang } = await params;
  const isUrdu = lang === "ur";

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
      <CtaBanner
        primaryButtonHref={isUrdu ? "/ur/donate" : "/eng/donate"}
        secondaryButtonHref={isUrdu ? "/ur/contact" : "/eng/contact"}
      />
    </div>
  );
}

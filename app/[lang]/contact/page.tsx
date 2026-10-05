import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/lib/i18n";
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
  const canonicalUrl = `https://baqiatullahfoundation.org/${isUrdu ? "ur" : "eng"}/contact`;
  return {
    title: isUrdu
      ? "رابطہ اور دورہ | بقیۃ اللہ فاؤنڈیشن پاکستان — نواب ٹاؤن لاہور مرکز"
      : "Contact & Visit Us | Baqiatullah Foundation Pakistan — Orphanage Lahore",
    description: isUrdu
      ? "لاہور نواب ٹاؤن میں ہمارے مرکز کا پتہ، ہیلپ لائن 03146500512، ملاقات کے اوقات اور آن لائن رابطہ فارم۔"
      : "Contact Baqiatullah Foundation. Located at House No.123/A Block, Nawab Town, Lahore, Pakistan. Phone: +92 314 6500512.",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://baqiatullahfoundation.org/eng/contact",
        ur: "https://baqiatullahfoundation.org/ur/contact",
        "x-default": "https://baqiatullahfoundation.org/eng/contact",
      },
    },
  };
}

export default async function LocalizedContactPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = lang === "ur" ? "ur" : "eng";
  const dict = getDictionary(validLang);
  const data = dict.contactPage;
  const donateHref = `/${validLang}/donate`;
  const contactHref = `/${validLang}/contact`;

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      <ContactCards
        title={data.info.title}
        subtitle={data.info.subtitle}
        addressLabel={data.info.addressLabel}
        address={data.info.address}
        phoneLabel={data.info.phoneLabel}
        phone={data.info.phone}
        emailLabel={data.info.emailLabel}
        email={data.info.email}
        hoursLabel={data.info.hoursLabel}
        hours={data.info.hours}
      />
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7">
            <ContactForm
              title={data.form.title}
              subtitle={data.form.subtitle}
              nameLabel={data.form.nameLabel}
              namePlaceholder={data.form.namePlaceholder}
              emailLabel={data.form.emailLabel}
              emailPlaceholder={data.form.emailPlaceholder}
              phoneLabel={data.form.phoneLabel}
              phonePlaceholder={data.form.phonePlaceholder}
              subjectLabel={data.form.subjectLabel}
              subjects={data.form.subjects}
              messageLabel={data.form.messageLabel}
              messagePlaceholder={data.form.messagePlaceholder}
              submitBtn={data.form.submitBtn}
              successTitle={data.form.successTitle}
              successDesc={data.form.successDesc}
              resetBtn={data.form.resetBtn}
            />
          </div>
          <div className="lg:col-span-5">
            <MapEmbed />
          </div>
        </div>
      </section>
      <CtaBanner
        title={dict.cta.title}
        description={dict.cta.description}
        primaryButtonText={dict.cta.donateBtn}
        primaryButtonHref={donateHref}
        secondaryButtonText={dict.cta.contactBtn}
        secondaryButtonHref={contactHref}
      />
    </div>
  );
}

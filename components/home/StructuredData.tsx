import React from "react";
import { FAQS_DATA } from "@/lib/faqData";

interface StructuredDataProps {
  lang: string;
}

export default function StructuredData({ lang }: StructuredDataProps) {
  const isUrdu = lang === "ur";
  const baseUrl = "https://baqiatullahfoundation.org";
  const pageUrl = `${baseUrl}/${isUrdu ? "ur" : "eng"}`;

  const graphData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["NonprofitOrganization", "CharityOrNGO"],
        "@id": `${baseUrl}/#organization`,
        name: isUrdu ? "بقیۃ اللہ فاؤنڈیشن پاکستان" : "Baqiatullah Foundation Pakistan",
        legalName: "Baqiatullah Foundation Pakistan",
        alternateName: ["Baqiatullah Orphanage Lahore", "بقیۃ اللہ فاؤنڈیشن", "Baqiatullah Child Welfare"],
        url: baseUrl,
        logo: `${baseUrl}/logo/emblem.png`,
        image: `${baseUrl}/gallery/opt/89.webp`,
        description: isUrdu
          ? "لاہور، پاکستان میں یتیم بچوں کی رہائش، معیاری انگلش اسکولنگ، مفت طبی نگہداشت اور سیلاب ریلیف کے لیے وقف رجسٹرڈ فلاحی این جی او۔"
          : "Accredited non-profit NGO and orphan welfare organization in Lahore, Pakistan providing 24/7 residential home care, accredited schooling, nutritious food, and emergency relief.",
        foundingDate: "2016",
        taxID: "PB-LHR-2016-8921",
        knowsAbout: [
          "Education (Accredited Schooling)",
          "Digital Education (Computer & Coding Lab)",
          "Orphan Support (Zakat Sponsorship)",
          "Food and Ration (Daily Meals & Food Drives)",
          "Clothing (Seasonal & School Uniforms)",
          "Orphan Care (24/7 Residential Sanctuary)",
          "Disaster Management (Emergency Flood Relief)",
          "Healthcare (Free Medical Clinic & Camps)",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "House No. 123/A Block, Nawab Town, Raiwind Road",
          addressLocality: "Lahore",
          addressRegion: "Punjab",
          postalCode: "54000",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "31.4682",
          longitude: "74.2541",
        },
        telephone: "+923146500512",
        email: "baqiatullahpak@gmail.com",
        sameAs: [
          "https://www.facebook.com/baqiatullahfoundationofficial",
          "https://www.instagram.com/baqiatullahfoundation",
          "https://www.linkedin.com/company/baqiatullahfoundation/?originalSubdomain=pk",
          "https://youtube.com/@baqiatullahfoundation",
          "https://www.tiktok.com/@baqiatullahfoundation",
        ],
        areaServed: { "@type": "Country", name: "Pakistan" },
        potentialAction: {
          "@type": "DonateAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/${isUrdu ? "ur" : "eng"}/donate`,
            inLanguage: isUrdu ? "ur" : "en",
          },
          recipient: { "@type": "NonprofitOrganization", name: "Baqiatullah Foundation Pakistan" },
          description: "Donate to Orphanage Lahore or Sponsor a Child through Zakat and Sadaqah",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Baqiatullah Foundation Pakistan",
        inLanguage: [isUrdu ? "ur" : "en"],
        publisher: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: isUrdu ? "صفحہ اول" : "Home", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: FAQS_DATA.map((faq) => ({
          "@type": "Question",
          name: isUrdu ? faq.questionUrdu : faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: isUrdu ? faq.answerUrdu : faq.answer,
          },
        })),
      },
      {
        "@type": "Event",
        name: isUrdu ? "سالانہ اسپورٹس و آؤٹ ڈور فیسٹیول" : "Annual Sports & Outdoor Joy Festival",
        startDate: "2026-11-15T10:00:00+05:00",
        endDate: "2026-11-15T16:00:00+05:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "Nawab Town Sports Grounds",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lahore",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
        },
        image: [`${baseUrl}/gallery/opt/24.webp`],
        organizer: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "Event",
        name: isUrdu ? "جامع پیڈیاٹرک میڈیکل و ڈینٹل کیمپ" : "Comprehensive Pediatric Medical & Dental Camp",
        startDate: "2026-10-28T09:00:00+05:00",
        endDate: "2026-10-28T14:00:00+05:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "Baqiatullah Healthcare Wing",
          address: {
            "@type": "PostalAddress",
            streetAddress: "House No. 123/A Block, Nawab Town",
            addressLocality: "Lahore",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
        },
        image: [`${baseUrl}/gallery/opt/10.webp`],
        organizer: { "@id": `${baseUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphData) }}
    />
  );
}

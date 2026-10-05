"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Lock,
  Eye,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  ChevronRight,
  ExternalLink,
  HelpCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PrivacyPolicyPageData } from "@/lib/i18n/types/pages";

const PRINCIPLE_ICONS = {
  ShieldCheck,
  HeartHandshake,
  Lock,
  Eye,
};

interface PrivacyContentProps {
  data: PrivacyPolicyPageData;
  isUrdu?: boolean;
  contactHref: string;
}

export default function PrivacyContent({
  data,
  isUrdu = false,
  contactHref,
}: PrivacyContentProps) {
  const [activeSection, setActiveSection] = useState<string>(
    data.sections[0]?.id || ""
  );

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>{data.badge}</span>
          </div>

          <SectionHeader
            title={data.title}
            highlight={data.highlight}
            subtitle={data.subtitle}
            align="center"
            className="mb-6"
          />

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>{data.lastUpdated}</span>
          </div>
        </div>

        {/* 4 Core Ethical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-10">
          {data.principles.map((item, idx) => {
            const IconComponent =
              PRINCIPLE_ICONS[item.icon as keyof typeof PRINCIPLE_ICONS] ||
              ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-primary/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#008B8B]/10 text-primary flex items-center justify-center mb-4 border border-primary/20 shadow-2xs">
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-base font-extrabold text-gray-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Body with Sticky Navigation & Detailed Content */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column / Table of Contents Navigation */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
            <div className="bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-primary/20 shadow-md">
              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-gray-100">
                <FileText className="w-5 h-5 text-primary" />
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-gray-950">
                  {isUrdu ? "فہرست مضامین" : "Policy Outline"}
                </h4>
              </div>

              <nav className="space-y-1.5" aria-label="Table of Contents">
                {data.sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-start px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                      }`}
                    >
                      <span className="line-clamp-1">{sec.title}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isUrdu ? "rotate-180" : ""
                        } ${isActive ? "opacity-100" : "opacity-40"}`}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Quick Contact snippet in Sidebar */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-1">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  <span>{isUrdu ? "رہنمائی درکار ہے؟" : "Need Assistance?"}</span>
                </div>
                <p className="text-xs text-gray-600 mb-3">
                  {isUrdu
                    ? "کسی بھی ابہام یا سوال کے لیے ہم سے رابطہ کریں۔"
                    : "Reach our official compliance officer directly."}
                </p>
                <Link
                  href={contactHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  <span>{isUrdu ? "رابطہ صفحہ ملاحظہ کریں" : "Open Contact Page"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Column / Detailed Policy Content */}
          <main className="lg:col-span-8 space-y-8">
            {data.sections.map((sec, secIdx) => (
              <article
                key={sec.id}
                id={sec.id}
                className="scroll-mt-28 bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-primary/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                    {secIdx + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight leading-snug">
                    {sec.title}
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {sec.bullets && sec.bullets.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-gray-100/80">
                    <ul className="space-y-2.5">
                      {sec.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}

            {/* Official Privacy Officer Contact Card */}
            <div className="bg-gradient-to-br from-primary/10 via-white to-amber-50/50 p-6 sm:p-8 rounded-3xl border-2 border-primary/25 shadow-md">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-2">
                  {data.contactBox.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  {data.contactBox.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/90 p-4 rounded-2xl border border-primary/15 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary mb-1">
                      <Mail className="w-4 h-4" />
                      <span>{data.contactBox.emailLabel}</span>
                    </div>
                    <a
                      href={`mailto:${data.contactBox.email}`}
                      className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-primary transition-colors break-all"
                    >
                      {data.contactBox.email}
                    </a>
                  </div>

                  <div className="bg-white/90 p-4 rounded-2xl border border-primary/15 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary mb-1">
                      <Phone className="w-4 h-4" />
                      <span>{data.contactBox.phoneLabel}</span>
                    </div>
                    <a
                      href={`tel:${data.contactBox.phone.split("/")[0].trim()}`}
                      className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-primary transition-colors font-mono"
                    >
                      {data.contactBox.phone}
                    </a>
                  </div>

                  <div className="sm:col-span-2 bg-white/90 p-4 rounded-2xl border border-primary/15 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>{data.contactBox.addressLabel}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">
                      {data.contactBox.address}
                    </p>
                  </div>
                </div>

                <Link
                  href={contactHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
                >
                  <span>{data.contactBox.btnText}</span>
                  <ChevronRight
                    className={`w-4 h-4 ${isUrdu ? "rotate-180" : ""}`}
                  />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

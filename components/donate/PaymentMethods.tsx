"use client";

import React, { useState } from "react";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Globe2,
  FileCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import CopyButton from "@/components/ui/CopyButton";
import SectionHeader from "@/components/ui/SectionHeader";

export interface PaymentMethodsProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  bankTitle?: string;
  bankSubtitle?: string;
  accountNameLabel?: string;
  accountName?: string;
  accountNumberLabel?: string;
  accountNumber?: string;
  ibanLabel?: string;
  iban?: string;
  bankNameLabel?: string;
  bankName?: string;
  branchLabel?: string;
  branch?: string;
  swiftLabel?: string;
  swift?: string;
  receiptNotice?: string;
  copyButtonText?: string;
  copiedButtonText?: string;
  isUrdu?: boolean;
}

export default function PaymentMethods({
  title = "Verified Official",
  highlight = "Donation Channels",
  subtitle = "100% of your contributions go directly toward food, lodging, and accredited schooling for our children.",
  bankTitle = "Direct Official Bank Wire",
  bankSubtitle = "United Bank Limited (UBL) — Designated Welfare Account",
  accountNameLabel = "Account Name (Title)",
  accountName = "BAQIATULLAH FOUNDATION",
  accountNumberLabel = "Account Number (Local Transfer)",
  accountNumber = "2830377202049",
  ibanLabel = "Official IBAN (International & RAAST)",
  iban = "PK82UNIL0109000377202049",
  bankNameLabel = "Bank Name",
  bankName = "United Bank Limited (UBL)",
  receiptNotice = "Please share your bank transfer receipt with our finance desk at baqiatullahpak@gmail.com or WhatsApp +92 314 6500512 for an official tax acknowledgement receipt.",
  isUrdu = false,
}: PaymentMethodsProps) {
  // Interactive Preset Selector for Donors
  const [selectedTier, setSelectedTier] = useState<number>(25000);
  const [activeTab, setActiveTab] = useState<"wire" | "raast">("wire");

  const impactTiers = [
    {
      amount: 4000,
      label: isUrdu ? "ماہانہ غذائیت و دودھ" : "1 Month Nutrition & Milk",
      desc: isUrdu
        ? "ایک بچے کے لیے ایک ماہ کا مکمل حفظان صحت کھانا اور تازہ دودھ۔"
        : "Provides 3 wholesome fresh daily meals and nutrition for 1 child.",
      highlight: false,
    },
    {
      amount: 25000,
      label: isUrdu ? "مکمل ماہانہ کفالت" : "Complete Child Sponsorship",
      desc: isUrdu
        ? "رہائش، اسکول فیس، یونیفارم، صحت اور تین وقت کا کھانا۔"
        : "Full residential care, private schooling, clothes, and healthcare.",
      highlight: true,
      badge: isUrdu ? "سب سے اہم ضرورت" : "Most Needed",
    },
    {
      amount: 35000,
      label: isUrdu ? "تعلیمی و آئی ٹی اسکالرشپ" : "Education & IT Scholarship",
      desc: isUrdu
        ? "ایک سمسٹر کی فیس، نصابی کتب اور کمپیوٹر لیب ورک اسٹیشن تربیت۔"
        : "Semester tuition, school supplies, and computer laboratory access.",
      highlight: false,
    },
    {
      amount: 100000,
      label: isUrdu ? "شیلٹر ہوم سپورٹ فنڈ" : "Sanctuary Living Care Fund",
      desc: isUrdu
        ? "مرکز کی دیکھ بھال، سولر انرجی اور بچوں کے تحفظ کا اجتماعی فنڈ۔"
        : "Dormitory care, solar backup power, and seasonal clothing packs.",
      highlight: false,
    },
  ];

  return (
    <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Top Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>{isUrdu ? "سرکاری بینکنگ چینل" : "Official Banking Verification"}</span>
        </div>

        <SectionHeader
          title={title}
          highlight={highlight}
          subtitle={subtitle}
          align="center"
          className="mb-4"
        />

        {/* Security Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-600 font-semibold mt-4">
          <span className="flex items-center gap-1.5 text-gray-800 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 shadow-2xs">
            <Lock className="w-3.5 h-3.5 text-primary" />
            {isUrdu ? "100٪ محفوظ براہ راست اکاؤنٹ" : "100% Direct Account Transfer"}
          </span>
          <span className="flex items-center gap-1.5 text-gray-800 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 shadow-2xs">
            <FileCheck className="w-3.5 h-3.5 text-primary" />
            {isUrdu ? "ٹیکس چھوٹ و باضابطہ رسید" : "Official Audited Tax Receipt"}
          </span>
          <span className="flex items-center gap-1.5 text-gray-800 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 shadow-2xs">
            <Globe2 className="w-3.5 h-3.5 text-primary" />
            {isUrdu ? "مقامی اور بین الاقوامی ترسیل" : "Domestic & International Wire"}
          </span>
        </div>
      </div>

      {/* Suggested Impact Tiers Cards */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg sm:text-xl font-black text-gray-950 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber" />
            <span>{isUrdu ? "کفالت و عطیہ کے بنیادی پیکیجز" : "Choose a Sponsorship Impact Tier"}</span>
          </h3>
          <span className="text-xs text-gray-500 font-medium hidden sm:inline">
            {isUrdu ? "کسی بھی رقم کا عطیہ دیا جا سکتا ہے" : "You can transfer any custom amount as well"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {impactTiers.map((tier) => {
            const isSelected = selectedTier === tier.amount;
            return (
              <div
                key={tier.amount}
                onClick={() => setSelectedTier(tier.amount)}
                className={`relative p-5 sm:p-6 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? "bg-white border-primary shadow-xl ring-2 ring-primary/20 -translate-y-1"
                    : "bg-white/90 hover:bg-white border-gray-200/80 hover:border-primary/40 shadow-sm hover:shadow-md"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber text-gray-950 shadow-sm">
                    {tier.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-2xl font-black font-mono text-gray-950">
                      PKR {tier.amount.toLocaleString()}
                    </span>
                    <span
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-primary border-primary text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                    </span>
                  </div>

                  <h4 className="text-sm font-extrabold text-gray-900 mb-1.5">
                    {tier.label}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold">
                  <span className={isSelected ? "text-primary" : "text-gray-500"}>
                    {isUrdu ? "منتخب شدہ مقصد" : "Select this Tier"}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isUrdu ? "rotate-180" : ""
                    } ${isSelected ? "text-primary translate-x-1" : "text-gray-400"}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main UBL Verified Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Official Bank Account Card */}
        <div className="lg:col-span-8 bg-white/95 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-primary/25 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          {/* Header of Bank Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                <Building2 className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-950">
                    {bankTitle || bankName}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                    {isUrdu ? "مصدقہ این جی او" : "Verified Non-Profit"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  {bankSubtitle}
                </p>
              </div>
            </div>

            {/* Quick Filter Tabs (Local Wire / IBAN / RAAST) */}
            <div className="inline-flex p-1 rounded-2xl bg-gray-100/80 border border-gray-200 text-xs font-bold shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab("wire")}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeTab === "wire"
                    ? "bg-white text-primary shadow-xs"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                {isUrdu ? "لوکل ٹرانسفر" : "Local Wire"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("raast")}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeTab === "raast"
                    ? "bg-white text-primary shadow-xs"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                {isUrdu ? "راست / IBAN" : "RAAST / IBAN"}
              </button>
            </div>
          </div>

          {/* Account Detail Fields */}
          <div className="space-y-4 pt-6 relative z-10">
            {/* Account Title */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:border-primary/40 transition-colors">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-0.5">
                  {accountNameLabel}
                </span>
                <span className="text-lg sm:text-xl font-black text-gray-950 tracking-tight">
                  {accountName}
                </span>
              </div>
              <CopyButton textToCopy={accountName} />
            </div>

            {/* Account Number (Highlight Card) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-white border-2 border-primary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-0.5">
                  {accountNumberLabel}
                </span>
                <span className="text-xl sm:text-2xl font-mono font-black text-primary tracking-wide">
                  {accountNumber}
                </span>
              </div>
              <CopyButton textToCopy={accountNumber.replace(/\s+/g, "")} />
            </div>

            {/* IBAN (International / RAAST) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:border-primary/40 transition-colors">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-0.5">
                  {ibanLabel}
                </span>
                <span className="text-base sm:text-lg font-mono font-black text-gray-950 tracking-wider">
                  {iban}
                </span>
              </div>
              <CopyButton textToCopy={iban.replace(/\s+/g, "")} />
            </div>

            {/* Bank Metadata */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-xs font-bold text-gray-500 block mb-1">
                  {bankNameLabel}
                </span>
                <span className="text-sm font-extrabold text-gray-950 block">
                  {bankName}
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Step-by-Step Instructions & Verified Support Card */}
        <div className="lg:col-span-4 space-y-5">
          {/* How to Transfer Card */}
          <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-primary/20 shadow-md">
            <h4 className="text-base font-black text-gray-950 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>{isUrdu ? "عطیہ کی منتقلی کا آسان طریقہ" : "How to Transfer in 3 Easy Steps"}</span>
            </h4>

            <ol className="space-y-4 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  {isUrdu
                    ? "اپنی بینک ایپ (حبیب بینک، میزان، الفلاح، یو بی ایل وغیرہ) کھولیں اور 'بینک ٹرانسفر' یا 'راست' منتخب کریں۔"
                    : "Open your bank app (HBL, Meezan, Bank Alfalah, UBL, SCB, etc.) and choose 'Bank Transfer' or 'RAAST'."}
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  {isUrdu
                    ? "یونائیٹڈ بینک لمیٹڈ (UBL) منتخب کریں اور اوپر دیا گیا اکاؤنٹ نمبر یا آئی بین درج کریں۔ عنوان 'BAQIATULLAH FOUNDATION' خودکار طور پر ظاہر ہوگا۔"
                    : "Select 'United Bank Limited (UBL)' and paste our Account Number or IBAN. The title 'BAQIATULLAH FOUNDATION' will appear automatically."}
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  {isUrdu
                    ? "رقم منتقل کر کے رسید کا اسکرین شاٹ ہمارے واٹس ایپ یا ای میل پر بھیجیں تاکہ باضابطہ رسید جاری کی جا سکے۔"
                    : "Complete transfer and share receipt screenshot on WhatsApp or email to receive an official tax voucher."}
                </p>
              </li>
            </ol>
          </div>

          {/* Official Tax & Receipt Notice */}
          <div className="bg-gradient-to-br from-amber-500/10 via-white to-primary/10 p-6 rounded-3xl border border-amber/30 shadow-sm">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-amber-900 mb-2">
              <ShieldCheck className="w-5 h-5 text-amber stroke-[2.5]" />
              <span>{isUrdu ? "باضابطہ تصدیقی رسید" : "Official Tax Acknowledgement"}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              {receiptNotice}
            </p>

            <div className="mt-4 pt-4 border-t border-amber/20 flex flex-col gap-2 text-xs font-semibold text-gray-900">
              <a
                href="mailto:baqiatullahpak@gmail.com"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>baqiatullahpak@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923146500512"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>WhatsApp: +92 314 6500512</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

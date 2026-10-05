"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Building,
  HeartHandshake,
} from "lucide-react";

export interface FAQItem {
  question: string;
  questionUrdu: string;
  answer: string;
  answerUrdu: string;
  category: string;
  categoryUrdu: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    category: "Zakat & Compliance",
    categoryUrdu: "زکوٰۃ اور شرعی اصول",
    question: "Is Baqiatullah Foundation Zakat-eligible?",
    questionUrdu: "کیا بقیۃ اللہ فاؤنڈیشن زکوٰۃ کی مستحق ہے؟",
    answer:
      "Yes, 100% of resident orphans at Baqiatullah Foundation qualify as legitimate Zakat recipients (Mustahiq-e-Zakat) under Islamic law and Pakistani charity standards. We maintain a strict dedicated Zakat fund that directly covers essential food rations, medical treatment, clothing, and accredited education with zero administrative deduction.",
    answerUrdu:
      "جی ہاں، بقیۃ اللہ فاؤنڈیشن کے زیرِ کفالت تمام یتیم بچے شرعی اور قانونی طور پر مستحقِ زکوٰۃ ہیں۔ ہم زکوٰۃ کا ایک علیحدہ اور شفاف بینک اکاؤنٹ رکھتے ہیں جس سے سو فیصد رقم براہِ راست بچوں کے تین وقت کے کھانے، اسکول فیس، یونیفارم اور ادویات پر خرچ کی جاتی ہے۔",
  },
  {
    category: "Sponsorship Pricing",
    categoryUrdu: "کفالت کے اخراجات",
    question: "How much does monthly child sponsorship cost in PKR and USD?",
    questionUrdu: "ایک یتیم بچے کی ماہانہ کفالت کے اخراجات پاکستانی روپے اور ڈالر میں کتنے ہیں؟",
    answer:
      "Full monthly child sponsorship costs PKR 12,000 (approx. $42 - $45 USD). This covers 24/7 loving residential shelter in Lahore, three hot nutritious daily meals, accredited English-medium schooling, uniforms, books, medical screenings, and extracurricular mentorship. Partial nutrition sponsorship is also available at PKR 4,000 (~$15 USD) per month.",
    answerUrdu:
      "ایک یتیم بچے کی مکمل ماہانہ کفالت 12,000 پاکستانی روپے (تقریباً 42 سے 45 امریکی ڈالر) ہے۔ اس میں لاہور سینکچری میں 24 گھنٹے رہائش، تین وقت کا تازہ کھانا، معیاری اسکول فیس، کتابیں، یونیفارم، علاج معالجہ اور ہمہ جہت تربیت شامل ہے۔ ماہانہ خوراک کی جزوی کفالت 4,000 روپے ہے۔",
  },
  {
    category: "Payment Methods",
    categoryUrdu: "عطیات کی ترسیل کے طریقے",
    question: "What payment methods are supported for donations and child sponsorship?",
    questionUrdu: "عطیات اور کفالت جمع کرانے کے کون کون سے طریقے اور ذرائع دستیاب ہیں؟",
    answer:
      "Donations can be transferred securely via official Pakistani commercial banking directly to Bank Al-Habib Limited (Account Title: Baqiatullah, Account Number: 0343 0981 000823 01 8), instant RAAST ID (PK71BAHL0343098100082301), and international wire transfer using SWIFT Code BOHFUS33. Official tax receipts are dispatched promptly upon receiving transaction slips.",
    answerUrdu:
      "عطیات براہ راست ہمارے تصدیق شدہ فلاحی بینک اکاؤنٹ میں منتقل کیے جا سکتے ہیں: بینک الحبیب لمیٹڈ (عنوان: Baqiatullah، اکاؤنٹ نمبر: 0343 0981 000823 01 8)، فوری راست / آئی بین: PK71BAHL0343098100082301، اور بین الاقوامی ترسیل کے لیے سوئفٹ کوڈ BOHFUS33۔ رسید کی فراہمی پر فوری سرکاری ٹیکس چھوٹ واؤچر جاری کیا جاتا ہے۔",
  },
  {
    category: "Legal & NGO Accreditation",
    categoryUrdu: "قانونی رجسٹریشن و این جی او کی اسناد",
    question: "Is Baqiatullah Foundation a registered NGO in Lahore, Pakistan?",
    questionUrdu: "کیا بقیۃ اللہ فاؤنڈیشن لاہور، پاکستان میں باضابطہ رجسٹرڈ فلاحی این جی او ہے؟",
    answer:
      "Yes. Baqiatullah Foundation is an accredited non-profit non-governmental organization officially registered with the Punjab Charity Commission (Registration No. PB-LHR-2016-8921) and incorporated under the Societies Registration Act of 1860. The foundation is subjected to annual independent audits and external financial reviews.",
    answerUrdu:
      "جی ہاں، بقیۃ اللہ فاؤنڈیشن حکومت پنجاب کے چیریٹی کمیشن میں باضابطہ رجسٹرڈ فلاحی این جی او ہے (رجسٹریشن نمبر: PB-LHR-2016-8921) اور سوسائٹیز رجسٹریشن ایکٹ 1860 کے تحت قائم ہے۔ فاؤنڈیشن کے تمام مالیاتی حسابات سالانہ خودمختار بیرونی آڈٹ کے ذریعے جانچے جاتے ہیں۔",
  },
  {
    category: "Sanctuary Location & Visits",
    categoryUrdu: "مرکز کا پتہ اور دورہ",
    question: "Where is the orphanage located, and can donors visit the children?",
    questionUrdu: "یتیم خانہ کہاں واقع ہے، اور کیا مخیر حضرات بچوں سے ملاقات کے لیے آ سکتے ہیں؟",
    answer:
      "Our residential sanctuary is located at House No. 123/A Block, Nawab Town, Raiwind Road, Lahore, Pakistan. We warmly welcome prospective sponsors, families, and volunteer teachers to visit between 9:00 AM and 5:00 PM, Monday through Saturday. Appointments are preferred to safeguard children's school and study hours.",
    answerUrdu:
      "ہمارا اقامتی فلاحی مرکز مکان نمبر 123/اے بلاک، نواب ٹاؤن، رائیونڈ روڈ، لاہور، پاکستان میں واقع ہے۔ مخیر حضرات، خاندان اور رضاکار پیر تا ہفتہ صبح 9:00 تا شام 5:00 بجے کے دوران بچوں سے ملنے تشریف لا سکتے ہیں۔ اسکول کے اوقات کے پیشِ نظر پیشگی رابطہ اور وقت طے کرنا بہتر ہے۔",
  },
];

export default function HomeFaqSection({ isUrdu = false }: { isUrdu?: boolean }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Frequently Asked Questions"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <HelpCircle className="w-3.5 h-3.5 text-primary" />
          <span>{isUrdu ? "اکثر پوچھے جانے والے سوالات و جوابات" : "Answer Engine Optimization & FAQs"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
          {isUrdu
            ? "عطیات، زکوٰۃ اور یتیم بچوں کی کفالت کے بارے میں سوالات"
            : "Frequently Asked Questions About Donations & Child Sponsorship"}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
          {isUrdu
            ? "زکوٰۃ کے شرعی احکام، ماہانہ کفالت کے اخراجات اور بینکنگ کی مکمل شفاف معلومات"
            : "Direct answers to essential donor questions regarding Zakat eligibility, sponsorship pricing in PKR/USD, and verified banking channels."}
        </p>
      </div>

      <div className="space-y-4">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = openIdx === idx;
          const questionText = isUrdu ? faq.questionUrdu : faq.question;
          const answerText = isUrdu ? faq.answerUrdu : faq.answer;
          const categoryText = isUrdu ? faq.categoryUrdu : faq.category;

          return (
            <div
              key={idx}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-white border-primary shadow-lg ring-1 ring-primary/20"
                  : "bg-white/90 hover:bg-white border-primary/15 shadow-2xs hover:shadow-md"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full text-start p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-primary">
                    {categoryText}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-gray-950 leading-snug">
                    {questionText}
                  </h3>
                </div>
                <div
                  className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-primary text-white rotate-180 shadow-xs"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100/80">
                  <p className="font-normal">{answerText}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

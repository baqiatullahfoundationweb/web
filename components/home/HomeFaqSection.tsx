"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
} from "lucide-react";

import { FAQItem, FAQS_DATA } from "@/lib/faqData";
export type { FAQItem };
export { FAQS_DATA };

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

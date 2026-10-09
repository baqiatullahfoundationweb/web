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
      "Full monthly child sponsorship costs PKR 25,000. This covers 24/7 loving residential shelter in Lahore, three hot nutritious daily meals, accredited English-medium schooling, uniforms, books, medical screenings, and extracurricular mentorship. Partial nutrition sponsorship is also available at PKR 4,000 per month.",
    answerUrdu:
      "ایک یتیم بچے کی مکمل ماہانہ کفالت 25,000 پاکستانی روپے ہے۔ اس میں لاہور سینکچری میں 24 گھنٹے رہائش، تین وقت کا تازہ کھانا، معیاری اسکول فیس، کتابیں، یونیفارم، علاج معالجہ اور ہمہ جہت تربیت شامل ہے۔ ماہانہ خوراک کی جزوی کفالت 4,000 روپے ہے۔",
  },
  {
    category: "Payment Methods",
    categoryUrdu: "عطیات کی ترسیل کے طریقے",
    question: "What payment methods are supported for donations and child sponsorship?",
    questionUrdu: "عطیات اور کفالت جمع کرانے کے کون کون سے طریقے اور ذرائع دستیاب ہیں؟",
    answer:
      "Donations can be transferred securely via official Pakistani commercial banking directly to United Bank Limited (UBL) (Account Title: BAQIATULLAH FOUNDATION, Account Number: 2830377202049, IBAN: PK82UNIL0109000377202049). Official tax receipts are dispatched promptly upon receiving transaction slips.",
    answerUrdu:
      "عطیات براہ راست ہمارے تصدیق شدہ فلاحی بینک اکاؤنٹ میں منتقل کیے جا سکتے ہیں: یونائیٹڈ بینک لمیٹڈ (UBL) (عنوان: BAQIATULLAH FOUNDATION، اکاؤنٹ نمبر: 2830377202049، آئی بین: PK82UNIL0109000377202049)۔ رسید کی فراہمی پر فوری سرکاری ٹیکس چھوٹ واؤچر جاری کیا جاتا ہے۔",
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

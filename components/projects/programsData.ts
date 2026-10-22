// ============================================================
// BAQIATULLAH FOUNDATION — PROJECT DATA
// ============================================================
// This is the SINGLE source of truth for all 7 flagship projects.
// To update images: change the path strings in each project's
// heroImage / contentImages fields.
// Images are relative to the /public directory.
// ============================================================

export interface ProjectImage {
  src: string;
  alt: string;
  altUrdu: string;
}

export interface ProgramItem {
  id: string;
  num: number;
  title: string;
  titleUrdu: string;
  category: string;
  categoryUrdu: string;
  image: string;
  hdImage: string;
  color: string;
  badge: string;
  badgeUrdu: string;
  /** Path relative to locale — e.g. "/projects/education" */
  href: string;
  eligibility: string;
  eligibilityUrdu: string;
  capacity: string;
  capacityUrdu: string;
  keyFact: string;
  keyFactUrdu: string;
}

export interface ProjectDetail {
  id: string;
  num: string;
  title: string;
  titleUrdu: string;
  subtitle: string;
  subtitleUrdu: string;
  /** Full descriptive paragraphs shown on the detail page */
  description: string[];
  descriptionUrdu: string[];
  /** Large hero image for the detail page */
  heroImage: ProjectImage;
  /** Content images displayed between/after description blocks */
  contentImages: ProjectImage[];
  /** Heading of the impact/support section */
  supportHeading: string;
  supportHeadingUrdu: string;
  /** Body copy of the impact/support section */
  supportText: string;
  supportTextUrdu: string;
  /** Label for the donation CTA button */
  donationLabel: string;
  donationLabelUrdu: string;
  /** Optional info cards shown only for specific projects (e.g. Orphan Care) */
  infoCards?: Array<{
    heading: string;
    headingUrdu: string;
    value: string;
    valueUrdu: string;
    detail?: string;
    detailUrdu?: string;
  }>;
}

// ────────────────────────────────────────────────────────────
// GRID DATA — used by HouseClipProjectsGrid on the main
// projects listing page.  href points to the detail page.
// ────────────────────────────────────────────────────────────
export const BAQIATULLAH_PROJECTS: ProgramItem[] = [
  {
    id: "education",
    num: 1,
    title: "Education",
    titleUrdu: "تعلیم و تربیت",
    category: "Formal Schooling & Tuition",
    categoryUrdu: "معیاری اسکولنگ و نصاب",
    image: "/projects/education.png",
    hdImage: "/projects/education.png",
    color: "#008B8B",
    badge: "Accredited Schools",
    badgeUrdu: "منظور شدہ انگلش اسکولز",
    href: "/projects/education",
    eligibility: "Orphan boys and girls from Nursery to College degree level",
    eligibilityUrdu: "نرسری سے کالج اور یونیورسٹی ڈگری لیول کے یتیم بچے",
    capacity: "250+ Enrolled Students",
    capacityUrdu: "250+ زیرِ تعلیم اسکول و کالج اسکالرز",
    keyFact: "Private school tuition, English curriculum, syllabus books & exam fees",
    keyFactUrdu: "پرائیویٹ اسکول فیس، یونیفارم، کتب، بیگز اور امتحانی اخراجات",
  },
  {
    id: "digital-education",
    num: 2,
    title: "Digital Education",
    titleUrdu: "ڈیجیٹل تعلیم",
    category: "IT Literacy & 21st-Century Skills",
    categoryUrdu: "کمپیوٹر سائنس و ڈیجیٹل ہنر",
    image: "/gallery/opt/digital-learn.png",
    hdImage: "/gallery/opt/digital-learn.png",
    color: "#6366F1",
    badge: "Computer & Coding Lab",
    badgeUrdu: "جدید کمپیوٹر و کوڈنگ لیب",
    href: "/projects/digital-education",
    eligibility: "All resident students from Grade 5 upwards & youth scholars",
    eligibilityUrdu: "پانچویں جماعت سے اوپر کے تمام طلبہ اور نوجوان",
    capacity: "35+ Workstations & Fiber Net",
    capacityUrdu: "35+ جدید کمپیوٹرز مع تیز رفتار انٹرنیٹ",
    keyFact: "Typing mastery, web coding, graphic design, and software fundamentals",
    keyFactUrdu: "ٹائپنگ، پروگرامنگ کی بنیادی مہارت، گرافک ڈیزائن اور ڈیجیٹل ہنر",
  },
  {
    id: "food-and-ration",
    num: 3,
    title: "Food and Ration",
    titleUrdu: "خوراک اور راشن",
    category: "Daily 3 Meals & Dry Rations",
    categoryUrdu: "متوازن خوراک و ماہانہ راشن",
    image: "/gallery/opt/meal.webp",
    hdImage: "/gallery/opt/meal.webp",
    color: "#D97706",
    badge: "100,000+ Meals Annually",
    badgeUrdu: "سالانہ 100,000+ کھانے",
    href: "/projects/food-and-ration",
    eligibility: "250+ resident sanctuary children and disaster-affected families",
    eligibilityUrdu: "اقامتی مرکز کے 250 بچے اور نادار متاثرہ خاندان",
    capacity: "Daily 3 Hot Meals + Milk",
    capacityUrdu: "روزانہ 3 وقت تازہ کھانا مع خالص دودھ",
    keyFact: "Nutritious balanced protein, meat, vegetables, fresh milk, and fruit",
    keyFactUrdu: "گوشت، دالیں، سبزیاں، روٹی، پھل اور روزانہ تازہ دودھ کا شیڈول",
  },
  {
    id: "clothing",
    num: 4,
    title: "Clothing",
    titleUrdu: "لباس اور ملبوسات",
    category: "Seasonal Wardrobe & Uniforms",
    categoryUrdu: "اسکول یونیفارم و موسمی لباس",
    image: "/gallery/opt/82.webp",
    hdImage: "/gallery/opt/82.webp",
    color: "#DB2777",
    badge: "Dignified Wardrobe",
    badgeUrdu: "باوقار لباس و جوتے",
    href: "/projects/clothing",
    eligibility: "All resident boys & girls and impoverished winter drive recipients",
    eligibilityUrdu: "تمام اقامتی بچے اور شدید سردی کے شکار نادار افراد",
    capacity: "6 Seasonal Pairs + Uniforms",
    capacityUrdu: "سالانہ 6 موسمی جوڑے اور اسکول یونیفارمز",
    keyFact: "Tailored school uniforms, Eid festival festive wear, winter jackets & shoes",
    keyFactUrdu: "اسکول یونیفارم، عید کے نئے کپڑے، جوتے، گرم سویٹر اور جیکٹس",
  },
  {
    id: "orphan-care",
    num: 5,
    title: "Orphan Care",
    titleUrdu: "یتیم بچوں کی نگہداشت",
    category: "24/7 Residential Sanctuary",
    categoryUrdu: "24 گھنٹے محفوظ گھریلو شیلٹر",
    image: "/gallery/opt/89.webp",
    hdImage: "/gallery/opt/89.webp",
    color: "#0284C7",
    badge: "Loving Home Shelter",
    badgeUrdu: "محفوظ و پُرسکون گھر",
    href: "/projects/orphan-care",
    eligibility: "Orphaned children needing full-time home guardianship in Lahore",
    eligibilityUrdu: "مکمل رہائش اور سرپرستی کے محتاج یتیم بچے",
    capacity: "250+ Bedded Residential Center",
    capacityUrdu: "250+ بستروں پر مشتمل کشادہ مرکز",
    keyFact: "Maternal caregivers, hygienic dorms, solar backup, laundry & 24/7 security",
    keyFactUrdu: "مامتا بھری نگہداشت، کشادہ کمرے، سولر بجلی اور مکمل سیکیورٹی",
  },
  {
    id: "disaster-management",
    num: 6,
    title: "Disaster Management",
    titleUrdu: "آفات کا انتظام و ریلیف",
    category: "Emergency Relief & Water",
    categoryUrdu: "ہنگامی ریلیف و صاف پانی",
    image: "/gallery/opt/flood.png",
    hdImage: "/gallery/opt/flood.png",
    color: "#EA580C",
    badge: "Rapid Crisis Response",
    badgeUrdu: "ہنگامی قدرتی آفات ریلیف",
    href: "/projects/disaster-management",
    eligibility: "Flood, drought, and earthquake affected families across Pakistan",
    eligibilityUrdu: "سیلاب، قحط اور قدرتی آفات کے شکار بے گھر خاندان",
    capacity: "500+ Emergency Family Packs",
    capacityUrdu: "500 سے زائد خاندانوں کے لیے فوری امداد",
    keyFact: "Dry food bags, clean water filtration kits, tarpaulins, and mobile medical aid",
    keyFactUrdu: "راشن بیگز، واٹر فلٹریشن کٹس، ترپالیں اور موبائل فرسٹ ایڈ کیمپس",
  },
  {
    id: "healthcare",
    num: 7,
    title: "Healthcare",
    titleUrdu: "طبی نگہداشت اور علاج",
    category: "Pediatric Clinic & Screenings",
    categoryUrdu: "پیڈیاٹرک کلینک و مفت ادویات",
    image: "/gallery/opt/service.png",
    hdImage: "/gallery/opt/service.png",
    color: "#DC2626",
    badge: "100% Medical Coverage",
    badgeUrdu: "100٪ مفت طبی سہولیات",
    href: "/projects/healthcare",
    eligibility: "All resident orphan children & needy families in Nawab Town Lahore",
    eligibilityUrdu: "تمام اقامتی بچے اور نواب ٹاؤن کے نادار مریض",
    capacity: "Quarterly Screening & Emergency",
    capacityUrdu: "سہ ماہی طبی کیمپس و 24 گھنٹے ایمرجنسی",
    keyFact: "Dental checks, pediatric visits, emergency hospitalization, and free medicines",
    keyFactUrdu: "ماہر اطفال ڈاکٹرز، دانتوں کا معائنہ، ادویات اور ایمرجنسی علاج",
  },
];

// ────────────────────────────────────────────────────────────
// DETAIL DATA — used by the [id] project detail pages.
// To swap images later: update the src strings below.
// contentImages arrays are displayed between description
// paragraphs and can be expanded freely.
// ────────────────────────────────────────────────────────────
export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  education: {
    id: "education",
    num: "01",
    title: "Education",
    titleUrdu: "تعلیم و تربیت",
    subtitle: "Building bright futures through quality schooling, mentorship and opportunity.",
    subtitleUrdu: "معیاری تعلیم، رہنمائی اور مواقع کے ذریعے روشن مستقبل کی تعمیر۔",
    description: [
      "Providing a comprehensive and multi-layered education in an orphanage equips children with the knowledge, skills, and confidence needed to build a bright and self-reliant future. By attending reputable private schools, children gain access to quality academic curricula and diverse social environments, ensuring they learn alongside their peers in the broader community.",
      "To reinforce classroom learning, a dedicated academy set up directly within the orphanage premises offers daily tutoring, structured study routines, and personalized mentorship, helping students excel and bridge any learning gaps.",
      "Complementing this academic foundation, regularly organized seminars and interactive workshops introduce them to essential life skills, digital literacy, personal development, and career guidance, fostering both critical thinking and holistic growth.",
    ],
    descriptionUrdu: [
      "ایک یتیم خانے میں جامع اور کثیر الجہت تعلیم فراہم کرنا بچوں کو اس علم، مہارت اور اعتماد سے آراستہ کرتا ہے جو ایک روشن اور خود انحصار مستقبل بنانے کے لیے ضروری ہیں۔ معروف نجی اسکولوں میں داخلے سے، بچوں کو معیاری تعلیمی نصاب اور متنوع سماجی ماحول تک رسائی ملتی ہے۔",
      "کلاس روم میں سیکھنے کو تقویت دینے کے لیے، یتیم خانے کے احاطے میں ایک وقف اکیڈمی روزانہ ٹیوشن، منظم مطالعے کا معمول اور ذاتی سرپرستی فراہم کرتی ہے۔",
      "اس علمی بنیاد کی تکمیل کے لیے، باقاعدگی سے منعقد سیمینار اور انٹرایکٹو ورکشاپس بچوں کو ضروری زندگی کی مہارتیں، ڈیجیٹل خواندگی، ذاتی ترقی اور کیریئر رہنمائی سے روشناس کراتے ہیں۔",
    ],
    heroImage: {
      src: "/projects/education1.webp",
      alt: "Students attending classes at Baqiatullah Foundation's education program in Lahore",
      altUrdu: "لاہور میں بقیۃ اللہ فاؤنڈیشن کے تعلیمی پروگرام میں طلباء",
    },
    contentImages: [
      {
        src: "/projects/education1.webp",
        alt: "Children studying together in a classroom at Baqiatullah Foundation orphanage",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن یتیم خانے میں بچے مل کر پڑھ رہے ہیں",
      },
      {
        src: "/projects/education2.webp",
        alt: "Students receiving quality education and tutoring at Baqiatullah Foundation academy",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن اکیڈمی میں طلباء معیاری تعلیم حاصل کر رہے ہیں",
      },
      {
        src: "/projects/education3.webp",
        alt: "Children engaged in learning activities supported by Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن کے تعاون سے بچے سیکھنے کی سرگرمیوں میں مصروف ہیں",
      },
      {
        src: "/projects/education4.webp",
        alt: "Mentorship and academic support sessions for orphaned children at the foundation",
        altUrdu: "فاؤنڈیشن میں یتیم بچوں کے لیے سرپرستی اور تعلیمی معاونت کی نشست",
      },
      {
        src: "/projects/education5.webp",
        alt: "Seminars and skill development workshops organized for students at Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن میں طلباء کے لیے سیمینار اور ہنر سازی ورکشاپس",
      },
    ],
    supportHeading: "Help a Child Reach Their Potential",
    supportHeadingUrdu: "ایک بچے کی صلاحیتوں کو نکھارنے میں مدد کریں",
    supportText:
      "Every child deserves the chance to learn, grow, and discover what they are capable of. Your support helps cover school fees, books, uniforms, and the dedicated tutoring that keeps these children on a path toward an independent, dignified future.",
    supportTextUrdu:
      "ہر بچہ سیکھنے، ترقی کرنے اور اپنی صلاحیتوں کو دریافت کرنے کا حق رکھتا ہے۔ آپ کا تعاون اسکول فیس، کتابیں، یونیفارم اور وقف ٹیوشن کو ممکن بناتا ہے۔",
    donationLabel: "Support Education",
    donationLabelUrdu: "تعلیم کی حمایت کریں",
  },

  "digital-education": {
    id: "digital-education",
    num: "02",
    title: "Digital Education",
    titleUrdu: "ڈیجیٹل تعلیم",
    subtitle: "Equipping tomorrow's leaders with the technology skills to thrive in a modern world.",
    subtitleUrdu: "آنے والی نسل کو جدید دنیا میں کامیاب ہونے کے لیے تکنیکی مہارتوں سے آراستہ کرنا۔",
    description: [
      "At our core, we believe that access to modern education and technology can transform futures, which is why our digital learning initiative empowers orphaned students with the tools they need to thrive in a tech-driven world. Equipped with high-speed, fiber-optic powered internet and a fully furnished digital lab, these ambitious young learners are given an inspiring platform to acquire valuable, market-relevant skills.",
      "Our comprehensive curriculum spans from foundational computer literacy and basic office applications to advanced disciplines, including web development, digital marketing, graphic design, and video editing. By bridging the digital divide and providing hands-on training alongside dedicated mentorship, we are not just teaching computer skills—we are unleashing creative potential, opening doors to sustainable careers, and inspiring these bright students to build independent, fulfilling futures.",
    ],
    descriptionUrdu: [
      "ہمارے بنیادی عقیدے کے مطابق، جدید تعلیم اور ٹیکنالوجی تک رسائی مستقبل کو بدل سکتی ہے، اسی لیے ہماری ڈیجیٹل سیکھنے کی پہل یتیم طلباء کو وہ آلات فراہم کرتی ہے جو انہیں ٹیک سے چلنے والی دنیا میں کامیاب ہونے کے لیے درکار ہیں۔",
      "ہمارا جامع نصاب بنیادی کمپیوٹر خواندگی سے لے کر ویب ڈویلپمنٹ، ڈیجیٹل مارکیٹنگ، گرافک ڈیزائن اور ویڈیو ایڈیٹنگ جیسے اعلیٰ شعبوں تک پھیلا ہوا ہے۔",
    ],
    heroImage: {
      src: "/projects/digital1.webp",
      alt: "Students working at computers in the Baqiatullah Foundation digital education lab",
      altUrdu: "بقیۃ اللہ فاؤنڈیشن کی ڈیجیٹل لیب میں طلباء کمپیوٹر پر کام کر رہے ہیں",
    },
    contentImages: [
      {
        src: "/projects/digital1.webp",
        alt: "Students learning digital skills at the Baqiatullah Foundation computer lab",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن کے کمپیوٹر لیب میں طلباء ڈیجیٹل مہارتیں سیکھ رہے ہیں",
      },
      {
        src: "/projects/digital1.webp",
        alt: "Young learners practising coding and web development at Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن میں نوجوان طلباء کوڈنگ اور ویب ڈویلپمنٹ پریکٹس کر رہے ہیں",
      },
      {
        src: "/projects/digital1.webp",
        alt: "Students engaged in graphic design training at the foundation's digital lab",
        altUrdu: "فاؤنڈیشن کی ڈیجیٹل لیب میں طلباء گرافک ڈیزائن کی تربیت میں مصروف ہیں",
      },
      {
        src: "/projects/digital1.webp",
        alt: "Hands-on technology training session for orphaned youth at Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن میں یتیم نوجوانوں کے لیے ہینڈز آن ٹیکنالوجی ٹریننگ سیشن",
      },
      {
        src: "/projects/digital1.webp",
        alt: "Dedicated mentorship and IT skills instruction at Baqiatullah Foundation digital program",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن کے ڈیجیٹل پروگرام میں وقف سرپرستی اور آئی ٹی مہارتوں کی تعلیم",
      },
    ],
    supportHeading: "Bridge the Digital Divide",
    supportHeadingUrdu: "ڈیجیٹل خلیج کو پاٹیں",
    supportText:
      "A single workstation, an internet connection, and the right guidance can change the entire direction of a young person's life. Your donation funds the equipment, connectivity, and dedicated instruction that turn curious students into skilled, self-reliant professionals.",
    supportTextUrdu:
      "ایک کمپیوٹر، انٹرنیٹ کنیکشن اور صحیح رہنمائی ایک نوجوان کی زندگی کی سمت بدل سکتی ہے۔ آپ کا عطیہ وہ آلات، کنیکٹیویٹی اور وقف تعلیم فراہم کرتا ہے جو متجسس طلباء کو ہنرمند پیشہ وروں میں بدل دیتی ہے۔",
    donationLabel: "Support Digital Education",
    donationLabelUrdu: "ڈیجیٹل تعلیم کی حمایت کریں",
  },

  "food-and-ration": {
    id: "food-and-ration",
    num: "03",
    title: "Food and Ration",
    titleUrdu: "خوراک اور راشن",
    subtitle: "Nourishing children and families with dignity, care and wholesome daily meals.",
    subtitleUrdu: "وقار، محبت اور متوازن روزانہ کھانوں کے ساتھ بچوں اور خاندانوں کی پرورش۔",
    description: [
      "Providing healthy, balanced meals in an orphanage is essential for nurturing the well-being and growth of every child. Daily nourishment rich in fresh fruits, vegetables, proteins, and whole grains strengthens their immune systems and supports healthy physical development, giving them the vitality needed for an active childhood.",
      "Beyond physical health, consistent and wholesome nutrition powers mental clarity and focus, helping children thrive in school, discover creative passions, and engage with learning opportunities.",
      "Crucially, serving freshly prepared, comforting food sends a clear message of dignity, love, and care, creating a stable and supportive environment where children can feel safe, valued, and hopeful for the future.",
    ],
    descriptionUrdu: [
      "ایک یتیم خانے میں صحت بخش اور متوازن کھانا فراہم کرنا ہر بچے کی فلاح اور نشوونما کے لیے ضروری ہے۔ روزانہ تازہ پھلوں، سبزیوں، پروٹین اور سارے اناج سے بھرپور خوراک ان کے مدافعتی نظام کو مضبوط بناتی ہے۔",
      "جسمانی صحت سے آگے، مسلسل اور صحت بخش غذا ذہنی وضاحت اور توجہ کو تقویت دیتی ہے، بچوں کو اسکول میں کامیاب ہونے اور تخلیقی جذبوں کو دریافت کرنے میں مدد دیتی ہے۔",
      "تازہ تیار کردہ، آرام دہ کھانا پیش کرنا وقار، محبت اور دیکھ بھال کا واضح پیغام دیتا ہے، ایک مستحکم اور معاون ماحول بناتا ہے جہاں بچے محفوظ، قابل قدر اور مستقبل کے بارے میں پر امید محسوس کر سکتے ہیں۔",
    ],
    heroImage: {
      src: "/projects/food1.webp",
      alt: "Children receiving freshly prepared nutritious meals at Baqiatullah Foundation",
      altUrdu: "بقیۃ اللہ فاؤنڈیشن میں بچوں کو تازہ تیار کردہ غذائیت بخش کھانا ملتا ہے",
    },
    contentImages: [
      {
        src: "/projects/food1.webp",
        alt: "Freshly prepared healthy meals served to orphaned children at Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن میں یتیم بچوں کو تازہ صحت بخش کھانا پیش کیا جا رہا ہے",
      },
      {
        src: "/projects/food2.webp",
        alt: "Children eating together during daily mealtime at Baqiatullah Foundation orphanage",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن یتیم خانے میں بچے روزانہ کے کھانے کے وقت ساتھ کھانا کھا رہے ہیں",
      },
      {
        src: "/projects/food3.webp",
        alt: "Nutritious balanced food including vegetables and protein prepared for resident children",
        altUrdu: "مقیم بچوں کے لیے سبزیاں اور پروٹین سمیت غذائیت بخش متوازن کھانا تیار",
      },
      {
        src: "/projects/food4.webp",
        alt: "Kitchen staff preparing wholesome daily meals for 250+ children at the foundation",
        altUrdu: "فاؤنڈیشن میں 250 سے زائد بچوں کے لیے کچن اسٹاف صحت بخش روزانہ کھانا تیار کر رہا ہے",
      },
      {
        src: "/projects/food5.webp",
        alt: "Dry ration packages distributed to vulnerable families supported by Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن کے تعاون سے محتاج خاندانوں کو خشک راشن کے پیکیج تقسیم کیے جا رہے ہیں",
      },
    ],
    supportHeading: "No Child Should Go to Bed Hungry",
    supportHeadingUrdu: "کوئی بچہ بھوکا نہ سوئے",
    supportText:
      "Three warm meals a day may seem simple, but for a child in care, consistent nourishment means the energy to learn, the strength to grow, and the security of knowing they are cared for. Your support keeps the kitchen running and the children thriving.",
    supportTextUrdu:
      "روزانہ تین گرم کھانے سادہ لگ سکتے ہیں، لیکن ایک محتاج بچے کے لیے مسلسل غذائیت کا مطلب ہے سیکھنے کی توانائی، بڑھنے کی طاقت اور یہ یقین کہ ان کی دیکھ بھال کی جا رہی ہے۔",
    donationLabel: "Feed a Child Today",
    donationLabelUrdu: "آج ایک بچے کو کھانا کھلائیں",
  },

  clothing: {
    id: "clothing",
    num: "04",
    title: "Clothing",
    titleUrdu: "لباس اور ملبوسات",
    subtitle: "Giving every child the confidence, comfort and dignity they deserve.",
    subtitleUrdu: "ہر بچے کو وہ اعتماد، آرام اور وقار دینا جس کا وہ حق رکھتا ہے۔",
    description: [
      "Baqiatullah Foundation ensures every child is fully provided with clothing that suits their daily routine, changing seasons, and special moments. Every student receives complete, well-fitted sets of brand-new school uniforms, along with sturdy shoes, socks, and backpacks; ensuring they attend class with dignity, equality, and confidence alongside their peers.",
      "To keep our children comfortable year-round, we conduct comprehensive seasonal wardrobe updates, supplying heavy jackets, warm sweaters, and thermals before the winter cold sets in, and transitioning to light, breathable cotton garments during the hot summer months.",
      "For holidays, cultural festivals, and celebrations, we prepare special festive attire, taking the time to let the children choose their favorite colors and styles whenever possible. By carefully managing our inventory and prioritizing fresh, high-quality garments, we fulfill more than just a physical need. We give our children the comfort, self-esteem, and pride they deserve.",
    ],
    descriptionUrdu: [
      "بقیۃ اللہ فاؤنڈیشن اس بات کو یقینی بناتی ہے کہ ہر بچے کو وہ لباس مکمل طور پر فراہم کیا جائے جو ان کے روزمرہ کے معمول، بدلتے موسموں اور خاص لمحوں کے لیے موزوں ہو۔",
      "بچوں کو سال بھر آرام دہ رکھنے کے لیے، ہم جامع موسمی الماری کی تجدید کرتے ہیں، سردیوں سے پہلے بھاری جیکٹس، گرم سویٹر اور تھرملز فراہم کرتے ہیں، اور گرم موسم کے دوران ہلکے کپاس کے ملبوسات دیتے ہیں۔",
      "تعطیلات، ثقافتی تہواروں اور تقریبات کے لیے، ہم خصوصی تہواری لباس تیار کرتے ہیں، بچوں کو جب بھی ممکن ہو اپنے پسندیدہ رنگ اور انداز منتخب کرنے کا موقع دیتے ہیں۔",
    ],
    heroImage: {
      src: "/projects/cloth1.webp",
      alt: "Children dressed in fresh school uniforms provided by Baqiatullah Foundation",
      altUrdu: "بقیۃ اللہ فاؤنڈیشن کی طرف سے فراہم کردہ نئی اسکول یونیفارم میں بچے",
    },
    contentImages: [
      {
        src: "/projects/cloth1.webp",
        alt: "Children wearing brand-new school uniforms distributed by Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن کی جانب سے تقسیم کردہ نئی اسکول یونیفارم پہنے بچے",
      },
      {
        src: "/projects/cloth2.webp",
        alt: "Seasonal wardrobe update — children receiving winter jackets and warm clothing",
        altUrdu: "موسمی الماری کی تجدید — بچوں کو سردیوں کی جیکٹس اور گرم کپڑے مل رہے ہیں",
      },
      {
        src: "/projects/cloth3.webp",
        alt: "Children choosing festive Eid attire at Baqiatullah Foundation clothing distribution",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن کی کپڑوں کی تقسیم میں بچے عید کا تہوار لباس منتخب کر رہے ہیں",
      },
      {
        src: "/projects/cloth4.webp",
        alt: "Students with school bags, shoes and uniforms ready for class at the foundation",
        altUrdu: "فاؤنڈیشن میں اسکول بیگ، جوتوں اور یونیفارم کے ساتھ کلاس کے لیے تیار طلباء",
      },
      {
        src: "/projects/cloth5.webp",
        alt: "Complete seasonal clothing sets provided to resident children at Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن میں مقیم بچوں کو موسمی لباس کے مکمل سیٹ فراہم کیے گئے",
      },
    ],
    supportHeading: "Clothe a Child with Dignity",
    supportHeadingUrdu: "ایک بچے کو وقار کے ساتھ لباس پہنائیں",
    supportText:
      "Clothing is more than fabric — it is self-respect. A child in a clean, well-fitted uniform walks into school with their head held high. Your support ensures that every child at Baqiatullah Foundation has what they need to present themselves with confidence in every season and every moment that matters.",
    supportTextUrdu:
      "لباس صرف کپڑا نہیں — یہ عزت نفس ہے۔ صاف، اچھی طرح فٹ یونیفارم میں بچہ سر اٹھا کر اسکول جاتا ہے۔ آپ کا تعاون یہ یقینی بناتا ہے کہ بقیۃ اللہ فاؤنڈیشن کے ہر بچے کے پاس ہر موسم میں اعتماد کے ساتھ پیش ہونے کے لیے جو کچھ چاہیے وہ موجود ہو۔",
    donationLabel: "Support Our Clothing Program",
    donationLabelUrdu: "لباس پروگرام کی حمایت کریں",
  },

  "orphan-care": {
    id: "orphan-care",
    num: "05",
    title: "Orphan Care",
    titleUrdu: "یتیم بچوں کی نگہداشت",
    subtitle: "A loving, family-like home where every essential need is met — completely free of charge.",
    subtitleUrdu: "ایک محبت بھرا، خاندان جیسا گھر جہاں ہر ضروری ضرورت مکمل طور پر مفت پوری کی جاتی ہے۔",
    description: [
      "At the Baqiatullah Foundation, orphan care is built on providing a loving, family-like residential sanctuary where all essential needs are delivered completely free of charge to orphaned and vulnerable children. Resident children receive clean, airy accommodation with hygienic dormitories, daily nutritious meals, seasonal wardrobes, and complete medical coverage, including regular health screenings and pediatric care.",
      "Recognizing that modern education is key to breaking cycles of poverty, the foundation provides formal schooling alongside a dedicated computer and coding lab equipped with workstations and fiber internet. Through tailored instruction in basic coding, digital literacy, graphic design, and practical software skills, the Baqiatullah Orphanage ensures that youth are not only nurtured with dignity and security, but are also empowered with 21st-century digital capabilities for a bright, self-reliant future.",
    ],
    descriptionUrdu: [
      "بقیۃ اللہ فاؤنڈیشن میں، یتیم بچوں کی دیکھ بھال ایک محبت بھرے، خاندان جیسے رہائشی پناہ گاہ فراہم کرنے پر مبنی ہے جہاں تمام ضروری ضروریات یتیم اور کمزور بچوں کو مکمل طور پر مفت فراہم کی جاتی ہیں۔",
      "جدید تعلیم کو غربت کے چکر کو توڑنے کی کلید تسلیم کرتے ہوئے، فاؤنڈیشن باقاعدہ اسکولنگ کے ساتھ ساتھ ورک اسٹیشنز اور فائبر انٹرنیٹ سے لیس ایک وقف کمپیوٹر اور کوڈنگ لیب بھی فراہم کرتی ہے۔",
    ],
    heroImage: {
      src: "/projects/orphan1.webp",
      alt: "Children living in the safe and caring residential sanctuary of Baqiatullah Foundation",
      altUrdu: "بقیۃ اللہ فاؤنڈیشن کی محفوظ اور شفیق رہائشی پناہ گاہ میں رہنے والے بچے",
    },
    contentImages: [
      {
        src: "/projects/orphan1.webp",
        alt: "Orphaned children at home in the loving residential sanctuary of Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن کی محبت بھری رہائشی پناہ گاہ میں گھر جیسے ماحول میں یتیم بچے",
      },
      {
        src: "/projects/orphan2.webp",
        alt: "Children receiving maternal care and daily supervision at Baqiatullah Foundation orphanage",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن یتیم خانے میں بچوں کو مادرانہ نگہداشت اور روزانہ نگرانی ملتی ہے",
      },
      {
        src: "/projects/orphan3.webp",
        alt: "Clean, hygienic dormitories providing safe accommodation for resident children",
        altUrdu: "مقیم بچوں کے لیے محفوظ رہائش فراہم کرنے والے صاف اور صحت مند ہاسٹل",
      },
      {
        src: "/projects/orphan4.webp",
        alt: "Children enjoying recreational and family activities together at the foundation",
        altUrdu: "فاؤنڈیشن میں بچے مل کر تفریحی اور خاندانی سرگرمیوں سے لطف اندوز ہو رہے ہیں",
      },
      {
        src: "/projects/orphan5.webp",
        alt: "Dedicated staff and caregivers supporting the daily wellbeing of children at Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن میں بچوں کی روزانہ فلاح کی حمایت کرنے والے وقف عملہ اور نگہداشت کار",
      },
    ],
    infoCards: [
      {
        heading: "Capacity",
        headingUrdu: "گنجائش",
        value: "250+ Bedded",
        valueUrdu: "250+ بستروں والا",
        detail: "Residential Centre",
        detailUrdu: "رہائشی مرکز",
      },
      {
        heading: "Monthly Support",
        headingUrdu: "ماہانہ تعاون",
        value: "PKR 25,000",
        valueUrdu: "25,000 روپے",
        detail: "per child / month",
        detailUrdu: "فی بچہ / ماہانہ",
      },
      {
        heading: "Services Provided",
        headingUrdu: "فراہم کردہ خدمات",
        value: "All-Inclusive",
        valueUrdu: "ہر چیز شامل",
        detail:
          "Free education, accommodation, digital education, clothing, food, healthcare, trips, ethical learning under maternal caregivers, solar backup, laundry & 24/7 security.",
        detailUrdu:
          "مفت تعلیم، رہائش، ڈیجیٹل تعلیم، لباس، خوراک، صحت، سیر، ماں جیسی نگہداشت، سولر بجلی، لانڈری اور 24 گھنٹے سیکیورٹی۔",
      },
    ],
    supportHeading: "Give a Child a Home They Deserve",
    supportHeadingUrdu: "ایک بچے کو وہ گھر دیں جس کا وہ حق رکھتا ہے",
    supportText:
      "Every child who enters the Baqiatullah Foundation sanctuary is given far more than shelter — they are given family. Your support helps sustain the residential care, education, nutrition, and medical protection that these children depend on every single day.",
    supportTextUrdu:
      "بقیۃ اللہ فاؤنڈیشن کی پناہ گاہ میں داخل ہونے والے ہر بچے کو صرف پناہ سے کہیں زیادہ دیا جاتا ہے — انہیں خاندان دیا جاتا ہے۔ آپ کا تعاون اس رہائشی دیکھ بھال، تعلیم، غذائیت اور طبی تحفظ کو برقرار رکھنے میں مدد کرتا ہے۔",
    donationLabel: "Support Orphan Care",
    donationLabelUrdu: "یتیم بچوں کی دیکھ بھال کی حمایت کریں",
  },

  "disaster-management": {
    id: "disaster-management",
    num: "06",
    title: "Disaster Management",
    titleUrdu: "آفات کا انتظام و ریلیف",
    subtitle: "Rapid, ground-level emergency relief for communities facing the unthinkable.",
    subtitleUrdu: "ناقابل تصور صورتحال کا سامنا کرنے والی کمیونٹیز کے لیے فوری، زمینی ہنگامی امداد۔",
    description: [
      "During the devastating 2025 floods in Pakistan, the Baqiatullah Foundation demonstrated extraordinary leadership in disaster management by launching rapid, ground-level emergency relief campaigns for displaced communities. Mobilizing dedicated field volunteers and relief workers, the organization addressed both immediate hunger and long-term shelter needs.",
      "Affected families received crucial humanitarian aid, including comprehensive dry ration packages, fresh warm meals served daily, emergency tents for temporary shelter, warm clothes, and blankets to withstand difficult weather conditions.",
      "Beyond immediate sustenance, the foundation provided clean drinking water filtration kits and essential medical assistance to prevent waterborne diseases. Through these tireless emergency operations, the Baqiatullah Foundation restored hope, dignity, and life-saving security to hundreds of vulnerable households during one of the country's most critical crises.",
    ],
    descriptionUrdu: [
      "پاکستان میں 2025 کے تباہ کن سیلابوں کے دوران، بقیۃ اللہ فاؤنڈیشن نے بے گھر کمیونٹیز کے لیے فوری، زمینی سطح کی ہنگامی امدادی مہمات شروع کر کے آفت کے انتظام میں غیر معمولی قیادت کا مظاہرہ کیا۔",
      "متاثرہ خاندانوں کو اہم انسانی امداد ملی، جس میں خشک راشن کے پیکیجز، روزانہ تازہ گرم کھانے، عارضی پناہ گاہ کے لیے ہنگامی خیمے، گرم کپڑے اور کمبل شامل تھے۔",
      "فوری ضروریات کے علاوہ، فاؤنڈیشن نے صاف پینے کے پانی کی فلٹریشن کٹس اور پانی سے پیدا ہونے والی بیماریوں کو روکنے کے لیے ضروری طبی امداد فراہم کی۔",
    ],
    heroImage: {
      src: "/projects/dis1.webp",
      alt: "Baqiatullah Foundation relief workers distributing emergency aid to flood-affected families",
      altUrdu: "بقیۃ اللہ فاؤنڈیشن کے ریلیف کارکنان سیلاب سے متاثرہ خاندانوں کو ہنگامی امداد تقسیم کر رہے ہیں",
    },
    contentImages: [
      {
        src: "/projects/dis1.webp",
        alt: "Baqiatullah Foundation field teams responding to the 2025 Pakistan flood emergency",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن کی فیلڈ ٹیمیں 2025 کے پاکستان سیلاب ہنگامی صورتحال کا جواب دے رہی ہیں",
      },
      {
        src: "/projects/dis2.webp",
        alt: "Dry ration packages being distributed to displaced families by Baqiatullah Foundation volunteers",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن کے رضاکاروں کی جانب سے بے گھر خاندانوں کو خشک راشن کے پیکیج تقسیم کیے جا رہے ہیں",
      },
      {
        src: "/projects/dis3.webp",
        alt: "Emergency tents and shelter materials provided to flood-affected communities in Pakistan",
        altUrdu: "پاکستان میں سیلاب سے متاثرہ کمیونٹیز کو ہنگامی خیمے اور پناہ گاہ کا سامان فراہم کیا گیا",
      },
      {
        src: "/projects/dis4.webp",
        alt: "Clean drinking water filtration kits distributed during the flood relief campaign",
        altUrdu: "سیلاب ریلیف مہم کے دوران صاف پینے کے پانی کی فلٹریشن کٹس تقسیم کی گئیں",
      },
      {
        src: "/projects/dis5.webp",
        alt: "Medical assistance and free medicines provided to waterborne disease-affected families",
        altUrdu: "پانی سے پیدا ہونے والی بیماریوں سے متاثرہ خاندانوں کو طبی امداد اور مفت ادویات فراہم کی گئیں",
      },
    ],
    supportHeading: "Support Disaster Relief",
    supportHeadingUrdu: "آفت زدگان کی مدد کریں",
    supportText:
      "Your support can help provide essential relief to communities facing difficult circumstances. When disaster strikes, speed matters — and every contribution helps us reach more families with the food, clean water, shelter and medical care they desperately need.",
    supportTextUrdu:
      "آپ کا تعاون مشکل حالات کا سامنا کرنے والی کمیونٹیز کو ضروری امداد فراہم کرنے میں مدد کر سکتا ہے۔ جب آفت آتی ہے، رفتار اہمیت رکھتی ہے — اور ہر حصہ ہمیں زیادہ خاندانوں تک پہنچنے میں مدد کرتا ہے۔",
    donationLabel: "Donate to Disaster Relief",
    donationLabelUrdu: "آفت ریلیف فنڈ میں عطیہ دیں",
  },

  healthcare: {
    id: "healthcare",
    num: "07",
    title: "Healthcare",
    titleUrdu: "طبی نگہداشت اور علاج",
    subtitle: "Bringing essential healthcare to those who need it most — completely free of charge.",
    subtitleUrdu: "ضرورت مند افراد کے لیے ضروری صحت کی سہولیات — مکمل طور پر مفت۔",
    description: [
      "Through its free community medical camps, the Baqiatullah Foundation brings essential healthcare directly to underprivileged families who need it most. These camps offer everything from general doctor consultations and eye screenings to free prescription medications and eyewear.",
      "Baqiatullah Foundation also keeps a close eye on the health of children at the Baqiatullah Orphanage, providing regular pediatric checkups, dental care, dental procedures and immediate medical treatment whenever a child falls ill. By covering every medical expense completely free of charge, Baqiatullah Foundation ensures that lack of money never prevents a child or family from getting proper healthcare.",
    ],
    descriptionUrdu: [
      "اپنے مفت کمیونٹی طبی کیمپوں کے ذریعے، بقیۃ اللہ فاؤنڈیشن ضروری صحت سہولیات ان پسماندہ خاندانوں تک براہ راست پہنچاتی ہے جنہیں ان کی سب سے زیادہ ضرورت ہے۔",
      "بقیۃ اللہ فاؤنڈیشن بقیۃ اللہ یتیم خانے میں بچوں کی صحت پر بھی کڑی نظر رکھتی ہے، باقاعدہ پیڈیاٹرک چیک اپ، دانتوں کی دیکھ بھال اور جب بھی کوئی بچہ بیمار پڑے تو فوری طبی علاج فراہم کرتی ہے۔",
    ],
    heroImage: {
      src: "/projects/health1.webp",
      alt: "Free medical camp organized by Baqiatullah Foundation for underprivileged families",
      altUrdu: "بقیۃ اللہ فاؤنڈیشن کی طرف سے پسماندہ خاندانوں کے لیے منظم مفت طبی کیمپ",
    },
    contentImages: [
      {
        src: "/projects/health1.webp",
        alt: "Free community medical camp providing doctor consultations to underprivileged families",
        altUrdu: "پسماندہ خاندانوں کو ڈاکٹر مشاورت فراہم کرتا مفت کمیونٹی طبی کیمپ",
      },
      {
        src: "/projects/health2.webp",
        alt: "Eye screenings and free prescription eyewear distributed at Baqiatullah Foundation health camp",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن کے ہیلتھ کیمپ میں آنکھوں کی جانچ اور مفت نسخے کی عینکیں تقسیم",
      },
      {
        src: "/projects/health3.webp",
        alt: "Pediatric checkups and dental care provided to resident children at Baqiatullah Foundation",
        altUrdu: "بقیۃ اللہ فاؤنڈیشن میں مقیم بچوں کو پیڈیاٹرک چیک اپ اور دانتوں کی دیکھ بھال فراہم",
      },
      {
        src: "/projects/health4.webp",
        alt: "Free medicines and prescriptions dispensed to patients at the foundation's medical camp",
        altUrdu: "فاؤنڈیشن کے طبی کیمپ میں مریضوں کو مفت ادویات اور نسخے دیے جا رہے ہیں",
      },
      {
        src: "/projects/health5.webp",
        alt: "Medical volunteers conducting health screenings for children at Baqiatullah Foundation orphanage",
        altUrdu: "طبی رضاکار بقیۃ اللہ فاؤنڈیشن یتیم خانے میں بچوں کی صحت کی جانچ کر رہے ہیں",
      },
    ],
    supportHeading: "Support Healthcare for Those Who Cannot Afford It",
    supportHeadingUrdu: "ان لوگوں کی صحت کی حمایت کریں جو اسے برداشت نہیں کر سکتے",
    supportText:
      "No child should suffer because a family cannot pay a doctor's fee. No family should go without medicine because the cost is out of reach. Your support helps us run the clinics, medical camps, and pediatric care that keep children healthy and families hopeful.",
    supportTextUrdu:
      "کوئی بچہ اس لیے نہیں تڑپنا چاہیے کیونکہ خاندان ڈاکٹر کی فیس نہیں دے سکتا۔ آپ کا تعاون ان کلینکس، طبی کیمپوں اور پیڈیاٹرک دیکھ بھال کو چلانے میں مدد کرتا ہے جو بچوں کو صحت مند اور خاندانوں کو پر امید رکھتے ہیں۔",
    donationLabel: "Support Healthcare",
    donationLabelUrdu: "صحت کی حمایت کریں",
  },
};

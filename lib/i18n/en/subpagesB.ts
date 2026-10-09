import {
  DonatePageData,
  ContactPageData,
  GalleryPageData,
  BlogPageData,
} from "../types/pages";

export const enDonatePage: DonatePageData = {
  payment: {
    title: "Verified Official",
    highlight: "Donation Channels",
    subtitle: "100% of your contributions go directly toward food, lodging, and accredited schooling for our children.",
    bankTitle: "Direct Bank Wire / Transfer",
    bankSubtitle: "United Bank Limited (UBL) — Pakistan & International",
    accountNameLabel: "Account Name",
    accountName: "BAQIATULLAH FOUNDATION",
    accountNumberLabel: "Account Number (Local)",
    accountNumber: "2830377202049",
    ibanLabel: "Official IBAN (International & RAAST)",
    iban: "PK82UNIL0109000377202049",
    bankNameLabel: "Bank Name",
    bankName: "United Bank Limited (UBL)",
    receiptNotice: "Please share your bank payment transfer screenshot with our accounts desk at baqiatullahpak@gmail.com or WhatsApp +92 314 6500512 for an official tax acknowledgement receipt.",
    copyButtonText: "Copy",
    copiedButtonText: "Copied!",
  },
  transparency: {
    title: "Where Every Single Rupee",
    highlight: "Is Invested",
    subtitle: "Strict audited breakdown ensuring maximum direct impact on children's nourishment, education, and shelter.",
    stats: [
      { label: "Direct Child Welfare", value: "85%" },
      { label: "Facilities & Utilities", value: "10%" },
      { label: "Administration & Audit", value: "5%" },
    ],
    breakdown: [
      { category: "Nutritious Food & Milk", percent: 35, desc: "Fresh wholesome meals prepared three times daily." },
      { category: "Schooling & Computers", percent: 30, desc: "Private school fees, textbooks, uniforms, and computer lab." },
      { category: "Sanctuary Living & Utilities", percent: 20, desc: "Safe dormitory accommodation, bedding, and solar electricity." },
      { category: "Pediatric Healthcare", percent: 15, desc: "Doctor visits, routine vaccinations, and emergency medications." },
    ],
  },
};

export const enContactPage: ContactPageData = {
  form: {
    title: "Send an Inquiry or Message",
    subtitle: "Fill out the form below and our administration team will respond within 24 business hours.",
    nameLabel: "Your Full Name *",
    namePlaceholder: "e.g. Muhammad Ali",
    emailLabel: "Email Address *",
    emailPlaceholder: "you@domain.com",
    phoneLabel: "Phone / WhatsApp Number",
    phonePlaceholder: "+92 300 1234567",
    subjectLabel: "Subject",
    subjects: [
      "Child Sponsorship Inquiry",
      "Volunteer Registration",
      "Donation & Wire Verification",
      "Schedule Facility Visit",
      "General Feedback",
    ],
    messageLabel: "Message or Proposal *",
    messagePlaceholder: "How can we assist you or how would you like to contribute?",
    submitBtn: "Submit Message",
    successTitle: "Message Received",
    successDesc: "Thank you. Your inquiry has been forwarded to the Baqiatullah administrative team. We will contact you shortly.",
    resetBtn: "Send another message",
  },
  info: {
    title: "Visit or Reach Out to Us",
    subtitle: "We welcome prospective sponsors, volunteers, and visitors at our Lahore sanctuary.",
    addressLabel: "Physical Address",
    address: "House No.123/A Block, Nawab Town, Lahore, Pakistan",
    phoneLabel: "Helpline & WhatsApp",
    phone: "0300-6500512 / +92 314 6500512",
    emailLabel: "Official Email",
    email: "baqiatullahpak@gmail.com",
    hoursLabel: "Visiting Hours",
    hours: "Monday - Saturday: 9:00 AM - 5:00 PM (Appointments Preferred)",
  },
};

export const enGalleryPage: GalleryPageData = {
  title: "Moments of Growth,",
  highlight: "Learning & Joy",
  subtitle: "Unfiltered photo moments documenting our children's daily educational pursuits, meals, and relief drives.",
  categories: {
    all: "All Photos",
    classes: "Learning & Classes",
    care: "Daily Care & Meals",
    activities: "Activities & Hope",
    relief: "Emergency Relief",
  },
  loadMoreBtn: "Load More Photos",
  remainingText: "remaining",
};

export const enBlogPage: BlogPageData = {
  title: "News and Humanitarian",
  highlight: "Updates",
  subtitle: "Transparent operational reporting on our ground operations, emergency flood relief drives, and milestones achieved.",
  readFull: "Read Full Report",
  posts: [
    {
      id: "1",
      title: "Flood Relief Campaign Jhang — Emergency Aid for 300 Families",
      excerpt: "Baqiatullah Foundation delivered urgent rations, potable water, and emergency medical kits to 300 flood-affected families across 15 remote villages in Jhang district.",
      category: "Emergency Flood Relief",
      date: "September 20, 2025",
      author: "Abbas Raza",
      image: "/gallery/opt/88.webp",
      content: [
        "Baqiatullah Foundation Pakistan successfully concluded a high-priority emergency flood relief mission in the remote inundated territories of Jhang district.",
        "The operation focused on addressing existential survival needs: supplying potable water, nutritional food staples, and sanitary protection to families whose homes were flooded.",
        "Our field team navigated difficult waterlogged access routes to ensure aid reached the most vulnerable widows and orphaned children.",
      ],
      bulletPoints: [
        "Emergency food rations containing flour, pulses, cooking oil, and dry milk",
        "Potable drinking water canisters and chlorine water purification tablets",
        "First-aid trauma dressings, anti-diarrheal medicines, and fever reduction packs",
        "Heavy thermal blankets, dry clothing bundles, and waterproof tarpaulins",
      ],
      impactPoints: [
        "300 families received comprehensive multi-week relief packs",
        "Over 1,200 individuals directly supported across 15 cut-off villages",
        "50 dedicated volunteers and local liaisons mobilized",
      ],
    },
  ],
};

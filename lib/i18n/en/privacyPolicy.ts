import { PrivacyPolicyPageData } from "../types/pages";

export const enPrivacyPolicyPage: PrivacyPolicyPageData = {
  badge: "Trust, Safeguarding & Legal Commitment",
  title: "Privacy Policy &",
  highlight: "Safeguarding Ethics",
  subtitle:
    "At Baqiatullah Foundation Pakistan, we regard donor trust, children's safety and dignity, and financial transparency as sacred responsibilities.",
  lastUpdated: "Last Updated: October 2026",
  principles: [
    {
      icon: "ShieldCheck",
      title: "Donor Confidentiality",
      desc: "We never sell, rent, or trade your personal information, phone numbers, or donation history with commercial entities or advertisers.",
    },
    {
      icon: "HeartHandshake",
      title: "Child Protection First",
      desc: "Every child's photograph and identity are strictly safeguarded according to child protection protocols and lawful guardian consent.",
    },
    {
      icon: "Lock",
      title: "Secure Financial Transactions",
      desc: "All contributions are channeled through verified Pakistani banking networks and secure telecom wallets with complete fiscal accountability.",
    },
    {
      icon: "Eye",
      title: "Donor Rights & Transparency",
      desc: "You retain the right to review, update, or request removal of your contact information and receipt records at any time.",
    },
  ],
  sections: [
    {
      id: "information-collection",
      title: "1. Information We Collect",
      content: [
        "Baqiatullah Foundation Pakistan collects minimal necessary personal details required to administer donations, verify volunteer applicants, and communicate foundation progress with supporters.",
      ],
      bullets: [
        "Donor Identity & Contact Info: Your name, email address, telephone/WhatsApp number, and postal city when you contribute, pledge child sponsorship, or contact our team.",
        "Transaction Verification Details: Bank transfer receipts, transaction reference IDs, and deposited amounts needed for generating official acknowledgement tax slips.",
        "Volunteer & Visitor Information: Background information and CNIC details provided by individuals applying to mentor, teach, or visit children at our Lahore centre.",
        "Technical & Browsing Data: Non-identifying statistical information such as browser type, device resolution, and language preference to ensure optimal site performance.",
      ],
    },
    {
      id: "child-safeguarding",
      title: "2. Child Safeguarding & Media Ethics Policy",
      content: [
        "As an accredited home caring for orphaned and vulnerable boys and girls, upholding the emotional dignity, physical safety, and future privacy of every child is non-negotiable.",
        "Our digital media policy strictly follows ethical standards:",
      ],
      bullets: [
        "Children's sensitive case histories, legal surnames, and private residential room details are never published online.",
        "Photographs and video documentation highlight educational growth, extracurricular joy, and creative skills rather than sorrow or indignity.",
        "Visitors, corporate donors, and guest volunteers are strictly prohibited from photographing children without prior written clearance from the administration.",
      ],
    },
    {
      id: "how-we-use-info",
      title: "3. How We Use Collected Information",
      content: [
        "All data provided to Baqiatullah Foundation is used strictly for legitimate charitable administration and donor service purposes:",
      ],
      bullets: [
        "Generating and issuing verified donation receipts and annual tax acknowledgment certificates.",
        "Sending transparent field reports, project expenditure updates, and child education milestones to sponsoring donors.",
        "Responding promptly to phone, WhatsApp, or contact form inquiries regarding relief drives and orphan care.",
        "Fulfilling regulatory, statutory, and non-profit compliance obligations under the Punjab Charity Commission and Pakistani law.",
      ],
    },
    {
      id: "payment-security",
      title: "4. Payment Security & Financial Data Handling",
      content: [
        "We prioritize the highest security standards for all charitable transactions. Baqiatullah Foundation does not collect, log, or store credit card CVV numbers, debit PINs, or online banking passwords on our servers.",
        "Direct contributions are executed directly between donors and verified banking channels, including Bank Al-Habib Limited (Account: 0343 0981 000823 01 8 / IBAN: PK71BAHL0343098100082301).",
      ],
    },
    {
      id: "third-party-sharing",
      title: "5. Third-Party Sharing & Anti-Commercial Pledge",
      content: [
        "We uphold an ironclad pledge: Baqiatullah Foundation has never rented, sold, or shared donor lists or supporter contact details with commercial marketing firms, and will never do so.",
        "Information is shared only under specific lawful circumstances: with verified financial institutions to confirm transaction integrity, or when explicitly mandated by Pakistani statutory bodies and courts.",
      ],
    },
    {
      id: "cookies-analytics",
      title: "6. Cookies & Browsing Experience",
      content: [
        "Our website uses essential lightweight cookies strictly to remember your language preference (English/Urdu) and maintain fast page rendering.",
        "We do not employ cross-site tracking pixels, third-party advertising cookies, or behavioral advertising tools.",
      ],
    },
    {
      id: "donor-rights",
      title: "7. Your Rights & Data Retention",
      content: [
        "Donation records are retained in compliance with non-profit audit regulations and tax verification periods.",
        "As a supporter, you have full authority to request a copy of the data on file, correct any contact details, or unsubscribe from periodic WhatsApp and email project digests at any time.",
      ],
    },
  ],
  contactBox: {
    title: "Privacy or Safeguarding Questions?",
    desc: "If you have any questions regarding our privacy practices, wish to review your donor records, or want to discuss our child safeguarding guidelines, please reach out to us directly:",
    emailLabel: "Official Email",
    email: "baqiatullahpak@gmail.com",
    phoneLabel: "Helpline & WhatsApp",
    phone: "+92 314 6500512 / 0300-6500512",
    addressLabel: "Head Office & Residence",
    address: "House No.123/A Block, Nawab Town, Lahore, Pakistan",
    btnText: "Get in Touch with Administration",
  },
};

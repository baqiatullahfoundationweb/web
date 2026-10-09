export interface AboutPageData {
  story: {
    title: string;
    highlight: string;
    subtitle: string;
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
  };
  missionVision: {
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
  };
  values: {
    title: string;
    highlight: string;
    subtitle: string;
    items: Array<{ title: string; desc: string }>;
  };
  team: {
    title: string;
    highlight: string;
    subtitle: string;
    members: Array<{ name: string; role: string; desc: string; image: string }>;
  };
}

export interface ProjectsPageData {
  ongoing: {
    title: string;
    highlight: string;
    subtitle: string;
    fundedLabel: string;
    supportBtn: string;
    items: Array<{ title: string; desc: string; image: string; progress: number; status: string }>;
  };
  completed: {
    title: string;
    highlight: string;
    subtitle: string;
    items: Array<{ title: string; desc: string; image: string; impact: string }>;
  };
}

export interface DonatePageData {
  payment: {
    title: string;
    highlight: string;
    subtitle: string;
    bankTitle: string;
    bankSubtitle: string;
    accountNameLabel: string;
    accountName: string;
    accountNumberLabel: string;
    accountNumber: string;
    ibanLabel?: string;
    iban?: string;
    bankNameLabel: string;
    bankName: string;
    branchLabel?: string;
    branch?: string;
    swiftLabel?: string;
    swift?: string;
    receiptNotice: string;
    copyButtonText: string;
    copiedButtonText: string;
  };
  transparency: {
    title: string;
    highlight: string;
    subtitle: string;
    stats: Array<{ label: string; value: string }>;
    breakdown: Array<{ category: string; percent: number; desc: string }>;
  };
}

export interface ContactPageData {
  form: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    subjectLabel: string;
    subjects: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    resetBtn: string;
  };
  info: {
    title: string;
    subtitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    hoursLabel: string;
    hours: string;
  };
}

export interface GalleryPageData {
  title: string;
  highlight: string;
  subtitle: string;
  categories: {
    all: string;
    classes: string;
    care: string;
    activities: string;
    relief: string;
  };
  loadMoreBtn: string;
  remainingText: string;
}

export interface BlogPageData {
  title: string;
  highlight: string;
  subtitle: string;
  readFull: string;
  posts: Array<{
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    image: string;
    content: string[];
    bulletPoints: string[];
    impactPoints: string[];
  }>;
}

export interface PrivacyPolicyPageData {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  lastUpdated: string;
  principles: Array<{
    icon: string;
    title: string;
    desc: string;
  }>;
  sections: Array<{
    id: string;
    title: string;
    content: string[];
    bullets?: string[];
  }>;
  contactBox: {
    title: string;
    desc: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phone: string;
    addressLabel: string;
    address: string;
    btnText: string;
  };
}

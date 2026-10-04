import {
  AboutPageData,
  ProjectsPageData,
  DonatePageData,
  ContactPageData,
  GalleryPageData,
  BlogPageData,
} from "./types/pages";

export * from "./types/pages";

export type Locale = "eng" | "ur";

export interface NavLink {
  href: string;
  label: string;
}

export interface Dictionary {
  locale: Locale;
  dir: "ltr" | "rtl";
  otherLocale: Locale;
  otherLocaleLabel: string;
  brandUrdu: string;
  brandEn: string;
  nav: {
    links: NavLink[];
    donateNow: string;
    helpline: string;
  };
  hero: {
    slides: Array<{
      image: string;
      badge: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaPrimaryHref: string;
      ctaSecondary: string;
      ctaSecondaryHref: string;
    }>;
  };
  impact: {
    title: string;
    highlight: string;
    subtitle: string;
    metrics: Array<{
      value: string;
      label: string;
      description: string;
      image: string;
    }>;
  };
  about: {
    title: string;
    description: string;
    establishedYear: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    storyBtn: string;
    visitBtn: string;
  };
  causes: {
    title: string;
    highlight: string;
    subtitle: string;
    raisedLabel: string;
    goalLabel: string;
    fundedLabel: string;
    donateBtn: string;
    detailsBtn: string;
    items: Array<{
      title: string;
      category: string;
      image: string;
      raised: string;
      goal: string;
      percent: number;
      description: string;
    }>;
  };
  volunteers: {
    title: string;
    highlight: string;
    subtitle: string;
    badge: string;
    calloutTitle: string;
    calloutDesc: string;
    calloutBtn: string;
    items: Array<{
      name: string;
      role: string;
      image: string;
      quote: string;
    }>;
  };
  events: {
    title: string;
    highlight: string;
    subtitle: string;
    attendBtn: string;
    items: Array<{
      title: string;
      date: string;
      time: string;
      location: string;
      image: string;
      description: string;
    }>;
  };
  getInvolved: {
    title: string;
    highlight: string;
    subtitle: string;
    pathways: Array<{
      title: string;
      description: string;
      image: string;
      actionText: string;
      href: string;
      badge: string;
    }>;
  };
  spotlight: {
    title: string;
    description: string;
    stat1Val: string;
    stat1Lbl: string;
    stat2Val: string;
    stat2Lbl: string;
    feat1: string;
    feat2: string;
    exploreBtn: string;
    supportBtn: string;
  };
  cta: {
    title: string;
    description: string;
    donateBtn: string;
    contactBtn: string;
  };
  footer: {
    desc: string;
    navTitle: string;
    contactTitle: string;
    address: string;
    phone: string;
    email: string;
    copyright: string;
    motto: string;
  };
  // Subpages data
  aboutPage: AboutPageData;
  projectsPage: ProjectsPageData;
  donatePage: DonatePageData;
  contactPage: ContactPageData;
  galleryPage: GalleryPageData;
  blogPage: BlogPageData;
}

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
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    metrics: Array<{
      value: string;
      label: string;
      description: string;
      image: string;
      badge: string;
    }>;
  };
  about: {
    eyebrow: string;
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
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    items: Array<{
      title: string;
      category: string;
      image: string;
      raised: string;
      goal: string;
      percent: number;
      description: string;
    }>;
    donateBtn: string;
    detailsBtn: string;
  };
  volunteers: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    badge: string;
    calloutTitle: string;
    calloutDesc: string;
    calloutBtn: string;
  };
  events: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    attendBtn: string;
  };
  getInvolved: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
  };
  spotlight: {
    badge: string;
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
    badge: string;
    title: string;
    description: string;
    donateBtn: string;
    contactBtn: string;
  };
  footer: {
    desc: string;
    navTitle: string;
    contactTitle: string;
    copyright: string;
  };
}

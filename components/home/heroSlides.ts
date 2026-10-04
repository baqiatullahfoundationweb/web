export interface HeroSlide {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
}

export const DEFAULT_SLIDES: HeroSlide[] = [
  {
    image: "/gallery/49.jpg",
    badge: "Accredited Non-Profit • Since 2016",
    title: "Empowering Pakistan's Orphans with Dignity, Love & Education",
    subtitle: "Providing full residential care, wholesome nutrition, and accredited schooling for over 250 children in Lahore, Pakistan.",
    ctaPrimary: "Donate to Support",
    ctaPrimaryHref: "/donate",
    ctaSecondary: "Explore Our Story",
    ctaSecondaryHref: "/about",
  },
  {
    image: "/gallery/20.jpg",
    badge: "Education & Digital Literacy Program",
    title: "Breaking Generational Poverty Through Modern Knowledge",
    subtitle: "From computer literacy labs to college scholarships, our children build real skills to graduate as independent, confident leaders.",
    ctaPrimary: "Sponsor a Child",
    ctaPrimaryHref: "/donate",
    ctaSecondary: "View All Projects",
    ctaSecondaryHref: "/projects",
  },
  {
    image: "/gallery/75.jpg",
    badge: "Emergency Relief & Community Support",
    title: "Humanitarian Hope Extended to Flood-Affected Communities",
    subtitle: "Reaching beyond our sanctuary to provide clean water, food rations, and medical kits to 300+ vulnerable families in remote crisis zones.",
    ctaPrimary: "Emergency Relief Fund",
    ctaPrimaryHref: "/donate",
    ctaSecondary: "Read Field Reports",
    ctaSecondaryHref: "/blog/1",
  },
];

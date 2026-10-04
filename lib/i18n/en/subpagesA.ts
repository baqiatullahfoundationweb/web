import { AboutPageData, ProjectsPageData } from "../types/pages";

export const enAboutPage: AboutPageData = {
  story: {
    title: "Founded on Compassion,",
    highlight: "Driven by Hope",
    subtitle: "Transforming the landscape of orphan care in Pakistan since 2016 through unwavering family commitment.",
    badge: "Over 8 years of nurturing orphan care in Lahore, Pakistan",
    heading: "From 12 Children to a Thriving Family Community of Over 250",
    p1: "Baqiatullah Foundation Pakistan was established in 2016 by a dedicated group of humanitarians who recognized a profound need: to provide a safe, family-like sanctuary for orphaned and vulnerable children who have lost parental care.",
    p2: "What began as an intimate initiative with 12 children in Lahore has blossomed into an accredited charitable foundation supporting more than 250 young souls. We do not operate as an impersonal institution—every child receives maternal care, medical protection, and individualized schooling.",
    p3: "Today, our graduates are enrolled in accredited universities, excelling in technical vocations, and stepping forward as confident, compassionate leaders of Pakistan.",
  },
  missionVision: {
    missionTitle: "Our Mission",
    missionDesc: "To provide a nurturing, family-like sanctuary where orphaned and vulnerable children receive unconditional affection, comprehensive medical protection, quality education, and moral guidance to step forward as empowered, virtuous citizens.",
    visionTitle: "Our Vision",
    visionDesc: "A world where no child is deprived of childhood, dignity, or education due to tragedy. We envision communities across Pakistan where marginalized youth break cycles of generational poverty through knowledge, character, and opportunity.",
  },
  values: {
    title: "The Pillars That Define",
    highlight: "Our Care Philosophy",
    subtitle: "Every policy, meal, and lesson is guided by four core values of empathy, integrity, transparency, and lifelong commitment.",
    items: [
      { title: "Maternal Affection", desc: "Providing family warmth and emotional healing to replace the loneliness of orphanhood." },
      { title: "Academic Excellence", desc: "Empowering minds with English-medium schooling, digital skills, and university scholarships." },
      { title: "Uncompromising Integrity", desc: "Maintaining 100% financial transparency with every rupee accounted for and audited." },
      { title: "Lifelong Empowerment", desc: "Guiding children into self-reliant adulthood, careers, and honorable social contribution." },
    ],
  },
  team: {
    title: "Dedicated Humanitarians Behind",
    highlight: "Baqiatullah Foundation",
    subtitle: "Meet the directors, trustees, and operational stewards directing our educational mission.",
    members: [
      { name: "Muhammad Abbas Raza", role: "Founder & Executive Director", desc: "Leading grassroots child welfare initiatives across Pakistan with over 15 years of humanitarian service.", image: "/gallery/20.jpg" },
      { name: "Dr. Samina Kausar", role: "Director of Pediatric Care", desc: "Supervising maternal health screenings, nutritional diets, and child emotional development programs.", image: "/gallery/30.jpg" },
      { name: "Syed Ali Haider", role: "Head of Academic Programs", desc: "Overseeing primary education, STEM computer labs, and higher secondary tuition pipelines.", image: "/gallery/35.jpg" },
    ],
  },
};

export const enProjectsPage: ProjectsPageData = {
  ongoing: {
    title: "Current Programs Transforming",
    highlight: "Young Lives",
    subtitle: "Transparent progress tracking on key welfare and educational programs active today.",
    fundedLabel: "Funded / Completed",
    supportBtn: "Support This Program",
    items: [
      { title: "Education Excellence Program", desc: "Providing customized tutoring, English proficiency, and school fees to ensure academic potential.", image: "/gallery/2.jpg", progress: 75, status: "Active Phase II" },
      { title: "Nutrition & Health Initiative", desc: "Supplying balanced, high-protein daily meals alongside pediatric examinations and hygiene kits.", image: "/gallery/16.jpg", progress: 90, status: "Active Ongoing" },
      { title: "Housing & Dorm Expansion", desc: "Constructing modern living quarters and study halls to welcome more vulnerable children.", image: "/gallery/49.jpg", progress: 45, status: "Construction" },
    ],
  },
  completed: {
    title: "Completed Welfare Milestones &",
    highlight: "Impact Deliveries",
    subtitle: "Major humanitarian initiatives executed with complete community success.",
    items: [
      { title: "Jhang Emergency Flood Relief", desc: "Supplied 300 vulnerable families with multi-week food rations, water filtration kits, and medical aid.", image: "/gallery/88.jpeg", impact: "300 Families Supported" },
      { title: "Modern IT Computer Lab", desc: "Installed 35 desktop workstations with high-speed internet and coding mentorship curriculum.", image: "/gallery/49.jpg", impact: "100% Student Digital Literacy" },
      { title: "Healthcare Screening Drive", desc: "Completed comprehensive dental and pediatric assessments for all 250+ resident children.", image: "/gallery/10.jpg", impact: "250+ Children Screened" },
    ],
  },
};

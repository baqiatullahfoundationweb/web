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
      { name: "Zain Ali", role: "Founder & Director", desc: "Leading the Foundation’s work to support orphaned and vulnerable children.", image: "/team/image.png" },
      { name: "Aleena Maryam", role: "Chairperson", desc: "Providing leadership and guidance as Chairperson of the Foundation.", image: "/team/chairperson.jpg" },
      { name: "Syed Sajjad Hussain", role: "Education Coordinator", desc: "Coordinating the Foundation’s education programs.", image: "/team/educationist.jpg" },
      { name: "Sohail Raza", role: "Finance Secretary", desc: "Managing the Foundation’s financial administration.", image: "/team/finance.jpg" },
    ],
  },
};

export const enProjectsPage: ProjectsPageData = {
  ongoing: {
    title: "Flagship Programs Transforming",
    highlight: "Young Lives",
    subtitle: "Active welfare initiatives delivering daily education, nourishment, shelter, and medical care.",
    fundedLabel: "Funded / Completed",
    supportBtn: "Support This Program",
    items: [
      { title: "1. Education", desc: "Private English-medium schooling, syllabus books, uniforms, and academic tutoring for 250+ orphans.", image: "/projects/education-hd.webp", progress: 85, status: "Active Ongoing" },
      { title: "2. Digital Education", desc: "Equipped modern IT laboratory with 35+ workstations providing coding, graphic design, and typing.", image: "/gallery/opt/36.webp", progress: 90, status: "Active Phase II" },
      { title: "3. Orphan Support", desc: "100% Zakat-eligible child sponsorship providing monthly living allowances, stationery, and mentorship.", image: "/gallery/opt/89.webp", progress: 78, status: "Active Ongoing" },
      { title: "4. Food and Ration", desc: "3 daily wholesome protein-rich hot meals, fresh milk schedule, and emergency food relief packages.", image: "/gallery/opt/16.webp", progress: 95, status: "Active Daily" },
      { title: "5. Clothing", desc: "Seasonal wardrobes, tailored school uniforms, winter coats, festive Eid apparel, and sturdy shoes.", image: "/gallery/opt/82.webp", progress: 80, status: "Active Seasonal" },
      { title: "6. Orphan Care", desc: "24/7 loving residential sanctuary in Lahore with maternal care, hygienic dorms, and solar power backup.", image: "/gallery/opt/89.webp", progress: 92, status: "Active 24/7" },
      { title: "7. Disaster Management", desc: "Rapid disaster relief supplying dry rations, water filtration kits, and medical aid to crisis zones.", image: "/projects/disaster-hd.webp", progress: 70, status: "Active Phase I" },
      { title: "8. Healthcare", desc: "Quarterly pediatric checkups, dental screening camps, 24/7 emergency medical coverage, and medicines.", image: "/projects/health-hd.webp", progress: 88, status: "Active Ongoing" },
    ],
  },
  completed: {
    title: "Completed Welfare Milestones &",
    highlight: "Impact Deliveries",
    subtitle: "Major humanitarian initiatives executed with complete community success.",
    items: [
      { title: "Jhang Emergency Flood Relief", desc: "Supplied 300 vulnerable families with multi-week food rations, water filtration kits, and medical aid.", image: "/projects/disaster-hd.webp", impact: "300 Families Supported" },
      { title: "Modern IT Computer Lab", desc: "Installed 35 desktop workstations with high-speed internet and coding mentorship curriculum.", image: "/gallery/opt/36.webp", impact: "100% Student Digital Literacy" },
      { title: "Healthcare Screening Drive", desc: "Completed comprehensive dental and pediatric assessments for all 250+ resident children.", image: "/gallery/opt/10.webp", impact: "250+ Children Screened" },
    ],
  },
};

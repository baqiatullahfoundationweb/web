export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  bulletPoints: string[];
  impactPoints: string[];
  image: string;
  category: string;
  date: string;
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Flood Relief Campaign Jhang — Emergency Aid for 300 Families",
    excerpt: "Baqiatullah Foundation delivered urgent rations, potable water, and emergency medical kits to 300 flood-affected families across 15 remote villages in Jhang district.",
    image: "/gallery/88.jpeg",
    category: "Emergency Flood Relief",
    date: "September 20, 2025",
    author: "Abbas Raza",
    content: [
      "Baqiatullah Foundation Pakistan successfully concluded a high-priority emergency flood relief mission in the remote inundated territories of Jhang district. In response to devastating monsoon overflow that swept through impoverished rural communities, our emergency task force mobilized on the ground.",
      "The operation focused on addressing immediate existential survival needs: supplying potable water, nutritional food staples, and sanitary protection to families whose mud-brick homes and livelihoods were obliterated by floodwaters.",
      "Our field team navigated difficult waterlogged access routes to ensure that aid was distributed directly into the hands of the most vulnerable widows, orphaned children, and disabled elders.",
    ],
    bulletPoints: [
      "Emergency food rations containing flour, pulses, cooking oil, and dry milk",
      "Potable drinking water canisters and chlorine water purification tablets",
      "First-aid trauma dressings, anti-diarrheal medicines, and fever reduction packs",
      "Heavy thermal blankets, dry clothing bundles, and waterproof tarpaulin sheets",
      "Essential hygiene kits containing antibacterial soap, toothpaste, and sanitary items",
    ],
    impactPoints: [
      "300 families received comprehensive multi-week relief packs",
      "Over 1,200 individual men, women, and children directly supported",
      "15 remote cut-off villages reached across the Jhang district basin",
      "50 dedicated foundation volunteers and local liaisons mobilized",
    ],
  },
];

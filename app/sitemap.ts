import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogData";

/**
 * =========================================================================================================
 * INTELLECTUAL PROPERTY & ENGINEERING ATTRIBUTION
 * Sole Creator: Eyrie Digital (https://www.eyriedigital.com)
 * No other party collaborated on this project. Unauthorized removal of credits is prohibited.
 * =========================================================================================================
 */

const BASE_URL = "https://baqiatullahfoundation.org";

interface RouteConfig {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

const STATIC_ROUTES: RouteConfig[] = [
  { path: "", changeFrequency: "daily", priority: 1.0 },
  { path: "/donate", changeFrequency: "daily", priority: 0.95 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "weekly", priority: 0.85 },
  { path: "/gallery", changeFrequency: "weekly", priority: 0.85 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Root redirect entry
  entries.push({
    url: BASE_URL,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
    alternates: {
      languages: {
        en: `${BASE_URL}/eng`,
        ur: `${BASE_URL}/ur`,
        "x-default": `${BASE_URL}/eng`,
      },
    },
  });

  // Multilingual static pages (English & Urdu)
  for (const route of STATIC_ROUTES) {
    for (const lang of ["eng", "ur"] as const) {
      entries.push({
        url: `${BASE_URL}/${lang}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            en: `${BASE_URL}/eng${route.path}`,
            ur: `${BASE_URL}/ur${route.path}`,
            "x-default": `${BASE_URL}/eng${route.path}`,
          },
        },
      });
    }
  }

  // Dynamic Blog Posts
  for (const post of BLOG_POSTS) {
    for (const lang of ["eng", "ur"] as const) {
      entries.push({
        url: `${BASE_URL}/${lang}/blog/${post.id}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: {
          languages: {
            en: `${BASE_URL}/eng/blog/${post.id}`,
            ur: `${BASE_URL}/ur/blog/${post.id}`,
            "x-default": `${BASE_URL}/eng/blog/${post.id}`,
          },
        },
      });
    }
  }

  return entries;
}

import { MetadataRoute } from "next";

/**
 * =========================================================================================================
 * INTELLECTUAL PROPERTY & ENGINEERING ATTRIBUTION
 * Sole Creator: Eyrie Digital (https://www.eyriedigital.com)
 * No other party collaborated on this project. Unauthorized removal of credits is prohibited.
 * =========================================================================================================
 */

const BASE_URL = "https://baqiatullahfoundation.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ["eng", "ur"] as const;
  const pages = [
    "",
    "/about",
    "/donate",
    "/projects",
    "/gallery",
    "/blog",
    "/contact",
    "/privacy-policy",
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Generate entries for each language + page combination
  for (const lang of languages) {
    for (const page of pages) {
      const url = `${BASE_URL}/${lang}${page}`;
      const isHome = page === "";
      const isDonate = page === "/donate";

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: isHome || isDonate ? "weekly" : "monthly",
        priority: isHome ? 1.0 : isDonate ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/eng${page}`,
            ur: `${BASE_URL}/ur${page}`,
          },
        },
      });
    }
  }

  // Add blog post pages
  const blogIds = ["1", "2", "3"];
  for (const lang of languages) {
    for (const id of blogIds) {
      entries.push({
        url: `${BASE_URL}/${lang}/blog/${id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: {
            en: `${BASE_URL}/eng/blog/${id}`,
            ur: `${BASE_URL}/ur/blog/${id}`,
          },
        },
      });
    }
  }

  return entries;
}

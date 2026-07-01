import type { MetadataRoute } from "next";
import { businessInfo } from "@/lib/site-data";

const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "",               priority: 1.0, changeFrequency: "weekly"  },
  { path: "/services",      priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing",       priority: 0.9, changeFrequency: "weekly"  },
  { path: "/how-it-works",  priority: 0.8, changeFrequency: "monthly" },
  { path: "/what-we-ship",  priority: 0.8, changeFrequency: "monthly" },
  { path: "/about",         priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact",       priority: 0.7, changeFrequency: "monthly" },
  { path: "/track",         priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${businessInfo.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

import type { MetadataRoute } from "next";
import { businessInfo } from "@/lib/site-data";

const routes = ["", "/how-it-works", "/services", "/pricing", "/track", "/what-we-ship", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${businessInfo.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

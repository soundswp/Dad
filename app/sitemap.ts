import type { MetadataRoute } from "next";
import { seoPages, siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(seoPages).map((page) => ({
    url: new URL(page.path, siteUrl).toString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

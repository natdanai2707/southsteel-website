import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { ARTICLES } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// sitemap.xml สร้างอัตโนมัติ — สินค้าและบทความใหม่ถูกรวมให้เองเมื่อ build
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}

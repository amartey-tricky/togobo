import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ambrosetogobo.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1
    },
    {
      url: "https://ambrosetogobo.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8
    },
    {
      url: "https://ambrosetogobo.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8
    },
    {
      url: "https://ambrosetogo.com/books",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8
    }
  ]
}
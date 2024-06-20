import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "ambrosetogobo.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1
    },
    {
      url: "ambrosetogobo.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8
    },
    {
      url: "ambrosetogobo.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8
    },
    {
      url: "ambrosetogo.com/books",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8
    }
  ]
}
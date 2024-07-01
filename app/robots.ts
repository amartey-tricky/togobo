import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    "sitemap": "https://ambrosetogobo.com/sitemap",
    "host": "https://ambrosetogobo.com",
    "rules": [
      {
        "userAgent": "*",
        "allow": ["/", "/books", "/books/*", "/about", "/contact"]
      }
    ]
  }
}
import { BASE_URL } from "@/app/lib/constants";
import type { MetadataRoute } from "next";
import { Books } from "@/app/lib/constants";

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const book = Books.find((book) => book.id === id);
  if (!book) {
    throw new Error("No book found");
  }
  return [
    {
      url: `${BASE_URL}/books/${book.id}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}

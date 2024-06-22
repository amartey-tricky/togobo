import type { Metadata } from "next";

const title = "Dr. Ambrose K. Togobo - Books";
const description =
  "Explore the insightful works of Dr. Ambrose K. Togobo, covering topics from individual responsibility to the nature of the universe and healing.";

  export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: "https://ambrosetogobo.com",
      type: "website",
      siteName: "Ambrose Togobo",
  
    },
    twitter: {
      card: "summary_large_image",
      site: "@ambrosetogobo",
      title: title,
      description: description,
      creator: "@ambrosetogobo",
    },
    robots: {
      index: true,
      follow: true,
    }
  };

export default function BookLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  )
}
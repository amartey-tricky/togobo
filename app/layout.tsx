import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const title = "Dr. Ambrose K. Togobo";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f5f5e3] dark:bg-[#030014] overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Header />
          {children}
          <Toaster position="top-center" richColors={true} />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

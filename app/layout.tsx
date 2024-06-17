import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Ambrose K Togobo",
  description:
    "Dr Ambrose K Togobo is a renowned author and medical doctor. He is also a member of the Royal College of Anaesthetists. He has written over three (3) books.",
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
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import ContactForm from "@/components/contactform";
import type { Metadata } from "next";
import { margarine } from "../fonts/font";

const title = "Dr. Ambrose K. Togobo - Contact";
const description = "Get in touch with Dr. Ambrose K. Togobo for any inquiries or collaborations.";

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
};

export default function Page() {
  return (
    <main className="my-6 mx-4">
      <section className="flex flex-col space-y-4 md:space-y-6 text-center">
        <h1 className={`${margarine.className} text-4xl lg:text-6xl font-bold text-slate-600 dark:text-slate-400`}>Contact Me</h1>
        <p className="text-sm text-slate-400 dark:text-slate-600">I will very much appreciate your comments, feedbacks and suggestions. Your views will be very much appreciated.</p>
      </section>
      <section className="py-6 md:py-12 text-slate-600 dark:text-slate-400">
        <ContactForm />
      </section>
    </main>
  )
}
import ContactForm from "@/components/contactform";

export default function Page() {
  return (
    <main className="my-6 mx-4">
      <section className="flex flex-col space-y-4 md:space-y-6 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-slate-600 dark:text-slate-400">Contact Me</h1>
        <p className="text-sm text-slate-400 dark:text-slate-600">I will very much appreciate your comments, feedbacks and suggestions. Your views will be very much appreciated.</p>
      </section>
      <section>
        <ContactForm />
      </section>
    </main>
  )
}
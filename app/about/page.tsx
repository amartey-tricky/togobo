import Image from "next/image";
import type { Metadata } from "next";
import { merriweather } from "../fonts/font";

const Books = [
  {
    id: 1,
    title:
      "A WIDER OUTLOOK: INDIVIDUAL RESPONSIBILITY FOR WORLD CHAOS AND WORLD HARMONY",
    year: "2014",
  },
  {
    id: 2,
    title: "EXPLORATION OF THE NATURE OF MAN, GOD AND THE UNIVERSE",
    year: 2022,
  },
  {
    id: 3,
    title: "HEALING! WHERE DOES THE CREDIT LIE?",
    year: 2024,
  },
];

const title = "Dr. Ambrose K. Togobo - About";
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
  },
};

export default function Page() {
  return (
    <main className="my-12 mx-auto px-4 md:px-8 space-y-12">
      <section>
        <h1 className={`${merriweather.className} text-3xl md:text-4xl font-bold text-slate-600 dark:text-slate-300 text-center`}>
          About Me
        </h1>
      </section>
      <section className="space-y-6 md:space-y-0 md:flex items-start">
        <div className="md:w-1/3 md:mr-8">
          <Image
            src="https://utfs.io/f/d413b4d8-99ba-463c-a54b-0236817ee544-1x9w2h.jpeg"
            alt="Image of Dr Togobo"
            width={350}
            height={250}
            className="rounded-lg shadow"
          />
        </div>
        <div className="space-y-4 w-2/3 text-slate-400 dark:text-slate-500 text-justify">
          <p>
            <span>
              Dr. Ambrose Togobo, an esteemed Anlo-Ewe, was born in the town of
              Anloga in the Volta Region of Ghana. His early education began at
              the local Evangelical Presbyterian School, where he laid a strong
              foundation for his future academic pursuits. He continued his
              secondary education at the prestigious Adisadel College, known for
              its excellence and tradition.
            </span>
          </p>
          <p>
            <span>
              In 1971, Dr. Togobo achieved a significant milestone by completing
              his medical education at Lvov Medical School, located in the
              former USSR, now Ukraine. His dedication and hard work earned him
              an MD (Hons) degree, complemented by two diplomas: one in Tropical
              Medicine and Hygiene and the other in Anaesthesia. His expertise
              in anaesthesia was further recognized when he became a member of
              the Royal College of Anaesthetists.
            </span>
          </p>
          <p>
            <span>
              Dr. Togobo's professional career flourished at Whipps Cross
              University Hospital in London, where he practiced medicine with
              distinction for many years. His commitment to patient care and his
              contributions to the medical field were highly regarded until his
              retirement in 2006.
            </span>
          </p>
          <p>
            <span>
              Beyond his medical career, Dr. Togobo is a man of diverse
              interests and talents. He is a member of the Worldwide Unity
              Movement, an organization dedicated to promoting global harmony
              and understanding. Additionally, he is a Silver Mind Graduate and
              holds a Reiki Certificate, reflecting his deep interest in
              holistic healing and personal development.
            </span>
          </p>
          <p>
            <span>
              Dr. Togobo's intellectual pursuits extend to writing as well. He
              is the author of "A Wider Outlook," among other works, where he
              shares his insights and experiences, aiming to inspire and educate
              a broader audience.
            </span>
          </p>
          <p>
            <span>
              Throughout his life, Dr. Ambrose Togobo has exemplified
              dedication, compassion, and a relentless pursuit of knowledge. His
              contributions to medicine, his community, and his readers continue
              to leave a lasting impact.
            </span>
          </p>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className={`${merriweather.className} text-2xl font-bold text-slate-600 dark:text-slate-300 text-center`}>
          Bibliography
        </h2>
        <ul className="flex flex-col mx-auto gap-4 text-left list-disc pl-5 text-sm">
          {Books.map((book) => {
            return (
              <li key={book.id} className="flex flex-col list-none text-slate-500 dark:text-slate-400">
                "{book.title}" ({book.year})
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

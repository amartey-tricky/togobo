import Link from "next/link";
import Image from "next/image";
import { libre } from "../fonts/font";

const Books = [
  {
    id: 1,
    name: "A WIDER OUTLOOK: INDIVIDUAL RESPONSIBILITY FOR WORLD CHAOS AND WORLD HARMONY",
    year: 2014,
    author: "Dr. Ambrose K. Togobo",
    link: "https://www.amazon.com/Wider-Outlook-Individual-Responsibility-Harmony-ebook/dp/B0793T35L4/ref=sr_1_3?dib=eyJ2IjoiMSJ9.NyPin1h8GFnuxmq-WnVH9O5xXScEoitlH1s9zy2zUMU-Gp9TW47p_KwUf2SFHa-Y.EcLP2eDE4VQaQ-Mt-511klUB1t6uENj8tMuNmf5OLKI&dib_tag=se&keywords=ambrose+togobo&qid=1718601269&sr=8-3",
    image: "https://m.media-amazon.com/images/I/81ZuiqkT6XL._SY425_.jpg",
  },
  {
    id: 2,
    name: "EXPLORATION OF THE NATURE OF MAN, GOD AND THE UNIVERSE",
    year: 2022,
    author: "Dr. Ambrose K. Togobo",
    link: "https://www.amazon.com/EXPLORATION-NATURE-MAN-GOD-UNIVERSE/dp/B0B72MXGJS/ref=sr_1_2?dib=eyJ2IjoiMSJ9.NyPin1h8GFnuxmq-WnVH9O5xXScEoitlH1s9zy2zUMU-Gp9TW47p_KwUf2SFHa-Y.EcLP2eDE4VQaQ-Mt-511klUB1t6uENj8tMuNmf5OLKI&dib_tag=se&keywords=ambrose+togobo&qid=1718602956&sr=8-2",
    image: "https://m.media-amazon.com/images/I/61Ue4zdVd+L._SY425_.jpg",
  },
  {
    id: 3,
    name: "HEALING! WHERE DOES THE CREDIT LIE?",
    year: 2024,
    author: "Dr. Ambrose K. Togobo",
    link: "https://www.amazon.com/HEALING-WHERE-DOES-CREDIT-LIE-ebook/dp/B0D6WJ1RRS/ref=sr_1_1?crid=3GX8CIYKCYARP&dib=eyJ2IjoiMSJ9.eJDZ3ROrNu4Hqm4TGYyL3xWxHEQ9t4E1l9RQdVhR8pc.zML1RAgCJshTAq3fSLIxUJ7kg5vq0w1y9egGVzDvL4M&dib_tag=se&keywords=ambrose+togobo&qid=1718602929&s=digital-text&sprefix=ambrose+togo%2Cdigital-text%2C547&sr=1-1",
    image: "https://utfs.io/f/3ddb5486-678f-49ed-aaff-fb52502be330-1xajvc.jpeg",
  },
];

export default function Page() {
  return (
    <main className="my-8 md:my-12 lg:my-16 mx-6 md:mx-10 lg:mx-14">
      <section className="my-12 md:my-24">
        <h1 className={`${libre.className} text-center text-3xl md:text-4xl font-bold text-slate-600 dark:text-slate-300`}>
          Books By Dr. Ambrose Togobo
        </h1>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Books.map((book) => {
          return (
            <article
              key={book.id}
              className="text-center text-slate-500 dark:text-slate-400 p-4 md:p-6 space-y-4"
            >
              <Image
                src={book.image}
                alt={book.name}
                width={300}
                height={300}
                className="mx-auto rounded-md"
              />
              <h2 className="">{book.name}</h2>
              <p>{book.author}</p>
              <p>{book.year}</p>
              <Link
                href={`/books/${book.id}`}
                prefetch={false}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Read more
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

const featuredBooks = [
  {
    id: 1,
    name: "A WIDER OUTLOOK: INDIVIDUAL RESPONSIBILITY FOR WORLD CHAOS AND WORLD HARMONY",
    year: 2014,
    author: "Dr. Ambrose K. Togobo",
    link: "https://www.amazon.com/Wider-Outlook-Individual-Responsibility-Harmony-ebook/dp/B0793T35L4/ref=sr_1_3?dib=eyJ2IjoiMSJ9.NyPin1h8GFnuxmq-WnVH9O5xXScEoitlH1s9zy2zUMU-Gp9TW47p_KwUf2SFHa-Y.EcLP2eDE4VQaQ-Mt-511klUB1t6uENj8tMuNmf5OLKI&dib_tag=se&keywords=ambrose+togobo&qid=1718601269&sr=8-3",
    image: "https://m.media-amazon.com/images/I/81ZuiqkT6XL._SY425_.jpg",
    description:
      "A WIDER OUTLOOK\nIt is with great diffidence that I speak to you today, but I take courage in the thought that I am not presenting to you my own ideas but some of the teachings of THE DIVINE WISDOM guarded by the custodians of Wisdom throughout the ages: also the teachings of experts, gained from much studies and research. The experts referred to are those remarkable men and women who have devoted their lives to intense study of the Hidden side of things, and to the training and development of the extension of the powers of their senses, till they have attained ULTRA SENSORY PERCEPTION.",
  },
  {
    id: 2,
    name: "EXPLORATION OF THE NATURE OF MAN, GOD AND THE UNIVERSE",
    year: 2022,
    author: "Dr. Ambrose K. Togobo",
    link: "https://www.amazon.com/EXPLORATION-NATURE-MAN-GOD-UNIVERSE/dp/B0B72MXGJS/ref=sr_1_2?dib=eyJ2IjoiMSJ9.NyPin1h8GFnuxmq-WnVH9O5xXScEoitlH1s9zy2zUMU-Gp9TW47p_KwUf2SFHa-Y.EcLP2eDE4VQaQ-Mt-511klUB1t6uENj8tMuNmf5OLKI&dib_tag=se&keywords=ambrose+togobo&qid=1718602956&sr=8-2",
    image: "https://m.media-amazon.com/images/I/61Ue4zdVd+L._SY425_.jpg",
    description:
      "Greek fathers have come up with principles of Philosophy and Logics which are windows or domain from which life is seen and examined in conformity with Natural Laws in order to live a graceful and prosperous life. These ethics are aimed at success and prosperity of an individual and for the protection of the wellbeing of the Universe which is the abode of humans. For life to have a meaning, one could not live a lawless life. There must be conformity to simple principles of Natural Laws.\nParents have been given the authority over their children with simple basic objectives. That is to ensure that generations after them must live successful lives. How is this done? They need to inculcate in their children lot of information as to how to live life successfully on earth. This is the prerogative of this book. You really need to read this book to be able to examine your life. The Greek Scholar Socrates made this simple proposition, “An unexamined life is not worth living.” You need to examine your life in line with these Natural Laws outlined in this book.",
  },
  {
    id: 3,
    name: "HEALING! WHERE DOES THE CREDIT LIE?",
    year: 2024,
    author: "Dr. Ambrose K. Togobo",
    link: "https://www.amazon.com/HEALING-WHERE-DOES-CREDIT-LIE-ebook/dp/B0D6WJ1RRS/ref=sr_1_1?crid=3GX8CIYKCYARP&dib=eyJ2IjoiMSJ9.eJDZ3ROrNu4Hqm4TGYyL3xWxHEQ9t4E1l9RQdVhR8pc.zML1RAgCJshTAq3fSLIxUJ7kg5vq0w1y9egGVzDvL4M&dib_tag=se&keywords=ambrose+togobo&qid=1718602929&s=digital-text&sprefix=ambrose+togo%2Cdigital-text%2C547&sr=1-1",
    image: "https://m.media-amazon.com/images/I/71feYYZqtuL._SY425_.jpg",
    description:
      "Healing of diseases in the body is mostly self-induced. That means you can cure yourself through your thought process. Find out how you could do it. This should not mean if you are sick, you should not seek medical assistance from a physician. Wonders shall never end. Are you a physician, alternative health practitioner, or a lay man? This book gives you the chance to investigate some natural healing procedures carried out by various health workers. There are methods such as Suggestive healing, Metaphysical Healing and many more you need to know of. This book has a lot of information on these procedures of which you need to know. Do you know the power of energy in the human body? Can you tell? Does consciousness end in the grave? If not, shall we recognize our relatives in life after death? Find out.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen mx-8 md:p-6">
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dr. Ambrose Togobo</h1>
            <p className="text-xl mb-8">Dr Togobo is a prolific author and medical doctor. He is a member of the Royal College of Anaesthetists, who has written over 3 books. He has a knack for delivering a great experience to the reader when they least expect it.</p>
            <Link href="/books" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
              Explore Books
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://utfs.io/f/d413b4d8-99ba-463c-a54b-0236817ee544-1x9w2h.jpeg"
              alt="Image of Dr. Togobo"
              width={300}
              height={500}
              className="rounded-full mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Latest Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredBooks.map((book) => (
              <div key={book.id} className="bg-white dark:bg-blue-900 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.name}
                  width={300}
                  height={450}
                  className="w-full object-cover h-64"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{book.name}</h3>
                  <p className="text-gray-600 mb-4 dark:text-slate-400">{book.year}</p>
                  <Link href={`/books/${book.id}`} className="text-blue-600  dark:text-blue-400 hover:text-blue-800">
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

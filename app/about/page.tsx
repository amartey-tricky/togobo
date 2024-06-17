import Image from "next/image";
import Link from "next/link";

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

export default function Page() {
  return (
    <main className="my-12 mx-auto px-4 md:px-8 space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-600 dark:text-slate-300 text-center">About Me</h1>
      </section>
      <section className="space-y-6 md:space-y-0 md:flex items-start">
        <div className="md:w-1/3 md:mr-8">
          <Image src="https://utfs.io/f/d413b4d8-99ba-463c-a54b-0236817ee544-1x9w2h.jpeg" alt="Image of Dr Togobo" width={350} height={250} className="rounded-lg shadow" />
        </div>
        <div className="space-y-4 w-2/3 text-slate-400 dark:text-slate-500 text-justify">
          <p><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, voluptatum maiores at dolorum in excepturi tempora reprehenderit id architecto sit doloremque vero esse, impedit incidunt minima eaque. Laborum, magni soluta?</span><span>Omnis nostrum asperiores voluptate facere libero impedit recusandae itaque, sed blanditiis eveniet iste dicta quos natus minima nisi repellendus porro repellat earum, eius ad nihil ducimus reprehenderit numquam excepturi! Molestias.</span><span>Repellat, eveniet, deleniti sapiente, at illum dolor pariatur a obcaecati quos iure tempore adipisci! Quo et praesentium quibusdam, possimus sapiente soluta temporibus aspernatur quidem quos sunt accusantium officiis natus rem.</span><span>Doloremque deleniti nulla officia amet sequi dignissimos et architecto nostrum necessitatibus harum odio id praesentium nisi temporibus consectetur quisquam laborum dolore, ad expedita consequuntur perferendis assumenda autem debitis tempora. Quibusdam.</span></p>
          <p><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, voluptatum maiores at dolorum in excepturi tempora reprehenderit id architecto sit doloremque vero esse, impedit incidunt minima eaque. Laborum, magni soluta?</span><span>Omnis nostrum asperiores voluptate facere libero impedit recusandae itaque, sed blanditiis eveniet iste dicta quos natus minima nisi repellendus porro repellat earum, eius ad nihil ducimus reprehenderit numquam excepturi! Molestias.</span><span>Repellat, eveniet, deleniti sapiente, at illum dolor pariatur a obcaecati quos iure tempore adipisci! Quo et praesentium quibusdam, possimus sapiente soluta temporibus aspernatur quidem quos sunt accusantium officiis natus rem.</span><span>Doloremque deleniti nulla officia amet sequi dignissimos et architecto nostrum necessitatibus harum odio id praesentium nisi temporibus consectetur quisquam laborum dolore, ad expedita consequuntur perferendis assumenda autem debitis tempora. Quibusdam.</span></p>
          <p><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, voluptatum maiores at dolorum in excepturi tempora reprehenderit id architecto sit doloremque vero esse, impedit incidunt minima eaque. Laborum, magni soluta?</span><span>Omnis nostrum asperiores voluptate facere libero impedit recusandae itaque, sed blanditiis eveniet iste dicta quos natus minima nisi repellendus porro repellat earum, eius ad nihil ducimus reprehenderit numquam excepturi! Molestias.</span><span>Repellat, eveniet, deleniti sapiente, at illum dolor pariatur a obcaecati quos iure tempore adipisci! Quo et praesentium quibusdam, possimus sapiente soluta temporibus aspernatur quidem quos sunt accusantium officiis natus rem.</span><span>Doloremque deleniti nulla officia amet sequi dignissimos et architecto nostrum necessitatibus harum odio id praesentium nisi temporibus consectetur quisquam laborum dolore, ad expedita consequuntur perferendis assumenda autem debitis tempora. Quibusdam.</span></p>
          <p><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, voluptatum maiores at dolorum in excepturi tempora reprehenderit id architecto sit doloremque vero esse, impedit incidunt minima eaque. Laborum, magni soluta?</span><span>Omnis nostrum asperiores voluptate facere libero impedit recusandae itaque, sed blanditiis eveniet iste dicta quos natus minima nisi repellendus porro repellat earum, eius ad nihil ducimus reprehenderit numquam excepturi! Molestias.</span><span>Repellat, eveniet, deleniti sapiente, at illum dolor pariatur a obcaecati quos iure tempore adipisci! Quo et praesentium quibusdam, possimus sapiente soluta temporibus aspernatur quidem quos sunt accusantium officiis natus rem.</span><span>Doloremque deleniti nulla officia amet sequi dignissimos et architecto nostrum necessitatibus harum odio id praesentium nisi temporibus consectetur quisquam laborum dolore, ad expedita consequuntur perferendis assumenda autem debitis tempora. Quibusdam.</span></p>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center text-slate-500 dark:text-slate-400">Bibliography</h2>
        <ul className="flex flex-col mx-auto gap-4 text-left list-disc pl-5 text-sm">
          {Books.map((book) => {
            return (
              <li key={book.id}>"{book.title}" ({book.year})</li>
            )
          })}
        </ul>
      </section>
    </main>
  );
}

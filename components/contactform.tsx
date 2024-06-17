"use client";

import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { ContactSchema } from "@/utils/schema";
import type { ContactFormData } from "@/utils/schema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: valibotResolver(ContactSchema),
  });

  return (
    <form className="space-y-4 lg:space-y-6 flex flex-col items-center w-full">
      <div>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="John Doe"
          className="px-4 py-3 text-xl font-semibold text-slate-600 dark:text-slate-300 bg-[#f5f5e3] dark:bg-[#030014] border-2 rounded-lg transition duration-200 ease-linear focus:outline-none focus-visible:ring-2 ring-[#191970] dark:ring-[#f5f5e3]"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          inputMode="email"
          {...register("email")}
          placeholder="name@email.com"
          className="px-4 py-3 text-xl font-semibold text-slate-600 dark:text-slate-300 bg-[#f5f5e3] dark:bg-[#030014] border-2 rounded-lg transition duration-200 ease-linear focus:outline-none focus-visible:ring-2 ring-[#191970] dark:ring-[#f5f5e3]"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="message"
          rows={3}
          className="px-4 py-3 text-xl font-semibold text-slate-600 dark:text-slate-300 bg-[#f5f5e3] dark:bg-[#030014] border-2 rounded-lg transition duration-200 ease-linear focus:outline-none focus-visible:ring-2 ring-[#191970] dark:ring-[#f5f5e3]"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Send Message
      </button>
    </form>
  );
}

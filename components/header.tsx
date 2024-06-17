"use client";

import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";
import { clsx } from "clsx";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Books",
    link: "/books",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="m-4 h-auto max-w-screen-xl font-sans text-xl text-slate-500 dark:text-slate-300">
      <nav className="px-2 md:px-6 py-4 flex items-center justify-between rounded-lg backdrop-blur">
        <Link
          href="/"
          prefetch={false}
          className="text-2xl font-bold uppercase hover:text-black dark:hover:text-white"
        >
          Dr Togobo
        </Link>
        <div className="hidden lg:flex flex-row gap-6 font-mono font-semibold text-2xl">
          {navLinks.map((navLink) => {
            return (
              <Link key={navLink.id} href={navLink.link} prefetch={false}>
                {navLink.name}
              </Link>
            );
          })}
          <ThemeToggler />
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="w-8 h-8 lg:hidden transition-all duration-200"
        >
          {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </button>
      </nav>
      <Transition
        show={menuOpen}
        enter="transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <nav className="flex flex-col top-0 left-0 fixed h-full w-[60%] backdrop-blur-md gap-9 text-xl items-center justify-evenly md:text-2xl md:font-semibold md:gap-12 font-mono">
          {navLinks.map((navLink) => {
            return (
              <Link
                key={navLink.id}
                prefetch={false}
                href={navLink.link}
                onClick={toggleMenu}
              >
                {navLink.name}
              </Link>
            );
          })}
          <ThemeToggler />
        </nav>
      </Transition>
    </header>
  );
}

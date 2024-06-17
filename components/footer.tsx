import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#191970] dark:bg-[#FFFFF0] text-slate-200 dark:text-slate-800 w-full md:px-8 py-6">
      <div className="p-4 md:p-8 rounded-tr-xl rounded-tl-xl border-b-2 border-slate-300 dark:border-slate-600">
        <div className="flex flex-col gap-4 md:gap-8">
          <Link
            href="/"
            prefetch={false}
            className="font-mono text-xl md:text-2xl font-semibold hover:text-blue-200 dark:hover:text-blue-600"
          >
            Dr Togobo
          </Link>
          <p className="text-xs">
            &copy; Copyright {new Date().getFullYear()}{" "}
            <Link href="/" className="text-blue-500 dark:text-blue-300">
              Dr. Ambrose Togobo
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import Link from "next/link";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Hero() {
  return (
    <section className="flex items-start flex-col lg:sticky top-0 lg:w-full md:ml-6">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Hi, I&apos;m Kenneth Ruhweza
        </h1>
        <h3 className="text-2xl md:text-3xl mb-6 mt-3 font-bold">
          Front End Engineer
        </h3>
        <p className="hidden lg:block text-lg sm:text-xl  mb-8">
          I&apos;m passionate about developing clean, accessible, and visually
          accurate digital products for the web.
          <span className="text-[#d66a88] ml-1">
            Currently open to junior frontend roles and collaborative projects.
          </span>
        </p>
      </div>
      <nav className="flex flex-col hidden lg:block">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center py-3 text-sm font-bold uppercase tracking-widest  hover:text-white transition-colors"
          >
            <span className="mr-4 h-px w-8 bg-white transition-all group-hover:w-16 group-hover:bg-[#d66a88]"></span>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}

"use client";
import { useState, useRef, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import Hero from "@/app/components/Hero";
import Link from "next/link";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="lg:w-[40%]">
        <div className="md:sticky top-0 md:flex lg:h-screen flex-col md:justify-between lg:py-24 pt-24">
          <Hero />
        </div>
      </aside>

      {/* Hamburger button */}
      <button
        onClick={toggleNav}
        className="md:hidden fixed top-6 right-6 z-50 text-white text-3xl"
      >
        {isOpen ? <HiX /> : <RiMenu3Fill />}
      </button>

      {/* Mobile top nav with transition */}
      <nav
        ref={navRef}
        className={`lg:hidden fixed md:px-13 top-0 right-0 w-[80%] md:w-full bg-[color:var(--color-slategray-dark)] md:h-fit h-screen z-40 px-4 py-3 flex flex-col md:flex-row items-center justify-center md:justify-between transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <span className="text-white font-bold hidden md:block">
          Kenneth Ruhweza
        </span>
        <div className="space-x-4 text-lg md:text-md flex flex-col gap-[4rem] md:flex-row">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white transition items-center gap-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

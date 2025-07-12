"use client";

import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="md:px-6 text-center">
      <h2 className="lg:text-3xl text-2xl font-bold mb-4 mt-8 text-white">
        Contact
      </h2>
      <p className="text-lg mb-6">
        I&apos;m currently open to new opportunities, collaborations, or just a
        chat. Feel free to drop me a message!
      </p>
      <div className="flex gap-8 items-center justify-center">
        <a
          href="https://github.com/Hwezah"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-[#d66a88] transition"
        >
          <FiGithub size={20} />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/hwezah"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-[#d66a88] transition"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
        <a
          href="mailto:hwezah.dev@gmail.com"
          className="inline-flex items-center gap-2 text-white hover:text-[#d66a88] transition"
        >
          <FiMail size={20} />
          Email
        </a>
      </div>
    </section>
  );
}

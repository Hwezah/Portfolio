"use client";

export default function Contact() {
  return (
    <section id="contact" className="md:px-6">
      <h2 className="text-3xl font-bold mb-6 mt-8 text-white">Contact</h2>
      <p className="text-lg mb-6">
        I&apos;m currently open to new opportunities, collaborations, or just a
        chat. Feel free to drop me a message!
      </p>
      <div className="flex gap-8 items-center">
        <a
          href="https://github.com/Hwezah"
          className="inline-block  text-white  rounded-lg transition"
        >
          Github
        </a>
        <a
          href="https://linkedin.com/in/hwezah"
          className="inline-block  text-white rounded-lg transition"
        >
          LinkedIn
        </a>
        <a
          href="https://hwezah.dev@gmail.com"
          className="inline-block  text-white rounded-lg transition"
        >
          Email
        </a>
      </div>
    </section>
  );
}

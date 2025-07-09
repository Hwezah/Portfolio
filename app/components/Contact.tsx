"use client";

export default function Contact() {
  return (
    <section id="contact" className="md:px-6">
      <h2 className="text-3xl font-bold mb-6 mt-8 text-white">Contact</h2>
      <p className="text-lg mb-6">
        I&apos;m currently open to new opportunities, collaborations, or just a
        chat. Feel free to drop me a message!
      </p>
      <a
        href="mailto:yourname@email.com"
        className="inline-block  text-white py-3 rounded-lg transition"
      >
        Say Hello
      </a>
    </section>
  );
}

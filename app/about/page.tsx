import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white">About</h1>
      </header>
      <div className="max-w-3xl">
        <About />
      </div>
      <div className="mt-14">
        <Contact />
      </div>
    </main>
  );
}


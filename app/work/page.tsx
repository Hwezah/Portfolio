import Projects from "@/app/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Projects</h1>
      </header>
      <Projects />
    </main>
  );
}


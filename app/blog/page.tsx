import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const posts = [
  {
    slug: "coming-soon",
    title: "Writing about design and tech…",
    date: "2026-04-14",
    excerpt:
      "This is a placeholder page. Next we can add MDX posts or pull from a CMS.",
  },
] as const;

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Blog</h1>
        <p className="mt-3 text-gray-200/90">
          Writing about design and tech...
        </p>
      </header>

      <div className="grid gap-4">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-white font-semibold">{p.title}</h2>
              <time className="text-xs text-gray-300/70">{p.date}</time>
            </div>
            <p className="mt-2 text-sm text-gray-200/80">{p.excerpt}</p>
            <div className="mt-4">
              <Link href="#" className="text-sm text-[#d66a88] hover:underline">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}


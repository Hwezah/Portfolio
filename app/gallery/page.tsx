import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
};

const images = [
  { src: "/Portfolio.jpg", alt: "Portfolio preview" },
  { src: "/Foundation.jpg", alt: "Foundation preview" },
  { src: "/SpacesClient-Img-2.jpg", alt: "Spaces Client preview" },
] as const;

export default function GalleryPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Photo gallery
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <div
            key={img.src}
            className="bg-white/5 rounded-lg border border-white/10 p-3"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-56 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </main>
  );
}


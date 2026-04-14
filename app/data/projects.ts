export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "My personal portfolio built with React, Next.js, and Tailwind CSS.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/Hwezah/Portfolio",
    link: "https://portfolio-two-orpin-26.vercel.app/",
    image: "/Portfolio.jpg",
    highlights: [
      "Clean single-page layout with sections for About, Projects, and Contact.",
      "Animated, responsive UI with accessible links to GitHub and live demos.",
    ],
  },
  {
    slug: "church-media-bible-platform",
    title: "Church Media & Bible Access Platform",
    description:
      "Simple church platform with YouTube sermons and searchable, multi-version Bible.",
    tech: [
      "React",
      "Tailwind CSS",
      "YouTube API",
      "Bible API",
      "LocalStorage",
      "Context API",
    ],
    github: "https://github.com/Hwezah/foundation",
    link: "https://foundation-next-js.vercel.app/",
    image: "/Foundation.jpg",
    highlights: [
      "Integrated YouTube sermons browsing with a clean media-first layout.",
      "Searchable Bible with multiple versions and persisted preferences.",
    ],
  },
  {
    slug: "in-house-rentals-platform",
    title: "In-House Rentals Platform",
    description: "Single-property rental app with listings, bookings, and user auth.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "NextAuth.js",
      "Supabase",
      "React Hook Form",
      "PostgreSQL",
    ],
    github: "https://github.com/Hwezah/Spaces-Client",
    link: "https://spaces-client-peach.vercel.app/",
    image: "/SpacesClient-Img-2.jpg",
    highlights: [
      "Authentication + booking flow designed for a single-property experience.",
      "Form-heavy UI built with validation and a stable backend data layer.",
    ],
  },
  {
    slug: "blog-cms",
    title: "Blog CMS",
    description: "A blog built with a headless CMS and deployed on Vercel.",
    tech: ["Next.js", "Markdown", "Tailwind"],
    link: "#",
    github: "#",
    image: "#",
    highlights: ["In progress."],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}


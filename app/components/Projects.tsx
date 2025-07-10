"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React, Next.js, and Tailwind CSS.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/Hwezah/Portfolio",
    link: "https://portfolio-two-orpin-26.vercel.app/",
    image: "/Portfolio.jpg",
  },
  {
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
    link: "https://",
    image: "/Foundation.jpg",
  },
  {
    title: "In-House Rentals Platform",
    description:
      "Single-property rental app with listings, bookings, and user auth.",
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
  },
  {
    title: "Blog CMS",
    description: "A blog built with a headless CMS and deployed on Vercel.",
    tech: ["Next.js", "Markdown", "Tailwind"],
    link: "#",
    github: "https://github.com/yourusername/blog",
    image: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="mt-[4rem]">
      <h2 className="text-3xl text-white font-bold mb-6 md:pl-6">Projects</h2>

      <div>
        {projects.map(
          (project, i) =>
            project.link && (
              <motion.div
                key={project.title}
                className="group py-6 cursor-pointer md:hover:bg-white/5 my-4 bg-white/5 md:bg-transparent transition duration-200 rounded-md p-6 relative"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="md:flex gap-4">
                  <div className="w-full md:max-w-[20%] mt-1 relative aspect-[21/9] mb-2">
                    {project.image !== "#" ? (
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        className="rounded border-slate-200/10 transition md:object-contain object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : null}
                  </div>
                  <div className="md:max-w-[75%]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 w-full h-full z-10"
                    ></a>

                    <div className="group flex items-center gap-1 text-xl font-semibold group-hover:text-[#d66a88] text-gray-200 transition">
                      <span>{project.title}</span>
                      <span>
                        <MdArrowOutward className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </div>

                    <p className="mb-4 text-sm">{project.description}</p>

                    <div>
                      <div className="flex flex-wrap gap-2 text-sm mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/5 px-3 py-1 text-[#d66a88] text-sm rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:underline"
                          >
                            GitHub
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:underline"
                          >
                            Live Site
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </div>
    </section>
  );
}

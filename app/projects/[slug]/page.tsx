import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/app/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const hasLive = Boolean(project.link && project.link !== "#");
  const hasGithub = Boolean(project.github && project.github !== "#");

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-sm text-gray-300 hover:underline">
          ← Back home
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {project.title}
        </h1>
        <p className="mt-3 text-gray-200/90">{project.description}</p>
      </header>

      <div className="grid gap-8">
        {project.image !== "#" ? (
          <div className="bg-white/5 rounded-lg border border-white/10 p-3">
            {/* Using img to match existing project cards */}
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        ) : null}

        {project.highlights?.length ? (
          <section className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h2 className="text-lg font-semibold text-white mb-3">
              Project summary
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-200/90">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="bg-white/5 rounded-lg border border-white/10 p-6">
          <h2 className="text-lg font-semibold text-white mb-3">Tech</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-white/5 px-3 py-1 text-[#d66a88] text-sm rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap gap-3">
          {hasLive ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#d66a88] text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Visit live site
            </a>
          ) : (
            <span className="text-sm text-gray-400 italic">Live site: soon</span>
          )}

          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 text-gray-100 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
            >
              View GitHub
            </a>
          ) : null}
        </section>
      </div>
    </div>
  );
}


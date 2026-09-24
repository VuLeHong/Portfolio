import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]"
      >
        <div className="absolute left-1/2 top-[-220px] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[130px]" />
        <div className="absolute left-[5%] top-32 h-64 w-64 rounded-full bg-emerald-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <h1 className="animate-fade-up text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Projects
        </h1>
        <p
          className="animate-fade-up mt-3 max-w-2xl text-zinc-400"
          style={{ animationDelay: "0.08s" }}
        >
          Things I&apos;ve built — each one taught me something new. Click a
          project for the full write-up.
        </p>

        <div className="mt-12 space-y-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative flex animate-fade-up flex-col gap-3 overflow-hidden rounded-2xl border border-zinc-800 p-6 transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-emerald-500/10 blur-2xl" />
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View details of ${project.title}`}
                className="absolute inset-0 z-10 rounded-2xl"
              />
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-medium text-zinc-100 transition-colors group-hover:text-emerald-300">
                  {project.title}
                </h2>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 inline-flex shrink-0 items-center gap-1 text-sm font-medium text-zinc-500 transition-colors hover:text-emerald-400"
                >
                  GitHub
                  <ExternalLinkIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-900 px-2.5 py-1 text-xs text-zinc-500 transition-colors group-hover:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400">
                Read more
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
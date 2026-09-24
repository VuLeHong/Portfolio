import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
      >
        <div className="absolute left-1/2 top-[-220px] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[130px]" />
        <div className="absolute left-[5%] top-32 h-64 w-64 rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto w-[70%] py-16">
        <Link
          href="/#projects"
          className="animate-fade-up inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-500 transition-colors hover:text-sky-600"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="animate-fade-up mt-6 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          All Projects
        </h1>
        <p className="animate-fade-up mt-3 max-w-2xl text-base font-medium text-zinc-500">
          Every project I&apos;ve built — click one for the full technical
          write-up.
        </p>

        <div className="mt-10 space-y-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative flex animate-fade-up flex-col gap-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/10 sm:flex-row sm:items-start sm:p-6"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-sky-400/10 blur-2xl" />
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="absolute inset-0 z-10 rounded-2xl"
              />
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={320}
                height={240}
                className="h-44 w-full shrink-0 rounded-xl border border-zinc-200 object-cover sm:h-36 sm:w-48"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <h2 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-sky-600">
                  {project.title}
                </h2>
                <p className="max-w-3xl text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600">
                  View on GitHub
                  <ExternalLinkIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
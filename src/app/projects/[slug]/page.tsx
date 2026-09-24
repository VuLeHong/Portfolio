import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projects } from "@/lib/data";
import { ArrowLeftIcon, ExternalLinkIcon } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const content = await readFile(
    path.join(process.cwd(), "src", "content", `${project.slug}.md`),
    "utf8"
  );

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to projects
      </Link>

      <header className="mt-8">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 px-3 py-1 text-xs font-medium text-emerald-400 transition-colors hover:bg-emerald-400 hover:text-zinc-950"
          >
            GitHub
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      <hr className="my-10 border-zinc-800" />

      <div className="md-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </section>
  );
}
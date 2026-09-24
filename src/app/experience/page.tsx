import type { Metadata } from "next";
import { experiences } from "@/lib/data";
import { BriefcaseIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]"
      >
        <div className="absolute left-1/2 top-[-220px] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute right-[5%] top-32 h-64 w-64 rounded-full bg-teal-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <h1 className="animate-fade-up text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Experience
        </h1>
        <p
          className="animate-fade-up mt-3 max-w-2xl text-zinc-400"
          style={{ animationDelay: "0.08s" }}
        >
          A summary of the roles I&apos;ve held and what I worked on.
        </p>

        <div
          className="animate-fade-up mt-14 mb-6 flex items-center gap-3"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            <BriefcaseIcon className="h-4 w-4" />
          </span>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Work Experience
          </h2>
        </div>

        <ol className="space-y-0 border-l border-zinc-800">
          {experiences.map((job, index) => (
            <li
              key={`${job.company}-${job.period}`}
              className="animate-fade-up group relative pb-12 pl-8 last:pb-0"
              style={{ animationDelay: `${0.2 + index * 0.08}s` }}
            >
              <span className="animate-pulse-ring absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <div className="-ml-4 rounded-2xl p-4 transition-all hover:bg-zinc-900/40 hover:shadow-lg hover:shadow-emerald-500/5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium text-zinc-100 transition-colors group-hover:text-emerald-300">
                    {job.role}
                  </h3>
                  <p className="font-mono text-sm text-zinc-500">
                    {job.period}
                  </p>
                </div>
                <p className="mt-1 text-sm font-medium text-emerald-400">
                  {job.company}
                </p>
                <ul className="mt-3 max-w-2xl space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex gap-2 leading-relaxed text-zinc-400"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600 transition-colors group-hover:bg-emerald-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
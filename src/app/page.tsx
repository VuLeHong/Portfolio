import Image from "next/image";
import Link from "next/link";
import {
  profile,
  projects,
  experiences,
  education,
  certifications,
} from "@/lib/data";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CertificateIcon,
  CheckIcon,
  ExternalLinkIcon,
  GraduationCapIcon,
  MapPinIcon,
  SparklesIcon,
} from "@/components/icons";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]"
        >
          <div className="absolute left-1/2 top-[-220px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
          <div className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-teal-400/10 blur-[110px]" />
          <div className="absolute left-[2%] top-40 h-64 w-64 rounded-full bg-emerald-300/5 blur-[100px]" />
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-24 sm:pt-32 lg:flex-row lg:justify-between">
          <div className="flex-1 text-center lg:text-left">
            <p
              className="animate-fade-up mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="animate-pulse-ring h-2 w-2 rounded-full bg-emerald-400" />
              {profile.availability}
            </p>

            <h1
              className="animate-fade-up max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.12s" }}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
              .
              <br />
              <span className="text-zinc-500">{profile.role}.</span>
            </h1>

            <p
              className="animate-fade-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 lg:mx-0"
              style={{ animationDelay: "0.19s" }}
            >
              {profile.bio}
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              style={{ animationDelay: "0.26s" }}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:brightness-110"
              >
                View my projects
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-400/60 hover:text-emerald-300"
              >
                Get in touch
              </Link>
            </div>

            <div
              className="animate-fade-up mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500 lg:justify-start"
              style={{ animationDelay: "0.33s" }}
            >
              <MapPinIcon className="h-4 w-4" />
              {profile.location}
            </div>
          </div>

          <div
            className="animate-fade-up relative shrink-0"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="animate-float-slow relative">
              <Image
                src={profile.image}
                alt={`Photo of ${profile.name}`}
                width={560}
                height={840}
                priority
                className="h-56 w-56 rounded-[2rem] object-cover shadow-2xl shadow-emerald-500/20 ring-4 ring-emerald-400/30 sm:h-72 sm:w-72"
              />
              <span className="animate-pulse-ring absolute -bottom-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-zinc-950 shadow-lg">
                <CheckIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>

      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <div className="animate-fade-up">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <GraduationCapIcon className="h-4 w-4" />
            </span>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Education
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.school}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100 sm:opacity-0" />
                <p className="text-sm font-semibold text-zinc-100">
                  {item.degree}
                </p>
                <p className="mt-1 text-sm text-emerald-400">{item.school}</p>
                <p className="mt-1 font-mono text-xs text-zinc-500">
                  {item.period}
                </p>
                {item.detail && (
                  <p className="mt-2 text-sm text-zinc-400">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up mt-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <SparklesIcon className="h-4 w-4" />
            </span>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Skills
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {profile.skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-800 px-3.5 py-1.5 text-sm text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up mt-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <CertificateIcon className="h-4 w-4" />
            </span>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Certifications
            </h2>
          </div>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert.title}>
                <Link
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-zinc-800 px-5 py-4 text-sm text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                      <CertificateIcon className="h-4 w-4" />
                    </span>
                    {cert.title}
                  </span>
                  <ExternalLinkIcon className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:text-emerald-400" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up mt-14 grid gap-4 sm:grid-cols-2">
          <Link
            href="/experience"
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-950 transition-colors group-hover:bg-emerald-400">
                <BriefcaseIcon className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-medium text-zinc-100">Experience</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {experiences.length} roles — the companies and teams I&apos;ve
              worked with.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400">
              Read more
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/projects"
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-teal-500/10 blur-2xl" />
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-950 transition-colors group-hover:bg-teal-400">
                <SparklesIcon className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-medium text-zinc-100">Projects</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {projects.length} project — with full technical write-up.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400">
              Read more
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
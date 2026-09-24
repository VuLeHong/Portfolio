import Image from "next/image";
import Link from "next/link";
import {
  profile,
  projects,
  experiences,
  certifications,
} from "@/lib/data";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CertificateIcon,
  CheckIcon,
  DownloadIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
} from "@/components/icons";

function SectionHeading({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="animate-fade-up mb-12 flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 text-sky-500">
        {icon}
      </span>
      <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function SubHeading({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <h3 className="animate-fade-up mb-4 flex items-center gap-2 text-base font-bold uppercase tracking-wide text-zinc-600">
      <span className="text-sky-500">{icon}</span>
      {title}
    </h3>
  );
}

function Separator() {
  return (
    <div aria-hidden className="mx-auto w-[90%] lg:w-[70%]">
      <hr className="border-t border-dashed border-zinc-300" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* About */}
      <section id="about" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]"
        >
          <div className="absolute left-1/2 top-[-220px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[130px]" />
          <div className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-[110px]" />
          <div className="absolute left-[2%] top-40 h-64 w-64 rounded-full bg-cyan-300/10 blur-[100px]" />
        </div>

        <div className="mx-auto w-[90%] lg:w-[70%] pb-16 pt-28">
          {/* Introduction */}
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
            <div className="flex-1 text-center lg:text-left">
              <p className="animate-fade-up mb-5 inline-flex items-center gap-2.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm font-semibold text-sky-600">
                <span className="animate-pulse-ring h-2 w-2 rounded-full bg-sky-400" />
                {profile.availability}
              </p>

              <h1
                className="animate-fade-up max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "0.12s" }}
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
                .
                <br />
                <span className="text-zinc-400">{profile.role}.</span>
              </h1>

              <p
                className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-zinc-600 lg:mx-0"
                style={{ animationDelay: "0.19s" }}
              >
                {profile.bio}
              </p>

              <div
                className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                style={{ animationDelay: "0.26s" }}
              >
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-400/25 transition-all hover:shadow-xl hover:shadow-sky-400/40 hover:brightness-110"
                >
                  <DownloadIcon className="h-4 w-4" />
                  View resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-sky-400/60 hover:text-sky-600"
                >
                  Get in touch
                </a>
              </div>

              <div
                className="animate-fade-up mt-8 flex flex-col items-center gap-4 text-sm font-medium text-zinc-500 lg:flex-row lg:justify-start"
                style={{ animationDelay: "0.33s" }}
              >
                <span className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4" />
                  {profile.location}
                </span>
                <span className="hidden h-4 w-px bg-zinc-200 lg:block" />
                <span className="flex items-center gap-3">
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="transition-colors hover:text-sky-600"
                  >
                    <GitHubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="transition-colors hover:text-sky-600"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="transition-colors hover:text-sky-600"
                  >
                    <MailIcon className="h-5 w-5" />
                  </a>
                </span>
              </div>

              <div
                className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start"
                style={{ animationDelay: "0.4s" }}
              >
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 transition-all hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-600 hover:shadow-sm hover:shadow-sky-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-fade-up relative shrink-0">
              <div className="animate-float-slow relative">
                <Image
                  src={profile.image}
                  alt={`Photo of ${profile.name}`}
                  width={560}
                  height={840}
                  priority
                  className="h-64 w-64 rounded-[2rem] object-cover shadow-2xl shadow-sky-400/20 ring-4 ring-sky-400/30 sm:h-80 sm:w-80"
                />
                <span className="animate-pulse-ring absolute -bottom-2 -right-2 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white shadow-lg">
                  <CheckIcon className="h-6 w-6" />
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-14">
            <SubHeading
              icon={<CertificateIcon className="h-5 w-5" />}
              title="Certifications"
            />
            <ul className="animate-fade-up space-y-3">
              {certifications.map((cert) => {
                const rowClass =
                  "group flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/10";
                const children = (
                  <>
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10 text-sky-500">
                        <CertificateIcon className="h-4 w-4" />
                      </span>
                      {cert.title}
                    </span>
                    {cert.href ? (
                      <ExternalLinkIcon className="h-4 w-4 shrink-0 text-zinc-400 transition-all group-hover:translate-x-0.5 group-hover:text-sky-500" />
                    ) : (
                      <span className="shrink-0 rounded-full bg-sky-400/10 px-2.5 py-0.5 text-xs font-semibold text-sky-600">
                        Certified
                      </span>
                    )}
                  </>
                );
                return (
                  <li key={cert.title}>
                    {cert.href ? (
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={rowClass}
                      >
                        {children}
                      </a>
                    ) : (
                      <div className={rowClass}>{children}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <Separator />

      {/* Experiences */}
      <section id="experience" className="mx-auto w-[90%] lg:w-[70%] py-16">
        <SectionHeading
          icon={<BriefcaseIcon className="h-6 w-6" />}
          title="Experiences"
        />
        <ol className="animate-fade-up border-l border-zinc-200">
          {experiences.map((job, index) => (
            <li
              key={`${job.company}-${job.period}`}
              className="group relative pb-12 pl-8 last:pb-0"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="animate-pulse-ring absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-400" />
              <div className="-ml-4 rounded-2xl p-4 transition-all hover:bg-sky-400/5 hover:shadow-lg hover:shadow-sky-400/10">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-xl font-extrabold text-zinc-900 transition-colors group-hover:text-sky-600">
                    {job.role}
                  </h4>
                  <p className="font-mono text-sm text-zinc-400">
                    {job.period}
                  </p>
                </div>
                <p className="mt-1 text-base font-bold text-sky-600">
                  {job.company}
                </p>
                <ul className="mt-3 max-w-2xl space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex gap-2 leading-relaxed text-zinc-600"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300 transition-colors group-hover:bg-sky-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Separator />

      {/* Projects */}
      <section id="projects" className="mx-auto w-[90%] lg:w-[70%] py-16">
        <SectionHeading
          icon={<SparklesIcon className="h-6 w-6" />}
          title="Projects"
        />

        <div className="animate-fade-up space-y-4">
          {projects.slice(0, 3).map((project, index) => (
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
                priority={index === 0}
                className="h-44 w-full shrink-0 rounded-xl border border-zinc-200 object-cover sm:h-36 sm:w-48"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-sky-600">
                    {project.title}
                  </h3>
                </div>
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

        <div className="animate-fade-up mt-12 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-bold text-zinc-700 transition-all hover:border-sky-400/60 hover:text-sky-600 hover:shadow-lg hover:shadow-sky-400/10"
          >
            View more projects
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <section id="contact" className="mx-auto w-[90%] lg:w-[70%] py-16">
        <SectionHeading icon={<MailIcon className="h-6 w-6" />} title="Contact" />
        <p className="animate-fade-up mb-10 max-w-2xl text-base font-medium text-zinc-600">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>

        <div className="animate-fade-up grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/10">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500">
              <MailIcon className="h-4 w-4 text-sky-500" />
              Contact
            </h3>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 flex items-center gap-2 font-semibold text-sky-600 transition-colors hover:text-sky-500"
            >
              <MailIcon className="h-5 w-5" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="mt-2 flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900"
            >
              <PhoneIcon className="h-5 w-5" />
              {profile.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/10">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500">
              <LinkedInIcon className="h-4 w-4 text-sky-500" />
              Social
            </h3>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-medium text-zinc-600 transition-colors hover:text-sky-600"
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
                <span className="ml-auto text-zinc-400 transition-colors group-hover:text-sky-500">
                  ↗
                </span>
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-medium text-zinc-600 transition-colors hover:text-sky-600"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
                <span className="ml-auto text-zinc-400 transition-colors group-hover:text-sky-500">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-6 text-sm font-medium text-zinc-500 shadow-sm">
            <MapPinIcon className="h-5 w-5" />
            {profile.location}
          </div>
        </div>
      </section>

      <Separator />
    </>
  );
}
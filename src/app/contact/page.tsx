import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
      >
        <div className="absolute left-1/2 top-[-220px] h-[440px] w-[640px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute right-[5%] top-40 h-64 w-64 rounded-full bg-teal-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <h1 className="animate-fade-up text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Get in touch
        </h1>
        <p
          className="animate-fade-up mt-3 max-w-2xl text-zinc-400"
          style={{ animationDelay: "0.08s" }}
        >
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div
              className="animate-fade-up rounded-2xl border border-zinc-800 p-6 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
              style={{ animationDelay: "0.15s" }}
            >
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
                <MailIcon className="h-4 w-4 text-emerald-400" />
                Contact
              </h2>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 flex items-center gap-2 text-emerald-400 transition-colors hover:text-emerald-300"
              >
                <MailIcon className="h-5 w-5" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="mt-2 flex items-center gap-2 text-zinc-300 transition-colors hover:text-zinc-100"
              >
                <PhoneIcon className="h-5 w-5" />
                {profile.phone}
              </a>
            </div>

            <div
              className="animate-fade-up rounded-2xl border border-zinc-800 p-6 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
              style={{ animationDelay: "0.22s" }}
            >
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
                <LinkedInIcon className="h-4 w-4 text-emerald-400" />
                Social
              </h2>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-zinc-300 transition-colors hover:text-emerald-300"
                >
                  <GitHubIcon className="h-5 w-5" />
                  GitHub
                  <span className="ml-auto text-zinc-600 transition-colors group-hover:text-emerald-300">
                    ↗
                  </span>
                </Link>
                <Link
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-zinc-300 transition-colors hover:text-emerald-300"
                >
                  <LinkedInIcon className="h-5 w-5" />
                  LinkedIn
                  <span className="ml-auto text-zinc-600 transition-colors group-hover:text-emerald-300">
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="animate-fade-up flex items-center gap-2 rounded-2xl border border-zinc-800 p-6 text-sm text-zinc-500"
              style={{ animationDelay: "0.29s" }}
            >
              <MapPinIcon className="h-5 w-5" />
              {profile.location}
            </div>
          </div>

          <form
            className="animate-fade-up rounded-2xl border border-zinc-800 p-6 sm:p-8 lg:col-span-3"
            style={{ animationDelay: "0.2s" }}
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project…"
                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:brightness-110"
            >
              <MailIcon className="h-4 w-4" />
              Send message
            </button>
            <p className="mt-3 text-xs text-zinc-600">
              Opens your email app to send the message directly to me.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex w-[70%] flex-col items-center justify-between gap-4 px-0 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={`mailto:${profile.email}`}
            className="text-zinc-500 transition-colors hover:text-sky-600"
            aria-label="Email"
          >
            <MailIcon className="h-5 w-5" />
          </Link>
          <Link
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-sky-600"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </Link>
          <Link
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-sky-600"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
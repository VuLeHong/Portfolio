"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data";
import { FileTextIcon } from "@/components/icons";

const sections = [
  { id: "experience", label: "Experiences" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [flash, setFlash] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onSelect = (id: string) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setFlash(id);
    timer.current = setTimeout(() => setFlash(null), 700);
  };

  const hrefFor = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 w-[90%] items-center justify-between gap-2 lg:w-[70%]">
        <a
          href={pathname === "/" ? "#about" : "/"}
          aria-label="Home"
          className="flex items-center gap-2 font-extrabold text-zinc-900"
        >
          <span className="flex h-9 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 text-base font-bold tracking-tight text-white shadow-lg shadow-sky-400/30 transition-transform hover:scale-105 sm:h-10 sm:w-12 sm:text-xl">
            VLH
          </span>
          <span className="hidden text-lg sm:inline sm:text-xl">
            Le Hong Vu
          </span>
        </a>
        <div className="flex items-center gap-1 sm:gap-4">
          <ul className="flex items-center gap-0.5">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={hrefFor(section.id)}
                  onClick={() => onSelect(section.id)}
                  className={`rounded-full px-2 py-1.5 text-sm font-medium transition-all sm:px-4 sm:py-2 sm:text-base ${
                    flash === section.id
                      ? "bg-sky-400/15 text-sky-700 shadow-sm shadow-sky-400/20"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View CV"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-sm font-bold text-white shadow-md shadow-sky-400/25 transition-all hover:shadow-lg hover:shadow-sky-400/40 hover:brightness-110 sm:h-auto sm:w-auto sm:gap-1.5 sm:px-4 sm:py-2 sm:text-base"
          >
            <FileTextIcon className="h-4 w-4" />
            <span className="hidden sm:inline">CV</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
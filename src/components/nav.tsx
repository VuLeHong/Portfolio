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
      <nav className="mx-auto flex h-16 w-[70%] items-center justify-between">
        <a
          href={pathname === "/" ? "#about" : "/"}
          aria-label="Home"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 text-xl font-extrabold tracking-tight text-white shadow-lg shadow-sky-400/30 transition-transform hover:scale-105"
        >
          V
        </a>
        <div className="flex items-center gap-2 sm:gap-4">
          <ul className="flex items-center gap-0.5">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={hrefFor(section.id)}
                  onClick={() => onSelect(section.id)}
                  className={`rounded-full px-4 py-2 text-base font-medium transition-all ${
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
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-sky-400/25 transition-all hover:shadow-lg hover:shadow-sky-400/40 hover:brightness-110 sm:text-base"
          >
            <FileTextIcon className="h-4 w-4" />
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
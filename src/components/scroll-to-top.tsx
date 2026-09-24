"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/icons";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-lg shadow-zinc-900/10 transition-all hover:-translate-y-1 hover:border-sky-400/60 hover:text-sky-600 hover:shadow-xl hover:shadow-sky-400/25"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
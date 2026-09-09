"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? "bg-white shadow-lg ring-1 ring-brand-900/5"
          : "px-3 pt-3 sm:px-5"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-all ${
          scrolled
            ? "py-2.5"
            : "rounded-2xl bg-white px-5 py-2.5 shadow-md ring-1 ring-brand-900/5"
        }`}
      >
        <a href="#top" aria-label="Gold Hill Luxe Tour and Travel — home">
          <Image
            src="/logo.webp"
            alt="Gold Hill Luxe Tour and Travel"
            width={322}
            height={160}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-brand-900/70 transition hover:text-brand-600"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            <span aria-hidden>✆</span> {site.phoneDisplay}
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-900 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="container-x mt-2 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-brand-900/5 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-brand-900/75"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:${site.phone}`}
              className="mt-2 rounded-full bg-brand-700 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

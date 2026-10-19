"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage, languages } from "@/app/context/language";

export function LangSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full bg-[#F3F1EC] p-1 ml-1" role="group" aria-label="Language">
      {languages.map((l) => (
        <button
          key={l.key}
          onClick={() => setLang(l.key)}
          aria-pressed={lang === l.key}
          style={{ fontFamily: "var(--font-geist-mono)" }}
          className={`cursor-none rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wider transition-all ${
            lang === l.key
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-neutral-400 hover:text-neutral-900"
          }`}
        >
          {l.code}
        </button>
      ))}
    </div>
  );
}

interface NavbarProps {
  activeHref?: string;
  nav: { home: string; work: string; about: string };
}

export function Navbar({ nav, activeHref }: NavbarProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<"home" | "work">("home");

  // Scroll-based section detection (only on homepage)
  useEffect(() => {
    if (pathname !== "/") return;
    const workEl = document.getElementById("work");
    if (!workEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActiveSection(entry.isIntersecting ? "work" : "home");
      },
      { threshold: 0.15 }
    );
    observer.observe(workEl);
    return () => observer.disconnect();
  }, [pathname]);

  const links = [
    { href: "/", label: nav.home, key: "home" },
    { href: "/#work", label: nav.work, key: "work" },
    { href: "/about", label: nav.about, key: "about" },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2 px-3 py-2.5">
        {links.map(({ href, label, key }) => {
          let isActive = false;
          if (key === "about") {
            isActive = pathname === "/about";
          } else if (pathname === "/") {
            isActive = key === activeSection;
          }
          return (
            <Link
              key={href}
              href={href}
              style={{ fontFamily: "var(--font-geist-mono)" }}
              className={`transition-colors cursor-none w-[88px] py-2 text-center rounded-full text-[12px] font-medium tracking-wider uppercase ${
                isActive
                  ? "bg-[#F3F1EC] text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {label}
            </Link>
          );
        })}
        <LangSwitcher />
      </div>
    </nav>
  );
}

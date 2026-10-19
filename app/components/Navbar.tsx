"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, languages } from "@/app/context/language";

export function LangSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center bg-[#F3F1EC] p-1 ml-1" role="group" aria-label="Language">
      {languages.map((l) => (
        <button
          key={l.key}
          onClick={() => setLang(l.key)}
          aria-pressed={lang === l.key}
          style={{ fontFamily: "var(--font-geist-mono)" }}
          className={`cursor-none px-3 py-2 text-[11px] font-medium tracking-wider transition-colors ${
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
  nav?: { home: string; work: string; about: string };
}

const LABELS = {
  en: { work: "Work", playground: "Playground", about: "About" },
  zh: { work: "作品", playground: "游乐场", about: "关于" },
} as const;

export function Navbar(_props: NavbarProps) {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const t = LABELS[lang === "zh" ? "zh" : "en"];

  const links = [
    { href: "/", label: t.work, active: pathname === "/" || (pathname.startsWith("/work/") && pathname !== "/work/art") },
    { href: "/work/art", label: t.playground, active: pathname === "/work/art" },
    { href: "/about", label: t.about, active: pathname === "/about" },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-1 p-1.5 bg-[#F8F7F4]/85 backdrop-blur-md">
        {links.map(({ href, label, active }) => (
          <Link
            key={href}
            href={href}
            style={{ fontFamily: "var(--font-geist-mono)" }}
            className={`transition-colors cursor-none w-[112px] py-2 text-center text-[12px] font-medium tracking-wider uppercase ${
              active
                ? "bg-[#F3F1EC] text-neutral-900"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            {label}
          </Link>
        ))}
        <LangSwitcher />
      </div>
    </nav>
  );
}

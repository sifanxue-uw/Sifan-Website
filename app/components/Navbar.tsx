"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage, languages } from "@/app/context/language";

export function LangSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find(l => l.key === lang)!;

  // 点击外部关闭
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* 触发按钮 */}
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 hover:bg-white transition-all shadow-sm"
      >
        <div className="flex items-center text-neutral-500">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
        <span className="text-xs font-semibold text-neutral-700 tracking-widest">{current.code}</span>
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          className={`text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* 下拉菜单 */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-neutral-100 rounded-2xl shadow-xl overflow-hidden z-50 py-1">
          {languages.map((l) => (
            <button
              key={l.key}
              onClick={() => { setLang(l.key); setOpen(false); }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors
                ${lang === l.key
                  ? "bg-neutral-900 text-white"
                  : "hover:bg-neutral-50 text-neutral-600"
                }`}
            >
              <span>{l.label}</span>
              <span className={`text-xs font-mono ${lang === l.key ? "text-neutral-300" : "text-neutral-400"}`}>{l.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface NavbarProps {
  activeHref?: string;
  nav: { home: string; work: string; about: string };
}

export function Navbar({ nav, activeHref }: NavbarProps) {
  const pathname = usePathname();
  const { lang } = useLanguage();
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
    <nav className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-neutral-100/90 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.08)] border border-neutral-200/70 pl-2 pr-2 py-1.5">
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
              className={`transition-colors cursor-none px-3.5 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase ${
                isActive
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {label}
            </Link>
          );
        })}
        <LangSwitcher />
      </div>
      <Link href="/" className="pointer-events-auto absolute left-6 top-4 hidden md:flex items-center cursor-none h-[44px]">
        <Image src="/logo-transparent.png" alt="Sifan" width={170} height={170} className="object-contain h-[170px] w-[170px] shrink-0 -my-16 -ml-12 -mr-6" />
        <span
          style={{ fontFamily: "var(--font-cormorant)" }}
          className="text-2xl font-medium tracking-wide text-neutral-800 leading-none"
        >
          {lang === "zh" ? "薛斯凡" : "Sifan Xue"}
        </span>
      </Link>
    </nav>
  );
}

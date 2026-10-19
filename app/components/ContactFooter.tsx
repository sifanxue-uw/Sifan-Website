"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/language";

const text = {
  en: {
    quote: "Open to collaborations, internships, and new opportunities.",
    made: "Designed & built by Sifan",
    sayHi: "Get in touch",
    page: "Page",
    email: "Email",
    copied: "Copied!",
    resume: "Resume",
    work: "Work",
    playground: "Playground",
    about: "About",
  },
  zh: {
    quote: "欢迎合作项目、实习机会以及一切可能的连接。",
    made: "由 Sifan 设计并开发",
    sayHi: "联系我",
    page: "页面",
    email: "邮箱",
    copied: "已复制！",
    resume: "简历",
    work: "作品",
    playground: "游乐场",
    about: "关于",
  },
} as const;

function useClock(tz: string) {
  const [state, setState] = useState({ time: "", gmt: "" });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", { timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
      const gmt = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "shortOffset" })
        .formatToParts(now)
        .find((p) => p.type === "timeZoneName")?.value ?? "";
      setState({ time, gmt });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tz]);
  return state;
}

const mono = { fontFamily: "var(--font-geist-mono)" } as const;
const heading = "text-[11px] tracking-wider uppercase text-white font-medium mb-5";
const link = "footer-link block w-fit text-[11px] tracking-wider uppercase text-white/40 transition-colors duration-200 cursor-none py-1.5";
const EMAIL = "sifanxuecreate@gmail.com";
const WECHAT = "TONYXUE020711";

function CopyItem({ value, label, copiedLabel }: { value: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button type="button" onClick={copy} className={link + " group/copy flex items-center gap-2 text-left"} aria-label={value}>
      <span>{copied ? copiedLabel : label}</span>
      <svg
        width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={"transition-opacity duration-200 " + (copied ? "opacity-100" : "opacity-0 group-hover/copy:opacity-100")}
      >
        {copied ? (
          <polyline points="20 6 9 17 4 12" />
        ) : (
          <>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </>
        )}
      </svg>
    </button>
  );
}

function Pitch() {
  return (
    <>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <g fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="2">
          <line x1="860" y1="0" x2="860" y2="600" />
          <circle cx="860" cy="300" r="150" />
        </g>
        <circle cx="860" cy="300" r="5" fill="rgba(255,255,255,0.12)" />
      </svg>
      <svg className="absolute left-0 bottom-0 w-full pointer-events-none" height="84" aria-hidden>
        <defs>
          <pattern id="blades" width="132" height="84" patternUnits="userSpaceOnUse">
            <g fill="none" strokeLinecap="round">
              <path d="M6 84 Q8 40 2 22" stroke="#4E8F5F" strokeOpacity="0.55" strokeWidth="2" />
              <path d="M18 84 Q14 52 22 36" stroke="#6FB07F" strokeOpacity="0.4" strokeWidth="1.6" />
              <path d="M31 84 Q33 30 44 8" stroke="#3F7A50" strokeOpacity="0.6" strokeWidth="2.2" />
              <path d="M46 84 Q44 58 38 46" stroke="#6FB07F" strokeOpacity="0.35" strokeWidth="1.4" />
              <path d="M60 84 Q64 44 76 30" stroke="#4E8F5F" strokeOpacity="0.5" strokeWidth="2" />
              <path d="M74 84 Q72 24 62 4" stroke="#3F7A50" strokeOpacity="0.55" strokeWidth="2.2" />
              <path d="M88 84 Q92 56 100 44" stroke="#6FB07F" strokeOpacity="0.4" strokeWidth="1.6" />
              <path d="M102 84 Q98 36 108 14" stroke="#4E8F5F" strokeOpacity="0.55" strokeWidth="2" />
              <path d="M116 84 Q118 50 112 38" stroke="#6FB07F" strokeOpacity="0.35" strokeWidth="1.4" />
              <path d="M126 84 Q130 60 128 48" stroke="#3F7A50" strokeOpacity="0.5" strokeWidth="1.8" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="84" fill="url(#blades)" />
      </svg>
    </>
  );
}

export function ContactFooter() {
  const { lang } = useLanguage();
  const t = text[lang === "zh" ? "zh" : "en"];
  const seattle = useClock("America/Los_Angeles");
  const beijing = useClock("Asia/Shanghai");

  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-6 pt-20 pb-28"
      style={{
        backgroundColor: "#17331F",
        backgroundImage: "repeating-linear-gradient(90deg, #17331F 0, #17331F 96px, #1B3A25 96px, #1B3A25 192px)",
        ...mono,
      }}
    >
      <Pitch />
      <style>{`
        .footer-col:hover > .footer-link:not(:hover) { color: rgba(255,255,255,0.18); }
        .footer-link:hover { color: #fff; }
      `}</style>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-12 md:gap-8">
          {/* Left — statement */}
          <div>
            <p
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: lang === "zh" ? "normal" : "italic" }}
              className="text-white text-3xl md:text-4xl leading-snug max-w-sm"
            >
              {t.quote}
            </p>
            <p className="mt-5 text-[11px] tracking-wider uppercase text-white">{t.made}</p>
          </div>

          {/* Say hi */}
          <div className="footer-col">
            <p className={heading}>{t.sayHi}</p>
            <CopyItem value={EMAIL} label={t.email} copiedLabel={t.copied} />
            <a href="https://linkedin.com/in/sifan-xue-8b2503280" target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
            <a href="https://github.com/sifanxue-uw" target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
            <a href="https://www.instagram.com/tonyxxue?igsh=NHp0ZjBpc2YzZDF1&utm_source=qr" target="_blank" rel="noopener noreferrer" className={link}>Instagram</a>
            <CopyItem value={WECHAT} label={"WeChat · " + WECHAT} copiedLabel={t.copied} />
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={link}>{t.resume}</a>
          </div>

          {/* Page */}
          <div className="footer-col">
            <p className={heading}>{t.page}</p>
            <a href="/" className={link}>{t.work}</a>
            <a href="/work/art" className={link}>{t.playground}</a>
            <a href="/about" className={link}>{t.about}</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-wider uppercase">
          <p className="text-white/40">© 2026 Sifan Xue</p>
          <p className="text-white/40">
            Seattle {seattle.gmt} {seattle.time || "--:--:--"} <span className="mx-2">/</span> Beijing {beijing.gmt} {beijing.time || "--:--:--"}
          </p>
        </div>
      </div>
    </footer>
  );
}

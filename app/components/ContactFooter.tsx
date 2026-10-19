"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/language";

const text = {
  en: {
    quote: "Open to collaborations, internships, and new opportunities.",
    made: "Designed & built by Sifan",
    sayHi: "Say hi",
    page: "Page",
    email: "Email",
    resume: "Resume",
    home: "Home",
    work: "Work",
    about: "About",
  },
  zh: {
    quote: "欢迎合作项目、实习机会以及一切可能的连接。",
    made: "由 Sifan 设计并开发",
    sayHi: "打个招呼",
    page: "页面",
    email: "邮箱",
    resume: "简历",
    home: "首页",
    work: "作品",
    about: "关于",
  },
} as const;

function useClock(tz: string) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", { timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, [tz]);
  return time;
}

const mono = { fontFamily: "var(--font-geist-mono)" } as const;
const heading = "text-[11px] tracking-wider uppercase text-white font-medium mb-5";
const link = "block text-[11px] tracking-wider uppercase text-white/40 hover:text-white transition-colors cursor-none py-1.5";

export function ContactFooter() {
  const { lang } = useLanguage();
  const t = text[lang === "zh" ? "zh" : "en"];
  const seattle = useClock("America/Los_Angeles");
  const beijing = useClock("Asia/Shanghai");

  return (
    <footer id="contact" className="px-6 pt-20 pb-8" style={{ backgroundColor: "#1C1917", ...mono }}>
      <div className="max-w-5xl mx-auto">
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
          <div>
            <p className={heading}>{t.sayHi}</p>
            <a href="mailto:sifanxuecreate@gmail.com" className={link}>{t.email}</a>
            <a href="https://linkedin.com/in/sifan-xue-8b2503280" target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
            <a href="https://github.com/sifanxue-uw" target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
            <a href="https://www.instagram.com/tonyxxue?igsh=NHp0ZjBpc2YzZDF1&utm_source=qr" target="_blank" rel="noopener noreferrer" className={link}>Instagram</a>
            <span className={link + " hover:text-white/40"}>WeChat · TONYXUE020711</span>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={link}>{t.resume}</a>
          </div>

          {/* Page */}
          <div>
            <p className={heading}>{t.page}</p>
            <a href="/" className={link}>{t.home}</a>
            <a href="/#work" className={link}>{t.work}</a>
            <a href="/about" className={link}>{t.about}</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-wider uppercase">
          <p className="text-white/40">© 2026 Sifan Xue</p>
          <p className="text-white/40">
            Seattle {seattle || "--:--:--"} <span className="mx-2">/</span> Beijing {beijing || "--:--:--"}
          </p>
        </div>
      </div>
    </footer>
  );
}

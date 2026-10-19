"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/context/language";

const text = {
  en: {
    quote: "Open to collaborations, internships, and new opportunities.",
    made: "Designed & built by Sifan",
    sayHi: "Get in touch:>",
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
    sayHi: "联系我:>",
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

const GRASS = "#8FBF6A";
const TUFTS = [
  { x: "9%", y: "66%", g: "^^^", c: GRASS },
  { x: "22%", b: "22px", g: "\\ |/", c: GRASS },
  { x: "36%", y: "74%", g: "^^^", c: GRASS },
  { x: "47%", b: "16px", g: "\\|/", c: GRASS },
  { x: "58%", y: "58%", g: "^^^", c: GRASS },
  { x: "66%", b: "30px", g: "\\ |/", c: GRASS },
  { x: "84%", y: "60%", g: "\\ |/", c: GRASS },
  { x: "90%", b: "20px", g: "^^^", c: GRASS },
  { x: "95%", y: "44%", g: "\\|/", c: GRASS },
];

function MuLogo() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const full = document.createElement("canvas");
      full.width = w;
      full.height = h;
      const ctx = full.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, w, h);
      const px = data.data;
      const br = px[0], bg = px[1], bb = px[2];
      let minX = w, minY = h, maxX = 0, maxY = 0;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          const d = Math.max(Math.abs(px[i] - br), Math.abs(px[i + 1] - bg), Math.abs(px[i + 2] - bb));
          const a = Math.min(1, Math.max(0, (d - 6) / 18));
          px[i + 3] = Math.round(px[i + 3] * a);
          if (a > 0.5) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }
      ctx.putImageData(data, 0, 0);
      const out = ref.current;
      if (!out || maxX <= minX) return;
      out.width = maxX - minX + 1;
      out.height = maxY - minY + 1;
      out.getContext("2d")?.drawImage(full, minX, minY, out.width, out.height, 0, 0, out.width, out.height);
    };
    img.src = "/mu-logo.png";
  }, []);

  return <canvas ref={ref} aria-hidden style={{ height: 132, width: "auto", display: "block" }} />;
}

const KICKOFF_X = "72%";

function Pitch() {
  const [hot, setHot] = useState(false);

  return (
    <>
      <div
        aria-hidden
        className="absolute top-0 bottom-0 w-px pointer-events-none"
        style={{ left: KICKOFF_X, backgroundColor: "rgba(255,255,255,0.09)" }}
      />
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{ left: KICKOFF_X, top: "50%", width: 300, height: 300, transform: "translate(-50%, -50%)", border: "2px solid rgba(255,255,255,0.09)" }}
      />
      <div
        aria-hidden
        onMouseEnter={() => setHot(true)}
        onMouseLeave={() => setHot(false)}
        className="absolute z-20 hidden md:flex items-center justify-center"
        style={{ left: KICKOFF_X, top: "50%", width: 56, height: 56, transform: "translate(-50%, -50%)" }}
      >
        <span
          className="block rounded-full transition-all duration-300"
          style={{
            width: hot ? 14 : 10,
            height: hot ? 14 : 10,
            backgroundColor: hot ? "#E5202E" : "rgba(255,255,255,0.14)",
            boxShadow: hot ? "0 0 0 6px rgba(229,32,46,0.18)" : "none",
          }}
        />
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 pointer-events-none flex flex-col items-center transition-all duration-500 ease-out"
        style={{
          left: KICKOFF_X,
          transform: `translate(-50%, ${hot ? "0%" : "110%"})`,
          opacity: hot ? 1 : 0,
        }}
      >
        <MuLogo />
        <p
          className="mt-2 mb-4 select-none text-[13px] font-medium tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-geist-mono)", color: "#E5202E" }}
        >
          GGMU
        </p>
      </div>

      <style>{`
        @keyframes flame-flicker {
          0%   { transform: scale(1, 1) translateY(0); opacity: 0.8; }
          50%  { transform: scale(1.05, 1.35) translateY(-2px) skewX(-4deg); opacity: 1; }
          100% { transform: scale(0.95, 1.2) translateY(-1px) skewX(4deg); opacity: 0.9; }
        }
      `}</style>
      {TUFTS.map((t, i) => (
        <pre
          key={i}
          aria-hidden
          className="absolute pointer-events-none select-none m-0 text-[10px] leading-[1.1]"
          style={{
            left: t.x,
            top: "y" in t ? t.y : undefined,
            bottom: "b" in t ? t.b : undefined,
            color: hot ? (i % 2 ? "#FF6A2A" : "#E5202E") : t.c,
            opacity: hot ? 1 : 0.75,
            fontFamily: "var(--font-geist-mono)",
            fontWeight: hot ? 700 : 400,
            textShadow: hot ? "0 0 6px rgba(255,90,40,0.95), 0 -5px 12px rgba(255,150,40,0.65)" : "none",
            transformOrigin: "50% 100%",
            transition: "color 0.35s ease, text-shadow 0.35s ease",
            transitionDelay: hot ? `${i * 70}ms` : "0ms",
            animation: hot ? `flame-flicker ${0.45 + (i % 4) * 0.13}s ease-in-out ${i * 70}ms infinite alternate` : "none",
          }}
        >
          {t.g}
        </pre>
      ))}
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
      className="relative overflow-hidden px-6 pt-20 pb-48"
      style={{ backgroundColor: "#1C1917", ...mono }}
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
            <CopyItem value={WECHAT} label={"WeChat: " + WECHAT} copiedLabel={t.copied} />
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

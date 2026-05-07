"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage, type LangKey } from "@/app/context/language";

function AnimatedSmiley() {
  return (
    <>
      <style>{`
        @keyframes dot-rise {
          0%, 25%  { transform: translateY(0);    opacity: 1; }
          50%, 75% { transform: translateY(-0.38em); opacity: 1; }
          100%     { transform: translateY(0);    opacity: 1; }
        }
        @keyframes dot2-appear {
          0%, 30%  { opacity: 0; transform: translateY(0); }
          55%, 75% { opacity: 1; transform: translateY(0); }
          90%, 100%{ opacity: 0; transform: translateY(0); }
        }
        @keyframes paren-appear {
          0%, 35%  { opacity: 0; transform: translateX(-6px); }
          60%, 75% { opacity: 1; transform: translateX(0); }
          90%, 100%{ opacity: 0; transform: translateX(-6px); }
        }
        @keyframes dot-bob {
          0%, 100% { transform: translateY(-0.38em) scale(1); }
          50%      { transform: translateY(-0.42em) scale(1.15); }
        }
        .smiley-wrap { display: inline-flex; align-items: flex-end; line-height: 1; position: relative; }
        .dot-period  {
          display: inline-block;
          width: 0.13em; height: 0.13em;
          border-radius: 50%;
          background: currentColor;
          margin-bottom: 0.05em;
          animation: dot-rise 4s ease-in-out infinite;
        }
        .dot-second  {
          display: inline-block;
          width: 0.13em; height: 0.13em;
          border-radius: 50%;
          background: currentColor;
          position: absolute;
          left: 0;
          bottom: 0.05em;
          animation: dot2-appear 4s ease-in-out infinite;
        }
        .paren-char  {
          display: inline-block;
          animation: paren-appear 4s ease-in-out infinite;
          margin-left: 0.05em;
          font-style: normal;
          line-height: 1;
        }
      `}</style>
      <span className="smiley-wrap ml-1">
        <span style={{ position: 'relative', display: 'inline-block', width: '0.13em' }}>
          <span className="dot-period" />
          <span className="dot-second" />
        </span>
        <span className="paren-char">)</span>
      </span>
    </>
  );
}

const content: Record<LangKey, {
  eyebrow: string;
  available: string;
  title: string;
  sub: string;
  resume: string;
  photoAlt: string;
}> = {
  en: {
    eyebrow: "Get in touch",
    available: "Available for opportunities",
    title: "Let's work together",
    sub: "Open to collaborations, internships, and new opportunities.",
    resume: "View Resume",
    photoAlt: "Sifan Xue",
  },
  zh: {
    eyebrow: "联系我",
    available: "正在寻找新机会",
    title: "期待与你共同创造",
    sub: "欢迎合作项目、实习机会以及一切可能的连接。",
    resume: "查看简历",
    photoAlt: "薛斯凡",
  },
  es: {
    eyebrow: "Contáctame",
    available: "Disponible para oportunidades",
    title: "Creemos algo juntos",
    sub: "Abierta a colaboraciones, prácticas y nuevas oportunidades.",
    resume: "Ver CV",
    photoAlt: "Sifan Xue",
  },
  ko: {
    eyebrow: "연락하기",
    available: "새로운 기회를 찾고 있습니다",
    title: "함께 만들어 나가요",
    sub: "협업, 인턴십, 새로운 기회 모두 환영합니다.",
    resume: "이력서 보기",
    photoAlt: "Sifan Xue",
  },
  ja: {
    eyebrow: "お問い合わせ",
    available: "新しい機会を探しています",
    title: "一緒に作りましょう",
    sub: "コラボレーション・インターンシップ・新しい機会を歓迎します。",
    resume: "履歴書を見る",
    photoAlt: "Sifan Xue",
  },
};

export function ContactFooter() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: "#1C1917" }}>
        <div className="max-w-5xl mx-auto">

          {/* Top — availability + heading */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <p className="text-xs text-white/60 tracking-widest uppercase">{t.available}</p>
            </div>
            <h2
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-6xl md:text-8xl font-medium leading-none tracking-tight text-white"
            >
              {t.title}<AnimatedSmiley />
            </h2>
          </div>

          {/* Bottom — photo + info */}
          <div className="flex flex-col md:flex-row md:items-start gap-10">

            {/* Photo */}
            <div className="flex-shrink-0 md:w-52">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src="/contact-photo.jpg"
                    alt={t.photoAlt}
                    width={208}
                    height={277}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                    unoptimized
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-white/20">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <p className="text-xs tracking-widest uppercase">Photo</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right — sub + resume + contact grid */}
            <div className="flex-1 flex flex-col gap-8">

              {/* Sub + resume */}
              <div className="flex flex-col gap-5">
                <p className="text-white/70 text-sm leading-relaxed max-w-xs">{t.sub}</p>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-[#1C1917] transition-all w-fit"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                  {t.resume}
                </a>
              </div>

              {/* Contact items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">

              {/* Email */}
              <a
                href="mailto:sifanxuecreate@gmail.com"
                className="group flex items-center gap-3 text-white hover:text-white/70 transition-colors text-sm font-medium"
              >
                <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                </span>
                sifanxuecreate@gmail.com
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-white text-sm font-medium">
                <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </span>
                Seattle, WA 98105
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-white text-sm font-medium">
                <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+17348829867" className="hover:text-white/70 transition-colors">+1 734 882 9867</a>
                  <a href="tel:+8618606206461" className="text-white/60 font-normal hover:text-white transition-colors">+86 186 0620 6461</a>
                </div>
              </div>

              {/* WeChat */}
              <div className="flex items-center gap-3 text-white text-sm font-medium">
                <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 17.09 24 15.505c0-3.23-2.959-5.647-7.062-5.647zm-3.076 3.044c.568 0 1.027.461 1.027 1.03 0 .568-.46 1.027-1.027 1.027-.567 0-1.026-.459-1.026-1.027 0-.569.46-1.03 1.026-1.03zm5.318 0c.568 0 1.027.461 1.027 1.03 0 .568-.46 1.027-1.027 1.027-.567 0-1.026-.459-1.026-1.027 0-.569.46-1.03 1.026-1.03z"/>
                  </svg>
                </span>
                WeChat: <span className="text-white/60 font-normal ml-1">TONYXUE020711</span>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                <a href="https://github.com/sifanxue-uw"
                  target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/tonyxxue?igsh=NHp0ZjBpc2YzZDF1&utm_source=qr"
                  target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/sifan-xue-8b2503280"
                  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              </div>{/* end contact grid */}
            </div>{/* end right col */}
          </div>{/* end bottom row */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-white/10" style={{ backgroundColor: "#1C1917" }}>
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p className="text-white/60 text-xs tracking-widest uppercase">© 2026 Sifan Xue</p>
          <p className="text-white/40 text-xs">Designed & built by Sifan</p>
        </div>
      </footer>
    </>
  );
}

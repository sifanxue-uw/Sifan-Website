"use client";

import { useEffect, useRef, ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type LangKey = "en" | "zh" | "es" | "ko" | "ja";

const languages: { key: LangKey; label: string; flag: string }[] = [
  { key: "en", label: "English", flag: "🇺🇸" },
  { key: "zh", label: "中文", flag: "🇨🇳" },
  { key: "es", label: "Español", flag: "🇪🇸" },
  { key: "ko", label: "한국어", flag: "🇰🇷" },
  { key: "ja", label: "日本語", flag: "🇯🇵" },
];

const content: Record<LangKey, {
  nav: { home: string; work: string; about: string };
  hero: { tag: string; line1: string; line2: string; line3: string; sub: string; cta1: string; cta2: string };
  work: { tag: string; title: string; projects: { title: string; desc: string; tag: string }[] };
  contact: { title: string; firstName: string; lastName: string; email: string; message: string; send: string };
  footer: { tagline: string };
}> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About" },
    hero: {
      tag: "UX Designer & Researcher",
      line1: "Hi, I'm Sifan.",
      line2: "I design experiences",
      line3: "people love to use.",
      sub: "I craft clean, intuitive interfaces that sit at the intersection of form and function.",
      cta1: "View Work",
      cta2: "Get in Touch",
    },
    work: {
      tag: "Work",
      title: "Selected Projects",
      projects: [
        { title: "Project Two", desc: "Design system built for a SaaS product used by 50k+ users.", tag: "Web · Design System" },
        { title: "Project Three", desc: "End-to-end UX research and redesign of a checkout flow.", tag: "E-commerce · Research" },
        { title: "Project Four", desc: "Dashboard for data visualization with accessibility in mind.", tag: "Dashboard · A11y" },
      ],
    },
    contact: {
      title: "Let's get in touch!",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      message: "Message",
      send: "SEND",
    },
    footer: { tagline: "Let's build thoughtful experiences together." },
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    hero: {
      tag: "UX 设计师 & 研究员",
      line1: "你好，我是薛斯凡。",
      line2: "我设计让人",
      line3: "爱不释手的体验。",
      sub: "我专注于打造简洁直观的界面，让形式与功能在此交汇。",
      cta1: "查看作品",
      cta2: "联系我",
    },
    work: {
      tag: "作品",
      title: "精选项目",
      projects: [
        { title: "项目二", desc: "为一款拥有 5 万+ 用户的 SaaS 产品构建的设计系统。", tag: "网页 · 设计系统" },
        { title: "项目三", desc: "对结账流程进行端到端 UX 研究与重新设计。", tag: "电商 · 研究" },
        { title: "项目四", desc: "以无障碍为核心的数据可视化仪表盘设计。", tag: "仪表盘 · 无障碍" },
      ],
    },
    contact: {
      title: "欢迎联系我！",
      firstName: "名",
      lastName: "姓",
      email: "邮箱",
      message: "留言",
      send: "发送",
    },
    footer: { tagline: "一起打造有温度的设计体验。" },
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    hero: {
      tag: "Diseñadora UX & Investigadora",
      line1: "Hola, soy Sifan.",
      line2: "Diseño experiencias que",
      line3: "la gente ama usar.",
      sub: "Creo interfaces limpias e intuitivas en la intersección entre forma y función.",
      cta1: "Ver trabajo",
      cta2: "Contáctame",
    },
    work: {
      tag: "Trabajo",
      title: "Proyectos seleccionados",
      projects: [
        { title: "Proyecto Dos", desc: "Sistema de diseño para un producto SaaS con más de 50k usuarios.", tag: "Web · Sistema de diseño" },
        { title: "Proyecto Tres", desc: "Investigación UX y rediseño del flujo de pago.", tag: "E-commerce · Investigación" },
        { title: "Proyecto Cuatro", desc: "Dashboard de visualización de datos con accesibilidad.", tag: "Dashboard · Accesibilidad" },
      ],
    },
    contact: {
      title: "¡Hablemos!",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo",
      message: "Mensaje",
      send: "ENVIAR",
    },
    footer: { tagline: "Construyamos experiencias con propósito." },
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    hero: {
      tag: "UX 디자이너 & 연구원",
      line1: "안녕하세요, 저는 Sifan입니다.",
      line2: "사람들이 사랑하는",
      line3: "경험을 디자인합니다.",
      sub: "형태와 기능의 교차점에서 깔끔하고 직관적인 인터페이스를 만듭니다.",
      cta1: "작업 보기",
      cta2: "연락하기",
    },
    work: {
      tag: "작업",
      title: "선별된 프로젝트",
      projects: [
        { title: "프로젝트 2", desc: "5만 명 이상이 사용하는 SaaS 제품을 위한 디자인 시스템.", tag: "웹 · 디자인 시스템" },
        { title: "프로젝트 3", desc: "결제 흐름의 엔드투엔드 UX 연구 및 재설계.", tag: "이커머스 · 연구" },
        { title: "프로젝트 4", desc: "접근성을 고려한 데이터 시각화 대시보드.", tag: "대시보드 · 접근성" },
      ],
    },
    contact: {
      title: "함께 이야기해요!",
      firstName: "이름",
      lastName: "성",
      email: "이메일",
      message: "메시지",
      send: "보내기",
    },
    footer: { tagline: "함께 의미 있는 경험을 만들어 봐요." },
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    hero: {
      tag: "UXデザイナー & リサーチャー",
      line1: "こんにちは、Sifanです。",
      line2: "人々が愛して使う",
      line3: "体験をデザインします。",
      sub: "形と機能の交差点で、シンプルで直感的なインターフェースを作っています。",
      cta1: "作品を見る",
      cta2: "お問い合わせ",
    },
    work: {
      tag: "作品",
      title: "厳選プロジェクト",
      projects: [
        { title: "プロジェクト2", desc: "5万人以上が使うSaaS製品のデザインシステム。", tag: "Web · デザインシステム" },
        { title: "プロジェクト3", desc: "チェックアウトフローのUXリサーチと再設計。", tag: "EC · リサーチ" },
        { title: "プロジェクト4", desc: "アクセシビリティを意識したデータ可視化ダッシュボード。", tag: "ダッシュボード · アクセシビリティ" },
      ],
    },
    contact: {
      title: "お気軽にご連絡を！",
      firstName: "名",
      lastName: "姓",
      email: "メール",
      message: "メッセージ",
      send: "送信",
    },
    footer: { tagline: "一緒に思いやりある体験を作りましょう。" },
  },
};

// Language menu
function LangMenu({ lang, setLang }: { lang: LangKey; setLang: (l: LangKey) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find(l => l.key === lang)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs tracking-widest border border-neutral-300 rounded-full px-3 py-1.5 hover:border-neutral-900 hover:text-neutral-900 transition-all cursor-none"
      >
        <span>{current.flag}</span>
        <span className="uppercase">{current.key}</span>
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-neutral-100 rounded-2xl shadow-xl overflow-hidden z-50 py-1">
          {languages.map((l) => (
            <button
              key={l.key}
              onClick={() => { setLang(l.key); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left transition-colors cursor-none
                ${lang === l.key ? "bg-neutral-900 text-white" : "hover:bg-neutral-50 text-neutral-700"}`}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Grain overlay
function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

// Custom cursor
function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[200] w-1.5 h-1.5 bg-neutral-900 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[199] w-8 h-8 border border-neutral-400 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      />
    </>
  );
}

// Reveal text animation
function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("revealed");
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        ref={ref}
        style={{
          transform: "translateY(100%)",
          opacity: 0,
          transition: `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.9s ease ${delay}ms`,
        }}
        className="reveal-item"
      >
        {children}
      </div>
      <style>{`
        .reveal-item.revealed {
          transform: translateY(0%) !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

// Fade in
function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-6");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="opacity-0 translate-y-6 transition-all duration-700 ease-out">
      {children}
    </div>
  );
}

// Magnetic button
function MagneticButton({ children, className, href }: { children: ReactNode; className?: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    };

    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), background 0.2s, border 0.2s" }}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [lang, setLang] = useState<LangKey>("en");
  const t = content[lang];

  return (
    <>
      <Grain />
      <Cursor />
      <main className="min-h-screen bg-white text-neutral-900 font-sans cursor-none">

        {/* Nav */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
          <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo-transparent.png" alt="Sifan" width={72} height={72} className="object-contain" />
              <span className="font-semibold tracking-tight text-base">Sifan Xue</span>
            </Link>
            <div className="flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-neutral-500">
              <Link href="/" className="hover:text-neutral-900 transition-colors">{t.nav.home}</Link>
              <a href="#work" className="hover:text-neutral-900 transition-colors">{t.nav.work}</a>
              <Link href="/about" className="hover:text-neutral-900 transition-colors">{t.nav.about}</Link>
              <LangMenu lang={lang} setLang={setLang} />
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-40 pb-32 px-6 max-w-5xl mx-auto">
          <Reveal delay={0}>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mb-6">{t.hero.tag}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-7xl font-bold tracking-tight leading-tight mb-8">
              {t.hero.line1}<br />
              <span className="text-neutral-400">{t.hero.line2}</span><br />
              {t.hero.line3}
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-2xl text-neutral-500 max-w-xl leading-relaxed mb-12">
              {t.hero.sub}
            </p>
          </Reveal>
          <FadeIn delay={600}>
            <div className="flex gap-4">
              <MagneticButton
                href="#work"
                className="px-6 py-3 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700"
              >
                {t.hero.cta1}
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="px-6 py-3 border border-neutral-200 text-sm rounded-full hover:border-neutral-400"
              >
                {t.hero.cta2}
              </MagneticButton>
            </div>
          </FadeIn>
        </section>

        {/* Work */}
        <section id="work" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">{t.work.tag}</p>
              <h2 className="text-4xl font-bold tracking-tight mb-16">{t.work.title}</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0}>
                <a href="/work/soccergoat" className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-none bg-white block">
                  <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative group-hover:brightness-105 transition-all">
                    <Image src="/soccergoat-cover-v3.png" alt="SoccerGOAT" fill className="object-cover" />
                  </div>
                  <p className="text-xs text-neutral-400 mb-2">Mobile App · Product Design · UX Research</p>
                  <h3 className="text-xl font-semibold mb-2">SoccerGOAT</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {lang === "en"
                      ? "A soccer companion app and physical display device designed to bring North American fans closer to the beautiful game."
                      : "一款足球伴侣应用与实体展示设备，让北美球迷与美丽的足球运动更近一步。"}
                  </p>
                </a>
              </FadeIn>
              {t.work.projects.map((project, i) => (
                <FadeIn key={project.title} delay={(i + 1) * 100}>
                  <div className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-none bg-white">
                    <div className="w-full h-48 bg-neutral-100 rounded-xl mb-6 group-hover:bg-neutral-200 transition-colors" />
                    <p className="text-xs text-neutral-400 mb-2">{project.tag}</p>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 bg-[#f5ece8]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/contact.jpg" alt="Contact" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-8">{t.contact.title}</h2>
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-neutral-500">{t.contact.firstName}</label>
                      <input type="text" className="border border-neutral-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-neutral-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-neutral-500">{t.contact.lastName}</label>
                      <input type="text" className="border border-neutral-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-neutral-500" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-neutral-500">{t.contact.email}</label>
                    <input type="email" className="border border-neutral-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-neutral-500" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-neutral-500">{t.contact.message}</label>
                    <textarea rows={4} className="border border-neutral-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:border-neutral-500 resize-none" />
                  </div>
                  <button type="submit" className="self-start px-8 py-3 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700 transition-colors cursor-none">
                    {t.contact.send}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-neutral-900 text-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">薛斯凡 Sifan Xue</h3>
              <p className="text-neutral-400 text-sm">{t.footer.tagline}</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <a href="mailto:sifanxuecreate@gmail.com" className="text-neutral-300 text-sm hover:text-white transition-colors">sifanxuecreate@gmail.com</a>
              <p className="text-neutral-500 text-xs">© 2026 SIFAN XUE</p>
            </div>
            <a
              href="https://linkedin.com/in/sifan-xue-8b2503280"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-neutral-200 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a66c2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </footer>

      </main>
    </>
  );
}

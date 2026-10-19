"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, type LangKey } from "@/app/context/language";
import { Navbar } from "@/app/components/Navbar";
import { ContactFooter } from "@/app/components/ContactFooter";
import { FadeIn } from "@/app/components/FadeIn";

const content: Record<LangKey, {
  nav: { home: string; work: string; about: string };
  hero: {
    greeting: string;
    loveTo: string;
    words: string[];
    sub: string;
    cta1: string;
    cta2: string;
  };
  work: { tag: string; title: string; projects: { title: string; desc: string; tag: string }[] };
}> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About" },
    hero: {
      greeting: "Hi, I'm Sifan!",
      loveTo: "I love to",
      words: ["design", "research", "create", "explore"],
      sub: "I'm a UX designer with a passion for research and human-centered design. I create intuitive experiences that sit at the intersection of form and function.",
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
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    hero: {
      greeting: "你好，我是薛斯凡！",
      loveTo: "我热爱",
      words: ["设计", "研究", "创造", "探索"],
      sub: "我是一名 UX 设计师，热爱用户研究与以人为本的设计。我专注于打造简洁直观的界面，让形式与功能在此交汇。",
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
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    hero: {
      greeting: "¡Hola, soy Sifan!",
      loveTo: "Me encanta",
      words: ["diseñar", "investigar", "crear", "explorar"],
      sub: "Soy diseñadora UX apasionada por la investigación y el diseño centrado en las personas. Creo experiencias intuitivas en la intersección entre forma y función.",
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
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    hero: {
      greeting: "안녕하세요, 저는 Sifan이에요!",
      loveTo: "저는",
      words: ["디자인", "연구", "창작", "탐구"],
      sub: "저는 리서치와 인간 중심 설계를 사랑하는 UX 디자이너입니다. 형태와 기능의 교차점에서 직관적인 경험을 만들어냅니다.",
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
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    hero: {
      greeting: "こんにちは、Sifanです！",
      loveTo: "私は",
      words: ["デザイン", "リサーチ", "創造", "探求"],
      sub: "リサーチと人間中心設計を愛するUXデザイナーです。形と機能の交差点で、シンプルで直感的な体験を作っています。",
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
  },
};

type Project = { href: string; img: string; title: string; tag: string; en: string; zh: string; fit: "cover" | "contain" | "flush"; bg: string };

const projects: Project[] = [
  { href: "/work/p5", img: "/p5/p5js-feature-image.png", title: "p5.js Usability Research", tag: "UX Research · Usability Testing", fit: "flush", bg: "bg-[#ED225D]",
    en: "A moderated usability study conducted in partnership with the p5.js team to improve the reference page and code editor experience.",
    zh: "与 p5.js 官方团队合作开展的可用性研究，提升参考页面与代码编辑器的用户体验。" },
  { href: "/work/soccergoat", img: "/soccergoat-cover-v3.png", title: "SoccerGOAT", tag: "Mobile App · Product Design · UX Research", fit: "cover", bg: "bg-neutral-100",
    en: "A soccer companion app and physical display device designed to bring North American fans closer to the beautiful game.",
    zh: "一款足球伴侣应用与实体展示设备，让北美球迷与美丽的足球运动更近一步。" },
  { href: "/work/artflow", img: "/artflow/cover.png", title: "ArtFlow", tag: "UX Research · Usability Testing · QA", fit: "cover", bg: "bg-neutral-100",
    en: "Systematic usability testing for Tencent Games’ internal art asset platform — 100+ issues identified, 95% fix rate achieved.",
    zh: "腾讯游戏内部美术资源平台的系统性可用性测试——识别 100+ 问题，95% 修复率。" },
  { href: "/work/art", img: "/art/cover.png", title: "My Art", tag: "Fine Art · Acrylic · Watercolour", fit: "contain", bg: "bg-white",
    en: "A personal collection of acrylic and watercolour paintings exploring emotion, memory, and the places that shaped me.",
    zh: "探索情感、记忆与成长之地的丙烯与水彩画作品集。" },
  { href: "/work/vozy", img: "/vozy/vozy cover.png", title: "Vozy", tag: "Product Design · UX Research · Wearable", fit: "cover", bg: "bg-neutral-100",
    en: "A wearable travel companion reducing anxiety and physical burden for independent travellers.",
    zh: "减轻独立旅行者焦虑与负担的穿戴式旅行伴侣设备。" },
  { href: "/work/recoaster", img: "/recoaster/RC cover.png", title: "RE Coaster", tag: "Product Design · Sustainability · Craft", fit: "cover", bg: "bg-neutral-100",
    en: "A sustainable coaster crafted from recycled coffee grounds using woodworking, laser cutting and resin.",
    zh: "以咖啡渣为原料，结合木工与树脂工艺制作的可持续杯垫。" },
  { href: "/work/peticx", img: "/peticx/px缩略图.png", title: "PeticX", tag: "Product Design · UX Research · Pet Care", fit: "contain", bg: "bg-neutral-100",
    en: "A pet care product designed through end-to-end user research and iterative prototyping.",
    zh: "通过端到端用户研究与迭代原型设计的宠物护理产品。" },
  { href: "/work/maskoff", img: "/maskoff/Maskoff cover.png", title: "Maskoff", tag: "Brand Design · Product Design", fit: "cover", bg: "bg-neutral-100",
    en: "A face mask brand exploring identity and the tension between concealment and visibility.",
    zh: "探索身份认同与隐藏和显露之间张力的口罩品牌设计。" },
];

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  const [wordIndex, setWordIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex(i => (i + 1) % t.hero.words.length);
        setVisible(true);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, [t.hero.words.length]);

  // Reset word index on language change
  useEffect(() => {
    setWordIndex(0);
    setVisible(true);
  }, [lang]);

  return (
    <main className="min-h-screen bg-[#F8F7F4] text-neutral-900 font-sans cursor-none">
      <Navbar nav={t.nav} />

      {/* Hero */}
      <section className="min-h-screen flex items-start px-6">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-40">

          {/* Left — text */}
          <div>
            <FadeIn delay={60}>
              <h1
                style={{ fontFamily: "var(--font-cormorant)" }}
                className="text-6xl lg:text-7xl font-medium leading-tight mb-2 tracking-tight"
              >
                {t.hero.greeting}
              </h1>
            </FadeIn>

            <FadeIn delay={120}>
              <h2
                style={{ fontFamily: "var(--font-cormorant)" }}
                className="text-6xl lg:text-7xl font-medium leading-tight mb-10 tracking-tight"
              >
                {t.hero.loveTo}{" "}
                <span
                  style={{
                    color: "#D4785A",
                    display: "inline-block",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                  }}
                >
                  {t.hero.words[wordIndex]}
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={240}>
              <p className="text-neutral-500 text-base leading-relaxed max-w-md mb-10">
                {t.hero.sub}
              </p>
            </FadeIn>

          </div>

          {/* Right — flip card: colour block / logo */}
          <FadeIn delay={200}>
            <div className="flex justify-center items-center w-full">
              <div
                role="button"
                tabIndex={0}
                aria-label="Flip card"
                onMouseEnter={() => setFlipped(true)}
                onMouseLeave={() => setFlipped(false)}
                onClick={() => setFlipped((v) => !v)}
                className="relative w-full max-w-[270px] aspect-[4/5] cursor-none"
                style={{ perspective: 1200 }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* front */}
                  <div
                    className="absolute inset-0 flex items-end justify-end p-5 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      background:
                        "radial-gradient(120% 70% at 50% 0%, #FF6A3D 0%, rgba(255,106,61,0) 60%), linear-gradient(180deg, #E5472A 0%, #C8321E 45%, #6E170F 100%)",
                    }}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "160px 160px", opacity: 0.22, mixBlendMode: "overlay" }}
                    />
                    <p
                      className="relative text-right font-extrabold uppercase leading-[0.9] tracking-tight text-[#1C1917] select-none"
                      style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(28px, 3.4vw, 42px)" }}
                    >
                      Sifan<br />Xue
                    </p>
                  </div>
                  {/* back */}
                  <div
                    className="absolute inset-0 flex items-center justify-center overflow-hidden"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", backgroundColor: "#F3F1EC" }}
                  >
                    <Image src="/logo-transparent.png" alt="Sifan Xue logo" width={360} height={270} className="w-[135%] max-w-none h-auto" priority />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Work */}
      <section id="work" className="pt-8 pb-28 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((pr, i) => (
            <FadeIn key={pr.href} delay={(i % 2) * 100}>
              <a href={pr.href} className="group block cursor-none">
                <div className={"relative w-full aspect-[4/3] overflow-hidden " + pr.bg}>
                  <Image
                    src={pr.img}
                    alt={pr.title}
                    fill
                    className={(pr.fit === "contain" ? "object-contain p-10" : pr.fit === "flush" ? "object-contain" : "object-cover") + " transition-transform duration-500 group-hover:scale-[1.03]"}
                    unoptimized
                  />
                </div>
                <p style={{ fontFamily: "var(--font-geist-mono)" }} className="mt-4 text-[11px] tracking-wider uppercase text-neutral-400">{pr.tag}</p>
                <h3 style={{ fontFamily: "var(--font-cormorant)" }} className="mt-1 text-2xl font-medium text-neutral-800">{pr.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">{lang === "zh" ? pr.zh : pr.en}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

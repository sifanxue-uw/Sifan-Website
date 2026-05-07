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
    const onLeave = () => { el.style.transform = "translate(0, 0)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);
  return (
    <a ref={ref} href={href} className={className}
      style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), background 0.2s, border 0.2s" }}>
      {children}
    </a>
  );
}

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  const [wordIndex, setWordIndex] = useState(0);
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
    <main className="min-h-screen bg-white text-neutral-900 font-sans cursor-none">
      <Navbar nav={t.nav} />

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-20">

          {/* Left — text */}
          <div>
            <FadeIn delay={0}>
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

            <FadeIn delay={360}>
              <div className="flex gap-4">
                <MagneticButton
                  href="#work"
                  className="px-6 py-3 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700"
                >
                  {t.hero.cta1}
                </MagneticButton>
                <MagneticButton
                  href="#contact"
                  className="px-6 py-3 border border-neutral-300 text-sm rounded-full hover:border-neutral-600 text-neutral-700"
                >
                  {t.hero.cta2}
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          {/* Right — art */}
          <FadeIn delay={200}>
            <div className="flex justify-center items-center -mr-8 md:-mr-16">
              <Image
                src="/art/cover.png"
                alt="Sifan Xue"
                width={700}
                height={700}
                className="w-full object-contain"
                style={{ mixBlendMode: "multiply" }}
                unoptimized
                priority
              />
            </div>
          </FadeIn>

        </div>
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
              <a href="/work/p5" className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-none bg-white block">
                <div className="w-full h-64 rounded-xl mb-6 overflow-hidden relative group-hover:brightness-105 transition-all bg-neutral-50">
                  <Image src="/p5/p5js-feature-image.png" alt="p5.js Research" fill className="object-contain p-6" unoptimized />
                </div>
                <p className="text-xs text-neutral-400 mb-2">UX Research · Usability Testing</p>
                <h3 className="text-xl font-semibold mb-2">p5.js Usability Research</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {lang === "en"
                    ? "A moderated usability study conducted in partnership with the p5.js team to improve the reference page and code editor experience."
                    : "与 p5.js 官方团队合作开展的可用性研究，提升参考页面与代码编辑器的用户体验。"}
                </p>
              </a>
            </FadeIn>
            <FadeIn delay={100}>
              <a href="/work/soccergoat" className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-none bg-white block">
                <div className="w-full h-64 rounded-xl mb-6 overflow-hidden relative group-hover:brightness-105 transition-all">
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
            <FadeIn delay={200}>
              <a href="/work/artflow" className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-none bg-white block">
                <div className="w-full h-64 rounded-xl mb-6 overflow-hidden relative group-hover:brightness-105 transition-all">
                  <Image src="/artflow/cover.png" alt="ArtFlow" fill className="object-cover" />
                </div>
                <p className="text-xs text-neutral-400 mb-2">UX Research · Usability Testing · QA</p>
                <h3 className="text-xl font-semibold mb-2">ArtFlow</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {lang === "en"
                    ? "Systematic usability testing for Tencent Games' internal art asset platform — 100+ issues identified, 95% fix rate achieved."
                    : "腾讯游戏内部美术资源平台的系统性可用性测试——识别 100+ 问题，95% 修复率。"}
                </p>
              </a>
            </FadeIn>
            <FadeIn delay={300}>
              <a href="/work/art" className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-none bg-white block">
                <div className="w-full h-64 rounded-xl mb-6 overflow-hidden relative group-hover:brightness-105 transition-all bg-neutral-50">
                  <Image src="/art/cover.png" alt="My Art" fill className="object-contain p-4" />
                </div>
                <p className="text-xs text-neutral-400 mb-2">Fine Art · Acrylic · Watercolour</p>
                <h3 className="text-xl font-semibold mb-2">My Art</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {lang === "en"
                    ? "A personal collection of acrylic and watercolour paintings exploring emotion, memory, and the places that shaped me."
                    : "探索情感、记忆与成长之地的丙烯与水彩画作品集。"}
                </p>
              </a>
            </FadeIn>
            <FadeIn delay={400}>
              <a href="/work/vozy" className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-none bg-white block">
                <div className="w-full h-64 rounded-xl mb-6 overflow-hidden relative group-hover:brightness-105 transition-all">
                  <Image src="/vozy/vozy cover.png" alt="Vozy" fill className="object-cover" unoptimized />
                </div>
                <p className="text-xs text-neutral-400 mb-2">Product Design · UX Research · Wearable</p>
                <h3 className="text-xl font-semibold mb-2">Vozy</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {lang === "en"
                    ? "A wearable travel companion reducing anxiety and physical burden for independent travellers."
                    : "减轻独立旅行者焦虑与负担的穿戴式旅行伴侣设备。"}
                </p>
              </a>
            </FadeIn>
            <FadeIn delay={500}>
              <a href="/work/recoaster" className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-none bg-white block">
                <div className="w-full h-64 rounded-xl mb-6 overflow-hidden relative group-hover:brightness-105 transition-all">
                  <Image src="/recoaster/RC cover.png" alt="RE Coaster" fill className="object-cover" unoptimized />
                </div>
                <p className="text-xs text-neutral-400 mb-2">Product Design · Sustainability · Craft</p>
                <h3 className="text-xl font-semibold mb-2">RE Coaster</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {lang === "en"
                    ? "A sustainable coaster crafted from recycled coffee grounds using woodworking, laser cutting and resin."
                    : "以咖啡渣为原料，结合木工与树脂工艺制作的可持续杯垫。"}
                </p>
              </a>
            </FadeIn>
            <FadeIn delay={600}>
              <a href="/work/peticx" className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-none bg-white block">
                <div className="w-full h-64 rounded-xl mb-6 overflow-hidden relative group-hover:brightness-105 transition-all bg-neutral-100">
                  <Image src="/peticx/px缩略图.png" alt="PeticX" fill className="object-contain p-4" unoptimized />
                </div>
                <p className="text-xs text-neutral-400 mb-2">Product Design · UX Research · Pet Care</p>
                <h3 className="text-xl font-semibold mb-2">PeticX</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {lang === "en"
                    ? "A pet care product designed through end-to-end user research and iterative prototyping."
                    : "通过端到端用户研究与迭代原型设计的宠物护理产品。"}
                </p>
              </a>
            </FadeIn>
            <FadeIn delay={700}>
              <a href="/work/maskoff" className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-none bg-white block">
                <div className="w-full h-64 rounded-xl mb-6 overflow-hidden relative group-hover:brightness-105 transition-all">
                  <Image src="/maskoff/Maskoff cover.png" alt="Maskoff" fill className="object-cover" unoptimized />
                </div>
                <p className="text-xs text-neutral-400 mb-2">Brand Design · Product Design</p>
                <h3 className="text-xl font-semibold mb-2">Maskoff</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {lang === "en"
                    ? "A face mask brand exploring identity and the tension between concealment and visibility."
                    : "探索身份认同与隐藏和显露之间张力的口罩品牌设计。"}
                </p>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

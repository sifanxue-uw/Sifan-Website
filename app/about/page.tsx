"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { useLanguage, type LangKey } from "@/app/context/language";
import { Navbar } from "@/app/components/Navbar";
import { ContactFooter } from "@/app/components/ContactFooter";
import { FadeIn } from "@/app/components/FadeIn";

const content: Record<LangKey, {
  nav: { home: string; work: string; about: string };
  tag: string;
  title: string;
  greeting: string;
  name: string;
  bio: string[];
  skills: { title: string; items: string[] };
  tools: { title: string; items: string[] };
  resume: { title: string; download: string };
  passions: { title: string; items: { src: string; label: string }[] };
  footer: { tagline: string };
}> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About" },
    tag: "About",
    title: "About Me",
    greeting: "Nice to meet you!",
    name: "Sifan Xue",
    bio: [
      "a UX designer and researcher currently pursuing a Master's degree in Human-Centered Design & Engineering at the University of Washington.",
      "I began my undergraduate studies in fine arts, where I trained in drawing, watercolor, and oil painting. Over time, my interests gradually shifted from purely expressing ideas to designing solutions for real problems. This led me to explore graphic design and product design, where I became more interested in how design can address people's needs and everyday challenges.",
      "During this process, I realized how important research and analysis are for improving and iterating design. That discovery eventually led me to UX. I was drawn to the way UX combines creativity with structured thinking — using research, testing, and feedback to refine ideas and create better experiences.",
      "To me, art, design, and UX are closely connected. All of them involve telling a story, understanding people, and continuously refining a piece of work through iteration.",
    ],
    skills: { title: "Skills", items: ["UX Research", "Usability Testing", "Interaction Design", "Information Architecture", "Wireframing & Prototyping", "Visual & Product Design"] },
    tools: { title: "Tools", items: ["Figma", "FigJam / Miro", "Adobe Illustrator & Photoshop", "Fusion 360, Blender, Rhino", "JIRA & Confluence", "Dovetail, Maze, UserTesting"] },
    resume: { title: "Resume", download: "DOWNLOAD" },
    passions: { title: "Passions", items: [{ src: "/sculpture.jpg", label: "Sculpture" }, { src: "/photography.jpg", label: "Photography" }, { src: "/soccer.jpg", label: "Soccer" }, { src: "/latteart.jpg", label: "Latte Art" }] },
    footer: { tagline: "Let's build thoughtful experiences together." },
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    tag: "关于",
    title: "关于我",
    greeting: "你好，很高兴认识你！",
    name: "薛斯凡",
    bio: [
      "UX 设计师与研究员，目前在华盛顿大学攻读以人为本的设计与工程硕士学位。",
      "我本科学习纯艺术，接受过素描、水彩和油画训练。随着时间推移，我的兴趣逐渐从单纯表达想法转向为真实问题设计解决方案，从而探索了平面设计和产品设计领域。",
      "在这个过程中，我意识到研究与分析对于改善和迭代设计的重要性，这最终引领我走向 UX 设计。我被 UX 将创造力与结构化思维相结合的方式深深吸引。",
      "在我看来，艺术、设计和 UX 密不可分——它们都涉及讲述故事、理解人们，以及通过迭代不断打磨作品。",
    ],
    skills: { title: "技能", items: ["UX 研究", "可用性测试", "交互设计", "信息架构", "线框图 & 原型", "视觉 & 产品设计"] },
    tools: { title: "工具", items: ["Figma", "FigJam / Miro", "Adobe Illustrator & Photoshop", "Fusion 360, Blender, Rhino", "JIRA & Confluence", "Dovetail, Maze, UserTesting"] },
    resume: { title: "简历", download: "下载" },
    passions: { title: "兴趣爱好", items: [{ src: "/sculpture.jpg", label: "雕塑" }, { src: "/photography.jpg", label: "摄影" }, { src: "/soccer.jpg", label: "足球" }, { src: "/latteart.jpg", label: "拉花" }] },
    footer: { tagline: "一起打造有温度的设计体验。" },
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    tag: "Sobre mí",
    title: "Sobre mí",
    greeting: "¡Encantada de conocerte!",
    name: "Sifan Xue",
    bio: [
      "Diseñadora UX e investigadora, actualmente cursando un máster en Diseño e Ingeniería Centrados en el Humano en la Universidad de Washington.",
      "Comencé mis estudios universitarios en bellas artes, especializándome en dibujo, acuarela y pintura al óleo. Con el tiempo, mis intereses evolucionaron del puro expresionismo al diseño de soluciones para problemas reales.",
      "En este proceso, comprendí la importancia de la investigación y el análisis para mejorar e iterar el diseño, lo que me llevó al UX. Me atrae la forma en que el UX combina creatividad con pensamiento estructurado.",
      "Para mí, el arte, el diseño y el UX están íntimamente conectados: todos implican contar una historia, entender a las personas y refinar continuamente el trabajo.",
    ],
    skills: { title: "Habilidades", items: ["Investigación UX", "Pruebas de usabilidad", "Diseño de interacción", "Arquitectura de información", "Wireframing y prototipos", "Diseño visual y de producto"] },
    tools: { title: "Herramientas", items: ["Figma", "FigJam / Miro", "Adobe Illustrator & Photoshop", "Fusion 360, Blender, Rhino", "JIRA & Confluence", "Dovetail, Maze, UserTesting"] },
    resume: { title: "Currículum", download: "DESCARGAR" },
    passions: { title: "Pasiones", items: [{ src: "/sculpture.jpg", label: "Escultura" }, { src: "/photography.jpg", label: "Fotografía" }, { src: "/soccer.jpg", label: "Fútbol" }, { src: "/latteart.jpg", label: "Latte Art" }] },
    footer: { tagline: "Construyamos experiencias con propósito." },
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    tag: "소개",
    title: "저를 소개합니다",
    greeting: "만나서 반가워요!",
    name: "Sifan Xue",
    bio: [
      "현재 워싱턴 대학교에서 인간 중심 디자인 & 엔지니어링 석사 과정을 밟고 있는 UX 디자이너이자 연구자입니다.",
      "학부에서는 순수예술을 전공하며 드로잉, 수채화, 유화를 배웠습니다. 시간이 지나며 관심사가 순수한 표현에서 실제 문제 해결을 위한 디자인으로 옮겨갔습니다.",
      "이 과정에서 연구와 분석이 디자인 개선에 얼마나 중요한지 깨달았고, 결국 UX로 이어졌습니다. 창의성과 구조적 사고를 결합하는 UX 방식에 매력을 느꼈습니다.",
      "저에게 예술, 디자인, UX는 긴밀히 연결되어 있습니다. 모두 이야기를 전하고, 사람을 이해하며, 반복을 통해 작업을 다듬는 과정입니다.",
    ],
    skills: { title: "스킬", items: ["UX 리서치", "사용성 테스트", "인터랙션 디자인", "정보 구조", "와이어프레임 & 프로토타입", "비주얼 & 제품 디자인"] },
    tools: { title: "툴", items: ["Figma", "FigJam / Miro", "Adobe Illustrator & Photoshop", "Fusion 360, Blender, Rhino", "JIRA & Confluence", "Dovetail, Maze, UserTesting"] },
    resume: { title: "이력서", download: "다운로드" },
    passions: { title: "관심사", items: [{ src: "/sculpture.jpg", label: "조각" }, { src: "/photography.jpg", label: "사진" }, { src: "/soccer.jpg", label: "축구" }, { src: "/latteart.jpg", label: "라떼 아트" }] },
    footer: { tagline: "함께 의미 있는 경험을 만들어 봐요." },
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    tag: "について",
    title: "私について",
    greeting: "はじめまして！",
    name: "Sifan Xue",
    bio: [
      "現在、ワシントン大学で人間中心デザイン＆エンジニアリングの修士課程に在籍しているUXデザイナー兼リサーチャーです。",
      "学部では純粋芸術を専攻し、デッサン、水彩、油彩を学びました。時間とともに興味が純粋な表現から、実際の問題を解決するデザインへと移っていきました。",
      "その過程で、デザインの改善と反復においてリサーチと分析がいかに重要かを実感し、UXへの道を歩み始めました。創造性と構造的思考を組み合わせるUXの在り方に魅力を感じています。",
      "私にとって、アート、デザイン、UXは密接につながっています。すべてにおいて、ストーリーを伝え、人を理解し、反復を通じて作品を磨くプロセスがあります。",
    ],
    skills: { title: "スキル", items: ["UXリサーチ", "ユーザビリティテスト", "インタラクションデザイン", "情報アーキテクチャ", "ワイヤーフレーム & プロトタイプ", "ビジュアル & プロダクトデザイン"] },
    tools: { title: "ツール", items: ["Figma", "FigJam / Miro", "Adobe Illustrator & Photoshop", "Fusion 360, Blender, Rhino", "JIRA & Confluence", "Dovetail, Maze, UserTesting"] },
    resume: { title: "履歴書", download: "ダウンロード" },
    passions: { title: "趣味・関心", items: [{ src: "/sculpture.jpg", label: "彫刻" }, { src: "/photography.jpg", label: "写真" }, { src: "/soccer.jpg", label: "サッカー" }, { src: "/latteart.jpg", label: "ラテアート" }] },
    footer: { tagline: "一緒に思いやりある体験を作りましょう。" },
  },
};

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans cursor-none">

      {/* Nav */}
      <Navbar nav={t.nav} />

      {/* About Me */}
      <section className="pt-48 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl font-bold tracking-tight mb-16">{t.title}</h1>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src="/about.jpg" alt="Sifan Xue" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div>
                <h2 className="text-3xl font-bold mb-2">{t.greeting}</h2>
                <p className="text-lg font-semibold mb-6">
                  {lang === "zh" ? "我是" : "I'm"} <span className="font-extrabold">{t.name}</span>,
                </p>
                {t.bio.map((para, i) => (
                  <p key={i} className="text-neutral-500 leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills / Tools / Resume */}
      <section className="py-20 px-6 bg-[#f5ece8]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <FadeIn>
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.skills.title}</h3>
              <ul className="space-y-2 text-neutral-600">
                {t.skills.items.map(s => <li key={s}>• {s}</li>)}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.tools.title}</h3>
              <ul className="space-y-2 text-neutral-600">
                {t.tools.items.map(item => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.resume.title}</h3>
              <a
                href="/resume.pdf"
                className="inline-block px-6 py-3 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700 transition-colors cursor-none"
              >
                {t.resume.download}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Passions */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight mb-12">{t.passions.title}</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.passions.items.map(({ src, label }, i) => (
              <FadeIn key={label} delay={i * 80}>
                <div className="flex flex-col gap-2">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                    <Image src={src} alt={label} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-sm font-medium">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactFooter />

    </main>
  );
}

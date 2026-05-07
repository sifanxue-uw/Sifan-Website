"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage, type LangKey } from "@/app/context/language";
import { Navbar } from "@/app/components/Navbar";
import { ContactFooter } from "@/app/components/ContactFooter";
import { FadeIn } from "@/app/components/FadeIn";

const content: Record<LangKey, {
  nav: { home: string; work: string; about: string };
  back: string;
  tag: string;
  title: string;
  subtitle: string;
  role: string; team: string; duration: string; tools: string;
  roleV: string; teamV: string; durationV: string; toolsV: string;
  sections: { label: string; desc: string }[];
}> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About" },
    back: "← Back",
    tag: "Brand Design · Product Design",
    title: "Maskoff",
    subtitle: "A face mask brand design exploring identity, expression, and the tension between concealment and visibility in everyday life.",
    role: "Role", team: "Team", duration: "Duration", tools: "Tools",
    roleV: "Brand & Product Designer", teamV: "Solo Project", durationV: "2023", toolsV: "Illustrator · Rhino · Keyshot",
    sections: [
      { label: "Concept", desc: "Description coming soon." },
      { label: "Design Process", desc: "Description coming soon." },
      { label: "Final Rendering", desc: "Description coming soon." },
    ],
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    back: "← 返回",
    tag: "品牌设计 · 产品设计",
    title: "Maskoff",
    subtitle: "一个以口罩为载体的品牌设计，探索身份认同、表达欲望以及日常生活中隐藏与显露之间的张力。",
    role: "角色", team: "团队", duration: "时间", tools: "工具",
    roleV: "品牌 & 产品设计师", teamV: "个人项目", durationV: "2023", toolsV: "Illustrator · Rhino · Keyshot",
    sections: [
      { label: "概念", desc: "介绍即将更新。" },
      { label: "设计过程", desc: "介绍即将更新。" },
      { label: "最终渲染", desc: "介绍即将更新。" },
    ],
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    back: "← Volver",
    tag: "Diseño de Marca · Diseño de Producto",
    title: "Maskoff",
    subtitle: "Un diseño de marca de mascarillas que explora la identidad, la expresión y la tensión entre ocultarse y ser visible.",
    role: "Rol", team: "Equipo", duration: "Duración", tools: "Herramientas",
    roleV: "Diseñadora de Marca & Producto", teamV: "Proyecto individual", durationV: "2023", toolsV: "Illustrator · Rhino · Keyshot",
    sections: [
      { label: "Concepto", desc: "Descripción próximamente." },
      { label: "Proceso de diseño", desc: "Descripción próximamente." },
      { label: "Renderizado final", desc: "Descripción próximamente." },
    ],
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    back: "← 돌아가기",
    tag: "브랜드 디자인 · 제품 디자인",
    title: "Maskoff",
    subtitle: "마스크를 매개로 정체성, 표현, 그리고 가림과 드러냄 사이의 긴장을 탐구한 브랜드 디자인 프로젝트.",
    role: "역할", team: "팀", duration: "기간", tools: "도구",
    roleV: "브랜드 & 제품 디자이너", teamV: "개인 프로젝트", durationV: "2023", toolsV: "Illustrator · Rhino · Keyshot",
    sections: [
      { label: "컨셉", desc: "설명 준비 중." },
      { label: "디자인 과정", desc: "설명 준비 중." },
      { label: "최종 렌더링", desc: "설명 준비 중." },
    ],
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    back: "← 戻る",
    tag: "ブランドデザイン · プロダクトデザイン",
    title: "Maskoff",
    subtitle: "マスクを媒介に、アイデンティティ・表現・日常における隠すことと見せることの緊張感を探るブランドデザイン。",
    role: "役割", team: "チーム", duration: "期間", tools: "ツール",
    roleV: "ブランド & プロダクトデザイナー", teamV: "個人プロジェクト", durationV: "2023", toolsV: "Illustrator · Rhino · Keyshot",
    sections: [
      { label: "コンセプト", desc: "説明は近日公開。" },
      { label: "デザインプロセス", desc: "説明は近日公開。" },
      { label: "最終レンダリング", desc: "説明は近日公開。" },
    ],
  },
};

export default function MaskoffPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-neutral-900 cursor-none">
      <Navbar nav={t.nav} />

      {/* Hero */}
      <section className="pt-36 pb-0 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Link href="/" className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors cursor-none">{t.back}</Link>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mt-8 mb-4">{t.tag}</p>
          </FadeIn>
          <FadeIn delay={180}>
            <h1 className="text-6xl font-bold tracking-tight mb-6">{t.title}</h1>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed mb-12">{t.subtitle}</p>
          </FadeIn>

          {/* Meta */}
          <FadeIn delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-neutral-100 mb-0">
              {[
                { label: t.role, value: t.roleV },
                { label: t.team, value: t.teamV },
                { label: t.duration, value: t.durationV },
                { label: t.tools, value: t.toolsV },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-neutral-400 tracking-widest uppercase mb-1">{label}</p>
                  <p className="text-sm text-neutral-700 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cover */}
      <FadeIn delay={360}>
        <div className="max-w-5xl mx-auto px-6 mt-12">
          <Image src="/maskoff/Maskoff cover.png" alt="Maskoff Cover" width={1200} height={700} className="w-full h-auto rounded-2xl" unoptimized />
        </div>
      </FadeIn>

      {/* Sections */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-24">

          {/* Concept */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">01 — {t.sections[0].label}</p>
              <p className="text-neutral-500 text-base leading-relaxed max-w-2xl">{t.sections[0].desc}</p>
              <Image src="/maskoff/maskoff drawing.png" alt="Maskoff Drawing" width={1200} height={800} className="w-full h-auto rounded-2xl" unoptimized />
            </div>
          </FadeIn>

          {/* Final Rendering */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">02 — {t.sections[2].label}</p>
              <p className="text-neutral-500 text-base leading-relaxed max-w-2xl">{t.sections[2].desc}</p>
              <Image src="/maskoff/maskoff rendering.png" alt="Maskoff Rendering" width={1200} height={800} className="w-full h-auto rounded-2xl" unoptimized />
            </div>
          </FadeIn>

        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage, type LangKey } from "@/app/context/language";
import { Navbar } from "@/app/components/Navbar";
import { ContactFooter } from "@/app/components/ContactFooter";
import { FadeIn } from "@/app/components/FadeIn";

const content: Record<LangKey, {
  nav: { home: string; work: string; about: string };
  back: string; tag: string; title: string; subtitle: string;
  role: string; team: string; duration: string; tools: string;
  roleV: string; teamV: string; durationV: string; toolsV: string;
  s: string[];
}> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About" },
    back: "← Back",
    tag: "Product Design · UX Research",
    title: "PeticX",
    subtitle: "A pet care product designed through end-to-end user research and iterative prototyping to address real pain points for pet owners.",
    role: "Role", team: "Team", duration: "Duration", tools: "Tools",
    roleV: "Product Designer", teamV: "Solo Project", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["Research", "Survey & Insights", "Competitive Analysis", "Requirements", "Ideation", "Storyboard", "Wireframe & Lo-Fi", "3D Modeling", "Hi-Fi Design", "Final Product"],
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    back: "← 返回",
    tag: "产品设计 · 用户研究",
    title: "PeticX",
    subtitle: "通过端到端用户研究与迭代原型设计，为宠物主人解决真实痛点的宠物护理产品。",
    role: "角色", team: "团队", duration: "时间", tools: "工具",
    roleV: "产品设计师", teamV: "个人项目", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["研究", "问卷与洞察", "竞品分析", "需求定义", "创意发散", "故事板", "线框图 & 低保真", "3D 建模", "高保真设计", "最终产品"],
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    back: "← Volver",
    tag: "Diseño de Producto · Investigación UX",
    title: "PeticX",
    subtitle: "Producto de cuidado de mascotas diseñado mediante investigación de usuario e iteración de prototipos.",
    role: "Rol", team: "Equipo", duration: "Duración", tools: "Herramientas",
    roleV: "Diseñadora de Producto", teamV: "Proyecto individual", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["Investigación", "Encuesta e insights", "Análisis competitivo", "Requisitos", "Ideación", "Storyboard", "Wireframe & Lo-Fi", "Modelado 3D", "Diseño Hi-Fi", "Producto final"],
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    back: "← 돌아가기",
    tag: "제품 디자인 · UX 리서치",
    title: "PeticX",
    subtitle: "반복적인 사용자 리서치와 프로토타이핑을 통해 반려동물 보호자의 실제 문제를 해결하는 제품.",
    role: "역할", team: "팀", duration: "기간", tools: "도구",
    roleV: "제품 디자이너", teamV: "개인 프로젝트", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["리서치", "설문 & 인사이트", "경쟁사 분석", "요구사항", "아이디에이션", "스토리보드", "와이어프레임 & 로우파이", "3D 모델링", "하이파이 디자인", "최종 제품"],
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    back: "← 戻る",
    tag: "プロダクトデザイン · UXリサーチ",
    title: "PeticX",
    subtitle: "エンドツーエンドのユーザーリサーチと反復的なプロトタイピングを通じて、ペットオーナーの課題を解決するプロダクト。",
    role: "役割", team: "チーム", duration: "期間", tools: "ツール",
    roleV: "プロダクトデザイナー", teamV: "個人プロジェクト", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["リサーチ", "アンケート & インサイト", "競合分析", "要件定義", "アイデア出し", "ストーリーボード", "ワイヤーフレーム & ローファイ", "3Dモデリング", "ハイファイデザイン", "最終プロダクト"],
  },
};

export default function PeticXPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-neutral-900 cursor-none">
      <Navbar nav={t.nav} />

      {/* Hero */}
      <section className="pt-36 pb-0 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn><Link href="/" className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors cursor-none">{t.back}</Link></FadeIn>
          <FadeIn delay={100}><p className="text-sm text-neutral-400 tracking-widest uppercase mt-8 mb-4">{t.tag}</p></FadeIn>
          <FadeIn delay={180}><h1 className="text-6xl font-bold tracking-tight mb-6">{t.title}</h1></FadeIn>
          <FadeIn delay={240}><p className="text-lg text-neutral-500 max-w-2xl leading-relaxed mb-12">{t.subtitle}</p></FadeIn>
          <FadeIn delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-neutral-100">
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

      {/* Hero image */}
      <FadeIn delay={360}>
        <div className="max-w-5xl mx-auto px-6 mt-12">
          <Image src="/peticx/px hero pic.png" alt="PeticX Hero" width={1200} height={700} className="w-full h-auto rounded-2xl" unoptimized />
        </div>
      </FadeIn>

      {/* Content sections */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">

          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">01 — {t.s[0]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/peticx/px survey.png" alt="Survey" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/peticx/px dark side.png" alt="Dark Side" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">02 — {t.s[2]}</p>
              <Image src="/peticx/px competitive product analysis.png" alt="Competitive Analysis" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">03 — {t.s[3]}</p>
              <Image src="/peticx/px specific requirements.png" alt="Requirements" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">04 — {t.s[1]}</p>
              <Image src="/peticx/px journey.png" alt="Journey" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">05 — {t.s[4]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/peticx/px sketch.png" alt="Sketch" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/peticx/px storyboard.png" alt="Storyboard" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">06 — {t.s[6]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/peticx/px wireframe.png" alt="Wireframe" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/peticx/px lofi.png" alt="Lo-Fi" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">07 — {t.s[7]}</p>
              <Image src="/peticx/px modeling.png" alt="3D Modeling" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">08 — {t.s[8]}</p>
              <Image src="/peticx/px hifi.png" alt="Hi-Fi" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
              <Image src="/peticx/px hifi 2.png" alt="Hi-Fi 2" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">09 — {t.s[9]}</p>
              <Image src="/peticx/px.png" alt="Final Product" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

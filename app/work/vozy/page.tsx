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
    title: "Vozy",
    subtitle: "A wearable travel companion device designed to reduce the anxiety and physical burden of independent travel through research-driven design.",
    role: "Role", team: "Team", duration: "Duration", tools: "Tools",
    roleV: "Product Designer", teamV: "Solo Project", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["Research", "Survey & Interview", "User Insights", "User Persona", "User Journey Map", "Inspiration", "Ideation & Sketch", "Prototype & Feedback", "Branding", "Final Rendering"],
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    back: "← 返回",
    tag: "产品设计 · 用户研究",
    title: "Vozy",
    subtitle: "一款以研究驱动设计的穿戴式旅行伴侣设备，旨在减轻独立旅行者的焦虑与身体负担。",
    role: "角色", team: "团队", duration: "时间", tools: "工具",
    roleV: "产品设计师", teamV: "个人项目", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["研究", "问卷与访谈", "用户洞察", "用户画像", "用户旅程图", "灵感来源", "创意与草图", "原型与反馈", "品牌设计", "最终渲染"],
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    back: "← Volver",
    tag: "Diseño de Producto · Investigación UX",
    title: "Vozy",
    subtitle: "Un dispositivo wearable de compañía de viaje diseñado para reducir la ansiedad y la carga física del viaje independiente.",
    role: "Rol", team: "Equipo", duration: "Duración", tools: "Herramientas",
    roleV: "Diseñadora de Producto", teamV: "Proyecto individual", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["Investigación", "Encuesta & Entrevista", "Insights del usuario", "Persona", "Mapa de viaje", "Inspiración", "Ideación & Boceto", "Prototipo & Feedback", "Branding", "Renderizado final"],
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    back: "← 돌아가기",
    tag: "제품 디자인 · UX 리서치",
    title: "Vozy",
    subtitle: "리서치 중심 설계로 독립 여행자의 불안과 신체적 부담을 줄이기 위한 웨어러블 여행 동반 기기.",
    role: "역할", team: "팀", duration: "기간", tools: "도구",
    roleV: "제품 디자이너", teamV: "개인 프로젝트", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["리서치", "설문 & 인터뷰", "사용자 인사이트", "사용자 페르소나", "사용자 여정 지도", "영감", "아이디에이션 & 스케치", "프로토타입 & 피드백", "브랜딩", "최종 렌더링"],
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    back: "← 戻る",
    tag: "プロダクトデザイン · UXリサーチ",
    title: "Vozy",
    subtitle: "リサーチ主導のデザインで、一人旅の不安と身体的負担を軽減するウェアラブル旅行コンパニオン。",
    role: "役割", team: "チーム", duration: "期間", tools: "ツール",
    roleV: "プロダクトデザイナー", teamV: "個人プロジェクト", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["リサーチ", "アンケート & インタビュー", "ユーザーインサイト", "ユーザーペルソナ", "ユーザージャーニーマップ", "インスピレーション", "アイデア & スケッチ", "プロトタイプ & フィードバック", "ブランディング", "最終レンダリング"],
  },
};

export default function VozyPage() {
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
          <Image src="/vozy/vozy hero pic.png" alt="Vozy Hero" width={1200} height={700} className="w-full h-auto rounded-2xl" unoptimized />
        </div>
      </FadeIn>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* Research */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">01 — {t.s[0]}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Image src="/vozy/vozy Decision Fatigue in Travel Planning.png" alt="Decision Fatigue" width={500} height={400} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/vozy/vozy The Fear of Getting Lost.png" alt="Fear of Getting Lost" width={500} height={400} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/vozy/vozy The Weight of Carrying Heavy Loads.png" alt="Heavy Loads" width={500} height={400} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* Survey & Interview */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">02 — {t.s[1]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/vozy/vozy survey.png" alt="Survey" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/vozy/vozy interview.png" alt="Interview" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* Persona & Journey */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">03 — {t.s[3]}</p>
              <Image src="/vozy/vozy user persona.png" alt="User Persona" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">04 — {t.s[4]}</p>
              <Image src="/vozy/vozy user journey map.png" alt="User Journey Map" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          {/* Inspiration */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">05 — {t.s[5]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/vozy/vozy inspiration.png" alt="Inspiration" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/vozy/vozy struggle.png" alt="Struggle" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* Sketches */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">06 — {t.s[6]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/vozy/vozy sketch.png" alt="Sketch" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/vozy/vozy sketch2.png" alt="Sketch 2" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* Prototype */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">07 — {t.s[7]}</p>
              <Image src="/vozy/vozy prototype and feedback.png" alt="Prototype" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          {/* Branding */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">08 — {t.s[8]}</p>
              <div className="flex gap-6 items-center">
                <Image src="/vozy/vozy logo1.png" alt="Logo 1" width={300} height={200} className="h-auto rounded-xl" unoptimized />
                <Image src="/vozy/vozy logo2.png" alt="Logo 2" width={300} height={200} className="h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* Final */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">09 — {t.s[9]}</p>
              <Image src="/vozy/vozy.png" alt="Vozy Final" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/vozy/vozy final rendering1.png" alt="Final Rendering 1" width={700} height={700} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/vozy/vozy final rendering2.png" alt="Final Rendering 2" width={700} height={700} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

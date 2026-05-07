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
    tag: "Product Design · Sustainability",
    title: "RE Coaster",
    subtitle: "A sustainable coaster crafted from recycled coffee grounds — combining woodworking, laser cutting, and resin casting to give waste a second life.",
    role: "Role", team: "Team", duration: "Duration", tools: "Tools",
    roleV: "Product Designer", teamV: "Solo Project", durationV: "2024", toolsV: "Rhino · Laser Cutter · Resin",
    s: ["Research", "Survey & Interview", "Problem Space", "My Journey", "Material Selection", "Making Process", "Final Product"],
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    back: "← 返回",
    tag: "产品设计 · 可持续设计",
    title: "RE Coaster",
    subtitle: "以咖啡渣为原料制作的可持续杯垫——结合木工、激光切割与树脂浇注工艺，让废料重获新生。",
    role: "角色", team: "团队", duration: "时间", tools: "工具",
    roleV: "产品设计师", teamV: "个人项目", durationV: "2024", toolsV: "Rhino · 激光切割机 · 树脂",
    s: ["研究", "问卷与访谈", "问题空间", "我的旅程", "材料选择", "制作过程", "最终产品"],
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    back: "← Volver",
    tag: "Diseño de Producto · Sostenibilidad",
    title: "RE Coaster",
    subtitle: "Un posavasos sostenible hecho de posos de café reciclados, combinando carpintería, corte láser y resina.",
    role: "Rol", team: "Equipo", duration: "Duración", tools: "Herramientas",
    roleV: "Diseñadora de Producto", teamV: "Proyecto individual", durationV: "2024", toolsV: "Rhino · Cortadora láser · Resina",
    s: ["Investigación", "Encuesta & Entrevista", "Espacio del problema", "Mi recorrido", "Selección de materiales", "Proceso de fabricación", "Producto final"],
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    back: "← 돌아가기",
    tag: "제품 디자인 · 지속가능성",
    title: "RE Coaster",
    subtitle: "커피 찌꺼기를 재활용해 목공, 레이저 커팅, 레진 주조를 결합한 지속가능한 코스터.",
    role: "역할", team: "팀", duration: "기간", tools: "도구",
    roleV: "제품 디자이너", teamV: "개인 프로젝트", durationV: "2024", toolsV: "Rhino · 레이저 커터 · 레진",
    s: ["리서치", "설문 & 인터뷰", "문제 공간", "나의 여정", "소재 선택", "제작 과정", "최종 제품"],
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    back: "← 戻る",
    tag: "プロダクトデザイン · サステナビリティ",
    title: "RE Coaster",
    subtitle: "コーヒーかすを再利用し、木工・レーザーカット・レジン注型を組み合わせた持続可能なコースター。",
    role: "役割", team: "チーム", duration: "期間", tools: "ツール",
    roleV: "プロダクトデザイナー", teamV: "個人プロジェクト", durationV: "2024", toolsV: "Rhino · レーザーカッター · レジン",
    s: ["リサーチ", "アンケート & インタビュー", "問題空間", "私のジャーニー", "素材選定", "製作プロセス", "最終プロダクト"],
  },
};

export default function RECoasterPage() {
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
          <Image src="/recoaster/RC hero pic.png" alt="RE Coaster Hero" width={1200} height={700} className="w-full h-auto rounded-2xl" unoptimized />
        </div>
      </FadeIn>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* Research */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">01 — {t.s[0]}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Image src="/recoaster/RC The Waste of Used Coffee Grounds.png" alt="Coffee Waste" width={500} height={400} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/recoaster/RC Benefits of Used Coffee Grounds.png" alt="Benefits" width={500} height={400} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/recoaster/RC Challenges in Latte Art.png" alt="Challenges" width={500} height={400} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* Survey & Interview */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">02 — {t.s[1]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/recoaster/RC Survey.png" alt="Survey" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/recoaster/RC interview.png" alt="Interview" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* Journey */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">03 — {t.s[3]}</p>
              <Image src="/recoaster/RE my journey.png" alt="My Journey" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          {/* Material */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">04 — {t.s[4]}</p>
              <Image src="/recoaster/RC Material Selection、.png" alt="Material Selection" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          {/* Making */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">05 — {t.s[5]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/recoaster/RC Woodwork & Laser cutting.png" alt="Woodwork" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/recoaster/RC Combine & Resin in.png" alt="Resin" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* Final */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">06 — {t.s[6]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/recoaster/RC final1.png" alt="Final 1" width={700} height={700} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/recoaster/RC final2.png" alt="Final 2" width={700} height={700} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/recoaster/RC final3.png" alt="Final 3" width={700} height={700} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/recoaster/RC final4.png" alt="Final 4" width={700} height={700} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

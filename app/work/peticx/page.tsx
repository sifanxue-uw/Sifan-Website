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
    subtitle: "A pet care product designed through end-to-end user research and iterative prototyping to address real pain points for exotic pet owners.",
    role: "Role", team: "Team", duration: "Duration", tools: "Tools",
    roleV: "Product Designer", teamV: "Solo Project", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["Background", "Survey & Research", "User Persona", "Competitive Analysis", "Requirements", "Ideation & Storyboard", "Wireframe & Lo-Fi", "3D Modeling", "Hi-Fi Design", "Final Product"],
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    back: "← 返回",
    tag: "产品设计 · 用户研究",
    title: "PeticX",
    subtitle: "通过端到端用户研究与迭代原型设计，为异宠主人解决真实痛点的宠物护理产品。",
    role: "角色", team: "团队", duration: "时间", tools: "工具",
    roleV: "产品设计师", teamV: "个人项目", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["背景", "问卷与调研", "用户画像", "竞品分析", "需求定义", "创意与故事板", "线框图 & 低保真", "3D 建模", "高保真设计", "最终产品"],
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    back: "← Volver",
    tag: "Diseño de Producto · Investigación UX",
    title: "PeticX",
    subtitle: "Producto de cuidado de mascotas diseñado mediante investigación de usuario e iteración de prototipos para dueños de mascotas exóticas.",
    role: "Rol", team: "Equipo", duration: "Duración", tools: "Herramientas",
    roleV: "Diseñadora de Producto", teamV: "Proyecto individual", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["Contexto", "Encuesta e investigación", "Persona", "Análisis competitivo", "Requisitos", "Ideación & Storyboard", "Wireframe & Lo-Fi", "Modelado 3D", "Diseño Hi-Fi", "Producto final"],
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    back: "← 돌아가기",
    tag: "제품 디자인 · UX 리서치",
    title: "PeticX",
    subtitle: "반복적인 사용자 리서치와 프로토타이핑을 통해 이색 반려동물 보호자의 실제 문제를 해결하는 제품.",
    role: "역할", team: "팀", duration: "기간", tools: "도구",
    roleV: "제품 디자이너", teamV: "개인 프로젝트", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["배경", "설문 & 리서치", "사용자 페르소나", "경쟁사 분석", "요구사항", "아이디에이션 & 스토리보드", "와이어프레임 & 로우파이", "3D 모델링", "하이파이 디자인", "최종 제품"],
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    back: "← 戻る",
    tag: "プロダクトデザイン · UXリサーチ",
    title: "PeticX",
    subtitle: "エキゾチックペットオーナーの課題を解決するためのエンドツーエンドのユーザーリサーチと反復プロトタイピング。",
    role: "役割", team: "チーム", duration: "期間", tools: "ツール",
    roleV: "プロダクトデザイナー", teamV: "個人プロジェクト", durationV: "2024", toolsV: "Figma · Rhino · Keyshot",
    s: ["背景", "アンケート & リサーチ", "ユーザーペルソナ", "競合分析", "要件定義", "アイデア出し & ストーリーボード", "ワイヤーフレーム & ローファイ", "3Dモデリング", "ハイファイデザイン", "最終プロダクト"],
  },
};

export default function PeticXPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#F8F7F4] text-neutral-900 cursor-none">
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

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-24">

          {/* 01 — Background */}
          <FadeIn>
            <div className="space-y-10">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">01 — {t.s[0]}</p>

              {/* Personal story */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold">My Journey with Exotic Pets</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    I got myself a hamster my freshman year of college, and it's been with me for three wonderful years — a time filled with goodness, happiness, and a lot of ensuing problems.
                  </p>
                  <div className="space-y-4 pt-2">
                    {[
                      { title: "Uncertainty about information", desc: "Navigating exotic pet care can be overwhelming due to inconsistent information and unreliable sources. Misleading claims often confuse inexperienced owners, leading to potential risks for their pets." },
                      { title: "Lack of time and companionship", desc: "Students and professionals often struggle to balance busy schedules with the exotic pets they need, leading to inconsistent attention." },
                      { title: "Difficulty in product selection", desc: "Finding the right products for exotic pets is a complex task, with limited clarity on safety and functionality. Owners often face frustration in identifying items that truly meet their pet's needs." },
                    ].map(({ title, desc }) => (
                      <div key={title} className="p-4 rounded-xl bg-neutral-50 border-l-2 border-neutral-300">
                        <p className="text-sm font-semibold text-neutral-800 mb-1">{title}</p>
                        <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <Image src="/peticx/px survey.png" alt="Background Research" width={700} height={600} className="w-full h-auto rounded-xl" unoptimized />
              </div>

              {/* Dark side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <Image src="/peticx/px dark side.png" alt="Dark Side of Exotic Pet Content" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Turning Abuse into Entertainment</h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest">The Dark Side of Exotic Pet Content on Social Media</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    On social media, some influencers spread <span className="font-semibold text-neutral-700">harmful and misleading information</span> about exotic pet care, often using abusive behaviors for entertainment. These actions not only harm the pets but also misguide viewers, normalizing cruelty in exchange for popularity.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 02 — Survey & Research */}
          <FadeIn>
            <div className="space-y-10">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">02 — {t.s[1]}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { pct: "42%", desc: "of respondents previously owned common pets like cats or dogs before adopting exotic pets" },
                  { pct: "58%", desc: "agreed that exotic pets provide a more unique and fulfilling companionship compared to traditional pets" },
                  { pct: "71%", desc: "said they struggle to spend enough quality time with their exotic pets due to their busy lifestyles" },
                ].map(({ pct, desc }) => (
                  <div key={pct} className="p-6 rounded-2xl bg-neutral-50 space-y-3">
                    <p className="text-4xl font-bold text-neutral-900">{pct}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <Image src="/peticx/px survey.png" alt="Survey Results" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-neutral-700">User Interviews</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Fiona Xu",
                      age: "20 years old",
                      role: "University Student · Bird Enthusiast",
                      quote: "Caring for my magpie has been a journey of both joy and challenges. From bonding through feeding and playtime to managing its clingy nature, I've learned patience and responsibility. The hardest part is balancing my studies with daily care, but seeing it thrive makes every effort worthwhile.",
                    },
                    {
                      name: "Victor Zhang",
                      age: "21 years old",
                      role: "University Student · Hamster Owner",
                      quote: "When I first got my Golden Bear Hamster, I felt completely unprepared and unsure about how to meet its needs. Over time, I learned how to create a safe and enriching environment, which taught me patience and showed how small, thoughtful actions can lead to a meaningful connection with even the tiniest of creatures.",
                    },
                  ].map(({ name, age, role, quote }) => (
                    <div key={name} className="p-6 rounded-2xl border border-neutral-100 space-y-4">
                      <div>
                        <p className="font-semibold text-neutral-800">{name}</p>
                        <p className="text-xs text-neutral-400 mt-0.5">{age} · {role}</p>
                      </div>
                      <p className="text-sm text-neutral-500 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 03 — User Persona */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">03 — {t.s[2]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Victor Tharp",
                    age: "29",
                    occ: "Software Engineer",
                    loc: "San Francisco, CA",
                    quote: "Caring for my bearded dragon gives me a unique connection to nature.",
                    personality: "Analytical, calm, and detail-oriented.",
                    challenges: ["Time-consuming maintenance", "Difficulty finding quality online information", "Difficulty finding affordable yet quality supplies"],
                    motivations: ["Automated habitat monitoring", "High-quality, accessible pet supplies"],
                    painPoints: ["Difficulty maintaining temperature stability", "Inconsistent quality of high-quality food options"],
                    preferred: ["Real-time environmental alerts", "Personalized care tips", "Smart home integration"],
                  },
                  {
                    name: "Emily Carter",
                    age: "22",
                    occ: "College Student",
                    loc: "Austin, TX",
                    quote: "I want to be fully prepared for my first exotic pet.",
                    personality: "Curious, enthusiastic, and cautious.",
                    challenges: ["Filtering through excessive conflicting information", "Finding affordable yet high-quality starter kits", "Limited access to exotic pet products locally"],
                    motivations: ["Simple setup guides", "Access to trusted veterinarians"],
                    painPoints: ["Overwhelmed by conflicting information", "Limited budget for initial pet setup"],
                    preferred: ["Step-by-step habitat setup guides", "Recommendations for beginner supplies", "Care routine tips"],
                  },
                ].map(({ name, age, occ, loc, quote, personality, challenges, motivations, painPoints, preferred }) => (
                  <div key={name} className="rounded-2xl border border-neutral-100 overflow-hidden">
                    <div className="bg-neutral-900 text-white p-6 space-y-1">
                      <p className="text-lg font-semibold">{name}</p>
                      <p className="text-xs text-white/60">{age} · {occ} · {loc}</p>
                      <p className="text-sm text-white/80 italic mt-3">&ldquo;{quote}&rdquo;</p>
                    </div>
                    <div className="p-6 space-y-5 text-sm">
                      <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Personality</p>
                        <p className="text-neutral-600 text-xs">{personality}</p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Challenges</p>
                        <ul className="space-y-1">{challenges.map(c => <li key={c} className="text-xs text-neutral-600 flex gap-2"><span className="text-neutral-300">·</span>{c}</li>)}</ul>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Motivations</p>
                        <ul className="space-y-1">{motivations.map(m => <li key={m} className="text-xs text-neutral-600 flex gap-2"><span className="text-neutral-300">·</span>{m}</li>)}</ul>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Pain Points</p>
                          <ul className="space-y-1">{painPoints.map(p => <li key={p} className="text-xs text-neutral-600 flex gap-2"><span className="text-red-300">·</span>{p}</li>)}</ul>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Preferred Features</p>
                          <ul className="space-y-1">{preferred.map(p => <li key={p} className="text-xs text-neutral-600 flex gap-2"><span className="text-green-300">·</span>{p}</li>)}</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Image src="/peticx/px journey.png" alt="User Journey Map" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          {/* 04 — Competitive Analysis */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">04 — {t.s[3]}</p>
              <Image src="/peticx/px competitive product analysis.png" alt="Competitive Analysis" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          {/* 05 — Requirements */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">05 — {t.s[4]}</p>
              <Image src="/peticx/px specific requirements.png" alt="Requirements" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          {/* 06 — Ideation & Storyboard */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">06 — {t.s[5]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/peticx/px sketch.png" alt="Sketch" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/peticx/px storyboard.png" alt="Storyboard" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* 07 — Wireframe & Lo-Fi */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">07 — {t.s[6]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/peticx/px wireframe.png" alt="Wireframe" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
                <Image src="/peticx/px lofi.png" alt="Lo-Fi" width={700} height={500} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* 08 — 3D Modeling */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">08 — {t.s[7]}</p>
              <Image src="/peticx/px modeling.png" alt="3D Modeling" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          {/* 09 — Hi-Fi */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">09 — {t.s[8]}</p>
              <Image src="/peticx/px hifi.png" alt="Hi-Fi" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
              <Image src="/peticx/px hifi 2.png" alt="Hi-Fi 2" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

          {/* 10 — Final Product */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">10 — {t.s[9]}</p>
              <Image src="/peticx/px.png" alt="Final Product" width={1200} height={700} className="w-full h-auto rounded-xl" unoptimized />
            </div>
          </FadeIn>

        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

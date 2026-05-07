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
  role: string; team: string; duration: string; methods: string;
  roleV: string; teamV: string; durationV: string; methodsV: string;
  s: string[];
  findings: { title: string; desc: string }[];
}> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About" },
    back: "← Back",
    tag: "UX Research",
    title: "p5.js Usability Research",
    subtitle: "A moderated usability study conducted in partnership with the p5.js team, evaluating the reference page, function pages, and code editor to improve accessibility and learnability for creative coders worldwide.",
    role: "Role", team: "Team", duration: "Duration", methods: "Methods",
    roleV: "UX Researcher", teamV: "Team Project", durationV: "2024", methodsV: "Usability Testing · Cognitive Walkthrough · Survey",
    s: ["Overview", "About p5.js", "Research Questions", "Participants", "Methods", "Key Findings", "Recommendations"],
    findings: [
      { title: "Information Hierarchy", desc: "Syntax and parameters were buried at the bottom of function pages, making quick technical lookups difficult for educators and developers." },
      { title: "Feature Discoverability", desc: "Most participants loved the autocomplete feature in the code editor but couldn't find it at first — signaling a discoverability gap." },
      { title: "Filtering & Search Confusion", desc: "Users struggled to filter and search functions on the reference page, often resorting to manual scanning through long lists." },
      { title: "Archived vs. Current", desc: "Users valued the modern interactive examples but found the archived version more efficient for lesson planning and quick lookups." },
    ],
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    back: "← 返回",
    tag: "用户研究",
    title: "p5.js 可用性研究",
    subtitle: "与 p5.js 官方团队合作开展的可用性研究项目，评估参考页面、函数页面及代码编辑器，旨在为全球创意编程者提升易用性与学习体验。",
    role: "角色", team: "团队", duration: "时间", methods: "方法",
    roleV: "用户研究员", teamV: "团队项目", durationV: "2024", methodsV: "可用性测试 · 认知走查 · 问卷",
    s: ["概述", "关于 p5.js", "研究问题", "参与者", "研究方法", "核心发现", "设计建议"],
    findings: [
      { title: "信息层级问题", desc: "函数页面的语法与参数位于底部，教育者和开发者难以快速查阅关键信息。" },
      { title: "功能可发现性", desc: "大多数参与者喜欢代码编辑器中的自动补全功能，但一开始找不到它——揭示了可发现性的缺口。" },
      { title: "筛选与搜索混乱", desc: "用户难以在参考页面上筛选和搜索函数，常常只能手动翻阅长列表。" },
      { title: "新旧版本对比", desc: "用户欣赏新版的交互示例，但认为旧版在备课和快速查阅方面更高效。" },
    ],
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    back: "← Volver",
    tag: "Investigación UX",
    title: "Investigación de Usabilidad de p5.js",
    subtitle: "Un estudio de usabilidad moderado realizado en colaboración con el equipo de p5.js, evaluando la página de referencia, páginas de funciones y el editor de código.",
    role: "Rol", team: "Equipo", duration: "Duración", methods: "Métodos",
    roleV: "Investigadora UX", teamV: "Proyecto en equipo", durationV: "2024", methodsV: "Pruebas de usabilidad · Walkthrough cognitivo · Encuesta",
    s: ["Resumen", "Sobre p5.js", "Preguntas de investigación", "Participantes", "Métodos", "Hallazgos clave", "Recomendaciones"],
    findings: [
      { title: "Jerarquía de información", desc: "La sintaxis y los parámetros estaban al fondo de las páginas de funciones, dificultando las búsquedas rápidas." },
      { title: "Descubrimiento de funciones", desc: "La mayoría amaba el autocompletado pero no podía encontrarlo al principio — una brecha de descubrimiento." },
      { title: "Confusión en filtros y búsqueda", desc: "Los usuarios tenían dificultades para filtrar y buscar funciones, recurriendo al desplazamiento manual." },
      { title: "Versión actual vs. archivada", desc: "Los usuarios valoraron los ejemplos interactivos modernos, pero encontraron la versión archivada más eficiente." },
    ],
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    back: "← 돌아가기",
    tag: "UX 리서치",
    title: "p5.js 사용성 연구",
    subtitle: "p5.js 팀과 협력하여 진행한 사용성 연구로, 레퍼런스 페이지·함수 페이지·코드 에디터를 평가해 창작 코더들의 학습 경험을 개선했습니다.",
    role: "역할", team: "팀", duration: "기간", methods: "방법론",
    roleV: "UX 리서처", teamV: "팀 프로젝트", durationV: "2024", methodsV: "사용성 테스트 · 인지 워크스루 · 설문",
    s: ["개요", "p5.js 소개", "연구 질문", "참여자", "방법론", "주요 발견", "권고사항"],
    findings: [
      { title: "정보 계층 문제", desc: "함수 페이지 하단에 구문과 파라미터가 위치해 빠른 참조가 어려웠습니다." },
      { title: "기능 발견성", desc: "대부분의 참여자가 자동완성 기능을 좋아했지만 처음에 찾지 못했습니다." },
      { title: "필터링 및 검색 혼란", desc: "사용자들이 레퍼런스 페이지에서 함수를 필터링하고 검색하는 데 어려움을 겪었습니다." },
      { title: "현재 vs. 아카이브 버전", desc: "사용자들은 현대적인 인터랙티브 예제를 높이 평가했지만 빠른 참조에는 아카이브 버전이 더 효율적이라고 느꼈습니다." },
    ],
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    back: "← 戻る",
    tag: "UXリサーチ",
    title: "p5.js ユーザビリティ調査",
    subtitle: "p5.jsチームと連携して実施したモデレート付きユーザビリティスタディ。リファレンスページ・関数ページ・コードエディタを評価し、学習体験の改善を目指しました。",
    role: "役割", team: "チーム", duration: "期間", methods: "手法",
    roleV: "UXリサーチャー", teamV: "チームプロジェクト", durationV: "2024", methodsV: "ユーザビリティテスト · 認知ウォークスルー · アンケート",
    s: ["概要", "p5.jsについて", "リサーチ設問", "参加者", "手法", "主な発見", "提案"],
    findings: [
      { title: "情報階層の問題", desc: "関数ページの下部に構文とパラメータが配置されており、素早い参照が困難でした。" },
      { title: "機能の発見性", desc: "ほとんどの参加者がオートコンプリートを好んでいたものの、最初は見つけられませんでした。" },
      { title: "フィルタと検索の混乱", desc: "ユーザーはリファレンスページで関数を絞り込んで検索することに苦労していました。" },
      { title: "現行版とアーカイブ版の比較", desc: "ユーザーはモダンなインタラクティブ例を高く評価しましたが、素早い参照にはアーカイブ版が効率的と感じました。" },
    ],
  },
};

export default function P5Page() {
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
                { label: t.methods, value: t.methodsV },
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
          <Image src="/p5/p5 PIC.png" alt="p5.js Research" width={1200} height={700} className="w-full h-auto rounded-2xl" unoptimized />
        </div>
      </FadeIn>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-24">

          {/* About p5.js */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">01 — {t.s[1]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    p5.js is a JavaScript library and online platform that makes creative coding accessible to artists, educators, students, and beginners with little to no programming background. It serves as both a learning resource and a source for inspiration.
                  </p>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    Our team worked directly with the p5.js stakeholders to evaluate how effectively the reference page, function pages, and code editor support users when they learn, teach, and create.
                  </p>
                </div>
                <Image src="/p5/p5js-feature-image.png" alt="p5.js Feature" width={600} height={400} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* Research Questions */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">02 — {t.s[2]}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { num: "RQ1", title: "Expectations & Content Clarity", desc: "Does the reference page meet users' expectations during coding or teaching? How do users interpret the language, structure, and examples?" },
                  { num: "RQ2", title: "Navigation & Wayfinding", desc: "How do users navigate between the reference and other resources? What navigation elements do they rely on, and where do breakdowns occur?" },
                  { num: "RQ3", title: "Current vs. Archived Version", desc: "How do users perceive the current p5.js reference compared to the archived version in terms of scannability and cognitive load?" },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="p-6 rounded-2xl bg-neutral-50 space-y-3">
                    <p className="text-xs text-neutral-400 font-mono">{num}</p>
                    <p className="text-sm font-semibold text-neutral-800">{title}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Participants */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">03 — {t.s[3]}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { role: "p5.js Instructor", level: "Intermediate · 3+ years" },
                  { role: "Maker Space Teacher", level: "Intermediate · 2+ years" },
                  { role: "Graduate Student", level: "Beginner · 3–6 months" },
                  { role: "Fullstack Developer / TA", level: "Beginner · 3–6 months" },
                  { role: "Math & Coding Teacher", level: "Advanced · 3+ years" },
                  { role: "Designer", level: "Beginner · 3–6 months" },
                ].map(({ role, level }, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-100">
                    <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      P{i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-800">{role}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Methods */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">04 — {t.s[4]}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "01", title: "Cognitive Walkthrough", desc: "Systematically evaluated the interface against assumed user goals before live sessions, surfacing early hypotheses about where users might encounter difficulties." },
                  { icon: "02", title: "Moderated Usability Testing", desc: "6 participants completed 5 tasks via Zoom (45–60 min each) using think-aloud protocol, with a moderator, notetakers, and recording manager." },
                  { icon: "03", title: "Post-task Questionnaire", desc: "Covered overall experience, navigation, content clarity, and cognitive load. Mixed Likert scales and open-ended questions to triangulate observed behaviors." },
                ].map(({ icon, title, desc }) => (
                  <div key={icon} className="space-y-3">
                    <p className="text-2xl font-bold text-neutral-200 font-mono">{icon}</p>
                    <p className="text-sm font-semibold text-neutral-800">{title}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Key Findings */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">05 — {t.s[5]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.findings.map(({ title, desc }, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-neutral-100 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                      <p className="text-sm font-semibold text-neutral-800">{title}</p>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Recommendations */}
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase">06 — {t.s[6]}</p>
              <div className="space-y-4">
                {[
                  { severity: "Critical", color: "bg-red-100 text-red-700", title: "Elevate syntax & parameters", desc: "Move syntax and parameter details higher on function pages so users can reference key information without scrolling to the bottom." },
                  { severity: "Critical", color: "bg-red-100 text-red-700", title: "Improve reference navigation", desc: "Address filtering and search UX on the reference page — users rely on search as a primary entry point and the current system creates friction." },
                  { severity: "Moderate", color: "bg-yellow-100 text-yellow-700", title: "Surface autocomplete onboarding", desc: "Add a discoverable hint or tooltip to help users find the autocomplete feature in the code editor without stumbling upon it by chance." },
                  { severity: "Moderate", color: "bg-yellow-100 text-yellow-700", title: "Preserve scannability from archived version", desc: "Carry forward elements from the archived version — particularly the overview layout — that made quick scanning more efficient for educators." },
                ].map(({ severity, color, title, desc }) => (
                  <div key={title} className="flex gap-5 p-5 rounded-2xl border border-neutral-100">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full h-fit flex-shrink-0 ${color}`}>{severity}</span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-neutral-800">{title}</p>
                      <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

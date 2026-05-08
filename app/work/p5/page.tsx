"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage, type LangKey } from "@/app/context/language";
import { Navbar } from "@/app/components/Navbar";
import { ContactFooter } from "@/app/components/ContactFooter";
import { FadeIn } from "@/app/components/FadeIn";

const PINK = "#ED225D";

const content: Record<LangKey, {
  nav: { home: string; work: string; about: string };
  back: string; tag: string; title: string; subtitle: string;
  role: string; team: string; duration: string; methods: string;
  roleV: string; teamV: string; durationV: string; methodsV: string;
  s: string[];
}> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About" },
    back: "← Back",
    tag: "UX Research",
    title: "p5.js Usability Research",
    subtitle: "A moderated usability study conducted in direct partnership with the p5.js team, evaluating the reference page, function pages, and code editor to improve accessibility and learnability for creative coders worldwide.",
    role: "Role", team: "Team", duration: "Duration", methods: "Methods",
    roleV: "UX Researcher", teamV: "Team Project", durationV: "Spring 2026", methodsV: "Cognitive Walkthrough · Usability Testing · Survey",
    s: ["About p5.js", "Research Questions", "Methods", "Participants", "Key Insights", "Findings", "Recommendations", "Reflection"],
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    back: "← 返回",
    tag: "用户研究",
    title: "p5.js 可用性研究",
    subtitle: "与 p5.js 官方团队直接合作的可用性研究，评估参考页面、函数页面及代码编辑器，提升全球创意编程者的易用性与学习体验。",
    role: "角色", team: "团队", duration: "时间", methods: "方法",
    roleV: "用户研究员", teamV: "团队项目", durationV: "2026 春季", methodsV: "认知走查 · 可用性测试 · 问卷",
    s: ["关于 p5.js", "研究问题", "研究方法", "参与者", "核心洞察", "发现", "建议", "反思"],
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    back: "← Volver",
    tag: "Investigación UX",
    title: "Investigación de Usabilidad de p5.js",
    subtitle: "Estudio de usabilidad moderado en colaboración directa con el equipo de p5.js.",
    role: "Rol", team: "Equipo", duration: "Duración", methods: "Métodos",
    roleV: "Investigadora UX", teamV: "Proyecto en equipo", durationV: "Primavera 2026", methodsV: "Walkthrough cognitivo · Pruebas de usabilidad · Encuesta",
    s: ["Sobre p5.js", "Preguntas de investigación", "Métodos", "Participantes", "Hallazgos clave", "Hallazgos", "Recomendaciones", "Reflexión"],
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    back: "← 돌아가기",
    tag: "UX 리서치",
    title: "p5.js 사용성 연구",
    subtitle: "p5.js 팀과 직접 협력하여 진행한 사용성 연구.",
    role: "역할", team: "팀", duration: "기간", methods: "방법론",
    roleV: "UX 리서처", teamV: "팀 프로젝트", durationV: "2026년 봄", methodsV: "인지 워크스루 · 사용성 테스트 · 설문",
    s: ["p5.js 소개", "연구 질문", "방법론", "참여자", "핵심 인사이트", "발견", "권고사항", "회고"],
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    back: "← 戻る",
    tag: "UXリサーチ",
    title: "p5.js ユーザビリティ調査",
    subtitle: "p5.jsチームと直接連携して実施したユーザビリティスタディ。",
    role: "役割", team: "チーム", duration: "期間", methods: "手法",
    roleV: "UXリサーチャー", teamV: "チームプロジェクト", durationV: "2026年春", methodsV: "認知ウォークスルー · ユーザビリティテスト · アンケート",
    s: ["p5.jsについて", "リサーチ設問", "手法", "参加者", "主なインサイト", "発見", "提案", "振り返り"],
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
          <FadeIn delay={100}>
            <p className="text-sm tracking-widest uppercase mt-8 mb-4" style={{ color: PINK }}>{t.tag}</p>
          </FadeIn>
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

          {/* 01 — About p5.js */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-xs tracking-widest uppercase" style={{ color: PINK }}>01 — {t.s[0]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    p5.js is a JavaScript library and online platform that makes creative coding accessible to artists, educators, students, and beginners with little to no programming background. It serves as both a learning resource and a source for inspiration.
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Our team worked <span className="font-semibold text-neutral-800">directly with the p5.js stakeholders</span> to evaluate how effectively the <strong>reference page</strong>, <strong>individual function pages</strong>, and the <strong>code editor</strong> support users when they learn, teach, and create.
                  </p>
                  <div className="p-4 rounded-xl border-l-2" style={{ borderColor: PINK, backgroundColor: "#FFF0F4" }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: PINK }}>Core Trade-off Discovered</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">Participants highly valued the modernized interactivity and editable code examples, but found it <em>less efficient</em> for lesson planning and quick technical lookups compared to the archived version.</p>
                  </div>
                </div>
                <Image src="/p5/p5js-feature-image.png" alt="p5.js" width={600} height={400} className="w-full h-auto rounded-xl" unoptimized />
              </div>
            </div>
          </FadeIn>

          {/* 02 — Research Questions */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-xs tracking-widest uppercase" style={{ color: PINK }}>02 — {t.s[1]}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { num: "RQ1", title: "Expectations & Content Clarity", desc: "Does the current reference page meet users' expectations when they seek help during coding or teaching? How do users interpret the language, structure, and examples?" },
                  { num: "RQ2", title: "Navigation & Wayfinding", desc: "How do users navigate between the reference and other resources? What navigation elements do they rely on, and where do breakdowns occur?" },
                  { num: "RQ3", title: "Current vs. Archived Version", desc: "How do users perceive the current p5.js reference compared to the archived version in terms of scannability, cognitive load, and overview?" },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="p-6 rounded-2xl space-y-3" style={{ backgroundColor: "#FFF0F4" }}>
                    <p className="text-xs font-mono font-bold" style={{ color: PINK }}>{num}</p>
                    <p className="text-sm font-semibold text-neutral-800">{title}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 03 — Methods */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-xs tracking-widest uppercase" style={{ color: PINK }}>03 — {t.s[2]}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { num: "01", title: "Cognitive Walkthrough", desc: "Conducted before usability testing. Evaluated the interface against assumed user goals across 5 tasks, surfacing early hypotheses about breakdowns in navigation, hierarchy, and discoverability." },
                  { num: "02", title: "Moderated Usability Testing", desc: "6 participants · 5 tasks · 45–60 min via Zoom. Think-aloud protocol with a moderator, notetakers, and recording manager. Sessions covered Reference, Function pages, and the Code Editor." },
                  { num: "03", title: "Post-task Questionnaire", desc: "Covered overall experience, navigation, content clarity, and cognitive load. Mixed Likert scales and open-ended questions to triangulate observed behavior with self-reported experience." },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="space-y-3">
                    <p className="text-3xl font-bold" style={{ color: PINK, opacity: 0.2 }}>{num}</p>
                    <p className="text-sm font-semibold text-neutral-800">{title}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 04 — Participants */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-xs tracking-widest uppercase" style={{ color: PINK }}>04 — {t.s[3]}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { role: "p5.js Instructor", level: "Intermediate · 3+ years" },
                  { role: "Maker Space Teacher", level: "Intermediate · 2+ years" },
                  { role: "Graduate Student", level: "Beginner · 3–6 months" },
                  { role: "Fullstack Developer / TA", level: "Beginner · 3–6 months" },
                  { role: "Math & Coding Teacher", level: "Advanced · 3+ years" },
                  { role: "Designer", level: "Beginner · 3–6 months" },
                ].map(({ role, level }, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl border border-neutral-100">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: PINK }}>
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

          {/* 05 — Key Insights */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-xs tracking-widest uppercase" style={{ color: PINK }}>05 — {t.s[4]}</p>

              {/* Task success rates */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-neutral-700">Task Success Rates</p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { task: "T1 — Finding a Function (circle)", rate: 100, note: "6/6 — All participants located the function successfully." },
                    { task: "T2 — Editor Navigation (rect)", rate: 100, note: "6/6 — All reached documentation from the editor, though paths varied." },
                    { task: "T3 — Category Overview (shape)", rate: 83, note: "5/6 — One participant required assistance; text-only descriptions were too abstract." },
                    { task: "T4 — Complex Examples (loadModel)", rate: 83, note: "5/6 — One participant failed to differentiate between code examples." },
                    { task: "T5 — Archive Comparison", rate: 100, note: "6/6 — All completed the comparison across both versions." },
                  ].map(({ task, rate, note }) => (
                    <div key={task} className="flex items-center gap-4">
                      <p className="text-xs text-neutral-500 w-52 flex-shrink-0">{task}</p>
                      <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${rate}%`, backgroundColor: rate === 100 ? PINK : "#F4A7B9" }} />
                      </div>
                      <p className="text-xs font-semibold w-10 flex-shrink-0" style={{ color: PINK }}>{rate}%</p>
                      <p className="text-xs text-neutral-400 hidden md:block">{note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key split insight */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl text-white space-y-2" style={{ backgroundColor: PINK }}>
                  <p className="text-3xl font-bold">5 / 6</p>
                  <p className="text-sm font-semibold">preferred the archived version for scanning</p>
                  <p className="text-xs opacity-80">Citing better information layout, larger fonts, and clearer link affordances.</p>
                </div>
                <div className="p-6 rounded-2xl border-2 space-y-2" style={{ borderColor: PINK }}>
                  <p className="text-3xl font-bold" style={{ color: PINK }}>6 / 6</p>
                  <p className="text-sm font-semibold text-neutral-800">preferred the current version for learning</p>
                  <p className="text-xs text-neutral-500">Editable examples and Play/Stop buttons were standout improvements.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 06 — Findings */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-xs tracking-widest uppercase" style={{ color: PINK }}>06 — {t.s[5]}</p>

              {/* Reference Page */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-neutral-700 border-b border-neutral-100 pb-2">Reference Page</p>
                <div className="space-y-4">
                  {[
                    {
                      id: "F1", severity: "Severe", title: "\"Filter by Keyword\" confuses users",
                      desc: "3/6 participants were confused. Users defaulted to Ctrl+F or Google. The filter only matches function names — not descriptions or categories.",
                      quote: "\"Filter by keyword — is this just CTRL-F? But that's what a search bar is anyway.\" — P3",
                    },
                    {
                      id: "F2", severity: "Severe", title: "Function grouping doesn't match mental models",
                      desc: "5/6 completed Task 3 but had the lowest experience ratings (3.2/5). Current grouping mixes 2D/3D shapes in ways users don't expect.",
                      quote: "\"I'm so overwhelmed. You had shape, and then colors on the same page, and then typography.\" — P2",
                    },
                    {
                      id: "F3", severity: "Severe", title: "Jump-to navigation goes unnoticed",
                      desc: "Only 3/6 discovered it. It uses identical typeface and size to the global nav, making it invisible to most users.",
                      quote: "\"It's interesting I didn't notice it — it doesn't seem like it belongs to this page.\" — P6",
                    },
                    {
                      id: "F4", severity: "Moderate", title: "Hard to get a quick overview",
                      desc: "Current reference takes 17 scrolls to reach the bottom; archived version took 6. 5/6 wanted hover previews or thumbnails.",
                      quote: "\"Coming to a drawing tool, but all I see is text. I want a tooltip showing a circle, arc, quad.\" — P3",
                    },
                  ].map(({ id, severity, title, desc, quote }) => (
                    <div key={id} className="p-5 rounded-2xl border border-neutral-100 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded text-white" style={{ backgroundColor: PINK }}>{id}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500">{severity}</span>
                        <p className="text-sm font-semibold text-neutral-800">{title}</p>
                      </div>
                      <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                      <p className="text-xs text-neutral-400 italic border-l-2 pl-3" style={{ borderColor: PINK }}>{quote}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Editor */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-neutral-700 border-b border-neutral-100 pb-2">Code Editor</p>
                <div className="space-y-4">
                  {[
                    {
                      id: "F10", severity: "Severe", title: "Users don't know autocomplete exists",
                      desc: "At least 2 participants were unaware autocomplete existed. Default instinct was to open a new browser tab to the reference page.",
                      quote: "\"I actually don't normally go this way, I usually open up a new tab.\" — P1",
                    },
                    {
                      id: "F11", severity: "Severe", title: "Autocomplete is hidden and hard to turn on",
                      desc: "5/6 could not enable autocomplete without guidance. It's off by default and buried in General Settings. Right-clicking (habit from other tools) doesn't work.",
                      quote: "\"Oh my gosh, it's right there. Now I know. I will be using that.\" — P2 (after hint)",
                    },
                    {
                      id: "F13", severity: "Moderate", title: "Autocomplete turns off without users knowing",
                      desc: "The setting resets every time the user refreshes the page or closes the tab — which happens naturally when checking the reference.",
                      quote: "\"I assume that it was always on, don't know why it's turned off.\" — P1",
                    },
                  ].map(({ id, severity, title, desc, quote }) => (
                    <div key={id} className="p-5 rounded-2xl border border-neutral-100 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded text-white" style={{ backgroundColor: PINK }}>{id}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500">{severity}</span>
                        <p className="text-sm font-semibold text-neutral-800">{title}</p>
                      </div>
                      <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                      <p className="text-xs text-neutral-400 italic border-l-2 pl-3" style={{ borderColor: PINK }}>{quote}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 07 — Recommendations */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-xs tracking-widest uppercase" style={{ color: PINK }}>07 — {t.s[6]}</p>
              <div className="space-y-3">
                {[
                  { code: "R1", must: "Must", title: "Relocate Syntax & Parameters", desc: "Move syntax and parameter tables to the top of function pages, immediately following the description." },
                  { code: "R2", must: "Must", title: "Enable Autocomplete by Default", desc: "Set the Autocomplete Hinter in the web editor to ON by default to reduce discovery barriers." },
                  { code: "R3", must: "Must", title: "Fix Filter Scope", desc: "Redesign the keyword filter to search category names and descriptions, not just function titles." },
                  { code: "R4", must: "Must", title: "Ensure Autocomplete Persistence", desc: "Autocomplete setting should remain active after page refresh or tab closure." },
                  { code: "R5", must: "Should", title: "Add Example Headers", desc: "Provide short descriptive headers for each code example explaining what makes it different." },
                  { code: "R6", must: "Should", title: "Improve Jump-to Prominence", desc: "Visually distinguish intra-page navigation from global nav using color or borders." },
                  { code: "R8", must: "Could", title: "Compact View Toggle", desc: "Provide a toggle between detailed and compact views to restore the scannability of the archived version." },
                  { code: "R9", must: "Could", title: "Visual Tooltips / Hover Previews", desc: "Implement hover-over previews in the category view to show what a function draws." },
                ].map(({ code, must, title, desc }) => {
                  const mustColor = must === "Must" ? PINK : must === "Should" ? "#F4A7B9" : "#FAD4DF";
                  const mustText = must === "Must" ? "white" : neutral700;
                  return (
                    <div key={code} className="flex gap-4 p-4 rounded-xl border border-neutral-100 items-start">
                      <span className="text-xs font-mono font-bold px-2 py-1 rounded text-white flex-shrink-0" style={{ backgroundColor: PINK }}>{code}</span>
                      <span className="text-xs px-2 py-1 rounded-full flex-shrink-0 font-semibold" style={{ backgroundColor: mustColor, color: must === "Must" ? "white" : "#9B1A3A" }}>{must}</span>
                      <div>
                        <p className="text-sm font-semibold text-neutral-800">{title}</p>
                        <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* 08 — Reflection */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-xs tracking-widest uppercase" style={{ color: PINK }}>08 — {t.s[7]}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "What worked well", desc: "Deliberate sequencing of methods — cognitive walkthrough before usability testing let us surface early hypotheses and sharpen observation priorities. The mixed-methods analysis paired task success rates with think-aloud data for stronger evidence-based findings." },
                  { title: "What didn't work", desc: "Copy-paste was disabled in Zoom sessions, disrupting the natural rhythm. Entry points into tasks didn't always reflect naturalistic behavior (users typically land on p5.js via Google, not internal navigation)." },
                  { title: "What we'd do differently", desc: "A more thorough pilot study to catch technical issues. We'd also recruit more beginner users — they rely most heavily on documentation and represent p5.js's core value of community accessibility." },
                ].map(({ title, desc }) => (
                  <div key={title} className="space-y-3">
                    <p className="text-sm font-semibold" style={{ color: PINK }}>{title}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
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

const neutral700 = "#374151";

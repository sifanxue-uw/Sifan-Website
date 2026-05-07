"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage, type LangKey } from "@/app/context/language";
import { Navbar } from "@/app/components/Navbar";
import { FadeIn } from "@/app/components/FadeIn";
import { ContactFooter } from "@/app/components/ContactFooter";

const content: Record<LangKey, {
  nav: { home: string; work: string; about: string };
  tag: string;
  sub: string;
  overview: { role: string; roleVal: string; team: string; teamVal: string; timeline: string; timelineVal: string; tools: string; toolsVal: string };
  bg: { label: string; title: string; desc: string; what: string; whatDesc: string };
  stats: { value: string; label: string }[];
  method: { label: string; title: string; desc: string; steps: { num: string; title: string; desc: string }[] };
  findings: { label: string; title: string; desc: string; categories: { icon: string; title: string; desc: string }[] };
  recs: { label: string; title: string; desc: string; items: { title: string; desc: string }[] };
  impact: { label: string; title: string; desc: string; metrics: { value: string; label: string; sub: string }[] };
  reflection: { label: string; title: string; points: string[] };
  outro: { thanks: string; title: string; back: string };
}> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About" },
    tag: "UX Research · Usability Testing · QA · Tencent Games",
    sub: "Systematic usability testing and iterative optimization for an internal art asset management and collaboration platform — uncovering 100+ issues and driving a 95% fix rate through cross-functional collaboration.",
    overview: {
      role: "Role", roleVal: "QA & UX Research Intern",
      team: "Team", teamVal: "Tencent Games R&D\nInternational Business Unit",
      timeline: "Timeline", timelineVal: "Jun – Sep 2025\n(3 months)",
      tools: "Methods & Tools", toolsVal: "Usability Testing\nBug Tracking · Jira\nIterative Testing\nStakeholder Reports",
    },
    bg: {
      label: "01 — Background",
      title: "The Challenge",
      desc: "ArtFlow is Tencent Games' internal platform for art asset management and cross-team collaboration, used by game artists, producers, and engineers across distributed studios. As the platform grew in complexity, critical usability gaps began to slow down production workflows.",
      what: "About ArtFlow",
      whatDesc: "ArtFlow centralizes game art pipelines — handling asset versioning, team collaboration, lifecycle tracking, and workflow coordination across global game development teams. With hundreds of daily active users relying on it for shipping titles, even small friction points compound into significant productivity losses.",
    },
    stats: [
      { value: "5+", label: "Rounds of User Testing" },
      { value: "100+", label: "Issues Identified" },
      { value: "20+", label: "Key Recommendations" },
      { value: "95%", label: "Issue Fix Rate" },
    ],
    method: {
      label: "02 — Methodology",
      title: "How I Ran the Tests",
      desc: "I designed and executed a systematic usability testing program across multiple rounds, covering core workflows and edge cases that surfaced real production pain points.",
      steps: [
        { num: "01", title: "Test Planning", desc: "Defined scope, recruited internal users across roles (artists, APM, engineers), and designed task scenarios that mirrored real production workflows." },
        { num: "02", title: "Task Execution", desc: "Facilitated 5+ rounds of moderated usability tests, observing users interact with ArtFlow on tasks including asset upload, version control, collaboration handoffs, and status tracking." },
        { num: "03", title: "Issue Logging", desc: "Documented 100+ findings across interaction problems, edge cases, version conflict behaviors, and workflow breakdowns — each tagged by severity, frequency, and affected component." },
        { num: "04", title: "Analysis & Reporting", desc: "Synthesized findings into structured usability evaluation reports, mapping issues to user goals and identifying root causes in interface clarity, error states, and task flow logic." },
        { num: "05", title: "Recommendations", desc: "Proposed 20+ actionable design improvements prioritized by impact, including progress visualization, system state unification, and error message clarity enhancements." },
        { num: "06", title: "Validation Testing", desc: "Conducted before/after comparison testing on implemented changes, verifying that fixes resolved the original issues without introducing new friction." },
      ],
    },
    findings: {
      label: "03 — Key Findings",
      title: "What We Uncovered",
      desc: "Testing revealed four major categories of usability issues affecting daily productivity and team collaboration across distributed studios.",
      categories: [
        { icon: "⚠", title: "Interface Clarity", desc: "Labels, icons, and status indicators were ambiguous — users frequently misread asset states, leading to duplicate uploads and version overwrites." },
        { icon: "🔁", title: "Version Conflict Handling", desc: "Concurrent editing by distributed teams triggered unresolved conflicts with no clear system feedback, causing silent data loss in collaborative workflows." },
        { icon: "⛔", title: "Error State Communication", desc: "Error messages lacked specificity and recovery paths — users didn't know what failed, why it failed, or how to proceed, increasing support tickets." },
        { icon: "📋", title: "Workflow Interruptions", desc: "Core task flows (upload → review → approve → publish) were interrupted by missing progress indicators and inconsistent system behavior across modules." },
      ],
    },
    recs: {
      label: "04 — Recommendations",
      title: "20+ Improvements Proposed",
      desc: "Each recommendation was grounded in observed user behavior and tied to a specific usability failure. The product team adopted all major suggestions for implementation.",
      items: [
        { title: "Progress Visualization", desc: "Add persistent, real-time progress indicators for long-running operations like batch uploads and pipeline processing to reduce user uncertainty." },
        { title: "System State Unification", desc: "Standardize status labels and state transitions across all modules — eliminate inconsistencies where identical states displayed differently depending on context." },
        { title: "Conflict Resolution UI", desc: "Design an explicit conflict resolution flow with side-by-side comparison and clear ownership attribution when version conflicts occur." },
        { title: "Error Message Redesign", desc: "Replace generic error strings with specific, actionable messages that tell users what went wrong, who it affects, and how to recover." },
        { title: "Contextual Tooltips", desc: "Add inline help text and tooltips to technical fields and status badges to reduce cognitive load for non-technical collaborators." },
        { title: "Bulk Action Feedback", desc: "Provide operation summaries after batch actions, confirming what succeeded, what failed, and why — instead of silent completion." },
      ],
    },
    impact: {
      label: "05 — Impact",
      title: "Measurable Outcomes",
      desc: "Through close collaboration with product designers, frontend, and backend engineers, usability issues were systematically converted into shipped improvements.",
      metrics: [
        { value: "95%", label: "Fix Rate", sub: "Of identified issues resolved after iterative testing cycles" },
        { value: "100+", label: "Bug Tickets", sub: "Filed and tracked through full resolution lifecycle" },
        { value: "20+", label: "Adopted", sub: "Key design recommendations implemented by the product team" },
        { value: "5+", label: "Test Rounds", sub: "Ensuring fixes held and no regression was introduced" },
      ],
    },
    reflection: {
      label: "06 — Reflection",
      title: "What I Learned",
      points: [
        "Working inside a large-scale internal tool taught me how compounding friction erodes productivity at scale — a tiny ambiguous label multiplied across hundreds of daily users creates thousands of minutes of lost time.",
        "Bridging research and engineering required translating subjective usability observations into specific, reproducible bug reports — a skill that made me a more precise communicator.",
        "The 95% fix rate came from building a trust loop with the engineering team: clear reproduction steps, severity framing, and proactive follow-up validation replaced one-off reports with a continuous improvement cycle.",
        "Before/after comparison testing proved the value of closing the loop — it's not enough to file issues, you have to verify the solution actually solves the problem for real users.",
      ],
    },
    outro: { thanks: "Thanks for reading", title: "Want to see more work?", back: "← Back to All Projects" },
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    tag: "用户研究 · 可用性测试 · QA · 腾讯游戏",
    sub: "针对内部美术资源管理与协作平台开展系统性可用性测试与迭代优化——识别百余处问题，通过跨职能协作推动 95% 的问题修复率。",
    overview: {
      role: "角色", roleVal: "QA & 用户体验研究实习生",
      team: "团队", teamVal: "腾讯游戏研发\n国际业务团队",
      timeline: "时间", timelineVal: "2025年6月 – 9月\n（3个月）",
      tools: "方法 & 工具", toolsVal: "可用性测试\nBug 追踪 · Jira\n迭代测试\n利益相关者报告",
    },
    bg: {
      label: "01 — 背景",
      title: "挑战所在",
      desc: "ArtFlow 是腾讯游戏内部的美术资源管理与跨团队协作平台，供分布式工作室的游戏美术师、制作人和工程师使用。随着平台功能日趋复杂，关键的可用性缺口开始拖慢生产工作流程。",
      what: "关于 ArtFlow",
      whatDesc: "ArtFlow 集中管理游戏美术流水线——包括资源版本控制、团队协作、生命周期追踪及全球游戏开发团队的工作流协调。每天有数百名活跃用户依赖它来交付游戏，即使是微小的摩擦点也会带来显著的生产力损耗。",
    },
    stats: [
      { value: "5+", label: "轮用户测试" },
      { value: "100+", label: "识别问题数量" },
      { value: "20+", label: "关键建议" },
      { value: "95%", label: "问题修复率" },
    ],
    method: {
      label: "02 — 方法论",
      title: "测试执行方式",
      desc: "我设计并执行了多轮系统性可用性测试方案，覆盖核心工作流程和边缘案例，挖掘出真实生产中的痛点。",
      steps: [
        { num: "01", title: "测试规划", desc: "明确范围，招募跨角色内部用户（美术师、APM、工程师），设计贴近真实生产场景的任务方案。" },
        { num: "02", title: "任务执行", desc: "主持 5 余轮有引导的可用性测试，观察用户在资源上传、版本控制、协同交接和状态追踪等任务中的操作行为。" },
        { num: "03", title: "问题记录", desc: "整理 100+ 项发现，涵盖交互问题、边缘案例、版本冲突行为和工作流中断点，按严重程度、频率和受影响组件分类标注。" },
        { num: "04", title: "分析与报告", desc: "将发现整合为结构化可用性评估报告，将问题映射至用户目标，识别界面清晰度、错误状态和任务流逻辑中的根本原因。" },
        { num: "05", title: "优化建议", desc: "提出 20+ 条按影响力优先排序的可行设计改进方案，包括进度可视化、系统状态统一化和错误提示清晰度提升。" },
        { num: "06", title: "验证测试", desc: "对已实施的改动开展前后对比测试，验证修复是否解决了原始问题，并未引入新的摩擦。" },
      ],
    },
    findings: {
      label: "03 — 核心发现",
      title: "发现了什么",
      desc: "测试揭示了四类影响日常生产效率和跨工作室团队协作的主要可用性问题。",
      categories: [
        { icon: "⚠", title: "界面清晰度", desc: "标签、图标和状态指示器存在歧义——用户频繁误读资源状态，导致重复上传和版本覆盖。" },
        { icon: "🔁", title: "版本冲突处理", desc: "分布式团队并发编辑触发未解决的冲突，系统缺乏清晰反馈，在协作工作流中造成静默数据丢失。" },
        { icon: "⛔", title: "错误状态传达", desc: "错误提示缺乏具体性和恢复路径——用户不知道什么失败了、为何失败，也不知道如何继续，导致支持工单增加。" },
        { icon: "📋", title: "工作流中断", desc: "核心任务流程（上传→审核→批准→发布）因缺少进度指示器和跨模块行为不一致而频繁中断。" },
      ],
    },
    recs: {
      label: "04 — 优化建议",
      title: "20+ 项改进方案",
      desc: "每条建议都基于观察到的用户行为，并与具体的可用性失败点挂钩。产品团队采纳了所有主要建议并落地实施。",
      items: [
        { title: "进度可视化", desc: "为批量上传和流水线处理等长时操作添加持续性实时进度指示器，降低用户不确定感。" },
        { title: "系统状态统一化", desc: "规范所有模块的状态标签和状态转换——消除相同状态在不同上下文中显示不一致的问题。" },
        { title: "冲突解决界面", desc: "设计显式冲突解决流程，在版本冲突时提供并排对比和清晰的所有权归属。" },
        { title: "错误提示重设计", desc: "用具体、可操作的提示替代通用错误字符串，告知用户出了什么问题、影响谁、如何恢复。" },
        { title: "情境化工具提示", desc: "为技术字段和状态标签添加内联帮助文本和工具提示，降低非技术协作者的认知负荷。" },
        { title: "批量操作反馈", desc: "在批量操作后提供操作摘要，说明成功了哪些、失败了哪些及原因，而非静默完成。" },
      ],
    },
    impact: {
      label: "05 — 影响",
      title: "可量化的成果",
      desc: "通过与产品设计师、前端和后端工程师的紧密协作，可用性问题被系统性地转化为已上线的改进。",
      metrics: [
        { value: "95%", label: "修复率", sub: "经迭代测试周期后，已识别问题的修复比例" },
        { value: "100+", label: "Bug 工单", sub: "提交并追踪至完整解决生命周期" },
        { value: "20+", label: "建议落地", sub: "关键设计建议被产品团队采纳并实施" },
        { value: "5+", label: "测试轮次", sub: "确保修复稳定且未引入回归问题" },
      ],
    },
    reflection: {
      label: "06 — 反思",
      title: "我学到了什么",
      points: [
        "在大规模内部工具中工作让我深刻体会到，累积的摩擦如何在规模化下侵蚀生产效率——一个模糊的标签乘以数百名日活用户，就是数千分钟的时间损耗。",
        "连接研究与工程需要将主观的可用性观察转化为具体、可复现的 bug 报告——这项技能让我成为更精准的沟通者。",
        "95% 的修复率来自于与工程团队建立信任闭环：清晰的复现步骤、严重性框架和主动的跟进验证，将一次性报告转变为持续改进的循环。",
        "前后对比测试证明了闭环的价值——仅仅提交问题是不够的，你还必须验证解决方案确实为真实用户解决了问题。",
      ],
    },
    outro: { thanks: "感谢阅读", title: "想看更多作品？", back: "← 返回所有项目" },
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    tag: "Investigación UX · Pruebas de Usabilidad · QA · Tencent Games",
    sub: "Pruebas de usabilidad sistemáticas y optimización iterativa para una plataforma interna de gestión de activos artísticos — identificando 100+ problemas y logrando un 95% de tasa de corrección.",
    overview: {
      role: "Rol", roleVal: "Pasante de QA & Investigación UX",
      team: "Equipo", teamVal: "Tencent Games R&D\nUnidad de Negocio Internacional",
      timeline: "Período", timelineVal: "Jun – Sep 2025\n(3 meses)",
      tools: "Métodos & Herramientas", toolsVal: "Pruebas de Usabilidad\nSeguimiento de Bugs · Jira\nPruebas Iterativas\nInformes",
    },
    bg: { label: "01 — Contexto", title: "El Desafío", desc: "ArtFlow es la plataforma interna de Tencent Games para gestión de activos artísticos y colaboración entre equipos distribuidos.", what: "Sobre ArtFlow", whatDesc: "ArtFlow centraliza los pipelines de arte de juegos, manejando versiones, colaboración, seguimiento del ciclo de vida y coordinación de flujos de trabajo." },
    stats: [{ value: "5+", label: "Rondas de Pruebas" }, { value: "100+", label: "Problemas Identificados" }, { value: "20+", label: "Recomendaciones" }, { value: "95%", label: "Tasa de Corrección" }],
    method: { label: "02 — Metodología", title: "Cómo Ejecuté las Pruebas", desc: "Diseñé y ejecuté un programa sistemático de pruebas de usabilidad en múltiples rondas.", steps: [{ num: "01", title: "Planificación", desc: "Definí alcance, reclutando usuarios internos de múltiples roles y diseñando escenarios de tareas reales." }, { num: "02", title: "Ejecución", desc: "Facilité 5+ rondas de pruebas moderadas observando interacciones reales." }, { num: "03", title: "Registro", desc: "Documenté 100+ hallazgos categorizados por severidad y componente." }, { num: "04", title: "Análisis", desc: "Sinteticé hallazgos en informes estructurados de evaluación de usabilidad." }, { num: "05", title: "Recomendaciones", desc: "Propuse 20+ mejoras priorizadas por impacto." }, { num: "06", title: "Validación", desc: "Realicé pruebas comparativas antes/después para verificar las correcciones." }] },
    findings: { label: "03 — Hallazgos", title: "Lo que Descubrimos", desc: "Las pruebas revelaron cuatro categorías principales de problemas de usabilidad.", categories: [{ icon: "⚠", title: "Claridad de Interfaz", desc: "Etiquetas e iconos ambiguos causaban lecturas erróneas de estados." }, { icon: "🔁", title: "Manejo de Conflictos", desc: "La edición concurrente generaba conflictos sin retroalimentación clara." }, { icon: "⛔", title: "Mensajes de Error", desc: "Los errores carecían de especificidad y rutas de recuperación." }, { icon: "📋", title: "Interrupciones de Flujo", desc: "Los flujos de tareas principales se interrumpían por falta de indicadores de progreso." }] },
    recs: { label: "04 — Recomendaciones", title: "20+ Mejoras Propuestas", desc: "Cada recomendación fue fundamentada en comportamiento observado.", items: [{ title: "Visualización de Progreso", desc: "Indicadores en tiempo real para operaciones largas." }, { title: "Unificación de Estados", desc: "Estandarizar etiquetas de estado en todos los módulos." }, { title: "UI de Resolución de Conflictos", desc: "Flujo explícito con comparación lado a lado." }, { title: "Rediseño de Errores", desc: "Mensajes específicos y accionables." }, { title: "Tooltips Contextuales", desc: "Ayuda inline para campos técnicos." }, { title: "Feedback de Acciones Masivas", desc: "Resúmenes de operación tras acciones en lote." }] },
    impact: { label: "05 — Impacto", title: "Resultados Medibles", desc: "A través de colaboración multifuncional, los problemas se convirtieron en mejoras implementadas.", metrics: [{ value: "95%", label: "Tasa de Corrección", sub: "Problemas resueltos tras ciclos iterativos" }, { value: "100+", label: "Tickets de Bug", sub: "Archivados y rastreados hasta resolución" }, { value: "20+", label: "Adoptadas", sub: "Recomendaciones implementadas por el equipo" }, { value: "5+", label: "Rondas de Prueba", sub: "Asegurando estabilidad sin regresiones" }] },
    reflection: { label: "06 — Reflexión", title: "Lo que Aprendí", points: ["Trabajar en una herramienta interna a gran escala me enseñó cómo la fricción acumulada erosiona la productividad a escala.", "Conectar investigación e ingeniería requirió traducir observaciones subjetivas en reportes reproducibles y precisos.", "La tasa del 95% surgió de construir un ciclo de confianza con el equipo de ingeniería.", "Las pruebas comparativas antes/después demostraron el valor de cerrar el ciclo."] },
    outro: { thanks: "Gracias por leer", title: "¿Quieres ver más trabajo?", back: "← Volver a Proyectos" },
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    tag: "UX 리서치 · 사용성 테스트 · QA · 텐센트 게임즈",
    sub: "내부 아트 에셋 관리 플랫폼에 대한 체계적인 사용성 테스트와 반복 최적화 — 100개 이상의 문제를 발견하고 95% 수정률을 달성했습니다.",
    overview: {
      role: "역할", roleVal: "QA & UX 리서치 인턴",
      team: "팀", teamVal: "텐센트 게임즈 R&D\n국제 비즈니스 유닛",
      timeline: "기간", timelineVal: "2025년 6월 – 9월\n(3개월)",
      tools: "방법 & 툴", toolsVal: "사용성 테스트\n버그 추적 · Jira\n반복 테스트\n이해관계자 보고서",
    },
    bg: { label: "01 — 배경", title: "과제", desc: "ArtFlow는 분산된 스튜디오의 게임 아티스트, 프로듀서, 엔지니어가 사용하는 텐센트 게임즈의 내부 플랫폼입니다.", what: "ArtFlow 소개", whatDesc: "ArtFlow는 게임 아트 파이프라인을 중앙화하여 에셋 버전 관리, 팀 협업, 수명 주기 추적, 글로벌 워크플로우 조정을 처리합니다." },
    stats: [{ value: "5+", label: "테스트 라운드" }, { value: "100+", label: "발견된 문제" }, { value: "20+", label: "핵심 권고사항" }, { value: "95%", label: "문제 수정률" }],
    method: { label: "02 — 방법론", title: "테스트 실행 방법", desc: "핵심 워크플로우와 엣지 케이스를 아우르는 다중 라운드 체계적 사용성 테스트 프로그램을 설계하고 실행했습니다.", steps: [{ num: "01", title: "테스트 계획", desc: "범위 정의, 역할별 내부 사용자 모집, 실제 프로덕션 워크플로우를 반영한 태스크 시나리오 설계." }, { num: "02", title: "태스크 실행", desc: "5+ 라운드의 진행 주도 사용성 테스트를 통해 에셋 업로드, 버전 관리, 협업 핸드오프 등 태스크를 관찰." }, { num: "03", title: "이슈 기록", desc: "심각도, 빈도, 영향 컴포넌트별로 분류된 100+ 건의 발견사항 문서화." }, { num: "04", title: "분석 및 보고", desc: "발견사항을 구조화된 사용성 평가 보고서로 종합하고 근본 원인 파악." }, { num: "05", title: "권고사항", desc: "영향력 기준으로 우선순위화된 20+ 가지 실행 가능한 개선안 제안." }, { num: "06", title: "검증 테스트", desc: "구현된 변경사항에 대한 전후 비교 테스트를 통해 수정 효과 검증." }] },
    findings: { label: "03 — 주요 발견", title: "무엇을 발견했나", desc: "테스트를 통해 분산된 스튜디오 간 일상적인 생산성과 협업에 영향을 미치는 네 가지 주요 사용성 문제 범주가 드러났습니다.", categories: [{ icon: "⚠", title: "인터페이스 명확성", desc: "레이블과 아이콘의 모호함으로 에셋 상태 오독이 빈번하게 발생." }, { icon: "🔁", title: "버전 충돌 처리", desc: "분산 팀의 동시 편집이 시스템 피드백 없이 충돌을 유발하여 데이터 손실 초래." }, { icon: "⛔", title: "오류 상태 전달", desc: "오류 메시지의 구체성 부족으로 사용자가 복구 방법을 알지 못함." }, { icon: "📋", title: "워크플로우 중단", desc: "진행 상황 표시기 부재와 모듈 간 불일치 동작으로 핵심 태스크 플로우가 중단됨." }] },
    recs: { label: "04 — 권고사항", title: "20+ 개선안 제안", desc: "각 권고사항은 관찰된 사용자 행동에 근거하며 특정 사용성 실패와 연결되었습니다.", items: [{ title: "진행 상황 시각화", desc: "장시간 작업에 대한 실시간 진행 지표 추가." }, { title: "시스템 상태 통일화", desc: "모든 모듈에서 상태 레이블과 전환의 표준화." }, { title: "충돌 해결 UI", desc: "나란히 비교와 명확한 소유권을 갖춘 명시적 충돌 해결 플로우." }, { title: "오류 메시지 재설계", desc: "문제, 영향, 복구 방법을 알려주는 구체적이고 실행 가능한 메시지." }, { title: "컨텍스트 툴팁", desc: "기술 필드와 상태 배지에 인라인 도움말 추가." }, { title: "일괄 작업 피드백", desc: "성공, 실패, 이유를 명확히 알려주는 작업 요약 제공." }] },
    impact: { label: "05 — 임팩트", title: "측정 가능한 성과", desc: "제품 디자이너, 프론트엔드 및 백엔드 엔지니어와의 긴밀한 협업을 통해 사용성 문제가 출시된 개선사항으로 전환되었습니다.", metrics: [{ value: "95%", label: "수정률", sub: "반복 테스트 사이클 후 식별된 문제의 해결 비율" }, { value: "100+", label: "버그 티켓", sub: "전체 해결 생명 주기까지 제출 및 추적" }, { value: "20+", label: "채택됨", sub: "제품팀이 구현한 주요 설계 권고사항" }, { value: "5+", label: "테스트 라운드", sub: "수정 안정성 및 회귀 없음 보장" }] },
    reflection: { label: "06 — 회고", title: "배운 것들", points: ["대규모 내부 도구 작업은 누적된 마찰이 규모에서 생산성을 어떻게 침식하는지 가르쳐줬습니다.", "리서치와 엔지니어링을 연결하려면 주관적인 사용성 관찰을 구체적이고 재현 가능한 버그 보고서로 변환해야 했습니다.", "95% 수정률은 엔지니어링 팀과 신뢰 루프를 구축함으로써 달성되었습니다.", "전후 비교 테스트는 루프 마감의 가치를 증명했습니다." ] },
    outro: { thanks: "읽어주셔서 감사합니다", title: "더 많은 작업을 보고 싶으신가요?", back: "← 모든 프로젝트로 돌아가기" },
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    tag: "UXリサーチ · ユーザビリティテスト · QA · テンセントゲームズ",
    sub: "内部アートアセット管理プラットフォームの体系的なユーザビリティテストと反復最適化 — 100件以上の問題を発見し、95%の修正率を達成。",
    overview: {
      role: "役割", roleVal: "QA & UXリサーチインターン",
      team: "チーム", teamVal: "テンセントゲームズR&D\n国際ビジネスユニット",
      timeline: "期間", timelineVal: "2025年6月 – 9月\n（3ヶ月）",
      tools: "手法 & ツール", toolsVal: "ユーザビリティテスト\nバグ追跡 · Jira\n反復テスト\nステークホルダーレポート",
    },
    bg: { label: "01 — 背景", title: "課題", desc: "ArtFlowはテンセントゲームズの内部プラットフォームで、分散スタジオのゲームアーティスト、プロデューサー、エンジニアが使用しています。", what: "ArtFlowについて", whatDesc: "ArtFlowはゲームアートパイプラインを一元化し、アセットのバージョン管理、チームコラボレーション、ライフサイクル追跡、グローバルワークフローを処理します。" },
    stats: [{ value: "5+", label: "テストラウンド" }, { value: "100+", label: "特定された問題" }, { value: "20+", label: "主要提言" }, { value: "95%", label: "修正率" }],
    method: { label: "02 — 方法論", title: "テストの実施方法", desc: "コアワークフローとエッジケースをカバーする複数ラウンドの体系的なユーザビリティテストプログラムを設計・実施しました。", steps: [{ num: "01", title: "テスト計画", desc: "スコープ定義、役割別内部ユーザーの採用、実際の制作ワークフローを反映したタスクシナリオ設計。" }, { num: "02", title: "タスク実行", desc: "5回以上のモデレートユーザビリティテストを実施し、実際のインタラクションを観察。" }, { num: "03", title: "問題記録", desc: "重大度、頻度、影響コンポーネント別に分類された100件以上の発見事項を文書化。" }, { num: "04", title: "分析とレポート", desc: "発見事項を構造化されたユーザビリティ評価レポートにまとめ。" }, { num: "05", title: "提言", desc: "影響度で優先順位付けされた20件以上の実行可能な改善案を提案。" }, { num: "06", title: "検証テスト", desc: "実装された変更に対して前後比較テストを実施し、修正効果を検証。" }] },
    findings: { label: "03 — 主要発見", title: "発見したこと", desc: "テストにより、日常の生産性とチームコラボレーションに影響する4つの主要なユーザビリティ問題カテゴリが明らかになりました。", categories: [{ icon: "⚠", title: "インターフェースの明確さ", desc: "曖昧なラベルとアイコンがアセット状態の誤読を引き起こしていた。" }, { icon: "🔁", title: "バージョン競合処理", desc: "分散チームの同時編集がシステムフィードバックなしに競合を引き起こし、データ損失を招いた。" }, { icon: "⛔", title: "エラー状態の伝達", desc: "エラーメッセージに具体性と回復経路が欠けていた。" }, { icon: "📋", title: "ワークフロー中断", desc: "進行状況インジケーターの欠如とモジュール間の不整合で主要タスクフローが中断された。" }] },
    recs: { label: "04 — 提言", title: "20件以上の改善案", desc: "各提言は観察されたユーザー行動に基づき、具体的なユーザビリティ失敗と紐づけられています。", items: [{ title: "進捗の可視化", desc: "長時間操作のリアルタイム進行状況インジケーターを追加。" }, { title: "システム状態の統一", desc: "すべてのモジュールでステータスラベルと状態遷移を標準化。" }, { title: "競合解決UI", desc: "明確な所有権帰属を持つ並列比較付き競合解決フロー。" }, { title: "エラーメッセージ再設計", desc: "問題・影響・回復方法を伝える具体的なメッセージ。" }, { title: "コンテキストツールチップ", desc: "技術フィールドとステータスバッジにインラインヘルプを追加。" }, { title: "一括操作フィードバック", desc: "成功・失敗・理由を明確にした操作サマリーを提供。" }] },
    impact: { label: "05 — インパクト", title: "測定可能な成果", desc: "プロダクトデザイナー、フロントエンドおよびバックエンドエンジニアとの緊密な連携により、ユーザビリティ問題が出荷された改善に変換されました。", metrics: [{ value: "95%", label: "修正率", sub: "反復テストサイクル後の問題解決率" }, { value: "100+", label: "バグチケット", sub: "完全解決ライフサイクルまで追跡" }, { value: "20+", label: "採用済み", sub: "チームが実装した主要設計提言" }, { value: "5+", label: "テストラウンド", sub: "修正の安定性と回帰なしを確保" }] },
    reflection: { label: "06 — 振り返り", title: "学んだこと", points: ["大規模な内部ツールでの作業は、蓄積された摩擦がスケールで生産性をどのように侵食するかを教えてくれました。", "リサーチとエンジニアリングを橋渡しするには、主観的な観察を具体的で再現可能なバグレポートに変換する必要がありました。", "95%の修正率は、エンジニアリングチームとの信頼ループ構築から生まれました。", "前後比較テストは、ループを閉じることの価値を証明しました。" ] },
    outro: { thanks: "お読みいただきありがとうございます", title: "もっと作品を見たいですか？", back: "← 全プロジェクトに戻る" },
  },
};

export default function ArtFlow() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">
      <Navbar nav={t.nav} />

      {/* ── Hero ── */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-blue-500 mb-5">{t.tag}</p>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="text-6xl font-bold tracking-tight leading-tight mb-6">ArtFlow</h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed mb-16">{t.sub}</p>
          </FadeIn>
          {/* Hero image */}
          <FadeIn delay={240}>
            <figure>
              <div className="w-full rounded-3xl overflow-hidden shadow-sm">
                <Image src="/artflow/cover.png" alt="ArtFlow — Tencent AI Art Platform" width={1200} height={700} className="w-full h-auto" priority />
              </div>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-14 px-6 bg-[#0D1B3E]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:divide-x md:divide-white/10">
          {[
            { label: t.overview.role, val: t.overview.roleVal },
            { label: t.overview.team, val: t.overview.teamVal },
            { label: t.overview.timeline, val: t.overview.timelineVal },
            { label: t.overview.tools, val: t.overview.toolsVal },
          ].map(({ label, val }, i) => (
            <FadeIn key={label} delay={i * 80}>
              <div className={i > 0 ? "md:pl-10" : ""}>
                <p className="text-[11px] tracking-[0.22em] uppercase text-blue-500 mb-3">{label}</p>
                <p className="text-white/85 font-medium leading-relaxed whitespace-pre-line text-sm">{val}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {t.stats.map((s, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="p-7 bg-white rounded-2xl border border-blue-100 text-center shadow-sm">
                  <p className="text-4xl font-bold text-blue-600 mb-2">{s.value}</p>
                  <p className="text-neutral-500 text-sm leading-snug">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 Background ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-blue-500 mb-4">{t.bg.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">{t.bg.title}</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-14">{t.bg.desc}</p>
          </FadeIn>
          <FadeIn>
            <div className="p-10 rounded-2xl bg-neutral-50 border border-neutral-100">
              <p className="text-[11px] tracking-[0.22em] uppercase text-blue-500 mb-4">{t.bg.what}</p>
              <p className="text-neutral-600 leading-relaxed">{t.bg.whatDesc}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 02 Methodology ── */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-blue-500 mb-4">{t.method.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">{t.method.title}</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-14">{t.method.desc}</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.method.steps.map((step, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="p-7 bg-white rounded-2xl border border-neutral-100 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">{step.num}</span>
                    <h3 className="font-semibold text-base">{step.title}</h3>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Findings ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-blue-500 mb-4">{t.findings.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">{t.findings.title}</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-14">{t.findings.desc}</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.findings.categories.map((cat, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="p-8 rounded-2xl border border-neutral-100 bg-white hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="text-3xl mb-4">{cat.icon}</div>
                  <h3 className="font-semibold text-base mb-3">{cat.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Recommendations ── */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-blue-500 mb-4">{t.recs.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">{t.recs.title}</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-14">{t.recs.desc}</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.recs.items.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="p-6 rounded-2xl border border-neutral-100 bg-white hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mb-5" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Impact ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-blue-500 mb-4">{t.impact.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">{t.impact.title}</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-14">{t.impact.desc}</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.impact.metrics.map((m, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="p-8 rounded-2xl bg-[#0D1B3E] text-white">
                  <p className="text-5xl font-bold text-blue-500 mb-2">{m.value}</p>
                  <p className="text-white font-semibold mb-1">{m.label}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{m.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 Reflection ── */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-blue-500 mb-4">{t.reflection.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-14">{t.reflection.title}</h2>
          </FadeIn>
          <div className="space-y-5">
            {t.reflection.points.map((point, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex gap-6 p-7 bg-white rounded-2xl border border-neutral-100">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold flex items-center justify-center">{i + 1}</div>
                  <p className="text-neutral-600 leading-relaxed text-sm pt-1">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outro ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="text-neutral-400 text-sm tracking-wide mb-5">{t.outro.thanks}</p>
            <h2 className="text-3xl font-bold tracking-tight mb-10">{t.outro.title}</h2>
            <Link
              href="/#work"
              className="inline-block px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors text-sm"
            >
              {t.outro.back}
            </Link>
          </FadeIn>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

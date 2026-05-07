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
  overview: { role: string; roleVal: string; deliverables: string; deliverablesVal: string; tools: string; toolsVal: string };
  bg: { label: string; title: string; desc: string; market: string; messiDesc: string; tedDesc: string; fifaDesc: string };
  painPoints: { title: string; desc: string }[];
  research: { label: string; title: string; desc: string; stats: { value: string; label: string }[]; painLabel: string; methodsLabel: string; methodsDesc: string; empathyLabel: string; empathyDesc: string; personasLabel: string; personasDesc: string };
  persona1: { quote: string; pains: string[] };
  persona2: { quote: string; pains: string[] };
  process: { label: string; title: string; desc: string; steps: string[]; featuresTitle: string };
  features: { title: string; desc: string }[];
  physical: { label: string; title: string; desc: string; hwLabel: string; hwTitle: string; hwDesc: string; hwFeatures: string[]; journeyLabel: string; journeyTitle: string; steps: { step: string; desc: string }[] };
  final: { label: string; title: string; desc: string; screens: string[] };
  outro: { thanks: string; title: string; back: string };
}> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About" },
    tag: "Mobile App · Product Design · UX Research",
    sub: "Where Passion Meets Simplicity and Personalization — a soccer companion app and physical display device designed to bring North American fans closer to the beautiful game.",
    overview: { role: "Role", roleVal: "UX Designer\nProduct Designer", deliverables: "Deliverables", deliverablesVal: "Mobile App Design\nPhysical Device Design\nUX Research", tools: "Tools", toolsVal: "Figma · Blender\nUser Interviews · Surveys" },
    bg: { label: "01 — Background", title: "The Problem", desc: "As a soccer fan living in North America, I experienced the challenges that hinder the sport's accessibility and enjoyment firsthand. Soccer trails far behind the NFL and NBA despite rapid growth — particularly among younger, diverse audiences under 45.", market: "Market Opportunity", messiDesc: "viewers for Messi's MLS debut — the most-watched MLS match in 20 years", tedDesc: "minutes watched of Ted Lasso S3 — entertainment broadening soccer's appeal", fifaDesc: "projected economic impact from the 2026 FIFA World Cup in North America" },
    painPoints: [
      { title: "Fragmented Broadcasters", desc: "Soccer content is scattered across CBS, NBC, ESPN, Apple TV, and more — each requiring a separate subscription." },
      { title: "Lack of Soccer Culture", desc: "In the U.S., only 20% follow soccer vs. 52% NFL and 42% NBA — a huge gap in cultural engagement." },
      { title: "Complex Interfaces", desc: "Existing apps are cluttered with ads and unnecessary features, making it hard to find key match info quickly." },
      { title: "Missed Matches", desc: "Busy users miss games due to scheduling conflicts with no simple way to stay updated on the go." },
    ],
    research: { label: "02 — Research", title: "Understanding the User", desc: "A survey of 98 respondents explored needs and frustrations with existing sports apps, alongside in-depth interviews to uncover deeper motivations.", stats: [{ value: "98", label: "Survey Respondents" }, { value: "73%", label: "Have Used a Sports App" }, { value: "88%", label: "Prefer Mobile Access" }, { value: "75%", label: "Want Favorite Team Info" }], painLabel: "Pain Points", methodsLabel: "Primary Research", methodsDesc: "I collected quantitative data through a structured survey and followed up with qualitative interviews to understand the deeper motivations and frustrations behind users' soccer app experiences.", empathyLabel: "Synthesizing Insights", empathyDesc: "Research findings were synthesized into an empathy map to identify what users say, think, do, and feel — revealing the emotional and functional gaps in current solutions.", personasLabel: "User Personas", personasDesc: "Two primary personas emerged from the research, representing the core user segments: the casual fan looking for simplicity, and the engaged fan craving real-time access." },
    persona1: { quote: "I would like to have easier access to soccer related news and knowledge!", pains: ["Overwhelmed by complex apps", "Too much beginner friction", "Intrusive ads and pop-ups"] },
    persona2: { quote: "I would like to experience a better soccer app!", pains: ["Misses matches due to busy schedule", "Cluttered apps with unnecessary features", "Hard to quickly find match info"] },
    process: { label: "03 — Design Process", title: "From Chaos to Clarity", desc: "The design process began with affinity mapping and post-it sessions, evolving through information architecture, wireframes, and low-fidelity prototypes before reaching high-fidelity screens.", steps: ["Affinity Mapping", "Information Architecture", "Wireframing", "Hi-Fi Prototype"], featuresTitle: "Key Features Designed" },
    features: [
      { title: "Personalization", desc: "Choose your favourite club, jersey number, and typography to make the app feel like yours." },
      { title: "Morning Newspaper", desc: "A daily digest of the latest soccer news, curated around the teams and leagues you care about." },
      { title: "Live Interaction", desc: "Post-game sentiment analysis and real-time fan community features keep the experience social." },
      { title: "Integrated Cross-Play", desc: "Seamlessly connects with the SoccerGOAT physical display device for in-stadium and at-home use." },
      { title: "One-Click Access", desc: "Home team logo shortcuts and a simplified menu bar reduce friction to near zero." },
      { title: "Loyalty & Pins", desc: "Earn loyalty rewards and collect pins as you engage, adding gamification to the fan experience." },
    ],
    physical: { label: "04 — Physical Design", title: "Beyond the Screen", desc: "SoccerGOAT extends beyond mobile — a physical display device designed from initial sketches through multiple 3D modeling iterations, built to sit on a soccer ball and deliver live scores and ratings in real-time.", hwLabel: "Hardware", hwTitle: "Live Display Device", hwDesc: "A compact, soccer-ball-inspired physical device with an embedded display screen. Designed through sketch, foam model, and multiple Blender 3D iterations before reaching the final render.", hwFeatures: ["Compact form factor fits on a soccer ball", "Embedded display for live scores & ratings", "Green + white + navy brand colorway", "Connects wirelessly with the mobile app"], journeyLabel: "Design Journey", journeyTitle: "Sketch → Model → Render", steps: [{ step: "Concept Sketches", desc: "Initial hand-drawn explorations of form and function, exploring multiple silhouettes." }, { step: "Foam Prototyping", desc: "Physical foam models to test scale, grip, and placement on a real soccer ball." }, { step: "3D Modeling in Blender", desc: "Multiple mesh iterations refining the organic, tubular form wrapping around the display." }, { step: "Final Render", desc: "High-fidelity 3D render with SoccerGOAT brand colors and materials." }] },
    final: { label: "05 — Final Design", title: "The Result", desc: "A cohesive green-accented mobile app covering onboarding, home feed, live scores, standings, and the fan community — paired with a striking physical device.", screens: ["Create Account", "Home Feed", "Live Scores & Ratings", "Standings Table", "Customized Page", "Live Display Device"] },
    outro: { thanks: "Thanks for reading", title: "Want to see more work?", back: "← Back to All Projects" },
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    tag: "移动端应用 · 产品设计 · 用户研究",
    sub: "热情与简洁的交汇——一款足球伴侣应用与实体展示设备，旨在让北美球迷与美丽的足球运动更近一步。",
    overview: { role: "角色", roleVal: "UX 设计师\n产品设计师", deliverables: "交付物", deliverablesVal: "移动端应用设计\n实体设备设计\nUX 研究", tools: "工具", toolsVal: "Figma · Blender\n用户访谈 · 问卷调查" },
    bg: { label: "01 — 背景", title: "问题所在", desc: "作为一名生活在北美的足球迷，我亲身体会了阻碍这项运动普及与享受的种种挑战。尽管足球增长迅猛，仍远落后于 NFL 和 NBA——尤其是在 45 岁以下的年轻多元受众中。", market: "市场机会", messiDesc: "梅西 MLS 首秀观看人数——20 年来收视率最高的 MLS 比赛", tedDesc: "《足球教练》第三季被观看分钟数——娱乐内容拓宽了足球的受众", fifaDesc: "2026 年北美 FIFA 世界杯预计带来的经济影响" },
    painPoints: [
      { title: "播出平台分散", desc: "足球内容散布于 CBS、NBC、ESPN、Apple TV 等多个平台，每个都需要单独订阅。" },
      { title: "足球文化缺失", desc: "在美国，仅有 20% 的人关注足球，而 NFL 达 52%、NBA 达 42%，文化参与度差距巨大。" },
      { title: "界面过于复杂", desc: "现有应用广告繁多、功能冗杂，难以快速找到关键比赛信息。" },
      { title: "错过比赛", desc: "忙碌的用户因日程冲突错过比赛，且没有简便方式随时获取最新动态。" },
    ],
    research: { label: "02 — 研究", title: "了解用户", desc: "通过对 98 名受访者的问卷调查，探索了用户对现有体育应用的需求与不满，并结合深度访谈挖掘更深层的动机。", stats: [{ value: "98", label: "问卷受访者" }, { value: "73%", label: "曾使用体育应用" }, { value: "88%", label: "偏好移动端访问" }, { value: "75%", label: "希望获取喜爱球队信息" }], painLabel: "痛点", methodsLabel: "主要研究方法", methodsDesc: "我通过结构化问卷收集定量数据，并跟进深度访谈，深入了解用户使用足球应用的真实动机与痛点。", empathyLabel: "洞察整合", empathyDesc: "将研究结果整合成同理心地图，识别用户的言行与所思所感，揭示现有解决方案在情感和功能层面的缺口。", personasLabel: "用户画像", personasDesc: "研究中涌现出两类核心用户画像：追求简洁的休闲球迷，以及渴望实时资讯的深度球迷。" },
    persona1: { quote: "我希望能更方便地获取足球相关新闻和知识！", pains: ["被复杂的应用搞得不知所措", "新手门槛太高", "广告和弹窗太多太烦"] },
    persona2: { quote: "我希望能用上一款更好的足球应用！", pains: ["因日程繁忙错过比赛", "应用功能冗杂、界面混乱", "难以快速找到比赛信息"] },
    process: { label: "03 — 设计流程", title: "从混沌到清晰", desc: "设计流程从亲和图和便利贴会议开始，经过信息架构、线框图和低保真原型，最终到达高保真界面。", steps: ["亲和图", "信息架构", "线框图", "高保真原型"], featuresTitle: "核心功能设计" },
    features: [
      { title: "个性化定制", desc: "选择你喜欢的球队、球衣号码和字体，让应用完全属于你。" },
      { title: "晨间报纸", desc: "每日精选你关注的球队和联赛相关的最新足球新闻摘要。" },
      { title: "实时互动", desc: "赛后情绪分析和实时球迷社区功能，让体验更具社交性。" },
      { title: "跨端联动", desc: "与 SoccerGOAT 实体展示设备无缝连接，适用于场馆和家庭场景。" },
      { title: "一键直达", desc: "主队 logo 快捷方式和简化菜单栏，将操作摩擦降至最低。" },
      { title: "积分与徽章", desc: "参与互动赢取积分奖励、收集徽章，为球迷体验增添游戏化元素。" },
    ],
    physical: { label: "04 — 实体设计", title: "超越屏幕", desc: "SoccerGOAT 不止于移动端——一款从初始草图到多轮 3D 建模迭代的实体展示设备，可放置于足球上，实时呈现比分与评分。", hwLabel: "硬件", hwTitle: "实时展示设备", hwDesc: "一款紧凑的足球造型实体设备，内置显示屏。经过草图、泡沫模型及多轮 Blender 3D 迭代，最终完成渲染。", hwFeatures: ["紧凑形态，可放置于足球上", "内置显示屏，实时呈现比分与评分", "绿色 + 白色 + 藏蓝品牌配色", "与移动应用无线连接"], journeyLabel: "设计历程", journeyTitle: "草图 → 模型 → 渲染", steps: [{ step: "概念草图", desc: "初始手绘探索，研究多种形态与功能。" }, { step: "泡沫原型", desc: "制作实体泡沫模型，测试比例、握感和在真实足球上的放置效果。" }, { step: "Blender 3D 建模", desc: "多轮网格迭代，打磨包裹显示屏的有机管状造型。" }, { step: "最终渲染", desc: "使用 SoccerGOAT 品牌配色与材质完成高保真 3D 渲染。" }] },
    final: { label: "05 — 最终设计", title: "设计成果", desc: "一套以绿色为主调的完整移动端应用，涵盖注册引导、首页资讯、实时比分、积分榜和球迷社区，搭配极具视觉冲击力的实体设备。", screens: ["创建账号", "首页资讯", "实时比分与评分", "积分榜", "个性化页面", "实时展示设备"] },
    outro: { thanks: "感谢阅读", title: "想看更多作品？", back: "← 返回所有项目" },
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    tag: "App Móvil · Diseño de Producto · Investigación UX",
    sub: "Donde la Pasión se une a la Simplicidad y la Personalización — una app companion de fútbol y dispositivo físico diseñados para acercar a los fans norteamericanos al hermoso juego.",
    overview: { role: "Rol", roleVal: "Diseñadora UX\nDiseñadora de Producto", deliverables: "Entregables", deliverablesVal: "Diseño de App Móvil\nDiseño de Dispositivo Físico\nInvestigación UX", tools: "Herramientas", toolsVal: "Figma · Blender\nEntrevistas · Encuestas" },
    bg: { label: "01 — Contexto", title: "El Problema", desc: "Como aficionada al fútbol en Norteamérica, viví de primera mano los desafíos que dificultan el acceso y disfrute del deporte. El fútbol sigue muy por detrás de la NFL y la NBA a pesar de su rápido crecimiento.", market: "Oportunidad de Mercado", messiDesc: "espectadores en el debut de Messi en la MLS — el partido más visto en 20 años", tedDesc: "minutos vistos de Ted Lasso T3 — el entretenimiento amplía el alcance del fútbol", fifaDesc: "impacto económico proyectado del Mundial 2026 en Norteamérica" },
    painPoints: [
      { title: "Transmisores Fragmentados", desc: "El contenido de fútbol está disperso en CBS, NBC, ESPN, Apple TV y más, cada uno con suscripción separada." },
      { title: "Falta de Cultura Futbolera", desc: "En EE.UU., solo el 20% sigue el fútbol frente al 52% de la NFL y 42% de la NBA." },
      { title: "Interfaces Complejas", desc: "Las apps existentes están llenas de anuncios y funciones innecesarias, dificultando encontrar info clave." },
      { title: "Partidos Perdidos", desc: "Los usuarios ocupados se pierden partidos por conflictos de horario sin forma simple de mantenerse al día." },
    ],
    research: { label: "02 — Investigación", title: "Entendiendo al Usuario", desc: "Una encuesta de 98 participantes exploró necesidades y frustraciones con las apps deportivas actuales, junto con entrevistas en profundidad.", stats: [{ value: "98", label: "Encuestados" }, { value: "73%", label: "Han Usado App Deportiva" }, { value: "88%", label: "Prefieren Acceso Móvil" }, { value: "75%", label: "Quieren Info de su Equipo" }], painLabel: "Puntos de Dolor", methodsLabel: "Investigación Primaria", methodsDesc: "Recopilé datos cuantitativos mediante una encuesta estructurada y realicé entrevistas en profundidad para comprender las motivaciones y frustraciones detrás de las experiencias de los usuarios.", empathyLabel: "Síntesis de Hallazgos", empathyDesc: "Los hallazgos se sintetizaron en un mapa de empatía para identificar qué dicen, piensan, hacen y sienten los usuarios, revelando las brechas emocionales y funcionales.", personasLabel: "Personas de Usuario", personasDesc: "Dos personas principales surgieron de la investigación: el fanático casual que busca simplicidad, y el fanático comprometido que busca acceso en tiempo real." },
    persona1: { quote: "¡Me gustaría tener acceso más fácil a noticias y conocimiento sobre fútbol!", pains: ["Abrumada por apps complejas", "Demasiada fricción para principiantes", "Anuncios y pop-ups invasivos"] },
    persona2: { quote: "¡Me gustaría experimentar una mejor app de fútbol!", pains: ["Se pierde partidos por agenda ocupada", "Apps desordenadas con funciones innecesarias", "Difícil encontrar info de partidos rápidamente"] },
    process: { label: "03 — Proceso de Diseño", title: "Del Caos a la Claridad", desc: "El proceso comenzó con mapas de afinidad y sesiones de post-its, evolucionando a través de arquitectura de información, wireframes y prototipos.", steps: ["Mapa de Afinidad", "Arquitectura de Información", "Wireframing", "Prototipo Hi-Fi"], featuresTitle: "Funcionalidades Clave Diseñadas" },
    features: [
      { title: "Personalización", desc: "Elige tu club favorito, número de camiseta y tipografía para que la app se sienta tuya." },
      { title: "Periódico Matutino", desc: "Un resumen diario de las últimas noticias futboleras sobre los equipos y ligas que te importan." },
      { title: "Interacción en Vivo", desc: "Análisis de sentimiento post-partido y comunidad de fans en tiempo real." },
      { title: "Cross-Play Integrado", desc: "Se conecta sin problemas con el dispositivo físico SoccerGOAT para uso en estadio y en casa." },
      { title: "Acceso con Un Clic", desc: "Atajos del logo del equipo local y menú simplificado reducen la fricción al mínimo." },
      { title: "Lealtad y Pins", desc: "Gana recompensas y colecciona pins mientras interactúas, añadiendo gamificación." },
    ],
    physical: { label: "04 — Diseño Físico", title: "Más Allá de la Pantalla", desc: "SoccerGOAT va más allá del móvil — un dispositivo físico diseñado desde bocetos iniciales hasta iteraciones en 3D, construido para reposar sobre un balón de fútbol.", hwLabel: "Hardware", hwTitle: "Dispositivo de Visualización en Vivo", hwDesc: "Un dispositivo físico compacto inspirado en el balón de fútbol con pantalla integrada. Diseñado a través de bocetos, modelos de espuma e iteraciones en Blender.", hwFeatures: ["Forma compacta que cabe sobre un balón", "Pantalla integrada para marcadores en vivo", "Paleta de colores verde + blanco + marino", "Conexión inalámbrica con la app móvil"], journeyLabel: "Proceso de Diseño", journeyTitle: "Boceto → Modelo → Render", steps: [{ step: "Bocetos Conceptuales", desc: "Exploraciones iniciales a mano de forma y función, explorando múltiples siluetas." }, { step: "Prototipo de Espuma", desc: "Modelos físicos para probar escala, agarre y colocación en un balón real." }, { step: "Modelado 3D en Blender", desc: "Múltiples iteraciones de malla refinando la forma tubular que envuelve la pantalla." }, { step: "Render Final", desc: "Render 3D de alta fidelidad con los colores y materiales de la marca SoccerGOAT." }] },
    final: { label: "05 — Diseño Final", title: "El Resultado", desc: "Una app móvil cohesiva con acento verde que cubre onboarding, feed principal, marcadores en vivo, clasificaciones y comunidad de fans.", screens: ["Crear Cuenta", "Feed Principal", "Marcadores en Vivo", "Tabla de Posiciones", "Página Personalizada", "Dispositivo en Vivo"] },
    outro: { thanks: "Gracias por leer", title: "¿Quieres ver más trabajo?", back: "← Volver a Proyectos" },
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    tag: "모바일 앱 · 제품 디자인 · UX 리서치",
    sub: "열정과 단순함, 개인화가 만나는 곳 — 북미 팬들을 아름다운 게임에 더 가까이 데려가기 위한 축구 컴패니언 앱과 실물 디스플레이 기기.",
    overview: { role: "역할", roleVal: "UX 디자이너\n제품 디자이너", deliverables: "결과물", deliverablesVal: "모바일 앱 디자인\n실물 기기 디자인\nUX 리서치", tools: "툴", toolsVal: "Figma · Blender\n사용자 인터뷰 · 설문조사" },
    bg: { label: "01 — 배경", title: "문제", desc: "북미에 사는 축구 팬으로서 스포츠의 접근성과 즐거움을 방해하는 어려움을 직접 경험했습니다. 축구는 빠르게 성장하고 있음에도 NFL과 NBA에 크게 뒤처져 있습니다.", market: "시장 기회", messiDesc: "메시의 MLS 데뷔전 시청자 수 — 20년 만에 가장 많이 시청된 MLS 경기", tedDesc: "테드 래소 시즌 3 시청 분 — 엔터테인먼트가 축구의 저변을 넓히다", fifaDesc: "2026년 북미 FIFA 월드컵으로 예상되는 경제적 파급 효과" },
    painPoints: [
      { title: "분산된 중계 플랫폼", desc: "축구 콘텐츠가 CBS, NBC, ESPN, Apple TV 등 여러 플랫폼에 흩어져 있어 각각 별도 구독이 필요합니다." },
      { title: "축구 문화 부재", desc: "미국에서 축구 팬은 20%에 불과한 반면 NFL은 52%, NBA는 42%로 문화적 참여도 격차가 큽니다." },
      { title: "복잡한 인터페이스", desc: "기존 앱들은 광고와 불필요한 기능으로 가득 차 핵심 경기 정보를 빠르게 찾기 어렵습니다." },
      { title: "경기 놓침", desc: "바쁜 사용자들이 일정 충돌로 경기를 놓치고, 이동 중에 간편하게 업데이트받을 방법이 없습니다." },
    ],
    research: { label: "02 — 리서치", title: "사용자 이해", desc: "98명의 설문 응답자를 통해 기존 스포츠 앱에 대한 니즈와 불만을 조사하고, 심층 인터뷰로 더 깊은 동기를 발굴했습니다.", stats: [{ value: "98", label: "설문 응답자" }, { value: "73%", label: "스포츠 앱 이용 경험" }, { value: "88%", label: "모바일 접근 선호" }, { value: "75%", label: "좋아하는 팀 정보 원함" }], painLabel: "페인 포인트", methodsLabel: "주요 연구 방법", methodsDesc: "구조화된 설문으로 정량 데이터를 수집하고 심층 인터뷰를 통해 사용자들의 축구 앱 경험 이면에 있는 동기와 불만을 파악했습니다.", empathyLabel: "인사이트 종합", empathyDesc: "연구 결과를 공감 지도로 종합하여 사용자가 말하고, 생각하고, 행동하고, 느끼는 것을 파악하고 현재 솔루션의 감정적·기능적 격차를 밝혔습니다.", personasLabel: "사용자 페르소나", personasDesc: "연구에서 두 가지 핵심 페르소나가 도출되었습니다: 단순함을 원하는 캐주얼 팬과 실시간 접근을 원하는 열정적인 팬." },
    persona1: { quote: "축구 관련 뉴스와 정보에 더 쉽게 접근하고 싶어요!", pains: ["복잡한 앱에 압도됨", "초보자 진입 장벽이 너무 높음", "침입적인 광고와 팝업"] },
    persona2: { quote: "더 나은 축구 앱을 경험하고 싶어요!", pains: ["바쁜 일정으로 경기를 놓침", "불필요한 기능으로 가득 찬 앱", "경기 정보를 빠르게 찾기 어려움"] },
    process: { label: "03 — 디자인 프로세스", title: "혼돈에서 명확함으로", desc: "어피니티 매핑과 포스트잇 세션으로 시작해 정보 아키텍처, 와이어프레임, 로우파이 프로토타입을 거쳐 하이파이 화면에 도달했습니다.", steps: ["어피니티 매핑", "정보 아키텍처", "와이어프레이밍", "하이파이 프로토타입"], featuresTitle: "핵심 기능 설계" },
    features: [
      { title: "개인화", desc: "좋아하는 클럽, 등번호, 타이포그래피를 선택해 앱을 나만의 것으로 만들어 보세요." },
      { title: "모닝 뉴스페이퍼", desc: "내가 관심 있는 팀과 리그를 중심으로 큐레이션된 최신 축구 뉴스 일일 요약." },
      { title: "라이브 인터랙션", desc: "경기 후 감정 분석과 실시간 팬 커뮤니티 기능으로 소셜 경험을 강화합니다." },
      { title: "통합 크로스 플레이", desc: "SoccerGOAT 실물 디스플레이 기기와 원활하게 연결, 경기장과 가정에서 모두 사용 가능." },
      { title: "원클릭 접근", desc: "홈팀 로고 바로가기와 간소화된 메뉴 바로 마찰을 거의 없앴습니다." },
      { title: "로열티 & 핀", desc: "참여할수록 로열티 보상을 얻고 핀을 수집해 팬 경험에 게임화 요소를 더합니다." },
    ],
    physical: { label: "04 — 실물 디자인", title: "스크린을 넘어서", desc: "SoccerGOAT은 모바일을 넘어섭니다 — 초기 스케치부터 여러 번의 3D 모델링 반복을 거쳐 설계된 실물 디스플레이 기기로, 축구공 위에 놓여 실시간 점수와 평점을 제공합니다.", hwLabel: "하드웨어", hwTitle: "라이브 디스플레이 기기", hwDesc: "내장 디스플레이 화면이 있는 소형 축구공 영감 실물 기기. 스케치, 폼 모델, 여러 번의 Blender 3D 반복을 거쳐 최종 렌더링에 도달했습니다.", hwFeatures: ["축구공 위에 놓이는 소형 폼팩터", "라이브 점수 및 평점 내장 디스플레이", "그린 + 화이트 + 네이비 브랜드 색상", "모바일 앱과 무선 연결"], journeyLabel: "디자인 여정", journeyTitle: "스케치 → 모델 → 렌더", steps: [{ step: "컨셉 스케치", desc: "형태와 기능을 탐구하는 초기 손 그림, 다양한 실루엣 탐색." }, { step: "폼 프로토타이핑", desc: "실제 축구공에서의 크기, 그립감, 배치를 테스트하는 실물 폼 모델." }, { step: "Blender 3D 모델링", desc: "디스플레이를 감싸는 유기적 관형 형태를 다듬는 여러 번의 메시 반복." }, { step: "최종 렌더", desc: "SoccerGOAT 브랜드 색상과 소재로 완성한 하이파이 3D 렌더링." }] },
    final: { label: "05 — 최종 디자인", title: "결과물", desc: "온보딩, 홈 피드, 라이브 점수, 순위표, 팬 커뮤니티를 아우르는 일관된 그린 계열 모바일 앱 — 인상적인 실물 기기와 함께.", screens: ["계정 만들기", "홈 피드", "라이브 점수 & 평점", "순위표", "맞춤 페이지", "라이브 디스플레이 기기"] },
    outro: { thanks: "읽어주셔서 감사합니다", title: "더 많은 작업을 보고 싶으신가요?", back: "← 모든 프로젝트로 돌아가기" },
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    tag: "モバイルアプリ · プロダクトデザイン · UXリサーチ",
    sub: "情熱とシンプルさ、パーソナライゼーションが出会う場所 — 北米のファンを美しいゲームへと近づけるサッカーコンパニオンアプリと物理ディスプレイデバイス。",
    overview: { role: "役割", roleVal: "UXデザイナー\nプロダクトデザイナー", deliverables: "成果物", deliverablesVal: "モバイルアプリデザイン\n物理デバイスデザイン\nUXリサーチ", tools: "ツール", toolsVal: "Figma · Blender\nユーザーインタビュー · アンケート" },
    bg: { label: "01 — 背景", title: "問題", desc: "北米に住むサッカーファンとして、このスポーツのアクセシビリティと楽しさを妨げる課題を直接体験しました。サッカーは急成長しているにもかかわらず、NFLやNBAに大きく遅れをとっています。", market: "市場機会", messiDesc: "メッシのMLSデビュー戦の視聴者数 — 20年間で最も視聴されたMLS試合", tedDesc: "テッド・ラッソ シーズン3の視聴分数 — エンターテインメントがサッカーの魅力を広げる", fifaDesc: "2026年北米FIFA ワールドカップの予想経済効果" },
    painPoints: [
      { title: "放送局の分散", desc: "サッカーコンテンツはCBS、NBC、ESPN、Apple TVなどに散らばっており、それぞれ別途サブスクが必要です。" },
      { title: "サッカー文化の欠如", desc: "米国でサッカーを追うのは20%のみ。NFLの52%、NBAの42%と比べ文化的関与度に大きな差があります。" },
      { title: "複雑なインターフェース", desc: "既存のアプリは広告と不要な機能で溢れており、重要な試合情報を素早く見つけられません。" },
      { title: "試合を見逃す", desc: "忙しいユーザーはスケジュールの都合で試合を見逃し、外出先で手軽に情報を得る方法がありません。" },
    ],
    research: { label: "02 — リサーチ", title: "ユーザーを理解する", desc: "98名の回答者へのアンケートで既存スポーツアプリへのニーズと不満を調査し、深層インタビューでより深い動機を明らかにしました。", stats: [{ value: "98", label: "アンケート回答者" }, { value: "73%", label: "スポーツアプリ利用経験あり" }, { value: "88%", label: "モバイルアクセスを好む" }, { value: "75%", label: "お気に入りチーム情報を求める" }], painLabel: "ペインポイント", methodsLabel: "主要調査手法", methodsDesc: "構造化アンケートで定量データを収集し、深層インタビューでユーザーのサッカーアプリ体験の背後にある動機と不満をより深く理解しました。", empathyLabel: "インサイトの統合", empathyDesc: "調査結果をエンパシーマップに統合し、ユーザーが言うこと・考えること・行動すること・感じることを特定し、現在のソリューションの感情的・機能的なギャップを明らかにしました。", personasLabel: "ユーザーペルソナ", personasDesc: "調査から2つの主要ペルソナが浮かび上がりました：シンプルさを求めるカジュアルファンと、リアルタイムアクセスを求める熱心なファン。" },
    persona1: { quote: "サッカー関連のニュースや知識にもっと簡単にアクセスしたい！", pains: ["複雑なアプリに圧倒される", "初心者にとっての障壁が高すぎる", "侵入的な広告とポップアップ"] },
    persona2: { quote: "より良いサッカーアプリを体験したい！", pains: ["忙しいスケジュールで試合を見逃す", "不必要な機能で溢れた雑然としたアプリ", "試合情報をすぐに見つけられない"] },
    process: { label: "03 — デザインプロセス", title: "混沌から明確さへ", desc: "アフィニティマッピングと付箋セッションから始まり、情報アーキテクチャ、ワイヤーフレーム、ローファイプロトタイプを経て高忠実度の画面へと進化しました。", steps: ["アフィニティマッピング", "情報アーキテクチャ", "ワイヤーフレーム", "ハイファイプロトタイプ"], featuresTitle: "設計した主要機能" },
    features: [
      { title: "パーソナライゼーション", desc: "お気に入りのクラブ、背番号、タイポグラフィを選んでアプリを自分だけのものに。" },
      { title: "モーニングニュースペーパー", desc: "関心のあるチームとリーグを中心にキュレーションされた最新サッカーニュースの日刊要約。" },
      { title: "ライブインタラクション", desc: "試合後の感情分析とリアルタイムファンコミュニティ機能でソーシャルな体験を提供。" },
      { title: "統合クロスプレイ", desc: "SoccerGOAT物理ディスプレイデバイスとシームレスに連携し、スタジアムと自宅の両方で使用可能。" },
      { title: "ワンクリックアクセス", desc: "ホームチームロゴのショートカットとシンプル化されたメニューバーで摩擦をほぼゼロに。" },
      { title: "ロイヤルティ＆ピン", desc: "参加するたびにロイヤルティ報酬を獲得しピンを集め、ファン体験にゲーム化要素を追加。" },
    ],
    physical: { label: "04 — 物理デザイン", title: "スクリーンを超えて", desc: "SoccerGOATはモバイルを超えます — 初期スケッチから複数回の3Dモデリング反復を経て設計された物理ディスプレイデバイスで、サッカーボールの上に置いてリアルタイムでスコアと評価を表示します。", hwLabel: "ハードウェア", hwTitle: "ライブディスプレイデバイス", hwDesc: "内蔵ディスプレイを備えたコンパクトなサッカーボールインスパイアの物理デバイス。スケッチ、フォームモデル、複数回のBlender 3D反復を経て最終レンダリングに到達。", hwFeatures: ["サッカーボールの上に置けるコンパクトフォームファクター", "ライブスコア＆評価用内蔵ディスプレイ", "グリーン＋ホワイト＋ネイビーのブランドカラー", "モバイルアプリとワイヤレス接続"], journeyLabel: "デザインジャーニー", journeyTitle: "スケッチ → モデル → レンダー", steps: [{ step: "コンセプトスケッチ", desc: "形態と機能を探求する初期手描き、複数のシルエットを模索。" }, { step: "フォームプロトタイピング", desc: "実際のサッカーボールでのスケール、グリップ、配置をテストする物理フォームモデル。" }, { step: "Blenderでの3Dモデリング", desc: "ディスプレイを包む有機的なチューブ状フォームを洗練する複数回のメッシュ反復。" }, { step: "最終レンダー", desc: "SoccerGOATブランドカラーとマテリアルによる高忠実度3Dレンダリング。" }] },
    final: { label: "05 — 最終デザイン", title: "結果", desc: "オンボーディング、ホームフィード、ライブスコア、順位表、ファンコミュニティをカバーするグリーンアクセントの一貫したモバイルアプリ — 印象的な物理デバイスと組み合わせて。", screens: ["アカウント作成", "ホームフィード", "ライブスコア＆評価", "順位表", "カスタムページ", "ライブディスプレイデバイス"] },
    outro: { thanks: "お読みいただきありがとうございます", title: "もっと作品を見たいですか？", back: "← 全プロジェクトに戻る" },
  },
};

export default function SoccerGOAT() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">

      <Navbar nav={t.nav} />

      {/* ── Hero ── */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#7a9bb5] mb-5">{t.tag}</p>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="text-6xl font-bold tracking-tight leading-tight mb-6">SoccerGOAT</h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed mb-16">{t.sub}</p>
          </FadeIn>
          <FadeIn delay={240}>
            <figure>
              <div className="w-full rounded-3xl overflow-hidden shadow-sm">
                <Image src="/sg/sg_cover.png" alt="SoccerGOAT Cover" width={1200} height={700} className="w-full h-auto block" priority />
              </div>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-14 px-6 bg-[#2a3d2e]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:divide-x md:divide-white/10">
          {[
            { label: t.overview.role, val: t.overview.roleVal },
            { label: t.overview.deliverables, val: t.overview.deliverablesVal },
            { label: t.overview.tools, val: t.overview.toolsVal },
          ].map(({ label, val }, i) => (
            <FadeIn key={label} delay={i * 80}>
              <div className={i > 0 ? "md:pl-10" : ""}>
                <p className="text-[11px] tracking-[0.22em] uppercase text-green-400 mb-3">{label}</p>
                <p className="text-white/85 font-medium leading-relaxed whitespace-pre-line">{val}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 01 Background ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#7a9bb5] mb-4">{t.bg.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">{t.bg.title}</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-14">{t.bg.desc}</p>
          </FadeIn>

          {/* Pain point cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {t.painPoints.map((point, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="p-7 rounded-2xl border border-neutral-100 bg-white hover:border-green-200 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">0{i + 1}</span>
                    <h3 className="font-semibold text-base">{point.title}</h3>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Fragmented Broadcasters — table with logos */}
          <FadeIn>
            <div className="mb-10 rounded-2xl overflow-hidden border border-neutral-100">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#2a3d2e] text-white">
                      <th className="px-5 py-4 text-left font-medium text-green-300 text-xs tracking-widest uppercase w-24">Region</th>
                      {[
                        { name: "UCL", label: "Champions League", color: "#1B3A6B", text: "⭐" },
                        { name: "EPL", label: "Premier League",   color: "#3D185B", text: "🦁" },
                        { name: "BUN", label: "Bundesliga",       color: "#D3010C", text: "🦅" },
                        { name: "LAL", label: "La Liga",          color: "#FF4B44", text: "🇪🇸" },
                        { name: "SER", label: "Serie A",          color: "#1B1B6B", text: "🇮🇹" },
                        { name: "L1",  label: "Ligue 1",          color: "#1B4497", text: "🇫🇷" },
                        { name: "MLS", label: "MLS",              color: "#003087", text: "🇺🇸" },
                      ].map(league => (
                        <th key={league.name} className="px-3 py-4 text-center font-medium text-xs">
                          <div className="flex flex-col items-center gap-1.5">
                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-[10px] mx-auto"
                              style={{ backgroundColor: league.color }}
                            >
                              {league.name}
                            </div>
                            <span className="text-white/60 text-[10px] leading-tight">{league.label}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        flag: "🇺🇸", region: "USA",
                        channels: ["Paramount+", "NBC / Peacock", "ESPN+", "ESPN+", "Paramount+", "beIN Sports", "Apple TV+"],
                      },
                      {
                        flag: "🇬🇧", region: "UK",
                        channels: ["BT Sport", "Sky Sports", "BT Sport", "Sky Sports", "BT Sport", "BT Sport", "Sky Sports"],
                      },
                      {
                        flag: "🇨🇦", region: "Canada",
                        channels: ["DAZN", "DAZN", "DAZN", "DAZN", "DAZN", "beIN Sports", "Apple TV+"],
                      },
                    ].map((row, i) => (
                      <tr key={row.region} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                        <td className="px-5 py-4 font-medium text-neutral-700 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{row.flag}</span>
                            <span className="text-sm">{row.region}</span>
                          </div>
                        </td>
                        {row.channels.map((ch, j) => (
                          <td key={j} className="px-3 py-4 text-center text-neutral-500 text-xs leading-snug">{ch}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 bg-neutral-50 border-t border-neutral-100">
                <p className="text-xs text-neutral-400 tracking-wide">Soccer content is scattered across multiple platforms — each requiring a separate subscription</p>
              </div>
            </div>
          </FadeIn>

          {/* Market context — stacked full width */}
          <FadeIn>
            <figure className="mb-6">
              <div className="rounded-2xl overflow-hidden border border-neutral-100">
                <Image src="/sg/sg_LSC.png" alt="Lack of Soccer Culture in North America" width={1200} height={600} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">Soccer trails NFL &amp; NBA in cultural engagement</figcaption>
            </figure>
          </FadeIn>
          <FadeIn>
            <figure className="mb-6">
              <div className="rounded-2xl overflow-hidden border border-neutral-100">
                <Image src="/sg/sg_TCOSIN.png" alt="Commercialization of Soccer in North America" width={1200} height={600} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">Soccer&apos;s growing momentum in North America</figcaption>
            </figure>
          </FadeIn>
          <FadeIn>
            <figure className="mb-10">
              <div className="rounded-2xl overflow-hidden border border-neutral-100">
                <Image src="/sg/sg_2026 world cup.png" alt="Tourism, Economic Impact and Brand Sponsorships" width={1200} height={600} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">Tourism, economic impact &amp; brand sponsorship opportunities</figcaption>
            </figure>
          </FadeIn>

          {/* Market stats */}
          <FadeIn>
            <div className="p-10 rounded-2xl bg-[#1a4d2e] text-white">
              <p className="text-[11px] tracking-[0.22em] uppercase text-green-400 mb-8">{t.bg.market}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:divide-x md:divide-white/10">
                <div>
                  <p className="text-4xl font-bold text-green-400 mb-2">1.75M</p>
                  <p className="text-green-200 text-sm leading-relaxed">{t.bg.messiDesc}</p>
                </div>
                <div className="md:pl-10">
                  <p className="text-4xl font-bold text-green-400 mb-2">795M</p>
                  <p className="text-green-200 text-sm leading-relaxed">{t.bg.tedDesc}</p>
                </div>
                <div className="md:pl-10">
                  <p className="text-4xl font-bold text-green-400 mb-2">$5B+</p>
                  <p className="text-green-200 text-sm leading-relaxed">{t.bg.fifaDesc}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 02 Research ── */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#7a9bb5] mb-4">{t.research.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">{t.research.title}</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-14">{t.research.desc}</p>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {t.research.stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="p-6 bg-white rounded-2xl border border-neutral-100 text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">{stat.value}</p>
                  <p className="text-neutral-500 text-sm leading-snug">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Primary Research label */}
          <FadeIn>
            <div className="mb-8">
              <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-400 mb-3">{t.research.methodsLabel}</p>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">{t.research.methodsDesc}</p>
            </div>
          </FadeIn>

          {/* Survey — full width, no background */}
          <FadeIn>
            <figure className="mb-6">
              <Image src="/sg/sg_survey.png" alt="Survey Results" width={1200} height={700} className="w-full h-auto" />
              <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">Survey · 98 respondents</figcaption>
            </figure>
          </FadeIn>

          {/* Interview — full width, no background */}
          <FadeIn>
            <figure className="mb-6">
              <Image src="/sg/sg_interview.png" alt="User Interviews" width={1200} height={700} className="w-full h-auto" />
              <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">In-depth user interviews</figcaption>
            </figure>
          </FadeIn>

          {/* Empathy Map label */}
          <FadeIn>
            <div className="mb-8 mt-4">
              <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-400 mb-3">{t.research.empathyLabel}</p>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">{t.research.empathyDesc}</p>
            </div>
          </FadeIn>

          {/* Empathy Map — contained */}
          <FadeIn>
            <figure className="mb-14">
              <div className="w-full rounded-2xl overflow-hidden">
                <Image src="/sg/sg_empathy map.png" alt="Empathy Map" width={1200} height={1200} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-center text-xs text-neutral-400 tracking-wide">Empathy map synthesizing research findings</figcaption>
            </figure>
          </FadeIn>

          {/* Personas label */}
          <FadeIn>
            <div className="mb-8">
              <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-400 mb-3">{t.research.personasLabel}</p>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">{t.research.personasDesc}</p>
            </div>
          </FadeIn>

          {/* Persona cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { initials: "BS", name: "Bella Stones", meta: "22 · Marketing Coordinator · Ann Arbor", quote: t.persona1.quote, pains: t.persona1.pains },
              { initials: "RB", name: "Rob Bowen", meta: "21 · CS Student · Washington, DC", quote: t.persona2.quote, pains: t.persona2.pains },
            ].map((p, i) => (
              <FadeIn key={p.name} delay={i * 100}>
                <div className="p-8 bg-white rounded-2xl border border-neutral-100 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-700 font-bold text-sm">{p.initials}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{p.name}</h3>
                      <p className="text-neutral-400 text-xs mt-0.5">{p.meta}</p>
                    </div>
                  </div>
                  <blockquote className="text-neutral-600 text-sm italic border-l-2 border-green-400 pl-4 leading-relaxed">&ldquo;{p.quote}&rdquo;</blockquote>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3">{t.research.painLabel}</p>
                    <ul className="space-y-2">
                      {p.pains.map(pain => (
                        <li key={pain} className="text-sm text-neutral-600 flex gap-2 items-start">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">–</span>{pain}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* User Persona image — contained */}
          <FadeIn>
            <figure className="mt-4">
              <div className="w-full rounded-2xl overflow-hidden">
                <Image src="/sg/sg_user persona.png" alt="User Persona" width={1200} height={700} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-center text-xs text-neutral-400 tracking-wide">User persona profiles</figcaption>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* ── 03 Design Process ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#7a9bb5] mb-4">{t.process.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">{t.process.title}</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-14">{t.process.desc}</p>
          </FadeIn>

          {/* Steps */}
          <div className="flex flex-col md:flex-row gap-0 mb-16 rounded-2xl overflow-hidden border border-neutral-100">
            {t.process.steps.map((step, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="flex-1 px-6 py-7 bg-white border-b md:border-b-0 md:border-r border-neutral-100 last:border-0">
                  <div className="w-7 h-7 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center mb-4">{i + 1}</div>
                  <p className="text-sm font-semibold">{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Affinity Mapping + IA — 2-col, full image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FadeIn>
              <figure>
                <div className="rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100">
                  <Image src="/sg/sg_mapping.png" alt="Affinity Mapping" width={700} height={700} className="w-full h-auto" />
                </div>
                <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">Affinity mapping — clustering user insights</figcaption>
              </figure>
            </FadeIn>
            <FadeIn delay={100}>
              <figure>
                <div className="rounded-2xl overflow-hidden bg-white border border-neutral-100">
                  <Image src="/sg/sg_IA.png" alt="Information Architecture" width={700} height={700} className="w-full h-auto" />
                </div>
                <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">Information architecture</figcaption>
              </figure>
            </FadeIn>
          </div>

          {/* User Flow — full width (landscape) */}
          <FadeIn>
            <figure className="mb-6">
              <div className="rounded-2xl overflow-hidden bg-white border border-neutral-100">
                <Image src="/sg/sg_wireframe.png" alt="User Flow" width={1200} height={700} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">User flow diagram</figcaption>
            </figure>
          </FadeIn>

          {/* Low-fi — full width */}
          <FadeIn>
            <figure className="mb-20">
              <div className="rounded-2xl overflow-hidden bg-white border border-neutral-100 w-full">
                <Image src="/sg/sg_lowfi.png" alt="Low-fidelity Wireframes" width={1200} height={1200} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">Low-fidelity wireframes — 12 key screens</figcaption>
            </figure>
          </FadeIn>

          {/* Key Features */}
          <FadeIn>
            <h3 className="text-2xl font-bold tracking-tight mb-8">{t.process.featuresTitle}</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.features.map((feature, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="p-6 rounded-2xl border border-neutral-100 bg-white hover:border-green-200 hover:shadow-sm transition-all">
                  <div className="w-5 h-5 rounded-full bg-green-500 mb-5" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Physical Design ── */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#7a9bb5] mb-4">{t.physical.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">{t.physical.title}</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-14">{t.physical.desc}</p>
          </FadeIn>

          {/* Hardware + Journey cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-neutral-900 text-white h-full">
                <p className="text-[11px] tracking-[0.22em] uppercase text-green-400 mb-5">{t.physical.hwLabel}</p>
                <h3 className="text-xl font-bold mb-4">{t.physical.hwTitle}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm mb-7">{t.physical.hwDesc}</p>
                <ul className="space-y-3">
                  {t.physical.hwFeatures.map(f => (
                    <li key={f} className="text-sm text-neutral-300 flex gap-3 items-start">
                      <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="p-8 rounded-2xl bg-white border border-neutral-100 h-full">
                <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-400 mb-5">{t.physical.journeyLabel}</p>
                <h3 className="text-xl font-bold mb-6">{t.physical.journeyTitle}</h3>
                <div className="space-y-5">
                  {t.physical.steps.map((item, i) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</div>
                      <div>
                        <p className="font-semibold text-sm mb-0.5">{item.step}</p>
                        <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Concept Sketches */}
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-400 mb-5">Concept Sketches</p>
          </FadeIn>
          <FadeIn>
            <figure className="mb-12">
              <div className="rounded-2xl overflow-hidden bg-white border border-neutral-100">
                <Image src="/sg/sg_sketch.png" alt="Concept Sketches" width={1200} height={600} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">Hand-drawn concept explorations</figcaption>
            </figure>
          </FadeIn>

          {/* 3D Modeling Iterations */}
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-400 mb-5">3D Modeling Iterations</p>
          </FadeIn>
          <FadeIn>
            <figure className="mb-10">
              <div className="rounded-2xl overflow-hidden bg-white border border-neutral-100">
                <Image src="/sg/sg_3d modeling.png" alt="3D Modeling Iterations" width={1200} height={600} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-xs text-neutral-400 tracking-wide">Progressive mesh refinements in Blender</figcaption>
            </figure>
          </FadeIn>

          {/* Final 3D Render */}
          <FadeIn>
            <figure>
              <div className="w-full rounded-2xl overflow-hidden bg-white border border-neutral-100">
                <Image src="/sg/sg_rendering.png" alt="Final 3D Rendering" width={1200} height={700} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-center text-xs text-neutral-400 tracking-wide">Final high-fidelity 3D render with SoccerGOAT brand colors</figcaption>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* ── 05 Final Design ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#7a9bb5] mb-4">{t.final.label}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">{t.final.title}</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-14">{t.final.desc}</p>
          </FadeIn>
          <FadeIn>
            <figure>
              <div className="w-full rounded-2xl overflow-hidden border border-neutral-100">
                <Image src="/sg/sg_hifi.png" alt="High-fidelity Final Design" width={1200} height={800} className="w-full h-auto" />
              </div>
              <figcaption className="mt-4 text-center text-xs text-neutral-400 tracking-wide">
                {t.final.screens.join(" · ")}
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* ── Outro ── */}
      <section className="py-24 px-6 bg-neutral-50">
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

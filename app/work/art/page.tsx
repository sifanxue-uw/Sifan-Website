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
  medium: string;
  year: string;
  pieces: {
    title: string;
    medium: string;
    year: string;
    desc: string;
  }[];
}> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About" },
    back: "← Back",
    tag: "Fine Art",
    title: "My Art",
    subtitle: "A personal collection of acrylic and watercolour paintings exploring emotion, memory, and the places that shaped me.",
    medium: "Medium",
    year: "Year",
    pieces: [
      {
        title: "Grow",
        medium: "Acrylic on linen canvas",
        year: "2024",
        desc: "Description coming soon.",
      },
      {
        title: "Wow",
        medium: "Acrylic on linen canvas",
        year: "2024",
        desc: "Description coming soon.",
      },
      {
        title: "Cedar Night",
        medium: "Watercolour on paper",
        year: "2023",
        desc: "Description coming soon.",
      },
      {
        title: "Suzhou Alley",
        medium: "Watercolour on paper",
        year: "2023",
        desc: "Description coming soon.",
      },
    ],
  },
  zh: {
    nav: { home: "首页", work: "作品", about: "关于" },
    back: "← 返回",
    tag: "纯艺术",
    title: "我的画作",
    subtitle: "一组关于情感、记忆与成长之地的丙烯与水彩作品。",
    medium: "媒介",
    year: "年份",
    pieces: [
      {
        title: "Grow",
        medium: "亚麻布面丙烯",
        year: "2024",
        desc: "介绍即将更新。",
      },
      {
        title: "Wow",
        medium: "亚麻布面丙烯",
        year: "2024",
        desc: "介绍即将更新。",
      },
      {
        title: "Cedar Night",
        medium: "水彩纸本",
        year: "2023",
        desc: "介绍即将更新。",
      },
      {
        title: "Suzhou Alley",
        medium: "水彩纸本",
        year: "2023",
        desc: "介绍即将更新。",
      },
    ],
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", about: "Sobre mí" },
    back: "← Volver",
    tag: "Bellas Artes",
    title: "Mi Arte",
    subtitle: "Una colección personal de pinturas en acrílico y acuarela que exploran la emoción, la memoria y los lugares que me formaron.",
    medium: "Técnica",
    year: "Año",
    pieces: [
      { title: "Grow", medium: "Acrílico sobre lienzo de lino", year: "2024", desc: "Descripción próximamente." },
      { title: "Wow", medium: "Acrílico sobre lienzo de lino", year: "2024", desc: "Descripción próximamente." },
      { title: "Cedar Night", medium: "Acuarela sobre papel", year: "2023", desc: "Descripción próximamente." },
      { title: "Suzhou Alley", medium: "Acuarela sobre papel", year: "2023", desc: "Descripción próximamente." },
    ],
  },
  ko: {
    nav: { home: "홈", work: "작업", about: "소개" },
    back: "← 돌아가기",
    tag: "순수 미술",
    title: "나의 그림",
    subtitle: "감정, 기억, 그리고 나를 만든 장소들을 탐구하는 아크릴화와 수채화 컬렉션.",
    medium: "재료",
    year: "연도",
    pieces: [
      { title: "Grow", medium: "린넨 캔버스에 아크릴", year: "2024", desc: "설명 준비 중." },
      { title: "Wow", medium: "린넨 캔버스에 아크릴", year: "2024", desc: "설명 준비 중." },
      { title: "Cedar Night", medium: "수채화지에 수채화", year: "2023", desc: "설명 준비 중." },
      { title: "Suzhou Alley", medium: "수채화지에 수채화", year: "2023", desc: "설명 준비 중." },
    ],
  },
  ja: {
    nav: { home: "ホーム", work: "作品", about: "について" },
    back: "← 戻る",
    tag: "ファインアート",
    title: "私のアート",
    subtitle: "感情・記憶・私を形成した場所を探求するアクリルと水彩の個人コレクション。",
    medium: "素材",
    year: "制作年",
    pieces: [
      { title: "Grow", medium: "リネンキャンバスにアクリル", year: "2024", desc: "説明は近日公開。" },
      { title: "Wow", medium: "リネンキャンバスにアクリル", year: "2024", desc: "説明は近日公開。" },
      { title: "Cedar Night", medium: "水彩紙に水彩", year: "2023", desc: "説明は近日公開。" },
      { title: "Suzhou Alley", medium: "水彩紙に水彩", year: "2023", desc: "説明は近日公開。" },
    ],
  },
};

const images = [
  "/art/Grow.png",
  "/art/Wow.png",
  "/art/Cedar Night.png",
  "/art/Suzhou alley.png",
];

export default function ArtPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-neutral-900 cursor-none">
      <Navbar nav={t.nav} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Link href="/" className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors tracking-wide cursor-none">
              {t.back}
            </Link>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mt-8 mb-4">{t.tag}</p>
          </FadeIn>

          <FadeIn delay={180}>
            <h1
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-7xl font-medium tracking-tight leading-none mb-8"
            >
              {t.title}
            </h1>
          </FadeIn>

          <FadeIn delay={260}>
            <p className="text-lg text-neutral-500 max-w-xl leading-relaxed">{t.subtitle}</p>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-neutral-100" />
      </div>

      {/* Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-32">
          {t.pieces.map((piece, i) => {
            const isEven = i % 2 === 0;
            return (
              <FadeIn key={piece.title} delay={i * 80}>
                <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-16 items-center`}>
                  {/* Image */}
                  <div className="w-full md:w-3/5 flex-shrink-0">
                    <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-50">
                      <Image
                        src={images[i]}
                        alt={piece.title}
                        width={900}
                        height={700}
                        className="w-full h-auto block"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="w-full md:w-2/5 flex flex-col justify-center gap-5">
                    <div>
                      <p className="text-xs text-neutral-400 tracking-widest uppercase mb-3">
                        0{i + 1}
                      </p>
                      <h2
                        style={{ fontFamily: "var(--font-cormorant)" }}
                        className="text-5xl font-medium tracking-tight leading-none mb-6"
                      >
                        {piece.title}
                      </h2>
                    </div>

                    <div className="space-y-2 text-sm text-neutral-500">
                      <div className="flex gap-4">
                        <span className="text-neutral-300 uppercase tracking-widest text-xs w-16">{t.medium}</span>
                        <span>{piece.medium}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-neutral-300 uppercase tracking-widest text-xs w-16">{t.year}</span>
                        <span>{piece.year}</span>
                      </div>
                    </div>

                    <div className="border-t border-neutral-100 pt-5">
                      <p className="text-neutral-500 text-sm leading-relaxed">{piece.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

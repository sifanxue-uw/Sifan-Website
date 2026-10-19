"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/language";
import { FadeIn } from "@/app/components/FadeIn";

type Project = {
  group: "work" | "playground";
  href: string;
  img: string;
  title: string;
  tag: string;
  en: string;
  zh: string;
  fit: "cover" | "contain" | "flush";
  bg: string;
  ratio?: string;
};

const projects: Project[] = [
  { group: "work", href: "/work/p5", img: "/p5/p5js-feature-image.png", title: "p5.js Usability Research", tag: "UX Research · Usability Testing", fit: "cover", bg: "bg-[#ED225D]", ratio: "aspect-[1200/628]",
    en: "A moderated usability study conducted in partnership with the p5.js team to improve the reference page and code editor experience.",
    zh: "与 p5.js 官方团队合作开展的可用性研究，提升参考页面与代码编辑器的用户体验。" },
  { group: "work", href: "/work/soccergoat", img: "/soccergoat-cover-v3.png", title: "SoccerGOAT", tag: "Mobile App · Product Design · UX Research", fit: "cover", bg: "bg-neutral-100",
    en: "A soccer companion app and physical display device designed to bring North American fans closer to the beautiful game.",
    zh: "一款足球伴侣应用与实体展示设备，让北美球迷与美丽的足球运动更近一步。" },
  { group: "work", href: "/work/artflow", img: "/artflow/cover.png", title: "ArtFlow", tag: "UX Research · Usability Testing · QA", fit: "cover", bg: "bg-neutral-100",
    en: "Systematic usability testing for Tencent Games’ internal art asset platform — 100+ issues identified, 95% fix rate achieved.",
    zh: "腾讯游戏内部美术资源平台的系统性可用性测试——识别 100+ 问题，95% 修复率。" },
  { group: "work", href: "/work/peticx", img: "/peticx/px缩略图.png", title: "PeticX", tag: "Product Design · UX Research · Pet Care", fit: "contain", bg: "bg-neutral-100",
    en: "A pet care product designed through end-to-end user research and iterative prototyping.",
    zh: "通过端到端用户研究与迭代原型设计的宠物护理产品。" },
  { group: "work", href: "/work/maskoff", img: "/maskoff/Maskoff cover.png", title: "Maskoff", tag: "Brand Design · Product Design", fit: "cover", bg: "bg-neutral-100",
    en: "A face mask brand exploring identity and the tension between concealment and visibility.",
    zh: "探索身份认同与隐藏和显露之间张力的口罩品牌设计。" },
  { group: "playground", href: "/work/art", img: "/art/cover.png", title: "My Art", tag: "Fine Art · Acrylic · Watercolour", fit: "contain", bg: "bg-white",
    en: "A personal collection of acrylic and watercolour paintings exploring emotion, memory, and the places that shaped me.",
    zh: "探索情感、记忆与成长之地的丙烯与水彩画作品集。" },
  { group: "playground", href: "/work/vozy", img: "/vozy/vozy cover.png", title: "Vozy", tag: "Product Design · UX Research · Wearable", fit: "cover", bg: "bg-neutral-100",
    en: "A wearable travel companion reducing anxiety and physical burden for independent travellers.",
    zh: "减轻独立旅行者焦虑与负担的穿戴式旅行伴侣设备。" },
  { group: "playground", href: "/work/recoaster", img: "/recoaster/RC cover.png", title: "RE Coaster", tag: "Product Design · Sustainability · Craft", fit: "cover", bg: "bg-neutral-100",
    en: "A sustainable coaster crafted from recycled coffee grounds using woodworking, laser cutting and resin.",
    zh: "以咖啡渣为原料，结合木工与树脂工艺制作的可持续杯垫。" },
];

export function ProjectGrid({ group }: { group: "work" | "playground" }) {
  const { lang } = useLanguage();
  const items = projects.filter((p) => p.group === group);

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 items-start">
      {items.map((pr, i) => (
        <FadeIn key={pr.href} delay={(i % 2) * 100}>
          <a href={pr.href} className="group block cursor-none">
            <div className={"relative w-full overflow-hidden " + (pr.ratio ?? "aspect-[4/3]") + " " + pr.bg}>
              <Image
                src={pr.img}
                alt={pr.title}
                fill
                className={(pr.fit === "contain" ? "object-contain p-10" : pr.fit === "flush" ? "object-contain" : "object-cover") + " transition-transform duration-500 group-hover:scale-[1.03]"}
                unoptimized
              />
            </div>
            <p style={{ fontFamily: "var(--font-geist-mono)" }} className="mt-4 text-[11px] tracking-wider uppercase text-neutral-400">{pr.tag}</p>
            <h3 style={{ fontFamily: "var(--font-cormorant)" }} className="mt-1 text-2xl font-medium text-neutral-800">{pr.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-500">{lang === "zh" ? pr.zh : pr.en}</p>
          </a>
        </FadeIn>
      ))}
    </div>
  );
}

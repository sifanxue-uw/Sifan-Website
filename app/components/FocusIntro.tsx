"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/language";

type Seg = { t: string; k?: boolean };

const STATEMENT: Record<"en" | "zh", Seg[]> = {
  en: [
    { t: "Sifan is a " },
    { t: "UX designer", k: true },
    { t: " who " },
    { t: "studies people", k: true },
    { t: ", " },
    { t: "builds products", k: true },
    { t: " & " },
    { t: "plays", k: true },
    { t: " in between." },
  ],
  zh: [
    { t: "薛斯凡是一名 " },
    { t: "UX 设计师", k: true },
    { t: "，" },
    { t: "研究人", k: true },
    { t: "，" },
    { t: "打造产品", k: true },
    { t: "，也在两者之间" },
    { t: "自由游走", k: true },
    { t: "。" },
  ],
};

export function FocusIntro() {
  const { lang } = useLanguage();
  const segs = STATEMENT[lang === "zh" ? "zh" : "en"];
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <h1
        onMouseLeave={() => setActive(null)}
        style={{ fontFamily: "var(--font-cormorant)" }}
        className="text-4xl md:text-5xl leading-[1.15] tracking-tight"
      >
        {segs.map((s, i) => {
          const isActive = active === i;
          const dimmed = active !== null && !isActive;
          return (
            <span
              key={i}
              onMouseEnter={s.k ? () => setActive(i) : undefined}
              onClick={s.k ? () => setActive((a) => (a === i ? null : i)) : undefined}
              className={s.k ? "cursor-none" : undefined}
              style={{
                color: isActive ? "#1C1917" : "#44403C",
                fontWeight: isActive ? 500 : 400,
                opacity: dimmed ? 0.5 : 1,
                filter: dimmed ? "blur(5px)" : "blur(0px)",
                transition: "filter 0.35s ease, opacity 0.35s ease, color 0.35s ease",
              }}
            >
              {s.t}
            </span>
          );
        })}
      </h1>
      <p className="mt-6 text-base text-neutral-500" style={{ fontFamily: "var(--font-geist-sans)" }}>
        MS HCDE @UW
      </p>
    </div>
  );
}

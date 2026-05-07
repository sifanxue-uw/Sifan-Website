"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type LangKey = "en" | "zh" | "es" | "ko" | "ja";

export const languages: { key: LangKey; code: string; label: string }[] = [
  { key: "en", code: "EN", label: "English" },
  { key: "zh", code: "中文", label: "中文" },
  { key: "es", code: "ES", label: "Español" },
  { key: "ko", code: "KO", label: "한국어" },
  { key: "ja", code: "JP", label: "日本語" },
];

interface LanguageContextType {
  lang: LangKey;
  setLang: (l: LangKey) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangKey>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as LangKey | null;
    if (saved && languages.find(l => l.key === saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: LangKey) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

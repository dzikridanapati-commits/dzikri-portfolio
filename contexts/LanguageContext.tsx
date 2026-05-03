"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, Lang } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  t: typeof translations["en"];
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: translations.en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved === "en" || saved === "id") setLang(saved);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "en" ? "id" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

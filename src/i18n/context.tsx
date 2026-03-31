"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { translations, type Locale } from "./translations";

type Translations = (typeof translations)[Locale];

type TranslationContextType = {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ja" : "en"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = translations[locale];

  return (
    <TranslationContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}

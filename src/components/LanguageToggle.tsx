"use client";

import { useTranslation } from "@/i18n/context";

export function LanguageToggle() {
  const { locale, toggleLocale } = useTranslation();

  return (
    <button
      onClick={toggleLocale}
      className="fixed right-6 top-6 z-50 flex items-center gap-1 rounded-full border border-[#C8A45C]/30 bg-[#0A0A0A]/80 px-4 py-2 text-sm font-medium text-[#C8A45C] backdrop-blur-sm transition-all hover:border-[#C8A45C]/60 hover:bg-[#0A0A0A]/90"
      aria-label="Toggle language"
    >
      <span className={locale === "en" ? "opacity-100" : "opacity-40"}>EN</span>
      <span className="text-[#A0998C]">/</span>
      <span className={locale === "ja" ? "opacity-100" : "opacity-40"}>JP</span>
    </button>
  );
}

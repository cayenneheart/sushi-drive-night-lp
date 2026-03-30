"use client";

import { TranslationProvider } from "@/i18n/context";
import { GoldParticles } from "@/components/GoldParticles";
import { LanguageToggle } from "@/components/LanguageToggle";
import { HeroSection } from "@/components/HeroSection";
import { ValueSection } from "@/components/ValueSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <TranslationProvider>
      <GoldParticles />
      <LanguageToggle />
      <main>
        <HeroSection />
        <ValueSection />
        <CtaSection />
      </main>
      <Footer />
    </TranslationProvider>
  );
}

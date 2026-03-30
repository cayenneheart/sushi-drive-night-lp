"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/context";
import { BrushStrokeTitle } from "./BrushStrokeTitle";

const LUMA_URL = "https://lu.ma/nj5fmea8";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.webp')",
        }}
      />
      {/* Dark overlay with washi texture feel */}
      <div className="absolute inset-0 bg-[#0A0A0A]/85" />

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A0A0A_70%)]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-8 px-6 text-center">
        <BrushStrokeTitle text={t.hero.title} />

        <motion.p
          className="max-w-lg text-lg text-[#A0998C] sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.a
          href={LUMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-none border border-[#C8A45C] px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[#C8A45C] transition-all hover:bg-[#C8A45C] hover:text-[#0A0A0A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Gold shimmer on hover */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#C8A45C]/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">{t.hero.cta}</span>
          <span className="relative transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-[#A0998C]/60">
          {t.hero.scroll}
        </span>
        <motion.div
          className="h-8 w-[1px] bg-gradient-to-b from-[#C8A45C]/60 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}

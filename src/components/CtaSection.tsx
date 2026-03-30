"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/i18n/context";

const LUMA_URL = "https://lu.ma/nj5fmea8";

export function CtaSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#C8A45C08_0%,_transparent_60%)]" />

      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center">
        {/* Decorative line */}
        <motion.div
          className="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#C8A45C]/50 to-[#C8A45C]/20"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ originY: 0 }}
        />

        {/* Heading */}
        <motion.h2
          className="font-serif text-4xl text-[#F5F0E8] sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.cta.heading}
        </motion.h2>

        {/* CTA Button */}
        <motion.a
          href={LUMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#C8A45C] bg-[#C8A45C] px-14 py-5 text-sm font-medium uppercase tracking-[0.25em] text-[#0A0A0A] transition-all hover:bg-transparent hover:text-[#C8A45C]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Shimmer */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">{t.cta.button}</span>
          <span className="relative transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </motion.a>

        {/* Date & tagline */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-sm tracking-[0.2em] text-[#C8A45C]/80">
            {t.cta.date}
          </span>
          <span className="text-xs tracking-[0.15em] text-[#A0998C]/60">
            {t.cta.tagline}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

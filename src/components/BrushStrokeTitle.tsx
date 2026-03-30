"use client";

import { motion } from "framer-motion";

export function BrushStrokeTitle({ text }: { text: string }) {
  return (
    <motion.h1
      className="relative w-full text-center font-serif text-5xl font-bold tracking-tight text-[#F5F0E8] sm:text-7xl md:text-8xl lg:text-9xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Decorative brush stroke behind text */}
      <motion.span
        className="absolute -left-4 top-1/2 -z-10 block h-[120%] w-[110%] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C8A45C]/10 to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />

      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1 + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

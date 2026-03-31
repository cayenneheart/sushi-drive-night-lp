"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/i18n/context";
type ValueItemProps = {
  label: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  index: number;
};

function ValueItem({
  label,
  heading,
  body,
  imageSrc,
  imageAlt,
  reversed = false,
  index,
}: ValueItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-8 md:gap-12 ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Image */}
      <motion.div
        className="relative aspect-[4/3] w-full overflow-hidden md:w-1/2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Subtle gold border accent */}
        <div
          className={`absolute bottom-0 top-0 w-[1px] bg-gradient-to-b from-transparent via-[#C8A45C]/40 to-transparent ${
            reversed ? "right-0 md:left-0" : "left-0 md:right-0"
          }`}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className={`flex w-full flex-col gap-4 md:w-1/2 ${reversed ? "md:pl-4" : ""}`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Label */}
        <div className="flex items-center gap-3">
          <span className="font-serif text-xs uppercase tracking-[0.4em] text-[#C8A45C]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-[1px] w-8 bg-[#C8A45C]/40" />
          <span className="font-serif text-xs uppercase tracking-[0.4em] text-[#C8A45C]">
            {label}
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl leading-tight text-[#F5F0E8] sm:text-4xl">
          {heading.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Body */}
        <p className="max-w-md text-base leading-relaxed text-[#A0998C]">
          {body.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
      </motion.div>
    </div>
  );
}

export function ValueSection() {
  const { t } = useTranslation();

  const values = [
    {
      ...t.value.culture,
      imageSrc: "/images/value-culture.webp",
      imageAlt: "Japanese tea ceremony",
    },
    {
      ...t.value.network,
      imageSrc: "/images/value-network.webp",
      imageAlt: "Global networking",
      reversed: true,
    },
    {
      ...t.value.nextgen,
      imageSrc: "/images/value-nextgen.webp",
      imageAlt: "Japanese student entrepreneurs",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32 md:py-48">
      {/* Subtle separator */}
      <div className="mx-auto mb-24 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C8A45C]/50 to-transparent" />

      <div
        className="flex max-w-5xl flex-col gap-32 px-8 md:gap-48 md:px-12 lg:px-16"
        style={{ marginInline: "auto" }}
      >
        {values.map((value, i) => (
          <ValueItem
            key={value.label}
            label={value.label}
            heading={value.heading}
            body={value.body}
            imageSrc={value.imageSrc}
            imageAlt={value.imageAlt}
            reversed={"reversed" in value}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import siteData from "@/data/site-data.json";

import { SiteNav } from "@/components/site-nav";

const { eyebrow, heading, role, company, toolIcons } = siteData.hero;
const TAGLINE = siteData.hero.tagline;

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: reduceMotion ? 0 : i * 0.07 },
    }),
  };

  return (
    <section id="top" className="bg-dots flex flex-col items-center gap-[70px] px-lg pb-10 pt-28 sm:px-6">
      <SiteNav />

      {/* Hero card */}
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, rotate: 1.4 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0.37 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-[1052px] overflow-hidden shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04),0px_10px_28px_-8px_rgba(0,0,0,0.07)]"
      >
        {/* Paper surface: base tint + texture + diagonal sheen */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[#fdfcfb]" />
          <Image
            src="/hero/card-texture.jpg"
            alt=""
            fill
            sizes="1052px"
            className="object-cover opacity-90"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(157deg, rgba(255,255,255,0.35) 25%, rgba(243,244,246,0.35) 75%)",
            }}
          />
        </div>

        {/* Ruled notebook grid, 24px, ~22% opacity */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(rgba(209,213,219,0.22) 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, rgba(209,213,219,0.22) 0 1px, transparent 1px 24px)",
          }}
        />

        {/* Torn-paper edges */}
        <img src="/hero/torn-top.svg" alt="" aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-3 w-full" />
        <img src="/hero/torn-bottom.svg" alt="" aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-3 w-full" />
        <img src="/hero/torn-left.svg" alt="" aria-hidden className="pointer-events-none absolute inset-y-0 left-0 h-full w-3" />
        <img src="/hero/torn-right.svg" alt="" aria-hidden className="pointer-events-none absolute inset-y-0 right-0 h-full w-3" />

        {/* Card content */}
        <div className="relative flex flex-col items-center gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-12">
          {/* Text column */}
          <div className="flex min-w-0 flex-1 flex-col items-start gap-5">
            <motion.p
              custom={0}
              variants={rise}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-mono text-[12px] font-medium uppercase leading-4 tracking-[0.72px] text-brand"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              custom={1}
              variants={rise}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[40px] font-bold leading-[1.1] tracking-[-0.84px] text-ink sm:text-[48px] lg:text-[56px] lg:leading-[64px]"
            >
              {heading}
            </motion.h1>

            <motion.p
              custom={2}
              variants={rise}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[20px] font-semibold leading-7 tracking-[-0.1px]"
            >
              <span className="text-blue-600">{role} </span>
              <span className="text-red-400">{company}</span>
            </motion.p>

            <motion.p
              custom={3}
              variants={rise}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[16px] leading-7 text-ink-secondary"
            >
              {TAGLINE}
            </motion.p>

            <motion.div
              custom={4}
              variants={rise}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <img
                src="/hero/tool-icons.svg"
                width={218}
                height={32}
                alt={`Tools I use: ${toolIcons.join(", ")}`}
                className="mt-1 block h-8 w-[218px]"
              />
            </motion.div>
          </div>

          {/* Photo stamp */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 6, y: 14 }}
            whileInView={{ opacity: 1, rotate: 2.28, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
            whileHover={reduceMotion ? undefined : { rotate: 0 }}
            className="shrink-0"
          >
            <figure className="flex w-[301px] max-w-full flex-col items-center rounded-[2px] border-[1.5px] border-dashed border-gray-300 bg-white p-4 shadow-[0px_4px_16px_0px_rgba(102,165,255,0.1)]">
              <div className="relative aspect-[272/302] w-full overflow-hidden rounded-[2px] bg-[#f0f6ff]">
                <Image
                  src="/hero/profile.jpg"
                  alt="Maithily Ashtankar standing in front of a Lenovo sign"
                  fill
                  sizes="272px"
                  className="object-cover object-[50%_18%]"
                  priority
                />
              </div>
            </figure>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}

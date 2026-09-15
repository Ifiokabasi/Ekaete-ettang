"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const headline = ["Discover", "Who You Were", "Meant To Be"];

export default function Hero() {
  return (
    <main className="relative flex min-h-screen w-full items-end overflow-hidden bg-black">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/mumpics.png"
          alt="Ekaete reading a book"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.14,
              delayChildren: 0.45,
            },
          },
        }}
        className="relative z-10 mx-6 mb-16 max-w-5xl md:mx-20 md:mb-24 lg:mx-24"
      >
        {/* Eyebrow */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-brand-yellow" />

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            Faith · Education · Purpose
          </p>
        </motion.div>

        {/* Headline */}
        <h1 className="max-w-5xl text-[3.5rem] font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[7.5rem]">
          {headline.map((line, index) => (
            <motion.span
              key={line}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className={`block ${
                index === 1
                  ? "text-white"
                  : "text-brand-yellow"
              }`}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Supporting copy */}
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="mt-7 max-w-xl text-sm leading-7 text-white/75 md:text-base"
        >
          Helping young people and families grow in faith, character,
          wisdom and purpose — one life, one conversation and one generation
          at a time.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="mt-9"
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Join Our Mailing List
            </span>

            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
              →
            </span>

            <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>

        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-white"
        >
          ↓
        </motion.span>
      </motion.div>

      {/* Small brand marker */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute left-6 top-28 z-10 hidden md:block md:left-20"
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
          Ekaete Ettang
        </p>
      </motion.div>
    </main>
  );
}
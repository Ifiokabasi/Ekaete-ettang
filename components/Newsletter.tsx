"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-yellow px-6 py-28 md:px-16"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-white/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-black/5 blur-3xl" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 flex w-full max-w-6xl flex-col items-center"
      >
        {/* INTRO */}
        <motion.div
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-black/50">
            Stay Connected
          </p>

          <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-black md:text-7xl lg:text-8xl">
            Ideas worth{" "}
            <span className="font-light italic">carrying with you.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-black/65 md:text-lg">
            Join Ekaete&apos;s newsletter for thoughtful reflections on faith,
            Christian education, family, leadership, character and raising the
            next generation with purpose.
          </p>
        </motion.div>

        {/* VIDEO */}
        <motion.div
          variants={fadeUp}
          className="group relative w-full max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[28px] bg-black p-2 shadow-2xl md:p-3">
            {/* Video */}
            <div className="relative aspect-video overflow-hidden rounded-[20px] bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
            </div>
          </div>

          {/* Video label */}
          <div className="absolute -bottom-5 left-6 rounded-full bg-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black shadow-lg md:left-8">
            A message from Ekaete
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-col items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full bg-black px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white"
          >
            <span className="relative z-10">
              Join Ekaete&apos;s Newsletter
            </span>

            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-brand-yellow text-black transition-transform duration-500 group-hover:rotate-45">
              →
            </span>

            <span className="absolute inset-0 -translate-x-full bg-brand-dark transition-transform duration-500 group-hover:translate-x-0" />
          </motion.a>

          <p className="mt-5 text-center text-xs uppercase tracking-[0.15em] text-black/45">
            Thoughtful letters. No unnecessary noise.
          </p>
        </motion.div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          variants={fadeUp}
          className="mt-24 flex w-full items-center gap-5"
        >
          <span className="h-px flex-1 bg-black/15" />

          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">
            Faith · Character · Purpose
          </span>

          <span className="h-px flex-1 bg-black/15" />
        </motion.div>
      </motion.div>
    </section>
  );
}
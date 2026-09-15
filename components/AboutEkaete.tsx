"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tools = [
  {
    src: "/images/bible.png",
    alt: "Ministry Training tile",
    label: "Bible Study Outline",
  },
  {
    src: "/images/motherandBaby.png",
    alt: "Ministry Training tile",
    label: "Mother",
  },
  {
    src: "/images/goals.png",
    alt: "Ministry Training tile",
    label: "Career Choices",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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
      staggerChildren: 0.15,
    },
  },
};

export default function AboutEkaete() {
  return (
    <section
      id="aboutEkaete"
      className="relative w-full overflow-hidden px-6 py-28 md:py-36"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-black/[0.025] blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* INTRO */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex max-w-4xl flex-col items-center text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-black/45"
          >
            About Ekaete
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-black tracking-[-0.04em] text-black md:text-7xl"
          >
            About{" "}
            <span className="font-light italic">Ekaete Ettang</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-brand-ink/75 md:text-lg"
          >
            <p>
              Dr. Ekaette Ettang is a Christian educator and leader with a
              longstanding commitment to advancing Christian education and
              nurturing young people.
            </p>

            <p>
              She has served in leadership within the Association of Christian
              Schools in Nigeria and has contributed to conversations
              surrounding Christian education and the development of young
              people.
            </p>

            <p>
              Her passion for faith, education, and godly values continues to
              influence the lives of the younger generation.
            </p>
          </motion.div>

          {/* Read more */}
          <motion.div variants={fadeUp} className="mt-10">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden rounded-full bg-black px-9 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white"
            >
              <span className="relative z-10">Read More</span>

              <span className="absolute inset-0 -translate-x-full bg-brand-dark transition-transform duration-500 group-hover:translate-x-0" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="mt-28 max-w-5xl border-t border-black/10"
        />

        {/* TOOLS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 w-full"
        >
          <motion.div
            variants={fadeUp}
            className="mb-12 flex flex-col items-center text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
              Resources
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Discipleship{" "}
              <span className="font-light italic">Tools & More</span>
            </h2>
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {tools.map((tool) => (
              <motion.div
                key={tool.label}
                variants={fadeUp}
                className="group"
              >
                {/* Image */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="relative aspect-square overflow-hidden rounded-[28px] bg-black/5"
                >
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  {/* Floating arrow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg"
                  >
                    →
                  </motion.div>
                </motion.div>

                {/* Label */}
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {tool.label}
                  </h3>

                  <span className="text-xs uppercase tracking-[0.2em] text-black/35">
                    Explore
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
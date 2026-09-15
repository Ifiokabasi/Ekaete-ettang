"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const topics = [
  {
    src: "/images/student.png",
    alt: "Young person in a learning environment",
    label: "Sexuality",
    number: "01",
  },
  {
    src: "/images/food.png",
    alt: "Healthy food and cooking",
    label: "Healthy Living",
    number: "02",
  },
  {
    src: "/images/marriage.png",
    alt: "Marriage and relationships",
    label: "Marriage",
    number: "03",
  },
  {
    src: "/images/flower.png",
    alt: "Home life and beauty",
    label: "Home & Beauty",
    number: "04",
  },
  {
    src: "/images/boys.png",
    alt: "Children and parenting",
    label: "Child Upbringing",
    number: "05",
  },
  {
    src: "/images/gmama.png",
    alt: "Teenagers in discipleship",
    label: "Teen Discipleship",
    number: "06",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function VideoBlogs() {
  return (
    <section
      id="videoBlogs"
      className="relative w-full overflow-hidden bg-white px-6 py-28 md:px-10 md:py-36"
    >
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-brand-yellow/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-black/50">
            Continue Learning
          </p>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-black md:text-7xl">
            Continue Your{" "}
            <span className="font-light italic">Journey.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
            Explore conversations and practical teachings on faith, family,
            relationships, character and everyday life — created to help you
            grow with wisdom and purpose.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-12 h-px origin-left bg-black/10"
        />

        {/* Topics */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {topics.map((topic) => (
            <motion.article
              key={topic.label}
              variants={item}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/4.2] overflow-hidden bg-black">
                <Image
                  src={topic.src}
                  alt={topic.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Dark hover layer */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-semibold tracking-wider text-black transition-transform duration-500 group-hover:scale-110">
                  {topic.number}
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-brand-yellow text-xl text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  →
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center justify-between border-b border-black/10 py-5 transition-colors duration-300 group-hover:border-black">
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40">
                    Video Series
                  </p>

                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-black md:text-2xl">
                    {topic.label}
                  </h3>
                </div>

                <span className="text-sm text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
                  ↗
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-black/10 pt-8 md:flex-row md:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-black/50 md:text-base">
            Thoughtful conversations for the seasons of life that matter most.
          </p>

          <a
            href="#newsletter"
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-black"
          >
            Stay Connected
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
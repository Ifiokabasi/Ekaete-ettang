"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Workshop() {
  return (
    <section
      id="workshop"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-28 md:px-16 md:py-36"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/gmama.jpg"
          alt="Teenage school children in discipleship"
          fill
          sizes="100vw"
          className="object-cover grayscale"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-brand-yellow/80" />

      <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/60 via-brand-yellow/80 to-black/30" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
          className="mb-12 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-black/50"
          >
            The Experience
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-black md:text-7xl lg:text-8xl"
          >
            Inside the{" "}
            <span className="font-light italic">Training</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-black/65 md:text-lg"
          >
            Our training spaces are designed to help young people grow in
            faith, character, confidence and purpose — while giving them the
            tools to navigate life with wisdom.
          </motion.p>
        </motion.div>

        {/* VIDEO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="group relative w-full max-w-5xl"
        >
          {/* Outer frame */}
          <div className="relative rounded-[30px] bg-black p-2 shadow-2xl md:p-3">
            {/* Video */}
            <div className="relative aspect-video overflow-hidden rounded-[22px] bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              >
                {/* Add your video here */}
                {/* 
                <source
                  src="/videos/workshop.mp4"
                  type="video/mp4"
                />
                */}
              </video>

              {/* Subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30" />
            </div>
          </div>

          {/* Floating label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="absolute -bottom-5 left-6 rounded-full bg-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black shadow-xl md:left-8"
          >
            A glimpse inside
          </motion.div>
        </motion.div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex w-full max-w-4xl flex-col items-center gap-5 text-center"
        >
          <div className="h-px w-16 bg-black/30" />

          <p className="max-w-2xl text-sm leading-7 text-black/60 md:text-base">
            We believe education should do more than transfer knowledge. It
            should shape character, strengthen conviction and prepare young
            people to live with purpose.
          </p>

          <a
            href="#contact"
            className="group mt-2 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black"
          >
            <span>Learn more about our programmes</span>

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
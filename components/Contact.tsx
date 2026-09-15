"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const socials = [
  { src: "/images/facebook.svg", alt: "Facebook" },
  { src: "/images/twitter.svg", alt: "Twitter" },
  { src: "/images/instagram.svg", alt: "Instagram" },
  { src: "/images/youtube.svg", alt: "YouTube" },
];

const inputClasses =
  "w-full border-b border-black/20 bg-transparent px-0 py-4 text-base text-black placeholder:text-black/35 transition-colors duration-300 focus:border-black focus:outline-none";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white px-6 py-28 md:px-16 md:py-36"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-black/40"
          >
            Get in Touch
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-black md:text-7xl lg:text-8xl"
          >
            Let&apos;s start a{" "}
            <span className="font-light italic">conversation.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-base leading-8 text-black/60 md:text-lg"
          >
            Whether you would like to discuss Christian education, leadership,
            mentoring, discipleship, speaking or an opportunity to collaborate,
            I would love to hear from you.
          </motion.p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-20 border-t border-black/10 pt-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-28">
          {/* FORM */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">
                Send a message
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                How can I help?
              </h2>
            </motion.div>

            <motion.form
              variants={fadeUp}
              action="#"
              className="flex flex-col gap-8"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-black/50"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-black/50"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-black/50"
                >
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="What would you like to discuss?"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-black/50"
                >
                  Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="Tell me a little about your message..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="pt-3">
                <motion.button
                  type="submit"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden rounded-full bg-black px-9 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white"
                >
                  <span className="relative z-10">Send Message</span>

                  <span className="absolute inset-0 -translate-x-full bg-brand-yellow transition-transform duration-500 group-hover:translate-x-0" />

                  <span className="absolute inset-0 flex translate-x-2 items-center justify-center opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <span className="relative z-10 text-black">→</span>
                  </span>
                </motion.button>
              </div>
            </motion.form>
          </motion.div>

          {/* CONTACT DETAILS */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
                Connect
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Stay connected.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-black/60">
                For speaking engagements, educational initiatives,
                collaborations and other enquiries, you can reach me directly.
              </p>
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div
              variants={fadeUp}
              className="mt-10 border-t border-black/10 pt-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                Contact
              </p>

              <div className="mt-5 space-y-3 text-base">
                <p>Plot 245 Liberty Boulevard, Jos</p>

                <a
                  href="tel:+2349037001944"
                  className="block transition-opacity hover:opacity-50"
                >
                  +234 903 700 1944
                </a>

                <a
                  href="mailto:hello@ekaeteettang.com"
                  className="block transition-opacity hover:opacity-50"
                >
                  hello@ekaeteettang.com
                </a>

                <a
                  href="mailto:ekaete.ettang@gmail.com"
                  className="block transition-opacity hover:opacity-50"
                >
                  ekaete.ettang@gmail.com
                </a>
              </div>
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              variants={fadeUp}
              className="mt-10 border-t border-black/10 pt-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                Follow
              </p>

              <div className="mt-5 flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.alt}
                    href="#"
                    aria-label={social.alt}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition-colors duration-300 hover:border-black hover:bg-black"
                  >
                    <Image
                      src={social.src}
                      alt=""
                      width={20}
                      height={20}
                      aria-hidden="true"
                      className="transition-all duration-300 group-hover:invert"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              variants={fadeUp}
              className="group relative mt-12 overflow-hidden rounded-[28px]"
            >
              <Image
                src="/images/mumpics.png"
                alt="Ekaete Ettang"
                width={600}
                height={600}
                className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />

              <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] backdrop-blur">
                Ekaete Ettang
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-28 border-t border-black/10 pt-10"
        >
          <p className="max-w-3xl text-2xl font-light leading-relaxed tracking-tight text-black/70 md:text-4xl">
            Investing in{" "}
            <span className="font-semibold text-black">
              faith, character and the next generation.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
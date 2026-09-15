"use client";

import { motion } from "framer-motion";

const events = [
  {
    date: "SEPT 2 — 5",
    mode: "ONLINE",
    title: "ARISE AND SHINE CONFERENCE",
  },
  {
    date: "OCTOBER 3",
    mode: "ONLINE",
    title: "ENVISION RETREAT — SOUTH 2026",
  },
  {
    date: "OCTOBER 26",
    mode: "ONLINE",
    title: "ENVISION RETREAT — NORTH 2026",
  },
  {
    date: "NOVEMBER 28",
    mode: "ONLINE",
    title: "OPEN HOUSE 2026",
  },
];

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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function UpcomingEvents() {
  return (
    <section
      id="upcomingEvents"
      className="relative w-full overflow-hidden bg-white px-6 py-28 md:px-16 md:py-36"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-black/40"
          >
            The Calendar
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl lg:text-8xl"
          >
            Upcoming{" "}
            <span className="font-light italic">Events</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
          >
            <p className="max-w-xl text-sm leading-7 text-black/55 md:text-base">
              Join Ekaete for conversations, retreats, conferences and
              gatherings centred on faith, education, character and purpose.
            </p>

            <a
              href="#newsletter"
              className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black"
            >
              <span>Stay informed</span>

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* EVENT LIST */}
        <div className="border-t border-black">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{
                delay: index * 0.08,
              }}
              className="group relative border-b border-black/15"
            >
              <div className="relative flex flex-col gap-7 py-8 transition-all duration-500 md:flex-row md:items-center md:gap-10 md:py-10">
                {/* Hover background */}
                <div className="absolute inset-x-0 top-0 -z-0 h-full origin-left scale-x-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

                {/* DATE */}
                <div className="relative z-10 flex items-center gap-5 md:w-[220px] md:flex-shrink-0">
                  <div>
                    <p className="text-xl font-bold tracking-tight transition-colors duration-500 group-hover:text-white md:text-2xl">
                      {event.date}
                    </p>

                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40 transition-colors duration-500 group-hover:text-white/50">
                      {event.mode}
                    </p>
                  </div>
                </div>

                {/* EVENT TITLE */}
                <div className="relative z-10 flex-1">
                  <h2 className="max-w-2xl text-2xl font-semibold uppercase leading-tight tracking-[-0.02em] transition-colors duration-500 group-hover:text-white md:text-3xl lg:text-4xl">
                    {event.title}
                  </h2>
                </div>

                {/* ACTION */}
                <div className="relative z-10 flex items-center justify-between md:w-[190px] md:flex-shrink-0 md:justify-end">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/40 transition-colors duration-500 group-hover:text-white/50 md:hidden">
                    Event
                  </span>

                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-white"
                  >
                    Register

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                      →
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col gap-3 text-xs uppercase tracking-[0.18em] text-black/35 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>2026 Calendar</span>

          <span>More gatherings to be announced</span>
        </motion.div>
      </div>
    </section>
  );
}
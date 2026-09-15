"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const leftLinks = [
  { label: "Events", href: "#upcomingEvents" },
  { label: "Blog", href: "/blog" },
];

const rightLinks = [
  { label: "About", href: "#aboutEkaete" },
  { label: "Ekaete's Work", href: "#videoBlogs" },
];

const linkVariants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2 + index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function NavLink({ label, href, index }) {
  return (
    <motion.li
      custom={index}
      variants={linkVariants}
      initial="hidden"
      animate="visible"
    >
      <a
        href={href}
        className="group relative inline-block py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/85 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-xs"
      >
        {label}

        {/* Animated underline */}
        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-brand-yellow transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </a>
    </motion.li>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-6 py-6 md:px-12 lg:px-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* LEFT NAV */}
        <ul className="hidden items-center gap-10 md:flex">
          {leftLinks.map((link, index) => (
            <NavLink
              key={link.label}
              label={link.label}
              href={link.href}
              index={index}
            />
          ))}
        </ul>

        {/* LOGO */}
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group absolute left-1/2 top-5 flex -translate-x-1/2 flex-col items-center"
          aria-label="Ekaete Ettang home"
        >
          <motion.div
            whileHover={{ rotate: -3, scale: 1.04 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/Ekaetelogo.png"
              alt="Ekaete Ettang"
              width={100}
              height={100}
              priority
              className="w-[62px] object-contain md:w-[82px]"
            />
          </motion.div>

          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.3em] text-white/80 transition-colors duration-300 group-hover:text-white md:text-[10px]">
            Ekaete Ettang
          </span>
        </motion.a>

        {/* RIGHT NAV */}
        <ul className="ml-auto hidden items-center gap-10 md:flex">
          {rightLinks.map((link, index) => (
            <NavLink
              key={link.label}
              label={link.label}
              href={link.href}
              index={index + 2}
            />
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/30 bg-black/10 backdrop-blur-md md:hidden"
        >
          <motion.span
            animate={
              menuOpen
                ? { rotate: 45, y: 4 }
                : { rotate: 0, y: 0 }
            }
            className="h-px w-5 bg-white"
          />

          <motion.span
            animate={
              menuOpen
                ? { rotate: -45, y: -1 }
                : { rotate: 0, y: 0 }
            }
            className="h-px w-5 bg-white"
          />
        </motion.button>
      </nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="overflow-hidden md:hidden"
      >
        <div className="mt-6 rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {[...leftLinks, ...rightLinks].map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -15 }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                  x: menuOpen ? 0 : -15,
                }}
                transition={{
                  duration: 0.4,
                  delay: menuOpen ? index * 0.06 : 0,
                }}
                className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white"
              >
                {link.label}

                <span className="text-brand-yellow">→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
}
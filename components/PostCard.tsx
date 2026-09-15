"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/image";
import type { PostSummary } from "@/sanity/types";

function formatDate(dateString?: string) {
  if (!dateString) return null;

  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: PostSummary }) {
  const date = formatDate(post.publishedAt);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
          {post.mainImage ? (
            <>
              <Image
                src={urlFor(post.mainImage)
                  .width(1200)
                  .height(750)
                  .url()}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:grayscale-0"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

              {/* Read indicator */}
              <div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-brand-yellow text-xl text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                →
              </div>
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-100">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/30">
                Ekaete Ettang
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="border-b border-black/10 py-6 transition-colors duration-300 group-hover:border-black">
          {/* Meta */}
          <div className="mb-4 flex items-center justify-between gap-4">
            {date ? (
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
                {date}
              </p>
            ) : (
              <span />
            )}

            <span className="text-xs uppercase tracking-[0.15em] text-black/30 transition-colors duration-300 group-hover:text-black">
              Journal
            </span>
          </div>

          {/* Title */}
          <h3 className="max-w-2xl text-2xl font-semibold leading-[1.05] tracking-[-0.03em] text-brand-dark transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="mt-4 line-clamp-3 max-w-2xl text-sm leading-6 text-brand-ink/65 md:text-base">
              {post.excerpt}
            </p>
          )}

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black">
              Read article
            </span>

            <span className="text-sm text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
              ↗
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
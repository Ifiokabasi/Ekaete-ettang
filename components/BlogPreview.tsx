import Link from "next/link";
import { sanityFetch } from "@/sanity/fetch";
import { latestPostsQuery } from "@/sanity/queries";
import type { PostSummary } from "@/sanity/types";
import PostCard from "./PostCard";

export default async function BlogPreview() {
  const posts = await sanityFetch<PostSummary[]>(latestPostsQuery, {}, []);

  return (
    <section
      id="blog"
      className="relative flex w-full flex-col items-center justify-center px-6 py-24"
    >
      <h2 className="mb-3 text-center text-4xl font-black text-brand-dark md:text-5xl">
        From the Blog
      </h2>
      <p className="mb-12 max-w-xl text-center text-brand-ink">
        Teaching notes, reflections, and updates from Ekaete — pulled
        straight from Sanity Studio.
      </p>

      {posts.length === 0 ? (
        <p className="rounded-xl border border-dashed border-black/20 px-8 py-10 text-center text-neutral-500">
          No posts yet — once you publish something in Sanity Studio
          (project <code className="font-mono">3gd3j75p</code>, dataset{" "}
          <code className="font-mono">production</code>), it&apos;ll show up
          here automatically.
        </p>
      ) : (
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}

      <Link
        href="/blog"
        className="mt-12 inline-block rounded-full bg-black px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
      >
        View all posts
      </Link>
    </section>
  );
}

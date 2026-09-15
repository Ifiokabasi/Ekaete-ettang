import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { sanityFetch } from "@/sanity/fetch";
import { postsQuery } from "@/sanity/queries";
import type { PostSummary } from "@/sanity/types";

// Sanity content can change any time, so render this route per-request
// instead of baking it into the build.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Ekaete Ettang",
  description: "Teaching notes, reflections, and updates from Ekaete Ettang.",
};

export default async function BlogIndexPage() {
  const posts = await sanityFetch<PostSummary[]>(postsQuery, {}, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-40">
        <h1 className="mb-4 text-5xl font-black text-brand-dark">Blog</h1>
        <p className="mb-16 max-w-xl text-brand-ink">
          Teaching notes, reflections, and updates — published from Sanity
          Studio.
        </p>

        {posts.length === 0 ? (
          <p className="rounded-xl border border-dashed border-black/20 px-8 py-10 text-center text-neutral-500">
            No posts published yet. Add one in Sanity Studio and it will
            appear here.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

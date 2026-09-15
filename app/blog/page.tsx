import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { sanityFetch } from "@/sanity/fetch";
import { postsQuery } from "@/sanity/queries";
import type { PostSummary } from "@/sanity/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Ekaete Ettang",
  description:
    "Teaching notes, reflections, and conversations on faith, education, family, character and purpose from Ekaete Ettang.",
};

export default async function BlogIndexPage() {
  const posts = await sanityFetch<PostSummary[]>(postsQuery, {}, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48">
          {/* Background detail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-120px] top-[-100px] h-[360px] w-[360px] rounded-full bg-brand-yellow/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                The Journal
              </p>

              <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.05em] text-brand-dark md:text-8xl">
                Thoughts.
                <br />
                <span className="font-light italic">Reflections.</span>
                <br />
                Conversations.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-brand-ink/65 md:text-lg md:leading-8">
                Teaching notes, reflections and conversations on faith,
                Christian education, family, character and living with
                purpose.
              </p>
            </div>

            {/* Intro rule */}
            <div className="mt-16 flex items-center gap-5 md:mt-24">
              <div className="h-px flex-1 bg-black/10" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                From Ekaete
              </span>

              <div className="h-px w-16 bg-black/10" />
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="px-6 pb-32 md:px-10">
          <div className="mx-auto max-w-7xl">
            {posts.length === 0 ? (
              <div className="border-y border-black/10 py-20 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                  The Journal
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark">
                  Nothing published yet.
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-brand-ink/60">
                  New teaching notes, reflections and conversations will
                  appear here as they are published.
                </p>
              </div>
            ) : (
              <>
                {/* Section heading */}
                <div className="mb-12 flex items-end justify-between gap-6 border-b border-black/10 pb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                      Latest Writing
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] text-brand-dark md:text-4xl">
                      From the Journal
                    </h2>
                  </div>

                  <p className="hidden text-xs uppercase tracking-[0.18em] text-black/35 sm:block">
                    {posts.length}{" "}
                    {posts.length === 1 ? "Article" : "Articles"}
                  </p>
                </div>

                {/* Editorial grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Closing statement */}
        <section className="border-t border-black/10 bg-brand-yellow px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-black/50">
              Keep Growing
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-black md:text-6xl">
              Learning is a journey.
              <br />
              <span className="font-light italic">
                Keep asking better questions.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-black/65">
              Explore more conversations, resources and teachings designed to
              encourage faith, wisdom, character and purposeful living.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
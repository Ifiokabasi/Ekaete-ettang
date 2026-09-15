import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import { sanityFetch } from "@/sanity/fetch";
import { postBySlugQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import type { Post } from "@/sanity/types";

export const dynamic = "force-dynamic";

function formatDate(dateString?: string) {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await sanityFetch<Post | null>(
    postBySlugQuery,
    { slug: params.slug },
    null
  );

  if (!post) return { title: "Post not found | Ekaete Ettang" };

  return {
    title: `${post.title} | Ekaete Ettang`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await sanityFetch<Post | null>(
    postBySlugQuery,
    { slug: params.slug },
    null
  );

  if (!post) notFound();

  const date = formatDate(post.publishedAt);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-40">
        {date && (
          <p className="mb-3 text-xs uppercase tracking-wide text-neutral-500">
            {date}
          </p>
        )}
        <h1 className="mb-6 text-4xl font-black leading-tight text-brand-dark md:text-5xl">
          {post.title}
        </h1>

        {post.author?.name && (
          <p className="mb-8 text-sm text-neutral-500">
            By {post.author.name}
          </p>
        )}

        {post.mainImage && (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {post.body ? (
          <div className="prose prose-neutral max-w-none prose-headings:font-black prose-a:text-black">
            <PortableText value={post.body} />
          </div>
        ) : (
          <p className="text-brand-ink">{post.excerpt}</p>
        )}
      </main>
    </>
  );
}

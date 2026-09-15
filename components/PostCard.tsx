import Image from "next/image";
import Link from "next/link";
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
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(600).height(450).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
            No image
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        {date && (
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            {date}
          </p>
        )}
        <h3 className="text-lg font-bold leading-snug text-brand-dark">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="line-clamp-3 text-sm text-brand-ink">
            {post.excerpt}
          </p>
        )}
        <span className="mt-auto pt-2 text-sm font-semibold text-black underline decoration-brand-yellow decoration-2 underline-offset-4">
          Read more
        </span>
      </div>
    </Link>
  );
}

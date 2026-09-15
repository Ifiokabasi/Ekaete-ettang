import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { PortableTextBlock } from "@portabletext/react";

export interface PostSummary {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: SanityImageSource;
  publishedAt?: string;
}

export interface Post extends PostSummary {
  body?: PortableTextBlock[];
  author?: {
    name?: string;
    image?: SanityImageSource;
  };
}

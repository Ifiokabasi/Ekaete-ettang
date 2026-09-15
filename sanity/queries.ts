// A no-op template tag — some editors use it to enable GROQ syntax
// highlighting, but it has no runtime behavior of its own.
function groq(strings: TemplateStringsArray, ...values: unknown[]) {
  return strings.reduce(
    (acc, str, i) => acc + str + (values[i] ?? ""),
    ""
  );
}

// These assume a fairly standard Sanity blog schema: a "post" document
// with title, slug, mainImage, excerpt, publishedAt, and a portable-text
// body. If your Studio's field names differ, adjust the projections below
// to match — everything downstream (types, components) reads from these
// shapes.

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const latestPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt,
    body,
    "author": author->{name, image}
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

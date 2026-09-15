import { client } from "./client";

/**
 * Wraps client.fetch so a misconfigured project ID, a network hiccup, or an
 * empty dataset never takes the whole page down — callers get `fallback`
 * back instead of a thrown error, and can render an empty state.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T
): Promise<T> {
  try {
    const data = await client.fetch<T>(query, params);
    return data ?? fallback;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return fallback;
  }
}

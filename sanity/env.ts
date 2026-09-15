// Central place for Sanity project settings.
// Project ID and dataset are public identifiers (not secrets), so it's fine
// to hardcode them as fallbacks — but env vars let you point at a different
// project/dataset per environment (e.g. a "staging" dataset) without
// touching code.

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3gd3j75p";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Use a real date the first time you set this up, then leave it alone.
// https://www.sanity.io/docs/api-versioning
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

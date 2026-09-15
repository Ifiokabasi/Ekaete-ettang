import { createClient } from "@sanity/client";
import { projectId, dataset, apiVersion } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // The CDN serves cached, fast, eventually-consistent content — great for
  // published blog posts. Reads always go straight to the API in dev so you
  // see edits from Studio immediately.
  useCdn: process.env.NODE_ENV === "production",
  // No token: this only ever reads published, public documents. If you add
  // drafts or a private dataset later, add a read token here from a
  // server-only env var (never NEXT_PUBLIC_*).
});

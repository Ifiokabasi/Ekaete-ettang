# Ekaete Ettang — Next.js + Tailwind

A rebuild of the original static site as a Next.js 14 (App Router) app, with
each section broken into its own component and all styling ported to
Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.tsx      – root layout, loads the Lato font
  page.tsx        – assembles all sections
  globals.css     – Tailwind directives
components/
  Navbar.tsx
  Hero.tsx          (the "landingPage" section)
  Newsletter.tsx
  UpcomingEvents.tsx
  Workshop.tsx
  AboutEkaete.tsx
  VideoBlogs.tsx
  Contact.tsx
public/
  images/         – add your image assets here (see below)
```

## Images

The original HTML referenced images that weren't included in the files you
gave me, so they aren't part of this export. Drop the same files into
`public/images/` and everything will pick them up automatically — see
`public/images/README.md` for the full list of filenames the components
expect.

Two things worth knowing:
- `bible .png` (with a stray space) was renamed to `bible.png`.
- The "Career Choices" thumbnail pointed at a path on the original
  computer (`../../Downloads/estee-janssens-...jpg`), which won't exist
  anywhere else — I pointed it at `/images/career-choices.jpg` instead, so
  add that file (or swap the path in `components/AboutEkaete.tsx`) once you
  have the real image.

## Blog (Sanity)

The blog is wired to a Sanity project (`3gd3j75p`, dataset `production`) via
`@sanity/client` — no API token needed, since it only reads published
content. Settings live in `sanity/env.ts` and can be overridden with env
vars (see `.env.local.example`) if you ever point at a different
project/dataset.

```
sanity/
  env.ts       – project ID, dataset, API version
  client.ts    – the Sanity client instance
  image.ts     – urlFor() helper for Sanity image assets
  queries.ts   – GROQ queries (posts list, single post, slugs)
  fetch.ts     – sanityFetch() — wraps client.fetch so a network hiccup or
                 empty dataset shows an empty state instead of crashing
  types.ts     – Post / PostSummary TypeScript types
```

Pages/components that use it:
- `components/BlogPreview.tsx` — "From the Blog" section on the homepage,
  shows the 3 latest posts.
- `app/blog/page.tsx` — full post listing at `/blog`.
- `app/blog/[slug]/page.tsx` — single post, rendering the body as Portable
  Text.

**Schema assumption:** the queries expect a `post` document with `title`,
`slug`, `mainImage`, `excerpt`, `publishedAt`, `body` (Portable Text), and
an optional `author` reference with `name`/`image`. If your Studio's
schema uses different field names, adjust the projections in
`sanity/queries.ts` — everything else reads from that shape, so one edit
there is enough.

All three blog routes are marked `force-dynamic`, so they fetch fresh from
Sanity on every request rather than needing a rebuild when you publish.
No posts yet? Each page shows a friendly empty state instead of an error.

## Notes on the conversion

- Layout, spacing, colors, and type sizes are ported from `style.css` as
  Tailwind utility classes (arbitrary values like `w-[300px]` are used
  where the original used a value with no close Tailwind default, to keep
  the look pixel-for-pixel close to the original).
- The four repeated "event" blocks and the two repeated image grids are now
  driven by small data arrays at the top of `UpcomingEvents.tsx`,
  `AboutEkaete.tsx`, and `VideoBlogs.tsx`, so editing content doesn't mean
  editing markup.
- Images use `next/image` for automatic optimization; the hero and
  workshop background use `fill` since they're full-bleed.
- The contact form still just points at `action="#"` — wire it up to
  your email/service of choice (an API route, Formspree, etc.) when ready.
- The brand yellow (`#FFF225`), dark ink (`#2F2929` / `#1F1F1F`), and Lato
  font are registered in `tailwind.config.ts` as `brand-yellow`,
  `brand-dark`, and `brand-ink` / `font-lato`.

## Polish pass

- Fixed a real bug: the hero paragraph was sized with `w-[100vh]` (viewport
  *height*, not width), which made its line length depend on screen height
  instead of width. It's now a sane `max-width` that scales properly.
- Every section is responsive down to mobile — the fixed `vw`-based widths
  (`w-[25vw]`, `w-[30vw]`, etc.) from the original CSS have been replaced
  with layouts that stack and resize sensibly on small screens, and the
  nav collapses to a stacked layout under the logo on narrow viewports.
  Buttons, links, and social icons have visible hover and keyboard-focus
  states.
- Form fields in the contact section have real (visually-hidden) `<label>`s
  instead of relying on `placeholder` alone, and social icons are wrapped
  in links with `aria-label`s.
- The image-grid "tile" buttons (bible study, career choices, video topics,
  etc.) used an absolutely-positioned `translate` hack to sit over the
  image; that's now a plain flex column, so it no longer depends on a
  magic-number offset.

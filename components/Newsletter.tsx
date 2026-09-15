export default function Newsletter() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-brand-yellow px-6 py-16 md:px-16">
      <video
        width="720"
        height="405"
        controls
        className="aspect-video w-full max-w-3xl rounded-lg bg-black/80"
      />
      <button className="h-14 w-full max-w-md rounded-[10px] border-none bg-black text-xs uppercase tracking-wide text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:w-auto sm:px-10 sm:text-sm">
        Sign Up to Ekaete Ettang&apos;s Newsletter
      </button>
      <p className="max-w-2xl text-center text-brand-ink">
        Lorem Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
        vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
        quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
        eleifend leo.
      </p>
    </section>
  );
}

import Image from "next/image";

export default function Workshop() {
  return (
    <section
      id="workshop"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 px-6 py-24"
    >
      <Image
        src="/images/gmama.jpg"
        alt="Teenage school children in discipleship"
        fill
        className="-z-20 object-cover grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-brand-yellow opacity-80" />

      <h1 className="max-w-2xl text-center text-3xl font-bold capitalize tracking-[0.15rem] text-black sm:text-4xl md:text-[3rem] md:tracking-[0.2rem]">
        What Does Our Trainings Look Like?
      </h1>

      <video
        width="720"
        height="405"
        controls
        className="aspect-video w-full max-w-3xl rounded-lg bg-black/80"
      />
    </section>
  );
}

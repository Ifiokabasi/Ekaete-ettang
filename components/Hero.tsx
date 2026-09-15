import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative flex h-screen w-full items-center overflow-hidden">
      <Image
        src="/images/mumpics.png"
        alt="Ekaete reading a book"
        fill
        priority
        className="object-cover"
      />
      <div className="relative z-10 mx-6 max-w-2xl md:mx-20 md:max-w-3xl">
        <p className="text-[2.75rem] font-black uppercase leading-[1.05] tracking-[2px] text-brand-yellow drop-shadow-sm sm:text-6xl md:text-[5.5rem] md:leading-[4.5rem] md:tracking-[3px]">
          Discover
          <br /> Who You Were <br /> Meant To Be
        </p>
        <button className="mt-8 h-14 w-full max-w-xs rounded-[10px] bg-black text-base uppercase tracking-wide text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-8">
          Join Our Mailing List
        </button>
      </div>
    </main>
  );
}

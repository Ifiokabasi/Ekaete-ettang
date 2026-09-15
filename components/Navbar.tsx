import Image from "next/image";

const linkClasses =
  "text-base md:text-[1.3rem] font-light tracking-wide text-black no-underline transition-colors hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-sm";

export default function Navbar() {
  return (
    <header className="absolute z-10 flex w-full flex-col items-center gap-2 px-4 py-4 md:flex-row md:justify-around md:gap-0 md:py-0">
      <ul className="flex flex-wrap items-center justify-center order-2 md:order-1">
        <li className="inline-block px-3 py-1 md:p-6">
          <a href="#upcomingEvents" className={linkClasses}>
            Events
          </a>
        </li>
        <li className="inline-block px-3 py-1 md:p-6">
          <a href="/blog" className={linkClasses}>
            Blog
          </a>
        </li>
      </ul>

      <div className="relative order-1 flex items-center justify-center gap-3 text-xs font-thin uppercase md:order-2">
        <Image
          src="/images/Ekaetelogo.png"
          alt="logo"
          width={72}
          height={72}
          className="w-16 md:relative md:left-5 md:w-[100px]"
        />
        <h1 className="text-sm md:text-xs">Ekaete Ettang</h1>
      </div>

      <ul className="flex flex-wrap items-center justify-center order-3">
        <li className="inline-block px-3 py-1 md:p-6">
          <a href="#aboutEkaete" className={linkClasses}>
            About
          </a>
        </li>
        <li className="inline-block px-3 py-1 md:p-6">
          <a href="#videoBlogs" className={linkClasses}>
            Ekaete&apos;s Work
          </a>
        </li>
      </ul>
    </header>
  );
}

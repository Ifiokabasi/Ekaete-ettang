import Image from "next/image";

const socials = [
  { src: "/images/facebook.svg", alt: "Facebook" },
  { src: "/images/twitter.svg", alt: "Twitter" },
  { src: "/images/instagram.svg", alt: "Instagram" },
  { src: "/images/youtube.svg", alt: "YouTube" },
];

const inputClasses =
  "w-full rounded-2xl border-4 border-black p-4 text-black placeholder:text-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center gap-12 px-6 py-24 md:px-16"
    >
      <h1 className="text-center text-4xl font-black md:text-5xl">
        Contact Ekaete
      </h1>

      <div className="flex w-full max-w-5xl flex-col gap-16 border-t border-black pt-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-6 md:w-1/2">
          <p className="text-justify leading-relaxed text-brand-ink">
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper.
          </p>

          <form action="#" className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className={inputClasses}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Create a message here"
                className={`${inputClasses} resize-none`}
              />
            </div>

            <div>
              <input
                type="submit"
                value="SEND MESSAGE"
                id="submit"
                className="w-full cursor-pointer rounded-3xl border-none bg-black p-4 font-bold text-white transition-colors hover:bg-brand-dark sm:w-auto sm:px-10"
              />
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-6 md:w-1/3">
          <h2 className="text-2xl font-bold">Address</h2>
          <p className="leading-relaxed text-brand-ink">
            Plot 245 liberty Boulevard, Jos <br />
            +234-9037001944
            <br />
            hello@ekaeteettang.com
            <br />
            ekaete.ettang@gmail.com
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.alt}
                href="#"
                aria-label={social.alt}
                className="rounded-full p-2 transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <Image
                  src={social.src}
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>

          <Image
            src="/images/mumpics.png"
            alt="Ekaete Ettang at the computer"
            width={320}
            height={320}
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

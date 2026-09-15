import Image from "next/image";

const tools = [
  {
    src: "/images/bible.png",
    alt: "Ministry Training tile",
    label: "Bible Study Outline",
  },
  {
    src: "/images/motherandBaby.png",
    alt: "Ministry Training tile",
    label: "Mother",
  },
  {
    src: "/images/goals.png",
    alt: "Ministry Training tile",
    label: "Career Choices",
  },
];

export default function AboutEkaete() {
  return (
    <section
      id="aboutEkaete"
      className="relative flex w-full flex-col items-center justify-center gap-6 px-6 py-24"
    >
      <h1 className="text-center text-4xl font-black md:text-5xl">
        About Ekaete Ettang
      </h1>
      <p className="max-w-2xl text-center text-brand-ink">
        Dr. Ekaette Ettang is a Christian educator and leader with a longstanding commitment to advancing Christian education and nurturing young people.
She has served in leadership within the Association of Christian Schools in Nigeria and has contributed to conversations surrounding Christian education 
and the development of young people. Her passion for faith, education, and godly values continues to influence the lives of the younger generation.
      </p>

      <button className="h-14 w-full max-w-xs rounded-[10px] border-none bg-black text-base uppercase tracking-wide text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:w-auto sm:px-10">
        Read More
      </button>

      <h2 className="mt-10 text-center text-3xl font-black md:text-4xl">
        Discipleship Tools and More
      </h2>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {tools.map((tool) => (
          <div key={tool.label} className="flex flex-col items-center gap-3">
            <Image
              src={tool.src}
              alt={tool.alt}
              width={300}
              height={300}
              className="h-[220px] w-[220px] rounded-[20px] object-cover sm:h-[260px] sm:w-[260px]"
            />
            <button className="rounded-[10px] border border-black/10 bg-white px-4 py-1.5 text-sm capitalize text-black shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              {tool.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

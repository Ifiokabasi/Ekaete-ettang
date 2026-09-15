import Image from "next/image";

const topics = [
  { src: "/images/student.png", alt: "Video Training Section#1", label: "Sexuality Training" },
  { src: "/images/food.png", alt: "Video Training Section#2", label: "Healthy Cooking" },
  { src: "/images/marriage.png", alt: "Video Training Section#3", label: "Marriage" },
  { src: "/images/flower.png", alt: "Video Training Section#4", label: "Home Life and Beauty" },
  { src: "/images/boys.png", alt: "Video Training Section#5", label: "Child-Upbringing" },
  { src: "/images/gmama.png", alt: "Video Training Section#6", label: "Teen Discipleship" },
];

export default function VideoBlogs() {
  return (
    <section
      id="videoBlogs"
      className="relative flex w-full flex-col items-center justify-center gap-10 px-6 py-24"
    >
      <h1 className="text-center text-4xl font-black md:text-5xl">
        Continue Your Journey
      </h1>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {topics.map((topic) => (
          <div key={topic.label} className="flex flex-col items-center gap-3">
            <Image
              src={topic.src}
              alt={topic.alt}
              width={300}
              height={300}
              className="h-[220px] w-[220px] rounded-[20px] object-cover sm:h-[260px] sm:w-[260px]"
            />
            <button className="rounded-[10px] border border-black/10 bg-white px-4 py-1.5 text-sm capitalize text-black shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              {topic.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

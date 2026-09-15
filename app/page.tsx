import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import UpcomingEvents from "@/components/UpcomingEvents";
import Workshop from "@/components/Workshop";
import AboutEkaete from "@/components/AboutEkaete";
import VideoBlogs from "@/components/VideoBlogs";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";

// The blog preview pulls live content from Sanity, so render this route
// per-request rather than freezing it at build time.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Newsletter />
      <UpcomingEvents />
      <Workshop />
      <AboutEkaete />
      <VideoBlogs />
      <BlogPreview />
      <Contact />
    </>
  );
}

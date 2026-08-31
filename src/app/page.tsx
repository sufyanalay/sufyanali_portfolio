import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Journey from "@/components/Journey";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Work />
      <Services />
      <Journey />
      <Testimonials />
      <Contact />
    </div>
  );
}
import { CaseStudies } from "@/components/CaseStudies";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Slider from "@/components/Slider";
import WorkingProcess from "@/components/WorkingProcess";

export default function Home() {
  return (
    <div className="p-8  mx-auto max-w-screen-xl">
      <Navbar />
      <Hero />
      <Slider />
      <Service />
      <CaseStudies />
      <WorkingProcess />
    </div>
  );
}

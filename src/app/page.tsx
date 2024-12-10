import { CaseStudies } from "@/components/CaseStudies";
import ContactForm from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Slider from "@/components/Slider";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import WorkingProcess from "@/components/WorkingProcess";

export default function Home() {
  return (
    <>
      <div className="p-8  mx-auto max-w-screen-xl">
        <Navbar />
        <Hero />
        <Slider />
        <Service />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonial />
      </div>
      <ContactForm />
    </>

  );
}

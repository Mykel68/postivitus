import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4  mx-auto max-w-screen-xl">
      <Navbar />
      <Hero />
    </div>
  );
}

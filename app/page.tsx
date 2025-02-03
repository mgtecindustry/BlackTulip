import Hero from "@/components/Hero";
import HeroSection1 from "@/components/HeroSection1";

export default function Home() {
  return (
    <div className="grid grid-cols-1 items-center justify-center">
      <Hero />
      <HeroSection1 />
    </div>
  );
}

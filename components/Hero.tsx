import Header from "./Header";
import HeroTitle from "./HeroTitle";
import Navbar from "./Navbar";
import RestaurantInfo from "./restaurant-info";
import Image from "next/image";
import heroImage from "@/public/heroImage.jpg";

// Hero.tsx
export default function Hero() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 h-screen">
        <Image
          src={heroImage}
          alt="Hero Image"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* Navigation Components */}
      <Header />
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 pt-[120px]  sm:pb-[80px] h-full grid items-center justify-center">
        <HeroTitle />
        <div className="p-12">
          <RestaurantInfo />
        </div>
      </div>
    </div>
  );
}

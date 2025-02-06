import Header from "./Header";
import HeroTitle from "./HeroTitle";
import Navbar from "./Navbar";
import RestaurantInfo from "./restaurant-info";
import Image from "next/image";
import heroImage from "@/public/heroImage.jpg";

export default function Hero() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 h-[130vh] sm:h-[110vh]">
        <Image
          src={heroImage}
          alt="Zona de relaxare cu mese la terasa Black Tulip, ideală pentru socializare și relaxare."
          fill
          className="object-cover opacity-40 pointer-events-none"
        />
      </div>

      {/* Navigation Components */}
      <div className="relative z-10">
        <Header />
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 pt-[120px] sm:pb-[80px] h-full grid items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          <HeroTitle />
        </h1>
        <div className="p-12">
          <RestaurantInfo />
        </div>
      </div>
    </section>
  );
}

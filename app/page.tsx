// app/page.tsx
import Image from "next/image";
import heroImage from "@/public/heroImage.jpg";
import HeroTitle from "@/components/HeroTitle";
import RestaurantInfo from "@/components/restaurant-info";

export default function Home() {
  return (
    <div className="grid">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src={heroImage}
          alt="Hero Image"
          fill
          className="object-cover opacity-40"
        />
      </div>
      {/* Conținut centrat */}
      <div className="min-h-screen grid items-center justify-center relative z-10">
        <HeroTitle />
        <RestaurantInfo />
      </div>
    </div>
  );
}

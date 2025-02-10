import React from "react";
import Image from "next/image";
import landingPageImage from "@/public/pizza2.jpeg";

export default function HeroSection1() {
  return (
    <section className="grid lg:flex items-center justify-center  max-w-7xl mx-auto p-0 lg:p-8">
      {/* Secțiunea de imagine */}
      <div className="flex-1 max-w-7xl lg:max-w-xl">
        <Image
          src={landingPageImage}
          alt="Mâncăruri rafinate și ingrediente proaspete pentru o experiență culinară de neuitat"
          className="w-full h-[40vh] sm:h-[50vh] lg:h-[70vh] xl:h-[60vh] opacity-90 object-cover "
        />
      </div>

      {/* Secțiunea de text */}
      <div className="text-center lg:text-left flex-1 max-w-7xl lg:max-w-xl p-4">
        <h2 className="text-3xl text-center text-orange-400 xl:text-4xl font-bold mt-8 md:mt-16 lg:mt-0 ">
          Încearcă Delicatesele Noastre
        </h2>
        <p className="mt-6 text-md xl:text-lg leading-relaxed">
          Descoperă preparate realizate din ingrediente proaspete, alese cu
          grijă pentru a-ți oferi o experiență culinară unică. De la aperitive
          rafinate la deserturi spectaculoase, fiecare farfurie este o
          combinație perfectă de gust și eleganță.
        </p>
        <p className="mt-4 text-md xl:text-lg leading-relaxed hidden md:block">
          Bucură-te de un ambient relaxant și o selecție premium de vinuri,
          într-un loc unde fiecare detaliu contează. Te așteptăm să te răsfeți
          cu preparatele noastre gourmet!
        </p>
      </div>
    </section>
  );
}

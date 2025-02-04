import React from "react";
import Image from "next/image";
import landingPageImage from "@/public/pizza2.jpeg";

export default function HeroSection1() {
  return (
    <div className="grid lg:flex items-center justify-center gap-12 max-w-7xl mx-auto ">
      {/* Secțiunea de imagine */}
      <div className="flex-1 max-w-xl">
        <Image
          src={landingPageImage}
          alt="landingPageImage"
          className="w-full h-[40vh] sm:max-h-[60vh]  opacity-90  object-cover sm:rounded-lg"
        />
      </div>
      {/* Secțiunea de text */}
      <div className="text-center md:text-left flex-1 max-w-lg p-4">
        <h2 className="text-3xl text-orange-400 sm:text-4xl font-bold ">
          Încearcă Delicatesele Noastre
        </h2>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Descoperă preparate realizate din ingrediente proaspete, alese cu
          grijă pentru a-ți oferi o experiență culinară unică. De la aperitive
          rafinate la deserturi spectaculoase, fiecare farfurie este o
          combinație perfectă de gust și eleganță.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed hidden md:block">
          Bucură-te de un ambient relaxant și o selecție premium de vinuri,
          într-un loc unde fiecare detaliu contează. Te așteptăm să te răsfeți
          cu preparatele noastre gourmet!
        </p>
      </div>
    </div>
  );
}

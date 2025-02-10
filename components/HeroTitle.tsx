import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroTitle() {
  return (
    <div className="text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
      <h1 className="text-orange-400 mt-4 sm:mt-0 scroll-m-20 text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight">
        Black Tulip – Răsfăț Culinar în Eleganță
      </h1>
      <p className="mt-6 text-lg xl:text-lg leading-7 text-gray-200 md:px-8 lg:px-16">
        La <strong>Black Tulip</strong>, rafinamentul întâlnește gustul
        desăvârșit. Oferim preparate fine și băuturi alese într-o atmosferă
        intimă și elegantă. Fiecare masă devine o experiență culinară unică, în
        inima orașului, unde detaliile contează.
        <strong>Experimentează savoarea perfectă</strong> într-un cadru rafinat!
      </p>
      <Button className="mt-8 px-6 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl">
        <Link href="/meniu">Vezi meniu</Link>
      </Button>
    </div>
  );
}

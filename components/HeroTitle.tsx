import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroTitle() {
  return (
    <div className="text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
      <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
        Black Tulip – Răsfăț Culinar în Eleganță
      </h1>
      <p className="mt-6 text-lg md:text-xl leading-7 text-gray-200 md:px-8 lg:px-16">
        <strong>Black Tulip</strong> – Locul unde rafinamentul întâlnește gustul
        desăvârșit. Bucură-te de preparate fine și băuturi alese într-o
        atmosferă intimă și elegantă. Experimentează savoarea perfectă în inima
        orașului!
      </p>
      <Button className="mt-8 px-6 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl">
        <Link href="/meniu">Vezi meniu</Link>
      </Button>
    </div>
  );
}

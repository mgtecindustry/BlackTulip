import Hero from "@/components/Hero";
import Image from "next/image";
import heroImage2 from "@/public/heroImage2.jpg";

export default function Home() {
  return (
    <div className="grid grid-cols-1 items-center justify-center">
      <Hero />

      {/* Secțiune pentru descriere și imagine */}
      <div className="grid md:flex items-center justify-center gap-12 w-11/12 md:w-3/4 mx-auto my-0 sm:my-16 p-4">
        <div className="text-center md:text-left md:w-1/2 mt-0 sm:mt-6 md:mt-0">
          <h2 className="text-3xl font-bold text-orange-400">Răsfăț Culinar</h2>
          <p className="mt-4 text-lg text-gray-300">
            Explorează o selecție rafinată de preparate realizate cu ingrediente
            proaspete și pasiune pentru gust. Fiecare farfurie este o experiență
            unică, menită să îți încânte simțurile.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={heroImage2}
            alt="heroImage2"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

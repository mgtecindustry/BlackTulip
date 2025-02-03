import Image from "next/image";
import heroBannerImage from "@/public/heroImage2.jpg";

export default function HeroBanner() {
  return (
    <div className="relative   py-8 sm:pt-32">
      {/* Imaginea cu fundal */}
      <div className="relative">
        <Image
          src={heroBannerImage}
          alt="heroBannerImage"
          className="opacity-90 w-full h-[50vh] sm:h-[70vh] object-cover"
        />

        {/* Suprapunere pentru contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text SEO asupra imaginii */}
        <div className="absolute inset-0 text-orange-400 flex flex-col items-center justify-center text-center z-10 p-4">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold mb-8 drop-shadow-lg">
            Locul Ideal pentru Relaxare și Răsfăț
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl drop-shadow-md">
            Vino să te bucuri de un ambient elegant și relaxant, unde fiecare
            vizită devine o ocazie specială. La Black Tulip, terasa noastră este
            locul perfect pentru a te destinde alături de cei dragi, savurând
            preparate rafinate și băuturi fine.
          </p>
        </div>
      </div>
    </div>
  );
}

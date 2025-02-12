import {
  GalleryCarouselTerasa,
  GalleryCarouselMancare,
} from "@/components/GalleryCarousel";
import {
  GalleryPageMancare,
  GalleryPageTerasa,
} from "@/components/GalleryPage";
import GallerySection1 from "@/components/GallerySection1";
import GallerySection2 from "@/components/GallerySection2";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

import Image from "next/image";
import heroImage from "@/public/heroImage.jpg";

export default function page() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="relative z-10">
        <Header />
        <Navbar />
      </div>

      <div className="absolute inset-0 w-full h-[100vh]  -z-10">
        <Image
          src={heroImage}
          alt="Locație și Contact - Imagine de fundal"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className=" md:hidden flex flex-col items-center mt-32 gap-8">
        <GallerySection1 />
        <GalleryCarouselTerasa />
        <GallerySection2 />
        <GalleryCarouselMancare />
      </div>

      <div className=" hidden md:flex flex-col items-center mt-32 gap-8 ">
        <div className="px-32">
          <GallerySection1 />
          <GalleryPageTerasa />
          <GallerySection2 />
          <GalleryPageMancare />
        </div>
      </div>
    </div>
  );
}

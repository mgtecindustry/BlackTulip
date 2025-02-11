import { GalleryCarousel } from "@/components/GalleryCarousel";
import GalleryPage from "@/components/GalleryPage";
import GallerySection1 from "@/components/GallerySection1";
import GallerySection2 from "@/components/GallerySection2";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

import Image from "next/image";
import heroImage from "@/public/heroImage2.jpg";

export default function page() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src={heroImage}
          alt="Galerie - Imagine de fundal"
          fill
          className="object-cover h-[110vh] opacity-40"
        />
      </div>
      <div className="relative z-10">
        <Header />
        <Navbar />
      </div>
      <div className=" md:hidden flex flex-col items-center mt-32 gap-8">
        <GallerySection1 />
        <GalleryCarousel />
        <GallerySection2 />
        <GalleryCarousel />
      </div>
      <div className=" hidden md:flex flex-col items-center mt-32 gap-8 ">
        <GallerySection1 />
        <GalleryPage />
        <GallerySection2 />
        <GalleryPage />
      </div>
    </div>
  );
}

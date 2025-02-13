import GallerySection1 from "@/components/GallerySection1";
import GallerySection2 from "@/components/GallerySection2";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import heroImage from "@/public/heroImage.jpg";
import { CarouselGallerySmallScreen } from "@/components/CarouselGallery";
import { galleryImagesMancare, galleryImagesTerasa } from "@/lib/constants";
import { CarouselBigScreen } from "@/components/CarouselGalleryBiggerScreens";

export default function page() {
  return (
    <>
      <Head>
        <title>Terasa Black Tulip - Galerie</title>
        <meta
          name="description"
          content="Descoperă galeria Terasei Black Tulip din Dej, un loc elegant unde poți savura preparate rafinate și băuturi delicioase. Vizitează-ne pentru o experiență unică!"
        />
        <meta
          name="keywords"
          content="terasa Black Tulip, Dej, galerie, preparate rafinate, băuturi, restaurante în Dej"
        />
        <meta name="author" content="Black Tulip" />
        <meta property="og:title" content="Terasa Black Tulip - Galerie" />
        <meta
          property="og:description"
          content="Vizitează Terasa Black Tulip pentru o experiență de neuitat, cu preparate delicioase și un ambient elegant!"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="relative w-full min-h-screen">
        <div className="relative z-10">
          <Header />
          <Navbar />
        </div>
        <div className="absolute inset-0 w-full h-[130vh] sm:h-[100vh]  -z-10">
          <Image
            src={heroImage}
            alt="Locație și Contact - Imagine de fundal"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="flex sm:hidden flex-col items-center mt-32 gap-8">
          <GallerySection1 />
          <CarouselGallerySmallScreen images={galleryImagesTerasa} />
          <GallerySection2 />
          <CarouselGallerySmallScreen images={galleryImagesMancare} />
        </div>
        <div className="sm:flex hidden flex-col items-center mt-32 gap-8">
          <GallerySection1 />
          <CarouselBigScreen images={galleryImagesTerasa} />
          <GallerySection2 />
          <CarouselBigScreen images={galleryImagesMancare} />
        </div>

        {/* <div className="md:hidden flex flex-col items-center mt-32 gap-8">
          <GallerySection1 />
          <GalleryCarouselTerasa />
          <GallerySection2 />
          <GalleryCarouselMancare />
        </div>

        <div className="hidden md:flex flex-col items-center mt-32 gap-8 ">
          <div className="px-32">
            <GallerySection1 />
            <GalleryPageTerasa />
            <GallerySection2 />
            <GalleryPageMancare />
          </div>
        </div> */}
      </div>
    </>
  );
}

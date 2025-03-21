"use client";
import * as React from "react";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { galleryImagesMancare, galleryImagesTerasa } from "@/lib/constants";
import Autoplay from "embla-carousel-autoplay";

export function GalleryCarouselTerasa() {
  const carouselRef = useRef(null);

  return (
    <Carousel
      ref={carouselRef}
      plugins={[
        Autoplay({
          delay: 4000, // Timpul între slide-uri (4 secunde)
          stopOnInteraction: false, // Continuă autoplay chiar dacă utilizatorul interacționează
        }),
      ]}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {galleryImagesTerasa.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={image.href || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export function GalleryCarouselMancare() {
  const carouselRef = useRef(null);

  return (
    <Carousel
      ref={carouselRef}
      plugins={[
        Autoplay({
          delay: 4000, // Timpul între slide-uri (4 secunde)
          stopOnInteraction: false, // Continuă autoplay chiar dacă utilizatorul interacționează
        }),
      ]}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {galleryImagesMancare.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={image.href || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

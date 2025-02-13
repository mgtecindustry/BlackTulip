"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { GalleryImages } from "@/lib/constants";
import Image from "next/image";

export function CarouselGallerySmallScreen({
  images,
}: {
  images: GalleryImages[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      const nextIndex = (api.selectedScrollSnap() + 1) % count;
      api.scrollTo(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api, count]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-md"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-full">
            <Card className="overflow-hidden rounded-none">
              <CardContent className="p-0 aspect-[4/3]">
                <div className="relative w-full h-full">
                  <Image
                    src={image.href || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

"use client";

import * as React from "react";
import type { GalleryImages } from "@/lib/constants";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselBigScreen({ images }: { images: GalleryImages[] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  React.useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className="w-full max-w-[80%] mx-auto space-y-4">
      <div className="relative aspect-[21/9] overflow-hidden rounded-lg shadow-xl bg-gray-200">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={images[currentIndex].href || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center space-x-2 overflow-x-auto py-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-20 h-20 rounded-md overflow-hidden transition-all bg-gray-200 ${
              index === currentIndex
                ? "ring-2 ring-primary ring-offset-2"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={image.href || "/placeholder.svg"}
              alt={image.alt}
              fill
              sizes="80px"
              style={{ objectFit: "contain" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

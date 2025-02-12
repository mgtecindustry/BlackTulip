"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

interface GalleryImage {
  // Asigură-te că această interfață este *exact* aceeași cu cea din constants.ts
  href: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  if (!images) {
    // Verificarea crucială!
    console.error("Componenta Gallery: images este undefined!"); // Mesaj de eroare clar
    return <div>Nu am găsit imagini.</div>; // Sau un placeholder adecvat
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger onClick={() => setSelectedImage(image)}>
            <Image
              src={image.href}
              alt={image.alt}
              width={300}
              height={300}
              className="w-full h-auto rounded-lg cursor-pointer transition-transform transform hover:scale-105"
            />
          </DialogTrigger>
          <DialogContent className="max-w-2xl p-4">
            <DialogTitle>
              {image.alt}
              {/* Titlu ascuns, dar prezent pentru screen readers */}
            </DialogTitle>
            {selectedImage && (
              <Image
                src={selectedImage.href}
                alt={selectedImage.alt}
                width={800}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

import { galleryImagesMancare, galleryImagesTerasa } from "@/lib/constants";
import Gallery from "./ImageGallery";

export function GalleryPageTerasa() {
  return (
    <div className="container mx-auto p-6">
      <Gallery images={galleryImagesTerasa} />
    </div>
  );
}

export function GalleryPageMancare() {
  return (
    <div className="container mx-auto p-6">
      <Gallery images={galleryImagesMancare} />
    </div>
  );
}

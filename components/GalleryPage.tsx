import { galleryImages } from "@/lib/constants";
import Gallery from "./ImageGallery";

export default function GalleryPage() {
  return (
    <div className="container mx-auto p-6">
      <Gallery images={galleryImages} />
    </div>
  );
}

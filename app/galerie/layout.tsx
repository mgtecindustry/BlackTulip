import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Terasa Black Tulip",
  description: "Contactează-ne pentru rezervări sau informații suplimentare.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto">{children}</div>
      <Footer />
    </div>
  );
}

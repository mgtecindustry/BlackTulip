import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Terasa Black Tulip",
  description: "Contactează-ne pentru rezervări sau informații suplimentare.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen  bg-background">
      <Header />
      <Navbar />
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
}

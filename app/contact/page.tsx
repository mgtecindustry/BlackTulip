"use client";
import ContactData from "@/components/ContactData";
import Image from "next/image";
import heroImage from "@/public/heroImage.jpg";
import Location from "@/components/Location";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Header și Navbar (relative pentru a fi peste poză) */}
      <div className="relative z-10">
        <Header />
        <Navbar />
      </div>

      {/* Imagine de fundal full screen */}
      <div className="absolute inset-0 w-full h-[100vh] sm:h-[120vh] -z-10">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt="Hero Image"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* Conținut principal */}
      <div className="flex flex-col items-center justify-center text-center min-h-screen relative z-10 mt-4 pb-32 sm:pb-64">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Conectează-te cu Viitorul
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-md">
          Expertiza noastră, soluția ta. Împreună, transformăm viziunea în
          realitate.
        </p>
      </div>

      {/* Contact Info & Location */}
      <div className="grid mx-auto justify-center relative z-10 ">
        <ContactData />
        <Location />
      </div>
    </div>
  );
}

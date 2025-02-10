"use client";
import ContactData from "@/components/ContactData";
import Image from "next/image";
import heroImage from "@/public/heroImage.jpg";
import Location from "@/components/Location";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Head from "next/head"; // Import pentru head (pentru SEO)

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>
          Contactează-ne - Locul ideal pentru o colaborare de succes
        </title>
        <meta
          name="description"
          content="Contactează-ne pentru a discuta despre viitorul tău proiect. Vizitează-ne locația sau ia legătura cu echipa noastră pentru mai multe detalii."
        />
        <meta
          name="keywords"
          content="contact, locație, informații contact, colaborare, proiecte"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="relative w-full min-h-screen">
        {/* Header și Navbar (relative pentru a fi peste poză) */}
        <div className="relative z-10">
          <Header />
          <Navbar />
        </div>

        {/* Imagine de fundal full screen */}
        <div className="absolute inset-0 w-full h-[100vh] sm:h-[120vh] md:h-[115vh] lg:h-[140vh] xl:h-[125vh] -z-10">
          <Image
            src={heroImage || "/placeholder.svg"}
            alt="Locație și Contact - Imagine de fundal"
            fill
            className="object-cover opacity-40"
          />
        </div>

        {/* Conținut principal */}
        <div className="flex flex-col items-center justify-center text-center min-h-screen relative z-10 mt-4  pb-32 sm:pb-64">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold  mb-4 drop-shadow-lg text-orange-400">
            Contactează-ne pentru Colaborări
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-md">
            Expertiza noastră, soluția ta. Împreună, transformăm viziunea în
            realitate. Contactează-ne astăzi!
          </p>
        </div>

        {/* Contact Info & Location */}
        <div className="grid mx-auto justify-center relative z-10 ">
          <ContactData />
          <Location />
        </div>
      </div>
    </>
  );
}

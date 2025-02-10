import Head from "next/head";
import Hero from "@/components/Hero";
import HeroBanner from "@/components/HeroBanner";
import HeroContainer from "@/components/HeroContainer";
import HeroSection1 from "@/components/HeroSection1";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Terasa Black Tulip - Locul ideal pentru relaxare</title>
        <link rel="canonical" href="https://www.terasablacktulip.ro" />
        <meta
          name="description"
          content="Vizitează Terasa Black Tulip pentru o experiență unică de relaxare și socializare. Urmărește-ne pe Facebook și Instagram!"
        />
        <meta
          name="keywords"
          content="terasa, Black Tulip, relaxare, socializare, evenimente"
        />
        <meta name="author" content="Terasa Black Tulip" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph pentru Social Media */}
        <meta
          property="og:title"
          content="Terasa Black Tulip - Locul ideal pentru relaxare"
        />
        <meta
          property="og:description"
          content="Vizitează Terasa Black Tulip pentru o experiență unică de relaxare și socializare."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.terasablacktulip.ro" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="ro_RO" />
      </Head>

      <div className="grid grid-cols-1 items-center justify-center min-h-screen ">
        <Hero />
        <HeroSection1 />
        <HeroBanner />
        <HeroContainer />
        <Footer />
      </div>
    </>
  );
}

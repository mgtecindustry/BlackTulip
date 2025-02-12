import React from "react";
import Head from "next/head";

export default function GallerySection2() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Galerie Culinară | Terasa Black Tulip Dej</title>
        <meta
          name="description"
          content="Descoperă preparatele rafinate de la Terasa Black Tulip Dej! Mâncăruri fine, deserturi delicioase și plating elegant într-un ambient deosebit."
        />
        <meta
          name="keywords"
          content="restaurant Black Tulip, Dej, preparate rafinate, deserturi, plating elegant, gastronomie, bucătărie de calitate"
        />
        <meta name="author" content="Black Tulip" />
        <meta
          property="og:title"
          content="Galerie Culinară | Terasa Black Tulip Dej"
        />
        <meta
          property="og:description"
          content="Explorează preparatele delicioase ale Terasei Black Tulip din Dej! Mâncăruri fine, deserturi savuroase și un ambient elegant."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-400">
          Galerie Culinară Black Tulip
        </h2>
        <p className="text-center text-gray-200 px-4 py-8 sm:px-16 md:px-24 lg:px-48">
          Descoperă rafinamentul bucătăriei noastre! 🍽️ Terasa Black Tulip îți
          oferă preparate delicioase, atent pregătite de bucătari talentați.
          Savurează specialități culinare unice, deserturi fine și băuturi
          sofisticate, toate într-un decor elegant și relaxant. Experimentează
          gusturi memorabile și bucură-te de o atmosferă deosebită!
        </p>
      </div>
    </div>
  );
}

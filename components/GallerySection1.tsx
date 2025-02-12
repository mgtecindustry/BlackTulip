import Head from "next/head";

export default function GallerySection1() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Galerie Foto | Terasa Black Tulip Dej</title>
        <meta
          name="description"
          content="Vizitează Terasa Black Tulip din Dej! Descoperă un ambient elegant cu accente florale, iluminare ambientală și un meniu rafinat. Perfect pentru relaxare!"
        />
        <meta
          name="keywords"
          content="terasa Black Tulip, Dej, restaurant, cafenea, cocktailuri, relaxare, atmosferă elegantă, evenimente"
        />
        <meta name="author" content="Black Tulip" />
        <meta
          property="og:title"
          content="Galerie Foto | Terasa Black Tulip Dej"
        />
        <meta
          property="og:description"
          content="Descoperă atmosfera unică a Terasei Black Tulip din Dej. Bucură-te de preparate rafinate într-un cadru elegant și relaxant."
        />
        <meta property="og:type" content="website" />
      </Head>
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-orange-400">
        Galerie Terasă Black Tulip
      </h2>
      <p className="text-center text-md lg:text-lg text-gray-200 px-4 py-8 sm:px-16 md:px-24 lg:px-48">
        Descoperă Terasa Black Tulip din Dej – un loc elegant, cu accente
        florale și iluminare ambientală. Savurează preparate delicioase și
        băuturi rafinate într-o atmosferă relaxantă. Perfectă pentru o cafea de
        dimineață sau un cocktail sofisticat seara!
      </p>
    </div>
  );
}

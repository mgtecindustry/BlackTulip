import { LucideIcon } from "lucide-react";
import { MapPin, Wine, Utensils } from "lucide-react";

type NavLinks = {
  href: string;
  label: string;
};

type ContainerVariables = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type GalleryImages = {
  href: string;
  alt: string;
};

export const Navlinks: NavLinks[] = [
  { href: "/", label: "Acasă" },
  { href: "/meniu", label: "Meniu" },
  { href: "/contact", label: "Contact" },
  { href: "/galerie", label: "Galerie" },
];
export const containerVariables: ContainerVariables[] = [
  {
    title: "Atmosferă Elegantă",
    text: "Designul modern al terasei combină stilul sofisticat cu un ambient relaxant. Fiecare detaliu este gândit pentru a-ți oferi o atmosferă confortabilă, ideală pentru o cină intimă sau o întâlnire de afaceri de succes.",

    icon: Wine,
  },
  {
    title: "Locație Exclusivă",
    text: "Terasa Black Tulip te întâmpină într-un cadru elegant și liniștit, perfect pentru momente de relaxare sau întâlniri speciale. Locația noastră centrală și atmosfera rafinată îți garantează o experiență plăcută, indiferent de sezon, datorită sistemului nostru de încălzire pentru zilele răcoroase și ventilației eficiente pentru verile călduroase.",
    icon: MapPin,
  },
  {
    title: "Servicii Impecabile",
    text: "Echipa noastră dedicată asigură un serviciu rapid și atent, garantând o experiență culinară de neuitat. Recomandările noastre personalizate vor face fiecare vizită la Black Tulip specială, într-un cadru plăcut și profesionist.",

    icon: Utensils,
  },
];

export const galleryImagesTerasa: GalleryImages[] = [
  {
    href: "/terasa/terasaImage1.jpg",
    alt: "Barul Terasei Black Tulip, decor modern și elegant",
  },
  {
    href: "/terasa/terasaImage5.jpeg",
    alt: "Vedere exterioară a Terasei Black Tulip, cu decor modern și atmosferă primitoare",
  },
  {
    href: "/terasa/terasaImage3.jpg",
    alt: "Masă pregătită pe Terasa Black Tulip, cu un aranjament elegant în aer liber",
  },
  {
    href: "/terasa/terasaImage6.jpeg",
    alt: "Vedere exterioară a Terasei Black Tulip, cu o atmosferă plăcută și primitoare",
  },
  {
    href: "/terasa/terasaImage4.jpg",
    alt: "Masă elegant aranjată pe Terasa Black Tulip, cu decor sofisticat și detalii rafinate",
  },
];

export const galleryImagesMancare: GalleryImages[] = [
  {
    href: "/mancare/mancareImage1.jpeg",
    alt: "Ciocolată fină din Dubai, un desert rafinat servit la Terasa Black Tulip",
  },

  {
    href: "/mancare/mancareImage3.jpeg",
    alt: "Pizza delicioasă cu toppinguri fresh, servită la Terasa Black Tulip",
  },
  {
    href: "/mancare/mancareImage2.jpeg",
    alt: "Burger suculent cu cheddar topit și cartofi prăjiți, servit la Terasa Black Tulip",
  },

  {
    href: "/mancare/mancareImage5.jpeg",
    alt: "Pizza cu ingrediente de calitate, gătită cu pasiune la Terasa Black Tulip",
  },
  {
    href: "/mancare/mancareImage4.jpeg",
    alt: "Burger gustos cu cartofi prăjiți, o alegere perfectă la Terasa Black Tulip",
  },
  // {
  //   href: "/mancare/mancareImage6.jpeg",
  //   alt: "Poza galerie 6 mancare black tulip",
  // },
  // {
  //   href: "/mancare/mancareImage7.jpeg",
  //   alt: "Poza galerie 5 mancare black tulip",
  // },
];

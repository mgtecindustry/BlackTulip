import { LucideIcon } from "lucide-react";
import { MapPin, Wine, Utensils } from "lucide-react";
import galerie1 from "@/public/galerie/galerie1.jpg";
import galerie2 from "@/public/galerie/galerie2.jpg";
import galerie3 from "@/public/galerie/galerie3.jpg";
import galerie4 from "@/public/galerie/galerie4.jpg";
import galerie5 from "@/public/galerie/galerie5.jpg";

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

export const galleryImages: GalleryImages[] = [
  {
    href: "/galerie/galerie1.jpg",
    alt: "Poza galerie 1 terasa black tulip",
  },
  {
    href: "/galerie/galerie2.jpg",
    alt: "Poza galerie 2 terasa black tulip",
  },
  {
    href: "/galerie/galerie3.jpg",
    alt: "Poza galerie 3 terasa black tulip",
  },
  {
    href: "/galerie/galerie4.jpg",
    alt: "Poza galerie 4 terasa black tulip",
  },
  {
    href: "/galerie/galerie5.jpg",
    alt: "Poza galerie 5 terasa black tulip",
  },
];

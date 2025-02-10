import { Clock, Phone, Book } from "lucide-react";
import Link from "next/link";

export default function RestaurantInfo() {
  return (
    <div className="w-full mt-12 xl:mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
        {/* Rezervări */}
        <div className="flex flex-col items-center text-center p-6 bg-black/80 lg:rounded-lg shadow-lg lg:hover:scale-105 transition-all">
          <Phone className="w-8 h-8 mb-4 text-orange-400" />
          <h2 className="text-xl font-semibold mb-3 text-gray-100">
            Rezervări
          </h2>
          <a
            href="tel:0722784000"
            className="text-gray-500 hover:text-orange-400 transition-colors"
            aria-label="Rezervați o masă la Black Tulip sunând la 0722 784 000"
          >
            +40 (747) 092 771
          </a>
        </div>
        {/* Orar de funcționare */}
        <div className="flex flex-col items-center text-center p-6 bg-black/80 lg:rounded-lg shadow-lg lg:hover:scale-105 transition-all">
          <Clock className="w-8 h-8 mb-4 text-orange-400" />
          <h2 className="text-xl font-semibold mb-3 text-gray-100">
            Orar de Funcționare
          </h2>
          <div className="text-gray-500 space-y-1">
            <p className="text-lg">Luni-Joi: 09:00 - 23:00</p>
            <p className="text-lg">Vineri: 09:00 - 00:00</p>
            <p className="text-lg">Sâmbătă: 10:00 - 01:00</p>
            <p className="text-lg mb-4 sm:mb-8">Duminică: 10:00 - 00:00</p>
          </div>
        </div>
        {/* Meniu */}
        <div className="flex flex-col items-center text-center p-6 bg-black/80 sm:rounded-lg shadow-lg lg:hover:scale-105 transition-all">
          <Book className="w-8 h-8 mb-4 text-orange-400" />
          <h2 className="text-xl font-semibold mb-3 text-gray-100">
            Meniu Black Tulip
          </h2>
          <p className="text-gray-500 mb-4">
            Descoperă Deliciile Noastre Culinare și
            <br />
            Selecția Noastră de Vinuri Rafinate
          </p>
          <Link
            href="/meniu"
            className="text-orange-400 hover:text-orange-500 transition-colors font-medium"
            aria-label="Vezi meniul complet al Terasei Black Tulip"
          >
            Vezi meniul →
          </Link>
        </div>
      </div>
    </div>
  );
}

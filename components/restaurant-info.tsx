import { Clock, Phone, Book } from "lucide-react";
import Link from "next/link";

export default function RestaurantInfo() {
  return (
    <div className="w-full bg-black/80 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Program */}
        <div className="flex flex-col items-center text-center">
          <Clock className="w-8 h-8 mb-4 text-orange-400" />
          <h2 className="text-xl font-semibold mb-3 text-white">
            Orar de Funcționare
          </h2>
          <div className="text-gray-200 space-y-1">
            <p>Luni - Vineri: 10:00 - 24:00</p>
            <p>Sâmbătă - Duminică: 11:00 - 24:00</p>
          </div>
        </div>

        {/* Rezervari */}
        <div className="flex flex-col items-center text-center">
          <Phone className="w-8 h-8 mb-4 text-orange-400" />
          <h2 className="text-xl font-semibold mb-3 text-white">Rezervări</h2>
          <a
            href="tel:0722784000"
            className="text-gray-200 hover:text-orange-400 transition-colors"
          >
            0722 784 000
          </a>
        </div>

        {/* Meniu */}
        <div className="flex flex-col items-center text-center">
          <Book className="w-8 h-8 mb-4 text-orange-400" />
          <h2 className="text-xl font-semibold mb-3 text-white">
            Meniu Black Tulip
          </h2>
          <p className="text-gray-200 mb-4">
            Descoperă Deliciile Noastre Culinare și
            <br />
            Selecția Noastră de Vinuri Rafinate
          </p>
          <Link
            href="/meniu"
            className="text-orange-400 hover:text-orange-500 transition-colors font-medium"
          >
            Vezi meniul →
          </Link>
        </div>
      </div>
    </div>
  );
}

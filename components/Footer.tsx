import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black/80 text-white py-10 mt-12">
      <div className="container mx-auto px-8">
        {/* Structura Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
          {/* Adresa la stânga */}
          <div className="text-center sm:text-left flex-1 p-4">
            <p className="text-lg">Strada Libertății 1, Dej, jud. Cluj</p>
          </div>

          {/* Programul de funcționare în mijloc */}
          <div className="text-center sm:text-center flex-1 p-4">
            <div className="border-b-2 border-gray-200 ">
              <p className="text-lg">Luni-Joi: 09:00 - 23:00</p>
              <p className="text-lg">Vineri: 09:00 - 00:00</p>
              <p className="text-lg">Sâmbătă: 10:00 - 01:00</p>
              <p className="text-lg mb-4 sm:mb-8">Duminică: 10:00 - 00:00</p>
            </div>
            <div className="mt-4 sm:mt-8">
              <p className="text-md">
                Ultima comandă bucătărie : Luni - Joi : 22:00
              </p>
              <p className="text-md">Vineri și Duminică : 23:00</p>
              <p className="text-md">Sâmbătă : 23:30</p>
            </div>
          </div>

          {/* Rețele sociale la final */}
          <div className="flex justify-center sm:justify-end gap-6 flex-1 p-4">
            <Link
              href="https://www.instagram.com/terasablacktulip/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-8 h-8 hover:text-pink-500 transition-all duration-300" />
            </Link>

            <Link
              href="https://www.facebook.com/p/Terasa-Black-Tulip-100083790402834"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-8 h-8 hover:text-blue-600 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 p-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Terasa Black Tulip. Toate
            drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

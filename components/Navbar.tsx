"use client";

import { useState, useEffect } from "react";
import { Navlinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full relative flex items-center justify-between px-4 transition-all duration-300 ${
        isScrolled ? "py-4" : "left-0 z-50 bg-transparent py-6"
      }`}
    >
      {/* Logo poziționat la stânga */}
      <div className="ml-4 hidden xl:flex">
        <Image src={logo} alt="logoTerasa" className="w-20 sm:w-32" />
      </div>
      <div className="sm:hidden flex justify-center absolute top-2 left-1/2 transform -translate-x-1/2 ">
        <Image
          src={logo}
          alt="logoTerasa"
          className="w-64 h-auto p-8 opacity-50"
        />
      </div>
      {/* Navigation links poziționate central */}
      <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 gap-16">
        {Navlinks.map((navlink) => {
          const isActive = pathname === navlink.href;
          return (
            <Link
              key={navlink.href}
              href={navlink.href}
              className={`group relative ${isActive ? "text-orange-400" : ""}`}
            >
              <h1 className="text-lg transition-all duration-300 hover:text-orange-400">
                {navlink.label}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-px bg-current origin-center transform transition-all duration-300 ${
                    isActive
                      ? "scale-x-125"
                      : "scale-x-0 group-hover:scale-x-125"
                  }`}
                />
                <span
                  className={`absolute left-0 -top-1 w-full h-px bg-current origin-center transform transition-all duration-300 ${
                    isActive
                      ? "scale-x-125"
                      : "scale-x-0 group-hover:scale-x-125"
                  }`}
                />
              </h1>
            </Link>
          );
        })}
      </div>
      {/* Hamburger menu pentru mobile, în dreapta */}
      <div className="sm:hidden absolute top-9 right-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button>
              <Menu size={24} /> {/* Increased icon size */}
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-4 mt-8">
              {Navlinks.map((navlink) => (
                <Link
                  key={navlink.href}
                  href={navlink.href}
                  className={`text-lg ${
                    pathname === navlink.href ? "text-orange-400" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {navlink.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

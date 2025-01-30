"use client";

import { useState, useEffect } from "react";
import { Navlinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

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
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? "relative py-4"
          : "fixed     sm:top-10 left-0 z-50 bg-transparent py-6"
      }`}
    >
      {/* Navigation links for larger screens */}
      <div className="hidden sm:flex justify-center gap-16">
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

      {/* Hamburger menu for small screens */}
      <div className="sm:hidden absolute top-4 right-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-black/20">
              <Menu className="h-6 w-6" />
            </Button>
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

"use client";
import { MobileNav } from "@/components/Shared/Navbar/MobileNav";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white mt-4 px-4 py-2 border-b-neutral-200 border-b">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-row items-center justify-between lg:justify-center py-2 gap-4 md:gap-0">
          {/* Logo */}
          <div className="w-full md:w-52 text-left">
            <h1 className="text-2xl select-none font-semibold">Exclucive</h1>
          </div>
          {/* Links */}
          <div className="hidden lg:block flex-1 w-full px-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">
              <ul className="flex flex-wrap items-center justify-center md:justify-start space-x-4">
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "underline" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={pathname === "/contact" ? "underline" : ""}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={pathname === "/about" ? "underline" : ""}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-up"
                    className={pathname === "/sign-up" ? "underline" : ""}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full sm:w-[300px] h-9 px-3 py-2 bg-neutral-100 border rounded-md border-input focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                  <Search className="absolute top-1/2 right-3 -translate-y-1/2" />
                </div>
                <div className="flex items-center gap-4">
                  <Link href="/wishlist">
                    <Heart />
                  </Link>
                  <Link href="/cart">
                    <ShoppingCart />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* toggle mobile nav */}
          <button className="lg:hidden" onClick={toggleNav}>
            <Menu />
          </button>
          {/* Mobile */}
          <MobileNav isOpen={isOpen} toggleNav={toggleNav} />
        </div>
      </div>
    </nav>
  );
};

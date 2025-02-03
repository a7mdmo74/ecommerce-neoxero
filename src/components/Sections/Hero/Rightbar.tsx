"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Rightbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="pt-6 flex flex-wrap justify-center flex-row md:flex-col gap-2 pr-2 ">
      <div className="relative">
        <button
          className="flex md:w-full items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs sm:text-sm md:text-base"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(0);
          }}
        >
          <span>Woman&apos;s Fashion</span>
          <ChevronRight
            size={16}
            className={`cursor-pointer transition-transform ${
              activeDropdown === 0 ? "rotate-90" : ""
            }`}
          />
        </button>
        {activeDropdown === 0 && (
          <div className="absolute left-0 w-full bg-white shadow-lg rounded-md z-10 ml-4 mt-2 flex flex-col gap-2">
            <Link
              href="/"
              className="text-xs sm:text-sm md:text-base hover:bg-neutral-100 p-2 rounded-md"
            >
              Dresses
            </Link>
            <Link
              href="/"
              className="text-xs sm:text-sm md:text-base hover:bg-neutral-100 p-2 rounded-md"
            >
              Shoes
            </Link>
            <Link
              href="/"
              className="text-xs sm:text-sm md:text-base hover:bg-neutral-100 p-2 rounded-md"
            >
              Accessories
            </Link>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          className="flex md:w-full items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs sm:text-sm md:text-base"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(1);
          }}
        >
          <span>Men&apos;s Fashion</span>
          <ChevronRight
            size={16}
            className={`cursor-pointer transition-transform ${
              activeDropdown === 1 ? "rotate-90" : ""
            }`}
          />
        </button>
        {activeDropdown === 1 && (
          <div className="absolute left-0 w-full bg-white shadow-lg rounded-md z-10 ml-4 mt-2 flex flex-col gap-2">
            <Link
              href="/"
              className="text-xs sm:text-sm md:text-base hover:bg-neutral-100 p-2 rounded-md"
            >
              Shirts
            </Link>
            <Link
              href="/"
              className="text-xs sm:text-sm md:text-base hover:bg-neutral-100 p-2 rounded-md"
            >
              Pants
            </Link>
            <Link
              href="/"
              className="text-xs sm:text-sm md:text-base hover:bg-neutral-100 p-2 rounded-md"
            >
              Accessories
            </Link>
          </div>
        )}
      </div>

      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs sm:text-sm md:text-base"
      >
        Electronics
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs sm:text-sm md:text-base"
      >
        Medicine
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs sm:text-sm md:text-base"
      >
        Sports & Outdoor
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs sm:text-sm md:text-base"
      >
        Baby&apos;s Toys
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs sm:text-sm md:text-base"
      >
        Groceries & Pets
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs sm:text-sm md:text-base"
      >
        Health & Beauty
      </Link>
    </div>
  );
};

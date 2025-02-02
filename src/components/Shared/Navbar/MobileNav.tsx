import { cn } from "@/lib/utils";
import { Heart, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";

type MobileNavProps = {
  isOpen: boolean;
  toggleNav: () => void;
};
export const MobileNav = ({ isOpen, toggleNav }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "fixed top-[52px] min-h-[calc(100vh-52px)] w-2/3 py-4 bg-white z-50 shadow-md transition-all duration-300",
        isOpen ? "left-0" : "-left-full"
      )}
    >
      <div className="flex flex-col p-2 gap-12">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl select-none font-semibold">Exclucive</h1>
          <button onClick={toggleNav}>
            <X />
          </button>
        </div>
        <ul className="flex flex-col items-start gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </ul>
        <div className="flex flex-col items-start gap-4 md:gap-8 w-full md:w-auto">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full sm:w-[300px] h-9 px-3 py-2 bg-neutral-100 border rounded-md border-input focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Search className="absolute top-1/2 right-3 -translate-y-1/2" />
          </div>
          <div className="flex flex-col items-center gap-4">
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
  );
};

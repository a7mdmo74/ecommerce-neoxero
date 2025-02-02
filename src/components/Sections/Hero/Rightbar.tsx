import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const Rightbar = () => {
  return (
    <div className="pt-6 flex flex-wrap justify-center flex-row md:flex-col gap-2 pr-2">
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs md:text-base"
      >
        <span>Woman&apos;s Fashion</span>
        <ChevronRight size={16} />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs md:text-base"
      >
        <span>Men&apos;s Fashion</span>
        <ChevronRight size={16} />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs md:text-base"
      >
        Electronics
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs md:text-base"
      >
        Medicine
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs md:text-base"
      >
        Sports & Outdoor
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs md:text-base"
      >
        Baby&apos;s Toys
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs md:text-base"
      >
        Groceries & Pets
      </Link>
      <Link
        href="/"
        className="flex items-center justify-between hover:bg-neutral-100 p-2 rounded-md transition-colors text-xs md:text-base"
      >
        Health & Beauty
      </Link>
    </div>
  );
};

"use client";
import { CustomButton } from "@/components/Custom/CustomButton";
import { CustomTitleRed } from "@/components/Custom/CustomTitle";
import { OfferCount } from "@/components/Sections/TodayOffers/OfferCount";
import { ProductCard } from "@/components/Shared/Product/ProductCard";
import { products } from "@/lib/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export const TodayOffers = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 md:gap-16">
      <CustomTitleRed title="Today's Offers" />
      <div className="flex items-start w-full justify-between">
        <OfferCount />
        <div className="flex items-center gap-1">
          <button
            onClick={() => scroll("left")}
            className="bg-neutral-300 text-black p-2 rounded-full"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-neutral-300 text-black p-2 rounded-full"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex flex-row gap-4 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <CustomButton title="View All Products" />
      </div>
    </div>
  );
};

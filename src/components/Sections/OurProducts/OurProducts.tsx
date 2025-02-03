"use client";
import { ProductCard } from "@/components/Shared/Product/ProductCard";
import { products } from "@/lib/constants";
import { useState } from "react";

export const OurProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {products.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-red-700 text-white py-3 px-16 rounded-sm text-sm"
        >
          {showAll ? "View Less" : "View All Products"}
        </button>
      )}
    </div>
  );
};

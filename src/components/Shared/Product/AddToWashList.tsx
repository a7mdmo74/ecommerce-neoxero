"use client";
import { Heart } from "lucide-react";
import { toast } from "sonner";

export const AddToWashList = () => {
  return (
    <button
      className="absolute top-2 right-4 bg-white rounded-full p-1"
      onClick={() => toast("Added to wishlist")}
    >
      <Heart size={16} />
    </button>
  );
};

import { toast } from "sonner";

export const AddToCart = () => {
  return (
    <button
      className="w-full bg-black text-white py-3 rounded-sm text-sm"
      onClick={() => toast("Added to cart")}
    >
      Add To Cart
    </button>
  );
};

import { AddToCart } from "@/components/Shared/Product/AddToCart";
import { AddToWashList } from "@/components/Shared/Product/AddToWashList";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: {
    image: string;
    discount: number;
    title: string;
    price: number;
    oldPrice: number;
    rate: number;
  };
};

export const ProductCard = ({ product }: Props) => {
  const { image, discount, title, price, oldPrice, rate } = product;
  return (
    <Card className="max-w-[300px] space-y-4 shadow-none relative rounded-none border-none group">
      <CardHeader className="p-0 relative">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-52 object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute w-full bottom-0 transition-opacity">
          <AddToCart />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-2">
          <h2>{title}</h2>
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm text-red-700 font-semibold">
              ${price}
            </span>
            <span className="text-xs md:text-sm text-gray-500">
              ${oldPrice}
            </span>
          </div>
          {/* rate */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < rate
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs md:text-sm text-gray-500">(120)</span>
          </div>
        </div>
      </CardContent>
      <div className="absolute top-2 left-2 bg-red-700 text-white rounded-sm py-1 px-2">
        -{discount}%
      </div>
      <AddToWashList />
      <div className="absolute top-12 right-4 bg-white rounded-full p-1">
        <Link href="/product/1">
          <Eye size={16} />
        </Link>
      </div>
    </Card>
  );
};

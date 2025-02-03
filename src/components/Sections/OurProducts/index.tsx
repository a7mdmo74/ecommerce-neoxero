import { CustomTitle, CustomTitleRed } from "@/components/Custom/CustomTitle";
import { OurProducts } from "@/components/Sections/OurProducts/OurProducts";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Products = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <CustomTitleRed title="Our Products" />
      <div className="flex items-start w-full justify-between">
        <CustomTitle title="Explore Our Products" />
        <div className="flex items-center gap-1">
          <button className="bg-neutral-300 text-black p-2 rounded-full">
            <ArrowLeft />
          </button>
          <button className="bg-neutral-300 text-black p-2 rounded-full">
            <ArrowRight />
          </button>
        </div>
      </div>
      <OurProducts />
    </div>
  );
};

import { CustomButton } from "@/components/Custom/CustomButton";
import { CustomTitle, CustomTitleRed } from "@/components/Custom/CustomTitle";
import { ProductCard } from "@/components/Shared/Product/ProductCard";
import { products } from "@/lib/constants";
export const MonthOffer = () => {
  const monthProducts = products.slice(0, 4);
  return (
    <div className="flex flex-col gap-4 md:gap-16">
      <CustomTitleRed title="Month Offers" />
      <div className="flex items-start w-full justify-between">
        <CustomTitle title="Best Selling Products" />
        <CustomButton title="View All" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {monthProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

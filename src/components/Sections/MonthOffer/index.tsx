import { CustomButton } from "@/components/Custom/CustomButton";
import { CustomTitle, CustomTitleRed } from "@/components/Custom/CustomTitle";

export const MonthOffer = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-16">
      <CustomTitleRed title="Month Offers" />
      <div className="flex items-start w-full justify-between">
        <CustomTitle title="Best Selling Products" />
        <CustomButton title="View All" />
      </div>
    </div>
  );
};

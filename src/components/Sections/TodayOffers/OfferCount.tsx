import { CustomTitle } from "@/components/Custom/CustomTitle";

export const OfferCount = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 sm:gap-8 md:gap-16">
      <CustomTitle title="Flash Sale" />

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative">
          <span className="text-xs text-gray-500 absolute -translate-y-4">
            Days
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
            03
          </span>
        </div>
        <span className="text-lg sm:text-xl text-red-700 font-semibold">:</span>
        <div className="relative">
          <span className="text-xs text-gray-500 absolute -translate-y-4">
            Hours
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
            23
          </span>
        </div>
        <span className="text-lg sm:text-xl text-red-700 font-semibold">:</span>
        <div className="relative">
          <span className="text-xs text-gray-500 absolute -translate-y-4">
            Minutes
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
            19
          </span>
        </div>
        <span className="text-lg sm:text-xl text-red-700 font-semibold">:</span>
        <div className="relative">
          <span className="text-xs text-gray-500 absolute -translate-y-4">
            Seconds
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
            56
          </span>
        </div>
      </div>
    </div>
  );
};

import { CustomTitle, CustomTitleRed } from "@/components/Custom/CustomTitle";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  FaBatteryFull,
  FaCamera,
  FaGamepad,
  FaHeadphones,
  FaHeadphonesAlt,
  FaLaptop,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaHeadphones className="text-2xl md:text-3xl" />,
    title: "Headphones",
  },
  {
    icon: <FaBatteryFull className="text-2xl md:text-3xl" />,
    title: "Power Banks",
  },
  {
    icon: <FaGamepad className="text-2xl md:text-3xl" />,
    title: "Gaming Accessories",
  },
  {
    icon: <FaHeadphonesAlt className="text-2xl md:text-3xl" />,
    title: "Earbuds",
  },
  {
    icon: <FaCamera className="text-2xl md:text-3xl" />,
    title: "Cameras",
  },
  {
    icon: <FaLaptop className="text-2xl md:text-3xl" />,
    title: "Laptops",
  },
];
export const Categories = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <CustomTitleRed title="Categories" />
      <div className="flex items-start w-full justify-between">
        <CustomTitle title="Browse By Categories" />
        <div className="flex items-center gap-1">
          <button className="bg-neutral-300 text-black p-2 rounded-full">
            <ArrowLeft />
          </button>
          <button className="bg-neutral-300 text-black p-2 rounded-full">
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 border border-gray-300 px-4 py-8 space-y-4 rounded-md"
          >
            {category.icon}
            <h3 className="text-sm md:text-base text-center">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

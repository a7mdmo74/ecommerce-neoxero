import { Rightbar } from "@/components/Sections/Hero/Rightbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="flex flex-wrap w-full items-start justify-between lg:justify-center gap-4 md:gap-0">
      <div className="w-full md:w-52 border-b md:border-b-0 md:border-r border-neutral-300">
        <Rightbar />
      </div>
      <div className="flex-1 p-7">
        <div className="bg-black relative rounded-sm h-[345px] grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-start px-4 md:px-16 gap-4">
            <div className="flex items-center justify-center gap-4">
              <FaApple className="text-white text-4xl" />
              <span className="text-white/60 text-xs">Iphone 14 series</span>
            </div>
            <h1 className="text-4xl font-semibold max-w-[14rem] text-white">
              Up To 10% off Voucher
            </h1>
            <div className="flex items-center text-white">
              <Button variant="link" className="text-white underline pb-2">
                Shop Now
              </Button>
              <ArrowRight />
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="/hero.jpeg"
              alt="hero"
              width={200}
              height={200}
              className="object-contain w-72"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-red-600 border border-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

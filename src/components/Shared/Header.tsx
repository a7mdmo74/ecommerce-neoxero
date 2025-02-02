import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-black flex items-center justify-between p-2 text-white relative">
      <div className="flex items-center justify-center w-full flex-wrap gap-2 text-center">
        <p className="text-xs lg:text-base">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
        </p>
        <Button
          variant="link"
          className="hidden md:block text-white underline text-sm lg:text-base"
        >
          Shop Now
        </Button>
      </div>
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-4 lg:right-28">
        <Button variant="ghost" className="text-white text-sm lg:text-base">
          English
          <ChevronDown />
        </Button>
      </div>
    </header>
  );
};

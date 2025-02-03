"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const bannerItems = [
  {
    icon: <FaApple className="text-white text-4xl" />,
    subtitle: "Iphone 14 series",
    title: "Up To 10% off Voucher",
    image: "/banner1.jpeg",
  },
  {
    icon: <FaApple className="text-white text-4xl" />,
    subtitle: "Iphone 15 series",
    title: "Up To 15% off Voucher",
    image: "/banner1.jpeg",
  },
  {
    icon: <FaApple className="text-white text-4xl" />,
    subtitle: "Iphone 13 series",
    title: "Up To 20% off Voucher",
    image: "/banner1.jpeg",
  },
];

export const Banner = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex-1 p-4 md:p-7">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {bannerItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="bg-black relative rounded-sm h-[250px] md:h-[345px] grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-start px-4 md:px-16 gap-2 md:gap-4">
                  <div className="flex items-center justify-center gap-2 md:gap-4">
                    {item.icon}
                    <span className="text-white/60 text-[10px] md:text-xs">
                      {item.subtitle}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-4xl font-semibold max-w-[14rem] text-white">
                    {item.title}
                  </h1>
                  <div className="flex items-center text-white">
                    <Button
                      variant="link"
                      className="text-white underline pb-2 text-sm md:text-base"
                    >
                      Shop Now
                    </Button>
                    <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                </div>
                <div className="hidden md:flex justify-center w-full">
                  <Image
                    src={item.image}
                    alt="banner"
                    width={500}
                    height={500}
                    className="object-contain w-72 md:w-96"
                  />
                </div>
                <div className="absolute right-0 bottom-0 md:hidden">
                  <Image
                    src={item.image}
                    alt="banner"
                    width={200}
                    height={200}
                    className="object-contain w-48"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {bannerItems.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full ${
                current === index ? "bg-red-600" : "bg-neutral-300"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

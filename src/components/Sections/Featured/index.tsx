import { CustomTitle, CustomTitleRed } from "@/components/Custom/CustomTitle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Featured = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <CustomTitleRed title="Featured" />
      <div className="flex items-start w-full justify-between">
        <CustomTitle title="New Arrival" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1 row-span-2 p-4 bg-black relative">
          <div className="absolute bottom-8 left-5">
            <div className="flex flex-col items-start text-white">
              <div className="flex flex-col items-start justify-center gap-2">
                <h1 className="text-xl font-bold">PlayStation 5</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
              <Button variant="link" className="underline pb-1 px-0 text-white">
                Shop Now
              </Button>
            </div>
          </div>
          <Image
            src="/featured.png"
            alt="Featured 1"
            width={500}
            height={500}
            className="object-contain w-full h-96"
          />
        </div>
        <div className="col-span-1 grid lg:grid-rows-2 gap-4">
          <div className="row-span-1 p-4 bg-black">
            <div className="flex items-end justify-between">
              <div className="flex flex-col items-start text-white">
                <div className="flex flex-col items-start justify-center gap-2">
                  <h1 className="text-xl font-bold">Woman&apos;s Collection</h1>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
                <Button
                  variant="link"
                  className="underline pb-1 px-0 text-white"
                >
                  Shop Now
                </Button>
              </div>
              <div className="flex items-end">
                <Image
                  src="/featured2.png"
                  alt="Featured 2"
                  width={500}
                  height={500}
                  className="object-contain w-full h-48"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-black relative">
              <div className="absolute bottom-8 left-5">
                <div className="flex flex-col items-start text-white">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h1 className="text-xl font-bold">Speakers</h1>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet, consectetur.
                    </p>
                  </div>
                  <Button
                    variant="link"
                    className="underline pb-1 px-0 text-white"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
              <Image
                src="/featured3.png"
                alt="Featured 3"
                width={500}
                height={500}
                className="object-contain w-full h-48"
              />
            </div>
            <div className="p-4 bg-black relative">
              <div className="absolute bottom-8 left-5">
                <div className="flex flex-col items-start text-white">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h1 className="text-xl font-bold">Perfume</h1>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet, consectetur.
                    </p>
                  </div>
                  <Button
                    variant="link"
                    className="underline pb-1 px-0 text-white"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
              <Image
                src="/featured4.png"
                alt="Featured 4"
                width={500}
                height={500}
                className="object-contain w-full h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

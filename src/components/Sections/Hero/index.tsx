import { Banner } from "@/components/Sections/Hero/Banner";
import { Rightbar } from "@/components/Sections/Hero/Rightbar";

export const Hero = () => {
  return (
    <div className="flex flex-wrap w-full items-start justify-between lg:justify-center gap-4 md:gap-0">
      <div className="w-full md:w-52 border-b md:border-b-0 md:border-r border-neutral-300">
        <Rightbar />
      </div>
      <Banner />
    </div>
  );
};

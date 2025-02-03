import { Categories } from "@/components/Sections/Category";
import { Featured } from "@/components/Sections/Featured";
import { GoTop } from "@/components/Sections/GoTop";
import { Hero } from "@/components/Sections/Hero";
import { MonthOffer } from "@/components/Sections/MonthOffer";
import { Music } from "@/components/Sections/Music";
import { Products } from "@/components/Sections/OurProducts";
import { TodayOffers } from "@/components/Sections/TodayOffers";
import WhyUs from "@/components/Sections/WhyUs";

export default function Home() {
  return (
    <main className="flex flex-col max-w-7xl px-4 xl:px-0 gap-8 md:gap-16 mx-auto relative">
      <Hero />
      <TodayOffers />
      <div className="w-full bg-neutral-300" style={{ height: "1px" }} />
      <Categories />
      <div className="w-full bg-neutral-300" style={{ height: "1px" }} />
      <MonthOffer />
      <div className="w-full bg-neutral-300" style={{ height: "1px" }} />
      <Music />
      <div className="w-full bg-neutral-300" style={{ height: "1px" }} />
      <Products />
      <Featured />
      <WhyUs />
      <GoTop />
    </main>
  );
}

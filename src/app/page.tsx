import { Categories } from "@/components/Sections/Category";
import { Hero } from "@/components/Sections/Hero";
import { MonthOffer } from "@/components/Sections/MonthOffer";
import { TodayOffers } from "@/components/Sections/TodayOffers";

export default function Home() {
  return (
    <main className="flex flex-col max-w-8xl gap-8 md:gap-16 mx-auto">
      <Hero />
      <TodayOffers />
      <div className="w-full bg-neutral-300" style={{ height: "1px" }} />
      <Categories />
      <div className="w-full bg-neutral-300" style={{ height: "1px" }} />
      <MonthOffer />
      <div className="w-full bg-neutral-300" style={{ height: "1px" }} />
    </main>
  );
}

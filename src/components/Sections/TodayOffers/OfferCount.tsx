import { CustomTitle } from "@/components/Custom/CustomTitle";
import { useEffect, useState } from "react";

interface OfferCountProps {
  initialTime: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const OfferCount = ({ initialTime }: OfferCountProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }

        const newTime = { ...prevTime };

        if (newTime.seconds > 0) {
          newTime.seconds -= 1;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes -= 1;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours -= 1;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days -= 1;
              }
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 sm:gap-8 md:gap-16">
      <CustomTitle title="Flash Sale" />

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative">
          <span className="text-xs text-gray-500 absolute -translate-y-4">
            Days
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="text-lg sm:text-xl text-red-700 font-semibold">:</span>
        <div className="relative">
          <span className="text-xs text-gray-500 absolute -translate-y-4">
            Hours
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="text-lg sm:text-xl text-red-700 font-semibold">:</span>
        <div className="relative">
          <span className="text-xs text-gray-500 absolute -translate-y-4">
            Minutes
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="text-lg sm:text-xl text-red-700 font-semibold">:</span>
        <div className="relative">
          <span className="text-xs text-gray-500 absolute -translate-y-4">
            Seconds
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

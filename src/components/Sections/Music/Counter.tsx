"use client";
import React, { useState, useEffect } from "react";

interface CounterProps {
  timeLeft: {
    hours: number;
    days: number;
    minutes: number;
    seconds: number;
  };
}

export const Counter = ({ timeLeft: initialTimeLeft }: CounterProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                clearInterval(timer);
                return prevTime;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="bg-white text-xs text-black rounded-full flex flex-col items-center justify-center w-12 h-12">
        <p>{String(timeLeft.hours).padStart(2, "0")}</p>
        <span>Hours</span>
      </div>
      <div className="bg-white text-xs text-black rounded-full flex flex-col items-center justify-center w-12 h-12">
        <p>{String(timeLeft.days).padStart(2, "0")}</p>
        <span>Days</span>
      </div>
      <div className="bg-white text-xs text-black rounded-full flex flex-col items-center justify-center w-12 h-12">
        <p>{String(timeLeft.minutes).padStart(2, "0")}</p>
        <span>Minutes</span>
      </div>
      <div className="bg-white text-xs text-black rounded-full flex flex-col items-center justify-center w-12 h-12">
        <p>{String(timeLeft.seconds).padStart(2, "0")}</p>
        <span>Sec</span>
      </div>
    </div>
  );
};

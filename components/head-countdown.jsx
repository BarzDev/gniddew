"use client";
import { useEffect, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 56,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        let { days, hours, minutes, seconds } = prevCountdown;

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
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);
  // console.log(countdown);
  return (
    <div className="flex sm:gap-5 gap-2 text-center justify-center">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-pink-500 text-white">
        <span className="countdown font-mono sm:text-5xl text-3xl">
          {countdown.days}
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-pink-500 text-white">
        <span className="countdown font-mono sm:text-5xl text-3xl">
          {countdown.hours}
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-pink-500 text-white">
        <span className="countdown font-mono sm:text-5xl text-3xl">
          {countdown.minutes}
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-pink-500 text-white">
        <span className="countdown font-mono sm:text-5xl text-3xl ">
          {countdown.seconds}
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;

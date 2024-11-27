"use client";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "./ui/AnimatedNumber";

const HomeDataCard = ({ title, number }: { title: string; number: number }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(number);
  }, [number]);

  return (
    <div className="flex flex-col justify-between h-full max-h-[150px]">
      <h2 className="text-2xl font-bold mb-5 md:text-3xl lg:text-xl xl:text-2xl">
        {title}
      </h2>
      <AnimatedNumber
        className="inline-flex items-center font-mono text-4xl md:text-6xl lg:text-5xl font-bold"
        springOptions={{
          bounce: 0,
          duration: 1000,
        }}
        value={value}
      />
    </div>
  );
};

export default HomeDataCard;

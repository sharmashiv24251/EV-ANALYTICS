import React, { useMemo } from "react";
import EV_DATA from "@/data";
import HomeDataCard from "@/components/HomeDataCard";
import { calculateTotalDistance } from "@/lib/utils";
import HomeChartContainer from "@/components/HomeChartContainer";
import Link from "next/link";
const Page = () => {
  const totalDistance = useMemo(() => {
    return calculateTotalDistance(EV_DATA);
  }, [EV_DATA]);

  return (
    <div className="lg:p-10 2xl:px-20 p-5 lg:h-screen lg:min-h-[800px]">
      <div className="grid h-full grid-cols-2 grid-rows-7 gap-5 lg:grid-cols-4 lg:grid-rows-9">
        <div className="grid-item lg:row-span-2 flex items-center">
          <HomeDataCard title="Number Of EVs" number={EV_DATA.length} />
        </div>

        <div className="grid-item lg:col-start-1 lg:row-span-2 lg:row-start-3 flex items-center">
          <HomeDataCard title="Total Distance (Km)" number={totalDistance} />
        </div>

        <Link
          href={"/chart/parallel"}
          className="grid-item col-span-2 row-span-2 lg:col-span-3 lg:col-start-2 lg:row-span-4 lg:row-start-1"
        >
          <HomeChartContainer title="Parallel Coordinates" type="parallel" />
        </Link>
        <Link
          href={"/chart/scatter"}
          className="grid-item col-span-2 row-span-2 row-start-4 lg:col-span-2 lg:row-span-5 lg:row-start-5"
        >
          <HomeChartContainer title="Scatter Chart" type="scatter" />
        </Link>
        <Link
          href={"/chart/heatmap"}
          className="grid-item col-span-2 row-span-2 row-start-6 h-96 lg:col-span-2 lg:col-start-3 lg:row-span-5 lg:row-start-5 lg:h-auto"
        >
          <HomeChartContainer title="Heat Map" type="heatmap" />
        </Link>
      </div>
    </div>
  );
};

export default Page;

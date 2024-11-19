import { ChartType } from "@/types";
import Chart from "./Chart";
import Link from "next/link";

const HomeChartCard = ({ title, type }: { title: string; type: ChartType }) => {
  return (
    <div className="flex flex-col h-full ">
      <h2 className="text-2xl font-bold mb-5 md:text-3xl lg:text-xl xl:text-2xl">
        {title}
      </h2>
      <Link href={`/chart/${type}`}>
        <Chart type={type} />
      </Link>
    </div>
  );
};

export default HomeChartCard;

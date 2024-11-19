"use client";

import { notFound } from "next/navigation";
import Chart from "@/components/Chart";
import { ChartType, Filters } from "@/types";
import FilterComponent from "@/components/FilterComponent";
import { useState } from "react";

export default function ChartPage({
  params: { type },
}: {
  params: { type: string };
}) {
  const [filters, setFilters] = useState<Filters>({});

  if (!isValidChartType(type)) {
    notFound();
  }

  return (
    <div className="px-4 pt-4 sm:pt-10">
      <h1 className="text-2xl font-bold mb-4">Chart Page</h1>
      <FilterComponent setFilters={setFilters} />
      <Chart filter={filters} type={type as ChartType} />
    </div>
  );
}

function isValidChartType(type: string): type is ChartType {
  return ["scatter", "heatmap", "parallel"].includes(type);
}

// export function generateStaticParams() {
//   return [{ type: "scatter" }, { type: "heatmap" }, { type: "parallel" }];
// }

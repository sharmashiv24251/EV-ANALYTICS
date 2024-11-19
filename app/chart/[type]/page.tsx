"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import Chart from "@/components/Chart";
import { ChartType, Filters } from "@/types";
import FilterComponent from "@/components/FilterComponent";
import { useState } from "react";

export default function ChartPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = use(params);
  const [filters, setFilters] = useState<Filters>({});

  if (!isValidChartType(type)) {
    notFound();
  }

  return (
    <div className="px-4 pt-4 sm:pt-10">
      <h1 className="text-2xl font-bold mb-4">{type} chart</h1>
      <div className="flex flex-col gap-4 md:flex-row md:items-start max-md:items-center">
        <FilterComponent setFilters={setFilters} />
        <Chart filter={filters} type={type as ChartType} />
      </div>
    </div>
  );
}

function isValidChartType(type: string): type is ChartType {
  return ["scatter", "heatmap", "parallel"].includes(type);
}

// export function generateStaticParams() {
//   return [{ type: "scatter" }, { type: "heatmap" }, { type: "parallel" }];
// }

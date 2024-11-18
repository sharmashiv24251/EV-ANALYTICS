"use client";
import Chart from "@/components/Chart";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";

const allowedChartTypes = ["heatmap", "parallel", "scatter"];

export default function ChartPage() {
  const [filters, setFilters] = useState({});
  const params = useParams();
  const chartType = params.type as string;

  if (!allowedChartTypes.includes(chartType)) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold mb-4">
        EV Fleet Visualization
      </h1>
      <p className="mb-4">Filters will go here</p>
      <Chart type={chartType} filters={""} />
    </main>
  );
}

// import { EVData } from "@/types";
// import React from "react";

// const Heatmap = ({ data }: { data?: EVData[] }) => {
//   return <div>heatmap</div>;
// };

// export default React.memo(Heatmap);
"use client";
"use client";
import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { EVData } from "@/types";

const CorrelationHeatmap = ({ data }: { data: EVData[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries[0]) return;
      const { width } = entries[0].contentRect;
      setDimensions({
        width: width,
        height: width, // Keep it square
      });
    });

    if (containerRef.current) resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!data.length || !svgRef.current) return;

    const margin = { top: 50, right: 50, bottom: 80, left: 80 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    const xVariable = "distance_traveled";
    const yVariable = "charging_time";
    const colorVariable = "average_speed";

    const xValues = data.map((d) => d[xVariable] as number);
    const yValues = data.map((d) => d[yVariable] as number);
    const colorValues = data.map((d) => d[colorVariable] as number);

    const addBuffer = (extent: [number, number]) =>
      extent[0] === extent[1] ? [extent[0] - 1, extent[1] + 1] : extent;

    const xExtent = addBuffer(d3.extent(xValues) as [number, number]);
    const yExtent = addBuffer(d3.extent(yValues) as [number, number]);
    const colorExtent = addBuffer(d3.extent(colorValues) as [number, number]);

    const xScale = d3.scaleLinear().domain(xExtent).range([0, width]);
    const yScale = d3.scaleLinear().domain(yExtent).range([height, 0]);
    const colorScale = d3
      .scaleLinear<string>()
      .domain(colorExtent)
      .range(["#9d9fff", "#6d72f6", "#48fff4"]);

    const binsX = d3.bin().domain(xExtent).thresholds(10)(xValues);

    const binsY = d3.bin().domain(yExtent).thresholds(10)(yValues);

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Generate heatmap cells
    const gap = 2; // Gap between cells
    binsX.forEach((binX) => {
      binsY.forEach((binY) => {
        const filteredData = data.filter(
          (d) =>
            d[xVariable] >= binX.x0! &&
            d[xVariable] < binX.x1! &&
            d[yVariable] >= binY.x0! &&
            d[yVariable] < binY.x1!
        );

        const avgColorValue =
          filteredData.length > 0
            ? d3.mean(filteredData, (d) => d[colorVariable]) ?? 0
            : 0;

        const cellWidth = xScale(binX.x1!) - xScale(binX.x0!) - gap;
        const cellHeight = yScale(binY.x0!) - yScale(binY.x1!) - gap;

        svg
          .append("rect")
          .attr("x", xScale(binX.x0!) + gap / 2)
          .attr("y", yScale(binY.x1!) + gap / 2) // Flip Y-axis placement
          .attr("width", cellWidth)
          .attr("height", cellHeight)
          .attr("fill", colorScale(avgColorValue))
          .attr("rx", 6) // Rounded corners
          .attr("ry", 6) // Rounded corners
          .attr("stroke", "#1e1e30") // Darker stroke for gaps
          .attr("stroke-width", 1);
      });
    });

    // X-Axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).ticks(10))
      .selectAll("text")
      .style("fill", "white");

    // Y-Axis
    svg
      .append("g")
      .call(d3.axisLeft(yScale).ticks(10))
      .selectAll("text")
      .style("fill", "white");

    // Labels
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + 50)
      .style("text-anchor", "middle")
      .style("fill", "white")
      .text("Distance Traveled");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -50)
      .attr("x", -height / 2)
      .style("text-anchor", "middle")
      .style("fill", "white")
      .text("Charging Time");
  }, [data, dimensions]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default React.memo(CorrelationHeatmap);

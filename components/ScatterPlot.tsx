// import { EVData } from "@/types";
// import React from "react";

// const ScatterPlot = ({ data }: { data: EVData[] }) => {
//   return <div>ScatterPlot</div>;
// };

// export default React.memo(ScatterPlot);
"use client";
import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { EVData } from "@/types";

const ScatterPlot = ({ data }: { data: EVData[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: width,
          height: width * 0.6, // Maintain 16:10 aspect ratio
        });
      }
    };

    // Initial sizing
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up SVG dimensions
    const margin = { top: 20, right: 20, bottom: 50, left: 60 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Background
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#34344e");

    // Scales
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.distance_traveled) || 0])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.charging_time) || 0])
      .range([height, 0]);

    const sizeScale = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.average_speed) || 0,
        d3.max(data, (d) => d.average_speed) || 0,
      ])
      .range([5, 20]);

    // Color scale for regions
    const colorScale = d3
      .scaleOrdinal()
      .domain(["North", "East", "West", "South"])
      .range(["#9d9fff", "#6d72f6", "#48fff4", "yellow"]);

    // X-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSizeOuter(0))
      .selectAll("text, line, path")
      .style("color", "white");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom)
      .style("text-anchor", "middle")
      .style("fill", "white")
      .text("Distance Traveled");

    // Y-axis
    svg
      .append("g")
      .call(d3.axisLeft(yScale).tickSizeOuter(0))
      .selectAll("text, line, path")
      .style("color", "white");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .text("Charging Time");

    // Scatter plot points
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.distance_traveled))
      .attr("cy", (d) => yScale(d.charging_time))
      .attr("r", (d) => sizeScale(d.average_speed))
      .attr("fill", (d) => colorScale(d.region) as string)
      .attr("opacity", 0.7)
      .append("title")
      .text(
        (d) => `Vehicle: ${d.vehicle_id}
Region: ${d.region}
Distance: ${d.distance_traveled}
Charging Time: ${d.charging_time}
Avg Speed: ${d.average_speed}`
      );
  }, [data, dimensions]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
    >
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default React.memo(ScatterPlot);

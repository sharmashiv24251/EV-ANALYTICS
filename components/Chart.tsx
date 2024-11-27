import { ChartType, EVData, Filters } from "@/types";
import EV_DATA from "@/data";
import ScatterPlot from "./ScatterPlot";
import Heatmap from "./Heatmap";
import Parallel from "./Parallel";

const Chart = ({ type, filter }: { type: ChartType; filter?: Filters }) => {
  const filteredData = filterData(EV_DATA, filter || {});

  if (type === "scatter") {
    return (
      <div className="h-[200px] overflow-y-scroll">
        {/* this div is tempporary */}
        <ScatterPlot data={filteredData} />
      </div>
    );
  } else if (type === "heatmap") {
    return (
      <div className="h-[200px] overflow-y-scroll">
        {/* this div is tempporary */}
        <Heatmap data={filteredData} />
      </div>
    );
  } else if (type === "parallel") {
    return (
      <div className="h-[200px] overflow-y-scroll">
        {/* this div is tempporary */}
        <Parallel data={filteredData} />
      </div>
    );
  }

  return null;
};

function filterData(data: EVData[], filters: Filters): EVData[] {
  return data.filter((item) => {
    if (filters.vehicle_id && item.vehicle_id !== filters.vehicle_id)
      return false;
    if (filters.region && item.region !== filters.region) return false;
    if (filters.date && item.date !== filters.date) return false;
    return true;
  });
}

export default Chart;

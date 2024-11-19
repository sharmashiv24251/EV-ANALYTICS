import { ChartType, EVData, Filters } from "@/types";
import EV_DATA from "@/data";
import ScatterPlot from "./ScatterPlot";
import Heatmap from "./Heatmap";
import Parallel from "./Parallel";

const Chart = ({ type, filter }: { type: ChartType; filter?: Filters }) => {
  const filteredData = filterData(EV_DATA, filter || {});

  if (type === "scatter") {
    return <ScatterPlot data={filteredData} />;
  } else if (type === "heatmap") {
    return <Heatmap data={filteredData} />;
  } else if (type === "parallel") {
    return <Parallel data={filteredData} />;
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

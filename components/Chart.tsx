import EV_DATA from "@/data";
import Parallel from "./Parallel";
import ScatterChart from "./ScatterChart";
import Heatmap from "./Heatmap";
const Chart = ({ type, filters }: { type: string; filters?: any }) => {
  if (type === "parallel") {
    return <Parallel />;
  } else if (type === "scatter") {
    return <ScatterChart />;
  } else if (type === "heatmap") {
    return <Heatmap />;
  }
};

export default Chart;

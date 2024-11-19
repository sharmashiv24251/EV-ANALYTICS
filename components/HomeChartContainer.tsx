import Chart from "./Chart";

const HomeChartContainer = ({
  title,
  type,
}: {
  title: string;
  type: string;
}) => {
  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-5 md:text-3xl lg:text-xl xl:text-2xl">
        {title}
      </h2>
      <Chart type={type} />
    </div>
  );
};

export default HomeChartContainer;

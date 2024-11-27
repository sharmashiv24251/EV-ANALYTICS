import { EVData } from "@/types";
import React from "react";

const Parallel = ({ data }: { data?: EVData[] }) => {
  return (
    <div className="">
      {data?.map((ev) => (
        <div key={crypto.randomUUID()} className="flex gap-2">
          <h1>{ev.vehicle_id}</h1>
          <h1>{ev.distance_traveled}</h1>
          <h1>{ev.region}</h1>
          <h1>{ev.date}</h1>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Parallel);

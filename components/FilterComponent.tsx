import React from "react";
import { Filters } from "@/types";

const FilterComponent = ({
  setFilters,
}: {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="mb-4">
      <select
        name="vehicle_id"
        onChange={handleFilterChange}
        className="mr-2 p-2 border rounded"
      >
        <option value="">All Vehicles</option>
        <option value="EV001">EV001</option>
        <option value="EV002">EV002</option>
        <option value="EV003">EV003</option>
        <option value="EV004">EV004</option>
        <option value="EV005">EV005</option>
      </select>
      <select
        name="region"
        onChange={handleFilterChange}
        className="mr-2 p-2 border rounded"
      >
        <option value="">All Regions</option>
        <option value="North">North</option>
        <option value="East">East</option>
        <option value="West">West</option>
        <option value="South">South</option>
      </select>
      <input
        type="date"
        name="date"
        onChange={(e) => handleFilterChange(e as any)}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default FilterComponent;

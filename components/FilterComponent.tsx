"use client";

import React, { useState } from "react";
import { Filters } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";

const purpleBgClass = "bg-[#4b4da6] w-[120px]";

const FilterComponent = ({
  setFilters,
}: {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [vehicleId, setVehicleId] = useState<string>("all");
  const [region, setRegion] = useState<string>("all");

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value === "all" ? "" : value,
    }));
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    handleFilterChange(
      "date",
      selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""
    );
  };

  const clearDate = () => {
    setDate(undefined);
    handleFilterChange("date", "");
  };

  const clearAllFilters = () => {
    setDate(undefined);
    setVehicleId("all");
    setRegion("all");
    setFilters({});
  };

  return (
    <div className="flex flex-col gap-4 bg-[#1f1f31] rounded-xl p-4 w-full md:max-w-[300px]">
      {/* Vehicle Selection */}
      <div className="flex gap-4">
        <div className="flex flex-col space-y-1">
          <Label htmlFor="vehicle-select" className="text-sm">
            Vehicle
          </Label>
          <Select
            value={vehicleId}
            onValueChange={(value) => {
              setVehicleId(value);
              handleFilterChange("vehicle_id", value);
            }}
          >
            <SelectTrigger
              id="vehicle-select"
              className={`h-10 ${purpleBgClass}`}
            >
              <SelectValue placeholder="All Vehicles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Vehicles</SelectItem>
              <SelectItem value="EV001">EV001</SelectItem>
              <SelectItem value="EV002">EV002</SelectItem>
              <SelectItem value="EV003">EV003</SelectItem>
              <SelectItem value="EV004">EV004</SelectItem>
              <SelectItem value="EV005">EV005</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-1">
          <Label htmlFor="region-select" className="text-sm">
            Region
          </Label>
          <Select
            value={region}
            onValueChange={(value) => {
              setRegion(value);
              handleFilterChange("region", value);
            }}
          >
            <SelectTrigger
              id="region-select"
              className={`h-10 ${purpleBgClass}`}
            >
              <SelectValue placeholder="All Regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="North">North</SelectItem>
              <SelectItem value="East">East</SelectItem>
              <SelectItem value="West">West</SelectItem>
              <SelectItem value="South">South</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Date Picker */}
      <div className="flex flex-col space-y-1">
        <Label className="text-sm">Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`h-10 ${purpleBgClass} w-full justify-start text-left font-normal`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateChange}
              initialFocus
            />
            <div className="p-2 border-t">
              <Button
                variant="ghost"
                className="w-full justify-center"
                onClick={clearDate}
              >
                Clear Date
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Region Selection */}

      {/* Clear All Filters Button */}
      <div>
        <Button
          variant="outline"
          className={`h-10 ${purpleBgClass} w-full`}
          onClick={clearAllFilters}
        >
          <X className="mr-2 h-4 w-4" />
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterComponent;

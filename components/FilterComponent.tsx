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
import { CalendarIcon, Filter, X } from "lucide-react";
import { format } from "date-fns";

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
    <div className="bg-[#1f1f31] rounded-2xl p-4 w-full sm:max-w-[360px] shadow-xl border border-[#4b4da6]/20 transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center mb-4 pb-3 border-b border-[#4b4da6]/30 max-md:hidden">
        <Filter className="mr-2 text-[#4b4da6]" />
        <h3 className="text-lg font-semibold text-white">Filter Options</h3>
      </div>

      <div className="space-y-4">
        {/* Vehicle and Region Selection */}
        <div className="flex gap-4">
          <div className="flex-1 space-y-2">
            <Label className="text-sm text-gray-300 max-md:hidden">
              Vehicle
            </Label>
            <Select
              value={vehicleId}
              onValueChange={(value) => {
                setVehicleId(value);
                handleFilterChange("vehicle_id", value);
              }}
            >
              <SelectTrigger className="bg-[#4b4da6] text-white hover:bg-[#4b4da6]/90 focus:ring-2 focus:ring-[#4b4da6]/50">
                <SelectValue placeholder="Select Vehicle" />
              </SelectTrigger>
              <SelectContent className="bg-[#1f1f31] border-[#4b4da6]/30">
                <SelectItem value="all" className="hover:bg-[#4b4da6]/20">
                  All Vehicles
                </SelectItem>
                <SelectItem value="EV001" className="hover:bg-[#4b4da6]/20">
                  EV001
                </SelectItem>
                <SelectItem value="EV002" className="hover:bg-[#4b4da6]/20">
                  EV002
                </SelectItem>
                <SelectItem value="EV003" className="hover:bg-[#4b4da6]/20">
                  EV003
                </SelectItem>
                <SelectItem value="EV004" className="hover:bg-[#4b4da6]/20">
                  EV004
                </SelectItem>
                <SelectItem value="EV005" className="hover:bg-[#4b4da6]/20">
                  EV005
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 space-y-2">
            <Label className="text-sm text-gray-300 max-md:hidden">
              Region
            </Label>
            <Select
              value={region}
              onValueChange={(value) => {
                setRegion(value);
                handleFilterChange("region", value);
              }}
            >
              <SelectTrigger className="bg-[#4b4da6] text-white hover:bg-[#4b4da6]/90 focus:ring-2 focus:ring-[#4b4da6]/50">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent className="bg-[#1f1f31] border-[#4b4da6]/30">
                <SelectItem value="all" className="hover:bg-[#4b4da6]/20">
                  All Regions
                </SelectItem>
                <SelectItem value="North" className="hover:bg-[#4b4da6]/20">
                  North
                </SelectItem>
                <SelectItem value="East" className="hover:bg-[#4b4da6]/20">
                  East
                </SelectItem>
                <SelectItem value="West" className="hover:bg-[#4b4da6]/20">
                  West
                </SelectItem>
                <SelectItem value="South" className="hover:bg-[#4b4da6]/20">
                  South
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Date Picker and Clear Filters */}
        <div className="flex gap-4 md:flex-col">
          <div className="flex-1 space-y-2">
            <Label className="text-sm text-gray-300 max-md:hidden">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full bg-[#4b4da6] text-white hover:bg-[#4b4da6]/90 focus:ring-2 focus:ring-[#4b4da6]/50"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    format(date, "MMM dd yyyy")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-[#1f1f31] border-[#4b4da6]/30">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  initialFocus
                  className="text-white"
                />
                <div className="p-2 border-t border-[#4b4da6]/30">
                  <Button
                    variant="ghost"
                    className="w-full text-white hover:bg-[#4b4da6]/20"
                    onClick={clearDate}
                  >
                    Clear Date
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex-1 max-md:self-end">
            <Button
              variant="outline"
              className="w-full bg-[#4b4da6] text-white hover:bg-[#4b4da6]/90 focus:ring-2 focus:ring-[#4b4da6]/50"
              onClick={clearAllFilters}
            >
              <X className="mr-2 h-4 w-4" />
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { locationOptions, pickupLocationOptions } from "./data";

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select label="Select a location" className="max-w-xs">
        {locationOptions.map((location) => (
          <SelectItem key={location.value} value={location.value}>
            {location.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

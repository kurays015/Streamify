"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectOptions from "./SelectOptions";

export default function ReusableSelect({ info, setQueryParams }) {
  return (
    <Select onValueChange={value => setQueryParams(value)}>
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue
          placeholder={`Select ${
            typeof info[0] === "number" ? "year" : "type"
          }`}
        />
      </SelectTrigger>
      <SelectContent
        ref={ref => {
          if (!ref) return;
          ref.ontouchstart = e => {
            e.preventDefault();
          };
        }}
      >
        <SelectGroup>
          <SelectOptions info={info} />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

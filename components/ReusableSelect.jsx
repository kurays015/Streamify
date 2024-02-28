import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectOptions from "./SelectOptions";

export default function ReusableSelect({
  info,
  setFilteredEpisodes,
  setQueryParams,
}) {
  React.useEffect(() => {
    setFilteredEpisodes && setFilteredEpisodes([]);
  }, []);

  return (
    <Select
      onValueChange={value => {
        if (info.type === "TV Series") {
          setFilteredEpisodes && setFilteredEpisodes(value.episodes);
        } else {
          setQueryParams && setQueryParams(value);
        }
      }}
    >
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue placeholder={!info.seasons ? "Select type" : "Season"} />
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

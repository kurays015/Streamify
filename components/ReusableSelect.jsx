import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SeasonSelectButton from "./SeasonSelectButton";

export default function ResusableSelect({ info, setFilteredEpisodes }) {
  React.useEffect(() => {
    setFilteredEpisodes && setFilteredEpisodes([]);
  }, []);

  return (
    <Select
      onValueChange={value => {
        if (info.type === "TV Series") {
          setFilteredEpisodes && setFilteredEpisodes(value.episodes);
        }
      }}
    >
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue placeholder={"Season"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SeasonSelectButton info={info} />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
